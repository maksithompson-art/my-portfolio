import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Progetti Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo del Progetto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoria Principale',
      type: 'string',
      options: {
        list: [
          { title: 'Web & App', value: 'web' },
          { title: '3D & VR', value: '3d' },
          { title: 'Fotografia', value: 'photo' },
          { title: 'Filmmaking', value: 'video' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Immagine Principale (Hero)',
      type: 'image',
      options: { hotspot: true }, // Ti permette di ritagliare l'immagine direttamente dal CMS!
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text (SEO)',
          description: 'Importante per accessibilità e SEO.',
        }
      ]
    }),
    defineField({
      name: 'gallery',
      title: 'Galleria Immagini (Per Fotografia e 3D)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    }),
    defineField({
      name: 'techStack',
      title: 'Tecnologie Utilizzate (es. React, Sony FX3)',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'description',
      title: 'Breve Descrizione (Per la card)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Case Study Completo (Il testo della pagina)',
      type: 'array',
      of: [{ type: 'block' }] // Questo è il "Portable Text", un editor rich-text!
    }),
    // Metadati Aggiuntivi
    defineField({ name: 'role', title: 'Ruolo', type: 'string' }),
    defineField({ name: 'client', title: 'Cliente', type: 'string' }),
    defineField({ name: 'year', title: 'Anno', type: 'string' }),
  ],
})