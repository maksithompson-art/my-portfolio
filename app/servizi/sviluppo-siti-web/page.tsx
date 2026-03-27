import { client } from '@/sanity/lib/client';
import { Terminal, Zap, Search, Smartphone, ArrowUpRight, Code, Layers, Rocket, Cpu, MessageSquare, Database, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// Legacy page — proxy redirects to /[lang]/servizi/sviluppo-siti-web

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

const FAQS = [
  { 
    q: "Quanto costa creare un sito web professionale nel 2026?", 
    a: "Il costo di un sito web varia in base all'ingegneria necessaria. Un sito vetrina premium o una landing page ad alta conversione parte da circa 2.500€ - 4.000€. Per piattaforme complesse, Web App B2B, o E-commerce custom, i budget partono dagli 8.000€ a salire. Il nostro focus non è il costo al ribasso, ma il ROI generato dalle prestazioni superiori." 
  },
  { 
    q: "Perché scegliere uno sviluppatore full-stack custom invece di una Web Agency tradizionale?", 
    a: "Le grandi web agency spesso delegano il lavoro a junior o usano template WordPress pre-fatti per abbattere i costi, vendendoteli a caro prezzo. Lavorando con noi, parli direttamente con l'Ingegnere del Software e l'Art Director. Scriviamo architetture in Next.js (le stesse usate da Netflix e Vercel), garantendo un prodotto sartoriale, ultra-veloce e senza costi nascosti." 
  },
  { 
    q: "Perché il mio sito web attuale non compare su Google o non porta clienti?", 
    a: "Al 90%, il problema è tecnico. I motori di ricerca penalizzano i siti lenti e non ottimizzati. Noi risolviamo il problema alla radice utilizzando il Server-Side Rendering (SSR), che serve a Google pagine pre-compilate in millisecondi, dominando le metriche di indicizzazione." 
  },
  { 
    q: "In che modo la velocità del sito influenza le vendite del mio E-commerce?", 
    a: "Amazon ha dimostrato che ogni 100ms di ritardo costa l'1% delle vendite. Un e-commerce lento frustra l'utente che abbandona il carrello. Le nostre architetture garantiscono transizioni istantanee, massimizzando il tasso di conversione (CRO)." 
  },
  { 
    q: "Sviluppate MVP (Minimum Viable Product) per startup con budget limitati?", 
    a: "Sì. Aiutiamo i founder a definire le funzionalità 'core' per andare a mercato velocemente e presentarsi agli investitori. Sviluppiamo un MVP solido, evitando sprechi su feature secondarie, gettando basi pronte per scalare nei round successivi." 
  },
  { 
    q: "Come può un sito web aumentare le prenotazioni del mio ristorante a Torino?", 
    a: "Realizziamo portali per ristoranti con menù digitali interattivi, integrazione di sistemi di prenotazione (senza fee di terze parti) e un'ottimizzazione Local SEO aggressiva per comparire primi quando i turisti cercano su Google." 
  },
  { 
    q: "Posso aggiornare il sito da solo senza dover pagare ogni volta un programmatore?", 
    a: "Assolutamente sì. Integriamo CMS Headless moderni (come Sanity.io). Avrai un pannello intuitivo da cui potrai modificare testi, foto o prodotti in totale autonomia dal tuo smartphone." 
  },
  { 
    q: "Una volta terminato lo sviluppo, di chi è la proprietà del codice sorgente?", 
    a: "Tua, al 100%. A differenza di piattaforme SaaS dove sei 'in affitto', al momento del rilascio ti trasferiamo la totale proprietà intellettuale (IP) e l'accesso al repository. Sei proprietario della tua tecnologia." 
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
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#CCFF00] selection:text-black font-sans">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 inset-x-0 h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-[#0A0A0A]/0 to-transparent pointer-events-none transform-gpu" aria-hidden="true" />

      {/* HERO SECTION */}
      {/* MAIN HERO SECTION (Matched with Homepage Layout) */}
      <section className="relative min-h-screen w-full bg-[#0A0A0A] text-white overflow-hidden flex flex-col justify-between p-8 md:p-12 lg:p-16 font-sans">
        
        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/screen.png" /* Cambia con il nome della tua immagine di sfondo per il web dev */
            alt="Sviluppo Web App e Siti Web"
            fill
            priority
            className="object-cover object-top opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/20 to-[#0A0A0A]" />
        </div>

        {/* MID CONTENT */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-12 w-full mt-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase mb-6 text-gray-300">| DIGITAL ENGINEERING</p>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight">
              SVILUPPO WEB APP, <br />
              CMS CUSTOM <br />
              <span className="text-transparent [-webkit-text-stroke:2px_#CCFF00]">& E-COMMERCE.</span> <ArrowUpRight className="inline-block w-12 h-12 ml-4 p-3 border border-white/30 rounded-full text-[#CCFF00]" />
            </h1>
          </div>

          <div className="lg:text-right flex flex-col lg:items-end mt-8 lg:mt-0">
            <h2 className="text-lg md:text-xl font-medium leading-loose tracking-wider">
              NEXT.JS & REACT<br />
              HEADLESS CMS<br />
              SEO ENGINEERING
            </h2>
            <p className="text-sm text-gray-400 max-w-xs mt-6 leading-relaxed">
              Siamo il partner tecnologico per il tuo business. Realizziamo piattaforme digitali ingegnerizzate per scalare, posizionarsi su Google e convertire.
            </p>
          </div>
        </div>

        {/* BOTTOM BENTO STATS (Adattate per Sviluppo Web) */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-end w-full mt-20">
          
          <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
            
            {/* Box 1: Focus Velocità e Stack */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 w-full md:w-56 flex flex-col justify-between h-40 group hover:border-[#CCFF00]/40 transition-all duration-500">
               <div className="flex justify-between items-start">
                 <p className="text-xs text-white font-medium leading-tight">
                   Caricamenti in<br/>
                   <span className="text-[#CCFF00]">Millisecondi.</span>
                 </p>
                 <Zap className="w-5 h-5 text-[#CCFF00]" />
               </div>
               <div>
                 <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-1">Server-Side</p>
                 <p className="text-[9px] uppercase tracking-wider text-gray-500">Architetture Edge<br/>ultra veloci</p>
               </div>
            </div>

            {/* Box 2: Focus Performance SEO */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 w-full md:w-56 flex flex-col justify-between h-40 group hover:border-[#CCFF00]/40 transition-all duration-500">
               <div className="flex justify-between items-start">
                 <h3 className="text-4xl font-light tracking-tighter text-white">
                   99<span className="text-sm align-top ml-1 text-[#CCFF00]">/100</span>
                 </h3>
               </div>
               <div>
                 <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-1">Google Lighthouse</p>
                 <p className="text-[9px] uppercase tracking-wider text-gray-500">Punteggi massimi sui<br/>Core Web Vitals</p>
               </div>
            </div>

          </div> 
        </div> 

      </section>

      {/* STARTUP & TECH STACK SECTION */}
      <section id="tech" className="py-32 px-8 md:px-12 lg:px-24 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center bg-[#111111] border border-white/10 rounded-[3rem] p-8 md:p-16 relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
            
            <div className="relative z-10">
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00] mb-6">Infrastruttura</div>
              <h3 className="text-4xl font-medium text-white mb-6">Tecnologia e Ingegneria</h3>
              <p className="text-gray-400 leading-relaxed text-lg mb-8 max-w-md">
                I nostri progetti sono sviluppati con le tecnologie più avanzate sul mercato. Non utilizzo page-builder lenti. Scrivo codice nativo per garantire sicurezza, SEO e performance assolute.
              </p>
              
              <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-white mb-8">
                <Cpu className="w-5 h-5 text-[#CCFF00]" aria-hidden="true" /> Architetture Serverless
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Sanity CMS', 'Tailwind'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-[#0A0A0A] border border-white/10 text-gray-400 rounded-full text-[10px] font-bold tracking-widest uppercase hover:text-[#CCFF00] hover:border-[#CCFF00]/50 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Nested Glass Card */}
            {/* Nested Glass Card - Focus Budget Ottimizzato */}
<div className="relative z-10 bg-[#0A0A0A]/50 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl">
  <div className="w-12 h-12 rounded-full bg-[#CCFF00]/10 flex items-center justify-center mb-6 border border-[#CCFF00]/20">
    <Zap className="w-6 h-6 text-[#CCFF00]" aria-hidden="true" />
  </div>
  
  <h3 className="text-2xl font-medium text-white mb-4">Soluzioni per Ogni Budget</h3>
  
  <p className="text-sm text-gray-400 leading-relaxed mb-8">
    Crediamo che l'ingegneria di qualità debba essere accessibile. Che tu sia una piccola agenzia, un'attività locale o un brand con un budget contenuto, <strong>adattiamo l'architettura alle tue reali esigenze</strong>. Sviluppiamo un nucleo solido e ultra-veloce, progettato per scalare e aggiungere nuove funzionalità solo quando il tuo business crescerà. Zero sprechi, massimo rendimento.
  </p>
  
  <Link href="/#contact" className="text-[#CCFF00] text-xs font-bold uppercase tracking-widest flex items-center gap-3 hover:text-white transition-colors group/link">
    Troviamo la soluzione per te <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" aria-hidden="true" />
  </Link>
</div>
          </div>
        </div>
      </section>

      {/* VALUE PROP GRID (Bento Style) */}
      <section className="py-32 px-8 md:px-12 lg:px-24 border-y border-white/5 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-medium mb-16 text-white">I pilastri dello <br/>sviluppo custom.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((feat, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-[#CCFF00]/50 transition-colors duration-500 group flex flex-col h-full min-h-[300px]">
                <feat.icon className="w-8 h-8 text-white mb-8 group-hover:text-[#CCFF00] transition-colors" aria-hidden="true" />
                <h3 className="text-xl font-medium mb-4 text-white leading-snug">{feat.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mt-auto">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT WORK FROM SANITY */}
      <section className="py-32 px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-8 border-b border-white/10 pb-12">
            <div>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white">Case Studies</h2>
              <p className="text-gray-400 text-lg">Web application ed e-commerce sviluppati recentemente.</p>
            </div>
            <Link href="/portfolio" className="text-xs font-bold tracking-widest uppercase text-white hover:text-[#CCFF00] inline-flex items-center gap-3 transition-colors group">
              Vedi l'Archivio <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" aria-hidden="true" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {recentProjects.length > 0 ? (
              recentProjects.map((project: any, index: number) => {
                const isEven = index % 2 !== 0;
                return (
                  <Link href={`/portfolio/${project.slug}`} key={project._id} className={`group flex flex-col gap-6 ${isEven ? 'md:mt-16' : ''}`}>
                    <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden bg-[#111] border border-white/5">
                      {project.img && (
                        <Image 
                          src={project.img} 
                          alt={project.altText || `Anteprima ${project.title}`} 
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                        />
                      )}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="bg-[#CCFF00] text-black text-[10px] font-bold tracking-widest uppercase px-6 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          Esplora
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col px-2">
                      <p className="text-[#CCFF00] text-[10px] font-bold tracking-widest uppercase mb-2">{project.category}</p>
                      <h3 className="text-2xl font-medium text-white group-hover:text-gray-300 transition-colors">{project.title}</h3>
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="col-span-2 p-16 text-center border border-white/10 border-dashed rounded-[3rem] bg-[#111111]">
                <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">Presto in arrivo nuovi case study di sviluppo web.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* AIO & SEO FAQ SECTION */}
      <section className="py-32 px-8 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00] mb-6">FAQ</div>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">Domande Frequenti.</h2>
            <p className="text-gray-400 text-lg">Tutto quello che i ristoratori, CEO e direttori marketing ci chiedono prima di affidarci un progetto.</p>
          </div>
          
          <div className="space-y-4">
            {FAQS.slice(0, 5).map((faq, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-white/30 transition-colors">
                <h3 className="text-lg md:text-xl font-medium text-white mb-4 flex items-start gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#CCFF00] shrink-0" aria-hidden="true" />
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}

            <input type="checkbox" id="show-more-faqs" className="peer hidden" />
            
            <div className="hidden peer-checked:block space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
              {FAQS.slice(5).map((faq, i) => (
                <div key={i + 5} className="p-8 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-white/30 transition-colors">
                  <h3 className="text-lg md:text-xl font-medium text-white mb-4 flex items-start gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#CCFF00] shrink-0" aria-hidden="true" />
                    {faq.q}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed pl-6">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-start mt-12">
              <label 
                htmlFor="show-more-faqs" 
                className="cursor-pointer inline-flex items-center justify-center bg-white text-black rounded-full px-8 py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-[#CCFF00] transition-colors peer-checked:hidden group"
              >
                Mostra tutte le domande <ChevronDown className="w-4 h-4 ml-3 group-hover:translate-y-1 transition-transform" />
              </label>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}