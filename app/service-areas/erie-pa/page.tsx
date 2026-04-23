import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'House Cleaning in Erie, PA | Black Diamond Cleaning Solutions',
  description:
    'Professional house cleaning in Erie, PA. Reliable service for lakeside homes and Erie County homeowners year-round. 4.9★ on Google. Get your free quote today.',
  alternates: { canonical: `${BASE_URL}/service-areas/erie-pa` },
  openGraph: {
    type: 'website',
    title: 'House Cleaning in Erie, PA | Black Diamond Cleaning Solutions',
    description: 'Professional house cleaning in Erie, PA. Reliable service for lakeside homes and Erie County homeowners year-round. 4.9★ on Google. Get your free quote today.',
    url: `${BASE_URL}/service-areas/erie-pa`,
    siteName: 'Black Diamond Cleaning Solutions LLC',
    locale: 'en_US',
    images: [{ url: ogImageUrl('House Cleaning in Erie, PA', 'Reliable Service for Erie County Homes Year-Round'), secureUrl: ogImageUrl('House Cleaning in Erie, PA', 'Reliable Service for Erie County Homes Year-Round'), width: 1200, height: 630, alt: 'House Cleaning Erie PA — Black Diamond Cleaning Solutions', type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning Erie PA | Black Diamond', description: 'Professional house cleaning in Erie, PA. Free quotes.', images: [ogImageUrl('House Cleaning in Erie, PA', 'Reliable Service for Erie County Homes Year-Round')] },
  robots: defaultRobots,
}

export default function EriePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Service Areas', href: '/service-areas/erie-pa' }, { name: 'Erie, PA', href: '/service-areas/erie-pa' }])} />
      <LocationPageTemplate
        city="Erie"
        state="PA"
        intro="Professional house cleaning and maid services for Erie and Erie County, Pennsylvania. From lakeside homes along Presque Isle to downtown apartments, we provide the consistent quality Erie homeowners expect."
        reasons={[
          'Experience cleaning lakeside and older waterfront homes',
          "Reliable service through Erie's demanding winters",
          'Local trust built on 5-star reviews and word-of-mouth',
        ]}
        nearbyAreas={['Millcreek', 'Harborcreek', 'Fairview', 'North East']}
      />
    </>
  )
}
