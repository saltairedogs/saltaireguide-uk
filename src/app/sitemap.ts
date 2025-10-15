import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()
  const base = 'https://saltaireguide.uk'

  const urls: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/parking`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/salts-mill`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/roberts-park`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/walks`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/food-drink`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // Newly added high-value hubs
    { url: `${base}/visit-saltaire`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/saltaire-attractions`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/free-things-to-do-saltaire`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/saltaire-weekend-guide`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/saltaire-christmas`, lastModified: now, changeFrequency: 'yearly', priority: 0.75 },
    { url: `${base}/bradford-to-saltaire`, lastModified: now, changeFrequency: 'yearly', priority: 0.75 },
    { url: `${base}/events`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/history`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${base}/plan`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.5 },
  ]

  return urls
}
