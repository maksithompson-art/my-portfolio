"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Play, ChevronRight, ZoomIn } from 'lucide-react';

// Define the shape of the data coming from Sanity
interface Project {
  _id: string;
  title: string;
  slug: string;
  category: string;
  img: string;
  altText: string;
}

export default function SelectedWork({ projects = [] }: { projects: Project[] }) {
  const [activeTab, setActiveTab] = useState('web');

  // DYNAMIC FILTERING: Sort the Sanity projects into the correct tabs based on your Schema values
  const webProjects = projects.filter(p => p.category === 'Web App');
  const photoProjects = projects.filter(p => p.category === 'Official Photographer');
  // Grouping Filmmaking and 3D into the video tab
  const filmProjects = projects.filter(p => p.category === 'Cinematography' || p.category === '3D Art Direction'); 

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
              Video & 3D
            </button>
          </div>
        </div>

        {/* Web Projects Grid */}
        {activeTab === 'web' && (
          <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* ADDED 'index' TO MAP */}
            {webProjects.length > 0 ? webProjects.map((project, index) => (
              <Link href={`/portfolio/${project.slug}`} key={project._id} className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer block">
                <div className="relative aspect-[4/3] overflow-hidden bg-zinc-950">
                  {project.img && (
                    <Image 
                      src={project.img} 
                      alt={project.altText || project.title} 
                      fill
                      priority={index === 0} // LCP FIX: Prioritize the first image
                      sizes="(max-width: 768px) 100vw, 50vw" 
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                    />
                  )}
                </div>
                <div className="p-8 relative z-10 bg-zinc-900">
                  <p className="text-emerald-400 text-sm font-semibold mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-emerald-300 transition-colors flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </h3>
                </div>
              </Link>
            )) : <p className="text-zinc-500 col-span-2">Nessun progetto web trovato.</p>}
          </div>
        )}

        {/* Photography Masonry */}
        {activeTab === 'photo' && (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* ADDED 'index' TO MAP */}
            {photoProjects.length > 0 ? photoProjects.map((project, index) => (
              <Link href={`/portfolio/${project.slug}`} key={project._id} className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in bg-zinc-900 block w-full">
                {project.img && (
                  <Image 
                    src={project.img} 
                    alt={project.altText || project.title} 
                    width={800} 
                    height={1000}
                    priority={index === 0 || index === 1} // LCP FIX: Prioritize first two for masonry
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                  <span className="text-xs font-medium flex items-center gap-2 text-zinc-300">
                    <ZoomIn className="w-4 h-4" /> Vedi Progetto
                  </span>
                </div>
              </Link>
            )) : <p className="text-zinc-500">Nessuna fotografia trovata.</p>}
          </div>
        )}

        {/* Film / 3D Grid */}
        {activeTab === 'film' && (
          <div className="grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* ADDED 'index' TO MAP */}
            {filmProjects.length > 0 ? filmProjects.map((project, index) => (
              <Link href={`/portfolio/${project.slug}`} key={project._id} className="group relative rounded-3xl overflow-hidden cursor-pointer bg-zinc-900 block">
                <div className="relative aspect-video overflow-hidden bg-zinc-950">
                  {project.img && (
                    <Image 
                      src={project.img} 
                      alt={project.altText || project.title} 
                      fill
                      priority={index === 0} // LCP FIX: Prioritize the first image
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-90" 
                    />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-zinc-950/50 backdrop-blur-md flex items-center justify-center border border-zinc-50/20 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-6 h-6 text-zinc-50 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none">
                  <p className="text-orange-400 text-sm font-semibold mb-1">{project.category}</p>
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
              </Link>
            )) : <p className="text-zinc-500 col-span-2">Nessun video trovato.</p>}
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