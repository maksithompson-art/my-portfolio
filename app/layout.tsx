import "./globals.css";
import { Metadata } from "next";
import NavbarWrapper from '@/components/NavbarWrapper';
import Footer from "@/components/Footer";

// ==========================================
// 1. METADATA GLOBALI (SEO & Social Media)
// ==========================================
export const metadata: Metadata = {
  // metadataBase è fondamentale affinché Next.js crei link assoluti corretti per le immagini OG
  metadataBase: new URL('https://maksithompson.com'), 
  
  title: {
    default: "Maksi Thompson | Sviluppo Siti Web & Fotografo Torino",
    template: "%s | Maksi Thompson", // Rende i titoli dinamici (es. "Sailing Studios | Maksi Thompson")
  },
  description: "Web developer full-stack e fotografo commerciale a Torino. Creazione siti web ad alte prestazioni per e-commerce, ristoranti, aziende e personal brand.",
  keywords: [
    "sviluppo siti web", 
    "sviluppo siti web italia", 
    "web developer", 
    "photographer", 
    "fotografo torino", 
    "fotografo ristoranti",
    "Fotografia Commerciale",
    "Sviluppo Siti Web E-Commerce"
  ],
  
  // Open Graph (Anteprime perfette per WhatsApp, LinkedIn, Facebook, ecc.)
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: 'https://maksithompson.com',
    siteName: 'Maksi Thompson Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Assicurati di avere un'immagine 1200x630 in public/og-image.jpg
        width: 1200,
        height: 630,
        alt: 'Maksi Thompson - Web Developer & Photographer',
      },
    ],
  },
  
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
  },
};

// ==========================================
// 2. STRUTTURA PRINCIPALE & AIO (JSON-LD)
// ==========================================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  // Schema JSON-LD per l'AIO (ChatGPT, Perplexity) e il Google Knowledge Graph
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Maksi Thompson",
    "url": "https://maksithompson.com", 
    "jobTitle": [
      "Full Stack Web Developer",
      "Fotografo",
      "3D artist", 
      "Commercial Photographer", 
      "Filmmaker"
    ],
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
    ],
    // Inserisci qui i link reali ai tuoi profili social/professionali
    "sameAs": [
      "https://www.instagram.com/tuo_profilo", 
      "https://github.com/tuo_profilo",
      "https://www.linkedin.com/in/tuo_profilo"
    ]
  };

  return (
    <html lang="it" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        {/* Iniezione dello script JSON-LD invisibile agli utenti ma fondamentale per i bot */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-zinc-950 text-zinc-50 font-sans selection:bg-emerald-500/30 flex flex-col min-h-screen">
        
        {/* Wrapper Intelligente: nasconde la navbar quando sei dentro lo Studio di Sanity */}
        <NavbarWrapper />
        
        {/* Il tag <main> usa flex-grow per spingere il footer sempre in fondo allo schermo */}
        <main className="flex-grow">
          {children}
        </main>

        <Footer />
        
      </body>
    </html>
  );
}