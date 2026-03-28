export const runtime = 'edge'

import type { Metadata } from 'next'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { getDictionary, hasLocale, type Locale } from '../../dictionaries'
import ProjectContent from './ProjectContent'

const LABELS = {
  it: { client: 'Cliente', role: 'Ruolo', sector: 'Settore', projectInfo: 'Informazioni sul Progetto', backLabel: 'Archivio', continueLabel: 'Continua a esplorare', backTitle: "Torna All'Archivio" },
  en: { client: 'Client', role: 'Role', sector: 'Sector', projectInfo: 'Project Information', backLabel: 'Archive', continueLabel: 'Continue exploring', backTitle: 'Back to Archive' },
  fr: { client: 'Client', role: 'Rôle', sector: 'Secteur', projectInfo: 'Informations sur le Projet', backLabel: 'Archive', continueLabel: 'Continuer à explorer', backTitle: "Retour à l'Archive" },
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { slug, lang } = await params
  const query = `*[_type == "project" && slug.current == $slug][0]{ title, seoTitle, seoDescription, seoImage }`
  const project = await client.fetch(query, { slug })
  if (!project) return {}
  return {
    title: `${project.seoTitle || project.title} | Maksi Thompson`,
    description: project.seoDescription,
    openGraph: {
      title: project.seoTitle || project.title,
      description: project.seoDescription,
      images: project.seoImage ? [urlFor(project.seoImage).width(1200).height(630).url()] : [],
    },
    alternates: {
      languages: {
        'it': `https://maksithompson.com/it/portfolio/${slug}`,
        'en': `https://maksithompson.com/en/portfolio/${slug}`,
        'fr': `https://maksithompson.com/fr/portfolio/${slug}`,
      },
    },
  }
}

export default async function ProjectDetail({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { slug, lang } = await params
  if (!hasLocale(lang)) notFound()

  const query = `*[_type == "project" && slug.current == $slug][0] {
    title, category, "heroImg": heroImage.asset->url, "altText": heroImage.alt,
    "gallery": gallery[].asset->url, "videoGallery": videoGallery[].asset->url,
    description, body, techStack, role, client, year
  }`
  const project = await client.fetch(query, { slug })
  if (!project) notFound()

  const labels = LABELS[lang as Locale] || LABELS.en

  return (
    <article className="min-h-screen bg-[#0A0A0A] text-white pb-32 selection:bg-[#CCFF00] selection:text-black">

      {/* FLOATING BACK NAVIGATION */}
      <nav className="fixed top-32 left-8 md:left-12 lg:left-24 z-[60] mix-blend-difference">
        <Link
          href={`/${lang}/portfolio`}
          className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-white/50 hover:text-[#CCFF00] transition-colors"
        >
          <div className="p-2 border border-white/10 rounded-full group-hover:border-[#CCFF00] transition-colors">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </div>
          <span className="hidden md:block">{labels.backLabel}</span>
        </Link>
      </nav>

      {/* CINEMATIC HERO */}
      {project.heroImg && (
        <div className="w-full h-[60vh] md:h-[85vh] relative overflow-hidden">
          <Image
            src={project.heroImg}
            alt={project.altText || project.title}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
            <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 to-[#CCFF00]" />
            <span className="text-[8px] font-bold tracking-[0.5em] uppercase text-[#CCFF00] animate-pulse">Scroll</span>
          </div>
        </div>
      )}

      {/* MAIN CONTENT */}
      <div className="relative z-10">
        <div className="md:-mt-20">
          <ProjectContent project={project} labels={labels} />
        </div>
      </div>

      {/* BOTTOM NAV */}
      <section className="mt-16 md:mt-32 px-8 md:px-12 lg:px-24 border-t border-white/10 pt-12 md:pt-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-500 mb-8">{labels.continueLabel}</p>
          <Link href={`/${lang}/portfolio`} className="group">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter hover:text-[#CCFF00] transition-colors duration-500">
              {labels.backTitle}
            </h2>
            <div className="mt-6 w-0 group-hover:w-full h-[2px] bg-[#CCFF00] transition-all duration-700 mx-auto" />
          </Link>
        </div>
      </section>

    </article>
  )
}
