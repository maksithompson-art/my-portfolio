export const runtime = 'edge'

import type { Metadata } from 'next'
import { ArrowUpRight, CheckCircle2, Camera, Utensils, Instagram, Globe, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getDictionary, hasLocale, type Locale } from '../../../dictionaries'
import Contact from '@/components/Contact'

const BASE_URL = 'https://maksithompson.com'

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!hasLocale(lang)) return {}
  const dict = await getDictionary(lang as Locale)
  return {
    title: dict.meta.fotografoRistoranti.title,
    description: dict.meta.fotografoRistoranti.description,
    alternates: {
      canonical: `${BASE_URL}/${lang}/servizi/fotografia/fotografo-ristoranti-torino`,
      languages: {
        'it': `${BASE_URL}/it/servizi/fotografia/fotografo-ristoranti-torino`,
        'en': `${BASE_URL}/en/servizi/fotografia/fotografo-ristoranti-torino`,
        'fr': `${BASE_URL}/fr/servizi/fotografia/fotografo-ristoranti-torino`,
        'x-default': `${BASE_URL}/it/servizi/fotografia/fotografo-ristoranti-torino`,
      },
    },
    openGraph: {
      title: dict.meta.fotografoRistoranti.title,
      description: dict.meta.fotografoRistoranti.description,
      type: 'website',
    },
  }
}

const CONTENT = {
  it: {
    eyebrow: 'FOOD PHOTOGRAPHY — TORINO',
    h1a: 'FOTOGRAFO',
    h1b: 'RISTORANTI',
    h1c: 'A TORINO.',
    tagline1: 'FOOD PHOTOGRAPHY',
    tagline2: 'ART DIRECTION',
    tagline3: 'SOCIAL & WEB',
    desc: 'Scatti professionali che vendono. Realizzo shooting fotografici per ristoranti, trattorie, bistrot, pizzerie e locali di Torino: piatti, ambienti e menu che attirano clienti online e offline.',
    breadcrumb: 'Fotografia',
    breadcrumbLabel: 'Fotografo Ristoranti Torino',
    whyTitle: 'Perché le foto del ristorante fanno la differenza',
    whyDesc: 'Il 93% dei consumatori guarda le foto online prima di scegliere un ristorante. Un menu con immagini professionali genera il 70% in più di prenotazioni rispetto a un menu senza foto. Non è estetica: è conversione.',
    stats: [
      { v: '93%', l: 'controlla le foto prima di prenotare' },
      { v: '+70%', l: 'prenotazioni con foto professionali' },
      { v: '3×', l: 'più click sui profili con foto di qualità' },
      { v: '<7gg', l: 'consegna file ritoccati' },
    ],
    services: [
      { icon: Utensils, title: 'Food Photography', desc: 'Shooting dei piatti con luce naturale o studio. Ogni scatto è preparato con art direction: composizione, prop styling e color grading per esaltare l\'appetibilità del cibo.' },
      { icon: Camera, title: 'Fotografia degli Ambienti', desc: 'Interni, dettagli d\'arredo e atmosfera del locale. Immagini per sito web, Google My Business e booking. La prima impressione parte dalle foto.' },
      { icon: Instagram, title: 'Contenuti per Social Media', desc: 'Pack di immagini ottimizzate per Instagram, Facebook e TikTok. Format verticale, orizzontale e quadrato. Pianificazione editoriale su richiesta.' },
      { icon: Globe, title: 'Foto per Sito Web e Menu', desc: 'Immagini in alta risoluzione per il sito web del ristorante, menu digitale e cartaceo. Consegna file ottimizzati per web (WebP) e stampa (TIFF/JPG 300dpi).' },
    ],
    processTitle: 'Come lavoro per ristoranti a Torino',
    processSteps: [
      { n: '01', title: 'Briefing & Art Direction', desc: 'Discutiamo il posizionamento del locale, il target clienti e il tone of voice visivo. Definisco uno storyboard dello shooting prima di iniziare.' },
      { n: '02', title: 'Shooting in Location', desc: 'Lavoro direttamente nel tuo locale, preferibilmente nelle ore di luce migliore. Porto attrezzatura professionale cinema-grade. Lo shooting dura tipicamente 4-8 ore.' },
      { n: '03', title: 'Post-Produzione', desc: 'Selezione, ritocco e color grading professionale. Ogni foto viene ottimizzata per il canale di destinazione (web, social, stampa).' },
      { n: '04', title: 'Consegna File', desc: 'Galleria privata online entro 7-10 giorni lavorativi. File in tutti i formati richiesti con licenza commerciale illimitata.' },
    ],
    packagesTitle: 'Pacchetti fotografici per ristoranti',
    packages: [
      { name: 'Essential', desc: 'Shooting mezza giornata (4 ore), fino a 10 piatti + 5 ambienti. 30 foto ritoccate.', price: 'Da €400', popular: false },
      { name: 'Professional', desc: 'Shooting giornata intera (8 ore), piatti illimitati + ambienti + dettagli. 80 foto ritoccate. Pack social media incluso.', price: 'Da €800', popular: true },
      { name: 'Premium', desc: 'Due giornate di shooting, fotografia + 3D rendering per piatti stagionali, menu fotografico completo, gestione social 1 mese.', price: 'Preventivo su misura', popular: false },
    ],
    popularLabel: '★ Più Richiesto',
    deliverables: [
      'Licenza commerciale illimitata su tutte le foto',
      'File ottimizzati per web (WebP) e stampa (TIFF/JPG 300dpi)',
      'Galleria privata online per download',
      'Art direction inclusa nel prezzo',
      'Possibilità di abbinamento con servizio sito web',
    ],
    deliverablesTitle: 'Incluso in ogni pacchetto:',
    faqLabel: 'FAQ',
    faqTitle: 'Domande sul servizio fotografico per ristoranti a Torino.',
    faqs: [
      { q: 'Quanto costa un servizio fotografico per un ristorante a Torino?', a: 'Il prezzo dipende dalla durata dello shooting e dal numero di foto richieste. Un pacchetto base (mezza giornata, 30 foto) parte da €400. Una giornata intera con 80+ foto parte da €800. Ogni preventivo è personalizzato in base alle esigenze specifiche.' },
      { q: 'Devo chiudere il ristorante durante lo shooting?', a: 'Non necessariamente. Lavoriamo spesso in orari di chiusura (mattina presto o nei giorni di riposo) per avere la massima libertà. In alternativa, possiamo coordinarci con la cucina per lavorare tra un servizio e l\'altro.' },
      { q: 'Posso usare le foto su tutti i canali?', a: 'Sì. Tutte le foto includono licenza commerciale illimitata: sito web, social media, menu stampati, Google My Business, TripAdvisor, app di delivery e materiali pubblicitari.' },
      { q: 'Quanto tempo ci vuole per ricevere le foto?', a: 'Le foto ritoccate vengono consegnate entro 7-10 giorni lavorativi dalla data dello shooting tramite galleria privata online.' },
      { q: 'Fate anche il sito web per ristoranti a Torino?', a: 'Sì, è uno dei nostri pacchetti più richiesti: shooting fotografico + sviluppo sito web in Next.js con menu digitale, prenotazioni online e SEO locale. Un unico studio per entrambi i servizi.' },
    ],
    backLink: '← Torna a Fotografia',
    quoteBtn: 'Richiedi Preventivo',
  },
  en: {
    eyebrow: 'FOOD PHOTOGRAPHY — TURIN',
    h1a: 'RESTAURANT',
    h1b: 'PHOTOGRAPHER',
    h1c: 'IN TURIN.',
    tagline1: 'FOOD PHOTOGRAPHY',
    tagline2: 'ART DIRECTION',
    tagline3: 'SOCIAL & WEB',
    desc: 'Professional shots that sell. I create photo shoots for restaurants, trattorias, bistros and venues in Turin: dishes, interiors and menus that attract customers online and offline.',
    breadcrumb: 'Photography',
    breadcrumbLabel: 'Restaurant Photographer Turin',
    whyTitle: 'Why restaurant photos make the difference',
    whyDesc: '93% of consumers look at photos online before choosing a restaurant. A menu with professional images generates 70% more bookings than one without photos. It\'s not aesthetics — it\'s conversion.',
    stats: [
      { v: '93%', l: 'check photos before booking' },
      { v: '+70%', l: 'bookings with pro photos' },
      { v: '3×', l: 'more clicks with quality photos' },
      { v: '<7d', l: 'retouched file delivery' },
    ],
    services: [
      { icon: Utensils, title: 'Food Photography', desc: 'Dish shoots with natural or studio light. Every shot is prepared with art direction: composition, prop styling and colour grading to enhance the food\'s appeal.' },
      { icon: Camera, title: 'Interior Photography', desc: 'Interiors, furnishing details and atmosphere. Images for your website, Google My Business and booking platforms. First impressions start with photos.' },
      { icon: Instagram, title: 'Social Media Content', desc: 'Images optimised for Instagram, Facebook and TikTok. Vertical, horizontal and square formats. Editorial planning available on request.' },
      { icon: Globe, title: 'Website & Menu Photos', desc: 'High-resolution images for the restaurant website, digital and printed menus. Files optimised for web (WebP) and print (TIFF/JPG 300dpi).' },
    ],
    processTitle: 'How I work for restaurants in Turin',
    processSteps: [
      { n: '01', title: 'Briefing & Art Direction', desc: 'We discuss the venue\'s positioning, target clients and visual tone of voice. I define a shooting storyboard before we begin.' },
      { n: '02', title: 'On-Location Shoot', desc: 'I work directly in your venue, preferably during the best light hours. I bring professional cinema-grade equipment. Shoots typically last 4-8 hours.' },
      { n: '03', title: 'Post-Production', desc: 'Selection, retouching and professional colour grading. Every photo is optimised for its destination channel (web, social, print).' },
      { n: '04', title: 'File Delivery', desc: 'Private online gallery within 7-10 working days. Files in all required formats with unlimited commercial licence.' },
    ],
    packagesTitle: 'Photography packages for restaurants',
    packages: [
      { name: 'Essential', desc: 'Half-day shoot (4 hours), up to 10 dishes + 5 interiors. 30 retouched photos.', price: 'From €400', popular: false },
      { name: 'Professional', desc: 'Full-day shoot (8 hours), unlimited dishes + interiors + details. 80 retouched photos. Social media pack included.', price: 'From €800', popular: true },
      { name: 'Premium', desc: 'Two-day shoot, photography + 3D rendering for seasonal dishes, full photo menu, 1-month social management.', price: 'Custom quote', popular: false },
    ],
    popularLabel: '★ Most Popular',
    deliverables: [
      'Unlimited commercial licence on all photos',
      'Files optimised for web (WebP) and print (TIFF/JPG 300dpi)',
      'Private online gallery for download',
      'Art direction included in price',
      'Option to combine with website development service',
    ],
    deliverablesTitle: 'Included in every package:',
    faqLabel: 'FAQ',
    faqTitle: 'Questions about restaurant photography in Turin.',
    faqs: [
      { q: 'How much does a restaurant photo shoot in Turin cost?', a: 'Price depends on shoot duration and number of photos required. A basic package (half-day, 30 photos) starts from €400. A full day with 80+ photos starts from €800. Every quote is personalised.' },
      { q: 'Do I need to close the restaurant during the shoot?', a: 'Not necessarily. We often work during closed hours (early morning or rest days) for maximum freedom. Alternatively, we can coordinate with the kitchen to work between service times.' },
      { q: 'Can I use the photos on all channels?', a: 'Yes. All photos include unlimited commercial licence: website, social media, printed menus, Google My Business, TripAdvisor, delivery apps and advertising materials.' },
      { q: 'How long does it take to receive the photos?', a: 'Retouched photos are delivered within 7-10 working days from the shoot date via a private online gallery.' },
    ],
    backLink: '← Back to Photography',
    quoteBtn: 'Get a Quote',
  },
  fr: {
    eyebrow: 'FOOD PHOTOGRAPHY — TURIN',
    h1a: 'PHOTOGRAPHE',
    h1b: 'RESTAURANT',
    h1c: 'À TURIN.',
    tagline1: 'FOOD PHOTOGRAPHY',
    tagline2: 'DIRECTION ARTISTIQUE',
    tagline3: 'SOCIAL & WEB',
    desc: 'Des clichés professionnels qui vendent. Je réalise des shootings photographiques pour les restaurants, trattorias, bistrots et établissements de Turin : plats, ambiances et menus qui attirent les clients.',
    breadcrumb: 'Photographie',
    breadcrumbLabel: 'Photographe Restaurant Turin',
    whyTitle: 'Pourquoi les photos du restaurant font la différence',
    whyDesc: '93% des consommateurs regardent les photos en ligne avant de choisir un restaurant. Un menu avec des images professionnelles génère 70% de réservations supplémentaires.',
    stats: [
      { v: '93%', l: 'vérifie les photos avant de réserver' },
      { v: '+70%', l: 'réservations avec photos pro' },
      { v: '3×', l: 'plus de clics avec photos de qualité' },
      { v: '<7j', l: 'livraison fichiers retouchés' },
    ],
    services: [
      { icon: Utensils, title: 'Food Photography', desc: 'Shooting des plats en lumière naturelle ou studio. Chaque cliché est préparé avec direction artistique : composition, prop styling et étalonnage couleur.' },
      { icon: Camera, title: 'Photographie d\'Intérieur', desc: 'Intérieurs, détails de décoration et atmosphère du lieu. Images pour site web, Google My Business et plateformes de réservation.' },
      { icon: Instagram, title: 'Contenu Réseaux Sociaux', desc: 'Images optimisées pour Instagram, Facebook et TikTok. Formats vertical, horizontal et carré. Planification éditoriale disponible sur demande.' },
      { icon: Globe, title: 'Photos Site Web & Menu', desc: 'Images haute résolution pour le site web du restaurant, menu digital et imprimé. Fichiers optimisés pour le web (WebP) et l\'impression.' },
    ],
    processTitle: 'Comment je travaille pour les restaurants à Turin',
    processSteps: [
      { n: '01', title: 'Briefing & Direction Artistique', desc: 'Nous discutons du positionnement du lieu, des clients cibles et du ton visuel. Je définis un storyboard du shooting avant de commencer.' },
      { n: '02', title: 'Shooting sur Site', desc: 'Je travaille directement dans votre établissement, de préférence aux meilleures heures de lumière. J\'apporte un équipement professionnel cinéma. Les shootings durent typiquement 4-8 heures.' },
      { n: '03', title: 'Post-Production', desc: 'Sélection, retouche et étalonnage professionnel. Chaque photo est optimisée pour son canal de destination (web, réseaux sociaux, impression).' },
      { n: '04', title: 'Livraison des Fichiers', desc: 'Galerie privée en ligne sous 7-10 jours ouvrables. Fichiers dans tous les formats requis avec licence commerciale illimitée.' },
    ],
    packagesTitle: 'Forfaits photographiques pour restaurants',
    packages: [
      { name: 'Essential', desc: 'Shooting demi-journée (4h), jusqu\'à 10 plats + 5 intérieurs. 30 photos retouchées.', price: 'À partir de €400', popular: false },
      { name: 'Professional', desc: 'Shooting journée entière (8h), plats illimités + intérieurs + détails. 80 photos retouchées. Pack réseaux sociaux inclus.', price: 'À partir de €800', popular: true },
      { name: 'Premium', desc: 'Deux jours de shooting, photographie + rendu 3D, menu photographique complet, gestion réseaux sociaux 1 mois.', price: 'Devis personnalisé', popular: false },
    ],
    popularLabel: '★ Plus Demandé',
    deliverables: [
      'Licence commerciale illimitée sur toutes les photos',
      'Fichiers optimisés pour le web (WebP) et l\'impression',
      'Galerie privée en ligne pour téléchargement',
      'Direction artistique incluse dans le prix',
      'Option de combinaison avec développement site web',
    ],
    deliverablesTitle: 'Inclus dans chaque forfait :',
    faqLabel: 'FAQ',
    faqTitle: 'Questions sur la photographie de restaurant à Turin.',
    faqs: [
      { q: 'Combien coûte un shooting photo pour un restaurant à Turin ?', a: 'Le prix dépend de la durée du shooting et du nombre de photos requises. Un forfait de base (demi-journée, 30 photos) part de 400€. Une journée entière avec 80+ photos part de 800€.' },
      { q: 'Dois-je fermer le restaurant pendant le shooting ?', a: 'Pas nécessairement. Nous travaillons souvent pendant les heures de fermeture (tôt le matin ou les jours de repos) pour une liberté maximale.' },
      { q: 'Puis-je utiliser les photos sur tous les canaux ?', a: 'Oui. Toutes les photos incluent une licence commerciale illimitée : site web, réseaux sociaux, menus imprimés, Google My Business, TripAdvisor et matériels publicitaires.' },
      { q: 'Combien de temps faut-il pour recevoir les photos ?', a: 'Les photos retouchées sont livrées sous 7-10 jours ouvrables à partir de la date du shooting via une galerie privée en ligne.' },
    ],
    backLink: '← Retour à Photographie',
    quoteBtn: 'Demander un Devis',
  },
}

export default async function FotografoRistoraniTorinoPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang as Locale)
  const c = CONTENT[lang as keyof typeof CONTENT] || CONTENT.it

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        name: 'Maksi Thompson — Fotografo Ristoranti Torino',
        description: dict.meta.fotografoRistoranti.description,
        address: { '@type': 'PostalAddress', addressLocality: 'Torino', addressRegion: 'Piemonte', addressCountry: 'IT' },
        areaServed: { '@type': 'City', name: 'Torino' },
        priceRange: '€€',
        url: `${BASE_URL}/it/servizi/fotografia/fotografo-ristoranti-torino`,
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
      <section className="relative min-h-screen w-full bg-[#0A0A0A] text-white overflow-hidden flex flex-col justify-between p-8 md:p-12 lg:p-16">
        <div className="absolute inset-0 z-0">
          <Image src="/audi.webp" alt={c.h1a} fill priority className="object-cover object-top opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/20 to-[#0A0A0A]" />
        </div>
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-12 w-full mt-24">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-xs text-gray-500 mb-6 font-mono">
              <Link href={`/${lang}`} className="hover:text-[#CCFF00] transition-colors">Home</Link>
              <span>/</span>
              <Link href={`/${lang}/servizi/fotografia`} className="hover:text-[#CCFF00] transition-colors">{c.breadcrumb}</Link>
              <span>/</span>
              <span className="text-gray-300">{c.breadcrumbLabel}</span>
            </nav>
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

      {/* WHY */}
      <section className="py-20 px-8 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">{c.whyTitle}</h2>
            <p className="text-gray-300 leading-relaxed text-lg">{c.whyDesc}</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {c.stats.map((s) => (
              <div key={s.l} className="bg-[#111111] border border-white/10 rounded-2xl p-6">
                <p className="text-3xl font-bold text-[#CCFF00] mb-2">{s.v}</p>
                <p className="text-xs text-gray-400 leading-snug">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-8 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {c.services.map((s, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-[#CCFF00]/40 transition-colors duration-500 group">
                <s.icon className="w-8 h-8 text-white mb-6 group-hover:text-[#CCFF00] transition-colors" />
                <h3 className="text-xl font-medium text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
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

      {/* PACKAGES */}
      <section className="py-20 px-8 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-10">{c.packagesTitle}</h2>
          <div className="space-y-4">
            {c.packages.map((p, i) => (
              <div key={i} className={`p-8 rounded-[2rem] border transition-colors ${p.popular ? 'bg-[#CCFF00]/5 border-[#CCFF00]/30' : 'bg-[#111111] border-white/10'}`}>
                <div className="flex justify-between items-start">
                  <div>
                    {p.popular && <span className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00] mb-2 block">{c.popularLabel}</span>}
                    <h3 className="text-xl font-medium text-white mb-3">{p.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-md">{p.desc}</p>
                  </div>
                  <span className="text-[#CCFF00] font-bold text-lg shrink-0 ml-8">{p.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 rounded-[2rem] bg-[#111111] border border-white/10">
            <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-widest">{c.deliverablesTitle}</h3>
            <ul className="grid md:grid-cols-2 gap-2">
              {c.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                  <Star className="w-3 h-3 text-[#CCFF00] shrink-0 mt-1" />{d}
                </li>
              ))}
            </ul>
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
                  <span className="w-2 h-2 rounded-full bg-[#CCFF00] shrink-0 mt-2" />{f.q}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed pl-5">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-8 md:px-12 lg:px-24 pb-4">
        <div className="max-w-7xl mx-auto">
          <Link href={`/${lang}/servizi/fotografia`} className="text-xs font-bold tracking-widest uppercase text-gray-500 hover:text-[#CCFF00] transition-colors">
            {c.backLink}
          </Link>
        </div>
      </div>

      <Contact dict={dict.contact} />
    </div>
  )
}
