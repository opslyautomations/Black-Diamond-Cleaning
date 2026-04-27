import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: { absolute: 'House Cleaning in Altoona, PA | Black Diamond' },
  description:
    'Professional house cleaning in Altoona, PA. Trusted by Blair County homeowners and families. 4.9★ on Google. Same-day availability. Get your free quote today.',
  alternates: { canonical: `${BASE_URL}/service-areas/altoona-pa` },
  openGraph: {
    type: 'website',
    title: { absolute: 'House Cleaning in Altoona, PA | Black Diamond' },
    description: 'Professional house cleaning in Altoona, PA. Trusted by Blair County homeowners and families. 4.9★ on Google. Same-day availability. Get your free quote today.',
    url: `${BASE_URL}/service-areas/altoona-pa`,
    siteName: 'Black Diamond Cleaning Solutions',
    locale: 'en_US',
    images: [{ url: ogImageUrl('House Cleaning in Altoona, PA', 'Locally Trusted Across Blair County'), secureUrl: ogImageUrl('House Cleaning in Altoona, PA', 'Locally Trusted Across Blair County'), width: 1200, height: 630, alt: 'House Cleaning Altoona PA — Black Diamond Cleaning Solutions', type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning Altoona PA | Black Diamond', description: 'Professional house cleaning in Altoona, PA. Free quotes.', images: [ogImageUrl('House Cleaning in Altoona, PA', 'Locally Trusted Across Blair County')] },
  robots: defaultRobots,
}

export default function AltoonaPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Service Areas', href: '/service-areas/altoona-pa' }, { name: 'Altoona, PA', href: '/service-areas/altoona-pa' }])} />
      <LocationPageTemplate
        city="Altoona"
        state="PA"
        intro="Reliable cleaning services for Altoona homes and businesses in Blair County. We serve homeowners, renters, and small commercial spaces across the Altoona region with the same meticulous standards that built our reputation."
        reasons={[
          'Locally trusted across Blair County',
          'Flexible scheduling for working families',
          'Same-day availability for many cleaning types',
        ]}
        nearbyAreas={['Hollidaysburg', 'Duncansville', 'Tyrone', 'Bellwood']}
      />
    </>
  )
}
