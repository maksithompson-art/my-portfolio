import Link from 'next/link'

interface FooterDict {
  locationTitle: string
  locationCity: string
  locationCountry: string
  locationRemote: string
  socialsTitle: string
  sitemapTitle: string
  home: string
  cases: string
  about: string
  rights: string
}

export default function Footer({ dict, lang }: { dict: FooterDict; lang: string }) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-[#0A0A0A] text-white pt-16 pb-8 px-8 md:px-12 lg:px-24 border-t border-white/10">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm font-medium text-gray-400">

        {/* Column 1: Location */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-[10px] font-bold tracking-widest uppercase mb-2">{dict.locationTitle}</h4>
          <p>{dict.locationCity}<br />{dict.locationCountry}</p>
          <p className="mt-2">{dict.locationRemote}</p>
        </div>

        {/* Column 2: Socials */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-[10px] font-bold tracking-widest uppercase mb-2">{dict.socialsTitle}</h4>
          <a href="https://www.instagram.com/maksithompson" target="_blank" rel="noopener noreferrer" className="hover:text-[#CCFF00] transition-colors w-fit">Instagram</a>
          <a href="https://www.linkedin.com/in/maksithompson" target="_blank" rel="noopener noreferrer" className="hover:text-[#CCFF00] transition-colors w-fit">LinkedIn</a>
          <a href="https://twitter.com/maksithompson" target="_blank" rel="noopener noreferrer" className="hover:text-[#CCFF00] transition-colors w-fit">Twitter (X)</a>
        </div>

        {/* Column 3: Sitemap */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white text-[10px] font-bold tracking-widest uppercase mb-2">{dict.sitemapTitle}</h4>
          <Link href={`/${lang}`} className="hover:text-[#CCFF00] transition-colors w-fit">{dict.home}</Link>
          <Link href={`/${lang}/portfolio`} className="hover:text-[#CCFF00] transition-colors w-fit">{dict.cases}</Link>
          <Link href={`/${lang}/about`} className="hover:text-[#CCFF00] transition-colors w-fit">{dict.about}</Link>
        </div>

        {/* Column 4: Logo & Copyright */}
        <div className="flex flex-col lg:items-end lg:text-right gap-4 justify-between h-full">
          <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold tracking-widest">M.T</span>
          </div>
          <div className="text-xs">
            <p>© {currentYear} Maksi Thompson.</p>
            <p>{dict.rights}</p>
          </div>
        </div>

      </div>
    </footer>
  )
}
