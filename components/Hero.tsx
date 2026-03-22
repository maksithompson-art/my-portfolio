import { Mail, ArrowRight, MapPin, Code2, Camera, CheckCircle2, Star } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Premium Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[128px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-rose-500/10 rounded-full blur-[128px] pointer-events-none mix-blend-screen" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: SEO Copy & CTAs */}
          <div className="flex-1 text-left w-full">
            {/* Location & Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/80 border border-zinc-800 text-sm font-medium text-zinc-300 mb-8 backdrop-blur-md shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-zinc-400" />
                Disponibile a Torino & Remoto
              </span>
            </div>
            
            {/* The SEO H1 - Visually striking, keyword-dense */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Sviluppo <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Siti Web</span> <br className="hidden md:block" />
              & <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">Fotografia.</span>
            </h1>
            
            {/* The SEO Sub-headline (H2 visually styled as a paragraph) */}
            <h2 className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed mb-10 font-normal">
              Sono Maksi, <strong>Web Developer Full-Stack</strong> e <strong>Fotografo Commerciale a Torino</strong>. Realizzo piattaforme web ultra-veloci, siti per e-commerce, ristoranti, personal brands e narrazioni visive progettate per dominare il mercato.
            </h2>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/#contact" className="bg-zinc-50 text-zinc-950 px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
                Richiedi un Preventivo <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/portfolio" className="px-8 py-4 rounded-full font-semibold border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2 text-zinc-300 backdrop-blur-sm">
                Esplora il Portfolio
              </Link>
            </div>

            {/* Keyword Injection via "Trust Signals" */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-zinc-500 font-medium">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Next.js & React</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Siti per Ristoranti</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> Food Photography</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-rose-500" /> SEO Optimization</span>
            </div>
          </div>

          {/* RIGHT COLUMN: UI Abstract Visuals / Glassmorphism */}
          <div className="flex-1 w-full relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto">
              
              {/* Decorative Circle */}
              <div className="absolute inset-0 border border-zinc-800 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-8 border border-zinc-800/50 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              
              {/* Dev Card */}
              <div className="absolute top-12 -left-8 p-6 bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 rounded-2xl shadow-2xl transform -rotate-6 hover:rotate-0 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4 border border-emerald-500/30">
                  <Code2 className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-zinc-50 font-bold mb-1">Web Development</h3>
                <p className="text-zinc-400 text-sm">Frontend & Backend Architecture</p>
              </div>

              {/* Photo Card */}
              <div className="absolute bottom-20 -right-4 p-6 bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 rounded-2xl shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-rose-500/20 flex items-center justify-center mb-4 border border-rose-500/30">
                  <Camera className="w-6 h-6 text-rose-400" />
                </div>
                <h3 className="text-zinc-50 font-bold mb-1">Visual Production</h3>
                <p className="text-zinc-400 text-sm">Commercial & Event Photography</p>
              </div>

              {/* Center Client Rating Card */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl flex items-center gap-4 z-20 w-64">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-zinc-800 overflow-hidden"><img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Client" /></div>
                  <div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-zinc-800 overflow-hidden"><img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Client" /></div>
                  <div className="w-10 h-10 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center text-xs font-bold text-zinc-300">+40</div>
                </div>
                <div>
                  <div className="flex text-amber-400 mb-1">
                    <Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" />
                  </div>
                  <p className="text-xs text-zinc-400 font-medium">Progetti di Successo</p>
                </div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}