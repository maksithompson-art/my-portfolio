import { client } from '@/sanity/lib/client';
import { Camera, MapPin, Image as ImageIcon, Users, ArrowUpRight, Zap, Lightbulb, Focus, Layers, ChevronDown, Loader, Box, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
// Legacy page — proxy redirects to /[lang]/servizi/fotografia

// METADATA OTTIMIZZATA (SEO & AIO)
export const metadata = {
  title: 'Fotografia Commerciale & 3D Rendering Torino | Maksi Thompson',
  description: 'Servizi di Art Direction a Torino. Fotografia per ristoranti, eventi corporate, brand identity e 3D rendering (CGI) per architettura e prodotto.',
  keywords: [
    'fotografo Torino', '3D rendering Torino', 'food photography', 'visualizzazione architettonica',
    'fotografo eventi aziendali', 'corporate branding', 'shooting fotografico', 
    'fotografo commerciale', 'CGI', 'art direction', 'product rendering'
  ],
  alternates: {
    canonical: 'https://www.maksithompson.com/servizi/fotografia',
  }
};

const EXPERTISE = [
  { icon: Camera, title: "Fotografia Commerciale", desc: "Storytelling visivo per esaltare il tuo brand. Food photography, interior design e ritrattistica per ristoranti, e-commerce e corporate." },
  { icon: Box, title: "3D Rendering & CGI", desc: "Ambienti virtuali, product rendering e visualizzazione architettonica fotorealistica. Mostriamo il tuo prodotto prima ancora che esista fisicamente." },
  { icon: ImageIcon, title: "Art Direction & Post", desc: "Dalla creazione del moodboard iniziale fino al color grading finale e fotoritocco avanzato. Direzione artistica coerente in ogni singolo pixel." },
];

const PROCESS = [
  { step: "01", icon: Lightbulb, title: "Art Direction & Brief", desc: "Non scattiamo o renderizziamo a caso. Analizziamo il tuo brand, i competitor e creiamo un moodboard visivo per allineare lo stile, le luci e la narrativa." },
  { step: "02", icon: Focus, title: "Produzione & Modeling", desc: "Allestimento del set fotografico o modellazione 3D accurata della scena. Gestione maniacale dell'illuminazione per creare immagini dall'estetica cinematografica." },
  { step: "03", icon: Layers, title: "Post-Produzione & Compositing", desc: "Sviluppo digitale dei file RAW o calcolo dei render, ritocco di alta fascia (frequency separation) e color grading personalizzato per garantire coerenza cromatica." },
];

const FAQS = [
  { 
    q: "Che differenza c'è tra una fotografia classica e un rendering 3D?", 
    a: "La fotografia cattura la realtà fisica (es. un piatto del tuo ristorante o un evento). Il 3D Rendering (CGI) è interamente generato al computer: è perfetto per mostrare prodotti non ancora fabbricati, prototipi industriali o architetture in fase di progettazione, abbattendo i costi di logistica di un set reale." 
  },
  { 
    q: "Come consegnate i file finali? Sono pronti per la stampa e per i social?", 
    a: "Forniamo sempre una doppia esportazione. Una cartella con i file in altissima risoluzione, ideali per stampe, cartellonistica o cataloghi fisici. Una seconda cartella con i file già ottimizzati e compressi senza perdita di qualità per il web (Siti Web, Instagram, eCommerce), così non dovrai preoccuparti di pesi eccessivi." 
  },
  { 
    q: "Lavori solo a Torino o sei disponibile per trasferte?", 
    a: "La base operativa è a Torino, ma copro regolarmente shooting commerciali ed eventi in tutto il Nord Italia e all'estero, previo accordo sui costi di trasferta. Per il 3D Rendering, invece, l'intero processo è gestibile al 100% da remoto con clienti in tutto il mondo." 
  },
  { 
    q: "Quali sono i tempi di consegna per un servizio visivo?", 
    a: "Dipende dalla mole di lavoro. Generalmente, per uno shooting di ristorazione garantiamo la consegna dei file post-prodotti entro 7-10 giorni lavorativi. Per i progetti 3D complessi o di architettura, i tempi variano in base alla complessità della modellazione e ai tempi di calcolo (render)." 
  },
  { 
    q: "Chi detiene i diritti di utilizzo delle immagini o dei render?", 
    a: "Al saldo del servizio, ottieni i diritti di utilizzo commerciale completi e illimitati per web, social e stampa. Non ci sono costi di licenza, abbonamenti o rinnovi annuali nascosti: gli asset visivi diventano un capitale di tua proprietà esclusiva." 
  }
];

export default async function VisualsLanding() {
  
  // CHIAMATA A SANITY: Prende gli ultimi progetti visivi (Foto o 3D)
  const query = `*[_type == "project" && category in ["Official Photographer", "3D Rendering", "Art Direction"]] | order(_createdAt desc)[0...3] {
    _id, 
    title, 
    "slug": slug.current,
    "img": coalesce(mainImage.asset->url, heroImage.asset->url),
    "altText": coalesce(mainImage.alt, heroImage.alt)
  }`;

  const recentVisuals = await client.fetch(query);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#CCFF00] selection:text-black font-sans">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 inset-x-0 h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-[#0A0A0A]/0 to-transparent pointer-events-none transform-gpu" aria-hidden="true" />

      {/* MAIN HERO SECTION */}
      <section className="relative min-h-screen w-full bg-[#0A0A0A] text-white overflow-hidden flex flex-col justify-between p-8 md:p-12 lg:p-16 font-sans">
        
        {/* BACKGROUND */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/michael.webp" /* Sfondo principale */
            alt="Fotografia Commerciale e 3D Torino"
            fill
            priority
            className="object-cover object-center opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/20 to-[#0A0A0A]" />
        </div>

        {/* MID CONTENT */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-12 w-full mt-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest uppercase mb-6 text-gray-300">| ART DIRECTION & VISUALS</p>
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight">
              FOTOGRAFIA <br />
              COMMERCIALE <br />
              <span className="text-transparent [-webkit-text-stroke:2px_#CCFF00]">& 3D RENDERING.</span> <ArrowUpRight className="inline-block w-12 h-12 ml-4 p-3 border border-white/30 rounded-full text-[#CCFF00]" />
            </h1>
          </div>

          <div className="lg:text-right flex flex-col lg:items-end mt-8 lg:mt-0">
            <h2 className="text-lg md:text-xl font-medium leading-loose tracking-wider">
              FOOD & RISTORAZIONE<br />
              ARCHITETTURA 3D<br />
              PRODUCT CGI
            </h2>
            <p className="text-sm text-gray-400 max-w-xs mt-6 leading-relaxed">
              Storytelling visivo e ambienti virtuali iperrealistici per elevare il tuo brand. Dalla fotografia premium alla visualizzazione in Computer Grafica (CGI).
            </p>
          </div>
        </div>

        {/* BOTTOM BENTO STATS */}
        <div className="relative z-10 flex flex-col lg:flex-row justify-between items-end w-full mt-20">
          
          <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
            {/* Box 1: Focus Art Direction */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 w-full md:w-56 flex flex-col justify-between h-40 group hover:border-[#CCFF00]/40 transition-all duration-500">
               <div className="flex justify-between items-start">
                 <p className="text-xs text-white font-medium leading-tight">
                   Cura la tua<br/>
                   <span className="text-[#CCFF00]">Brand Identity.</span>
                 </p>
                 <Loader className="w-5 h-5 text-[#CCFF00] animate-spin-slow" />
               </div>
               <div>
                 <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-1">Art Direction</p>
                 <p className="text-[9px] uppercase tracking-wider text-gray-500">Luce cinematografica<br/>e composizione</p>
               </div>
            </div>

            {/* Box 2: Focus Qualità / Post-Produzione */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 w-full md:w-56 flex flex-col justify-between h-40 group hover:border-[#CCFF00]/40 transition-all duration-500">
               <div className="flex justify-between items-start">
                 <h3 className="text-4xl font-light tracking-tighter text-white">
                   PRO<span className="text-sm align-top ml-1 text-[#CCFF00]">+</span>
                 </h3>
               </div>
               <div>
                 <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-1">Qualità Alta</p>
                 <p className="text-[9px] uppercase tracking-wider text-gray-500">Post-produzione e<br/>color grading inclusi</p>
               </div>
            </div>
          </div> 
        </div> 
      </section>

      {/* EXPERTISE GRID */}
      <section className="py-32 px-8 md:px-12 lg:px-24 border-b border-white/5 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00] mb-4">Competenze Core</div>
            <h2 className="text-4xl md:text-5xl font-medium text-white">L'Arsenale Visivo.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {EXPERTISE.map((item, i) => (
              <div key={i} className="p-10 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-[#CCFF00]/50 transition-colors duration-500 group flex flex-col h-full min-h-[320px]">
                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#CCFF00]/30 transition-colors">
                  <item.icon className="w-6 h-6 text-white group-hover:text-[#CCFF00] transition-colors" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-medium mb-4 text-white leading-snug">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mt-auto">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 💥 NUOVA SEZIONE: FOTO VS 3D RENDERING 💥 */}
      <section className="py-32 px-8 md:px-12 lg:px-24 border-b border-white/5 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-20 max-w-3xl">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00] mb-4">Applicazioni Strategiche</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight">Il mezzo perfetto <br/>per ogni visione.</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Non esiste una soluzione unica per tutti. Scegliamo e combiniamo gli strumenti più adatti al tuo progetto per massimizzare il ritorno sull'investimento e l'impatto sul mercato.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Box: Fotografia */}
            <div className="group rounded-[2.5rem] overflow-hidden bg-[#111111] border border-white/10 hover:border-[#CCFF00]/40 transition-all duration-700 flex flex-col h-full">
              {/* Immagine Statica Dimostrativa (Food/Reale) */}
              <div className="relative h-72 md:h-96 w-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1200" 
                  alt="Food Photography e Ristorazione" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent" />
                <div className="absolute bottom-6 left-8 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white flex items-center gap-2">
                    <Camera className="w-3 h-3 text-[#CCFF00]" /> Fotografia Reale
                  </span>
                </div>
              </div>
              
              <div className="p-8 md:p-12 flex-grow flex flex-col">
                <h3 className="text-3xl font-medium text-white mb-4">Cattura l'autenticità.</h3>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  Ideale per creare una connessione empatica. La fotografia è insostituibile per l'hospitality, l'alta ristorazione, i reportage di eventi aziendali e per umanizzare il brand attraverso ritratti corporate di altissima gamma.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#CCFF00] shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300">Connessione emotiva e realismo tattile immediato.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#CCFF00] shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300">Creazione rapida di asset per PR e campagne Social.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box: 3D Rendering */}
            <div className="group rounded-[2.5rem] overflow-hidden bg-[#111111] border border-white/10 hover:border-[#CCFF00]/40 transition-all duration-700 flex flex-col h-full">
              {/* Immagine Statica Dimostrativa (3D Architettura/Astratto) */}
              <div className="relative h-72 md:h-96 w-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200" 
                  alt="3D Rendering Architettonico e CGI" 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent" />
                <div className="absolute bottom-6 left-8 bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white flex items-center gap-2">
                    <Box className="w-3 h-3 text-[#CCFF00]" /> 3D Rendering (CGI)
                  </span>
                </div>
              </div>
              
              <div className="p-8 md:p-12 flex-grow flex flex-col">
                <h3 className="text-3xl font-medium text-white mb-4">Crea l'impossibile.</h3>
                <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                  Svincolati dalle leggi della fisica. Il 3D è perfetto per l'architettura d'interni, l'e-commerce di prodotti non ancora fabbricati e la costruzione di set in studio impossibili o troppo costosi da realizzare nella realtà.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#CCFF00] shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300">Abbattimento drastico dei costi di logistica e noleggio set.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#CCFF00] shrink-0 mt-0.5" />
                    <p className="text-sm text-gray-300">Controllo assoluto e matematico su luci, riflessi e materiali.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* IL METODO OPERATIVO */}
      <section className="py-32 px-8 md:px-12 lg:px-24 border-b border-white/5 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 max-w-2xl">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00] mb-4">Approccio</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight">Come lavoriamo.</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Un asset visivo di successo non è mai frutto del caso. È il risultato di una meticolosa progettazione della luce e di una forte direzione artistica, sia sul set fisico che nello spazio virtuale.
            </p>
          </div>

          <div className="flex flex-col border-b border-white/10">
            {PROCESS.map((step, i) => (
              <div key={i} className="group flex flex-col lg:flex-row items-start lg:items-center py-12 md:py-16 border-t border-white/10 hover:bg-[#111111]/50 transition-colors duration-500">
                <div className="w-full lg:w-1/4 mb-8 lg:mb-0">
                  <span className="text-7xl md:text-[8rem] font-black text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.1)] group-hover:[-webkit-text-stroke:2px_#CCFF00] transition-all duration-700">
                    {step.step}
                  </span>
                </div>
                <div className="w-full lg:w-3/4 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-start lg:pl-12">
                  <div className="w-16 h-16 rounded-full bg-[#111111] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#CCFF00]/50 group-hover:bg-[#CCFF00]/5 transition-all duration-500 shadow-xl">
                    <step.icon className="w-6 h-6 text-white group-hover:text-[#CCFF00] transition-colors duration-500" />
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 group-hover:text-[#CCFF00] transition-colors duration-500">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-lg max-w-2xl">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL GALLERY PREVIEW (Dinamica da Sanity: Foto & 3D) */}
      <section className="py-32 px-8 md:px-12 lg:px-24 border-b border-white/5 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-8 border-b border-white/10 pb-12">
            <div>
              <div className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00] mb-4">Portfolio Dinamico</div>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-4 text-white">L'Estetica in Azione.</h2>
              <p className="text-gray-400 text-lg">Una selezione mista dei nostri recenti scatti fotografici e render 3D.</p>
            </div>
            <Link href="/portfolio" className="text-xs font-bold tracking-widest uppercase text-white hover:text-[#CCFF00] inline-flex items-center gap-3 transition-colors group">
              Archivio Completo <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" aria-hidden="true" />
            </Link>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {recentVisuals.length > 0 ? (
              recentVisuals.map((visual: any, index: number) => (
                <Link 
                  href={`/portfolio/${visual.slug}`} 
                  key={visual._id} 
                  className="block relative break-inside-avoid rounded-[2rem] overflow-hidden bg-[#111] border border-white/5 group"
                >
                  {visual.img && (
                    <Image 
                      src={`${visual.img}?w=800&q=80&auto=format`} 
                      alt={visual.altText || `Progetto visivo ${visual.title}`} 
                      width={800} 
                      height={index % 2 === 0 ? 1200 : 900} 
                      className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105 ease-out opacity-90 group-hover:opacity-100" 
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-[#CCFF00] text-black text-[10px] font-bold tracking-widest uppercase px-6 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                      Esplora Progetto
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <div className="col-span-3 p-16 text-center border border-white/10 border-dashed rounded-[3rem] bg-[#111111]">
                <div className="w-3 h-3 rounded-full bg-[#CCFF00] mb-4 animate-pulse mx-auto" />
                <p className="text-gray-400 text-xs font-bold tracking-widest uppercase">
                  Nessun progetto caricato al momento.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* THE DUAL ADVANTAGE - CROSS SELL ALLA SEZIONE WEB */}
      <section className="py-24 px-8 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#111111] border border-white/10 rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden group hover:border-[#CCFF00]/30 transition-colors duration-700">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#CCFF00]/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8">
                <Zap className="w-6 h-6 text-[#CCFF00]" aria-hidden="true" />
              </div>
              <h2 className="text-4xl md:text-6xl font-medium mb-8 text-white tracking-tight">Il vantaggio sleale.</h2>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-12">
                Oltre all'Art Direction, sono uno <strong>sviluppatore web senior</strong>. Posso realizzare gli asset visivi per il tuo brand e integrarli direttamente in un ecosistema web customizzato e ultra-veloce, progettato per massimizzare le conversioni. Nessuna agenzia intermedia, massima coerenza.
              </p>
              <Link href="/servizi/sviluppo-siti-web" className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-[#CCFF00] transition-colors group/btn">
                Scopri lo Sviluppo Web <ArrowUpRight className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-32 px-8 md:px-12 lg:px-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00] mb-6">FAQ</div>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">Domande Frequenti.</h2>
            <p className="text-gray-400 text-lg">Tutto quello che i clienti chiedono prima di prenotare un progetto visivo.</p>
          </div>
          
          <div className="space-y-4">
            {FAQS.slice(0, 3).map((faq, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-white/30 transition-colors">
                <h3 className="text-lg md:text-xl font-medium text-white mb-4 flex items-start gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#CCFF00] shrink-0" aria-hidden="true" />
                  {faq.q}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}

            <input type="checkbox" id="show-more-faqs" className="peer hidden" />
            
            <div className="hidden peer-checked:block space-y-4 animate-in fade-in slide-in-from-top-4 duration-500">
              {FAQS.slice(3).map((faq, i) => (
                <div key={i + 3} className="p-8 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-white/30 transition-colors">
                  <h3 className="text-lg md:text-xl font-medium text-white mb-4 flex items-start gap-4">
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#CCFF00] shrink-0" aria-hidden="true" />
                    {faq.q}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed pl-6">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-start mt-12">
              <label htmlFor="show-more-faqs" className="cursor-pointer inline-flex items-center justify-center bg-white text-black rounded-full px-8 py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-[#CCFF00] transition-colors peer-checked:hidden group">
                Mostra tutte le domande <ChevronDown className="w-4 h-4 ml-3 group-hover:translate-y-1 transition-transform" />
              </label>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}