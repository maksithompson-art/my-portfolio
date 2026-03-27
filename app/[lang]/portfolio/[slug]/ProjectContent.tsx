'use client'

import { useState } from 'react'
import { X, Maximize2, ArrowDown } from 'lucide-react'
import { PortableText } from '@portabletext/react'
import Image from 'next/image'

const portableTextComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="mb-8 text-gray-400 leading-relaxed text-lg md:text-xl">{children}</p>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-2xl md:text-4xl font-medium mt-16 mb-8 text-white">{children}</h3>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-2 border-[#CCFF00] pl-8 py-2 italic my-12 text-white text-2xl md:text-3xl font-light leading-snug">
        {children}
      </blockquote>
    ),
  },
}

export default function ProjectContent({
  project,
  labels,
}: {
  project: Record<string, unknown>
  labels: { client: string; role: string; sector: string; projectInfo: string; backLabel: string; continueLabel: string }
}) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  return (
    <div className="w-full bg-[#0A0A0A] text-white selection:bg-[#CCFF00] selection:text-black">

      {/* HERO HEADER */}
      <header className="px-8 md:px-12 lg:px-24 pt-40 pb-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#CCFF00] bg-[#CCFF00]/10 px-4 py-2 rounded-full border border-[#CCFF00]/20">
              {project.category as string}
            </span>
            <div className="h-[1px] w-12 bg-white/20" />
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-500">{project.year as string}</span>
          </div>

          <h1 className="text-5xl md:text-8xl lg:text-[5rem] font-black tracking-tighter leading-[0.95] uppercase mb-16">
            {project.title as string}
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-white/10">
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2">{labels.client}</p>
              <p className="text-lg font-medium">{(project.client as string) || 'N/A'}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2">{labels.role}</p>
              <p className="text-lg font-medium">{(project.role as string) || 'Lead Creative'}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2">{labels.sector}</p>
              <p className="text-lg font-medium">{project.category as string}</p>
            </div>
            <div className="flex flex-col items-end justify-center">
              <div className="animate-bounce p-3 border border-white/20 rounded-full">
                <ArrowDown className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="px-8 md:px-12 lg:px-24 py-24">
        <div className="max-w-7xl mx-auto">

          {/* CASE STUDY TEXT */}
          <div className="max-w-4xl mb-32">
            <div className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00] mb-8">{labels.projectInfo}</div>
            {project.body ? (
              <PortableText value={project.body as Parameters<typeof PortableText>[0]['value']} components={portableTextComponents} />
            ) : (
              <p className="text-xl text-gray-400 leading-relaxed">{project.description as string}</p>
            )}
            {Array.isArray(project.techStack) && (project.techStack as string[]).length > 0 && (
              <div className="mt-12 flex flex-wrap gap-3">
                {(project.techStack as string[]).map((t) => (
                  <span key={t} className="px-5 py-2 bg-white/5 border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-[#CCFF00] hover:text-black transition-colors cursor-default">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* GALLERY */}
          {Array.isArray(project.gallery) && (project.gallery as string[]).length > 0 && (
            <div className="mb-32">
              <div className="columns-1 md:columns-2 gap-8 space-y-8">
                {(project.gallery as string[]).map((imgUrl, index) => (
                  <div
                    key={index}
                    onClick={() => setLightboxImage(imgUrl)}
                    className="relative break-inside-avoid rounded-[2rem] overflow-hidden bg-[#111] border border-white/5 group cursor-zoom-in"
                  >
                    <Image src={imgUrl} alt={`Gallery ${index}`} width={1200} height={1600} className="w-full h-auto transition-transform duration-1000 group-hover:scale-105 ease-out" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
                        <Maximize2 className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VIDEOS */}
          {Array.isArray(project.videoGallery) && (project.videoGallery as string[]).length > 0 && (
            <div className="mb-32">
              <h3 className="text-[10px] font-bold tracking-widest uppercase text-[#CCFF00] mb-12">Video & Motion</h3>
              <div className="grid grid-cols-1 gap-12">
                {(project.videoGallery as string[]).map((vidUrl, index) => (
                  <div key={index} className="relative rounded-[3rem] overflow-hidden bg-[#111] border border-white/10 aspect-video shadow-2xl">
                    <video src={vidUrl} autoPlay loop muted playsInline controls className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      {/* LIGHTBOX */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setLightboxImage(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-[#CCFF00] transition-colors">
            <X className="w-10 h-10" />
          </button>
          <img src={lightboxImage} alt="Fullscreen" className="max-w-full max-h-[90vh] object-contain rounded-xl" />
        </div>
      )}

    </div>
  )
}
