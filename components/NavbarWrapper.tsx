'use client'

import { usePathname } from 'next/navigation'
import Navbar from './Navbar'

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

export default function NavbarWrapper({ lang, dict }: { lang: string; dict: NavDict }) {
  const pathname = usePathname()

  if (pathname.startsWith('/studio')) return null

  return <Navbar lang={lang} dict={dict} />
}
