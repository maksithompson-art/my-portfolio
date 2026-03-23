import { ArrowRight, MapPin, Code2, Camera, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center bg-zinc-950 overflow-hidden selection:bg-emerald-500/30">
      
      {/* BACKGROUND ENGINE (Zero Lag) */}
      <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-900/20 via-zinc-950/80 to-zinc-950 pointer-events-none transform-gpu"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-rose-900/10 via-transparent to-transparent pointer-events-none transform-gpu"></div>

      {/* KINETIC TYPOGRAPHY (Keyword-rich background text) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-full flex flex-col items-center justify-center opacity-[0.03] select-none pointer-events-none overflow-hidden" aria-hidden="true">
        <span className="text-[11vw] font-black text-white leading-none tracking-tighter whitespace-nowrap">
          MAKSI THOMPSON
        </span>
        <span className="text-[11vw] font-black text-transparent leading-none tracking-tighter whitespace-nowrap" style={{ WebkitTextStroke: '2px white' }}>
          PHOTOGRAPHER
        </span>
      </div>

      {/* CORE CONTENT (Centrato e SEO-Optimized) */}
      <div className="container mx-auto px-6 md:px-12 relative z-10 -mt-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          {/* Status Badge - Ottimizzato per Local SEO */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-zinc-800/60 bg-zinc-900/50 text-sm font-medium text-zinc-300 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-zinc-400" />
              <span className="sr-only">Posizione:</span> Torino & Disponibile da Remoto
            </span>
          </div>
          
          {/* Main Headline H1 - Il cuore della SEO (Parole chiave esatte) */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.05] text-zinc-50 mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-150">
            Sviluppo <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Siti Web</span> <br />
            & Fotografia <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Commerciale.</span>
          </h1>
          
          {/* Subheadline H2 - Copywriting orientato alla conversione e al ROI del cliente */}
          <h2 className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed mb-12 font-medium animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            Sono Maksi, <strong>Web Developer Full-Stack</strong> e <strong>Fotografo Commerciale a Torino</strong>. Realizzo piattaforme web ultra-veloci, siti e-commerce e narrazioni visive progettate per dominare il mercato.
          </h2>

        </div>
      </div>

      {/* THE FLOATING DOCK (Call to Action e Social Proof) */}
      <nav aria-label="Navigazione rapida" className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full px-6 flex justify-center z-20 animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-500">
        <div className="flex flex-col sm:flex-row items-center gap-2 p-2 rounded-[2rem] sm:rounded-full bg-zinc-900/90 border border-zinc-800 shadow-2xl backdrop-blur-md">
          
          {/* CTA Principale - Chiara e orientata all'azione */}
          <Link href="/#contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-zinc-50 text-zinc-950 font-bold hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
            Richiedi un Preventivo <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
          
          <div className="flex items-center gap-2 px-2">
            {/* Link con aria-label per Accessibilità/SEO */}
            <Link href="#work" aria-label="Esplora i progetti di Sviluppo Web" className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-colors group">
              <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
            </Link>
            <Link href="#work" aria-label="Esplora il portfolio di Fotografia e Video" className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-rose-400 hover:border-rose-500/50 transition-colors group">
              <Camera className="w-5 h-5 group-hover:scale-110 transition-transform" aria-hidden="true" />
            </Link>
          </div>

          <div className="hidden sm:flex items-center pl-4 pr-6 border-l border-zinc-800">
            <div className="flex -space-x-3 mr-4">
              <div className="relative w-8 h-8 rounded-full border-2 border-zinc-900 bg-zinc-800 overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Foto cliente soddisfatto" fill sizes="32px" className="object-cover" priority />
              </div>
              <div className="relative w-8 h-8 rounded-full border-2 border-zinc-900 bg-zinc-800 overflow-hidden">
                <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Foto cliente soddisfatto" fill sizes="32px" className="object-cover" priority />
              </div>
            </div>
            {/* Micro-copy per instillare fiducia */}
            <div className="text-xs text-zinc-400 font-medium leading-tight">
              Scelto da oltre <strong className="text-zinc-200">40+</strong><br/>Aziende e Brand
            </div>
          </div>

        </div>
      </nav>

      {/* Indicatore di scroll */}
      <Link href="#work" aria-label="Scorri verso i progetti recenti" className="absolute bottom-4 left-1/2 -translate-x-1/2 text-zinc-600 hover:text-zinc-300 transition-colors animate-bounce hidden sm:block">
        <ChevronDown className="w-5 h-5" aria-hidden="true" />
      </Link>

    </section>
  );
}