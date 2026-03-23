import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Definisci il tuo URL base (cambialo quando avrai il dominio finale)
  const baseUrl = 'https://maksithompson.com'

  // 2. Chiediamo a Sanity tutti i tuoi progetti e la data in cui li hai modificati l'ultima volta
  const query = `*[_type == "project"]{ 
    "slug": slug.current, 
    _updatedAt 
  }`
  const projects = await client.fetch(query)

  // 3. Creiamo le rotte per i singoli progetti dinamicamente
  const projectUrls = projects.map((project: any) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(project._updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8, // Priorità alta per i tuoi lavori
  }))

  // 4. Definiamo le rotte statiche del tuo sito (aggiungi qui se hai altre pagine come /about o /contact)
  const staticUrls = [
    {
      url: `${baseUrl}`, // La Homepage
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1.0, // Priorità massima
    },
    {
      url: `${baseUrl}/portfolio`, // La pagina principale del portfolio
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // 5. Uniamo tutto e lo restituiamo a Google
  return [...staticUrls, ...projectUrls]
}