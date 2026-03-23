import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://maksithompson.com' // Cambia con il tuo dominio finale

  return {
    rules: {
      userAgent: '*', // Si applica a tutti i bot (Google, Bing, ChatGPT, ecc.)
      allow: '/',     // Possono leggere tutto il sito...
      disallow: [
        '/studio/',   // ...TRANNE il pannello di controllo di Sanity
        '/api/',      // ...e le tue API interne
      ],
    },
    // Indichiamo a Google dove trovare la mappa appena creata
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}