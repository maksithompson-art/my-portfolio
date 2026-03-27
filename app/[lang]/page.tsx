import { notFound } from 'next/navigation'

import { getDictionary, hasLocale, LOCALES, type Locale } from './dictionaries'
import { client } from '@/sanity/lib/client'
import Hero from '@/components/Hero'
import Expertise from '@/components/Expertise'
import VisualExpertise from '@/components/VisualExpertise'
import Marquee from '@/components/Marquee'
import SelectedWork from '@/components/SelectedWork'
import Contact from '@/components/Contact'

export const revalidate = 86400

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }))
}

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)

  const query = `*[_type == "project"] | order(_createdAt desc) {
    _id, title, "slug": slug.current, category,
    "img": coalesce(mainImage.asset->url, heroImage.asset->url),
    description
  }`
  const allProjects = await client.fetch(query)

  return (
    <main className="relative min-h-screen w-full bg-[#0A0A0A] font-sans flex flex-col">
      <Hero dict={dict.hero} />
      <Expertise dict={dict.expertise} lang={lang} />
      <VisualExpertise dict={dict.visualExpertise} lang={lang} />
      <Marquee dict={dict.marquee} />
      <div className="pb-24 bg-white">
        <SelectedWork projects={allProjects} dict={dict.selectedWork} lang={lang} />
      </div>
      <Contact dict={dict.contact} />
    </main>
  )
}
