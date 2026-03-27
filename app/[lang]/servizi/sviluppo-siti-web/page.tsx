import type { Metadata } from 'next'

import { Terminal, Zap, Search, Smartphone, ArrowUpRight, Layers, Database, Cpu, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import { getDictionary, hasLocale, LOCALES, type Locale } from '../../dictionaries'
import Contact from '@/components/Contact'

export const revalidate = 86400

const BASE_URL = 'https://maksithompson.com'

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang as Locale)
  return {
    title: dict.meta.webdev.title,
    description: dict.meta.webdev.description,
    alternates: {
      canonical: `${BASE_URL}/${lang}/servizi/sviluppo-siti-web`,
      languages: {
        'it': `${BASE_URL}/it/servizi/sviluppo-siti-web`,
        'en': `${BASE_URL}/en/servizi/sviluppo-siti-web`,
        'fr': `${BASE_URL}/fr/servizi/sviluppo-siti-web`,
        'x-default': `${BASE_URL}/it/servizi/sviluppo-siti-web`,
      },
    },
    openGraph: {
      title: dict.meta.webdev.title,
      description: dict.meta.webdev.description,
      type: 'website',
    },
  }
}

// Locale-specific content
const CONTENT = {
  it: {
    eyebrow: 'DIGITAL ENGINEERING',
    h1a: 'SVILUPPO WEB APP,',
    h1b: 'CMS CUSTOM',
    h1c: '& E-COMMERCE.',
    tagline1: 'NEXT.JS & REACT', tagline2: 'HEADLESS CMS', tagline3: 'SEO ENGINEERING',
    desc: 'Realizziamo piattaforme digitali ingegnerizzate per scalare, posizionarsi su Google e convertire.',
    stat1a: 'Caricamenti in', stat1b: 'Millisecondi.', stat1c: 'Server-Side', stat1d: 'Architetture Edge ultra veloci',
    techLabel: 'Infrastruttura', techTitle: 'Tecnologia e Ingegneria',
    techDesc: 'I nostri progetti sono sviluppati con le tecnologie più avanzate. Non utilizziamo page-builder lenti. Scriviamo codice nativo per garantire sicurezza, SEO e performance assolute.',
    techNote: 'Architetture Serverless',
    cardTitle: 'Soluzioni per Ogni Budget',
    cardDesc: 'Che tu sia una piccola agenzia o un brand in crescita, adattiamo l\'architettura alle tue reali esigenze. Zero sprechi, massimo rendimento.',
    cardLink: 'Troviamo la soluzione per te',
    featTitle: 'I pilastri dello sviluppo custom.',
    feats: [
      { icon: Layers, t: 'UI/UX Design & Prototipazione', d: 'Non usiamo template. Disegniamo interfacce customizzate per massimizzare le conversioni.' },
      { icon: Database, t: 'Custom CMS, CRM & API', d: 'Sviluppo di piattaforme aziendali su misura. CMS headless scalabili e API REST.' },
      { icon: Zap, t: 'Frontend & Backend Nativo', d: 'React, Next.js e Node.js. Architetture Serverless per caricamenti istantanei.' },
      { icon: Search, t: 'SEO Engineering', d: 'Server-Side Rendering e micro-dati strutturati per dominarе Google fin dal primo giorno.' },
    ],
    recentLabel: 'Case Studies', recentSub: 'Web application ed e-commerce sviluppati recentemente.',
    viewAll: "Vedi l'Archivio", exploreBtn: 'Esplora',
    faqLabel: 'FAQ', faqTitle: 'Domande Frequenti.', faqSub: 'Tutto quello che i nostri clienti ci chiedono prima di affidarci un progetto.',
    showMore: 'Mostra tutte le domande',
    comingSoon: 'Presto in arrivo nuovi case study.',
    faqs: [
      { q: 'Quanto costa creare un sito web professionale nel 2026?', a: 'Il costo varia in base alla complessità. Un sito vetrina premium parte da 2.500€ - 4.000€. Per piattaforme complesse, Web App B2B o E-commerce custom, i budget partono dagli 8.000€. Il nostro focus è il ROI, non il costo al ribasso.' },
      { q: 'Perché scegliere uno sviluppatore full-stack custom invece di una Web Agency?', a: 'Le grandi web agency spesso usano template WordPress pre-fatti. Con noi, parli direttamente con l\'Ingegnere del Software. Scriviamo architetture in Next.js garantendo un prodotto sartoriale, ultra-veloce e senza costi nascosti.' },
      { q: 'Perché il mio sito non compare su Google?', a: 'Al 90%, il problema è tecnico. I motori di ricerca penalizzano i siti lenti. Risolviamo il problema con il Server-Side Rendering, che serve a Google pagine pre-compilate in millisecondi.' },
      { q: 'In che modo la velocità del sito influenza le vendite?', a: 'Amazon ha dimostrato che ogni 100ms di ritardo costa l\'1% delle vendite. Le nostre architetture garantiscono transizioni istantanee, massimizzando il tasso di conversione.' },
      { q: 'Sviluppate MVP per startup?', a: 'Sì. Aiutiamo i founder a definire le funzionalità core per andare a mercato velocemente. Sviluppiamo un MVP solido, evitando sprechi su feature secondarie.' },
    ],
  },
  en: {
    eyebrow: 'DIGITAL ENGINEERING',
    h1a: 'WEB APP DEVELOPMENT,',
    h1b: 'CUSTOM CMS',
    h1c: '& E-COMMERCE.',
    tagline1: 'NEXT.JS & REACT', tagline2: 'HEADLESS CMS', tagline3: 'SEO ENGINEERING',
    desc: 'We build digital platforms engineered to scale, rank on Google and convert.',
    stat1a: 'Loading in', stat1b: 'Milliseconds.', stat1c: 'Server-Side', stat1d: 'Ultra-fast Edge Architectures',
    techLabel: 'Infrastructure', techTitle: 'Technology & Engineering',
    techDesc: 'Our projects are built with the most advanced technologies. We don\'t use slow page-builders. We write native code to guarantee security, SEO and absolute performance.',
    techNote: 'Serverless Architectures',
    cardTitle: 'Solutions for Every Budget',
    cardDesc: 'Whether you\'re a small agency or a growing brand, we adapt the architecture to your real needs. Zero waste, maximum return.',
    cardLink: 'Let\'s find your solution',
    featTitle: 'The pillars of custom development.',
    feats: [
      { icon: Layers, t: 'UI/UX Design & Prototyping', d: 'No templates. We design custom interfaces to maximise conversions and deliver a seamless experience.' },
      { icon: Database, t: 'Custom CMS, CRM & API', d: 'Bespoke business platforms, REST APIs and scalable headless CMS solutions.' },
      { icon: Zap, t: 'Native Frontend & Backend', d: 'React, Next.js and Node.js. Serverless architectures for instant load times.' },
      { icon: Search, t: 'SEO Engineering', d: 'Server-Side Rendering and structured micro-data to dominate Google from day one.' },
    ],
    recentLabel: 'Case Studies', recentSub: 'Recently developed web applications and e-commerce platforms.',
    viewAll: 'View Archive', exploreBtn: 'Explore',
    faqLabel: 'FAQ', faqTitle: 'Frequently Asked Questions.', faqSub: 'Everything our clients ask before entrusting us with a project.',
    showMore: 'Show all questions',
    comingSoon: 'New web development case studies coming soon.',
    faqs: [
      { q: 'How much does a professional website cost in 2026?', a: 'Cost depends on complexity. A premium brochure site or high-conversion landing page starts from €2,500 - €4,000. For complex platforms, B2B Web Apps or custom E-commerce, budgets start from €8,000. Our focus is ROI, not cutting corners.' },
      { q: 'Why choose a custom full-stack developer over a traditional web agency?', a: 'Large agencies often delegate work to juniors or use pre-made WordPress templates. Working with us, you speak directly with the Software Engineer and Art Director. We write Next.js architectures (the same used by Netflix and Vercel), guaranteeing a bespoke, ultra-fast product.' },
      { q: 'Why doesn\'t my website appear on Google?', a: '90% of the time, the problem is technical. Search engines penalise slow, unoptimised sites. We fix it at the root using Server-Side Rendering, which serves Google pre-compiled pages in milliseconds.' },
      { q: 'How does website speed affect my e-commerce sales?', a: 'Amazon proved that every 100ms of delay costs 1% of sales. Our architectures guarantee instant transitions, maximising conversion rates.' },
      { q: 'Do you build MVPs for startups?', a: 'Yes. We help founders define the core features to go to market quickly and pitch investors. We build a solid MVP, avoiding waste on secondary features.' },
    ],
  },
  fr: {
    eyebrow: 'DIGITAL ENGINEERING',
    h1a: 'DÉVELOPPEMENT WEB APP,',
    h1b: 'CMS SUR MESURE',
    h1c: '& E-COMMERCE.',
    tagline1: 'NEXT.JS & REACT', tagline2: 'HEADLESS CMS', tagline3: 'SEO ENGINEERING',
    desc: 'Nous créons des plateformes digitales conçues pour évoluer, se positionner sur Google et convertir.',
    stat1a: 'Chargement en', stat1b: 'Millisecondes.', stat1c: 'Server-Side', stat1d: 'Architectures Edge ultra rapides',
    techLabel: 'Infrastructure', techTitle: 'Technologie & Ingénierie',
    techDesc: 'Nos projets sont développés avec les technologies les plus avancées. Nous n\'utilisons pas de constructeurs de pages lents. Nous écrivons du code natif pour garantir sécurité, SEO et performance absolue.',
    techNote: 'Architectures Serverless',
    cardTitle: 'Solutions pour Tout Budget',
    cardDesc: 'Que vous soyez une petite agence ou une marque en croissance, nous adaptons l\'architecture à vos besoins réels. Zéro gaspillage, rendement maximum.',
    cardLink: 'Trouvons votre solution',
    featTitle: 'Les piliers du développement sur mesure.',
    feats: [
      { icon: Layers, t: 'Design UI/UX & Prototypage', d: 'Pas de templates. Nous concevons des interfaces sur mesure pour maximiser les conversions.' },
      { icon: Database, t: 'CMS, CRM & API sur mesure', d: 'Plateformes professionnelles sur mesure, API REST et CMS headless évolutifs.' },
      { icon: Zap, t: 'Frontend & Backend Natif', d: 'React, Next.js et Node.js. Architectures Serverless pour des temps de chargement instantanés.' },
      { icon: Search, t: 'SEO Engineering', d: 'Server-Side Rendering et micro-données structurées pour dominer Google dès le premier jour.' },
    ],
    recentLabel: 'Études de Cas', recentSub: 'Applications web et e-commerce récemment développés.',
    viewAll: "Voir l'Archive", exploreBtn: 'Explorer',
    faqLabel: 'FAQ', faqTitle: 'Questions Fréquentes.', faqSub: 'Tout ce que nos clients nous demandent avant de nous confier un projet.',
    showMore: 'Afficher toutes les questions',
    comingSoon: 'Nouvelles études de cas bientôt disponibles.',
    faqs: [
      { q: 'Combien coûte la création d\'un site web professionnel en 2026 ?', a: 'Le coût varie selon la complexité. Un site vitrine premium part de 2 500€ - 4 000€. Pour les plateformes complexes, Web Apps B2B ou e-commerce sur mesure, les budgets partent de 8 000€. Notre focus est le ROI.' },
      { q: 'Pourquoi choisir un développeur full-stack plutôt qu\'une agence web ?', a: 'Les grandes agences délèguent souvent à des juniors ou utilisent des templates WordPress. Avec nous, vous parlez directement à l\'Ingénieur Logiciel. Nous écrivons des architectures Next.js garantissant un produit sur mesure, ultra-rapide.' },
      { q: 'Pourquoi mon site n\'apparaît pas sur Google ?', a: 'À 90%, le problème est technique. Les moteurs de recherche pénalisent les sites lents. Nous résolvons le problème avec le Server-Side Rendering, qui fournit à Google des pages pré-compilées en millisecondes.' },
      { q: 'Comment la vitesse du site influence-t-elle les ventes ?', a: 'Amazon a prouvé que chaque 100ms de retard coûte 1% des ventes. Nos architectures garantissent des transitions instantanées, maximisant le taux de conversion.' },
      { q: 'Développez-vous des MVP pour startups ?', a: 'Oui. Nous aidons les fondateurs à définir les fonctionnalités principales pour accéder rapidement au marché. Nous développons un MVP solide, en évitant les dépenses sur des fonctionnalités secondaires.' },
    ],
  },
}

export default async function WebDevLanding({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()

  const dict = await getDictionary(lang as Locale)
  const c = CONTENT[lang as keyof typeof CONTENT] || CONTENT.en

  const query = `*[_type == "project" && category == "Web App"] | order(_createdAt desc)[0...2] {
    _id, title, "slug": slug.current, category,
    "img": coalesce(mainImage.asset->url, heroImage.asset->url),
    "altText": coalesce(mainImage.alt, heroImage.alt)
  }`
  const recentProjects = await client.fetch(query)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        name: 'Maksi Thompson Digital Studio',
        description: dict.meta.webdev.description,
        address: { '@type': 'PostalAddress', addressLocality: 'Torino', addressRegion: 'Piemonte', addressCountry: 'IT' },
        priceRange: '$$$',
      },
      {
        '@type': 'FAQPage',
        mainEntity: c.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      },
    ],
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#CCFF00] selection:text-black font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="relative min-h-screen w-full bg-[#0A0A0A] text-white overflow-hidden flex flex-col justify-between p-8 md:p-12 lg:p-16">
        <div className="absolute inset-0 z-0">
          <Image src="/screen.png" alt={c.h1a} fill priority className="object-cover object-top opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/20 to-[#0A0A0A]" />
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-12 w-full mt-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase mb-6 text-gray-300">| {c.eyebrow}</p>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight">
              {c.h1a} <br />{c.h1b} <br />
              <span className="text-transparent [-webkit-text-stroke:2px_#CCFF00]">{c.h1c}</span>{' '}
              <ArrowUpRight className="inline-block w-12 h-12 ml-4 p-3 border border-white/30 rounded-full text-[#CCFF00]" />
            </h1>
          </div>
          <div className="lg:text-right flex flex-col lg:items-end mt-8 lg:mt-0">
            <h2 className="text-lg md:text-xl font-medium leading-loose tracking-wider">
              {c.tagline1}<br />{c.tagline2}<br />{c.tagline3}
            </h2>
            <p className="text-sm text-gray-400 max-w-xs mt-6 leading-relaxed">{c.desc}</p>
          </div>
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-end w-full mt-20">
          <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 w-full md:w-56 flex flex-col justify-between h-40 group hover:border-[#CCFF00]/40 transition-all duration-500">
              <p className="text-xs text-white font-medium leading-tight">{c.stat1a}<br /><span className="text-[#CCFF00]">{c.stat1b}</span></p>
              <div>
                <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-1">{c.stat1c}</p>
                <p className="text-[9px] uppercase tracking-wider text-gray-500">{c.stat1d}</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 w-full md:w-56 flex flex-col justify-between h-40 group hover:border-[#CCFF00]/40 transition-all duration-500">
              <h3 className="text-4xl font-light tracking-tighter text-white">99<span className="text-sm align-top ml-1 text-[#CCFF00]">/100</span></h3>
              <div>
                <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-1">Google Lighthouse</p>
                <p className="text-[9px] uppercase tracking-wider text-gray-500">Core Web Vitals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-32 px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#111111] border border-white/10 rounded-[3rem] p-8 md:p-16 hover:border-white/20 transition-colors duration-500">
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00] mb-6">{c.techLabel}</div>
              <h3 className="text-4xl font-medium text-white mb-6">{c.techTitle}</h3>
              <p className="text-gray-400 leading-relaxed text-lg mb-8 max-w-md">{c.techDesc}</p>
              <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-white mb-8">
                <Cpu className="w-5 h-5 text-[#CCFF00]" /> {c.techNote}
              </div>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Sanity CMS', 'Tailwind'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-[#0A0A0A] border border-white/10 text-gray-400 rounded-full text-[10px] font-bold tracking-widest uppercase hover:text-[#CCFF00] hover:border-[#CCFF00]/50 transition-colors cursor-default">{tag}</span>
                ))}
              </div>
            </div>
            <div className="bg-[#0A0A0A]/50 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl">
              <div className="w-12 h-12 rounded-full bg-[#CCFF00]/10 flex items-center justify-center mb-6 border border-[#CCFF00]/20">
                <Zap className="w-6 h-6 text-[#CCFF00]" />
              </div>
              <h3 className="text-2xl font-medium text-white mb-4">{c.cardTitle}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-8">{c.cardDesc}</p>
              <Link href={`/${lang}/#contact`} className="text-[#CCFF00] text-xs font-bold uppercase tracking-widest flex items-center gap-3 hover:text-white transition-colors group">
                {c.cardLink} <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="py-32 px-8 md:px-12 lg:px-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-16 text-white">{c.featTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.feats.map((feat, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-[#CCFF00]/50 transition-colors duration-500 group flex flex-col h-full min-h-[300px]">
                <feat.icon className="w-8 h-8 text-white mb-8 group-hover:text-[#CCFF00] transition-colors" />
                <h3 className="text-xl font-medium mb-4 text-white leading-snug">{feat.t}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mt-auto">{feat.d}</p>
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
          <div className="grid md:grid-cols-2 gap-12">
            {recentProjects.length > 0 ? recentProjects.map((project: Record<string, string>, index: number) => (
              <Link href={`/${lang}/portfolio/${project.slug}`} key={project._id} className={`group flex flex-col gap-6 ${index % 2 !== 0 ? 'md:mt-16' : ''}`}>
                <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#111] border border-white/5">
                  {project.img && (
                    <Image src={project.img} alt={project.altText || project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-[#CCFF00] text-black text-[10px] font-bold tracking-widest uppercase px-6 py-3 rounded-full">{c.exploreBtn}</div>
                  </div>
                </div>
                <div className="flex flex-col px-2">
                  <p className="text-[#CCFF00] text-[10px] font-bold tracking-widest uppercase mb-2">{project.category}</p>
                  <h3 className="text-2xl font-medium text-white group-hover:text-gray-300 transition-colors">{project.title}</h3>
                </div>
              </Link>
            )) : (
              <div className="col-span-2 p-16 text-center border border-white/10 border-dashed rounded-[3rem] bg-[#111111]">
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
            <p className="text-gray-400 text-lg">{c.faqSub}</p>
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
