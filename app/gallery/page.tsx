import type { Metadata } from 'next'
import JsonLd from '@/components/JsonLd'
import GalleryClient from '@/components/GalleryClient'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'Our Cleaning Work | Black Diamond Cleaning Solutions — PA & NY',
  description:
    'See real cleaning results from Black Diamond — spotless kitchens, bathrooms, and living rooms across Pennsylvania and New York. 500+ homes cleaned. Get a free quote.',
  alternates: { canonical: `${BASE_URL}/gallery` },
  openGraph: {
    type: 'website',
    title: 'Our Cleaning Work | Black Diamond Cleaning Solutions — PA & NY',
    description: 'See real cleaning results from Black Diamond — spotless kitchens, bathrooms, and living rooms across Pennsylvania and New York.',
    url: `${BASE_URL}/gallery`,
    siteName: 'Black Diamond Cleaning Solutions LLC',
    locale: 'en_US',
    images: [{ url: ogImageUrl('Gallery — See Our Work', 'Real Homes. Real Results. 500+ Cleanings.'), secureUrl: ogImageUrl('Gallery — See Our Work', 'Real Homes. Real Results. 500+ Cleanings.'), width: 1200, height: 630, alt: 'Black Diamond Cleaning Gallery — Real Cleaning Results PA & NY', type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', title: 'Cleaning Gallery | Black Diamond Cleaning Solutions', description: 'See real cleaning results across PA & NY. 500+ homes cleaned.', images: [ogImageUrl('Gallery — See Our Work', 'Real Homes. Real Results. 500+ Cleanings.')] },
  robots: defaultRobots,
}

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Gallery', href: '/gallery' }])} />

      {/* ── HERO (server-rendered) ── */}
      <section className="bg-gradient-to-br from-brand-navy to-[#132040] text-white py-20">
        <div className="section-container text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-6">See Our Work</h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Real homes. Real results. 500+ spotless cleanings and counting.
          </p>
        </div>
      </section>

      {/* ── Interactive gallery + lightbox (client) ── */}
      <GalleryClient />
    </>
  )
}
