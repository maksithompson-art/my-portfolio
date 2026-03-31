import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

// Append Sanity CDN image transformation params
// thumb: small compressed version for grid cards
// full: larger version for modal/gallery
function optimizeUrl(url, preset = 'full') {
  if (!url) return ''
  const params = preset === 'thumb'
    ? 'w=800&auto=format&q=75&fit=max'
    : 'w=1600&auto=format&q=80&fit=max'
  return `${url}?${params}`
}

// Fetch all projects ordered by the 'order' field
export async function getProjects() {
  const projects = await client.fetch(
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

  return projects.map((p) => ({
    ...p,
    mainImageThumb: optimizeUrl(p.mainImage, 'thumb'),
    mainImage: optimizeUrl(p.mainImage, 'full'),
    galleryImages: p.galleryImages?.map((url) => optimizeUrl(url, 'full')),
    legacyGallery: p.legacyGallery?.map((item) => ({
      ...item,
      image: optimizeUrl(item.image, 'full'),
    })),
  }))
}
