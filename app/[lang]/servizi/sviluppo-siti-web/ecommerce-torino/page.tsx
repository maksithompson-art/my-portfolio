export const runtime = 'edge'

import type { Metadata } from 'next'
import { ArrowUpRight, CheckCircle2, ShoppingCart, Truck, CreditCard, BarChart3, Shield, Search } from 'lucide-react'
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
    title: dict.meta.ecommerceTorino.title,
    description: dict.meta.ecommerceTorino.description,
    alternates: {
      canonical: `${BASE_URL}/${lang}/servizi/sviluppo-siti-web/ecommerce-torino`,
      languages: {
        'it': `${BASE_URL}/it/servizi/sviluppo-siti-web/ecommerce-torino`,
        'en': `${BASE_URL}/en/servizi/sviluppo-siti-web/ecommerce-torino`,
        'fr': `${BASE_URL}/fr/servizi/sviluppo-siti-web/ecommerce-torino`,
        'x-default': `${BASE_URL}/it/servizi/sviluppo-siti-web/ecommerce-torino`,
      },
    },
    openGraph: {
      title: dict.meta.ecommerceTorino.title,
      description: dict.meta.ecommerceTorino.description,
      type: 'website',
    },
  }
}

const CONTENT = {
  it: {
    eyebrow: 'E-COMMERCE — TORINO',
    h1: 'SVILUPPO E-COMMERCE A TORINO.',
    desc: 'Realizziamo negozi online custom, veloci e ottimizzati per Google. Niente WooCommerce lento o Shopify limitato: architetture headless native pensate per scalare e convertire.',
    breadcrumb: 'Sviluppo Siti Web',
    features: [
      { icon: ShoppingCart, title: 'Catalogo Prodotti Custom', desc: 'Gestione prodotti, varianti, stock e prezzi tramite pannello CMS intuitivo. Struttura SEO-friendly per ogni categoria e prodotto.' },
      { icon: CreditCard, title: 'Pagamenti Integrati', desc: 'Stripe, PayPal, Satispay e bonifico bancario. Checkout ottimizzato per massimizzare il tasso di completamento dell\'ordine.' },
      { icon: Truck, title: 'Logistica & Spedizioni', desc: 'Integrazione con i principali corrieri italiani. Calcolo automatico spese di spedizione, tracking ordini e notifiche automatiche al cliente.' },
      { icon: BarChart3, title: 'Analytics & Conversioni', desc: 'Google Analytics 4, Meta Pixel e dati strutturati per tracciare ogni step del funnel. Ottimizzazione continua del tasso di conversione.' },
      { icon: Shield, title: 'Sicurezza & GDPR', desc: 'SSL, GDPR compliance, protezione dati clienti e policy cookie conformi alla normativa italiana ed europea.' },
      { icon: Search, title: 'SEO E-Commerce', desc: 'Schema markup per prodotti (ratings, prezzi, disponibilità), sitemap dinamica e ottimizzazione Core Web Vitals per dominare i risultati Google Shopping.' },
    ],
    vsTitle: 'Perché non usare WooCommerce o Shopify',
    vsRows: [
      { aspect: 'Velocità', custom: 'Caricamento < 1 secondo', woo: 'Spesso 3-8 secondi' },
      { aspect: 'SEO', custom: 'Codice semantico nativo', woo: 'Plugin limitati' },
      { aspect: 'Costi ricorrenti', custom: 'Zero commissioni mensili', woo: 'Canone mensile + commissioni' },
      { aspect: 'Personalizzazione', custom: 'Illimitata', woo: 'Limitata dal tema/plugin' },
      { aspect: 'Scalabilità', custom: 'Architettura edge serverless', woo: 'Richiede upgrade hosting' },
    ],
    whoTitle: 'Per chi è questo servizio',
    whoItems: [
      'Artigiani e produttori locali torinesi che vogliono vendere online',
      'Negozi fisici in Torino e provincia che vogliono espandersi nel digitale',
      'Brand di moda, food & beverage, design e arredamento',
      'Aziende B2B con catalogo prodotti complesso',
      'Startup con un nuovo prodotto da lanciare sul mercato',
    ],
    faqLabel: 'FAQ',
    faqTitle: 'Domande sullo sviluppo e-commerce a Torino.',
    faqs: [
      { q: 'Quanto costa sviluppare un e-commerce a Torino?', a: 'Un e-commerce custom parte da €5.000 per un negozio con fino a 50 prodotti. Per cataloghi più ampi, integrazioni gestionali o marketplace, i budget partono da €10.000. Ogni preventivo è dettagliato e senza costi nascosti.' },
      { q: 'Qual è la differenza tra un e-commerce custom e WooCommerce?', a: 'WooCommerce è un plugin WordPress con limiti strutturali di velocità e SEO. Il nostro e-commerce custom è costruito in Next.js: più veloce, più sicuro e ottimizzato per Google. Non paghi commissioni mensili e la piattaforma è completamente tua.' },
      { q: 'Posso gestire i prodotti in autonomia dopo la consegna?', a: 'Sì. Integriamo un CMS headless (Sanity) da cui puoi aggiungere, modificare ed eliminare prodotti, gestire ordini e controllare le giacenze. Nessuna competenza tecnica richiesta.' },
      { q: 'Quanto tempo ci vuole per lanciare un e-commerce?', a: 'Un e-commerce di medie dimensioni (fino a 100 prodotti) richiede 8-12 settimane. Cataloghi più ampi o con integrazioni ERP/gestionale possono richiedere 4-6 mesi.' },
      { q: 'Sviluppate e-commerce per ristoranti e food a Torino?', a: 'Sì. Realizziamo e-commerce per prodotti alimentari, shop di vini, pasticcerie e specialità piemontesi. Offriamo anche il servizio fotografico food in abbinamento per le immagini dei prodotti.' },
    ],
    ctaBadge: 'PREVENTIVO GRATUITO',
    ctaTitle: 'Lancia il tuo negozio online a Torino.',
    ctaDesc: 'Compila il form per una consulenza gratuita. Analizziamo la tua idea e ti presentiamo una proposta su misura entro 24 ore.',
    backLink: '← Torna a Sviluppo Siti Web',
  },
  en: {
    eyebrow: 'E-COMMERCE — TURIN',
    h1: 'E-COMMERCE DEVELOPMENT IN TURIN.',
    desc: 'We build custom, fast, Google-optimised online stores. No slow WooCommerce or limited Shopify: native headless architectures built to scale and convert.',
    breadcrumb: 'Web Development',
    features: [
      { icon: ShoppingCart, title: 'Custom Product Catalogue', desc: 'Product, variant, stock and price management through an intuitive CMS. SEO-friendly structure for every category and product.' },
      { icon: CreditCard, title: 'Integrated Payments', desc: 'Stripe, PayPal and bank transfer. Optimised checkout to maximise order completion rate.' },
      { icon: Truck, title: 'Logistics & Shipping', desc: 'Integration with major couriers. Automatic shipping cost calculation, order tracking and automated customer notifications.' },
      { icon: BarChart3, title: 'Analytics & Conversions', desc: 'Google Analytics 4, Meta Pixel and structured data to track every funnel step. Continuous conversion rate optimisation.' },
      { icon: Shield, title: 'Security & GDPR', desc: 'SSL, GDPR compliance, customer data protection and cookie policy compliant with EU regulations.' },
      { icon: Search, title: 'E-Commerce SEO', desc: 'Product schema markup (ratings, prices, availability), dynamic sitemap and Core Web Vitals optimisation to dominate Google Shopping results.' },
    ],
    vsTitle: 'Why not use WooCommerce or Shopify',
    vsRows: [
      { aspect: 'Speed', custom: 'Load time < 1 second', woo: 'Often 3-8 seconds' },
      { aspect: 'SEO', custom: 'Native semantic code', woo: 'Limited plugins' },
      { aspect: 'Recurring costs', custom: 'Zero monthly fees', woo: 'Monthly fee + commissions' },
      { aspect: 'Customisation', custom: 'Unlimited', woo: 'Limited by theme/plugin' },
      { aspect: 'Scalability', custom: 'Edge serverless architecture', woo: 'Requires hosting upgrades' },
    ],
    whoTitle: 'Who this service is for',
    whoItems: [
      'Local artisans and producers in Turin who want to sell online',
      'Physical shops in Turin looking to expand digitally',
      'Fashion, food & beverage, design and furniture brands',
      'B2B companies with complex product catalogues',
      'Startups launching a new product to market',
    ],
    faqLabel: 'FAQ',
    faqTitle: 'Questions about e-commerce development in Turin.',
    faqs: [
      { q: 'How much does it cost to develop an e-commerce in Turin?', a: 'A custom e-commerce starts from €5,000 for a store with up to 50 products. For larger catalogues, ERP integrations or marketplaces, budgets start from €10,000. Every quote is detailed with no hidden costs.' },
      { q: 'What is the difference between a custom e-commerce and WooCommerce?', a: 'WooCommerce is a WordPress plugin with structural speed and SEO limitations. Our custom e-commerce is built in Next.js: faster, more secure and Google-optimised. No monthly commissions and the platform is entirely yours.' },
      { q: 'Can I manage products myself after delivery?', a: 'Yes. We integrate a headless CMS (Sanity) from which you can add, edit and delete products, manage orders and monitor stock. No technical skills required.' },
      { q: 'How long does it take to launch an e-commerce?', a: 'A medium-sized e-commerce (up to 100 products) takes 8-12 weeks. Larger catalogues or ERP integrations may require 4-6 months.' },
    ],
    ctaBadge: 'FREE CONSULTATION',
    ctaTitle: 'Launch your online store in Turin.',
    ctaDesc: 'Fill in the form for a free consultation. We analyse your idea and present a tailored proposal within 24 hours.',
    backLink: '← Back to Web Development',
  },
  fr: {
    eyebrow: 'E-COMMERCE — TURIN',
    h1: 'DÉVELOPPEMENT E-COMMERCE À TURIN.',
    desc: 'Nous créons des boutiques en ligne sur mesure, rapides et optimisées pour Google. Pas de WooCommerce lent ni de Shopify limité : architectures headless natives conçues pour évoluer et convertir.',
    breadcrumb: 'Développement Web',
    features: [
      { icon: ShoppingCart, title: 'Catalogue Produits Sur Mesure', desc: 'Gestion des produits, variantes, stocks et prix via un CMS intuitif. Structure SEO-friendly pour chaque catégorie et produit.' },
      { icon: CreditCard, title: 'Paiements Intégrés', desc: 'Stripe, PayPal et virement bancaire. Checkout optimisé pour maximiser le taux de finalisation des commandes.' },
      { icon: Truck, title: 'Logistique & Livraisons', desc: 'Intégration avec les principaux transporteurs. Calcul automatique des frais de livraison, suivi des commandes et notifications automatiques.' },
      { icon: BarChart3, title: 'Analytics & Conversions', desc: 'Google Analytics 4, Meta Pixel et données structurées pour suivre chaque étape du funnel. Optimisation continue du taux de conversion.' },
      { icon: Shield, title: 'Sécurité & RGPD', desc: 'SSL, conformité RGPD, protection des données clients et politique de cookies conforme aux réglementations européennes.' },
      { icon: Search, title: 'SEO E-Commerce', desc: 'Schema markup produits (notes, prix, disponibilité), sitemap dynamique et optimisation Core Web Vitals pour dominer Google Shopping.' },
    ],
    vsTitle: 'Pourquoi ne pas utiliser WooCommerce ou Shopify',
    vsRows: [
      { aspect: 'Vitesse', custom: 'Chargement < 1 seconde', woo: 'Souvent 3-8 secondes' },
      { aspect: 'SEO', custom: 'Code sémantique natif', woo: 'Plugins limités' },
      { aspect: 'Coûts récurrents', custom: 'Zéro frais mensuels', woo: 'Abonnement + commissions' },
      { aspect: 'Personnalisation', custom: 'Illimitée', woo: 'Limitée par le thème/plugin' },
      { aspect: 'Évolutivité', custom: 'Architecture edge serverless', woo: 'Nécessite des mises à niveau' },
    ],
    whoTitle: 'Pour qui est ce service',
    whoItems: [
      'Artisans et producteurs locaux à Turin qui souhaitent vendre en ligne',
      'Boutiques physiques à Turin cherchant à s\'étendre dans le digital',
      'Marques de mode, food & beverage, design et ameublement',
      'Entreprises B2B avec des catalogues produits complexes',
      'Startups lançant un nouveau produit sur le marché',
    ],
    faqLabel: 'FAQ',
    faqTitle: 'Questions sur le développement e-commerce à Turin.',
    faqs: [
      { q: 'Combien coûte le développement d\'un e-commerce à Turin ?', a: 'Un e-commerce sur mesure part de 5 000€ pour une boutique avec jusqu\'à 50 produits. Pour des catalogues plus importants ou des intégrations ERP, les budgets partent de 10 000€.' },
      { q: 'Quelle est la différence entre un e-commerce sur mesure et WooCommerce ?', a: 'WooCommerce est un plugin WordPress avec des limitations structurelles de vitesse et de SEO. Notre e-commerce est construit en Next.js : plus rapide, plus sécurisé et optimisé pour Google.' },
      { q: 'Puis-je gérer les produits moi-même après la livraison ?', a: 'Oui. Nous intégrons un CMS headless (Sanity) depuis lequel vous pouvez ajouter, modifier et supprimer des produits, gérer les commandes et surveiller les stocks. Aucune compétence technique requise.' },
      { q: 'Combien de temps faut-il pour lancer un e-commerce ?', a: 'Un e-commerce de taille moyenne (jusqu\'à 100 produits) prend 8-12 semaines. Les catalogues plus importants ou les intégrations ERP peuvent nécessiter 4-6 mois.' },
    ],
    ctaBadge: 'DEVIS GRATUIT',
    ctaTitle: 'Lancez votre boutique en ligne à Turin.',
    ctaDesc: 'Remplissez le formulaire pour une consultation gratuite. Nous analysons votre idée et présentons une proposition personnalisée sous 24h.',
    backLink: '← Retour au Développement Web',
  },
}

export default async function EcommerceTorinoPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!hasLocale(lang)) notFound()
  const dict = await getDictionary(lang as Locale)
  const c = CONTENT[lang as keyof typeof CONTENT] || CONTENT.it

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        name: 'Maksi Thompson — Sviluppo E-Commerce Torino',
        description: dict.meta.ecommerceTorino.description,
        address: { '@type': 'PostalAddress', addressLocality: 'Torino', addressRegion: 'Piemonte', addressCountry: 'IT' },
        areaServed: { '@type': 'City', name: 'Torino' },
        priceRange: '€€€',
        url: `${BASE_URL}/it/servizi/sviluppo-siti-web/ecommerce-torino`,
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
            <span className="text-gray-300">{lang === 'it' ? 'E-Commerce Torino' : lang === 'fr' ? 'E-Commerce Turin' : 'E-Commerce Turin'}</span>
          </nav>
          <p className="text-xs font-bold tracking-widest uppercase text-[#CCFF00] mb-6">| {c.eyebrow}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.05] tracking-tight max-w-5xl mb-8">{c.h1}</h1>
          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed mb-12">{c.desc}</p>
          <Link
            href={`/${lang}/#contact`}
            className="inline-flex items-center gap-3 bg-[#CCFF00] text-black text-xs font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-white transition-colors"
          >
            {c.ctaBadge} <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-8 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.features.map((f, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-[#CCFF00]/40 transition-colors duration-500 group">
                <f.icon className="w-8 h-8 text-white mb-6 group-hover:text-[#CCFF00] transition-colors" />
                <h3 className="text-lg font-medium text-white mb-3">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VS TABLE */}
      <section className="py-20 px-8 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-10">{c.vsTitle}</h2>
          <div className="overflow-hidden rounded-[2rem] border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#111111] border-b border-white/10">
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-400">{lang === 'it' ? 'Aspetto' : 'Aspect'}</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest text-[#CCFF00]">Custom (Maksi Thompson)</th>
                  <th className="text-left px-6 py-4 text-xs font-bold uppercase tracking-widest text-gray-500">WooCommerce / Shopify</th>
                </tr>
              </thead>
              <tbody>
                {c.vsRows.map((r, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="px-6 py-4 text-gray-400 font-medium">{r.aspect}</td>
                    <td className="px-6 py-4 text-white font-medium">{r.custom}</td>
                    <td className="px-6 py-4 text-gray-500">{r.woo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-20 px-8 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-white mb-10">{c.whoTitle}</h2>
          <ul className="space-y-4">
            {c.whoItems.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300">
                <CheckCircle2 className="w-5 h-5 text-[#CCFF00] shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
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
