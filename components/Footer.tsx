import { Github, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link'; // IMPORTANTE: Importiamo Link di Next.js

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          
          {/* Logo */}
          <Link href="/" className="font-bold text-2xl tracking-tighter flex items-center gap-2 group">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 group-hover:scale-110 transition-transform" />
            <span>Maksi Thompson</span>
          </Link>
          
          {/* Social Links (Ottimizzati per SEO e Sicurezza) */}
          <div className="flex items-center gap-6">
            <a href="https://github.com/tuo-profilo" target="_blank" rel="noopener noreferrer" aria-label="Profilo GitHub" className="text-zinc-500 hover:text-zinc-50 transition-colors">
              <Github className="w-6 h-6" aria-hidden="true" />
            </a>
            <a href="https://linkedin.com/in/tuo-profilo" target="_blank" rel="noopener noreferrer" aria-label="Profilo LinkedIn" className="text-zinc-500 hover:text-[#0A66C2] transition-colors">
              <Linkedin className="w-6 h-6" aria-hidden="true" />
            </a>
            <a href="https://instagram.com/tuo-profilo" target="_blank" rel="noopener noreferrer" aria-label="Profilo Instagram" className="text-zinc-500 hover:text-[#E1306C] transition-colors">
              <Instagram className="w-6 h-6" aria-hidden="true" />
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600">
          <p>© {new Date().getFullYear()} Maksi Thompson. Tutti i diritti riservati.</p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            {/* LINK COLLEGATO CORRETTAMENTE ALLA PAGINA PRIVACY */}
            <Link href="/privacy" className="hover:text-zinc-400 transition-colors">
              Privacy Policy
            </Link>
            {/* Se non hai ancora una pagina Terms of Service, è meglio nascondere il link per ora */}
            {/* <Link href="/terms" className="hover:text-zinc-400 transition-colors">Terms of Service</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}