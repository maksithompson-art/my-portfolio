import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

// Returns the public URL for a Sanity image asset
export function urlFor(source) {
  if (!source?.asset?._ref) return ''
  const [, id, dimensions, format] = source.asset._ref.split('-')
  return `https://cdn.sanity.io/images/${import.meta.env.VITE_SANITY_PROJECT_ID}/${import.meta.env.VITE_SANITY_DATASET}/${id}-${dimensions}.${format}`
}

// Fetch all projects ordered by the 'order' field
export async function getProjects() {
  return client.fetch(
    `*[_type == "project"] | order(order asc) {
      _id,
      title,
      "slug": slug.current,
      category,
      description,
      tools,
      size,
      "mainImage": mainImage.asset->url,
      "galleryImages": galleryImages[].asset->url,
      "galleryVideos": galleryVideos[]{
        "url": file.asset->url,
        caption
      },
      "legacyGallery": gallery[]{
        mediaType,
        "image": image.asset->url,
        "video": video.asset->url,
        caption
      }
    }`
  )
}
