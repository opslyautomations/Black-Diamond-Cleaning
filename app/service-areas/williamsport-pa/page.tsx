import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPageTemplate from '@/components/LocationPageTemplate'
import LocalResources from '@/components/LocalResources'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

const cityFaqs = [
  {
    question: 'Do you offer careful deep cleaning for historic homes in Williamsport?',
    answer: "Yes. Williamsport has some of Pennsylvania's most intact Victorian-era residential architecture, and our team is trained to clean older surfaces carefully — hardwood floors, plaster walls, original woodwork, and detailed trim — without abrasive products or rough handling.",
  },
  {
    question: 'What areas of Lycoming County do you serve?',
    answer: 'We serve Williamsport and surrounding Lycoming County communities including Montoursville, South Williamsport, Loyalsock, and Jersey Shore. Contact us with your address to confirm availability.',
  },
  {
    question: 'Can I book recurring cleaning in Williamsport?',
    answer: "Yes. Weekly, bi-weekly, and monthly recurring plans are available. For homes that see heavy use during Little League World Series season and summer events, a recurring plan keeps upkeep consistent without extra effort on your part.",
  },
  {
    question: 'How do you approach fragile original surfaces in older Lycoming County homes?',
    answer: 'We use cleaning products and methods appropriate for older surfaces — wood-safe floor cleaners, low-abrasion bathroom products, and careful technique around painted woodwork and plaster. If you have specific surfaces or items that need special attention, tell us when booking.',
  },
  {
    question: 'Do you offer move-in and move-out cleaning in the Williamsport area?',
    answer: 'Yes. We handle move-in and move-out cleaning for rental properties, real estate transactions, and tenant turnovers throughout Lycoming County — inside appliances, cabinets, and bathrooms to a listing-ready or deposit-return standard.',
  },
]

export const metadata: Metadata = {
  title: { absolute: 'House Cleaning in Williamsport, PA | Black Diamond' },
  description:
    'Professional house cleaning in Williamsport, PA. Expert care for historic and Victorian properties in Lycoming County. 4.9★ on Google. Get your free quote today.',
  alternates: { canonical: `${BASE_URL}/service-areas/williamsport-pa` },
  openGraph: {
    type: 'website',
    title: { absolute: 'House Cleaning in Williamsport, PA | Black Diamond' },
    description: 'Professional house cleaning in Williamsport, PA. Expert care for historic and Victorian properties in Lycoming County. 4.9★ on Google. Get your free quote today.',
    url: `${BASE_URL}/service-areas/williamsport-pa`,
    siteName: 'Black Diamond Cleaning Solutions',
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
      <JsonLd data={faqSchema(cityFaqs)} />
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
      >
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">
                Cleaning Services Across Williamsport, PA
              </h2>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>
                  Williamsport is the seat of Lycoming County, situated on the West Branch Susquehanna River in north-central Pennsylvania. The city is best known nationally as the birthplace and home of Little League Baseball and the annual Little League World Series — but locally, it&apos;s also home to some of the most striking residential architecture in the region: the &ldquo;Millionaire&apos;s Row&rdquo; district along West Fourth Street, a corridor of late-19th-century mansions built by the lumber industry&apos;s peak-era prosperity.
                </p>
                <p>
                  Cleaning homes of that era requires a different approach than newer construction. Original hardwood floors, plaster walls, detailed Victorian woodwork around windows, doors, and staircases, and ornate trim in formal rooms are all surfaces that can be damaged by the wrong products or technique. A thorough{' '}
                  <Link href="/services/deep-cleaning" className="text-brand-blue hover:underline font-medium">
                    deep cleaning
                  </Link>{' '}
                  of a Victorian-era Williamsport home is a careful, methodical process — working with the surfaces rather than against them, and using products and methods appropriate for older finishes.
                </p>
                <p>
                  Beyond the historic district, Williamsport and the surrounding Lycoming County communities — Montoursville, South Williamsport, Loyalsock Township, and Jersey Shore — have established residential neighborhoods of mixed age. For households throughout the region, a{' '}
                  <Link href="/services/recurring-cleaning" className="text-brand-blue hover:underline font-medium">
                    recurring cleaning plan
                  </Link>{' '}
                  keeps the home at a consistent standard year-round without requiring the homeowner to coordinate it themselves.
                </p>
                <p>
                  The real estate market in Lycoming County also generates ongoing demand for{' '}
                  <Link href="/services/move-in-move-out-cleaning" className="text-brand-blue hover:underline font-medium">
                    move-in/move-out cleaning
                  </Link>{' '}
                  — particularly for older homes being prepared for sale or re-listing, where a listing-ready deep clean can meaningfully affect how the home photographs and shows to buyers.
                </p>
                <p>
                  North-central Pennsylvania winters arrive early and stay late. The Susquehanna River valley channels weather systems, and Williamsport sees significant precipitation through the winter months. Road salt and tracked-in debris accumulate in entryways and on floors from November through March — a consistent challenge for homeowners maintaining older flooring.
                </p>
              </div>
              {/* TODO(owner): Add the specific neighborhoods, streets, and communities in Lycoming County you actively serve — e.g. "We serve Millionaire's Row, the Vallamont neighborhood, Loyalsock Township, and Montoursville." */}
              {/* TODO(owner): If a real estate professional or property owner has given permission to be referenced, one attributed sentence here is worth more than a full paragraph of generic copy. */}
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
          city="Williamsport"
          links={[
            { label: 'Williamsport/Lycoming Chamber of Commerce', href: 'https://williamsport.org' },
            { label: 'Visit Lycoming County', href: 'https://visitlycomingcounty.com' },
          ]}
        />
      </LocationPageTemplate>
    </>
  )
}
