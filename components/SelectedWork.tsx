"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Play, ChevronRight, ZoomIn } from 'lucide-react';

// --- MOCK DATA SEO OPTIMIZED ---
const WEB_PROJECTS = [
  { 
    slug: 'fintech-dashboard', 
    title: 'Fintech Dashboard', 
    category: 'Web App Custom', 
    tech: ['React', 'Node.js', 'PostgreSQL'], 
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    altText: "Interfaccia utente per piattaforma Fintech sviluppata in React e Node.js a Torino"
  },
  { 
    slug: 'ristorante-torino-booking', 
    title: 'E-Commerce & Booking', 
    category: 'Siti per Ristoranti', 
    tech: ['Next.js', 'Tailwind', 'Stripe'], 
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    altText: "Sito web e-commerce con sistema di prenotazione per ristorante a Torino, Piemonte"
  },
  { 
    slug: 'ai-content-generator', 
    title: 'SaaS AI Platform', 
    category: 'Software Architecture', 
    tech: ['Next.js', 'Python', 'OpenAI'], 
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    altText: "Applicazione web SaaS basata su intelligenza artificiale per agenzia di marketing"
  },
  { 
    slug: 'real-estate-app', 
    title: 'Portale Immobiliare', 
    category: 'Mobile & Web', 
    tech: ['React Native', 'Firebase'], 
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800',
    altText: "Applicazione immobiliare cross-platform per agenzia locale a Torino"
  },
];

// Trasformato in array di oggetti per iniettare l'alt text SEO
const PHOTOS = [
  {
    url: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800',
    altText: "Servizio fotografico per eventi aziendali e corporate nel centro di Torino"
  },
  {
    url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800',
    altText: "Food photography e shooting still life per menù di ristorante gourmet in Piemonte"
  },
  {
    url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800',
    altText: "Fotografia d'interni e architettura per locale commerciale e bistrot a Torino"
  },
  {
    url: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800',
    altText: "Ritratto editoriale e personal branding per professionisti in studio fotografico"
  },
  {
    url: 'https://images.unsplash.com/photo-1516214104703-d2a148cb089d?auto=format&fit=crop&q=80&w=800',
    altText: "Fotografia commerciale lifestyle per campagna pubblicitaria di brand di abbigliamento"
  },
  {
    url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800',
    altText: "Shooting fotografico di prodotto e-commerce ad alta conversione"
  },
];

const FILMS = [
  { 
    id: 1, 
    title: 'Campagna Brand 2024', 
    type: 'Spot Commerciale', 
    img: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
    altText: "Produzione video spot pubblicitario aziendale girato a Torino"
  },
  { 
    id: 2, 
    title: 'L\'Arte del Gusto', 
    type: 'Video per Ristorante', 
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    altText: "Video promozionale e storytelling visivo per ristorante di lusso in Piemonte"
  },
  { 
    id: 3, 
    title: 'Dietro le Quinte', 
    type: 'Documentario Corporate', 
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    altText: "Realizzazione video documentario corporate per industria locale"
  },
];

export default function SelectedWork() {
  const [activeTab, setActiveTab] = useState('web');

  return (
    <section id="work" className="py-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Lavori Recenti</h2>
            <p className="text-zinc-400">Una selezione dei miei progetti di sviluppo web e campagne visive.</p>
          </div>
          
          {/* Custom Tabs */}
          <div className="flex p-1 bg-zinc-900 border border-zinc-800 rounded-full w-fit" role="tablist">
            <button 
              role="tab"
              aria-selected={activeTab === 'web'}
              onClick={() => setActiveTab('web')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === 'web' ? 'bg-zinc-800 text-zinc-50 shadow-sm' : 'text-zinc-400 hover:text-zinc-200'}`}
            >
              Sviluppo Web
            </button>
            <button 
              role="tab"
              aria-selected={activeTab === 'photo'}
              onClick={() => setActiveTab('photo')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === 'photo' ? 'bg-zinc-800 text-zinc-50 shadow-sm' : 'text-zinc-400 hover:text-zinc-200'}`}
            >
              Fotografia
            </button>
            <button 
              role="tab"
              aria-selected={activeTab === 'film'}
              onClick={() => setActiveTab('film')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${activeTab === 'film' ? 'bg-zinc-800 text-zinc-50 shadow-sm' : 'text-zinc-400 hover:text-zinc-200'}`}
            >
              Produzione Video
            </button>
          </div>
        </div>

        {/* Web Projects Grid */}
        {activeTab === 'web' && (
          <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {WEB_PROJECTS.map((project) => (
              // Usiamo Next.js Link per passare "link juice" alle pagine interne SEO
              <Link href={`/portfolio/${project.slug}`} key={project.slug} className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer block" aria-label={`Vedi dettagli del progetto ${project.title}`}>
                <div className="aspect-[4/3] overflow-hidden bg-zinc-950">
                  <img 
                    src={project.img} 
                    alt={project.altText} // IL CUORE DELLA SEO PER IMMAGINI
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                    loading="lazy"
                  />
                </div>
                <div className="p-8">
                  <p className="text-emerald-400 text-sm font-semibold mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-300 transition-colors flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* Photography Masonry */}
        {activeTab === 'photo' && (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {PHOTOS.map((photo, i) => (
              <div key={i} className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in bg-zinc-900">
                <img 
                  src={photo.url} 
                  alt={photo.altText} // ALT TEXT INIETTATO QUI
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-sm font-medium flex items-center gap-2 text-zinc-50">
                    <ZoomIn className="w-4 h-4" /> Ingrandisci Scatto
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Film Grid */}
        {activeTab === 'film' && (
          <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            {FILMS.map((film) => (
              <div key={film.id} className="group relative rounded-3xl overflow-hidden cursor-pointer bg-zinc-900">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={film.img} 
                    alt={film.altText} // ALT TEXT INIETTATO QUI
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-90" 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-zinc-950/50 backdrop-blur-md flex items-center justify-center border border-zinc-50/20 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-zinc-50 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-zinc-950 to-transparent">
                  <p className="text-orange-400 text-sm font-semibold mb-1">{film.type}</p>
                  <h3 className="text-2xl font-bold">{film.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-16 text-center">
          <Link href="/portfolio" className="text-zinc-400 hover:text-zinc-50 font-medium inline-flex items-center gap-2 transition-colors">
            Esplora l'archivio completo <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}