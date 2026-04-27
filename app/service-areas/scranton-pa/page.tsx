import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: { absolute: 'House Cleaning in Scranton, PA | Black Diamond' },
  description:
    'Professional house cleaning in Scranton, PA. Trusted by Lackawanna County homeowners and Airbnb hosts. 4.9★ on Google. Get your free quote today.',
  alternates: { canonical: `${BASE_URL}/service-areas/scranton-pa` },
  openGraph: {
    type: 'website',
    title: { absolute: 'House Cleaning in Scranton, PA | Black Diamond' },
    description: 'Professional house cleaning in Scranton, PA. Trusted by Lackawanna County homeowners and Airbnb hosts. 4.9★ on Google. Get your free quote today.',
    url: `${BASE_URL}/service-areas/scranton-pa`,
    siteName: 'Black Diamond Cleaning Solutions',
    locale: 'en_US',
    images: [{ url: ogImageUrl('House Cleaning in Scranton, PA', 'Trusted by Lackawanna County Homeowners & Airbnb Hosts'), secureUrl: ogImageUrl('House Cleaning in Scranton, PA', 'Trusted by Lackawanna County Homeowners & Airbnb Hosts'), width: 1200, height: 630, alt: 'House Cleaning Scranton PA — Black Diamond Cleaning Solutions', type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning Scranton PA | Black Diamond', description: 'Professional house cleaning in Scranton, PA. Free quotes.', images: [ogImageUrl('House Cleaning in Scranton, PA', 'Trusted by Lackawanna County Homeowners & Airbnb Hosts')] },
  robots: defaultRobots,
}

export default function ScrantonPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Service Areas', href: '/service-areas/scranton-pa' }, { name: 'Scranton, PA', href: '/service-areas/scranton-pa' }])} />
      <LocationPageTemplate
        city="Scranton"
        state="PA"
        intro="Professional house cleaning and maid services for Scranton and the Lackawanna County region. From historic homes in the Hill Section to modern builds in Dunmore, we bring consistent quality to every Scranton-area home."
        reasons={[
          "Experience cleaning Scranton's older and historic homes",
          'Reliable service through all weather conditions',
          'Trusted by Lackawanna County Airbnb hosts for quick turnovers',
        ]}
        nearbyAreas={['Dunmore', 'Clarks Summit', 'Moosic', 'Dickson City']}
      />
    </>
  )
}
