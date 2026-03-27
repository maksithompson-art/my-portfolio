export const runtime = 'edge'

import { notFound } from 'next/navigation'

import type { Metadata } from 'next'
import { ArrowDownRight } from 'lucide-react'
import { getDictionary, hasLocale, type Locale } from '../dictionaries'
import { client } from '@/sanity/lib/client'
import PortfolioClient from './PortfolioClient'

const BASE_URL = 'https://maksithompson.com'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang as Locale)
  return {
    title: dict.meta.portfolio.title,
    description: dict.meta.portfolio.description,
    alternates: {
      canonical: `${BASE_URL}/${lang}/portfolio`,
      languages: {
        'it': `${BASE_URL}/it/portfolio`,
        'en': `${BASE_URL}/en/portfolio`,
        'fr': `${BASE_URL}/fr/portfolio`,
        'x-default': `${BASE_URL}/it/portfolio`,
      },
    },
  }
}

export default async function PortfolioPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)
  const p = dict.portfolio

  const query = `*[_type == "project"] | order(orderRank asc) {
    _id, title, "slug": slug.current, category,
    "img": heroImage.asset->url, "altText": heroImage.alt, description
  }`
  const projects = await client.fetch(query)

  return (
    <main className="min-h-screen w-full bg-[#0A0A0A] text-white pt-40 md:pt-48 pb-24 selection:bg-[#CCFF00] selection:text-black font-sans">

      {/* CINEMATIC HEADER */}
      <header className="px-8 md:px-12 lg:px-24 mb-16 md:mb-24 relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">{p.indexLabel}</span>
        </div>

        <h1 className="text-[5rem] md:text-[9rem] lg:text-[13rem] font-black uppercase tracking-tighter leading-[0.85] mb-12 flex flex-col cursor-default">
          <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.4)] hover:text-white transition-colors duration-700">{p.title1}</span>
          <span className="text-white hover:text-[#CCFF00] transition-colors duration-700">{p.title2}</span>
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-12 border-b border-white/10 pb-16">
          <p className="text-xl md:text-2xl font-medium text-gray-300 max-w-2xl leading-snug">{p.intro}</p>
          <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00] flex items-center gap-3 bg-[#CCFF00]/10 px-4 py-2 rounded-full border border-[#CCFF00]/20">
              {projects.length} {p.projectsIndexed}
            </div>
            <p className="text-xs font-bold tracking-widest uppercase text-gray-500 flex items-center gap-2">
              {p.scrollLabel} <ArrowDownRight className="w-4 h-4" />
            </p>
          </div>
        </div>
      </header>

      <section className="px-8 md:px-12 lg:px-24 relative z-20">
        <PortfolioClient projects={projects} dict={p} lang={lang} />
      </section>

    </main>
  )
}
