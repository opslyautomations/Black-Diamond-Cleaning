import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPageTemplate from '@/components/LocationPageTemplate'
import LocalResources from '@/components/LocalResources'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

const cityFaqs = [
  {
    question: "How do you handle the buildup from Erie's lake-effect winters?",
    answer: "Erie's winters are in a class of their own in Pennsylvania. Salt, sand, and slush tracked through entryways from November through April accumulate in grout lines, on baseboards, and under furniture in ways that routine cleaning doesn't fully address. We recommend a spring deep clean after the last road treatment of the season to remove that accumulated residue.",
  },
  {
    question: 'What parts of Erie County do you serve?',
    answer: 'We serve Erie city and surrounding Erie County communities including Millcreek Township, Harborcreek, Fairview, and North East. Contact us with your address to confirm availability.',
  },
  {
    question: 'Do you offer move-out cleaning near Gannon University?',
    answer: 'Yes. We handle move-in and move-out cleaning for rental properties and student housing in the Erie area, including properties near Gannon — inside appliances, cabinets, bathrooms, and complete floor care.',
  },
  {
    question: 'Can I schedule recurring cleaning year-round in Erie?',
    answer: "Yes. We provide year-round recurring cleaning in Erie County — weekly, bi-weekly, or monthly. We're reliable through Erie's winters and maintain our schedule regardless of weather.",
  },
  {
    question: 'Do you clean lakeside and seasonal properties near Presque Isle?',
    answer: 'Yes. Properties near Presque Isle Bay and the lakefront have distinct seasonal cleaning needs — more sand and moisture tracked in during summer, and heavier salt and winter debris through the colder months. Contact us to discuss your property.',
  },
]

export const metadata: Metadata = {
  title: { absolute: 'House Cleaning in Erie, PA | Black Diamond Cleaning' },
  description:
    'Professional house cleaning in Erie, PA. Reliable service for lakeside homes and Erie County homeowners year-round. 4.9★ on Google. Get your free quote today.',
  alternates: { canonical: `${BASE_URL}/service-areas/erie-pa` },
  openGraph: {
    type: 'website',
    title: { absolute: 'House Cleaning in Erie, PA | Black Diamond Cleaning' },
    description: 'Professional house cleaning in Erie, PA. Reliable service for lakeside homes and Erie County homeowners year-round. 4.9★ on Google. Get your free quote today.',
    url: `${BASE_URL}/service-areas/erie-pa`,
    siteName: 'Black Diamond Cleaning Solutions',
    locale: 'en_US',
    images: [{ url: ogImageUrl('House Cleaning in Erie, PA', 'Reliable Service for Erie County Homes Year-Round'), secureUrl: ogImageUrl('House Cleaning in Erie, PA', 'Reliable Service for Erie County Homes Year-Round'), width: 1200, height: 630, alt: 'House Cleaning Erie PA — Black Diamond Cleaning Solutions', type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning Erie PA | Black Diamond', description: 'Professional house cleaning in Erie, PA. Free quotes.', images: [ogImageUrl('House Cleaning in Erie, PA', 'Reliable Service for Erie County Homes Year-Round')] },
  robots: defaultRobots,
}

export default function EriePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Service Areas', href: '/service-areas/erie-pa' }, { name: 'Erie, PA', href: '/service-areas/erie-pa' }])} />
      <JsonLd data={faqSchema(cityFaqs)} />
      <LocationPageTemplate
        city="Erie"
        state="PA"
        intro="Professional house cleaning and maid services for Erie and Erie County, Pennsylvania. From lakeside homes along Presque Isle to downtown apartments, we provide the consistent quality Erie homeowners expect."
        reasons={[
          'Experience cleaning lakeside and older waterfront homes',
          "Reliable service through Erie's demanding winters",
          'Local trust built on 5-star reviews and word-of-mouth',
        ]}
        nearbyAreas={['Millcreek', 'Harborcreek', 'Fairview', 'North East']}
      >
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">
                Cleaning Services Across Erie, PA
              </h2>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>
                  Erie is Pennsylvania&apos;s only Great Lakes port, situated on the southern shore of Lake Erie at the northwestern corner of the state. The city is the seat of Erie County and the regional center for a population spread across the city proper, the large Millcreek Township suburb to the west, and communities like Harborcreek, Fairview, and North East along the lakeshore. Presque Isle State Park juts into the lake immediately west of the city, giving the area a distinctive natural geography that shapes both its climate and its residential character.
                </p>
                <p>
                  Erie&apos;s winters are the defining environmental reality of living here. Lake-effect snow off Lake Erie is among the most intense in the country — the city regularly ranks among the snowiest in the United States. Road salt and ice-melt products are applied heavily and consistently from late fall through early spring. Salt, sand, and slush tracked through entryways accumulate on floors, in grout lines, and along baseboards in ways that compound over a full winter season. A spring{' '}
                  <Link href="/services/deep-cleaning" className="text-brand-blue hover:underline font-medium">
                    deep cleaning
                  </Link>{' '}
                  after the last road treatment of the season is one of the most common requests from Erie homeowners — a full reset that addresses the accumulation routine maintenance can&apos;t reach.
                </p>
                <p>
                  For Erie homeowners who want consistent upkeep year-round regardless of season, a{' '}
                  <Link href="/services/recurring-cleaning" className="text-brand-blue hover:underline font-medium">
                    recurring cleaning plan
                  </Link>{' '}
                  provides the continuity to manage a home through a climate that varies dramatically from June to January. We maintain our schedule year-round and don&apos;t cancel appointments due to weather.
                </p>
                <p>
                  Gannon University and Mercyhurst University contribute a student-rental and lease-turnover market in the city. Our{' '}
                  <Link href="/services/move-in-move-out-cleaning" className="text-brand-blue hover:underline font-medium">
                    move-in/move-out cleaning service
                  </Link>{' '}
                  handles full transition cleans for rental units near campus — inside appliances, cabinets, bathroom resets, and complete floor care.
                </p>
                <p>
                  Lakeside and Presque Isle–adjacent properties have their own seasonal cleaning needs: more sand and moisture tracked in from the beach during summer months, and the heaviest salt and winter debris from November through April.
                </p>
              </div>
              {/* TODO(owner): Add the specific Erie neighborhoods and suburban areas you actively serve — e.g. "We serve the Bayfront district, Millcreek Township, Harborcreek, and lakeside properties along Route 5." */}
              {/* TODO(owner): If a lakeside homeowner or rental property client has given permission to be referenced, one attributed sentence adds significant credibility here. */}
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
          city="Erie"
          links={[
            { label: 'Erie Regional Chamber & Growth Partnership', href: 'https://eriepa.com' },
            { label: 'VisitErie', href: 'https://www.visiterie.com' },
          ]}
        />
      </LocationPageTemplate>
    </>
  )
}
