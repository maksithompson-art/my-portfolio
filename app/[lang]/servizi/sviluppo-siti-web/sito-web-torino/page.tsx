export const runtime = 'edge'

import type { Metadata } from 'next'
import { ArrowUpRight, CheckCircle2, Clock, Code2, Globe, Layers, Search, Zap } from 'lucide-react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale, type Locale } from '../../../dictionaries'
import Contact from '@/components/Contact'

const BASE_URL = 'https://maksithompson.com'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang as Locale)
  return {
    title: dict.meta.sitoWebTorino.title,
    description: dict.meta.sitoWebTorino.description,
    alternates: {
      canonical: `${BASE_URL}/${lang}/servizi/sviluppo-siti-web/sito-web-torino`,
      languages: {
        'it': `${BASE_URL}/it/servizi/sviluppo-siti-web/sito-web-torino`,
        'en': `${BASE_URL}/en/servizi/sviluppo-siti-web/sito-web-torino`,
        'fr': `${BASE_URL}/fr/servizi/sviluppo-siti-web/sito-web-torino`,
        'x-default': `${BASE_URL}/it/servizi/sviluppo-siti-web/sito-web-torino`,
      },
    },
    openGraph: {
      title: dict.meta.sitoWebTorino.title,
      description: dict.meta.sitoWebTorino.description,
      type: 'website',
    },
  }
}

const CONTENT = {
  it: {
    eyebrow: 'DIGITAL STUDIO — TORINO',
    h1: 'REALIZZAZIONE SITI WEB PROFESSIONALI A TORINO.',
    desc: 'Sviluppiamo siti web su misura per aziende, ristoranti, studi professionali e brand a Torino e in tutto il Piemonte. Architetture in Next.js, zero template, performance 99/100.',
    breadcrumb: 'Sviluppo Siti Web',
    breadcrumbParent: 'Servizi',
    stat1: '99/100', stat1Label: 'Google Lighthouse',
    stat2: '<1s', stat2Label: 'Tempo di caricamento',
    stat3: '100%', stat3Label: 'Codice Nativo',
    offeringsTitle: 'Che tipo di sito web realizziamo a Torino',
    offerings: [
      {
        icon: Globe,
        title: 'Sito Vetrina',
        desc: 'Presentazione professionale della tua attività. Design sartoriale, testi ottimizzati SEO e struttura pensata per convertire i visitatori in clienti. Ideale per studi professionali, artigiani e piccole imprese torinesi.',
        price: 'Da €2.500',
      },
      {
        icon: Zap,
        title: 'Landing Page ad Alta Conversione',
        desc: 'Una pagina unica e focalizzata per campagne Google Ads, social o lancio prodotto. Strutturata attorno a un unico obiettivo: la conversione. A/B test inclusi su richiesta.',
        price: 'Da €1.200',
      },
      {
        icon: Layers,
        title: 'Web App & Portale Aziendale',
        desc: 'Piattaforme digitali complesse: gestionale interno, prenotazioni online, portale clienti, CRM custom. Architetture React + Next.js scalabili e sicure.',
        price: 'Da €5.000',
      },
      {
        icon: Code2,
        title: 'Restyling Sito Esistente',
        desc: 'Il tuo sito attuale è lento, non converte o non si posiziona su Google? Analizziamo i problemi e ricostruiamo su basi solide — senza perdere la tua storia digitale.',
        price: 'Preventivo su misura',
      },
    ],
    whyTitle: 'Perché scegliere uno sviluppatore web a Torino',
    whyDesc: 'Lavorare con uno studio locale non è solo comodità. È valore concreto: conosciamo il mercato piemontese, possiamo incontrarci di persona e offriamo un rapporto diretto senza intermediari.',
    whyPoints: [
      'Comunicazione diretta con il developer, nessun account manager',
      'Incontri in presenza a Torino su richiesta',
      'Conoscenza del tessuto imprenditoriale locale',
      'Preventivi chiari, senza costi nascosti',
      'Architetture in Next.js — lo stesso stack di Netflix e Vercel',
      'Consegna tipica in 4–8 settimane',
    ],
    processTitle: 'Come realizziamo il tuo sito web',
    processSteps: [
      { n: '01', title: 'Brief & Analisi', desc: 'Comprendiamo i tuoi obiettivi, il tuo mercato e i tuoi competitor. Analizziamo cosa cercano i tuoi clienti su Google e costruiamo una strategia SEO fin dall\'inizio.' },
      { n: '02', title: 'Design & Prototipazione', desc: 'Progettiamo wireframe e mockup ad alta fedeltà. Nessun template: ogni interfaccia è disegnata attorno alla tua identità di brand e ottimizzata per la conversione.' },
      { n: '03', title: 'Sviluppo Nativo', desc: 'Scriviamo codice pulito in Next.js. Nessun plugin, nessun WordPress, nessun builder lento. Il risultato: caricamenti in millisecondi e Lighthouse score 99/100.' },
      { n: '04', title: 'Go Live & SEO', desc: 'Lancio su infrastruttura edge (Vercel), configurazione Google Search Console, sitemap XML e micro-dati strutturati. Partiamo già ottimizzati per Google.' },
    ],
    pricingTitle: 'Quanto costa un sito web a Torino nel 2026?',
    pricingDesc: 'Il prezzo dipende dalla complessità del progetto. Siamo trasparenti: ogni preventivo include una stima dettagliata delle ore e delle funzionalità. Zero sorprese in fase di consegna.',
    pricingRows: [
      { type: 'Sito Vetrina (3-5 pagine)', price: '€2.500 — €4.500', time: '3-4 settimane' },
      { type: 'Landing Page', price: '€1.200 — €2.500', time: '1-2 settimane' },
      { type: 'E-Commerce Custom', price: '€5.000 — €15.000+', time: '6-12 settimane' },
      { type: 'Web App / Portale', price: '€8.000+', time: 'Su progetto' },
      { type: 'Manutenzione Mensile', price: 'Da €150/mese', time: 'Continuativo' },
    ],
    faqLabel: 'FAQ',
    faqTitle: 'Domande sulla realizzazione di siti web a Torino.',
    faqs: [
      {
        q: 'Quanto tempo ci vuole per fare un sito web a Torino?',
        a: 'Un sito vetrina standard richiede 3-4 settimane dalla firma del contratto. Una landing page 1-2 settimane. Progetti più complessi (e-commerce, web app) richiedono 6-12 settimane. La timeline esatta viene definita nel preventivo.',
      },
      {
        q: 'Perché non usare WordPress o Wix per il mio sito?',
        a: 'WordPress e Wix usano architetture del 2005 con decine di plugin che rallentano il sito. Google penalizza i siti lenti. Usiamo Next.js — lo stesso framework di Netflix, TikTok e OpenAI — per garantire caricamenti in millisecondi e sicurezza nativa.',
      },
      {
        q: 'Offrite la manutenzione del sito dopo la consegna?',
        a: 'Sì. I nostri pacchetti di manutenzione mensile (da €150/mese) includono aggiornamenti, backup, monitoraggio uptime e modifiche minori. Il tuo sito rimane sempre sicuro, veloce e aggiornato.',
      },
      {
        q: 'Il sito sarà visibile su Google dopo la consegna?',
        a: 'Ogni sito viene consegnato con sitemap XML, meta tag ottimizzati, dati strutturati JSON-LD e configurazione Google Search Console. L\'indicizzazione avviene tipicamente entro 2-4 settimane dal lancio. La posizione dipende poi dal contenuto e dai backlink.',
      },
      {
        q: 'Realizzate siti web per ristoranti a Torino?',
        a: 'Sì, è uno dei nostri settori di punta. Realizziamo siti per ristoranti con menu digitale, galleria fotografica, sistema di prenotazione e integrazione Google Maps. Offriamo anche il servizio fotografico food in abbinamento.',
      },
      {
        q: 'Posso gestire i contenuti del sito in autonomia?',
        a: 'Assolutamente. Integriamo Sanity CMS — un pannello di controllo intuitivo da cui puoi modificare testi, foto e pagine senza toccare una riga di codice. Incluso nel prezzo.',
      },
    ],
    ctaTitle: 'Richiedi un preventivo gratuito',
    ctaDesc: 'Raccontaci il tuo progetto. Ti risponderemo entro 24 ore con una stima dettagliata.',
    backLink: '← Torna a Sviluppo Siti Web',
  },
  en: {
    eyebrow: 'DIGITAL STUDIO — TURIN',
    h1: 'PROFESSIONAL WEBSITE DEVELOPMENT IN TURIN.',
    desc: 'We build custom websites for businesses, restaurants, professional studios and brands in Turin and across Piedmont. Next.js architecture, zero templates, 99/100 performance.',
    breadcrumb: 'Web Development',
    breadcrumbParent: 'Services',
    stat1: '99/100', stat1Label: 'Google Lighthouse',
    stat2: '<1s', stat2Label: 'Load time',
    stat3: '100%', stat3Label: 'Native Code',
    offeringsTitle: 'What type of website we build in Turin',
    offerings: [
      { icon: Globe, title: 'Brochure Website', desc: 'Professional presentation of your business. Bespoke design, SEO-optimised copy and structure built to convert visitors into clients. Ideal for professional studios, craftsmen and small Turin businesses.', price: 'From €2,500' },
      { icon: Zap, title: 'High-Conversion Landing Page', desc: 'A single focused page for Google Ads campaigns, social or product launches. Built around one goal: conversion. A/B testing included on request.', price: 'From €1,200' },
      { icon: Layers, title: 'Web App & Business Portal', desc: 'Complex digital platforms: internal management tools, online booking, client portals, custom CRM. Scalable and secure React + Next.js architectures.', price: 'From €5,000' },
      { icon: Code2, title: 'Website Redesign', desc: 'Is your current site slow, underperforming or invisible on Google? We analyse the issues and rebuild on solid foundations — without losing your digital history.', price: 'Custom quote' },
    ],
    whyTitle: 'Why choose a web developer in Turin',
    whyDesc: 'Working with a local studio is more than convenience. It is concrete value: we know the Piedmont market, can meet in person and offer a direct relationship without intermediaries.',
    whyPoints: [
      'Direct communication with the developer — no account manager',
      'In-person meetings in Turin on request',
      'Deep knowledge of the local business landscape',
      'Transparent quotes, no hidden costs',
      'Next.js architecture — the same stack as Netflix and Vercel',
      'Typical delivery in 4–8 weeks',
    ],
    processTitle: 'How we build your website',
    processSteps: [
      { n: '01', title: 'Brief & Analysis', desc: 'We understand your goals, market and competitors. We analyse what your customers search on Google and build an SEO strategy from the start.' },
      { n: '02', title: 'Design & Prototyping', desc: 'We design wireframes and high-fidelity mockups. No templates: every interface is built around your brand identity and optimised for conversion.' },
      { n: '03', title: 'Native Development', desc: 'We write clean Next.js code. No plugins, no WordPress, no slow builders. The result: millisecond load times and a 99/100 Lighthouse score.' },
      { n: '04', title: 'Go Live & SEO', desc: 'Launch on edge infrastructure (Vercel), Google Search Console setup, XML sitemap and structured JSON-LD data. We start already optimised for Google.' },
    ],
    pricingTitle: 'How much does a website cost in Turin in 2026?',
    pricingDesc: 'Price depends on project complexity. We are transparent: every quote includes a detailed breakdown of hours and features. Zero surprises at delivery.',
    pricingRows: [
      { type: 'Brochure Site (3-5 pages)', price: '€2,500 — €4,500', time: '3-4 weeks' },
      { type: 'Landing Page', price: '€1,200 — €2,500', time: '1-2 weeks' },
      { type: 'Custom E-Commerce', price: '€5,000 — €15,000+', time: '6-12 weeks' },
      { type: 'Web App / Portal', price: '€8,000+', time: 'Per project' },
      { type: 'Monthly Maintenance', price: 'From €150/mo', time: 'Ongoing' },
    ],
    faqLabel: 'FAQ',
    faqTitle: 'Questions about website development in Turin.',
    faqs: [
      { q: 'How long does it take to build a website in Turin?', a: 'A standard brochure site takes 3-4 weeks from contract signing. A landing page 1-2 weeks. More complex projects (e-commerce, web apps) take 6-12 weeks. The exact timeline is defined in the quote.' },
      { q: 'Why not use WordPress or Wix for my website?', a: 'WordPress and Wix use 2005 architectures with dozens of plugins that slow the site. Google penalises slow sites. We use Next.js — the same framework as Netflix, TikTok and OpenAI — to guarantee millisecond load times and native security.' },
      { q: 'Do you offer website maintenance after delivery?', a: 'Yes. Our monthly maintenance packages (from €150/month) include updates, backups, uptime monitoring and minor changes. Your site stays secure, fast and up to date.' },
      { q: 'Will my website appear on Google after launch?', a: 'Every site is delivered with XML sitemap, optimised meta tags, JSON-LD structured data and Google Search Console setup. Indexing typically occurs within 2-4 weeks of launch.' },
      { q: 'Can I manage the website content myself?', a: 'Absolutely. We integrate Sanity CMS — an intuitive control panel where you can edit text, photos and pages without touching a line of code. Included in the price.' },
    ],
    ctaTitle: 'Request a free quote',
    ctaDesc: 'Tell us about your project. We will reply within 24 hours with a detailed estimate.',
    backLink: '← Back to Web Development',
  },
  fr: {
    eyebrow: 'STUDIO DIGITAL — TURIN',
    h1: 'CRÉATION DE SITES WEB PROFESSIONNELS À TURIN.',
    desc: 'Nous développons des sites web sur mesure pour les entreprises, restaurants, studios professionnels et marques à Turin et en Piémont. Architecture Next.js, zéro template, performance 99/100.',
    breadcrumb: 'Développement Web',
    breadcrumbParent: 'Services',
    stat1: '99/100', stat1Label: 'Google Lighthouse',
    stat2: '<1s', stat2Label: 'Temps de chargement',
    stat3: '100%', stat3Label: 'Code Natif',
    offeringsTitle: 'Quel type de site web nous créons à Turin',
    offerings: [
      { icon: Globe, title: 'Site Vitrine', desc: 'Présentation professionnelle de votre activité. Design sur mesure, textes optimisés SEO et structure pensée pour convertir les visiteurs en clients.', price: 'À partir de €2 500' },
      { icon: Zap, title: 'Landing Page Haute Conversion', desc: 'Une page unique et ciblée pour les campagnes Google Ads, réseaux sociaux ou lancement produit. Structurée autour d\'un seul objectif : la conversion.', price: 'À partir de €1 200' },
      { icon: Layers, title: 'Web App & Portail Entreprise', desc: 'Plateformes digitales complexes : outil de gestion interne, réservation en ligne, portail clients, CRM sur mesure. Architectures React + Next.js évolutives et sécurisées.', price: 'À partir de €5 000' },
      { icon: Code2, title: 'Refonte Site Existant', desc: 'Votre site actuel est lent, peu performant ou invisible sur Google ? Nous analysons les problèmes et reconstruisons sur des bases solides.', price: 'Devis personnalisé' },
    ],
    whyTitle: 'Pourquoi choisir un développeur web à Turin',
    whyDesc: 'Travailler avec un studio local va au-delà de la commodité. C\'est une valeur concrète : nous connaissons le marché piémontais, pouvons nous rencontrer en personne et offrons une relation directe sans intermédiaires.',
    whyPoints: [
      'Communication directe avec le développeur — pas d\'account manager',
      'Réunions en personne à Turin sur demande',
      'Connaissance approfondie du tissu économique local',
      'Devis transparents, sans frais cachés',
      'Architecture Next.js — le même stack que Netflix et Vercel',
      'Livraison typique en 4–8 semaines',
    ],
    processTitle: 'Comment nous créons votre site web',
    processSteps: [
      { n: '01', title: 'Brief & Analyse', desc: 'Nous comprenons vos objectifs, votre marché et vos concurrents. Nous analysons ce que vos clients recherchent sur Google et construisons une stratégie SEO dès le départ.' },
      { n: '02', title: 'Design & Prototypage', desc: 'Nous concevons des wireframes et des maquettes haute fidélité. Pas de templates : chaque interface est conçue autour de votre identité de marque et optimisée pour la conversion.' },
      { n: '03', title: 'Développement Natif', desc: 'Nous écrivons du code Next.js propre. Pas de plugins, pas de WordPress, pas de constructeurs lents. Le résultat : des temps de chargement en millisecondes.' },
      { n: '04', title: 'Lancement & SEO', desc: 'Lancement sur infrastructure edge (Vercel), configuration Google Search Console, sitemap XML et données structurées JSON-LD. Nous partons déjà optimisés pour Google.' },
    ],
    pricingTitle: 'Combien coûte un site web à Turin en 2026 ?',
    pricingDesc: 'Le prix dépend de la complexité du projet. Nous sommes transparents : chaque devis comprend une estimation détaillée des heures et des fonctionnalités.',
    pricingRows: [
      { type: 'Site Vitrine (3-5 pages)', price: '€2 500 — €4 500', time: '3-4 semaines' },
      { type: 'Landing Page', price: '€1 200 — €2 500', time: '1-2 semaines' },
      { type: 'E-Commerce Sur Mesure', price: '€5 000 — €15 000+', time: '6-12 semaines' },
      { type: 'Web App / Portail', price: '€8 000+', time: 'Par projet' },
      { type: 'Maintenance Mensuelle', price: 'À partir de €150/mois', time: 'Continu' },
    ],
    faqLabel: 'FAQ',
    faqTitle: 'Questions sur la création de sites web à Turin.',
    faqs: [
      { q: 'Combien de temps faut-il pour créer un site web à Turin ?', a: 'Un site vitrine standard prend 3-4 semaines à partir de la signature du contrat. Une landing page 1-2 semaines. Les projets plus complexes (e-commerce, web apps) prennent 6-12 semaines.' },
      { q: 'Pourquoi ne pas utiliser WordPress ou Wix ?', a: 'WordPress et Wix utilisent des architectures de 2005 avec des dizaines de plugins qui ralentissent le site. Google pénalise les sites lents. Nous utilisons Next.js — le même framework que Netflix, TikTok et OpenAI.' },
      { q: 'Proposez-vous la maintenance du site après livraison ?', a: 'Oui. Nos forfaits de maintenance mensuelle (à partir de 150€/mois) incluent les mises à jour, les sauvegardes, la surveillance et les modifications mineures.' },
      { q: 'Mon site apparaîtra-t-il sur Google après le lancement ?', a: 'Chaque site est livré avec sitemap XML, balises meta optimisées, données structurées JSON-LD et configuration Google Search Console. L\'indexation se produit généralement dans les 2-4 semaines.' },
      { q: 'Puis-je gérer le contenu du site moi-même ?', a: 'Absolument. Nous intégrons Sanity CMS — un panneau de contrôle intuitif depuis lequel vous pouvez modifier textes, photos et pages sans toucher une ligne de code. Inclus dans le prix.' },
    ],
    ctaTitle: 'Demandez un devis gratuit',
    ctaDesc: 'Parlez-nous de votre projet. Nous vous répondrons sous 24h avec une estimation détaillée.',
    backLink: '← Retour au Développement Web',
  },
}

export default async function SitoWebTorinoPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang as Locale)
  const c = CONTENT[lang as keyof typeof CONTENT] || CONTENT.it

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        name: 'Maksi Thompson — Realizzazione Siti Web Torino',
        description: dict.meta.sitoWebTorino.description,
        address: { '@type': 'PostalAddress', addressLocality: 'Torino', addressRegion: 'Piemonte', addressCountry: 'IT' },
        areaServed: { '@type': 'City', name: 'Torino' },
        priceRange: '€€€',
        url: `${BASE_URL}/it/servizi/sviluppo-siti-web/sito-web-torino`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: c.faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#CCFF00] selection:text-black font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* HERO */}
      <section className="pt-32 pb-20 px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-gray-500 mb-10 font-mono">
            <Link href={`/${lang}`} className="hover:text-[#CCFF00] transition-colors">Home</Link>
            <span>/</span>
            <Link href={`/${lang}/servizi/sviluppo-siti-web`} className="hover:text-[#CCFF00] transition-colors">{c.breadcrumb}</Link>
            <span>/</span>
            <span className="text-gray-300">{lang === 'it' ? 'Sito Web Torino' : lang === 'fr' ? 'Site Web Turin' : 'Website Turin'}</span>
          </nav>
          <p className="text-xs font-bold tracking-widest uppercase text-[#CCFF00] mb-6">| {c.eyebrow}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight max-w-5xl mb-8">
            {c.h1}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-12">{c.desc}</p>
          <div className="flex flex-wrap gap-6">
            {[
              { v: c.stat1, l: c.stat1Label },
              { v: c.stat2, l: c.stat2Label },
              { v: c.stat3, l: c.stat3Label },
            ].map((s) => (
              <div key={s.l} className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4">
                <p className="text-2xl font-bold text-[#CCFF00]">{s.v}</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERINGS */}
      <section className="py-20 px-8 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium mb-12 text-white">{c.offeringsTitle}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {c.offerings.map((o, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-[#CCFF00]/40 transition-colors duration-500 group">
                <o.icon className="w-8 h-8 text-white mb-6 group-hover:text-[#CCFF00] transition-colors" />
                <h3 className="text-xl font-medium text-white mb-3">{o.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{o.desc}</p>
                <span className="text-[#CCFF00] text-xs font-bold tracking-widest uppercase">{o.price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LOCAL */}
      <section className="py-20 px-8 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">{c.whyTitle}</h2>
            <p className="text-gray-400 leading-relaxed mb-10">{c.whyDesc}</p>
            <ul className="space-y-4">
              {c.whyPoints.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-[#CCFF00] shrink-0 mt-0.5" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#111111] border border-white/10 rounded-[2rem] p-10">
            <p className="text-xs font-bold tracking-widest uppercase text-[#CCFF00] mb-4">Digital Studio</p>
            <p className="text-4xl font-bold text-white mb-2">Torino</p>
            <p className="text-gray-400 text-sm mb-8">Piemonte, Italia — Disponibile Worldwide</p>
            <Link
              href={`/${lang}/#contact`}
              className="inline-flex items-center gap-3 bg-[#CCFF00] text-black text-xs font-bold uppercase tracking-widest px-6 py-3 rounded-full hover:bg-white transition-colors"
            >
              {lang === 'it' ? 'Richiedi Preventivo' : lang === 'fr' ? 'Demander un Devis' : 'Get a Quote'}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 px-8 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-12">{c.processTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.processSteps.map((s) => (
              <div key={s.n} className="p-8 rounded-[2rem] bg-[#111111] border border-white/10">
                <p className="text-4xl font-bold text-[#CCFF00]/30 mb-6 font-mono">{s.n}</p>
                <h3 className="text-lg font-medium text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING TABLE */}
      <section className="py-20 px-8 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-4">{c.pricingTitle}</h2>
          <p className="text-gray-400 mb-10">{c.pricingDesc}</p>
          <div className="overflow-hidden rounded-[2rem] border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#111111] border-b border-white/10">
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-400">{lang === 'it' ? 'Tipologia' : lang === 'fr' ? 'Type' : 'Type'}</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-400">{lang === 'it' ? 'Investimento' : lang === 'fr' ? 'Investissement' : 'Investment'}</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-400">{lang === 'it' ? 'Tempi' : lang === 'fr' ? 'Délai' : 'Timeline'}</th>
                </tr>
              </thead>
              <tbody>
                {c.pricingRows.map((r, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-white/2 transition-colors">
                    <td className="px-6 py-4 text-white font-medium">{r.type}</td>
                    <td className="px-6 py-4 text-[#CCFF00] font-bold">{r.price}</td>
                    <td className="px-6 py-4 text-gray-400 flex items-center gap-2"><Clock className="w-3 h-3" />{r.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-8 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#CCFF00] mb-4">{c.faqLabel}</p>
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-12">{c.faqTitle}</h2>
          <div className="space-y-4">
            {c.faqs.map((f, i) => (
              <div key={i} className="p-6 md:p-8 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-white/30 transition-colors">
                <h3 className="text-lg font-medium text-white mb-3 flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#CCFF00] shrink-0 mt-2" />
                  {f.q}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed pl-5">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BACK LINK */}
      <div className="px-8 md:px-12 lg:px-24 pb-4">
        <div className="max-w-7xl mx-auto">
          <Link href={`/${lang}/servizi/sviluppo-siti-web`} className="text-xs font-bold tracking-widest uppercase text-gray-500 hover:text-[#CCFF00] transition-colors">
            {c.backLink}
          </Link>
        </div>
      </div>

      <Contact dict={dict.contact} />
    </div>
  )
}
