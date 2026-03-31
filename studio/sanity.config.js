import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Maksi Portfolio',

  projectId: 'od3ifgtn',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenuti')
          .items([
            S.listItem()
              .title('3D Render')
              .icon(() => '🎲')
              .child(
                S.documentList()
                  .title('Progetti 3D Render')
                  .filter('_type == "project" && category == "3D Render"')
              ),
            S.listItem()
              .title('Fotografia')
              .icon(() => '📷')
              .child(
                S.documentList()
                  .title('Progetti Fotografia')
                  .filter('_type == "project" && category == "Fotografia"')
              ),
            S.divider(),
            S.listItem()
              .title('Tutti i Progetti')
              .child(S.documentTypeList('project').title('Tutti i Progetti')),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
