import { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import ProjectContent from './ProjectContent';
import Image from 'next/image';

export const runtime = 'edge';
export const revalidate = 60; 

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const query = `*[_type == "project" && slug.current == $slug][0]{ title, seoTitle, seoDescription, seoImage }`;
  const project = await client.fetch(query, { slug });

  if (!project) return {};

  return {
    title: `${project.seoTitle || project.title} | Maksi Thompson`, 
    description: project.seoDescription,
    openGraph: {
      title: project.seoTitle || project.title,
      description: project.seoDescription,
      images: project.seoImage ? [urlFor(project.seoImage).width(1200).height(630).url()] : [],
    },
  };
}

export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  
  const query = `*[_type == "project" && slug.current == $slug][0] {
    title, category, "heroImg": heroImage.asset->url, "altText": heroImage.alt,
    "gallery": gallery[].asset->url, "videoGallery": videoGallery[].asset->url, 
    description, body, techStack, role, client, year
  }`;

  const project = await client.fetch(query, { slug });
  if (!project) notFound();

  return (
    // Swapped zinc-950 for our signature #0A0A0A
    <article className="min-h-screen bg-[#0A0A0A] text-white pb-32 selection:bg-[#CCFF00] selection:text-black">
      
      {/* FLOATING NAVIGATION */}
      <nav className="fixed top-32 left-8 md:left-12 lg:left-24 z-[60] mix-blend-difference">
        <Link 
          href="/portfolio" 
          className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-white/50 hover:text-[#CCFF00] transition-colors"
        >
          <div className="p-2 border border-white/10 rounded-full group-hover:border-[#CCFF00] transition-colors">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </div>
          <span className="hidden md:block">Archivio</span>
        </Link>
      </nav>

      {/* CINEMATIC HERO SECTION */}
      {project.heroImg && (
        <div className="w-full h-[60vh] md:h-[85vh] relative overflow-hidden">
          <Image 
            src={project.heroImg} 
            alt={project.altText || project.title}
            fill 
            priority 
            className="object-cover"
            sizes="100vw"
          />
          
          {/* Gradients to blend the photo into the UI */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
          <div className="absolute inset-0 bg-black/20" /> {/* Subtle dimming */}
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
             <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 to-[#CCFF00]" />
             <span className="text-[8px] font-bold tracking-[0.5em] uppercase text-[#CCFF00] animate-pulse">Scroll</span>
          </div>
        </div>
      )}

      {/* MAIN CONTENT AREA */}
      <div className="relative z-10">
        {/* We use a negative margin on large screens to pull the content slightly over the hero for a layered feel */}
        <div className="md:-mt-20">
            <ProjectContent project={project} />
        </div>
      </div>

      {/* OPTIONAL: BOTTOM NAVIGATION (Next Project) */}
      <section className="mt-32 px-8 md:px-12 lg:px-24 border-t border-white/10 pt-24">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-500 mb-8">Continua a esplorare</p>
            <Link href="/portfolio" className="group">
                <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter hover:text-[#CCFF00] transition-colors duration-500">
                    Torna All&apos;Archivio
                </h2>
                <div className="mt-6 w-0 group-hover:w-full h-[2px] bg-[#CCFF00] transition-all duration-700 mx-auto" />
            </Link>
        </div>
      </section>

    </article>
  );
}