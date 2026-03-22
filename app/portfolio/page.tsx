import { client } from '@/sanity/lib/client'; // Importa il client generato in automatico da Sanity
import PortfolioClient from './PortfolioClient'; // Importa l'interfaccia che abbiamo appena creato

export const metadata = {
  title: 'Portfolio Completo | Web Developer, Fotografo & 3D Artist',
  description: 'Esplora l\'archivio dei miei progetti.',
};

// Next.js invaliderà la cache ogni volta che aggiorni Sanity (revalidate)
export const revalidate = 60; 

export default async function PortfolioPage() {
  // Questa è la Query GROQ! Chiede a Sanity: "Dammi tutti i progetti ordinati per data, e portami titolo, slug, categoria e l'URL dell'immagine hero"
  const query = `*[_type == "project"] | order(orderRank asc) {
    title,
    "slug": slug.current,
    category,
    "img": heroImage.asset->url,
    "altText": heroImage.alt
  }`;

  // Facciamo la richiesta al database
  const projects = await client.fetch(query);

  // Passiamo i dati estratti al nostro componente visuale
  return <PortfolioClient projects={projects} />;
}