import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: { absolute: 'House Cleaning in Rochester, NY | Black Diamond' },
  description:
    'Professional house cleaning in Rochester, NY. Trusted by Monroe County homeowners and recurring plan customers. 4.9★ on Google. Get your free quote today.',
  alternates: { canonical: `${BASE_URL}/service-areas/rochester-ny` },
  openGraph: {
    type: 'website',
    title: { absolute: 'House Cleaning in Rochester, NY | Black Diamond' },
    description: 'Professional house cleaning in Rochester, NY. Trusted by Monroe County homeowners and recurring plan customers. 4.9★ on Google. Get your free quote today.',
    url: `${BASE_URL}/service-areas/rochester-ny`,
    siteName: 'Black Diamond Cleaning Solutions',
    locale: 'en_US',
    images: [{ url: ogImageUrl('House Cleaning in Rochester, NY', 'Dependable Service Across Monroe County'), secureUrl: ogImageUrl('House Cleaning in Rochester, NY', 'Dependable Service Across Monroe County'), width: 1200, height: 630, alt: 'House Cleaning Rochester NY — Black Diamond Cleaning Solutions', type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning Rochester NY | Black Diamond', description: 'Professional house cleaning in Rochester, NY. Free quotes.', images: [ogImageUrl('House Cleaning in Rochester, NY', 'Dependable Service Across Monroe County')] },
  robots: defaultRobots,
}

export default function RochesterPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Service Areas', href: '/service-areas/rochester-ny' }, { name: 'Rochester, NY', href: '/service-areas/rochester-ny' }])} />
      <LocationPageTemplate
        city="Rochester"
        state="NY"
        intro="Dependable cleaning services for Rochester homes and small businesses in Monroe County. Serving the Park Avenue district, Brighton, Pittsford, and greater Rochester with consistent, professional cleaning."
        reasons={[
          'Trusted by Monroe County homeowners for recurring plans',
          'Experience with student rentals near RIT and University of Rochester',
          'Flexible weekly and bi-weekly plans that fit busy lives',
        ]}
        nearbyAreas={['Brighton', 'Pittsford', 'Irondequoit', 'Henrietta']}
      />
    </>
  )
}
