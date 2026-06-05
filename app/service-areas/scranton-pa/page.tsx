import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPageTemplate from '@/components/LocationPageTemplate'
import LocalResources from '@/components/LocalResources'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

const cityFaqs = [
  {
    question: 'Do you handle Airbnb and short-term rental turnover cleaning in Scranton?',
    answer: 'Yes. We work with Airbnb and short-term rental hosts in Scranton and Lackawanna County for fast, thorough between-guest turnovers — linen changes, bathroom resets, kitchen cleanup, and full restocking checklists upon request.',
  },
  {
    question: 'Are you experienced with older NEPA homes with original woodwork and plaster walls?',
    answer: 'Yes. Scranton has extensive older housing stock — row homes, Victorian-era doubles, and pre-war single-family homes with plaster walls, original hardwood floors, and detailed woodwork. Our team uses products and methods appropriate for older finishes.',
  },
  {
    question: 'What areas of Lackawanna County do you serve?',
    answer: 'We serve Scranton and surrounding Lackawanna County communities including Dunmore, Clarks Summit, Moosic, and Dickson City. Contact us with your address to confirm availability.',
  },
  {
    question: 'How do you handle salt and winter debris tracked into homes?',
    answer: 'Road salt, sand, and winter grit tracked through entryways from November through March can damage flooring finishes over time. We pay particular attention to entry areas, floor transitions, and baseboards during winter-season cleanings.',
  },
  {
    question: 'Can I book a one-time deep clean before starting a recurring plan?',
    answer: "Yes — and we recommend it. A deep clean first brings your home to a reset baseline; recurring standard cleanings then maintain that level efficiently going forward. It's the most cost-effective way to start.",
  },
]

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
      <JsonLd data={faqSchema(cityFaqs)} />
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
      >
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">
                Cleaning Services Across Scranton, PA
              </h2>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>
                  Scranton is the largest city in Lackawanna County and the regional hub of Northeastern Pennsylvania — a city with a dense, walkable downtown centered on Lackawanna Avenue and a housing stock that reflects over a century of industrial and residential development. The Hill Section, Green Ridge, and South Side are established neighborhoods with older homes that have real character: original hardwood floors, plaster walls, detailed woodwork, and the construction detail that newer builds don&apos;t replicate.
                </p>
                <p>
                  Cleaning older NEPA homes well requires attention to surfaces that newer construction doesn&apos;t have. Plaster walls, original hardwood, and detailed trim around windows and doors need products that won&apos;t damage them and technique that respects the material. A{' '}
                  <Link href="/services/deep-cleaning" className="text-brand-blue hover:underline font-medium">
                    deep cleaning
                  </Link>{' '}
                  is a natural fit for older Scranton homes — tackling baseboards, grout lines, inside appliances, and all the areas that accumulate buildup behind the surfaces cleaned routinely.
                </p>
                <p>
                  Scranton&apos;s active short-term rental market adds another dimension. Properties listed on Airbnb and similar platforms near downtown, the Electric City Trolley Museum, and Steamtown National Historic Site turn over regularly and need a fast, thorough reset between guests. Our{' '}
                  <Link href="/services/move-in-move-out-cleaning" className="text-brand-blue hover:underline font-medium">
                    move-in/move-out and turnover cleaning
                  </Link>{' '}
                  covers full bathroom resets, kitchen cleaning, linen management, and restocking checklist support.
                </p>
                <p>
                  For Scranton homeowners who want ongoing maintenance without managing it themselves, a{' '}
                  <Link href="/services/recurring-cleaning" className="text-brand-blue hover:underline font-medium">
                    recurring cleaning plan
                  </Link>{' '}
                  — weekly, bi-weekly, or monthly — keeps the home at a consistent standard through every season, including NEPA winters when road salt and slush track through entryways for months at a time.
                </p>
                <p>
                  Northeastern Pennsylvania winters are real. Lackawanna County sits in a geography that channels cold air and precipitation, and road treatment campaigns run from late fall through early spring. Salt, sand, and grit accumulate on floors and in grout lines in ways that require more than a basic clean to address — particularly in older homes where floors are original hardwood or tile.
                </p>
              </div>
              {/* TODO(owner): Add the specific neighborhoods and areas of Scranton you actively serve — e.g. "We serve the Hill Section, Green Ridge, South Side, and the Dunmore and Dickson City communities." */}
              {/* TODO(owner): If a short-term rental or Airbnb host client has given permission to be referenced, one attributed sentence adds more credibility than several paragraphs of generic copy. */}
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
          city="Scranton"
          links={[
            { label: 'The Greater Scranton Chamber of Commerce', href: 'https://www.scrantonchamber.com' },
            { label: 'Visit NEPA (Northeastern Pennsylvania)', href: 'https://www.visitnepa.org' },
          ]}
        />
      </LocationPageTemplate>
    </>
  )
}
