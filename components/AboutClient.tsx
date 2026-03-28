'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Camera, MapPin, Award, Code2, MonitorPlay, Zap, ArrowUpRight, ChevronDown } from 'lucide-react'

interface TimelineItem {
  year: string
  role: string
  company: string
  desc: string
}

interface AboutDict {
  locationBadge: string
  title1: string
  title2: string
  bio1: string
  bio2: string
  bio3: string
  skillsLabel: string
  skillsTitle: string
  box1Title: string
  box1Desc: string
  box2Title: string
  box2Desc: string
  box3Title: string
  box4Title: string
  box4Desc: string
  timelineLabel: string
  timelineTitle: string
  timelineSub: string
  showMore: string
  ctaTitle: string
  ctaBtn: string
  timeline: TimelineItem[]
}

export default function AboutClient({ dict, lang }: { dict: AboutDict; lang: string }) {
  const [visibleItems, setVisibleItems] = useState(3)

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#CCFF00] selection:text-black font-sans pb-24">

      {/* Background glow */}
      <div className="absolute top-0 inset-x-0 h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/[0.03] via-[#0A0A0A]/0 to-transparent pointer-events-none transform-gpu" aria-hidden="true" />

      {/* 1. EDITORIAL HERO */}
      <header className="px-8 md:px-12 lg:px-24 pt-40 pb-24 relative z-10 border-b border-white/5">
        <div className="max-w-7xl mx-auto">

          <div className="mb-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-[#CCFF00] text-[10px] font-bold tracking-widest uppercase backdrop-blur-md">
            <MapPin className="w-4 h-4" aria-hidden="true" />
            <span>{dict.locationBadge}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[8.5rem] font-black tracking-tighter mb-16 leading-[0.9] uppercase">
            {dict.title1} <br className="hidden md:block" />
            <span className="text-transparent [-webkit-text-stroke:2px_#CCFF00]">{dict.title2}</span>
          </h1>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            {/* Portrait */}
            <div className="w-full lg:w-5/12 relative group">
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative z-10 border border-white/10 bg-[#111111] shadow-2xl">
                <Image
                  src="/IMG_2039.jpg"
                  alt="Maksi Thompson — Professional Profile"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-[#CCFF00]/10 rounded-full blur-[100px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            </div>

            {/* Narrative */}
            <div className="w-full lg:w-7/12 pt-8">
              <div className="space-y-8 text-xl md:text-2xl text-gray-400 leading-relaxed font-medium">
                <p dangerouslySetInnerHTML={{ __html: dict.bio1 }} />
                <p dangerouslySetInnerHTML={{ __html: dict.bio2 }} />
                <p className="pl-6 border-l-2 border-[#CCFF00] text-white italic">{dict.bio3}</p>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* 2. BENTO — SKILLS */}
      <section className="py-32 px-8 md:px-12 lg:px-24 border-b border-white/5 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00] mb-4">{dict.skillsLabel}</div>
            <h2 className="text-4xl md:text-5xl font-medium text-white">{dict.skillsTitle}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">

            {/* Frontend */}
            <div className="col-span-1 md:col-span-2 p-10 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-[#CCFF00]/50 transition-colors duration-500 group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#CCFF00]/30 transition-colors">
                <MonitorPlay className="w-6 h-6 text-white group-hover:text-[#CCFF00] transition-colors" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-white">{dict.box1Title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">{dict.box1Desc}</p>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', '3D Rendering'].map(tech => (
                  <span key={tech} className="px-4 py-2 bg-[#0A0A0A] border border-white/10 text-gray-400 rounded-full text-[10px] font-bold tracking-widest uppercase hover:text-[#CCFF00] hover:border-[#CCFF00]/50 transition-colors cursor-default">{tech}</span>
                ))}
              </div>
            </div>

            {/* Camera Gear */}
            <div className="col-span-1 p-10 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-[#CCFF00]/50 transition-colors duration-500 group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#CCFF00]/30 transition-colors">
                <Camera className="w-6 h-6 text-white group-hover:text-[#CCFF00] transition-colors" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-white">{dict.box2Title}</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">{dict.box2Desc}</p>
              <div className="flex flex-wrap gap-3">
                {['Sony A7RIII', 'Sony A7IV', 'G-Master', 'DaVinci Resolve', 'Lightroom'].map(gear => (
                  <span key={gear} className="px-4 py-2 bg-[#0A0A0A] border border-white/10 text-gray-400 rounded-full text-[10px] font-bold tracking-widest uppercase hover:text-[#CCFF00] transition-colors cursor-default">{gear}</span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="col-span-1 p-10 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-[#CCFF00]/50 transition-colors duration-500 group">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#CCFF00]/30 transition-colors">
                <Code2 className="w-6 h-6 text-white group-hover:text-[#CCFF00] transition-colors" />
              </div>
              <h3 className="text-2xl font-medium mb-8 text-white">{dict.box3Title}</h3>
              <div className="flex flex-wrap gap-3">
                {['Node.js', 'PostgreSQL', 'Prisma', 'Supabase', 'Sanity CMS'].map(tech => (
                  <span key={tech} className="px-4 py-2 bg-[#0A0A0A] border border-white/10 text-gray-400 rounded-full text-[10px] font-bold tracking-widest uppercase hover:text-[#CCFF00] transition-colors cursor-default">{tech}</span>
                ))}
              </div>
            </div>

            {/* SEO */}
            <div className="col-span-1 md:col-span-2 p-10 rounded-[2rem] bg-[#111111] border border-white/10 hover:border-[#CCFF00]/50 transition-colors duration-500 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Zap className="w-40 h-40 text-white" />
              </div>
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:border-[#CCFF00]/30 transition-colors relative z-10">
                <Award className="w-6 h-6 text-white group-hover:text-[#CCFF00] transition-colors" />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-white relative z-10">{dict.box4Title}</h3>
              <p className="text-gray-400 max-w-lg leading-relaxed relative z-10">{dict.box4Desc}</p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. TIMELINE */}
      <section className="py-32 px-8 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto">

          <div className="text-center mb-24">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00] mb-4">{dict.timelineLabel}</div>
            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">{dict.timelineTitle}</h2>
            <p className="text-gray-400 text-lg">{dict.timelineSub}</p>
          </div>

          <div className="relative border-l border-white/10 ml-4 md:ml-0 md:border-l-0">
            <div className="space-y-16">
              {dict.timeline.slice(0, visibleItems).map((item, index) => (
                <div key={index} className="relative flex flex-col md:flex-row gap-8 md:gap-16 group animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#CCFF00] transition-colors md:hidden" />
                  <div className="md:w-48 shrink-0 md:text-right pt-1 pl-6 md:pl-0">
                    <span className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00]">{item.year}</span>
                  </div>
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full border border-white/20 bg-[#111111] group-hover:border-[#CCFF00] group-hover:bg-[#CCFF00] transition-colors z-10 shadow-[0_0_10px_rgba(204,255,0,0)] group-hover:shadow-[0_0_15px_rgba(204,255,0,0.5)]" />
                    {index !== dict.timeline.length - 1 && <div className="w-[1px] h-full bg-white/10 -mt-1" />}
                  </div>
                  <div className="pb-8 pl-6 md:pb-0 md:pl-0">
                    <h3 className="text-2xl font-medium text-white mb-2 group-hover:text-gray-200 transition-colors">{item.role}</h3>
                    <p className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-6">{item.company}</p>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {visibleItems < dict.timeline.length && (
            <div className="mt-16 text-center relative">
              <div className="absolute bottom-full left-0 w-full h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none -mb-8" />
              <button
                onClick={() => setVisibleItems(prev => Math.min(prev + 3, dict.timeline.length))}
                className="cursor-pointer inline-flex items-center justify-center bg-white text-black rounded-full px-8 py-4 text-[10px] font-bold tracking-widest uppercase hover:bg-[#CCFF00] transition-colors relative z-10 group"
              >
                {dict.showMore} <ChevronDown className="w-4 h-4 ml-3 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          )}

          {/* Final CTA */}
          <div className="mt-32 bg-[#111111] border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group hover:border-[#CCFF00]/30 transition-colors duration-700">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#CCFF00]/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-medium mb-8 text-white tracking-tight">{dict.ctaTitle}</h3>
              <Link href={`/${lang}/#contact`} className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-full bg-[#CCFF00] text-black text-xs font-bold tracking-widest uppercase hover:bg-white transition-colors group/btn shadow-[0_0_30px_rgba(204,255,0,0.2)]">
                {dict.ctaBtn} <ArrowUpRight className="w-4 h-4 group-hover/btn:rotate-45 transition-transform" />
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  )
}
