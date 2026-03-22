"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, MonitorPlay, Camera, Film, Box, Play } from 'lucide-react';

// Definiamo come è fatto un progetto in arrivo da Sanity
type Project = {
  title: string;
  slug: string;
  category: string;
  img: string;
  altText: string;
};

const CATEGORIES = [
  { id: 'Web App', title: 'Web & App', desc: 'React, Next.js, Architetture Scalabili', icon: MonitorPlay, color: 'text-emerald-400', bgHover: 'hover:bg-emerald-500/10', borderActive: 'border-emerald-500' },
  { id: '3D Art Direction', title: '3D & VR', desc: 'Rendering Automotive, Animazione', icon: Box, color: 'text-cyan-400', bgHover: 'hover:bg-cyan-500/10', borderActive: 'border-cyan-500' },
  { id: 'Official Photographer', title: 'Fotografia', desc: 'Corporate, Fashion, Eventi', icon: Camera, color: 'text-rose-400', bgHover: 'hover:bg-rose-500/10', borderActive: 'border-rose-500' },
  { id: 'Cinematography', title: 'Filmmaking', desc: 'Cinematography, Spot & Documentari', icon: Film, color: 'text-orange-400', bgHover: 'hover:bg-orange-500/10', borderActive: 'border-orange-500' },
];

export default function PortfolioClient({ projects }: { projects: Project[] }) {
  // Impostiamo il tab iniziale
  const [activeTab, setActiveTab] = useState('Web App');

  // Filtriamo i progetti in base al tab selezionato
  const filteredProjects = projects.filter((project) => project.category === activeTab);

  return (
    <div className="min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="max-w-4xl mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Archivio <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Progetti.</span></h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Seleziona una disciplina per esplorare i case study. Dallo sviluppo software avanzato fino alla direzione artistica 3D e fotografia.
          </p>
        </div>

        {/* I Bottoni Filtro */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button 
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`text-left p-6 rounded-3xl transition-all duration-300 border ${isActive ? `bg-zinc-900 shadow-xl ${cat.borderActive}` : `bg-zinc-950/50 border-zinc-800 ${cat.bgHover} hover:border-zinc-600`}`}
              >
                <cat.icon className={`w-8 h-8 mb-4 ${isActive ? cat.color : 'text-zinc-500'}`} />
                <h3 className={`text-xl font-bold mb-2 ${isActive ? 'text-zinc-50' : 'text-zinc-400'}`}>{cat.title}</h3>
                <p className={`text-sm ${isActive ? 'text-zinc-300' : 'text-zinc-600'}`}>{cat.desc}</p>
              </button>
            )
          })}
        </div>

        {/* La Griglia dei Progetti (Ora è Dinamica!) */}
        <div className="min-h-[500px]">
          {filteredProjects.length === 0 ? (
            <p className="text-zinc-500 text-lg">Nessun progetto pubblicato in questa categoria (aggiungili da Sanity Studio!).</p>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-500">
              {filteredProjects.map((project) => (
                <Link href={`/portfolio/${project.slug}`} key={project.slug} className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer block">
                  <div className="aspect-[4/3] md:aspect-video overflow-hidden bg-zinc-950 relative">
                    <img src={project.img} alt={project.altText || project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                    {activeTab === 'Cinematography' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-zinc-950/50 backdrop-blur-md flex items-center justify-center border border-zinc-50/20 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 text-zinc-50 ml-1" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-8">
                    <p className="text-zinc-400 text-sm font-semibold mb-2 tracking-wider uppercase">{project.category}</p>
                    <h3 className="text-2xl font-bold flex items-center justify-between text-zinc-50">
                      {project.title}
                      <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}