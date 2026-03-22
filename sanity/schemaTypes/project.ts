import { defineField, defineType } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Progetti Portfolio',
  type: 'document',
  fields: [
    defineField({
  name: 'orderRank',
  type: 'string',
  hidden: true,
}),  
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
          { title: 'Web & App', value: 'Web App' },
          { title: '3D & VR', value: '3D Art Direction' },
          { title: 'Fotografia', value: 'Official Photographer' },
          { title: 'Filmmaking', value: 'Cinematography' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Immagine Principale (Hero)',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alt Text (SEO)',
          description: 'Descrizione per Google e accessibilità.',
        }
      ]
    }),
    defineField({
      name: 'gallery',
      title: 'Galleria Immagini Extra',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    }),
    defineField({
      name: 'techStack',
      title: 'Tecnologie Utilizzate (es. Next.js, Sony FX3, Unreal Engine)',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'description',
      title: 'Breve Descrizione (Per la card del portfolio)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Case Study Completo',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({ name: 'role', title: 'Ruolo (es. 3D Art Director)', type: 'string' }),
    defineField({ name: 'client', title: 'Cliente (es. Mercedes AMG)', type: 'string' }),
    defineField({ name: 'year', title: 'Anno (es. 2023)', type: 'string' }),
  ],
})