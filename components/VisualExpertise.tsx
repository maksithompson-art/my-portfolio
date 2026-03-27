import Link from 'next/link'
import { ArrowUpRight, Plus, Camera, Box, Layers } from 'lucide-react'

interface VisualExpertiseDict {
  subTitle: string
  subTitleBadge: string
  card1Title: string
  card1Desc: string
  card1Feat1: string
  card1Feat2: string
  card1Feat3: string
  card1Feat4: string
  card2Title: string
  card2Desc: string
  card2Feat1: string
  card2Feat2: string
  card2Feat3: string
  footerText: string
  cta: string
}

export default function VisualExpertise({ dict, lang }: { dict: VisualExpertiseDict; lang: string }) {
  return (
    <section className="relative w-full bg-[#0A0A0A] text-white py-32 px-8 md:px-12 lg:px-24 flex flex-col items-center border-t border-white/5">

      {/* MASSIVE TYPOGRAPHY GRAPHIC */}
      <div className="w-full flex items-center justify-center mb-24 cursor-default">
        <h2 className="text-[4.5rem] md:text-[8rem] lg:text-[13rem] font-black tracking-tighter text-transparent [-webkit-text-stroke:2px_#CCFF00] leading-none flex items-center hover:text-[#CCFF00] transition-colors duration-700">
          3D
          <div className="mx-4 md:mx-8 w-16 md:w-32 aspect-square rounded-full border-[4px] md:border-[8px] border-white flex items-center justify-center hover:scale-110 transition-transform duration-500 shadow-[0_0_30px_rgba(204,255,0,0.2)]">
            <div className="w-1/2 h-1/2 bg-[#CCFF00] rounded-full animate-pulse" />
          </div>
          ART
        </h2>
      </div>

      {/* SUB-HEADER */}
      <div className="w-full max-w-6xl flex flex-col items-center justify-center mb-16 gap-4 text-center">
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium tracking-tight flex flex-col md:flex-row items-center gap-4 md:gap-6 uppercase">
          {dict.subTitle}
          <div className="bg-[#CCFF00] text-black px-6 py-4 text-xs md:text-sm font-bold flex items-center gap-4 hover:bg-white transition-colors cursor-default rounded-full">
            {dict.subTitleBadge} <ArrowUpRight className="w-4 h-4" />
          </div>
        </h3>
      </div>

      {/* ASYMMETRIC BENTO GRID */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">

        {/* CARD 1: 3D RENDERING (Wide) */}
        <div className="lg:col-span-2 relative rounded-[2rem] overflow-hidden bg-[#111111] p-8 md:p-12 flex flex-col justify-start border border-white/10 hover:border-[#CCFF00]/50 transition-colors group min-h-[480px]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] group-hover:bg-[#CCFF00]/10 transition-colors duration-700" />
          <div className="relative z-10 w-14 h-14 mb-8 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-[#CCFF00]/30 transition-colors">
            <Box className="text-white group-hover:text-[#CCFF00] transition-colors w-7 h-7" />
          </div>
          <h4 className="relative z-10 text-3xl md:text-4xl font-medium mb-6 text-white leading-tight">
            {dict.card1Title}
          </h4>
          <p className="relative z-10 text-base text-gray-400 mb-8 leading-relaxed max-w-2xl">{dict.card1Desc}</p>
          <div className="relative z-10 mt-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            {[dict.card1Feat1, dict.card1Feat2, dict.card1Feat3, dict.card1Feat4].map((feat) => (
              <div key={feat} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#CCFF00] shrink-0" />
                <span className="text-xs font-bold text-white uppercase tracking-widest">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CARD 2: PHOTOGRAPHY */}
        <div className="lg:col-span-1 relative rounded-[2rem] overflow-hidden bg-[#111111] p-8 md:p-12 flex flex-col justify-start border border-white/10 hover:border-[#CCFF00]/50 transition-colors group min-h-[480px]">
          <div className="relative z-10 w-14 h-14 mb-8 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-[#CCFF00]/30 transition-colors">
            <Camera className="text-white group-hover:text-[#CCFF00] transition-colors w-7 h-7" />
          </div>
          <h4 className="relative z-10 text-3xl md:text-4xl font-medium mb-6 text-white leading-tight">
            {dict.card2Title}
          </h4>
          <p className="relative z-10 text-sm text-gray-400 mb-8 leading-relaxed">{dict.card2Desc}</p>
          <div className="relative z-10 mt-auto flex flex-col gap-4">
            {[dict.card2Feat1, dict.card2Feat2, dict.card2Feat3].map((feat) => (
              <div key={feat} className="flex items-center gap-3">
                <Layers className="w-4 h-4 text-[#CCFF00] shrink-0" />
                <span className="text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-widest">{feat}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* FOOTER OF SECTION */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-end pt-12 gap-8 border-t border-white/10">
        <div className="flex items-start gap-6">
          <Plus className="w-10 h-10 text-[#CCFF00] font-light shrink-0" />
          <p className="text-lg font-medium text-gray-300 max-w-2xl leading-relaxed">
            {dict.footerText}
          </p>
        </div>
        <Link
          href={`/${lang}/portfolio`}
          className="border border-white/20 bg-[#111111] rounded-full px-8 py-5 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-300 flex items-center justify-center gap-4 shrink-0 shadow-lg w-full md:w-auto"
        >
          {dict.cta} <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

    </section>
  )
}
