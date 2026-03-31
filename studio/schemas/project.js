import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Progetto',
  type: 'document',
  orderings: [
    {
      title: 'Ordine personalizzato',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Titolo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoria',
      type: 'string',
      options: {
        list: [
          { title: '3D Render', value: '3D Render' },
          { title: 'Fotografia', value: 'Fotografia' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrizione',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'tools',
      title: 'Software / Strumenti usati',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
      description: 'Es: Blender, Cinema 4D, Substance Painter, Lightroom...',
    }),
    defineField({
      name: 'mainImage',
      title: 'Immagine Principale',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'galleryImages',
      title: 'Galleria Immagini',
      description: 'Seleziona più immagini contemporaneamente con Ctrl/Cmd+click',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      options: { layout: 'grid' },
    }),
    defineField({
      name: 'galleryVideos',
      title: 'Galleria Video',
      description: 'Carica uno o più video del progetto',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Video',
          fields: [
            defineField({
              name: 'file',
              title: 'File Video',
              type: 'file',
              options: { accept: 'video/*' },
            }),
            defineField({
              name: 'caption',
              title: 'Didascalia (opzionale)',
              type: 'string',
            }),
          ],
          preview: {
            select: { title: 'caption' },
            prepare({ title }) {
              return { title: title || 'Video', media: () => '🎬' }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'size',
      title: 'Dimensione nella griglia',
      type: 'string',
      options: {
        list: [
          { title: 'Grande (occupa più spazio)', value: 'large' },
          { title: 'Piccolo', value: 'small' },
          { title: 'Largo', value: 'wide' },
          { title: 'Alto', value: 'tall' },
        ],
        layout: 'radio',
      },
      initialValue: 'small',
    }),
    defineField({
      name: 'order',
      title: 'Ordine di visualizzazione',
      type: 'number',
      description: 'Numero più basso = appare prima. Es: 1, 2, 3...',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'mainImage',
    },
    prepare({ title, category, media }) {
      return {
        title,
        subtitle: category,
        media,
      }
    },
  },
})
