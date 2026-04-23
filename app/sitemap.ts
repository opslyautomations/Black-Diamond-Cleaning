import type { MetadataRoute } from 'next'

const BASE = 'https://blackdiamondcleaningsolutionsllc.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },

    // Services
    { url: `${BASE}/services/standard-cleaning`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/services/deep-cleaning`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/services/move-in-move-out-cleaning`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/services/recurring-cleaning`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/services/commercial-cleaning`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },

    // Service Areas
    { url: `${BASE}/service-areas/state-college-pa`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/service-areas/scranton-pa`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/service-areas/altoona-pa`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/service-areas/harrisburg-pa`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/service-areas/williamsport-pa`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/service-areas/erie-pa`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/service-areas/buffalo-ny`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/service-areas/rochester-ny`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/service-areas/syracuse-ny`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },

    // Support pages
    { url: `${BASE}/reviews`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/gallery`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/specials`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
  ]
}
