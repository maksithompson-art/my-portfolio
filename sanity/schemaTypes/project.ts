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
          // FONDAMENTALE PER LA SEO: Rende il campo obbligatorio
          validation: (Rule) => Rule.required().error('Devi inserire un testo alternativo per la SEO!'),
        }
      ]
    }),
    defineField({
      name: 'gallery',
      title: 'Galleria Immagini Extra',
      type: 'array',
      of: [
        { 
          type: 'image', 
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text (SEO)',
              description: 'Descrivi brevemente l\'immagine.',
              // Obbligatorio anche per le immagini della galleria
              validation: (Rule) => Rule.required().error('Manca l\'Alt Text!'),
            }
          ]
        }
      ]
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
    
    // --- SEZIONE SEO & AIO ---
    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      description: 'Il titolo per Google (max 60 caratteri). Se lo lasci vuoto, userà il "Titolo del Progetto" in automatico.',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
      description: 'Una breve descrizione per i risultati di ricerca (max 160 caratteri).',
    }),
    defineField({
      name: 'seoImage',
      title: 'SEO Image (Open Graph)',
      type: 'image',
      description: "L'immagine che appare quando condividi il link sui social come iMessage o LinkedIn (consigliato 1200x630px).",
    }),
  ],
})