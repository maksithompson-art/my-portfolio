export const runtime = 'edge'

import type { Metadata } from 'next'
import { ArrowUpRight, CheckCircle2, Camera, Users, Briefcase, Building2, Award, Globe } from 'lucide-react'
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
    title: dict.meta.fotografoCorporate.title,
    description: dict.meta.fotografoCorporate.description,
    alternates: {
      canonical: `${BASE_URL}/${lang}/servizi/fotografia/fotografo-corporate-torino`,
      languages: {
        'it': `${BASE_URL}/it/servizi/fotografia/fotografo-corporate-torino`,
        'en': `${BASE_URL}/en/servizi/fotografia/fotografo-corporate-torino`,
        'fr': `${BASE_URL}/fr/servizi/fotografia/fotografo-corporate-torino`,
        'x-default': `${BASE_URL}/it/servizi/fotografia/fotografo-corporate-torino`,
      },
    },
    openGraph: {
      title: dict.meta.fotografoCorporate.title,
      description: dict.meta.fotografoCorporate.description,
      type: 'website',
    },
  }
}

const CONTENT = {
  it: {
    eyebrow: 'FOTOGRAFIA CORPORATE — TORINO',
    h1: 'FOTOGRAFO CORPORATE E AZIENDALE A TORINO.',
    desc: 'Ritratti professionali, eventi aziendali, conferenze e brand identity per aziende e professionisti a Torino e in Piemonte. Un portfolio che include il Festival di Cannes, il Gran Premio di Monaco e produzioni cinematografiche internazionali.',
    breadcrumb: 'Fotografia',
    credentialsBadge: 'Festival de Cannes · Monaco Grand Prix · Goldfinch UK',
    services: [
      { icon: Users, title: 'Ritratti Professionali & Team', desc: 'Headshot professionali per LinkedIn, sito aziendale e materiali di comunicazione. Ritratti individuali e foto di gruppo per team aziendali. Sessioni in studio o in location.' },
      { icon: Briefcase, title: 'Eventi Aziendali & Conferenze', desc: 'Copertura fotografica di convegni, lanci prodotto, fiere, team building e workshop. Editing rapido e consegna entro 48 ore per comunicazioni urgenti.' },
      { icon: Building2, title: 'Fotografia degli Spazi Aziendali', desc: 'Uffici, showroom, sedi operative e spazi produttivi. Immagini per comunicazione istituzionale, sito web e materiali di presentazione.' },
      { icon: Camera, title: 'Shooting per Brand Identity', desc: 'Campagne visive coerenti con l\'identità del brand. Dalla pre-produzione alla consegna degli asset: immagini pensate per costruire autorità e riconoscibilità.' },
      { icon: Globe, title: 'Contenuti per Comunicazione Digitale', desc: 'Immagini ottimizzate per LinkedIn, sito web, presentazioni istituzionali e comunicati stampa. Formati per ogni canale di comunicazione.' },
      { icon: Award, title: 'Produzione per Media & Stampa', desc: 'Fotografie in alta risoluzione per uffici stampa, media kit e agenzie. Consegna rapida con tutti i metadati IPTC. Esperienza in produzione per stampa internazionale.' },
    ],
    experienceTitle: 'Un background internazionale al servizio delle aziende torinesi',
    experienceDesc: 'Ho iniziato la mia carriera come fotografo ufficiale al Marché du Film del Festival di Cannes, dove ho imparato a lavorare sotto pressione con deadline serrate e standard internazionali. Ho coperto il Gran Premio di Monaco, lavorato su produzioni cinematografiche nel Regno Unito e diretto shooting di moda in Costa Azzurra. Questa esperienza si traduce in una capacità unica di catturare il momento decisivo con professionalità assoluta — qualità essenziale per la fotografia corporate di livello.',
    timeline: [
      { year: '2018–2019', role: 'Fotografo Ufficiale', company: 'Festival de Cannes, Francia' },
      { year: '2018', role: 'Sport Photographer', company: 'Gran Premio Storico di Monaco' },
      { year: '2019', role: 'Set Photographer', company: 'Goldfinch Film Production, UK' },
      { year: '2023–Oggi', role: 'Art Director & Photographer', company: 'Digital Studio Torino' },
    ],
    packagesTitle: 'Pacchetti corporate',
    packages: [
      { name: 'Headshot Session', desc: 'Sessione ritratti individuali o piccolo team (fino a 5 persone). 2-3 ore in studio o in location a Torino. 15 foto ritoccate per persona.', price: 'Da €300' },
      { name: 'Evento Aziendale', desc: 'Copertura evento mezza o giornata intera. Editing in 48 ore. Galleria privata con 100-300 foto. Adatto per conferenze, lanci, fiere.', price: 'Da €600' },
      { name: 'Brand Identity Campaign', desc: 'Campagna fotografica completa: pre-produzione, shooting 1-2 giorni, post-produzione con art direction. Asset per tutti i canali.', price: 'Preventivo su misura' },
    ],
    deliverables: [
      'Galleria privata online per download',
      'Licenza commerciale illimitata',
      'File ottimizzati per web e stampa',
      'Consegna entro 7-10 giorni lavorativi',
      'Metadati IPTC per uffici stampa',
      'Art direction inclusa',
    ],
    faqLabel: 'FAQ',
    faqTitle: 'Domande sulla fotografia corporate a Torino.',
    faqs: [
      { q: 'Quanto costa un servizio fotografico corporate a Torino?', a: 'Una sessione headshot per piccoli team parte da €300. La copertura di un evento aziendale da €600. Campagne fotografiche complete per brand identity vengono preventivate su misura. Ogni proposta include una stima dettagliata.' },
      { q: 'Fate fotografo per eventi aziendali a Torino?', a: 'Sì, è uno dei nostri servizi principali. Copriamo conferenze, convegni, lanci prodotto, fiere, team building e workshop. Offriamo editing rapido con consegna entro 48 ore per comunicazioni urgenti.' },
      { q: 'Lavorate anche fuori Torino?', a: 'Sì. Siamo disponibili per progetti in tutto il Piemonte, in Italia e all\'estero. La copertura fotografica internazionale fa parte del nostro background professionale.' },
      { q: 'Posso richiedere una consegna urgente delle foto?', a: 'Sì. Per eventi con esigenze di comunicazione immediata (comunicati stampa, post-evento), offriamo consegna prioritaria di una selezione di foto editorate entro 24-48 ore dallo shooting.' },
      { q: 'Offrite anche servizi video aziendali?', a: 'Sì. Oltre alla fotografia corporate, produciamo video aziendali, interviste e contenuti per social media. Un unico studio per fotografia, video e sviluppo sito web.' },
    ],
    ctaTitle: 'Richiedi un preventivo per il tuo progetto corporate.',
    backLink: '← Torna a Fotografia',
  },
  en: {
    eyebrow: 'CORPORATE PHOTOGRAPHY — TURIN',
    h1: 'CORPORATE AND BUSINESS PHOTOGRAPHER IN TURIN.',
    desc: 'Professional portraits, corporate events, conferences and brand identity for companies and professionals in Turin and Piedmont. A portfolio including the Cannes Film Festival, Monaco Grand Prix and international film productions.',
    breadcrumb: 'Photography',
    credentialsBadge: 'Festival de Cannes · Monaco Grand Prix · Goldfinch UK',
    services: [
      { icon: Users, title: 'Professional Portraits & Team', desc: 'Professional headshots for LinkedIn, company website and communications. Individual portraits and group photos for corporate teams. Studio or location sessions.' },
      { icon: Briefcase, title: 'Corporate Events & Conferences', desc: 'Photo coverage of conventions, product launches, trade shows, team building and workshops. Fast editing with 48-hour delivery for urgent communications.' },
      { icon: Building2, title: 'Corporate Space Photography', desc: 'Offices, showrooms, operational premises and production spaces. Images for institutional communication, websites and presentation materials.' },
      { icon: Camera, title: 'Brand Identity Shoots', desc: 'Visual campaigns consistent with brand identity. From pre-production to asset delivery: images built to establish authority and recognisability.' },
      { icon: Globe, title: 'Digital Communication Content', desc: 'Images optimised for LinkedIn, websites, institutional presentations and press releases. Formats for every communication channel.' },
      { icon: Award, title: 'Media & Press Production', desc: 'High-resolution photographs for press offices, media kits and agencies. Fast delivery with full IPTC metadata. Experience in production for international press.' },
    ],
    experienceTitle: 'An international background serving Turin businesses',
    experienceDesc: 'I began my career as official photographer at the Cannes Film Festival\'s Marché du Film, where I learned to work under pressure with tight deadlines and international standards. I covered the Monaco Grand Prix, worked on film productions in the UK and directed fashion shoots on the French Riviera. This experience translates into a unique ability to capture the decisive moment with absolute professionalism — an essential quality for high-level corporate photography.',
    timeline: [
      { year: '2018–2019', role: 'Official Photographer', company: 'Festival de Cannes, France' },
      { year: '2018', role: 'Sport Photographer', company: 'Monaco Historique Grand Prix' },
      { year: '2019', role: 'Set Photographer', company: 'Goldfinch Film Production, UK' },
      { year: '2023–Now', role: 'Art Director & Photographer', company: 'Digital Studio Turin' },
    ],
    packagesTitle: 'Corporate packages',
    packages: [
      { name: 'Headshot Session', desc: 'Individual or small team portrait session (up to 5 people). 2-3 hours in studio or on location in Turin. 15 retouched photos per person.', price: 'From €300' },
      { name: 'Corporate Event', desc: 'Half or full-day event coverage. Editing in 48 hours. Private gallery with 100-300 photos. Suitable for conferences, launches, trade shows.', price: 'From €600' },
      { name: 'Brand Identity Campaign', desc: 'Complete photography campaign: pre-production, 1-2 day shoot, post-production with art direction. Assets for all channels.', price: 'Custom quote' },
    ],
    deliverables: [
      'Private online gallery for download',
      'Unlimited commercial licence',
      'Files optimised for web and print',
      'Delivery within 7-10 working days',
      'IPTC metadata for press offices',
      'Art direction included',
    ],
    faqLabel: 'FAQ',
    faqTitle: 'Questions about corporate photography in Turin.',
    faqs: [
      { q: 'How much does corporate photography in Turin cost?', a: 'A headshot session for small teams starts from €300. Corporate event coverage from €600. Complete brand identity campaigns are quoted individually. Every proposal includes a detailed estimate.' },
      { q: 'Do you cover corporate events in Turin?', a: 'Yes, it is one of our main services. We cover conferences, conventions, product launches, trade shows, team building and workshops. We offer fast editing with 48-hour delivery for urgent communications.' },
      { q: 'Do you work outside Turin?', a: 'Yes. We are available for projects across Piedmont, Italy and internationally. International photo coverage is part of our professional background.' },
      { q: 'Can I request urgent photo delivery?', a: 'Yes. For events with immediate communication needs (press releases, post-event), we offer priority delivery of a selection of edited photos within 24-48 hours of the shoot.' },
    ],
    ctaTitle: 'Request a quote for your corporate project.',
    backLink: '← Back to Photography',
  },
  fr: {
    eyebrow: 'PHOTOGRAPHIE CORPORATE — TURIN',
    h1: 'PHOTOGRAPHE CORPORATE ET D\'ENTREPRISE À TURIN.',
    desc: 'Portraits professionnels, événements d\'entreprise, conférences et identité de marque pour les entreprises et professionnels à Turin et en Piémont. Un portfolio incluant le Festival de Cannes, le Grand Prix de Monaco et des productions cinématographiques internationales.',
    breadcrumb: 'Photographie',
    credentialsBadge: 'Festival de Cannes · Grand Prix de Monaco · Goldfinch UK',
    services: [
      { icon: Users, title: 'Portraits Professionnels & Équipe', desc: 'Headshots professionnels pour LinkedIn, site web d\'entreprise et communications. Portraits individuels et photos de groupe pour les équipes. Sessions en studio ou sur site.' },
      { icon: Briefcase, title: 'Événements Corporate & Conférences', desc: 'Couverture photo de conventions, lancements produit, salons, team building et ateliers. Montage rapide avec livraison en 48h pour les communications urgentes.' },
      { icon: Building2, title: 'Photographie des Espaces', desc: 'Bureaux, showrooms, locaux et espaces de production. Images pour la communication institutionnelle, le site web et les supports de présentation.' },
      { icon: Camera, title: 'Shootings pour l\'Identité de Marque', desc: 'Campagnes visuelles cohérentes avec l\'identité de la marque. De la pré-production à la livraison des assets : images conçues pour construire l\'autorité.' },
      { icon: Globe, title: 'Contenus pour Communication Digitale', desc: 'Images optimisées pour LinkedIn, site web, présentations institutionnelles et communiqués de presse. Formats pour chaque canal de communication.' },
      { icon: Award, title: 'Production pour Médias & Presse', desc: 'Photographies haute résolution pour les services de presse, media kits et agences. Livraison rapide avec métadonnées IPTC complètes.' },
    ],
    experienceTitle: 'Un background international au service des entreprises de Turin',
    experienceDesc: 'J\'ai débuté ma carrière comme photographe officiel au Marché du Film du Festival de Cannes, où j\'ai appris à travailler sous pression avec des délais serrés et des standards internationaux. J\'ai couvert le Grand Prix de Monaco, travaillé sur des productions cinématographiques au Royaume-Uni et dirigé des shootings de mode sur la Côte d\'Azur. Cette expérience se traduit par une capacité unique à capturer le moment décisif avec un professionnalisme absolu.',
    timeline: [
      { year: '2018–2019', role: 'Photographe Officiel', company: 'Festival de Cannes, France' },
      { year: '2018', role: 'Photographe Sportif', company: 'Grand Prix Historique de Monaco' },
      { year: '2019', role: 'Photographe de Plateau', company: 'Goldfinch Film Production, UK' },
      { year: '2023–Présent', role: 'Directeur Artistique & Photographe', company: 'Studio Digital Turin' },
    ],
    packagesTitle: 'Forfaits corporate',
    packages: [
      { name: 'Headshot Session', desc: 'Session portraits individuels ou petite équipe (jusqu\'à 5 personnes). 2-3h en studio ou sur site à Turin. 15 photos retouchées par personne.', price: 'À partir de €300' },
      { name: 'Événement Corporate', desc: 'Couverture demi-journée ou journée entière. Montage en 48h. Galerie privée avec 100-300 photos. Idéal pour conférences, lancements, salons.', price: 'À partir de €600' },
      { name: 'Campagne Brand Identity', desc: 'Campagne photographique complète : pré-production, shooting 1-2 jours, post-production avec direction artistique. Assets pour tous les canaux.', price: 'Devis personnalisé' },
    ],
    deliverables: [
      'Galerie privée en ligne pour téléchargement',
      'Licence commerciale illimitée',
      'Fichiers optimisés pour le web et l\'impression',
      'Livraison sous 7-10 jours ouvrables',
      'Métadonnées IPTC pour services de presse',
      'Direction artistique incluse',
    ],
    faqLabel: 'FAQ',
    faqTitle: 'Questions sur la photographie corporate à Turin.',
    faqs: [
      { q: 'Combien coûte un service photographique corporate à Turin ?', a: 'Une session headshot pour petites équipes part de 300€. La couverture d\'un événement d\'entreprise de 600€. Les campagnes complètes pour l\'identité de marque sont devisées individuellement.' },
      { q: 'Couvrez-vous les événements corporate à Turin ?', a: 'Oui, c\'est l\'un de nos principaux services. Nous couvrons les conférences, conventions, lancements produit, salons, team building et ateliers. Nous proposons un montage rapide avec livraison en 48h.' },
      { q: 'Travaillez-vous en dehors de Turin ?', a: 'Oui. Nous sommes disponibles pour des projets dans tout le Piémont, en Italie et à l\'international. La couverture photo internationale fait partie de notre background professionnel.' },
      { q: 'Puis-je demander une livraison urgente des photos ?', a: 'Oui. Pour les événements avec des besoins de communication immédiats, nous proposons une livraison prioritaire d\'une sélection de photos dans les 24-48h suivant le shooting.' },
    ],
    ctaTitle: 'Demandez un devis pour votre projet corporate.',
    backLink: '← Retour à Photographie',
  },
}

export default async function FotografoCorporateTorinoPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang as Locale)
  const c = CONTENT[lang as keyof typeof CONTENT] || CONTENT.it

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        name: 'Maksi Thompson — Fotografo Corporate Torino',
        description: dict.meta.fotografoCorporate.description,
        address: { '@type': 'PostalAddress', addressLocality: 'Torino', addressRegion: 'Piemonte', addressCountry: 'IT' },
        areaServed: { '@type': 'City', name: 'Torino' },
        priceRange: '€€€',
        url: `${BASE_URL}/it/servizi/fotografia/fotografo-corporate-torino`,
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
            <Link href={`/${lang}/servizi/fotografia`} className="hover:text-[#CCFF00] transition-colors">{c.breadcrumb}</Link>
            <span>/</span>
            <span className="text-gray-300">{lang === 'it' ? 'Fotografo Corporate Torino' : lang === 'fr' ? 'Photographe Corporate Turin' : 'Corporate Photographer Turin'}</span>
          </nav>
          <p className="text-xs font-bold tracking-widest uppercase text-[#CCFF00] mb-6">| {c.eyebrow}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight max-w-5xl mb-6">{c.h1}</h1>
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-xs text-gray-300 mb-8">
            <Award className="w-3 h-3 text-[#CCFF00]" />
            {c.credentialsBadge}
          </div>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-12">{c.desc}</p>
          <Link
            href={`/${lang}/#contact`}
            className="inline-flex items-center gap-3 bg-[#CCFF00] text-black text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white transition-colors"
          >
            {lang === 'it' ? 'Richiedi Preventivo' : lang === 'fr' ? 'Demander un Devis' : 'Get a Quote'}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-8 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.services.map((s, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-[#CCFF00]/40 transition-colors duration-500 group">
                <s.icon className="w-8 h-8 text-white mb-6 group-hover:text-[#CCFF00] transition-colors" />
                <h3 className="text-lg font-medium text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="py-20 px-8 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium text-white mb-6">{c.experienceTitle}</h2>
            <p className="text-gray-400 leading-relaxed">{c.experienceDesc}</p>
          </div>
          <div className="space-y-4">
            {c.timeline.map((t, i) => (
              <div key={i} className="flex gap-6 p-6 bg-[#111111] border border-white/10 rounded-2xl">
                <div className="shrink-0">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#CCFF00]">{t.year}</p>
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{t.role}</p>
                  <p className="text-gray-500 text-xs mt-1">{t.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-20 px-8 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-10">{c.packagesTitle}</h2>
          <div className="space-y-4 mb-8">
            {c.packages.map((p, i) => (
              <div key={i} className={`p-8 rounded-[2rem] border transition-colors ${i === 1 ? 'bg-[#CCFF00]/5 border-[#CCFF00]/30' : 'bg-[#111111] border-white/10'}`}>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-3">{p.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-md">{p.desc}</p>
                  </div>
                  <span className="text-[#CCFF00] font-bold text-lg shrink-0 ml-8">{p.price}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 rounded-[2rem] bg-[#111111] border border-white/10">
            <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-widest">{lang === 'it' ? 'Incluso in ogni pacchetto:' : lang === 'fr' ? 'Inclus dans chaque forfait :' : 'Included in every package:'}</h3>
            <ul className="grid md:grid-cols-2 gap-2">
              {c.deliverables.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                  <CheckCircle2 className="w-3 h-3 text-[#CCFF00] shrink-0 mt-1" />{d}
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

      {/* BACK LINK */}
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
