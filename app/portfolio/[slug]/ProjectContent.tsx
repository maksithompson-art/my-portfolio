"use client";

import { useState } from 'react';
import { User, Globe, Calendar, Code2, X, Maximize2 } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import Image from 'next/image'; // 1. IMPORTIAMO NEXT/IMAGE

export default function ProjectContent({ project }: { project: any }) {
  // Stati per gestire le interazioni utente
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  // Stili personalizzati per il testo di Sanity
  const portableTextComponents = {
    block: {
      normal: ({children}: any) => <p className="mb-6">{children}</p>,
      h3: ({children}: any) => <h3 className="text-2xl font-bold mt-12 mb-6 text-zinc-100">{children}</h3>,
      blockquote: ({children}: any) => <blockquote className="border-l-4 border-emerald-500 pl-4 italic my-8 text-zinc-400">{children}</blockquote>,
    },
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* COLONNA PRINCIPALE (A SINISTRA) */}
        <div className="flex-1">
          <p className="text-emerald-400 font-bold mb-4 tracking-wider uppercase text-sm">{project.category}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 tracking-tight leading-[1.1]">{project.title}</h1>

          {/* 1. LA GALLERIA */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mb-16">
              <div className="columns-1 sm:columns-2 gap-4 space-y-4">
                {project.gallery.map((imgUrl: string, index: number) => (
                  <div 
                    key={index} 
                    onClick={() => setLightboxImage(imgUrl)}
                    // Per usare Next/Image con layout fill, il genitore DEVE essere relative
                    // E per l'effetto masonry, dobbiamo dargli un'altezza minima per non farlo collassare
                    className="relative break-inside-avoid rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 group cursor-zoom-in w-full"
                  >
                    {/* 2. SOSTITUITO <img> CON <Image /> */}
                    <Image 
                      src={imgUrl} 
                      alt={`Scatto ${index + 1} del progetto ${project.title}`} 
                      width={800} // Dimensioni base per calcolare l'aspect ratio
                      height={1200} // (Next.js le adatterà dinamicamente)
                      sizes="(max-width: 640px) 100vw, 50vw" // Essenziale per le performance Responsive
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                      // Non serve loading="lazy", Next.js lo fa in automatico!
                    />
                    
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none z-10">
                      <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. IL TESTO (Con effetto "Leggi Tutto") */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Case Study</h2>
            
            <div className="relative">
              <div className={`text-lg md:text-xl text-zinc-300 leading-relaxed prose-invert transition-all duration-500 ${isTextExpanded ? '' : 'max-h-[300px] overflow-hidden'}`}>
                {project.body ? (
                  <PortableText value={project.body} components={portableTextComponents} />
                ) : (
                  <p>{project.description}</p>
                )}
              </div>

              {!isTextExpanded && project.body && (
                <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-zinc-950 to-transparent flex items-end justify-center pb-2">
                  <button 
                    onClick={() => setIsTextExpanded(true)}
                    className="bg-zinc-900 border border-zinc-700 hover:border-emerald-500 text-zinc-100 px-6 py-3 rounded-full font-medium transition-all shadow-xl hover:shadow-emerald-500/10 z-10 translate-y-4"
                  >
                    Espandi Case Study
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* COLONNA LATERALE (I DETTAGLI TECNICI) */}
        <div className="lg:w-80 shrink-0">
          <div className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl space-y-8 sticky top-32">
            {project.role && (
              <div>
                <p className="text-sm text-zinc-500 mb-2 flex items-center gap-2"><User className="w-4 h-4"/> Ruolo</p>
                <p className="font-semibold text-zinc-200 text-lg">{project.role}</p>
              </div>
            )}
            {project.client && (
              <div>
                <p className="text-sm text-zinc-500 mb-2 flex items-center gap-2"><Globe className="w-4 h-4"/> Cliente</p>
                <p className="font-semibold text-zinc-200 text-lg">{project.client}</p>
              </div>
            )}
            {project.year && (
              <div>
                <p className="text-sm text-zinc-500 mb-2 flex items-center gap-2"><Calendar className="w-4 h-4"/> Anno</p>
                <p className="font-semibold text-zinc-200 text-lg">{project.year}</p>
              </div>
            )}
            {project.techStack && project.techStack.length > 0 && (
              <div>
                <p className="text-sm text-zinc-500 mb-4 flex items-center gap-2"><Code2 className="w-4 h-4"/> Tecnologie</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((t: string) => (
                    <span key={t} className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 text-zinc-300 text-xs rounded-lg font-medium shadow-sm">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* 3. IL LIGHTBOX */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300"
          onClick={() => setLightboxImage(null)} 
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white bg-white/10 p-2 rounded-full backdrop-blur-md transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          {/* Nel lightbox possiamo mantenere <img> standard per semplicità, 
              poiché l'immagine è già stata scaricata o è in cache e non 
              impatta il caricamento iniziale della pagina */}
          <img 
            src={lightboxImage} 
            alt="Immagine ingrandita" 
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </>
  );
}