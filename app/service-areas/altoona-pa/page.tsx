import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPageTemplate from '@/components/LocationPageTemplate'
import LocalResources from '@/components/LocalResources'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

const cityFaqs = [
  {
    question: 'What areas of Blair County do you serve?',
    answer: 'We serve Altoona and surrounding Blair County communities including Hollidaysburg, Duncansville, Tyrone, and Bellwood. Contact us with your address to confirm service availability.',
  },
  {
    question: 'Do you offer recurring cleaning for Altoona families?',
    answer: "Yes. Weekly, bi-weekly, and monthly recurring plans are available. Most families in the Altoona area choose bi-weekly — it keeps the home consistently maintained without over-servicing.",
  },
  {
    question: 'Can you handle move-out cleaning near Penn State Altoona?',
    answer: 'Yes. We handle move-in and move-out cleaning for rental properties and student housing near Penn State Altoona — inside appliances, cabinets, bathrooms, and complete floor care to deposit-return standards.',
  },
  {
    question: 'Do you provide commercial cleaning for Blair County businesses?',
    answer: 'Yes. We serve small offices, professional suites, and light commercial spaces in the Altoona area with after-hours and weekend availability. Contact us for a commercial quote.',
  },
  {
    question: 'How does scheduling work in the Altoona area?',
    answer: "Request a quote online or call us and we'll confirm availability for your address. Recurring clients receive priority scheduling. For one-time cleans we can often accommodate within a few days.",
  },
]

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
      <JsonLd data={faqSchema(cityFaqs)} />
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
      >
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">
                Cleaning Services Across Altoona, PA
              </h2>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>
                  Altoona is the largest city in Blair County and the commercial hub of the Allegheny mountain region of central Pennsylvania. The city and its surrounding communities — Hollidaysburg to the south, Tyrone to the north, Duncansville and Bellwood nearby — form a regional cluster of established family neighborhoods and small-business corridors with a mix of older residential construction and newer suburban development.
                </p>
                <p>
                  Penn State Altoona adds a smaller-scale version of the rental and turnover demand familiar from the main University Park campus in State College. Our{' '}
                  <Link href="/services/move-in-move-out-cleaning" className="text-brand-blue hover:underline font-medium">
                    move-in/move-out cleaning service
                  </Link>{' '}
                  handles the full transition clean — inside appliances, cabinets, bathrooms, and every floor surface — to the standard landlords and property managers require for deposit returns.
                </p>
                <p>
                  For Blair County families who want the house consistently maintained without spending weekends cleaning, a{' '}
                  <Link href="/services/recurring-cleaning" className="text-brand-blue hover:underline font-medium">
                    recurring cleaning plan
                  </Link>{' '}
                  is the practical solution. Bi-weekly service is the most popular cadence in the region — it keeps pace with the natural cycle of household mess without over-servicing homes that don&apos;t need weekly attention.
                </p>
                <p>
                  The Altoona area is also home to a growing small-business community along the retail and commercial corridors. Our{' '}
                  <Link href="/services/commercial-cleaning" className="text-brand-blue hover:underline font-medium">
                    commercial cleaning service
                  </Link>{' '}
                  serves small offices, professional suites, and light commercial spaces in Blair County with after-hours and weekend availability so we can clean when you&apos;re closed.
                </p>
                <p>
                  Altoona winters are mountain-regional: Blair County sits in the Allegheny ridges at a higher elevation than the valleys to the east, and road treatment runs from late fall through early spring. Salt and winter debris tracked through entryways accumulate on floors and in grout lines through the season, making a late-spring{' '}
                  <Link href="/services/deep-cleaning" className="text-brand-blue hover:underline font-medium">
                    deep cleaning
                  </Link>{' '}
                  a natural annual reset.
                </p>
              </div>
              {/* TODO(owner): Add the specific neighborhoods and streets in Altoona and Blair County you actively serve — e.g. "We serve the Juniata Gap area, Eldorado, and the Hollidaysburg and Duncansville communities." */}
              {/* TODO(owner): If a local business or property manager client has given permission to be referenced, one attributed sentence adds more credibility than several paragraphs of generic copy. */}
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
          city="Altoona"
          links={[
            { label: 'Blair County Chamber of Commerce', href: 'https://blairchamber.com' },
            { label: 'Discover Blair County', href: 'https://www.discoverblaircounty.com' },
          ]}
        />
      </LocationPageTemplate>
    </>
  )
}
