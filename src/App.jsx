import React, { useState, useEffect, useRef } from 'react';
import { getProjects } from './lib/sanity';
import { 
  Camera, 
  Box, 
  FileText, 
  Mail, 
  ExternalLink, 
  ChevronRight,
  MonitorPlay,
  Aperture,
  X,
  MapPin,
  Phone,
  Globe
} from 'lucide-react';

// --- Custom Brand Icons (since lucide-react removed them) ---
const GithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const InstagramIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

// --- Custom Hooks ---
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1, ...options });

    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [options]);

  return [targetRef, isIntersecting];
};

// --- Data ---

const EXPERIENCE_DATA = [
  {
    year: "Gen 2023 - Presente",
    role: "Tech Lead / Art Director & Lead 3D Artist",
    company: "Sailing Studios | Piemonte, Italia",
    description: [
      "Realizzazione di asset 3D high-poly e low-poly, ambienti fotorealistici e animazioni avanzate (incluso Rigging, Animation Curves, Bone Drivers).",
      "Texturing PBR avanzato in Adobe Substance Painter e Substance Designer: baking di dettagli da mesh high-poly, creazione di materiali custom (metalli, tessuti, vetro, pelle, pietre preziose) con resa fisicamente accurata.",
      "Gestione autonoma dell'intera pipeline 3D — modellazione, retopology, UV mapping, sculpting di dettaglio, shading, lighting avanzato (HDRI, Global Illumination, Baked Lighting) e rendering finale con output pronti per la stampa e il digitale.",
      "Montaggio video su Davinci Resolve Studio/Adobe Premiere e post produzione (Color-Grading + VFX) su Davinci e After Effects."
    ]
  },
  {
    year: "Gen 2019 - Gen 2023",
    role: "Lead 3D Art Director & Lead 3D Artist",
    company: "XRHome | Paesi Bassi",
    description: [
      "Modellazione, sculpting e texturing PBR di ambienti con attenzione a proporzioni, materiali e finiture superfici.",
      "Animazione, Montaggio e post produzione di video showcase per spazi architettonici.",
      "Conversione di progetti CAD su Blender/Unreal Engine per la creazione di scene fotorealistiche e animazioni con setup luci da studio e ambientali, ottimizzate per rendering di alta qualità destinati a presentazioni cliente e campagne visive.",
      "Sviluppo di esperienze in tempo reale interattive su Unreal Engine con materiali fisicamente accurati e illuminazione real-time, per la visualizzazione immersiva di spazi architettonici e prodotti."
    ]
  },
  {
    year: "Apr 2018 - Giu 2019",
    role: "Fotografo Ufficiale",
    company: "Cannes International Film Festival (Marché du Film) | Francia",
    description: [
      "Copertura fotografica ufficiale e gestione dei flussi di editing rapido in tempo reale per la stampa internazionale e i canali promozionali del festival.",
      "Produzione di contenuti ad alto volume, pronti per la pubblicazione, con scadenze strette in un ambiente di evento live ad alta pressione."
    ]
  },
  {
    year: "Ott 2019 - Nov 2019",
    role: "Fotografo di Scena (Film)",
    company: "Goldfinch | Regno Unito",
    description: [
      "Fotografia di scena e produzione di asset promozionali sul set del thriller psicologico 'Gatecrash', garantendo coerenza con l'atmosfera cinematografica originale."
    ]
  },
  {
    year: "Mag - Giu 2018",
    role: "Fotografo Ufficiale",
    company: "Monaco Grand Prix Historique | Monaco, Monte Carlo",
    description: [
      "Copertura fotografica ufficiale dell'evento di motorsport storico, catturando l'azione delle gare ad alta velocità e producendo contenuti promozionali per gli organizzatori e i media internazionali."
    ]
  },
  {
    year: "Mar - Apr 2018",
    role: "Fotografo Ufficiale",
    company: "Newcastle International Film Festival | Regno Unito",
    description: [
      "Fotografia ufficiale dell'evento e produzione di immagini per la stampa, supportando la diffusione mediatica internazionale e le campagne promozionali del festival."
    ]
  },
  {
    year: "Ott 2017 - Mar 2019",
    role: "Istruttore di Fotografia",
    company: "Thompson Photography | Regno Unito",
    description: [
      "Insegnamento di tecniche avanzate di illuminazione e gestione completa della produzione fotografica professionale per classi internazionali."
    ]
  }
];

const SKILLS_DATA = {
  languages: "Italiano (Madrelingua), Inglese (Fluente/C1), Francese (Fluente/C1)",
  technical: "Modellazione 3D hard-surface e organica, sculpting, retopology e UV mapping, texturing PBR con creazione di materiali custom, set-up di lighting avanzato (studio lighting, Natural lighting), rendering fotorealistico, animazione 3D, montaggio video, post-produzione, color grading e VFX.",
  software: [
    "DaVinci Resolve", "Photoshop", "Lightroom", "Premiere", 
    "Blender", "Cinema 4D", "Unreal Engine", "Substance Painter", 
    "Reality Capture", "Sketchup", "CAD"
  ]
};

const EDUCATION_DATA = [
  "Laurea in Cinematografia | SAE Institute Amsterdam",
  "International Baccalaureate | Scuola Europea Varese"
];

const CERTIFICATIONS_DATA = [
  "Adobe Certified Professional: Visual Design (Photoshop & Lightroom)",
  "SAE Cinematography Certificate | SAE Institute Amsterdam"
];

// --- Components ---

const FadeInSection = ({ children, className = "", delay = 0, ...props }) => {
  const [ref, isVisible] = useIntersectionObserver();
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
};

export default function PortfolioApp() {
  const [activeTab, setActiveTab] = useState('All');
  const [scrolled, setScrolled] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);

  useEffect(() => {
    getProjects()
      .then((data) => setProjects(data))
      .catch((err) => console.error('Sanity fetch error:', err))
      .finally(() => setLoadingProjects(false));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedProject]);

  const filteredPortfolio = activeTab === 'All'
    ? projects
    : projects.filter(item => item.category === activeTab);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-indigo-500/30">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-fuchsia-900/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500 flex items-center justify-center">
              <span className="text-white text-sm font-black">M</span>
            </div>
            <span>MAKSI<span className="text-zinc-500">THOMPSON</span></span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
            {['Works', 'CV', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-zinc-400 hover:text-white transition-colors uppercase"
              >
                {item}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollToSection('contact')}
            className="md:hidden text-sm uppercase tracking-widest text-indigo-400 font-semibold"
          >
            Hire Me
          </button>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-28 pb-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Left Side: Info */}
            <div className="text-left">
              <FadeInSection>
                <h2 className="text-indigo-400 font-mono text-sm md:text-base mb-6 tracking-widest uppercase flex items-center justify-start gap-2">
                  <Aperture size={16} /> Lead 3D Artist & Fotografo
                </h2>
              </FadeInSection>
              <FadeInSection delay={100}>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[1.1] mb-8">
                 <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400">
                    Lead 3D Artist &
                  </span>
                  <br /> Fotografo
                </h1>
              </FadeInSection>
              <FadeInSection delay={200}>
                <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed">
                  3D Artist e Visual Creator con oltre 8 anni di esperienza internazionale tra Italia, Paesi Bassi, Regno Unito e Francia. Specializzato nell'intera pipeline 3D — dalla modellazione e sculpting al texturing PBR, animazione, lighting e rendering fotorealistico — fino alla post-produzione, color grading e compositing VFX.
                </p>
              </FadeInSection>
              <FadeInSection delay={300}>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <button 
                    onClick={() => scrollToSection('works')}
                    className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-transform active:scale-95 flex items-center justify-center gap-2"
                  >
                    Esplora i Lavori <ChevronRight size={18} />
                  </button>
                  <button 
                    onClick={() => scrollToSection('cv')}
                    className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-semibold rounded-full hover:bg-zinc-800 transition-all flex items-center justify-center gap-2"
                  >
                    <FileText size={18} /> Vedi CV
                  </button>
                </div>
              </FadeInSection>
            </div>

            {/* Right Side: Profile Image */}
            <div className="relative mt-12 lg:mt-0">
              {/* Decorative glow behind the image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/30 to-fuchsia-500/30 blur-[80px] rounded-full pointer-events-none"></div>
              
              <FadeInSection delay={400} className="relative z-10">
                <div className="aspect-[4/5] max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden border border-zinc-800/50 shadow-2xl relative group">
                  {/* Sostituisci questo URL con l'immagine della tua vera foto */}
                  <img 
                    src="/maksi.JPG" 
                    alt="Maksi Thompson Portrait" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-60"></div>
                </div>
              </FadeInSection>
            </div>

          </div>
        </section>

        {/* Works Section */}
        <section id="works" className="py-24 px-6 md:px-12 bg-zinc-950/50">
          <div className="max-w-6xl mx-auto">
            <FadeInSection>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Selected Works</h2>
                  <p className="text-zinc-400 max-w-md">A curated collection of my best visual creations, spanning across different mediums and disciplines.</p>
                </div>
                
                {/* Filters */}
                <div className="flex flex-wrap gap-2 p-1 bg-zinc-900/50 rounded-full border border-zinc-800/50 backdrop-blur-sm self-start md:self-end">
                  {['All', '3D Render', 'Fotografia'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                        activeTab === tab
                          ? 'bg-zinc-100 text-zinc-900 shadow-lg'
                          : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50'
                      }`}
                    >
                      {tab === '3D Render' && <Box size={14} />}
                      {tab === 'Fotografia' && <Camera size={14} />}
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
            </FadeInSection>

            {/* Gallery Grid */}
            {loadingProjects ? (
              <div className="flex justify-center items-center py-24">
                <div className="w-8 h-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
              </div>
            ) : filteredPortfolio.length === 0 ? (
              <div className="text-center py-24 text-zinc-500">
                Nessun progetto trovato. Carica i tuoi lavori dal CMS.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
                {filteredPortfolio.map((item, index) => (
                  <FadeInSection
                    key={item._id}
                    delay={index * 100}
                    onClick={() => setSelectedProject(item)}
                    className={`group relative overflow-hidden rounded-2xl bg-zinc-900 cursor-pointer ${
                      item.size === 'large' ? 'md:col-span-2 md:row-span-2' :
                      item.size === 'wide' ? 'md:col-span-2 row-span-1' :
                      item.size === 'tall' ? 'row-span-2' : ''
                    }`}
                  >
                    <img
                      src={item.mainImage}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-8">
                      <span className="text-indigo-400 font-mono text-xs uppercase tracking-widest mb-2 flex items-center gap-2">
                        {item.category === '3D Render' ? <Box size={12} /> : <Camera size={12} />}
                        {item.category}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                        <ExternalLink size={16} />
                      </div>
                    </div>
                  </FadeInSection>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CV Section */}
        <section id="cv" className="py-24 px-6 md:px-12 border-t border-zinc-900 relative overflow-hidden">
          {/* Decorative element */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-[80%] bg-gradient-to-l from-indigo-900/10 to-transparent pointer-events-none" />

          <div className="max-w-6xl mx-auto">
            <FadeInSection>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16">Curriculum Vitae</h2>
            </FadeInSection>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Experience Timeline */}
              <div className="lg:col-span-8">
                <FadeInSection>
                  <h3 className="text-xl font-mono uppercase tracking-widest text-zinc-500 mb-8 border-b border-zinc-800 pb-4">Esperienza</h3>
                </FadeInSection>
                
                <div className="space-y-12">
                  {EXPERIENCE_DATA.map((exp, index) => (
                    <FadeInSection key={index} delay={index * 150} className="relative pl-8 md:pl-0">
                      <div className="md:grid md:grid-cols-4 gap-8">
                        {/* Timeline dot & line for mobile */}
                        <div className="absolute left-0 top-2 w-px h-full bg-zinc-800 md:hidden">
                          <div className="absolute top-0 left-[-4px] w-2 h-2 rounded-full bg-indigo-500"></div>
                        </div>

                        <div className="md:col-span-1 text-sm font-mono text-zinc-500 mb-2 md:mb-0 mt-1">
                          {exp.year}
                        </div>
                        <div className="md:col-span-3">
                          <h4 className="text-2xl font-semibold text-zinc-100">{exp.role}</h4>
                          <h5 className="text-indigo-400 font-medium mb-4">{exp.company}</h5>
                          <ul className="text-zinc-400 leading-relaxed list-disc pl-5 space-y-2">
                            {exp.description.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </FadeInSection>
                  ))}
                </div>
              </div>

              {/* Skills & Tools */}
              <div className="lg:col-span-4">
                <FadeInSection>
                  <h3 className="text-xl font-mono uppercase tracking-widest text-zinc-500 mb-8 border-b border-zinc-800 pb-4">Competenze & Strumenti</h3>
                </FadeInSection>
                
                <div className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-10">
                  
                  {/* Software */}
                  <FadeInSection delay={200}>
                     <h4 className="text-sm font-mono uppercase text-zinc-500 mb-4 flex items-center gap-2">
                       <MonitorPlay size={14}/> Software
                     </h4>
                    <div className="flex flex-wrap gap-2">
                      {SKILLS_DATA.software.map((skill, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 text-zinc-300 rounded-full text-xs hover:border-indigo-500 hover:text-indigo-400 transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </FadeInSection>

                  {/* Technical Skills */}
                  <FadeInSection delay={300}>
                     <h4 className="text-sm font-mono uppercase text-zinc-500 mb-4 flex items-center gap-2">
                       <Box size={14}/> Tecniche
                     </h4>
                     <p className="text-zinc-300 text-sm leading-relaxed">
                       {SKILLS_DATA.technical}
                     </p>
                  </FadeInSection>

                  {/* Languages */}
                  <FadeInSection delay={400}>
                     <h4 className="text-sm font-mono uppercase text-zinc-500 mb-4 flex items-center gap-2">
                       <FileText size={14}/> Lingue
                     </h4>
                     <p className="text-zinc-300 text-sm leading-relaxed">
                       {SKILLS_DATA.languages}
                     </p>
                  </FadeInSection>

                  {/* Education */}
                  <FadeInSection delay={500}>
                     <h4 className="text-sm font-mono uppercase text-zinc-500 mb-4 flex items-center gap-2">
                       <FileText size={14}/> Istruzione
                     </h4>
                     <ul className="space-y-3 text-sm text-zinc-300">
                        {EDUCATION_DATA.map((edu, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                            <span>{edu}</span>
                          </li>
                        ))}
                     </ul>
                  </FadeInSection>

                  {/* Certifications */}
                  <FadeInSection delay={600}>
                     <h4 className="text-sm font-mono uppercase text-zinc-500 mb-4 flex items-center gap-2">
                       <FileText size={14}/> Certificazioni
                     </h4>
                     <ul className="space-y-3 text-sm text-zinc-300">
                        {CERTIFICATIONS_DATA.map((cert, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 mt-1.5 shrink-0" />
                            <span>{cert}</span>
                          </li>
                        ))}
                     </ul>
                  </FadeInSection>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 md:px-12 bg-zinc-950">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInSection>
              <div className="w-16 h-16 mx-auto bg-zinc-900 rounded-2xl flex items-center justify-center mb-8 rotate-12 hover:rotate-0 transition-transform duration-500">
                <Mail className="text-indigo-400" size={28} />
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">Creiamo qualcosa di <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">straordinario.</span></h2>
              <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
                Attualmente disponibile per opportunità part-time o full-time. Che tu abbia in mente un progetto specifico o voglia semplicemente esplorare delle possibilità, la mia casella di posta è sempre aperta.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12 text-zinc-400 font-mono text-sm">
                <span className="flex items-center gap-2"><MapPin size={16} className="text-indigo-400" /> Torino, Italia</span>
                <span className="hidden md:block text-zinc-700">|</span>
                <span className="flex items-center gap-2"><Phone size={16} className="text-indigo-400" /> +39 327 777 5203</span>
                <span className="hidden md:block text-zinc-700">|</span>
                <span className="flex items-center gap-2"><Globe size={16} className="text-indigo-400" /> maksithompson.com</span>
              </div>
              
              <a 
                href="mailto:maksithompson50@gmail.com"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform"
              >
                <Mail size={20} /> maksithompson50@gmail.com
              </a>
            </FadeInSection>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 px-6 md:px-12 relative z-10 bg-zinc-950">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Maksi Thompson. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <InstagramIcon size={20} />
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <LinkedinIcon size={20} />
            </a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">
              <GithubIcon size={20} />
            </a>
          </div>
        </div>
      </footer>

      {/* Project Expansion Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-md overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <button
            onClick={() => setSelectedProject(null)}
            className="fixed top-6 right-6 text-zinc-400 hover:text-white z-[101] bg-black/50 p-2 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
          
          <div 
            className="max-w-5xl w-full bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-300"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 md:p-10 border-b border-zinc-900">
              <div className="flex items-center gap-2 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-4">
                {selectedProject.category === '3D Render' ? <Box size={14} /> : <Camera size={14} />}
                {selectedProject.category}
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">{selectedProject.title}</h2>
              <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed mb-6">{selectedProject.description}</p>
              {selectedProject.tools?.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-zinc-900 border border-zinc-700 text-zinc-300 rounded-full text-xs font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Modal Gallery */}
            <div className="p-6 md:p-10 bg-zinc-900/30">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img
                  src={selectedProject.mainImage}
                  alt={`${selectedProject.title} main`}
                  className="w-full h-auto rounded-xl object-cover shadow-2xl"
                />
                {selectedProject.galleryImages?.map((url, idx) => (
                  <img
                    key={`img-${idx}`}
                    src={url}
                    alt={`${selectedProject.title} ${idx + 1}`}
                    className="w-full h-auto rounded-xl object-cover shadow-2xl"
                  />
                ))}
                {selectedProject.galleryVideos?.map((item, idx) => (
                  <video
                    key={`vid-${idx}`}
                    src={item.url}
                    controls
                    className="w-full h-auto rounded-xl shadow-2xl"
                  />
                ))}
                {selectedProject.legacyGallery?.map((item, idx) =>
                  item.mediaType === 'video' && item.video ? (
                    <video
                      key={`legacy-vid-${idx}`}
                      src={item.video}
                      controls
                      className="w-full h-auto rounded-xl shadow-2xl"
                    />
                  ) : item.image ? (
                    <img
                      key={`legacy-img-${idx}`}
                      src={item.image}
                      alt={item.caption || `${selectedProject.title} ${idx + 1}`}
                      className="w-full h-auto rounded-xl object-cover shadow-2xl"
                    />
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}