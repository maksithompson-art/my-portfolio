export const runtime = 'edge'

import { notFound } from 'next/navigation'

import type { Metadata } from 'next'
import { getDictionary, hasLocale, type Locale } from '../dictionaries'
import AboutClient from '@/components/AboutClient'

const BASE_URL = 'https://maksithompson.com'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang as Locale)
  return {
    title: dict.meta.about.title,
    description: dict.meta.about.description,
    alternates: {
      canonical: `${BASE_URL}/${lang}/about`,
      languages: {
        'it': `${BASE_URL}/it/about`,
        'en': `${BASE_URL}/en/about`,
        'fr': `${BASE_URL}/fr/about`,
        'x-default': `${BASE_URL}/it/about`,
      },
    },
  }
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang as Locale)
  return <AboutClient dict={dict.about} lang={lang} />
}
