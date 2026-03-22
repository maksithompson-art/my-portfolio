'use client'

/**
 * This configuration is used for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Riferimento allo schema (una sola volta!)
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