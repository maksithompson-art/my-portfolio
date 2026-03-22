import "./globals.css";
import { Metadata } from "next";
// Rimosso import Navbar diretto, usiamo solo il Wrapper!
import NavbarWrapper from '@/components/NavbarWrapper';
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Maksi Thompson | Sviluppo Siti Web & Fotografo Torino",
  description: "Web developer full-stack e fotografo commerciale a Torino. Creazione siti web ad alte prestazioni per e-commerce, ristoranti, aziende e personal brand.",
  keywords: ["sviluppo siti web", "sviluppo siti web italia", "web developer", "photographer", "fotografo torino", "fotografo ristoranti","Fotografia Commerciale","Sviluppo Siti Web E-Commerce"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Schema JSON-LD per SEO AIO e Google Knowledge Graph
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Maksi Thompson",
    "jobTitle": ["Full Stack Web Developer","Fotografo","3D artist", "Commercial Photographer", "Filmmaker"],
    "url": "https://www.yourdomain.com", // Ricordati di cambiare questo con il tuo dominio vero prima del lancio!
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Torino",
      "addressRegion": "Piemonte",
      "addressCountry": "IT"
    },
    "knowsAbout": [
      "Sviluppo Siti Web",
      "Sviluppo Siti Web E-Commerce",
      "Sviluppo Siti Web per Ristoranti",
      "Fotografia Commerciale",
      "Fotografia Corporate",
      "Fotografo Torino",
      "Event Photography",
      "React", 
      "Next.js"
    ]
  };

  return (
    <html lang="it" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-zinc-950 text-zinc-50 font-sans selection:bg-emerald-500/30 flex flex-col min-h-screen">
        
        {/* QUI LA MAGIA: Usiamo il Wrapper che nasconde la navbar nello Studio */}
        <NavbarWrapper />
        
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
        
      </body>
    </html>
  );
}