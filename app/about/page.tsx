"use client";

import React, { useState } from 'react';
import { Terminal, Camera, MapPin, Award, Code2, MonitorPlay, Zap, ArrowUpRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

// --- MOCK DATA AGGIORNATO CON L'ESPERIENZA REALE (SEO OPTIMIZED) ---
const TIMELINE = [
  { 
    year: "Gen 2023 - Presente", 
    role: "Co-Founder & Tech Lead", 
    company: "Sailing Studios | Piemonte, Italia",
    desc: "Sviluppo di soluzioni marketing esclusive che uniscono Web Development, 3D rendering e animazione. Aiuto i brand a stabilire un'identità digitale unica per distinguersi nel mercato." 
  },
  { 
    year: "Gen 2019 - Gen 2023", 
    role: "CEO & 3D Art Director", 
    company: "XRHome | Paesi Bassi",
    desc: "Direzione artistica e consulenza per visualizzazioni 3D, animazione, VFX e Realtà Virtuale/Aumentata (VR/AR). Gestione di progetti complessi nel settore Information & Communication Technology." 
  },
  { 
    year: "Ott 2019 - Nov 2019", 
    role: "Fotografo di Scena (Feature Film)", 
    company: "Goldfinch | Regno Unito",
    desc: "Fotografo ufficiale sul set del thriller psicologico 'Gatecrash'. Gestione scatti promozionali e dietro le quinte per la produzione cinematografica." 
  },
  { 
    year: "Apr 2018 - Giu 2019", 
    role: "Official Photographer", 
    company: "Marché du Film - Festival de Cannes | Francia",
    desc: "Copertura visiva ufficiale di conferenze stampa, eventi e spettacoli. Editing rapido e consegna degli scatti entro 24 ore per la stampa internazionale." 
  },
  { 
    year: "Mag 2018", 
    role: "Sport Photographer", 
    company: "Monaco Grand Prix Historique | Monaco",
    desc: "Fotografo ufficiale a bordo pista per la storica gara automobilistica del Gran Premio di Monaco." 
  },
  { 
    year: "Ott 2017 - Mar 2019", 
    role: "Istruttore di Fotografia", 
    company: "Thompson Photography | Regno Unito",
    desc: "Insegnamento di tecniche fotografiche avanzate a classi internazionali, organizzazione di viaggi fotografici e gestione completa dei corsi." 
  },
  { 
    year: "Mag 2017 - Giu 2017", 
    role: "Fashion Photographer", 
    company: "Lafayette Galleries | Francia",
    desc: "Organizzazione e direzione di photoshoot di moda. Copertura eventi fashion in Costa Azzurra con consegna asset multimediali ad alta risoluzione in meno di 24 ore." 
  },
  { 
    year: "Lug 2016 - Ago 2016", 
    role: "Event Photographer", 
    company: "Les Plages Électroniques | Cannes, Francia",
    desc: "Fotografo ufficiale per uno dei maggiori festival musicali europei, catturando l'energia dell'evento per i canali promozionali ufficiali." 
  }
];

export default function AboutPage() {
  // State per gestire quanti elementi della timeline mostrare inizialmente
  const [visibleItems, setVisibleItems] = useState(3);

  const handleShowMore = () => {
    setVisibleItems(prev => Math.min(prev + 3, TIMELINE.length));
  };

  return (
    <div className="min-h-screen pt-32 pb-24">
      
      {/* 1. EDITORIAL HERO SECTION */}
      <section className="container mx-auto px-6 md:px-12 mb-32 mt-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: The Portrait */}
          <div className="w-full lg:w-5/12 relative">
            <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative z-10 border border-zinc-800 bg-zinc-900 shadow-2xl">
              <img 
                src="/IMG_4105.webp" 
                alt="Maksi Thompson - Web Developer & Photographer" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-emerald-500/20 to-rose-500/20 rounded-full blur-[80px] -z-10" />
          </div>

          {/* Right: The Narrative */}
          <div className="w-full lg:w-7/12 lg:pl-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium mb-6">
              <MapPin className="w-4 h-4 text-emerald-400" /> Based in Torino, Italy
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
              Due mondi, <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">una sola visione.</span>
            </h1>
            
            <div className="space-y-6 text-lg text-zinc-400 leading-relaxed">
              <p>
                La maggior parte dei professionisti sceglie una strada: logica strutturata o estetica creativa. Il mio percorso internazionale mi ha permesso di fonderle. Come <strong>Tech Lead & Sviluppatore Full-Stack</strong>, costruisco l'infrastruttura invisibile, il codice pulito e l'interfaccia utente che fa scalare il tuo business.
              </p>
              <p>
                Come <strong>Fotografo, Art Director e Filmmaker</strong> (con esperienza dai red carpet del Festival di Cannes fino alla direzione artistica 3D nei Paesi Bassi), catturo l'emozione visiva che fa innamorare i tuoi clienti. 
              </p>
              <p>
                L'unione di queste discipline mi permette di consegnare prodotti digitali completi, coesi e impossibili da ignorare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BENTO BOX: ARSENAL & TECH STACK */}
      <section className="py-24 bg-zinc-900/30 border-y border-zinc-800/50">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold mb-12">Il mio Arsenale</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Box 1: Frontend */}
            <div className="col-span-1 md:col-span-2 p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
              <MonitorPlay className="w-8 h-8 text-emerald-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Frontend & Engineering</h3>
              <p className="text-zinc-400 mb-6">Costruisco interfacce moderne, accessibili e incredibilmente veloci.</p>
              <div className="flex flex-wrap gap-2">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', '3D Rendering', 'VR/AR'].map(tech => (
                  <span key={tech} className="px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-full text-sm font-medium text-zinc-300">{tech}</span>
                ))}
              </div>
            </div>

            {/* Box 2: Camera Gear */}
            <div className="col-span-1 p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
              <Camera className="w-8 h-8 text-rose-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Visual Gear</h3>
              <p className="text-zinc-400 mb-6">Equipaggiamento cinema-grade per risultati senza compromessi.</p>
              <div className="flex flex-wrap gap-2">
                {['Sony A7RIII', 'Sony A7IV', 'G-Master Lenses', 'DaVinci Resolve', 'Lightroom', 'Photoshop'].map(gear => (
                  <span key={gear} className="px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-full text-sm font-medium text-zinc-300">{gear}</span>
                ))}
              </div>
            </div>

            {/* Box 3: Backend */}
            <div className="col-span-1 p-8 rounded-3xl bg-zinc-900 border border-zinc-800">
              <Code2 className="w-8 h-8 text-cyan-400 mb-6" />
              <h3 className="text-xl font-bold mb-4">Backend & DB</h3>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'PostgreSQL', 'Prisma', 'Supabase', 'Python'].map(tech => (
                  <span key={tech} className="px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-full text-sm font-medium text-zinc-300">{tech}</span>
                ))}
              </div>
            </div>

            {/* Box 4: SEO & Performance */}
            <div className="col-span-1 md:col-span-2 p-8 rounded-3xl bg-zinc-900 border border-zinc-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10"><Zap className="w-32 h-32" /></div>
              <Award className="w-8 h-8 text-amber-400 mb-6 relative z-10" />
              <h3 className="text-2xl font-bold mb-2 relative z-10">SEO & Core Web Vitals</h3>
              <p className="text-zinc-400 max-w-md relative z-10">
                Non faccio solo siti belli. Li ottimizzo maniacalmente per farti trovare su Google e garantire tempi di caricamento sotto il secondo, essenziali per la conversione.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TIMELINE / EXPERIENCE */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Esperienza Internazionale</h2>
            <p className="text-zinc-400">Dal Festival di Cannes allo sviluppo tecnologico in Nord Europa.</p>
          </div>
          
          <div className="space-y-12">
            {TIMELINE.slice(0, visibleItems).map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-12 group animate-in fade-in slide-in-from-bottom-4 duration-500">
                {/* Year */}
                <div className="md:w-40 shrink-0 md:text-right pt-1">
                  <span className="text-sm font-bold text-emerald-400 tracking-wider uppercase">{item.year}</span>
                </div>
                
                {/* Divider Line */}
                <div className="hidden md:flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full border-4 border-zinc-950 bg-zinc-700 group-hover:bg-emerald-500 transition-colors z-10" />
                  {/* Nascondiamo la linea per l'ultimo elemento della lista INTERA, non solo visibile */}
                  {index !== TIMELINE.length - 1 && <div className="w-px h-full bg-zinc-800 -mt-2" />}
                </div>

                {/* Content */}
                <div className="pb-8 md:pb-12 border-l-2 border-zinc-800 pl-6 md:border-0 md:pl-0">
                  <h3 className="text-2xl font-bold text-zinc-100 mb-1">{item.role}</h3>
                  <p className="text-emerald-500/80 font-medium text-sm mb-4">{item.company}</p>
                  <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Show More Logic */}
          {visibleItems < TIMELINE.length && (
            <div className="mt-8 text-center relative">
              {/* Fade out gradient to indicate more content */}
              <div className="absolute bottom-full left-0 w-full h-32 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none -mb-8" />
              <button 
                onClick={handleShowMore}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-zinc-50 hover:bg-zinc-800 transition-all font-medium relative z-10"
              >
                Mostra le esperienze precedenti <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}
          
          {/* Final CTA */}
          <div className="mt-32 text-center bg-zinc-900/50 border border-zinc-800 rounded-3xl p-12">
             <h3 className="text-2xl font-bold mb-6">Pronto per elevare il tuo brand?</h3>
             <Link href="/#contact" className="inline-flex items-center gap-2 bg-emerald-500 text-zinc-950 px-8 py-4 rounded-full font-bold hover:bg-emerald-400 transition-colors">
              Iniziamo un progetto insieme <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}