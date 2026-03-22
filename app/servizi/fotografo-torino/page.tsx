import { Camera, MapPin, Image as ImageIcon, Users, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Fotografo Torino | Fotografo Ristoranti & Eventi',
  description: 'Servizi fotografici professionali a Torino. Specializzato in fotografia per ristoranti, eventi e corporate branding.',
};

const EXPERTISE = [
  { icon: Camera, title: "Food & Ristorazione", desc: "Menu shooting, interior design del locale e ritratti dello chef per esaltare l'esperienza culinaria." },
  { icon: Users, title: "Eventi & Corporate", desc: "Copertura visiva per eventi aziendali, conferenze e lanci di prodotto a Torino e in Piemonte." },
  { icon: ImageIcon, title: "Brand Identity", desc: "Campagne visive commerciali per e-commerce, prodotti e personal branding." },
];

export default function PhotoLanding() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* HERO SECTION */}
      <header className="container mx-auto px-6 md:px-12 mb-24">
        <div className="max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-medium">
            <MapPin className="w-4 h-4" /> Fotografo Professionista a Torino
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            Immagini che raccontano <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">la tua eccellenza.</span>
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl">
            Unisco tecnica compositiva e storytelling per creare asset visivi premium. Specializzato in fotografia commerciale, ritrattistica e fotografia per ristoranti di fascia alta.
          </p>
          <div className="flex gap-4">
            <Link href="/#contact" className="bg-zinc-50 text-zinc-950 px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition-colors flex items-center gap-2">
              Prenota uno Shooting <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* EXPERTISE GRID */}
      <section className="py-24 bg-zinc-900/30 border-y border-zinc-800/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {EXPERTISE.map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors">
                <item.icon className="w-10 h-10 text-rose-400 mb-6" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL GALLERY PREVIEW */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-bold">Portfolio Selezionato</h2>
            <Link href="/portfolio" className="text-zinc-400 hover:text-zinc-50 flex items-center gap-2">Archivio completo <ArrowUpRight className="w-4 h-4"/></Link>
          </div>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800" alt="Fotografia Eventi Torino" className="w-full rounded-2xl" />
            <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800" alt="Fotografo Ristoranti" className="w-full rounded-2xl" />
            <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800" alt="Commercial Photography" className="w-full rounded-2xl" />
          </div>
        </div>
      </section>

      {/* THE DUAL ADVANTAGE - CROSS SELL */}
      <section className="py-24 bg-rose-950/20 border-y border-rose-900/30">
        <div className="container mx-auto px-6 md:px-12 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-6">Cerchi un pacchetto completo?</h2>
          <p className="text-xl text-zinc-300 leading-relaxed mb-8">
            Oltre ad essere un fotografo, sono uno <strong>sviluppatore web senior</strong>. Posso realizzare lo shooting per il tuo ristorante o brand e integrare le immagini direttamente in un sito web customizzato e ultra-veloce, progettato per massimizzare le prenotazioni o le vendite.
          </p>
          <Link href="/servizi/sviluppo-siti-web" className="inline-flex items-center gap-2 text-rose-400 font-bold hover:text-rose-300 transition-colors">
            Scopri i servizi di Web Development <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}