import Image from 'next/image'
import { ArrowUpRight, Loader } from 'lucide-react'

interface HeroDict {
  name: string
  headline1: string
  headline2: string
  headline3: string
  service1: string
  service2: string
  service3: string
  description: string
  stat1Label: string
  stat1Accent: string
  stat1Title: string
  stat1Sub: string
  stat2Title: string
  stat2Sub: string
}

export default function Hero({ dict }: { dict: HeroDict }) {
  return (
    <section className="relative min-h-screen w-full bg-[#0A0A0A] text-white overflow-hidden flex flex-col justify-between p-8 md:p-12 lg:p-16 font-sans">

      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero1.png"
          alt="Maksi Thompson — Digital Studio"
          fill
          priority
          className="object-cover object-top opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/20 to-[#0A0A0A]" />
      </div>

      {/* MID CONTENT */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start gap-12 w-full mt-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-widest uppercase mb-6 text-gray-300">
            | {dict.name}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium leading-[1.05] tracking-tight">
            {dict.headline1} <br />
            {dict.headline2} <br />
            {dict.headline3}{' '}
            <ArrowUpRight className="inline-block w-12 h-12 ml-4 p-3 border border-white/30 rounded-full text-gray-300" />
          </h1>
        </div>

        <div className="lg:text-right flex flex-col lg:items-end mt-8 lg:mt-0">
          <h2 className="text-lg md:text-xl font-medium leading-loose tracking-wider">
            {dict.service1}
            <br />
            {dict.service2}
            <br />
            {dict.service3}
          </h2>
          <p className="text-sm text-gray-400 max-w-xs mt-6 leading-relaxed">
            {dict.description}
          </p>
        </div>
      </div>

      {/* BOTTOM BENTO STATS */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-end w-full mt-20">
        <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">

          {/* Box 1: Brand Authority */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 w-full md:w-56 flex flex-col justify-between h-40 group hover:border-[#CCFF00]/40 transition-all duration-500">
            <div className="flex justify-between items-start">
              <p className="text-xs text-white font-medium leading-tight">
                {dict.stat1Label}
                <br />
                <span className="text-[#CCFF00]">{dict.stat1Accent}</span>
              </p>
              <Loader className="w-5 h-5 text-[#CCFF00] animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-1">
                {dict.stat1Title}
              </p>
              <p className="text-[9px] uppercase tracking-wider text-gray-500">
                {dict.stat1Sub}
              </p>
            </div>
          </div>

          {/* Box 2: Performance */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-6 w-full md:w-56 flex flex-col justify-between h-40 group hover:border-[#CCFF00]/40 transition-all duration-500">
            <div className="flex justify-between items-start">
              <h3 className="text-4xl font-light tracking-tighter text-white">
                95%<span className="text-sm align-top ml-1 text-[#CCFF00]">/</span>
              </h3>
            </div>
            <div>
              <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-1">
                {dict.stat2Title}
              </p>
              <p className="text-[9px] uppercase tracking-wider text-gray-500">
                {dict.stat2Sub}
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}
