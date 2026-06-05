import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPageTemplate from '@/components/LocationPageTemplate'
import LocalResources from '@/components/LocalResources'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

const cityFaqs = [
  {
    question: 'Do you serve rental properties across the Harrisburg region?',
    answer: 'Yes. We work with individual landlords and property managers in Dauphin and Cumberland counties for move-in and move-out cleaning, as well as recurring unit turnover service.',
  },
  {
    question: 'What counties in the Harrisburg area do you cover?',
    answer: 'We serve the Harrisburg metro area including communities in Dauphin and Cumberland counties. Contact us with your address to confirm service availability.',
  },
  {
    question: 'Can you accommodate busy professional and government-worker schedules?',
    answer: "Yes. We offer early-morning, evening, and weekend appointment windows for households that can't easily be home during standard business hours. Let us know your preference when requesting a quote.",
  },
  {
    question: 'Do you clean downtown and Midtown Harrisburg condos and apartments?',
    answer: "Yes. Condos, downtown apartments, and row homes near the Broad Street Market and Capitol complex are all within our service area. We're familiar with the practical aspects of urban cleaning — tight parking, elevator buildings, and smaller-footprint layouts.",
  },
  {
    question: 'Do you offer commercial cleaning for small offices in Harrisburg?',
    answer: 'Yes. We serve small offices and professional suites in the capital region, with after-hours and weekend availability so we can clean when your team is out.',
  },
]

export const metadata: Metadata = {
  title: { absolute: 'House Cleaning in Harrisburg, PA | Black Diamond' },
  description:
    'Professional house cleaning in Harrisburg, PA. Trusted by Dauphin County homeowners and property managers. 4.9★ on Google. Get your free quote today.',
  alternates: { canonical: `${BASE_URL}/service-areas/harrisburg-pa` },
  openGraph: {
    type: 'website',
    title: { absolute: 'House Cleaning in Harrisburg, PA | Black Diamond' },
    description: 'Professional house cleaning in Harrisburg, PA. Trusted by Dauphin County homeowners and property managers. 4.9★ on Google. Get your free quote today.',
    url: `${BASE_URL}/service-areas/harrisburg-pa`,
    siteName: 'Black Diamond Cleaning Solutions',
    locale: 'en_US',
    images: [{ url: ogImageUrl("House Cleaning in Harrisburg, PA", "Trusted by Pennsylvania's Capital Region"), secureUrl: ogImageUrl("House Cleaning in Harrisburg, PA", "Trusted by Pennsylvania's Capital Region"), width: 1200, height: 630, alt: 'House Cleaning Harrisburg PA — Black Diamond Cleaning Solutions', type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', title: 'House Cleaning Harrisburg PA | Black Diamond', description: 'Professional house cleaning in Harrisburg, PA. Free quotes.', images: [ogImageUrl("House Cleaning in Harrisburg, PA", "Trusted by Pennsylvania's Capital Region")] },
  robots: defaultRobots,
}

export default function HarrisburgPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Service Areas', href: '/service-areas/harrisburg-pa' }, { name: 'Harrisburg, PA', href: '/service-areas/harrisburg-pa' }])} />
      <JsonLd data={faqSchema(cityFaqs)} />
      <LocationPageTemplate
        city="Harrisburg"
        state="PA"
        intro="Trusted cleaning solutions for Pennsylvania's capital region and Dauphin County. Harrisburg homeowners, state employees, and downtown condo residents rely on Black Diamond for a consistently premium clean."
        reasons={[
          'Familiar with downtown condos and historic row homes',
          'Discreet, professional service for busy professionals',
          'Trusted by Dauphin County property managers',
        ]}
        nearbyAreas={['Hershey', 'Camp Hill', 'Mechanicsburg', 'Lemoyne']}
      >
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">
                Cleaning Services Across Harrisburg, PA
              </h2>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>
                  Harrisburg is Pennsylvania&apos;s state capital and the seat of Dauphin County, situated on the eastern bank of the Susquehanna River. The city is the center of a three-county metro area spanning Dauphin, Cumberland, and Perry counties, with a residential character that ranges from historic row homes in Midtown and Allison Hill to newer suburban development in communities like Camp Hill, Mechanicsburg, and Lemoyne across the river.
                </p>
                <p>
                  The capital region draws a disproportionate share of professionals — state government employees, contractors, lobbyists, and the legal and business community that orbits the Capitol complex and the Broad Street Market corridor. For those households, a{' '}
                  <Link href="/services/recurring-cleaning" className="text-brand-blue hover:underline font-medium">
                    recurring cleaning plan
                  </Link>{' '}
                  isn&apos;t a luxury — it&apos;s a practical solution to managing a demanding schedule without letting home maintenance fall behind. Weekly and bi-weekly plans are both available, with flexible scheduling including early-morning and weekend windows.
                </p>
                <p>
                  Property management is a meaningful part of the Harrisburg market. The region has a strong mix of owned and rented housing, and landlords managing downtown condos, Midtown apartments, and row homes near the Capitol regularly need{' '}
                  <Link href="/services/move-in-move-out-cleaning" className="text-brand-blue hover:underline font-medium">
                    move-in/move-out cleaning
                  </Link>{' '}
                  that consistently meets the standard required for deposit returns and re-listing.
                </p>
                <p>
                  The small-office and professional-suite market around the Capitol corridor is also a natural fit for our{' '}
                  <Link href="/services/commercial-cleaning" className="text-brand-blue hover:underline font-medium">
                    commercial cleaning service
                  </Link>
                  . We serve small offices, law offices, consulting firms, and professional suites with after-hours and weekend availability so cleaning happens when staff aren&apos;t present.
                </p>
                <p>
                  Central Pennsylvania winters bring road treatment through the season, and Harrisburg&apos;s location along the Susquehanna corridor means the city sees its share of ice and snow. Salt and sand tracked through entryways from November through March accumulate on floors and in grout lines — a late-spring{' '}
                  <Link href="/services/deep-cleaning" className="text-brand-blue hover:underline font-medium">
                    deep cleaning
                  </Link>{' '}
                  is a practical way to address that seasonal accumulation.
                </p>
              </div>
              {/* TODO(owner): Add the specific neighborhoods and districts in Harrisburg and the surrounding counties you actively serve — e.g. "We serve Midtown, Allison Hill, Camp Hill, and the Hershey area." */}
              {/* TODO(owner): If a property manager or professional-household client has given permission to be referenced, one attributed sentence here adds substantial credibility. */}
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
          city="Harrisburg"
          links={[
            { label: 'Harrisburg Regional Chamber & CREDC', href: 'https://www.harrisburgregionalchamber.org' },
            { label: 'Visit Hershey & Harrisburg', href: 'https://www.visithersheyharrisburg.org' },
          ]}
        />
      </LocationPageTemplate>
    </>
  )
}
