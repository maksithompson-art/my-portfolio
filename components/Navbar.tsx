'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'

interface NavDict {
  home: string
  cases: string
  web: string
  photo3d: string
  about: string
  contact: string
  directory: string
  switchLang: string
  languages: { it: string; fr: string; en: string }
}

export default function Navbar({ lang, dict }: { lang: string; dict: NavDict }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [mobileMenuOpen])

  const close = () => setMobileMenuOpen(false)

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 font-sans px-8 md:px-12 lg:px-16 ${scrolled ? 'py-4' : 'py-8'}`}>
        <div className="flex justify-between items-center w-full">

          {/* DESKTOP: Pill Navigation */}
          <div className={`hidden md:flex transition-all duration-500 items-center gap-4 text-[10px] font-bold tracking-widest uppercase ${
            scrolled
              ? 'bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full px-4 py-3 mx-auto shadow-2xl'
              : 'bg-white text-black rounded-full px-2 py-2'
          }`}>
            <Link href={`/${lang}`} className={`${scrolled ? 'hover:text-[#CCFF00] px-4' : 'bg-black text-white px-4 py-2 rounded-full'} transition-colors`}>
              {dict.home}
            </Link>
            <Link href={`/${lang}/portfolio`} className={`hover:text-[#CCFF00] transition-colors ${scrolled ? 'px-4' : ''}`}>
              {dict.cases}
            </Link>
            <Link href={`/${lang}/servizi/sviluppo-siti-web`} className={`hover:text-[#CCFF00] transition-colors ${scrolled ? 'px-4' : ''}`}>
              {dict.web}
            </Link>
            <Link href={`/${lang}/servizi/fotografia`} className={`hover:text-[#CCFF00] transition-colors ${scrolled ? 'px-4' : ''}`}>
              {dict.photo3d}
            </Link>
            <Link href={`/${lang}/about`} className={`hover:text-[#CCFF00] transition-colors ${scrolled ? 'px-4' : 'pr-4'}`}>
              {dict.about}
            </Link>
            <div className={`${scrolled ? 'pl-2 border-l border-white/20' : 'pl-2 border-l border-black/10'}`}>
              <LanguageSwitcher currentLang={lang} labels={dict.languages} scrolled={scrolled} />
            </div>
          </div>

          {/* RIGHT: Hamburger */}
          <button
            className={`absolute right-8 md:right-12 lg:right-16 z-50 w-10 h-10 border rounded-full flex flex-col items-center justify-center gap-1 cursor-pointer transition-colors duration-300 ${
              mobileMenuOpen
                ? 'border-white/30 text-white hover:bg-white hover:text-black'
                : scrolled
                  ? 'border-white/30 text-white bg-black/50 backdrop-blur-md hover:bg-white hover:text-black'
                  : 'border-white/30 text-white hover:bg-white hover:text-black'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className={`h-[2px] bg-current transition-all duration-300 ${mobileMenuOpen ? 'w-5 rotate-45 translate-y-[3px]' : 'w-4'}`} />
            <div className={`h-[2px] bg-current transition-all duration-300 ${mobileMenuOpen ? 'w-5 -rotate-45 -translate-y-[3px]' : 'w-4'}`} />
          </button>

        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl flex flex-col justify-center px-8 md:px-24 animate-in fade-in slide-in-from-top-4 duration-300 font-sans">
          <div className="flex flex-col gap-8 w-full max-w-4xl mx-auto">
            <div className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500 mb-4 border-b border-white/10 pb-4">
              {dict.directory}
            </div>
            <Link onClick={close} href={`/${lang}`} className="text-5xl md:text-7xl font-medium tracking-tight text-white hover:text-[#CCFF00] transition-colors">{dict.home}</Link>
            <Link onClick={close} href={`/${lang}/portfolio`} className="text-5xl md:text-7xl font-medium tracking-tight text-white hover:text-[#CCFF00] transition-colors">{dict.cases}</Link>
            <Link onClick={close} href={`/${lang}/servizi/sviluppo-siti-web`} className="text-5xl md:text-7xl font-medium tracking-tight text-white hover:text-[#CCFF00] transition-colors">{dict.web}</Link>
            <Link onClick={close} href={`/${lang}/servizi/fotografia`} className="text-5xl md:text-7xl font-medium tracking-tight text-white hover:text-[#CCFF00] transition-colors">{dict.photo3d}</Link>
            <Link onClick={close} href={`/${lang}/about`} className="text-5xl md:text-7xl font-medium tracking-tight text-white hover:text-[#CCFF00] transition-colors">{dict.about}</Link>

            <div className="mt-4 flex flex-row items-center gap-6">
              {(['it', 'en', 'fr'] as const).map((locale) => (
                <a
                  key={locale}
                  href={`/${locale}`}
                  onClick={() => { document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${60*60*24*365}; samesite=lax`; close() }}
                  className={`text-xs font-bold tracking-widest uppercase transition-colors ${lang === locale ? 'text-[#CCFF00]' : 'text-gray-500 hover:text-white'}`}
                >
                  {dict.languages[locale]}
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-6">
              <Link onClick={close} href={`/${lang}/#contact`} className="inline-flex items-center justify-center bg-white text-black rounded-full px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-[#CCFF00] transition-colors w-fit">
                {dict.contact}
              </Link>
            </div>
          </div>

          {/* Decorative grid */}
          <div className="absolute right-0 bottom-0 p-12 pointer-events-none select-none opacity-5">
            <div className="grid grid-cols-2 gap-4 w-64 h-64">
              <div className="w-full h-full bg-white" />
              <div className="w-full h-full border border-white" />
              <div className="w-full h-full border border-white" />
              <div className="w-full h-full bg-white" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
