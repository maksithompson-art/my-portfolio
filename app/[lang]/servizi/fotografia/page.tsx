export const runtime = 'edge'

import type { Metadata } from 'next'

import { Camera, ArrowUpRight, Lightbulb, Focus, Layers, Box, CheckCircle2, Image as ImageIcon } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { getDictionary, hasLocale, type Locale } from '../../dictionaries'
import Contact from '@/components/Contact'

const BASE_URL = 'https://maksithompson.com'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang as Locale)
  return {
    title: dict.meta.photography.title,
    description: dict.meta.photography.description,
    alternates: {
      canonical: `${BASE_URL}/${lang}/servizi/fotografia`,
      languages: {
        'it': `${BASE_URL}/it/servizi/fotografia`,
        'en': `${BASE_URL}/en/servizi/fotografia`,
        'fr': `${BASE_URL}/fr/servizi/fotografia`,
        'x-default': `${BASE_URL}/it/servizi/fotografia`,
      },
    },
  }
}

const CONTENT = {
  it: {
    eyebrow: 'ART DIRECTION',
    h1a: 'FOTOGRAFIA,', h1b: '3D RENDERING', h1c: '& ART DIRECTION.',
    tagline1: 'FOOD & CORPORATE', tagline2: 'PRODUCT & 3D CGI', tagline3: 'ART DIRECTION',
    desc: 'Creo narrazioni visive che elevano il valore percepito del tuo brand.',
    services: [
      { icon: Camera, t: 'Fotografia Commerciale', d: 'Storytelling visivo per esaltare il tuo brand. Food photography, interior design e ritrattistica per ristoranti, e-commerce e corporate.' },
      { icon: Box, t: '3D Rendering & CGI', d: 'Ambienti virtuali, product rendering e visualizzazione architettonica fotorealistica. Mostriamo il tuo prodotto prima ancora che esista fisicamente.' },
      { icon: ImageIcon, t: 'Art Direction & Post', d: 'Dal moodboard al color grading finale. Direzione artistica coerente in ogni singolo pixel.' },
    ],
    processLabel: 'Processo', processTitle: 'Come lavoro.',
    steps: [
      { step: '01', icon: Lightbulb, t: 'Art Direction & Brief', d: 'Analizziamo il tuo brand, i competitor e creiamo un moodboard visivo per allineare stile, luci e narrativa.' },
      { step: '02', icon: Focus, t: 'Produzione & Modeling', d: 'Allestimento del set fotografico o modellazione 3D accurata della scena. Gestione maniacale dell\'illuminazione.' },
      { step: '03', icon: Layers, t: 'Post-Produzione & Compositing', d: 'Sviluppo digitale dei file RAW o calcolo dei render, ritocco di alta fascia e color grading personalizzato.' },
    ],
    faqLabel: 'FAQ', faqTitle: 'Domande Frequenti.',
    faqs: [
      { q: 'Che differenza c\'è tra fotografia e rendering 3D?', a: 'La fotografia cattura la realtà fisica. Il 3D Rendering (CGI) è interamente generato al computer: perfetto per prodotti non ancora fabbricati o architetture in fase di progettazione.' },
      { q: 'Come vengono consegnati i file finali?', a: 'Forniamo sempre una doppia esportazione: file ad alta risoluzione per stampa e file ottimizzati per il web, pronti per siti, Instagram e eCommerce.' },
      { q: 'Lavori solo a Torino?', a: 'La base operativa è a Torino, ma copro shooting in tutto il Nord Italia e all\'estero. Per il 3D Rendering, il processo è 100% remoto.' },
      { q: 'Quali sono i tempi di consegna?', a: 'Per shooting di ristorazione: 7-10 giorni lavorativi. Per progetti 3D complessi: i tempi variano in base alla complessità della modellazione.' },
      { q: 'Chi detiene i diritti delle immagini?', a: 'Al saldo del servizio, ottieni i diritti di utilizzo commerciale completi e illimitati. Nessun costo di licenza o rinnovi nascosti.' },
    ],
    recentLabel: 'Ultimi Lavori', recentSub: 'Fotografia commerciale e 3D rendering realizzati recentemente.',
    viewAll: "Vedi l'Archivio", exploreBtn: 'Esplora',
    comingSoon: 'Presto in arrivo nuovi lavori visivi.',
    showMore: 'Mostra tutte le domande',
  },
  en: {
    eyebrow: 'ART DIRECTION',
    h1a: 'PHOTOGRAPHY,', h1b: '3D RENDERING', h1c: '& ART DIRECTION.',
    tagline1: 'FOOD & CORPORATE', tagline2: 'PRODUCT & 3D CGI', tagline3: 'ART DIRECTION',
    desc: 'I create visual narratives that elevate the perceived value of your brand.',
    services: [
      { icon: Camera, t: 'Commercial Photography', d: 'Visual storytelling to elevate your brand. Food photography, interior design and portraiture for restaurants, e-commerce and corporate.' },
      { icon: Box, t: '3D Rendering & CGI', d: 'Virtual environments, product rendering and photorealistic architectural visualisation. We showcase your product before it even exists physically.' },
      { icon: ImageIcon, t: 'Art Direction & Post', d: 'From moodboard to final colour grading. Consistent art direction in every single pixel.' },
    ],
    processLabel: 'Process', processTitle: 'How I work.',
    steps: [
      { step: '01', icon: Lightbulb, t: 'Art Direction & Brief', d: 'We analyse your brand and competitors and create a visual moodboard to align style, lighting and narrative.' },
      { step: '02', icon: Focus, t: 'Production & Modelling', d: 'Photo set design or accurate 3D modelling of the scene. Obsessive management of lighting for cinematic results.' },
      { step: '03', icon: Layers, t: 'Post-Production & Compositing', d: 'Digital RAW development or render calculation, high-end retouching and custom colour grading for chromatic consistency.' },
    ],
    faqLabel: 'FAQ', faqTitle: 'Frequently Asked Questions.',
    faqs: [
      { q: 'What\'s the difference between photography and 3D rendering?', a: 'Photography captures physical reality. 3D Rendering (CGI) is entirely computer-generated: perfect for products not yet manufactured or architectures under design, eliminating the logistics cost of a real set.' },
      { q: 'How are the final files delivered?', a: 'We always provide a dual export: a folder with high-resolution files for print and billboards, and a folder with files optimised for the web (websites, Instagram, eCommerce).' },
      { q: 'Do you only work in Turin?', a: 'Our base is in Turin, but we regularly cover commercial shoots across Northern Italy and abroad. For 3D Rendering, the entire process is 100% remote.' },
      { q: 'What are the delivery times?', a: 'For restaurant shoots: 7-10 business days. For complex 3D projects: times vary based on the complexity of modelling and render calculation.' },
      { q: 'Who holds the image rights?', a: 'Upon payment, you get full unlimited commercial usage rights for web, social and print. No licence fees, subscriptions or hidden renewals.' },
    ],
    recentLabel: 'Recent Work', recentSub: 'Commercial photography and 3D rendering recently produced.',
    viewAll: 'View Archive', exploreBtn: 'Explore',
    comingSoon: 'New visual work coming soon.',
    showMore: 'Show all questions',
  },
  fr: {
    eyebrow: 'DIRECTION ARTISTIQUE',
    h1a: 'PHOTOGRAPHIE,', h1b: 'RENDU 3D', h1c: '& DIRECTION ARTISTIQUE.',
    tagline1: 'FOOD & CORPORATE', tagline2: 'PRODUIT & 3D CGI', tagline3: 'DIRECTION ARTISTIQUE',
    desc: 'Je crée des narrations visuelles qui élèvent la valeur perçue de votre marque.',
    services: [
      { icon: Camera, t: 'Photographie Commerciale', d: 'Storytelling visuel pour mettre en valeur votre marque. Food photography, interior design et portrait pour restaurants, e-commerce et corporate.' },
      { icon: Box, t: 'Rendu 3D & CGI', d: 'Environnements virtuels, rendu de produits et visualisation architecturale photoréaliste. Nous présentons votre produit avant même qu\'il existe physiquement.' },
      { icon: ImageIcon, t: 'Direction Artistique & Post', d: 'Du moodboard au color grading final. Direction artistique cohérente dans chaque pixel.' },
    ],
    processLabel: 'Processus', processTitle: 'Comment je travaille.',
    steps: [
      { step: '01', icon: Lightbulb, t: 'Direction Artistique & Brief', d: 'Nous analysons votre marque et créons un moodboard visuel pour aligner le style, l\'éclairage et la narration.' },
      { step: '02', icon: Focus, t: 'Production & Modélisation', d: 'Mise en scène du shooting photo ou modélisation 3D précise. Gestion obsessionnelle de l\'éclairage.' },
      { step: '03', icon: Layers, t: 'Post-Production & Compositing', d: 'Développement numérique des fichiers RAW ou calcul des rendus, retouche haut de gamme et color grading personnalisé.' },
    ],
    faqLabel: 'FAQ', faqTitle: 'Questions Fréquentes.',
    faqs: [
      { q: 'Quelle est la différence entre photographie et rendu 3D ?', a: 'La photographie capture la réalité physique. Le Rendu 3D (CGI) est entièrement généré par ordinateur : parfait pour les produits non encore fabriqués ou les architectures en cours de conception.' },
      { q: 'Comment les fichiers finaux sont-ils livrés ?', a: 'Nous fournissons toujours une double exportation : des fichiers haute résolution pour l\'impression et des fichiers optimisés pour le web (sites, Instagram, eCommerce).' },
      { q: 'Travaillez-vous uniquement à Turin ?', a: 'Notre base est à Turin, mais nous couvrons des shootings dans tout le nord de l\'Italie et à l\'étranger. Pour le Rendu 3D, le processus est 100% à distance.' },
      { q: 'Quels sont les délais de livraison ?', a: 'Pour les shootings de restauration : 7-10 jours ouvrables. Pour les projets 3D complexes : les délais varient selon la complexité de la modélisation.' },
      { q: 'Qui détient les droits sur les images ?', a: 'Au règlement du service, vous obtenez les droits d\'utilisation commerciale complets et illimités. Aucuns frais de licence ou renouvellements cachés.' },
    ],
    recentLabel: 'Travaux Récents', recentSub: 'Photographie commerciale et rendu 3D récemment réalisés.',
    viewAll: "Voir l'Archive", exploreBtn: 'Explorer',
    comingSoon: 'Nouveaux travaux visuels bientôt disponibles.',
    showMore: 'Afficher toutes les questions',
  },
}

export default async function VisualsLanding({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)
  const c = CONTENT[lang as keyof typeof CONTENT] || CONTENT.en

  const query = `*[_type == "project" && category in ["Official Photographer", "3D Art Direction"]] | order(_createdAt desc)[0...3] {
    _id, title, "slug": slug.current, category,
    "img": coalesce(mainImage.asset->url, heroImage.asset->url),
    "altText": coalesce(mainImage.alt, heroImage.alt)
  }`
  const recentProjects = await client.fetch(query)

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#CCFF00] selection:text-black font-sans">

      {/* HERO */}
      <section className="relative min-h-screen w-full bg-[#0A0A0A] text-white overflow-hidden flex flex-col justify-between p-8 md:p-12 lg:p-16">
        <div className="absolute inset-0 z-0">
          <Image src="/audi.webp" alt={c.h1a} fill priority className="object-cover object-top opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/20 to-[#0A0A0A]" />
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-12 w-full mt-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase mb-6 text-gray-300">| {c.eyebrow}</p>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight">
              {c.h1a} <br />
              <span className="text-transparent [-webkit-text-stroke:2px_#CCFF00]">{c.h1b}</span> <br />
              {c.h1c}{' '}
              <ArrowUpRight className="inline-block w-12 h-12 ml-4 p-3 border border-white/30 rounded-full text-gray-300" />
            </h1>
          </div>
          <div className="lg:text-right flex flex-col lg:items-end mt-8 lg:mt-0">
            <h2 className="text-lg md:text-xl font-medium leading-loose tracking-wider">
              {c.tagline1}<br />{c.tagline2}<br />{c.tagline3}
            </h2>
            <p className="text-sm text-gray-400 max-w-xs mt-6 leading-relaxed">{c.desc}</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-32 px-8 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {c.services.map((svc, i) => (
            <div key={i} className="p-10 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-[#CCFF00]/50 transition-colors duration-500 group flex flex-col min-h-[360px]">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#CCFF00]/30 transition-colors">
                <svc.icon className="w-7 h-7 text-white group-hover:text-[#CCFF00] transition-colors" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-white">{svc.t}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mt-auto">{svc.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-32 px-8 md:px-12 lg:px-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00] mb-4">{c.processLabel}</div>
            <h2 className="text-4xl md:text-5xl font-medium text-white">{c.processTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {c.steps.map((step, i) => (
              <div key={i} className="flex flex-col gap-6 p-10 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-[#CCFF00]/50 transition-colors group">
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] group-hover:[-webkit-text-stroke:1px_#CCFF00] transition-all">{step.step}</span>
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#CCFF00]/30 transition-colors">
                    <step.icon className="w-6 h-6 text-white group-hover:text-[#CCFF00] transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-white">{step.t}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT WORK */}
      <section className="py-32 px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-8 border-b border-white/10 pb-12">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">{c.recentLabel}</h2>
              <p className="text-gray-400 text-lg">{c.recentSub}</p>
            </div>
            <Link href={`/${lang}/portfolio`} className="text-xs font-bold tracking-widest uppercase text-white hover:text-[#CCFF00] inline-flex items-center gap-3 transition-colors group">
              {c.viewAll} <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {recentProjects.length > 0 ? recentProjects.map((project: Record<string, string>, index: number) => (
              <Link href={`/${lang}/portfolio/${project.slug}`} key={project._id} className="group flex flex-col gap-4">
                <div className="relative aspect-square rounded-[2rem] overflow-hidden bg-[#111] border border-white/5">
                  {project.img && (
                    <Image src={project.img} alt={project.altText || project.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-[#CCFF00] text-black text-[10px] font-bold tracking-widest uppercase px-6 py-3 rounded-full">{c.exploreBtn}</div>
                  </div>
                </div>
                <div>
                  <p className="text-[#CCFF00] text-[10px] font-bold tracking-widest uppercase mb-1">{project.category}</p>
                  <h3 className="text-xl font-medium text-white group-hover:text-gray-300 transition-colors">{project.title}</h3>
                </div>
              </Link>
            )) : (
              <div className="col-span-3 p-16 text-center border border-white/10 border-dashed rounded-[3rem] bg-[#111111]">
                <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">{c.comingSoon}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-8 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00] mb-6">{c.faqLabel}</div>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">{c.faqTitle}</h2>
          </div>
          <div className="space-y-4">
            {c.faqs.map((faq, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-white/30 transition-colors">
                <h3 className="text-lg md:text-xl font-medium text-white mb-4 flex items-start gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#CCFF00] shrink-0" />
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact dict={dict.contact} />
    </div>
  )
}
