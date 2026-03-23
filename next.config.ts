/** @type {import('next').NextConfig} */
const nextConfig = {
  // Aggiungi questo blocco per le immagini
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // Le foto segnaposto della Hero
      },
    ],
  },
};

export default nextConfig;