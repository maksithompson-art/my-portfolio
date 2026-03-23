/** @type {import('next').NextConfig} */
const nextConfig = {
  // Aggiungi questo blocco per le immagini
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;