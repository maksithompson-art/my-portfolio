'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...tool]]/page.tsx` route
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
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Contenuti')
          .items([
            // Questo crea la lista trascinabile per i tuoi Progetti
            orderableDocumentListDeskItem({
              type: 'project',
              title: 'Ordina Progetti',
              S,
              context,
            }),
            // Questo mostra i progetti normalmente (opzionale)
            ...S.documentTypeListItems().filter(
              (item) => item.getId() !== 'project'
            ),
          ]),
    }),
    visionTool(),
  ],
  schema: schema,
})