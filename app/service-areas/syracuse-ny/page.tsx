import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPageTemplate from '@/components/LocationPageTemplate'
import LocalResources from '@/components/LocalResources'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

const cityFaqs = [
  {
    question: 'Do you offer cleaning near Syracuse University?',
    answer: 'Yes. We handle cleaning for student rentals and SU-area properties including move-in and move-out service for off-campus housing. Lease turnovers near Syracuse University are a common request in our Central New York market.',
  },
  {
    question: 'What parts of Onondaga County do you serve?',
    answer: 'We serve Syracuse and surrounding Onondaga County communities including DeWitt, Liverpool, Camillus, and Manlius. Contact us with your address to confirm service availability.',
  },
  {
    question: "How do you handle Syracuse's heavy lake-effect snowfall and salt season?",
    answer: 'Syracuse is one of the snowiest cities in the contiguous United States, and the road salt and ice-melt tracked indoors through the winter months is substantial. We recommend a thorough spring deep clean after salt season to remove the accumulated residue from floors, grout, and baseboards.',
  },
  {
    question: 'Do you offer commercial cleaning for CNY offices?',
    answer: 'Yes. We serve small offices and professional spaces in the Syracuse area with after-hours and weekend scheduling. Contact us for a commercial cleaning quote.',
  },
  {
    question: 'Can I schedule recurring cleaning in the Salt City area?',
    answer: 'Yes. Weekly, bi-weekly, and monthly recurring plans are available. Recurring clients receive priority scheduling and discounted per-visit rates compared to one-time service.',
  },
]

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
      <JsonLd data={faqSchema(cityFaqs)} />
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
      >
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">
                Cleaning Services Across Syracuse, NY
              </h2>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>
                  Syracuse is the seat of Onondaga County and the hub of Central New York — a city nicknamed the &ldquo;Salt City&rdquo; for its 19th-century salt production heritage. The city sits at the intersection of several major transport corridors and is home to Syracuse University on a hill above the downtown core, with the Armory Square district as the center of a revitalized urban neighborhood. Surrounding communities like DeWitt, Liverpool, Camillus, and Manlius form a substantial suburban population across Onondaga County.
                </p>
                <p>
                  Syracuse University creates a significant student-rental market in the neighborhoods immediately surrounding the Hill — Marshall Street, the University neighborhood, and the off-campus housing corridors extending south and east of campus. Our{' '}
                  <Link href="/services/move-in-move-out-cleaning" className="text-brand-blue hover:underline font-medium">
                    move-in/move-out cleaning service
                  </Link>{' '}
                  handles lease turnovers for rental properties near SU — inside appliances, cabinets, complete bathroom resets, and full floor care — to the deposit-return standard landlords require.
                </p>
                <p>
                  For Onondaga County homeowners in the suburbs and the city, a{' '}
                  <Link href="/services/recurring-cleaning" className="text-brand-blue hover:underline font-medium">
                    recurring cleaning plan
                  </Link>{' '}
                  provides consistent home maintenance through a climate that varies dramatically across the year. CNY winters are among the snowiest in the United States; a reliable cleaning schedule that continues through winter — not one that fades when the weather gets difficult — is what homeowners here need.
                </p>
                <p>
                  Syracuse&apos;s growing small-business and office market — accelerated by regional investment in technology and manufacturing, including significant semiconductor industry development in the broader area — creates demand for our{' '}
                  <Link href="/services/commercial-cleaning" className="text-brand-blue hover:underline font-medium">
                    commercial cleaning service
                  </Link>
                  . We serve small offices and professional suites with after-hours and weekend scheduling so cleaning happens outside business hours.
                </p>
                <p>
                  Syracuse is among the snowiest cities in the contiguous United States. Road salt, sand, and ice-melt tracked indoors from November through April accumulate in entryways, on floors, and in grout lines to a degree that requires a dedicated post-season{' '}
                  <Link href="/services/deep-cleaning" className="text-brand-blue hover:underline font-medium">
                    deep clean
                  </Link>{' '}
                  to properly address.
                </p>
              </div>
              {/* TODO(owner): Add the specific Syracuse neighborhoods and Onondaga County communities you actively serve — e.g. "We serve the SU Hill neighborhood, Armory Square, DeWitt, Liverpool, Camillus, and Manlius." */}
              {/* TODO(owner): If a Syracuse University-area landlord or CNY business client has given permission to be referenced, one attributed sentence here adds substantial credibility. */}
            </div>
          </div>
        </section>

        <section className="section-padding bg-brand-light">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-brand-navy mb-10 text-center">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {cityFaqs.map((faq) => (
                  <div key={faq.question} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <h3 className="font-heading font-bold text-lg text-brand-navy mb-3">{faq.question}</h3>
                    <p className="text-brand-gray leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <LocalResources
          city="Syracuse"
          links={[
            { label: 'CenterState CEO (Greater Syracuse Chamber)', href: 'https://centerstateceo.com' },
            { label: 'Visit Syracuse', href: 'https://www.visitsyracuse.com' },
          ]}
        />
      </LocationPageTemplate>
    </>
  )
}
