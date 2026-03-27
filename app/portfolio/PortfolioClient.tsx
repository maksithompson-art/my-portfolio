"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MonitorPlay, Camera, Film, Box, Play } from 'lucide-react';

// Added description to the type if you want to pull it from Sanity later
type Project = {
  title: string;
  slug: string;
  category: string;
  img: string;
  altText: string;
};

// Unified the color palette to match your Blueprint aesthetic
const CATEGORIES = [
  { id: 'Web App', title: 'Web & App', desc: 'React, Next.js, Architetture Scalabili', icon: MonitorPlay },
  { id: '3D Art Direction', title: '3D & VR', desc: 'Rendering Automotive, Animazione', icon: Box },
  { id: 'Official Photographer', title: 'Fotografia', desc: 'Corporate, Fashion, Eventi', icon: Camera },
  { id: 'Cinematography', title: 'Filmmaking', desc: 'Cinematography, Spot & Documentari', icon: Film },
];

export default function PortfolioClient({ projects }: { projects: Project[] }) {
  const [activeTab, setActiveTab] = useState('Web App');

  const filteredProjects = projects.filter((project) => project.category === activeTab);

  return (
    <div className="w-full max-w-7xl mx-auto pb-24">
      
      {/* FILTER BUTTONS: Dark Bento Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {CATEGORIES.map((cat) => {
          const isActive = activeTab === cat.id;
          
          return (
            <button 
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex flex-col text-left p-6 md:p-8 rounded-[2rem] border transition-all duration-500 group ${
                isActive 
                  ? 'bg-[#111111] border-[#CCFF00] shadow-[0_0_30px_rgba(204,255,0,0.05)]' 
                  : 'bg-[#0A0A0A] border-white/10 hover:border-white/30'
              }`}
            >
              <cat.icon className={`w-8 h-8 mb-6 transition-colors duration-300 ${isActive ? 'text-[#CCFF00]' : 'text-gray-500 group-hover:text-white'}`} />
              <h3 className={`text-xl font-medium mb-3 transition-colors ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                {cat.title}
              </h3>
              <p className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${isActive ? 'text-[#CCFF00]/80' : 'text-gray-600'}`}>
                {cat.desc}
              </p>
            </button>
          )
        })}
      </div>

      {/* THE DYNAMIC PROJECT GRID */}
      <div className="min-h-[500px]">
        {filteredProjects.length === 0 ? (
          <div className="w-full h-64 border border-white/10 border-dashed rounded-[3rem] flex flex-col items-center justify-center text-center p-8 bg-white/[0.02]">
            <div className="w-3 h-3 rounded-full bg-[#CCFF00] mb-4 animate-pulse" />
            <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">Nessun progetto in {activeTab}</p>
            <p className="text-gray-600 text-[10px] mt-2 tracking-wider uppercase">Pubblica nuovi contenuti da Sanity Studio</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {filteredProjects.map((project, index) => {
              // Create the editorial staggered effect just like on the homepage
              const isEven = index % 2 !== 0;

              return (
                <Link 
                  href={`/portfolio/${project.slug}`} 
                  key={project.slug} 
                  className={`group flex flex-col gap-6 ${isEven ? 'md:mt-16' : ''}`}
                >
                  
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] md:aspect-[4/5] lg:aspect-video rounded-[2rem] overflow-hidden bg-[#111] border border-white/5">
                    <Image 
                      src={`${project.img}?w=1000&q=80&fit=max&auto=format`} 
                      alt={project.altText || project.title} 
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105 ease-out opacity-90 group-hover:opacity-100" 
                    />
                    
                    {/* Video Overlay Icon (Only for Cinematography) */}
                    {activeTab === 'Cinematography' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors duration-500">
                        <div className="w-20 h-20 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:border-[#CCFF00] group-hover:text-[#CCFF00] transition-all duration-500 text-white">
                          <Play className="w-8 h-8 ml-1" fill="currentColor" />
                        </div>
                      </div>
                    )}

                    {/* Standard Hover Overlay (Hidden if Cinematography to not clash with play button) */}
                    {activeTab !== 'Cinematography' && (
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="bg-[#CCFF00] text-black text-[10px] font-bold tracking-widest uppercase px-6 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          Esplora Progetto
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Text Container */}
                  <div className="flex flex-col px-2">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00]">
                        {project.category}
                      </span>
                      <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-[#CCFF00] group-hover:rotate-45 transition-all duration-300" />
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-medium leading-snug text-white group-hover:text-gray-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                </Link>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
}