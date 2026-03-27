"use client";

import React, { useState } from 'react';
import { Camera, MapPin, Award, Code2, MonitorPlay, Zap, ArrowUpRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
    role: "Fotografo di Scena (Film)", 
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
  const [visibleItems, setVisibleItems] = useState(3);

  const handleShowMore = () => {
    setVisibleItems(prev => Math.min(prev + 3, TIMELINE.length));
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#CCFF00] selection:text-black font-sans pb-24">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 inset-x-0 h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-[#0A0A0A]/0 to-transparent pointer-events-none transform-gpu" aria-hidden="true" />

      {/* 1. EDITORIAL HERO SECTION */}
      <header className="px-8 md:px-12 lg:px-24 pt-40 pb-24 relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          
          {/* Main Title */}
          <div className="mb-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-[#CCFF00] text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span>Basato a Torino, Italia</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[8.5rem] font-black tracking-tighter mb-16 leading-[0.9] uppercase">
            Due Mondi. <br className="hidden md:block"/>
            <span className="text-transparent [-webkit-text-stroke:2px_#CCFF00]">Una Visione.</span>
          </h1>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            {/* Left: The Portrait */}
            <div className="w-full lg:w-5/12 relative group">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative z-10 border border-white/10 bg-[#111111] shadow-2xl">
                <Image 
                  src="/IMG_4105.webp" 
                  alt="Maksi Thompson - Profilo Professionale" 
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#CCFF00]/10 rounded-full blur-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>

            {/* Right: The Narrative */}
            <div className="w-full lg:w-7/12 pt-8">
              <div className="space-y-8 text-xl md:text-2xl text-gray-400 leading-relaxed font-medium">
                <p>
                  La maggior parte dei professionisti sceglie una strada: logica strutturata o estetica creativa. Il mio percorso internazionale mi ha permesso di fonderle. Come <strong className="text-white">Tech Lead & Sviluppatore Full-Stack</strong>, costruisco l'infrastruttura invisibile e il codice pulito che fa scalare il tuo business.
                </p>
                <p>
                  Come <strong className="text-white">Fotografo, Art Director e Filmmaker</strong> — con un'esperienza che spazia dai red carpet del Festival di Cannes alla direzione artistica 3D nei Paesi Bassi — catturo l'emozione visiva che fa innamorare i tuoi clienti. 
                </p>
                <p className="pl-6 border-l-2 border-[#CCFF00] text-white italic">
                  L'unione di queste discipline mi permette di consegnare ecosistemi digitali completi, coesi e impossibili da ignorare.
                </p>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* 2. BENTO BOX: ARSENAL & TECH STACK */}
      <section className="py-32 px-8 md:px-12 lg:px-24 border-b border-white/5 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00] mb-4">Competenze</div>
            <h2 className="text-4xl md:text-5xl font-medium text-white">Il mio Arsenale.</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Box 1: Frontend */}
            <div className="col-span-1 md:col-span-2 p-10 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-[#CCFF00]/50 transition-colors duration-500 group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#CCFF00]/30 transition-colors">
                <MonitorPlay className="w-6 h-6 text-white group-hover:text-[#CCFF00] transition-colors" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-white">Frontend & Engineering</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">Costruisco interfacce moderne, accessibili e incredibilmente veloci, senza compromessi sul design.</p>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', '3D Rendering'].map(tech => (
                  <span key={tech} className="px-4 py-2 bg-[#0A0A0A] border border-white/10 text-gray-400 rounded-full text-[10px] font-bold tracking-widest uppercase hover:text-[#CCFF00] hover:border-[#CCFF00]/50 transition-colors cursor-default">{tech}</span>
                ))}
              </div>
            </div>

            {/* Box 2: Camera Gear */}
            <div className="col-span-1 p-10 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-[#CCFF00]/50 transition-colors duration-500 group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#CCFF00]/30 transition-colors">
                <Camera className="w-6 h-6 text-white group-hover:text-[#CCFF00] transition-colors" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-white">Visual Gear</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">Equipaggiamento cinema-grade per risultati eccellenti.</p>
              <div className="flex flex-wrap gap-3">
                {['Sony A7RIII', 'Sony A7IV', 'G-Master', 'DaVinci Resolve', 'Lightroom'].map(gear => (
                  <span key={gear} className="px-4 py-2 bg-[#0A0A0A] border border-white/10 text-gray-400 rounded-full text-[10px] font-bold tracking-widest uppercase hover:text-[#CCFF00] transition-colors cursor-default">{gear}</span>
                ))}
              </div>
            </div>

            {/* Box 3: Backend */}
            <div className="col-span-1 p-10 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-[#CCFF00]/50 transition-colors duration-500 group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#CCFF00]/30 transition-colors">
                <Code2 className="w-6 h-6 text-white group-hover:text-[#CCFF00] transition-colors" />
              </div>
              <h3 className="text-2xl font-medium mb-8 text-white">Backend & DB</h3>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'PostgreSQL', 'Prisma', 'Supabase', 'Sanity CMS'].map(tech => (
                  <span key={tech} className="px-4 py-2 bg-[#0A0A0A] border border-white/10 text-gray-400 rounded-full text-[10px] font-bold tracking-widest uppercase hover:text-[#CCFF00] transition-colors cursor-default">{tech}</span>
                ))}
              </div>
            </div>

            {/* Box 4: SEO & Performance */}
            <div className="col-span-1 md:col-span-2 p-10 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-[#CCFF00]/50 transition-colors duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity"><Zap className="w-40 h-40 text-white" /></div>
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#CCFF00]/30 transition-colors relative z-10">
                <Award className="w-6 h-6 text-white group-hover:text-[#CCFF00] transition-colors" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-white relative z-10">SEO & Core Web Vitals</h3>
              <p className="text-gray-400 max-w-lg leading-relaxed relative z-10">
                Non faccio solo siti esteticamente perfetti. Li ottimizzo maniacalmente per dominare le ricerche Google e garantire tempi di caricamento sotto il secondo, essenziali per la conversione.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TIMELINE / EXPERIENCE */}
      <section className="py-32 px-8 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-24">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00] mb-4">Background</div>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">Esperienza Internazionale.</h2>
            <p className="text-gray-400 text-lg">Dal Festival di Cannes allo sviluppo tecnologico nel Nord Europa.</p>
          </div>
          
          <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0">
            <div className="space-y-16">
              {TIMELINE.slice(0, visibleItems).map((item, index) => (
                <div key={index} className="relative flex flex-col md:flex-row gap-8 md:gap-16 group animate-in fade-in slide-in-from-bottom-4 duration-500">
                  
                  {/* Timeline Node (Mobile) */}
                  <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#CCFF00] transition-colors md:hidden" />

                  {/* Year */}
                  <div className="md:w-48 shrink-0 md:text-right pt-1 pl-6 md:pl-0">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00]">{item.year}</span>
                  </div>
                  
                  {/* Divider Line (Desktop) */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full border border-white/20 bg-[#111111] group-hover:border-[#CCFF00] group-hover:bg-[#CCFF00] transition-colors z-10 shadow-[0_0_10px_rgba(204,255,0,0)] group-hover:shadow-[0_0_15px_rgba(204,255,0,0.5)]" />
                    {index !== TIMELINE.length - 1 && <div className="w-[1px] h-full bg-white/10 -mt-1" />}
                  </div>

                  {/* Content */}
                  <div className="pb-8 pl-6 md:pb-0 md:pl-0">
                    <h3 className="text-2xl font-medium text-white mb-2 group-hover:text-gray-200 transition-colors">{item.role}</h3>
                    <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-6">{item.company}</p>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Show More Logic */}
          {visibleItems < TIMELINE.length && (
            <div className="mt-16 text-center relative">
              <div className="absolute bottom-full left-0 w-full h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none -mb-8" />
              <button 
                onClick={handleShowMore}
                className="cursor-pointer inline-flex items-center justify-center bg-white text-black rounded-full px-8 py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-[#CCFF00] transition-colors relative z-10 group"
              >
                Espandi Cronologia <ChevronDown className="w-4 h-4 ml-3 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          )}
          
          {/* Final CTA (Massive Glass Card) */}
          <div className="mt-32 bg-[#111111] border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group hover:border-[#CCFF00]/30 transition-colors duration-700">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CCFF00]/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
             <div className="relative z-10">
               <h3 className="text-3xl md:text-5xl font-medium mb-8 text-white tracking-tight">Pronto per elevare <br/>il tuo brand?</h3>
               <Link href="/#contact" className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-[#CCFF00] text-black text-xs font-bold tracking-widest uppercase hover:bg-white transition-colors group/btn shadow-[0_0_30px_rgba(204,255,0,0.2)]">
                Iniziamo il progetto <ArrowUpRight className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
              </Link>
             </div>
          </div>

        </div>
      </section>

    </div>
  );
}