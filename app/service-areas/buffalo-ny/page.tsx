import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: { absolute: 'House Cleaning in Buffalo, NY | Black Diamond' },
  description:
    'Professional house cleaning in Buffalo, NY. Trusted by Erie County homeowners, landlords & short-term rental owners. 4.9★ on Google. Get your free quote today.',
  alternates: { canonical: `${BASE_URL}/service-areas/buffalo-ny` },
  openGraph: {
    type: 'website',
    title: { absolute: 'House Cleaning in Buffalo, NY | Black Diamond' },
    description: 'Professional house cleaning in Buffalo, NY. Trusted by Erie County homeowners, landlords & short-term rental owners. 4.9★ on Google. Get your free quote today.',
    url: `${BASE_URL}/service-areas/buffalo-ny`,
    siteName: 'Black Diamond Cleaning Solutions',
    locale: 'en_US',
    images: [{ url: ogImageUrl('House Cleaning in Buffalo, NY', 'Serving Buffalo Metro & Erie County, NY'), secureUrl: ogImageUrl('House Cleaning in Buffalo, NY', 'Serving Buffalo Metro & Erie County, NY'), width: 1200, height: 630, alt: 'House Cleaning Buffalo NY — Black Diamond Cleaning Solutions', type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning Buffalo NY | Black Diamond', description: 'Professional house cleaning in Buffalo, NY. Free quotes.', images: [ogImageUrl('House Cleaning in Buffalo, NY', 'Serving Buffalo Metro & Erie County, NY')] },
  robots: defaultRobots,
}

export default function BuffaloPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Service Areas', href: '/service-areas/buffalo-ny' }, { name: 'Buffalo, NY', href: '/service-areas/buffalo-ny' }])} />
      <LocationPageTemplate
        city="Buffalo"
        state="NY"
        intro="Expert house cleaning and maid services serving Buffalo and Erie County, New York. From North Buffalo bungalows to Elmwood Village apartments to suburban homes across Amherst and Cheektowaga, Black Diamond delivers premium cleaning across the Buffalo metro."
        reasons={[
          "Familiar with Buffalo's historic housing stock and character homes",
          'Reliable winter service — we show up in any weather',
          'Trusted by Erie County landlords and short-term rental owners',
        ]}
        nearbyAreas={['Amherst', 'Cheektowaga', 'Tonawanda', 'West Seneca']}
      />
    </>
  )
}
