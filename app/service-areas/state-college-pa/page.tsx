import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: { absolute: 'House Cleaning in State College, PA | Black Diamond' },
  description:
    'Professional house cleaning in State College, PA. Trusted by Penn State-area homeowners and landlords. 4.9★ on Google. Get your free quote today.',
  alternates: { canonical: `${BASE_URL}/service-areas/state-college-pa` },
  openGraph: {
    type: 'website',
    title: { absolute: 'House Cleaning in State College, PA | Black Diamond' },
    description: 'Professional house cleaning in State College, PA. Trusted by Penn State-area homeowners and landlords. 4.9★ on Google. Get your free quote today.',
    url: `${BASE_URL}/service-areas/state-college-pa`,
    siteName: 'Black Diamond Cleaning Solutions',
    locale: 'en_US',
    images: [{ url: ogImageUrl('House Cleaning in State College, PA', 'Trusted by Penn State-Area Homeowners & Landlords'), secureUrl: ogImageUrl('House Cleaning in State College, PA', 'Trusted by Penn State-Area Homeowners & Landlords'), width: 1200, height: 630, alt: 'House Cleaning State College PA — Black Diamond Cleaning Solutions', type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning State College PA | Black Diamond', description: 'Professional house cleaning in State College, PA. Free quotes.', images: [ogImageUrl('House Cleaning in State College, PA', 'Trusted by Penn State-Area Homeowners & Landlords')] },
  robots: defaultRobots,
}

export default function StateCollegePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Service Areas', href: '/service-areas/state-college-pa' }, { name: 'State College, PA', href: '/service-areas/state-college-pa' }])} />
      <LocationPageTemplate
        city="State College"
        state="PA"
        intro="Serving the State College and Centre County area with premium residential and commercial cleaning. Whether you're a Penn State faculty member, a downtown homeowner, or a landlord managing student rentals, Black Diamond delivers spotless, reliable service every visit."
        reasons={[
          'Student-rental turnover expertise for Penn State–area landlords',
          'Flexible scheduling around the academic calendar and move-in weekends',
          'Trusted by Centre County property managers for consistent quality',
        ]}
        nearbyAreas={['Bellefonte', 'Boalsburg', 'Port Matilda', 'Philipsburg']}
      />
    </>
  )
}
