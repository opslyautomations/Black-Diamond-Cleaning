import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'House Cleaning in Williamsport, PA | Black Diamond Cleaning Solutions',
  description:
    'Professional house cleaning in Williamsport, PA. Expert care for historic and Victorian properties in Lycoming County. 4.9★ on Google. Get your free quote today.',
  alternates: { canonical: `${BASE_URL}/service-areas/williamsport-pa` },
  openGraph: {
    type: 'website',
    title: 'House Cleaning in Williamsport, PA | Black Diamond Cleaning Solutions',
    description: 'Professional house cleaning in Williamsport, PA. Expert care for historic and Victorian properties in Lycoming County. 4.9★ on Google. Get your free quote today.',
    url: `${BASE_URL}/service-areas/williamsport-pa`,
    siteName: 'Black Diamond Cleaning Solutions LLC',
    locale: 'en_US',
    images: [{ url: ogImageUrl('House Cleaning in Williamsport, PA', 'Expert Care for Lycoming County Homes'), secureUrl: ogImageUrl('House Cleaning in Williamsport, PA', 'Expert Care for Lycoming County Homes'), width: 1200, height: 630, alt: 'House Cleaning Williamsport PA — Black Diamond Cleaning Solutions', type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning Williamsport PA | Black Diamond', description: 'Professional house cleaning in Williamsport, PA. Free quotes.', images: [ogImageUrl('House Cleaning in Williamsport, PA', 'Expert Care for Lycoming County Homes')] },
  robots: defaultRobots,
}

export default function WilliamsportPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Service Areas', href: '/service-areas/williamsport-pa' }, { name: 'Williamsport, PA', href: '/service-areas/williamsport-pa' }])} />
      <LocationPageTemplate
        city="Williamsport"
        state="PA"
        intro="Premium residential cleaning services for Williamsport and Lycoming County. From Victorian-era homes to modern suburban builds, Black Diamond delivers a spotless result every time — with the care historic properties require."
        reasons={[
          'Respectful, detailed care of historic and Victorian properties',
          'Reliable year-round service including holiday weeks',
          'Trusted by local real estate professionals for listing preps',
        ]}
        nearbyAreas={['Montoursville', 'South Williamsport', 'Loyalsock', 'Jersey Shore']}
      />
    </>
  )
}
