import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: 'House Cleaning in Harrisburg, PA | Black Diamond Cleaning Solutions',
  description:
    'Professional house cleaning in Harrisburg, PA. Trusted by Dauphin County homeowners and property managers. 4.9★ on Google. Get your free quote today.',
  alternates: { canonical: `${BASE_URL}/service-areas/harrisburg-pa` },
  openGraph: {
    type: 'website',
    title: 'House Cleaning in Harrisburg, PA | Black Diamond Cleaning Solutions',
    description: 'Professional house cleaning in Harrisburg, PA. Trusted by Dauphin County homeowners and property managers. 4.9★ on Google. Get your free quote today.',
    url: `${BASE_URL}/service-areas/harrisburg-pa`,
    siteName: 'Black Diamond Cleaning Solutions LLC',
    locale: 'en_US',
    images: [{ url: ogImageUrl("House Cleaning in Harrisburg, PA", "Trusted by Pennsylvania's Capital Region"), secureUrl: ogImageUrl("House Cleaning in Harrisburg, PA", "Trusted by Pennsylvania's Capital Region"), width: 1200, height: 630, alt: 'House Cleaning Harrisburg PA — Black Diamond Cleaning Solutions', type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning Harrisburg PA | Black Diamond', description: 'Professional house cleaning in Harrisburg, PA. Free quotes.', images: [ogImageUrl("House Cleaning in Harrisburg, PA", "Trusted by Pennsylvania's Capital Region")] },
  robots: defaultRobots,
}

export default function HarrisburgPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Service Areas', href: '/service-areas/harrisburg-pa' }, { name: 'Harrisburg, PA', href: '/service-areas/harrisburg-pa' }])} />
      <LocationPageTemplate
        city="Harrisburg"
        state="PA"
        intro="Trusted cleaning solutions for Pennsylvania's capital region and Dauphin County. Harrisburg homeowners, state employees, and downtown condo residents rely on Black Diamond for a consistently premium clean."
        reasons={[
          'Familiar with downtown condos and historic row homes',
          'Discreet, professional service for busy professionals',
          'Trusted by Dauphin County property managers',
        ]}
        nearbyAreas={['Hershey', 'Camp Hill', 'Mechanicsburg', 'Lemoyne']}
      />
    </>
  )
}
