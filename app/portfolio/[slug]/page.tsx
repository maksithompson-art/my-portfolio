import { Metadata } from 'next'; // 1. IMPORTAZIONE MANCANTE AGGIUNTA
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import ProjectContent from './ProjectContent';

export const runtime = 'edge';

export const revalidate = 60; 

type Props = {
  params: Promise<{ slug: string }>;
};

// SEO Metadata Generation
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // 2. AWAIT SUI PARAMS OBBLIGATORIO IN NEXT.JS 15
  const { slug } = await params;

  // Chiediamo a Sanity i dati SEO per questo specifico progetto
  const query = `*[_type == "project" && slug.current == $slug][0]{
    title,
    seoTitle,
    seoDescription,
    seoImage
  }`;
  
  const project = await client.fetch(query, { slug });

  // Se il progetto non esiste, non facciamo nulla
  if (!project) return {};

  // Restituiamo i metadata formattati perfettamente per Next.js
  return {
    title: project.seoTitle || project.title, 
    description: project.seoDescription,
    openGraph: {
      title: project.seoTitle || project.title,
      description: project.seoDescription,
      images: project.seoImage ? [urlFor(project.seoImage).width(1200).height(630).url()] : [],
    },
  };
}

// Struttura Principale
export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;
  
  // Query GROQ per tutti i dati
  const query = `*[_type == "project" && slug.current == $slug][0] {
    title, category, "heroImg": heroImage.asset->url, "altText": heroImage.alt,
    "gallery": gallery[].asset->url, description, body, techStack, role, client, year
  }`;

  const project = await client.fetch(query, { slug });
  if (!project) notFound();

  return (
    <article className="min-h-screen bg-zinc-950 text-zinc-50 pt-32 pb-32">
      {/* Intestazione e Tasto Indietro */}
      <div className="container mx-auto px-6 md:px-12 mb-10">
        <Link href="/portfolio" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all font-medium">
          <ArrowLeft className="w-4 h-4" /> Torna all'Archivio
        </Link>
      </div>

      {/* Hero Image (Immagine di Copertina) */}
      {project.heroImg && (
        <div className="container mx-auto px-6 md:px-12 mb-16">
          <div className="w-full h-[40vh] md:h-[60vh] relative rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
            <img src={project.heroImg} alt={project.altText || project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          </div>
        </div>
      )}

      {/* Contenuto Dinamico (Testo + Galleria + Dettagli) */}
      <div className="container mx-auto px-6 md:px-12 max-w-6xl">
        <ProjectContent project={project} />
      </div>

    </article>
  );
}