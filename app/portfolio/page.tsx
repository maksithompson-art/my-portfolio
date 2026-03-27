import { client } from '@/sanity/lib/client';
import PortfolioClient from './PortfolioClient';
import { ArrowDownRight } from 'lucide-react';

export const metadata = {
  title: 'L\'Archivio | Sviluppo Web, Art Direction & Fotografia',
  description: 'Esplora l\'archivio completo dei progetti firmati Maksi Thompson. Ecosistemi visivi, piattaforme web performanti e strategie digitali per brand ambiziosi.',
};

export const revalidate = 60; 

export default async function PortfolioPage() {
  // Enhanced GROQ query to ensure we have all data needed for a premium grid
  const query = `*[_type == "project"] | order(orderRank asc) {
    _id,
    title,
    "slug": slug.current,
    category,
    "img": heroImage.asset->url,
    "altText": heroImage.alt,
    description
  }`;

  const projects = await client.fetch(query);
  
  return (
    // We set the background to our dark blueprint theme and style text selection to neon lime!
    <main className="min-h-screen w-full bg-[#0A0A0A] text-white pt-40 md:pt-48 pb-24 selection:bg-[#CCFF00] selection:text-black font-sans">
      
      {/* MASSIVE CINEMATIC HEADER */}
      <header className="px-8 md:px-12 lg:px-24 mb-16 md:mb-24 relative z-10">
        
        {/* Sub-label */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-2 h-2 rounded-full bg-[#CCFF00] animate-pulse" />
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">
            Index_001
          </span>
        </div>

        {/* Giant Outlined Typography */}
        {/* Note: Ensure your globals.css still has the .text-outline utility we created earlier! */}
        <h1 className="text-[5rem] md:text-[9rem] lg:text-[13rem] font-black uppercase tracking-tighter leading-[0.85] mb-12 flex flex-col cursor-default">
          <span className="text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.4)] hover:text-white transition-colors duration-700">SELECTED</span>
          <span className="text-white hover:text-[#CCFF00] transition-colors duration-700">WORKS.</span>
        </h1>

        {/* Header Footer/Intro text */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-12 border-b border-white/10 pb-16">
          <p className="text-xl md:text-2xl font-medium text-gray-300 max-w-2xl leading-snug">
            Una selezione curata di piattaforme web, identità visive e art direction. 
            Costruiamo ecosistemi digitali per brand che vogliono dominare il loro mercato.
          </p>
          
          <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00] flex items-center gap-3 bg-[#CCFF00]/10 px-4 py-2 rounded-full border border-[#CCFF00]/20">
              {projects.length} Progetti Indicizzati
            </div>
            <p className="text-xs font-bold tracking-widest uppercase text-gray-500 flex items-center gap-2">
              Scorri l&apos;archivio <ArrowDownRight className="w-4 h-4" />
            </p>
          </div>
        </div>

      </header>

      {/* THE INTERACTIVE GRID (Client Component) */}
      <section className="px-8 md:px-12 lg:px-24 relative z-20">
        <PortfolioClient projects={projects} />
      </section>

    </main>
  );
}