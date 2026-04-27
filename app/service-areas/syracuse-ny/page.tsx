import type { Metadata } from 'next'
import LocationPageTemplate from '@/components/LocationPageTemplate'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'

export const metadata: Metadata = {
  title: { absolute: 'House Cleaning in Syracuse, NY | Black Diamond' },
  description:
    'Professional house cleaning in Syracuse, NY. Trusted by Onondaga County homeowners and SU-area landlords. 4.9★ on Google. Get your free quote today.',
  alternates: { canonical: `${BASE_URL}/service-areas/syracuse-ny` },
  openGraph: {
    type: 'website',
    title: { absolute: 'House Cleaning in Syracuse, NY | Black Diamond' },
    description: 'Professional house cleaning in Syracuse, NY. Trusted by Onondaga County homeowners and SU-area landlords. 4.9★ on Google. Get your free quote today.',
    url: `${BASE_URL}/service-areas/syracuse-ny`,
    siteName: 'Black Diamond Cleaning Solutions',
    locale: 'en_US',
    images: [{ url: ogImageUrl('House Cleaning in Syracuse, NY', 'Trusted Across Central New York'), secureUrl: ogImageUrl('House Cleaning in Syracuse, NY', 'Trusted Across Central New York'), width: 1200, height: 630, alt: 'House Cleaning Syracuse NY — Black Diamond Cleaning Solutions', type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning Syracuse NY | Black Diamond', description: 'Professional house cleaning in Syracuse, NY. Free quotes.', images: [ogImageUrl('House Cleaning in Syracuse, NY', 'Trusted Across Central New York')] },
  robots: defaultRobots,
}

export default function SyracusePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Service Areas', href: '/service-areas/syracuse-ny' }, { name: 'Syracuse, NY', href: '/service-areas/syracuse-ny' }])} />
      <LocationPageTemplate
        city="Syracuse"
        state="NY"
        intro="Professional home cleaning services for Syracuse and the Central New York region. We serve homeowners, renters, Syracuse University-area landlords, and small commercial spaces across Onondaga County."
        reasons={[
          'Familiar with SU-area rentals and move-in/move-out turnovers',
          'Reliable in every CNY season',
          '5-star reviews from Onondaga County homeowners',
        ]}
        nearbyAreas={['DeWitt', 'Liverpool', 'Camillus', 'Manlius']}
      />
    </>
  )
}
