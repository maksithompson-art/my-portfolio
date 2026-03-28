import Link from 'next/link'
import { ArrowUpRight, Plus, Code, Camera, Video } from 'lucide-react'

interface ExpertiseDict {
  bigTitle1: string
  bigTitle2: string
  subTitle1: string
  subTitle2: string
  subTitle3: string
  card1Title: string
  card1Desc: string
  card1Feat1: string
  card1Feat2: string
  card2Title: string
  card2Desc: string
  card2Feat1: string
  card2Feat2: string
  card2Feat3: string
  card3Title: string
  card3Desc: string
  card3Feat1: string
  card3Feat2: string
  footerText: string
  cta: string
}

export default function Expertise({ dict, lang }: { dict: ExpertiseDict; lang: string }) {
  return (
    <section className="relative w-full bg-[#0A0A0A] text-white py-16 md:py-32 px-8 md:px-12 lg:px-24 flex flex-col items-center">

      {/* MASSIVE TYPOGRAPHY GRAPHIC */}
      <div className="w-full flex items-center justify-center mb-12 md:mb-24 cursor-default">
        <h2 className="text-[2.25rem] md:text-[8rem] lg:text-[13rem] font-black tracking-tighter text-[#CCFF00] leading-none flex items-center">
          {dict.bigTitle1}
          <div className="grid grid-cols-2 gap-1 md:gap-2 mx-2 md:mx-4 w-6 md:w-32 hover:scale-105 transition-transform duration-500">
            <div className="w-full aspect-square bg-white" />
            <div className="w-full aspect-square bg-transparent" />
            <div className="w-full aspect-square bg-white" />
            <div className="w-full aspect-square bg-white" />
          </div>
          {dict.bigTitle2}
        </h2>
      </div>

      {/* SUB-HEADER */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center mb-10 md:mb-16 gap-4 md:gap-8 text-center">
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight flex flex-col md:flex-row items-center gap-4 md:gap-6">
          {dict.subTitle1}
          <div className="bg-white text-black px-6 py-4 text-xs md:text-sm font-bold flex items-center gap-4 hover:bg-[#CCFF00] transition-colors cursor-default">
            {dict.subTitle2} <ArrowUpRight className="w-4 h-4" />
          </div>
          {dict.subTitle3}
        </h3>
      </div>

      {/* 3-COLUMN BENTO SERVICE GRID */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">

        {/* CARD 1: WEB DEV */}
        <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#1a2e05] to-[#0A0A0A] p-8 md:p-10 flex flex-col justify-start border border-white/10 hover:border-[#CCFF00]/50 transition-colors group h-full min-h-[480px]">
          <div className="w-12 h-12 mb-8 bg-[#CCFF00]/10 rounded-xl flex items-center justify-center">
            <Code className="text-[#CCFF00] w-6 h-6" />
          </div>
          <h4 className="text-2xl md:text-3xl font-medium mb-4 text-white leading-tight">
            {dict.card1Title}
          </h4>
          <p className="text-sm text-gray-400 mb-8 leading-relaxed">{dict.card1Desc}</p>
          <div className="mt-auto flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] shrink-0" />
              <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">{dict.card1Feat1}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] shrink-0" />
              <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">{dict.card1Feat2}</span>
            </div>
          </div>
        </div>

        {/* CARD 2: PHOTOGRAPHY */}
        <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#1a2e05] to-[#0A0A0A] p-8 md:p-10 flex flex-col justify-start border border-white/10 hover:border-[#CCFF00]/50 transition-colors group h-full min-h-[480px]">
          <div className="relative z-10 w-12 h-12 mb-8 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center">
            <Camera className="text-[#CCFF00] w-6 h-6" />
          </div>
          <h4 className="relative z-10 text-2xl md:text-3xl font-medium mb-4 text-white leading-tight">
            {dict.card2Title}
          </h4>
          <p className="relative z-10 text-sm text-gray-400 mb-8 leading-relaxed">{dict.card2Desc}</p>
          <div className="relative z-10 mt-auto flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-[#CCFF00] transition-colors shrink-0" />
              <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">{dict.card2Feat1}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-[#CCFF00] transition-colors shrink-0" />
              <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">{dict.card2Feat2}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-[#CCFF00] transition-colors shrink-0" />
              <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">{dict.card2Feat3}</span>
            </div>
          </div>
        </div>

        {/* CARD 3: VIDEO */}
        <div className="relative rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#1a2e05] to-[#0A0A0A] p-8 md:p-10 flex flex-col justify-start border border-white/10 hover:border-[#CCFF00]/50 transition-colors group h-full min-h-[480px]">
          <div className="relative z-10 w-12 h-12 mb-8 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center">
            <Video className="text-[#CCFF00] w-6 h-6" />
          </div>
          <h4 className="relative z-10 text-2xl md:text-3xl font-medium mb-4 text-white leading-tight">
            {dict.card3Title}
          </h4>
          <p className="relative z-10 text-sm text-gray-400 mb-8 leading-relaxed">{dict.card3Desc}</p>
          <div className="relative z-10 mt-auto flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-[#CCFF00] transition-colors shrink-0" />
              <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">{dict.card3Feat1}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-[#CCFF00] transition-colors shrink-0" />
              <span className="text-[10px] md:text-xs font-bold text-white uppercase tracking-widest">{dict.card3Feat2}</span>
            </div>
          </div>
        </div>

      </div>

      {/* FOOTER OF SECTION */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-end pt-8 gap-8 border-t border-white/10">
        <div className="flex items-start gap-6">
          <Plus className="w-10 h-10 text-[#CCFF00] font-light shrink-0" />
          <p className="text-lg font-medium text-white max-w-md leading-snug">{dict.footerText}</p>
        </div>
        <Link
          href={`/${lang}/servizi/sviluppo-siti-web`}
          className="border border-white/30 rounded-full px-8 py-4 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors flex items-center gap-4 shrink-0"
        >
          {dict.cta} <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

    </section>
  )
}
