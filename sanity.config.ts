'use client'

/**
 * This configuration is used for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Importiamo le variabili, ma sotto definiremo l'ID corretto con la "l"
import {apiVersion, dataset as envDataset, projectId as envProjectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

export default defineConfig({
  basePath: '/studio',
  // USIAMO L'ID CORRETTO CON LA "L" (l)
  projectId: 'rq3pakl5', 
  dataset: 'production',
  
  schema,
  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Contenuti')
          .items([
            // Lista trascinabile per i Progetti
            orderableDocumentListDeskItem({
              type: 'project',
              title: 'Ordina Progetti',
              S,
              context,
            }),
            // Filtra gli altri documenti per non duplicare la voce Progetti
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== 'project'
            ),
          ]),
    }),
    visionTool(),
  ],
})