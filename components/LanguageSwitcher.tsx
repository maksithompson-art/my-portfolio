'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'

const LOCALES = ['it', 'en', 'fr'] as const
type Locale = typeof LOCALES[number]

interface LanguageSwitcherProps {
  currentLang: string
  labels: { it: string; fr: string; en: string }
  scrolled?: boolean
}

export default function LanguageSwitcher({ currentLang, labels, scrolled = false }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const switchLocale = (locale: Locale) => {
    // Replace the current locale prefix with the new one
    const segments = pathname.split('/')
    segments[1] = locale
    const newPath = segments.join('/')

    // Save cookie preference
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=${60 * 60 * 24 * 365}; samesite=lax`

    router.push(newPath)
    setOpen(false)
  }

  const currentLabel = labels[currentLang as Locale] || currentLang.toUpperCase()

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase transition-colors ${
          scrolled ? 'text-gray-300 hover:text-[#CCFF00]' : 'text-black hover:text-gray-600'
        }`}
        aria-label="Switch language"
      >
        <span className={`w-1.5 h-1.5 rounded-full ${scrolled ? 'bg-[#CCFF00]' : 'bg-black'}`} />
        {currentLabel}
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-3 bg-[#111111] border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 z-50 min-w-[80px]">
          {LOCALES.filter((l) => l !== currentLang).map((locale) => (
            <button
              key={locale}
              onClick={() => switchLocale(locale)}
              className="w-full text-left px-5 py-3 text-[10px] font-bold tracking-widest uppercase text-gray-400 hover:text-[#CCFF00] hover:bg-white/5 transition-colors"
            >
              {labels[locale]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
