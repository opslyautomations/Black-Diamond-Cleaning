import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts'

const BASE = 'https://www.blackdiamondcleaningsolutionsllc.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

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
    { url: `${BASE}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/specials`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },

    // Blog articles
    ...blogEntries,
  ]
}
