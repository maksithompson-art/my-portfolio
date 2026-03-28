'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ArrowUpRight, MonitorPlay, Camera, Film, Box, Play } from 'lucide-react'

type Project = {
  title: string
  slug: string
  category: string
  img: string
  altText: string
}

interface PortfolioDict {
  cat1Title: string
  cat1Desc: string
  cat2Title: string
  cat2Desc: string
  cat3Title: string
  cat3Desc: string
  cat4Title: string
  cat4Desc: string
  noProjects: string
  publishHint: string
  exploreProject: string
}

export default function PortfolioClient({
  projects,
  dict,
  lang,
}: {
  projects: Project[]
  dict: PortfolioDict
  lang: string
}) {
  const CATEGORIES = [
    { id: 'Web App', title: dict.cat1Title, desc: dict.cat1Desc, icon: MonitorPlay },
    { id: '3D Art Direction', title: dict.cat2Title, desc: dict.cat2Desc, icon: Box },
    { id: 'Official Photographer', title: dict.cat3Title, desc: dict.cat3Desc, icon: Camera },
    { id: 'Cinematography', title: dict.cat4Title, desc: dict.cat4Desc, icon: Film },
  ]

  const [activeTab, setActiveTab] = useState('Web App')
  const filteredProjects = projects.filter((p) => p.category === activeTab)

  return (
    <div className="w-full max-w-7xl mx-auto pb-24">

      {/* FILTER TABS */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10 md:mb-20">
        {CATEGORIES.map((cat) => {
          const isActive = activeTab === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex flex-col text-left p-5 md:p-8 rounded-[1.5rem] md:rounded-[2rem] border transition-all duration-500 group ${
                isActive
                  ? 'bg-[#111111] border-[#CCFF00] shadow-[0_0_30px_rgba(204,255,0,0.05)]'
                  : 'bg-[#0A0A0A] border-white/10 hover:border-white/30'
              }`}
            >
              <cat.icon className={`w-6 h-6 md:w-8 md:h-8 mb-4 md:mb-6 transition-colors duration-300 ${isActive ? 'text-[#CCFF00]' : 'text-gray-500 group-hover:text-white'}`} />
              <h3 className={`text-base md:text-xl font-medium mb-2 md:mb-3 transition-colors ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                {cat.title}
              </h3>
              <p className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${isActive ? 'text-[#CCFF00]/80' : 'text-gray-600'}`}>
                {cat.desc}
              </p>
            </button>
          )
        })}
      </div>

      {/* PROJECT GRID */}
      <div className="min-h-[500px]">
        {filteredProjects.length === 0 ? (
          <div className="w-full h-64 border border-white/10 border-dashed rounded-[3rem] flex flex-col items-center justify-center text-center p-8 bg-white/[0.02]">
            <div className="w-3 h-3 rounded-full bg-[#CCFF00] mb-4 animate-pulse" />
            <p className="text-gray-400 text-sm font-medium uppercase tracking-widest">{dict.noProjects} {activeTab}</p>
            <p className="text-gray-600 text-[10px] mt-2 tracking-wider uppercase">{dict.publishHint}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {filteredProjects.map((project, index) => {
              const isEven = index % 2 !== 0
              return (
                <Link
                  href={`/${lang}/portfolio/${project.slug}`}
                  key={project.slug}
                  className={`group flex flex-col gap-6 ${isEven ? 'md:mt-16' : ''}`}
                >
                  <div className="relative w-full aspect-[4/3] md:aspect-[4/5] lg:aspect-video rounded-[2rem] overflow-hidden bg-[#111] border border-white/5">
                    <Image
                      src={`${project.img}?w=1000&q=80&fit=max&auto=format`}
                      alt={project.altText || project.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105 ease-out opacity-90 group-hover:opacity-100"
                    />
                    {activeTab === 'Cinematography' ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-transparent transition-colors duration-500">
                        <div className="w-20 h-20 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:scale-110 group-hover:border-[#CCFF00] group-hover:text-[#CCFF00] transition-all duration-500 text-white">
                          <Play className="w-8 h-8 ml-1" fill="currentColor" />
                        </div>
                      </div>
                    ) : (
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="bg-[#CCFF00] text-black text-[10px] font-bold tracking-widest uppercase px-6 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                          {dict.exploreProject}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col px-2">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00]">{project.category}</span>
                      <ArrowUpRight className="w-5 h-5 text-gray-500 group-hover:text-[#CCFF00] group-hover:rotate-45 transition-all duration-300" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-medium leading-snug text-white group-hover:text-gray-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>

    </div>
  )
}
