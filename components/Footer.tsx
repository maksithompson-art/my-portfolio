import { Github, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 bg-zinc-950 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="font-bold text-2xl tracking-tighter flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500" />
            <span>Maksi Thompson</span>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="text-zinc-500 hover:text-zinc-50 transition-colors"><Github className="w-6 h-6" /></a>
            <a href="#" className="text-zinc-500 hover:text-zinc-50 transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="#" className="text-zinc-500 hover:text-zinc-50 transition-colors"><Instagram className="w-6 h-6" /></a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-zinc-600">
          <p>© {new Date().getFullYear()} Maksi Thompson. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}