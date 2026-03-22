import { Terminal, Zap, Search, Smartphone, ArrowUpRight, CheckCircle2, Code } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Sviluppo Siti Web Italia | Web Developer',
  description: 'Sviluppatore web full-stack. Realizzo siti web ad alte prestazioni, e-commerce e piattaforme custom in Italia e a livello internazionale.',
};

const FEATURES = [
  { icon: Zap, title: "Velocità Estrema", desc: "Architetture Next.js e React per caricamenti istantanei. Ottimizzato per i Core Web Vitals di Google." },
  { icon: Search, title: "SEO Integrata", desc: "Codice semantico, server-side rendering e schema markup per dominare le ricerche locali e nazionali." },
  { icon: Smartphone, title: "Mobile First", desc: "Design responsivo fluido che garantisce conversioni massime da smartphone e tablet." },
  { icon: Code, title: "Codice Custom", desc: "Nessun template WordPress lento. Solo codice pulito, sicuro e scalabile su misura per te." },
];

const PROCESS = [
  { step: "01", title: "Discovery & UX", desc: "Analisi dei competitor, mappatura degli utenti e creazione dei wireframe ad alta conversione." },
  { step: "02", title: "UI Design", desc: "Creazione di interfacce premium, moderne e in linea con l'identità visiva del tuo brand." },
  { step: "03", title: "Sviluppo Full-Stack", desc: "Scrittura del codice frontend e backend, integrazione API e configurazione del database." },
  { step: "04", title: "Lancio & Scale", desc: "Testing rigoroso, ottimizzazione SEO finale e messa in produzione su server edge ultra-veloci." },
];

export default function WebDevLanding() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* HERO SECTION */}
      <header className="container mx-auto px-6 md:px-12 mb-24">
        <div className="max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
            <Terminal className="w-4 h-4" /> Web Development & Engineering
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Sviluppo Siti Web ad <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Alte Prestazioni.</span>
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl">
            Dal design dell'interfaccia all'infrastruttura backend. Realizzo piattaforme web, e-commerce e siti per ristoranti che non sono solo belli, ma progettati per scalare e convertire.
          </p>
          <div className="flex gap-4">
            <Link href="/#contact" className="bg-zinc-50 text-zinc-950 px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2">
              Inizia un Progetto <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* VALUE PROP GRID */}
      <section className="py-24 bg-zinc-900/30 border-y border-zinc-800/50">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold mb-12">Perché scegliere uno sviluppo custom?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURES.map((feat, i) => (
              <div key={i} className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors">
                <feat.icon className="w-10 h-10 text-emerald-400 mb-6" />
                <h3 className="text-xl font-bold mb-3">{feat.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT WORK EMBED */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-4">Casi Studio</h2>
              <p className="text-zinc-400">Piattaforme web sviluppate recentemente.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Hardcoded example for the landing page */}
            <Link href="/portfolio/fintech-dashboard" className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer block">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Web App" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
              </div>
              <div className="p-8">
                <p className="text-emerald-400 text-sm font-semibold mb-2">Web App Custom</p>
                <h3 className="text-2xl font-bold group-hover:text-emerald-300 transition-colors">Fintech Dashboard</h3>
              </div>
            </Link>
            <Link href="/portfolio/ristorante-torino-booking" className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer block">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" alt="E-commerce" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
              </div>
              <div className="p-8">
                <p className="text-emerald-400 text-sm font-semibold mb-2">E-Commerce & Booking</p>
                <h3 className="text-2xl font-bold group-hover:text-emerald-300 transition-colors">Portale Ristorante Torino</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS / AIO OPTIMIZED LIST */}
      <section className="py-24 bg-zinc-900/30 border-y border-zinc-800/50">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <h2 className="text-4xl font-bold mb-16 text-center">Il Metodo di Sviluppo</h2>
          <div className="space-y-12">
            {PROCESS.map((step, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                <div className="text-6xl font-black text-zinc-800">{step.step}</div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-zinc-400 text-lg leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}