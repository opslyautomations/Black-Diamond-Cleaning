import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPageTemplate from '@/components/LocationPageTemplate'
import LocalResources from '@/components/LocalResources'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

const cityFaqs = [
  {
    question: 'Do you serve areas across Monroe County and the greater Finger Lakes region?',
    answer: 'We serve Rochester and surrounding Monroe County communities including Brighton, Pittsford, Irondequoit, and Henrietta. Contact us with your address to confirm service availability.',
  },
  {
    question: 'Do you clean historic homes in Park Avenue and Corn Hill?',
    answer: "Yes. Rochester's Park Avenue corridor and Corn Hill neighborhood have a mix of 19th-century and early-20th-century homes with original hardwood floors, detailed millwork, and plaster walls. Our team is careful with older finishes and surfaces.",
  },
  {
    question: 'Can I set up recurring cleaning for a busy Rochester household?',
    answer: 'Absolutely. We offer weekly, bi-weekly, and monthly recurring plans. Recurring customers receive priority scheduling and a discounted rate vs. one-time service.',
  },
  {
    question: 'Do you handle move-in and move-out cleaning for Rochester renters and buyers?',
    answer: 'Yes. We do move-in and move-out cleaning for rental properties and real estate transactions throughout Monroe County — complete top-to-bottom cleaning including inside appliances, cabinets, and bathrooms.',
  },
  {
    question: "How do Rochester's winters affect your cleaning recommendations?",
    answer: "Like most of Western New York, Rochester gets significant lake-effect snow. Road salt and ice-melt products tracked indoors from November through March accumulate in entryways and on floors. We pay extra attention to these areas during winter months, and recommend a spring deep clean after salt season ends.",
  },
]

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
      <JsonLd data={faqSchema(cityFaqs)} />
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
      >
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">
                Cleaning Services Across Rochester, NY
              </h2>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>
                  Rochester is the seat of Monroe County in the Finger Lakes region of Western New York — a city shaped by its legacy as a center of precision manufacturing and optics, most associated globally with the Eastman Kodak Company and the George Eastman Museum. The city&apos;s residential character is defined by a mix of early-20th-century neighborhoods close to downtown and more recent suburban development in Monroe County communities like Brighton, Pittsford, Irondequoit, and Henrietta.
                </p>
                <p>
                  Rochester&apos;s most distinctive residential areas — Park Avenue, Corn Hill, and the East End — contain significant concentrations of 19th-century and early-20th-century homes with original hardwood floors, detailed millwork, plaster walls, and character details that newer construction lacks. Cleaning these homes well requires care: the right products for older wood finishes, gentle technique around plaster and painted woodwork, and particular attention to the corners and details that collect years of buildup. A thorough{' '}
                  <Link href="/services/deep-cleaning" className="text-brand-blue hover:underline font-medium">
                    deep cleaning
                  </Link>{' '}
                  is often the right starting point — bringing those surfaces back to a proper baseline before routine maintenance takes over.
                </p>
                <p>
                  For Monroe County households — families in Brighton and Pittsford, professionals in the East End, retirees in Irondequoit — a{' '}
                  <Link href="/services/recurring-cleaning" className="text-brand-blue hover:underline font-medium">
                    recurring cleaning plan
                  </Link>{' '}
                  is the practical solution to keeping a home consistently maintained without spending weekends cleaning. Bi-weekly service is the most popular cadence among Rochester-area households.
                </p>
                <p>
                  Rochester&apos;s university population — at RIT in Henrietta and the University of Rochester on the city&apos;s south side — generates ongoing demand for{' '}
                  <Link href="/services/move-in-move-out-cleaning" className="text-brand-blue hover:underline font-medium">
                    move-in/move-out cleaning
                  </Link>{' '}
                  for student housing and rental properties near both campuses. We handle full transition cleans: inside appliances, cabinets, bathroom resets, and floor-to-ceiling detail work.
                </p>
                <p>
                  Like most of the Great Lakes region, Rochester gets significant lake-effect precipitation — from both Lake Ontario to the north and the broader Western New York weather pattern. Road salt tracked indoors from November through March is a consistent reality, and a spring deep clean after salt season is a popular request among Rochester homeowners maintaining original floors.
                </p>
              </div>
              {/* TODO(owner): Add the specific Rochester neighborhoods and Monroe County communities you actively serve — e.g. "We serve Park Avenue, Corn Hill, Brighton, Pittsford, Irondequoit, and Henrietta." */}
              {/* TODO(owner): If a Rochester-area homeowner or rental property client has given permission to be referenced, one attributed sentence here is worth more than a full paragraph of generic copy. */}
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
          city="Rochester"
          links={[
            { label: 'Greater Rochester Chamber of Commerce', href: 'https://www.greaterrochesterchamber.com' },
            { label: 'Visit Rochester', href: 'https://www.visitrochester.com' },
          ]}
        />
      </LocationPageTemplate>
    </>
  )
}
