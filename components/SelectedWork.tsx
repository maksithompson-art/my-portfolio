'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

interface Project {
  _id: string
  title: string
  slug: string
  category: string
  description?: string
  img: string
}

interface SelectedWorkDict {
  title1: string
  title2: string
  subtitle: string
  exploreBtn: string
  defaultDesc: string
  viewAll: string
}

export default function SelectedWork({
  projects = [],
  dict,
  lang,
}: {
  projects: Project[]
  dict: SelectedWorkDict
  lang: string
}) {
  const displayProjects = projects.slice(0, 4)

  return (
    <section id="work" className="relative w-full bg-gradient-to-b from-[#0A0A0A] via-[#0A0D0B] to-[#0A110D] text-white py-16 md:py-32 px-8 md:px-12 lg:px-24">

      {/* HEADER */}
      <div className="w-full max-w-7xl mx-auto mb-20 md:mb-32">
        <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05] mb-12 max-w-3xl">
          {dict.title1} <br /> {dict.title2}
        </h2>
        <div className="flex w-full border-b border-white/10 pb-12">
          <p className="text-lg md:text-xl font-medium leading-snug max-w-xl text-gray-200">
            {dict.subtitle}
          </p>
        </div>
      </div>

      {/* EDITORIAL GRID */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        {displayProjects.map((project, index) => {
          const isEven = index % 2 !== 0
          return (
            <Link
              href={`/${lang}/portfolio/${project.slug}`}
              key={project._id || index}
              className={`group flex flex-col gap-6 ${isEven ? 'md:mt-24' : ''}`}
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden bg-[#111] border border-white/5">
                {project.img && (
                  <Image
                    src={`${project.img}?w=1000&q=80&fit=max&auto=format`}
                    alt={project.title || 'Project image'}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="bg-[#CCFF00] text-black text-[10px] font-bold tracking-widest uppercase px-6 py-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {dict.exploreBtn}
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col px-2">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00]">
                    {project.category || 'Case Study'}
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-gray-500">0{index + 1}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-medium mb-3 leading-snug text-white group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed max-w-md line-clamp-2">
                  {project.description || dict.defaultDesc}
                </p>
              </div>
            </Link>
          )
        })}
      </div>

      {/* BOTTOM CTA */}
      <div className="w-full max-w-7xl mx-auto mt-24 pt-16 border-t border-white/10 flex justify-center">
        <Link
          href={`/${lang}/portfolio`}
          className="inline-flex items-center justify-center bg-white text-black rounded-full px-12 py-5 text-xs font-bold tracking-widest uppercase hover:bg-[#CCFF00] hover:scale-105 transition-all duration-300 group shadow-lg shadow-black/50"
        >
          {dict.viewAll} <ArrowUpRight className="w-5 h-5 ml-3 group-hover:rotate-45 transition-transform" />
        </Link>
      </div>

    </section>
  )
}
