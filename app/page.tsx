import { client } from '@/sanity/lib/client';
import Hero from '@/components/Hero';
import Expertise from '@/components/Expertise';
import SelectedWork from '@/components/SelectedWork';
import Contact from '@/components/Contact';

// THE MAGIC NUMBER: 86400 seconds = 24 hours. 
// Next.js will build this page, run the randomizer once, and serve that exact same 
// "random" combination to every visitor for 24 hours. Tomorrow, it will pick new ones!
export const revalidate = 86400; 

// Helper function to shuffle an array randomly
function shuffleArray(array: any[]) {
  // Create a copy of the array so we don't mutate the original
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default async function HomePage() {
  // 1. Fetch ALL projects from Sanity
  // Note: I added a fallback. It checks for mainImage first, if empty, it tries heroImage.
  const query = `*[_type == "project"] {
    _id,
    title,
    "slug": slug.current,
    category,
    "img": coalesce(mainImage.asset->url, heroImage.asset->url),
    "altText": coalesce(mainImage.alt, heroImage.alt)
  }`;

  const allProjects = await client.fetch(query);

  // 2. Separate them into their specific categories based on your Sanity schema
  const webProjects = allProjects.filter((p: any) => p.category === 'Web App');
  const photoProjects = allProjects.filter((p: any) => p.category === 'Official Photographer');
  const videoProjects = allProjects.filter((p: any) => 
    p.category === 'Cinematography' || p.category === '3D Art Direction'
  );

  // 3. Shuffle each category and slice out the number you want to show per day
  // (e.g., 4 Web, 6 Photo, 4 Video)
  const dailyWeb = shuffleArray(webProjects).slice(0, 4);
  const dailyPhoto = shuffleArray(photoProjects).slice(0, 6);
  const dailyVideo = shuffleArray(videoProjects).slice(0, 4);

  // 4. Combine them back into a single array to pass to the client component
  const dailyShowcase = [...dailyWeb, ...dailyPhoto, ...dailyVideo];

  return (
    <>
      <Hero />
      <Expertise />
      {/* Pass the daily randomized projects into your UI component */}
      <SelectedWork projects={dailyShowcase} />
      <Contact />
    </>
  );
}