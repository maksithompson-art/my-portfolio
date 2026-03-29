import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

const BASE_URL = 'https://maksithompson.com'
const LOCALES = ['it', 'en', 'fr'] as const

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch all projects from Sanity
  const query = `*[_type == "project"]{ "slug": slug.current, _updatedAt }`
  const projects = await client.fetch(query)

  // Static pages — generate one entry per locale
  const staticPages = [
    { path: '', priority: 1.0, changeFrequency: 'monthly' as const },
    { path: '/portfolio', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/servizi/sviluppo-siti-web', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/servizi/fotografia', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/servizi/sviluppo-siti-web/sito-web-torino', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/servizi/sviluppo-siti-web/ecommerce-torino', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/servizi/fotografia/fotografo-ristoranti-torino', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/servizi/fotografia/fotografo-corporate-torino', priority: 0.8, changeFrequency: 'monthly' as const },
  ]

  const staticUrls: MetadataRoute.Sitemap = staticPages.flatMap(({ path, priority, changeFrequency }) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency,
      priority,
    }))
  )

  // Dynamic project pages — one per locale per project
  const projectUrls: MetadataRoute.Sitemap = projects.flatMap((project: { slug: string; _updatedAt: string }) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}/portfolio/${project.slug}`,
      lastModified: new Date(project._updatedAt),
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    }))
  )

  return [...staticUrls, ...projectUrls]
}
