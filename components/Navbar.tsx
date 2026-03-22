"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => { document.body.style.overflow = 'unset'; }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${scrolled ? 'bg-zinc-950/80 backdrop-blur-md border-zinc-800 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          
          <Link href="/" className="font-bold text-xl tracking-tighter flex items-center gap-2 z-50">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-emerald-500 to-cyan-500 flex items-center justify-center">
              <span className="text-zinc-950 font-black">M</span>
            </div>
            <span>Maksi Thompson<span className="text-zinc-500"></span></span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <Link href="/about" className="hover:text-zinc-50 transition-colors">About me</Link>
            <Link href="/servizi/sviluppo-siti-web" className="hover:text-zinc-50 transition-colors">Sviluppo Web</Link>
            <Link href="/servizi/fotografo-torino" className="hover:text-zinc-50 transition-colors">Fotografia</Link>
            <Link href="/portfolio" className="hover:text-zinc-50 transition-colors">Portfolio</Link>
          </div>
          
          <div className="hidden md:flex items-center">
            <Link href="/#contact" className="bg-zinc-50 text-zinc-950 px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-200 transition-colors flex items-center gap-2 group">
              Let's Talk
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 text-zinc-50 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-zinc-950 pt-32 px-6 flex flex-col gap-6 animate-in fade-in slide-in-from-top-4 duration-300 md:hidden">
          <Link onClick={() => setMobileMenuOpen(false)} href="/about" className="text-2xl font-bold text-zinc-400 hover:text-zinc-50 transition-colors">About me</Link>
          <Link onClick={() => setMobileMenuOpen(false)} href="/servizi/sviluppo-siti-web" className="text-2xl font-bold text-zinc-400 hover:text-zinc-50 transition-colors">Sviluppo Web</Link>
          <Link onClick={() => setMobileMenuOpen(false)} href="/servizi/fotografo-torino" className="text-2xl font-bold text-zinc-400 hover:text-zinc-50 transition-colors">Fotografia</Link>
          <Link onClick={() => setMobileMenuOpen(false)} href="/portfolio" className="text-2xl font-bold text-zinc-400 hover:text-zinc-50 transition-colors">Portfolio</Link>
          <hr className="border-zinc-800 my-4" />
          <Link onClick={() => setMobileMenuOpen(false)} href="/#contact" className="bg-emerald-500 text-zinc-950 px-6 py-4 rounded-full text-lg font-bold text-center flex items-center justify-center gap-2">
            Let's Talk <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      )}
    </>
  );
}