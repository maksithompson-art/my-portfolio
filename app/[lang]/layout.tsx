export const runtime = 'edge'

import '../globals.css'
import type React from 'react'
import { Metadata } from 'next'
import NavbarWrapper from '@/components/NavbarWrapper'
import Footer from '@/components/Footer'
import { getDictionary, hasLocale, type Locale } from './dictionaries'
import { notFound } from 'next/navigation'

const BASE_URL = 'https://maksithompson.com'

export async function generateMetadata({
  params,
}: { children: React.ReactNode; params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang as Locale)

  const localeMap: Record<Locale, string> = {
    it: 'it_IT',
    en: 'en_US',
    fr: 'fr_FR',
  }

  return {
    metadataBase: new URL(BASE_URL),
    title: {
      default: dict.meta.home.title,
      template: `%s | Maksi Thompson`,
    },
    description: dict.meta.home.description,
    keywords: dict.meta.home.keywords,
    icons: {
      icon: '/favicon.png',
      apple: '/favicon.png',
    },
    openGraph: {
      type: 'website',
      locale: localeMap[lang as Locale],
      url: `${BASE_URL}/${lang}`,
      siteName: 'Maksi Thompson Digital Studio',
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Maksi Thompson — Digital Studio',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: `${BASE_URL}/${lang}`,
      languages: {
        'it': `${BASE_URL}/it`,
        'en': `${BASE_URL}/en`,
        'fr': `${BASE_URL}/fr`,
        'x-default': `${BASE_URL}/it`,
      },
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params

  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)

  // JSON-LD schema — AIO optimised (ChatGPT, Perplexity, Google Knowledge Graph)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        name: 'Maksi Thompson',
        url: BASE_URL,
        jobTitle: [
          'Tech Lead',
          'Full Stack Web Developer',
          'Commercial Photographer',
          '3D Artist',
          'Art Director',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Torino',
          addressRegion: 'Piemonte',
          addressCountry: 'IT',
        },
        knowsAbout: [
          'Web Development',
          'Headless CMS',
          'E-Commerce Development',
          'SEO Engineering',
          '3D Rendering',
          'Computer-Generated Imagery (CGI)',
          'Commercial Photography',
          'Art Direction',
          'React',
          'Next.js',
        ],
        sameAs: [
          'https://www.instagram.com/maksithompson',
          'https://github.com/maksithompson',
          'https://www.linkedin.com/in/maksithompson',
        ],
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${BASE_URL}/#business`,
        name: 'Maksi Thompson Digital Studio',
        image: `${BASE_URL}/og-image.jpg`,
        url: BASE_URL,
        description: 'Digital Studio a Torino. Sviluppo siti web custom, e-commerce, fotografia commerciale e 3D rendering per brand ambiziosi.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Torino',
          addressRegion: 'Piemonte',
          postalCode: '10100',
          addressCountry: 'IT',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 45.0703,
          longitude: 7.6869,
        },
        areaServed: [
          { '@type': 'City', name: 'Torino' },
          { '@type': 'Country', name: 'Italia' },
        ],
        priceRange: '$$$',
        currenciesAccepted: 'EUR',
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
        sameAs: [
          'https://www.instagram.com/maksithompson',
          'https://github.com/maksithompson',
          'https://www.linkedin.com/in/maksithompson',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Servizi Digital Studio Torino',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Sviluppo Siti Web Torino',
                url: `${BASE_URL}/it/servizi/sviluppo-siti-web`,
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Sviluppo E-Commerce Torino',
                url: `${BASE_URL}/it/servizi/sviluppo-siti-web/ecommerce-torino`,
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Fotografo Ristoranti Torino',
                url: `${BASE_URL}/it/servizi/fotografia/fotografo-ristoranti-torino`,
              },
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Fotografo Corporate Torino',
                url: `${BASE_URL}/it/servizi/fotografia/fotografo-corporate-torino`,
              },
            },
          ],
        },
      },
    ],
  }

  return (
    <html lang={lang} className="scroll-smooth antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0A0A0A] text-white font-sans selection:bg-[#CCFF00] selection:text-black flex flex-col min-h-screen">
        <NavbarWrapper lang={lang} dict={dict.nav} />
        <main className="flex-grow">{children}</main>
        <Footer dict={dict.footer} lang={lang} />
      </body>
    </html>
  )
}
