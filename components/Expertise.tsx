import { Terminal, Camera, Film, Code2, Database, MapPin, Utensils, Building2 } from 'lucide-react';

export default function Expertise() {
  return (
    <section id="services" className="py-32 bg-zinc-900/30 border-y border-zinc-800/50 relative overflow-hidden">
      
      {/* Subtle background glow for premium UI feel */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* SEO Optimized Section Header */}
        <div className="mb-20 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm font-medium mb-6">
            <MapPin className="w-4 h-4 text-emerald-400" /> Operativo a Torino, Piemonte e Italia.
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Il Vantaggio Competitivo: <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 to-zinc-500">Logica & Creatività.</span>
          </h2>
          
          <p className="text-lg text-zinc-400 leading-relaxed">
            Perché interfacciarsi con una web agency e uno studio fotografico separati? Offro alle attività locali e ai brand un unico punto di riferimento a Torino per lo <strong>sviluppo di siti web ad alte prestazioni</strong> e la <strong>creazione di contenuti visivi premium</strong>.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Card 1: Web Development */}
          <div className="p-10 rounded-[2rem] bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-900 transition-all duration-500 group">
            <Terminal className="w-12 h-12 text-emerald-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-2xl font-bold mb-4">Sviluppo Siti Web & E-Commerce</h3>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Realizzazione di piattaforme web veloci, sicure e ottimizzate per i motori di ricerca (SEO). Dimentica i template lenti: scrivo architetture custom orientate alla conversione.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <div className="w-8 h-8 rounded-full bg-zinc-950 flex items-center justify-center border border-zinc-800"><Code2 className="w-4 h-4 text-emerald-500" /></div>
                <span>Frontend moderno (React & Next.js)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <div className="w-8 h-8 rounded-full bg-zinc-950 flex items-center justify-center border border-zinc-800"><Database className="w-4 h-4 text-emerald-500" /></div>
                <span>Backend e Database scalabili</span>
              </div>
            </div>
          </div>

          {/* Card 2: Photography */}
          <div className="p-10 rounded-[2rem] bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 hover:border-rose-500/50 hover:bg-zinc-900 transition-all duration-500 group relative overflow-hidden">
            <Camera className="w-12 h-12 text-rose-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-2xl font-bold mb-4">Fotografia Commerciale</h3>
            <p className="text-zinc-400 leading-relaxed mb-8">
              L'estetica vende. Realizzo shooting fotografici professionali per esaltare l'identità del tuo brand. Immagini perfette per il tuo nuovo sito web o le campagne social.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <div className="w-8 h-8 rounded-full bg-zinc-950 flex items-center justify-center border border-zinc-800"><Utensils className="w-4 h-4 text-rose-500" /></div>
                <span>Food Photography per Ristoranti</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <div className="w-8 h-8 rounded-full bg-zinc-950 flex items-center justify-center border border-zinc-800"><Building2 className="w-4 h-4 text-rose-500" /></div>
                <span>Corporate & Brand Identity</span>
              </div>
            </div>
          </div>

          {/* Card 3: Filmmaking */}
          <div className="p-10 rounded-[2rem] bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 hover:border-orange-500/50 hover:bg-zinc-900 transition-all duration-500 group">
            <Film className="w-12 h-12 text-orange-400 mb-8 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-2xl font-bold mb-4">Produzione Video</h3>
            <p className="text-zinc-400 leading-relaxed mb-8">
              Storytelling cinematografico per catturare l'attenzione. Dalla pre-produzione al color grading, realizzo video aziendali e spot pubblicitari che raccontano la tua eccellenza.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <div className="w-8 h-8 rounded-full bg-zinc-950 flex items-center justify-center border border-zinc-800"><Film className="w-4 h-4 text-orange-500" /></div>
                <span>Video Aziendali & Spot Commerciali</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-300">
                <div className="w-8 h-8 rounded-full bg-zinc-950 flex items-center justify-center border border-zinc-800"><Camera className="w-4 h-4 text-orange-500" /></div>
                <span>Contenuti dinamici per Social Media</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}