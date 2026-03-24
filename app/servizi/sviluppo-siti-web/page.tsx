import { client } from '@/sanity/lib/client';
import { Terminal, Zap, Search, Smartphone, ArrowUpRight, Code, Layers, Rocket, Cpu, MessageSquare, Database, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import Contact from '@/components/Contact';

export const revalidate = 86400; 

// METADATA ESTREMO 
export const metadata = {
  title: 'Agenzia Sviluppo Siti Web Torino | Web App & E-commerce | Maksi Thompson',
  description: 'Sviluppatore web full-stack a Torino. Preventivi siti web, Web App custom, E-commerce per ristoranti e aziende. UI/UX Design ad alte prestazioni in Next.js.',
  keywords: [
    'agenzie per siti web', 'quanto costa un sito web', 'sviluppo siti web Torino', 
    'siti web per ristoranti', 'web agency Torino', 'software engineering', 
    'preventivo sito web', 'creazione e-commerce', 'sviluppo web app', 
    'UI/UX design', 'MVP startup'
  ],
  alternates: {
    canonical: 'https://www.maksithompson.com/sviluppo-siti-web',
  },
  openGraph: {
    title: 'Sviluppo Web App & E-Commerce ad Alte Prestazioni',
    description: 'Piattaforme digitali ingegnerizzate per scalare, posizionarsi su Google e convertire. Nessun template, solo codice custom.',
    type: 'website',
    locale: 'it_IT',
  }
};

const FEATURES = [
  { icon: Layers, title: "UI/UX Design & Prototipazione", desc: "Non usiamo template. Disegniamo wireframe e interfacce utente customizzate per massimizzare le conversioni e offrire un'esperienza fluida." },
  { icon: Database, title: "Custom CMS, CRM & API", desc: "Sviluppo di piattaforme aziendali su misura. Dal gestionale interno, allo sviluppo di API REST, fino a CMS headless scalabili." },
  { icon: Zap, title: "Frontend & Backend Nativo", desc: "Scrittura di codice in React, Next.js e Node.js. Architetture Serverless per caricamenti istantanei e sicurezza enterprise." },
  { icon: Search, title: "SEO Engineering", desc: "Server-Side Rendering (SSR) e micro-dati strutturati per posizionarti sopra i tuoi competitor su Google fin dal primo giorno." },
];

const PROCESS = [
  { step: "01", title: "Strategy & UX Concept", desc: "Analisi profonda dei competitor, mappatura dei flussi utente e creazione dei prototipi interattivi ad alta conversione." },
  { step: "02", title: "Software Engineering", desc: "Sviluppo full-stack del codice nativo frontend e backend. Integrazione di database scalabili e sistemi di pagamento." },
  { step: "03", title: "Testing & QA Rigoroso", desc: "Controlli maniacali su performance, accessibilità (A11y), sicurezza e compatibilità su tutti i dispositivi." },
  { step: "04", title: "Lancio & Scale", desc: "Messa in produzione su server edge ultra-veloci. Manutenzione e monitoraggio continuo per far scalare il tuo business." },
];

// 12 FAQS AIO-OPTIMIZED (Intenti di ricerca: CEO, Marketing, Ristoratori, Costi)
const FAQS = [
  // Categoria: Costi e Preventivi (Super ricercate)
  { 
    q: "Quanto costa creare un sito web professionale nel 2026?", 
    a: "Il costo di un sito web varia in base all'ingegneria necessaria. Un sito vetrina premium o una landing page ad alta conversione parte da circa 2.500€ - 4.000€. Per piattaforme complesse, Web App B2B, o E-commerce custom (senza Shopify/WooCommerce), i budget partono dagli 8.000€ a salire. Il nostro focus non è il costo al ribasso, ma il ROI (Ritorno sull'Investimento) generato dalle prestazioni superiori." 
  },
  { 
    q: "Perché scegliere uno sviluppatore full-stack custom invece di una Web Agency tradizionale?", 
    a: "Le grandi web agency spesso delegano il lavoro a junior o usano template WordPress pre-fatti per abbattere i costi, vendendoteli a caro prezzo. Lavorando con noi, parli direttamente con l'Ingegnere del Software e l'Art Director. Scriviamo architetture in Next.js e React (le stesse tecnologie usate da Netflix e Vercel), garantendo un prodotto sartoriale, ultra-veloce e senza costi di agenzia nascosti." 
  },
  // Categoria: Marketing & SEO (Pain points)
  { 
    q: "Perché il mio sito web attuale non compare su Google o non porta clienti?", 
    a: "Al 90%, il problema è tecnico. I motori di ricerca come Google penalizzano i siti lenti (bassi punteggi nei Core Web Vitals) e non ottimizzati per il mobile. Noi risolviamo il problema alla radice utilizzando il Server-Side Rendering (SSR), che serve a Google pagine pre-compilate in millisecondi, dominando le metriche di indicizzazione." 
  },
  { 
    q: "In che modo la velocità del sito influenza le vendite del mio E-commerce?", 
    a: "Amazon ha dimostrato che ogni 100 millisecondi di ritardo nel caricamento del sito costa l'1% delle vendite. Un e-commerce lento frustra l'utente che abbandona il carrello. Le nostre architetture garantiscono transizioni di pagina istantanee, massimizzando il tasso di conversione (Conversion Rate Optimization)." 
  },
  // Categoria: Startup & B2B (CEO focus)
  { 
    q: "Sviluppate MVP (Minimum Viable Product) per startup con budget limitati?", 
    a: "Sì. Aiutiamo i founder a definire le funzionalità 'core' per andare a mercato velocemente e presentarsi agli investitori (Seed/Pre-Seed). Sviluppiamo un MVP solido, evitando sprechi su feature secondarie, ma gettando basi architetturali (Node.js/Database relazionali) pronte per scalare quando arriveranno i round di finanziamento." 
  },
  // --- DA QUI IN POI SARANNO NASCOSTE NEL DROPDOWN ---
  // Categoria: Ristorazione e Attività Locali
  { 
    q: "Come può un sito web aumentare le prenotazioni del mio ristorante a Torino?", 
    a: "Dimentica i PDF illeggibili da smartphone. Realizziamo portali per ristoranti con menù digitali interattivi, integrazione di sistemi di prenotazione (senza le fee altissime di TheFork) e un'ottimizzazione Local SEO aggressiva per comparire primi quando i turisti cercano 'miglior ristorante a Torino' su Google." 
  },
  { 
    q: "Posso aggiornare il sito da solo senza dover pagare ogni volta un programmatore?", 
    a: "Assolutamente sì. Integriamo le nostre architetture custom con CMS Headless moderni (come Sanity.io). Avrai un pannello di controllo intuitivo, simile a un'app, da cui potrai modificare testi, foto, menu o prodotti dell'e-commerce in totale autonomia dal tuo smartphone." 
  },
  // Categoria: Sicurezza e Proprietà
  { 
    q: "Sviluppate piattaforme E-commerce B2B e gestionali (CRM) interni?", 
    a: "Sì, siamo specializzati nell'ingegnerizzazione di software su misura. Possiamo sviluppare dashboard aziendali, CRM per la gestione dei lead, portali B2B per i fornitori e sistemi di integrazione con le tue API aziendali esistenti." 
  },
  { 
    q: "Una volta terminato lo sviluppo, di chi è la proprietà del codice sorgente?", 
    a: "Tua, al 100%. A differenza di piattaforme SaaS (come Shopify o Wix) dove sei 'in affitto', al momento del rilascio in produzione ti trasferiamo la totale proprietà intellettuale (IP) e l'accesso al repository GitHub. Sei proprietario della tua tecnologia." 
  },
  { 
    q: "Come garantite la sicurezza del sito e dei dati sensibili dei clienti?", 
    a: "Non usando database vulnerabili come quelli dei vecchi CMS. Utilizziamo architetture serverless, autenticazione multi-fattore e database crittografati. I pagamenti sono gestiti tramite gateway blindati (come Stripe), assicurando la piena conformità al GDPR e agli standard bancari (PCI-DSS)." 
  },
  { 
    q: "Offrite supporto, hosting e manutenzione dopo la messa online?", 
    a: "Certo. Ospitiamo i siti su infrastrutture cloud Edge (come Vercel o Cloudflare) per garantire un uptime del 99.99%. Offriamo piani di manutenzione mensile per aggiornamenti di sicurezza, monitoraggio SEO e implementazione di nuove funzionalità." 
  },
  { 
    q: "Perché investite così tanto nel Design (UI/UX) oltre che nel codice?", 
    a: "Perché il codice perfetto non vende se l'utente non capisce come usare il sito. L'User Interface (UI) cattura l'attenzione, mentre l'User Experience (UX) guida silenziosamente il cliente verso l'acquisto o il modulo di contatto. È l'unione tra estetica premium e logica matematica." 
  }
];

export default async function WebDevLanding() {
  
  const query = `*[_type == "project" && category == "Web App"] | order(_createdAt desc)[0...2] {
    _id, title, "slug": slug.current, category,
    "img": coalesce(mainImage.asset->url, heroImage.asset->url),
    "altText": coalesce(mainImage.alt, heroImage.alt)
  }`;

  const recentProjects = await client.fetch(query);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "Maksi Thompson - Sviluppo Siti Web & Web Agency",
        "image": "https://www.maksithompson.com/logo.png",
        "description": "Sviluppatore Web Full-Stack specializzato in Web App, Custom CMS, E-commerce e SEO a Torino.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Torino",
          "addressRegion": "Piemonte",
          "addressCountry": "IT"
        },
        "priceRange": "$$$",
        "knowsAbout": ["Costo Sito Web", "Agenzia Web", "Next.js", "UI/UX Design", "E-commerce per Ristoranti"]
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQS.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-zinc-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="absolute top-0 inset-x-0 h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/10 via-zinc-950/0 to-transparent pointer-events-none transform-gpu" aria-hidden="true" />

      {/* HERO SECTION */}
      <header className="container mx-auto px-6 md:px-12 mb-20 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-emerald-400 text-sm font-semibold shadow-sm">
            <Terminal className="w-4 h-4" aria-hidden="true" /> <span className="sr-only">Servizio di</span> Progettiamo e creiamo soluzioni digitali
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.05] text-zinc-50">
            Sviluppo Web App, Custom <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">CMS & Piattaforme B2B.</span>
          </h1>
          
          <h2 className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl font-medium">
            Siamo il partner tecnologico per il tuo business. Uniamo solide competenze di <strong>Software Engineering</strong> e <strong>UX/UI Design</strong> per realizzare piattaforme digitali ingegnerizzate per scalare, posizionarsi su Google e convertire.
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/#contact" className="bg-zinc-50 text-zinc-950 px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
              Richiedi un Preventivo <ArrowUpRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <Link href="#tech" className="px-8 py-4 rounded-full font-semibold border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 text-zinc-300">
              Scopri lo Stack Tecnologico
            </Link>
          </div>
        </div>
      </header>

      {/* STARTUP & TECH STACK SECTION */}
      <section id="tech" className="py-20 scroll-mt-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none" aria-hidden="true" />

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-zinc-50 mb-6">Tecnologia e Ingegneria</h3>
              <p className="text-zinc-400 leading-relaxed text-lg mb-6">
                I nostri progetti sono sviluppati secondo le più moderne metodologie (Agile) e con l'impiego delle tecnologie più avanzate disponibili sul mercato. Non utilizzo CMS obsoleti o page-builder lenti. Scrivo codice nativo per garantire sicurezza e performance.
              </p>
              
              <div className="flex items-center gap-4 text-sm font-semibold text-emerald-400 mb-6">
                <Cpu className="w-5 h-5" aria-hidden="true" /> Architetture Serverless & Edge Computing
              </div>

              <div className="flex flex-wrap gap-2 mt-6">
                {['#software-engineering', '#custom-cms', '#apidevelopment', '#react', '#nextjs', '#typescript', '#tailwindcss', '#nodejs'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-zinc-950 border border-zinc-800 text-emerald-400/80 rounded-full text-xs font-mono">{tag}</span>
                ))}
              </div>
            </div>

            <div className="relative z-10 bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
              <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center mb-6 border border-rose-500/20">
                <Rocket className="w-6 h-6 text-rose-400" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-50 mb-4">Hai una startup con un budget limitato?</h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                Sappiamo cosa significa lanciare un prodotto da zero. Aiutiamo i founder a sviluppare <strong>MVP (Minimum Viable Product)</strong> solidi, focalizzandoci sulle funzionalità core essenziali per testare il mercato, attrarre investitori e ottimizzare il budget iniziale, mantenendo un'architettura pronta a scalare.
              </p>
              <Link href="/#contact" className="text-zinc-50 font-bold flex items-center gap-2 hover:text-rose-400 transition-colors group">
                Parliamo della tua idea <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE PROP GRID */}
      <section className="py-24 bg-zinc-900/30 border-y border-zinc-800/50">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold mb-12 text-zinc-50">I pilastri dello sviluppo custom</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feat, i) => (
              <div key={i} className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 transition-colors group">
                <feat.icon className="w-10 h-10 text-emerald-400 mb-6 group-hover:scale-110 transition-transform will-change-transform" aria-hidden="true" />
                <h3 className="text-xl font-bold mb-3 text-zinc-50">{feat.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT WORK FROM SANITY */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-bold mb-4 text-zinc-50">Case Studies</h2>
              <p className="text-zinc-400 text-lg">Web application ed e-commerce sviluppati recentemente.</p>
            </div>
            <Link href="/portfolio" className="text-zinc-400 hover:text-zinc-50 font-medium inline-flex items-center gap-2 transition-colors">
              Vedi tutti i progetti <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {recentProjects.length > 0 ? (
              recentProjects.map((project: any) => (
                <Link href={`/portfolio/${project.slug}`} key={project._id} className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer block focus:ring-2 focus:ring-emerald-500 outline-none">
                  <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
                    {project.img && (
                      <Image 
                        src={project.img} 
                        alt={project.altText || `Anteprima del progetto ${project.title}`} 
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                      />
                    )}
                  </div>
                  <div className="p-8 relative z-10 bg-zinc-900">
                    <p className="text-emerald-400 text-sm font-semibold mb-2">{project.category}</p>
                    <h3 className="text-2xl font-bold text-zinc-50 group-hover:text-emerald-300 transition-colors">{project.title}</h3>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-2 p-12 text-center border border-zinc-800 rounded-3xl bg-zinc-900/50">
                <p className="text-zinc-400">Presto in arrivo nuovi case study di sviluppo web.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* AIO & SEO FAQ SECTION CON DROPDOWN (CSS HACK) */}
      <section className="py-24 bg-zinc-900/30 border-y border-zinc-800/50">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-50 mb-4">Domande Frequenti (FAQ)</h2>
            <p className="text-zinc-400">Tutto quello che i ristoratori, CEO e direttori marketing ci chiedono prima di affidarci un progetto.</p>
          </div>
          
          <div className="space-y-6">
            {/* PRIME 5 DOMANDE SEMPRE VISIBILI */}
            {FAQS.slice(0, 5).map((faq, i) => (
              <div key={i} className="p-6 md:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/30 transition-colors">
                <h3 className="text-xl font-bold text-zinc-50 mb-3 flex items-start gap-3">
                  <MessageSquare className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                  {faq.q}
                </h3>
                <p className="text-zinc-400 leading-relaxed ml-9">{faq.a}</p>
              </div>
            ))}

            {/* IL TRUCCO DEL CHECKBOX PER IL DROPDOWN (Zero Javascript) */}
            <input type="checkbox" id="show-more-faqs" className="peer hidden" />
            
            {/* LE ALTRE 7 DOMANDE NASCOSTE */}
            <div className="hidden peer-checked:block space-y-6 animate-in fade-in slide-in-from-top-4 duration-500">
              {FAQS.slice(5).map((faq, i) => (
                <div key={i + 5} className="p-6 md:p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/30 transition-colors">
                  <h3 className="text-xl font-bold text-zinc-50 mb-3 flex items-start gap-3">
                    <MessageSquare className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                    {faq.q}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed ml-9">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* BOTTONE MOSTRA DI PIU' / MOSTRA MENO */}
            <div className="flex justify-center mt-8">
              <label 
                htmlFor="show-more-faqs" 
                className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium hover:bg-zinc-800 transition-colors peer-checked:hidden"
              >
                Mostra tutte le domande <ChevronDown className="w-4 h-4" />
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* SEZIONE CONTATTI */}
      <Contact />
      
    </div>
  );
}