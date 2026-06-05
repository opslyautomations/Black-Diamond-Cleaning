import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPageTemplate from '@/components/LocationPageTemplate'
import LocalResources from '@/components/LocalResources'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

const cityFaqs = [
  {
    question: 'Do you handle move-out cleaning for student rentals near Penn State?',
    answer: 'Yes. Move-out cleaning for off-campus housing near Penn State is one of the most common requests we handle in Centre County. We clean every room top to bottom — inside appliances, cabinets, bathrooms, and floors — to a standard that meets typical landlord deposit-return requirements.',
  },
  {
    question: 'Can I schedule recurring service around the academic calendar?',
    answer: 'Absolutely. We offer weekly, bi-weekly, and monthly recurring plans and are flexible around semester rhythms — including adjusting or pausing service during breaks or peak exam periods.',
  },
  {
    question: 'How far in advance should I book during Penn State lease turnover season?',
    answer: "During peak turnover — roughly mid-July through mid-August — we recommend booking 2–3 weeks ahead when possible. Outside of that window we can often accommodate 48-hour turnaround. Call us for current availability.",
  },
  {
    question: 'Is your team experienced with older homes near campus?',
    answer: 'Yes. Many homes in and around the State College borough are older buildings with hardwood floors, original woodwork, and detailed trim. Our team is trained to clean those surfaces carefully using products appropriate for older construction.',
  },
  {
    question: 'Do you offer deep cleaning after Penn State winters?',
    answer: "We do. A spring deep clean after winter is a popular request in Centre County — months of road salt, sand, and tracked-in slush leave residue in grout, baseboards, and entryways that routine maintenance doesn't fully address.",
  },
]

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
      <JsonLd data={faqSchema(cityFaqs)} />
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
      >
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">
                Cleaning Services Across State College, PA
              </h2>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>
                  State College sits at the geographic heart of Pennsylvania — the borough wraps around Penn State&apos;s University Park campus in the Nittany Valley, with the broader Centre County region extending to Bellefonte to the north, Boalsburg to the east, and Port Matilda and Philipsburg further out. The area residents call Happy Valley is shaped almost entirely by the university&apos;s presence, and that shapes the cleaning needs here too.
                </p>
                <p>
                  The rental market near campus runs on an academic calendar, not a standard lease schedule. Penn State leases tend to concentrate in late July and early August, which means landlords managing even a small number of units face a compressed turnover window — sometimes dozens of properties needing a complete clean-out in the span of a few weeks. Our{' '}
                  <Link href="/services/move-in-move-out-cleaning" className="text-brand-blue hover:underline font-medium">
                    move-in/move-out cleaning service
                  </Link>{' '}
                  is built for this kind of demand: inside appliances, inside cabinets, full bathroom resets, and floor-to-ceiling cleaning that meets deposit-return standards consistently.
                </p>
                <p>
                  For homeowners and faculty households who live here year-round, a{' '}
                  <Link href="/services/recurring-cleaning" className="text-brand-blue hover:underline font-medium">
                    recurring cleaning plan
                  </Link>{' '}
                  removes the cognitive load entirely. Academic-year schedules are demanding and unpredictable — a bi-weekly plan keeps the house consistently maintained through the busiest stretches of the semester without requiring the homeowner to organize it around their actual schedule.
                </p>
                <p>
                  The older housing stock in the borough itself — properties near College Avenue, Beaver Stadium, and the original residential streets closest to campus — has real hardwood floors, plaster walls, original woodwork, and radiators that collect dust in ways modern construction doesn&apos;t. A standard clean maintains the day-to-day; a{' '}
                  <Link href="/services/deep-cleaning" className="text-brand-blue hover:underline font-medium">
                    deep cleaning
                  </Link>{' '}
                  in late spring, after winter road treatment has ended, addresses the accumulated salt residue, grit, and buildup in grout lines and baseboards that a maintenance routine can&apos;t fully reach.
                </p>
                <p>
                  Centre County winters are typical for central Pennsylvania: road treatment campaigns run from late November through March, and salt, sand, and slush track through entryways consistently. The valley position provides no shelter from the weather systems that move through the region.
                </p>
              </div>
              {/* TODO(owner): Add the specific townships and communities you actively serve in Centre County — e.g. "We serve Ferguson Township, Patton Township, and downtown State College, including landlords along Beaver Avenue and West Nittany Avenue." */}
              {/* TODO(owner): If a landlord or property manager client has given permission to be referenced, add one short attributed sentence here — real attribution adds more trust signal than a paragraph of generic copy. */}
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
          city="State College"
          links={[
            { label: 'Chamber of Business & Industry of Centre County (CBICC)', href: 'https://cbicc.org' },
            { label: 'Centre County Government & Economic Development', href: 'https://www.centrecountypa.gov' },
          ]}
        />
      </LocationPageTemplate>
    </>
  )
}
