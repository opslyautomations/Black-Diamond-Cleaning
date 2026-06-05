import type { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts'

const BASE = 'https://www.blackdiamondcleaningsolutionsllc.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    { url: `${BASE}/`, lastModified: '2026-06-01', changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/about`, lastModified: '2026-04-27', changeFrequency: 'monthly', priority: 0.7 },

    // Services
    { url: `${BASE}/services/standard-cleaning`, lastModified: '2026-04-27', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/services/deep-cleaning`, lastModified: '2026-04-27', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/services/move-in-move-out-cleaning`, lastModified: '2026-04-27', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/services/recurring-cleaning`, lastModified: '2026-04-27', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/services/commercial-cleaning`, lastModified: '2026-04-27', changeFrequency: 'monthly', priority: 0.9 },

    // Service Areas — last updated 2026-06-03 (Local Resources section added)
    { url: `${BASE}/service-areas/state-college-pa`, lastModified: '2026-06-03', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/service-areas/scranton-pa`, lastModified: '2026-06-03', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/service-areas/altoona-pa`, lastModified: '2026-06-03', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/service-areas/harrisburg-pa`, lastModified: '2026-06-03', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/service-areas/williamsport-pa`, lastModified: '2026-06-03', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/service-areas/erie-pa`, lastModified: '2026-06-03', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/service-areas/buffalo-ny`, lastModified: '2026-06-03', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/service-areas/rochester-ny`, lastModified: '2026-06-03', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/service-areas/syracuse-ny`, lastModified: '2026-06-03', changeFrequency: 'monthly', priority: 0.8 },

    // Support pages
    { url: `${BASE}/reviews`, lastModified: '2026-04-27', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/gallery`, lastModified: '2026-06-03', changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/blog`, lastModified: '2026-06-03', changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/specials`, lastModified: '2026-04-27', changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/contact`, lastModified: '2026-04-27', changeFrequency: 'yearly', priority: 0.7 },

    // Blog articles
    ...blogEntries,
  ]
}
