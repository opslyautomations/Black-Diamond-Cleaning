import type { Metadata } from 'next'
import Link from 'next/link'
import LocationPageTemplate from '@/components/LocationPageTemplate'
import LocalResources from '@/components/LocalResources'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'

const cityFaqs = [
  {
    question: "Do you clean historic homes in Buffalo's Elmwood Village and Allentown neighborhoods?",
    answer: "Yes. Buffalo has some of Western New York's most architecturally significant residential stock — late-19th and early-20th century homes with original hardwood floors, ornate woodwork, and plaster walls. Our team is experienced with older surfaces and uses methods appropriate for historic interiors.",
  },
  {
    question: 'What parts of Western New York do you serve?',
    answer: 'We serve Buffalo and surrounding Erie County, NY communities including Amherst, Cheektowaga, Tonawanda, and West Seneca. Contact us with your address to confirm service availability.',
  },
  {
    question: 'How do you manage heavy snow-season entryway and floor care?',
    answer: "Buffalo winters are among the heaviest in the Northeast. Snow, road salt, and ice-melt chemicals tracked indoors from November through March cause real damage to floors if not addressed consistently. Our winter-season cleanings pay close attention to entry areas and floor surfaces where salt residue accumulates.",
  },
  {
    question: 'Can I set up recurring cleaning in Buffalo?',
    answer: 'Yes. Weekly, bi-weekly, and monthly recurring plans are available across the Buffalo metro area. Recurring clients receive discounted rates and priority scheduling.',
  },
  {
    question: 'Do you offer move-out cleaning for Buffalo renters and landlords?',
    answer: 'Yes. We handle move-in and move-out cleaning for rental units, Airbnb and short-term rental properties, and home sales across Erie County, NY — a complete top-to-bottom clean that meets deposit-return and listing-ready standards.',
  },
]

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
      <JsonLd data={faqSchema(cityFaqs)} />
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
      >
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">
                Cleaning Services Across Buffalo, NY
              </h2>
              <div className="space-y-4 text-brand-gray leading-relaxed">
                <p>
                  Buffalo is the largest city in Western New York and the seat of Erie County, NY, situated on the eastern shore of Lake Erie at the head of the Niagara River. The city is one of the most architecturally rich in the Northeast — neighborhoods like the Elmwood Village, Allentown, Delaware District, and the revitalized Cobblestone District contain concentrations of late-19th and early-20th century homes, many of them original to the city&apos;s peak-prosperity era. North Buffalo bungalows, Tudor revivals in the Parkside neighborhood, and the craftsman stock of West Seneca and Amherst round out a housing market defined by age and character.
                </p>
                <p>
                  Cleaning historic Buffalo homes requires attention to surfaces that newer construction doesn&apos;t have: original hardwood floors, plaster walls, ornate woodwork around windows and staircases, and period details in older kitchens and bathrooms. Our{' '}
                  <Link href="/services/deep-cleaning" className="text-brand-blue hover:underline font-medium">
                    deep cleaning service
                  </Link>{' '}
                  is a natural starting point — tackling the buildup behind routinely cleaned surfaces, baseboards, grout, and inside appliances, with products and technique appropriate for older finishes.
                </p>
                <p>
                  Buffalo winters are world-class in their intensity. Lake-effect snow off Lake Erie, combined with lake-effect events from Lake Ontario, makes Erie County, NY one of the snowiest regions in the contiguous United States. Road salt and ice-melt tracked indoors from November through March is both consistent and damaging to floors if not addressed. Our winter-season{' '}
                  <Link href="/services/standard-cleaning" className="text-brand-blue hover:underline font-medium">
                    standard cleaning
                  </Link>{' '}
                  pays particular attention to entryways and transition areas; a{' '}
                  <Link href="/services/deep-cleaning" className="text-brand-blue hover:underline font-medium">
                    spring deep clean
                  </Link>{' '}
                  after road treatment ends removes the seasonal accumulation.
                </p>
                <p>
                  For Erie County homeowners who want consistent year-round maintenance, a{' '}
                  <Link href="/services/recurring-cleaning" className="text-brand-blue hover:underline font-medium">
                    recurring cleaning plan
                  </Link>{' '}
                  is the practical solution. Buffalo&apos;s short-term rental market — driven by proximity to Niagara Falls and major events — also generates strong demand for{' '}
                  <Link href="/services/move-in-move-out-cleaning" className="text-brand-blue hover:underline font-medium">
                    move-in/move-out and turnover cleaning
                  </Link>
                  .
                </p>
              </div>
              {/* TODO(owner): Add the specific Buffalo neighborhoods and suburbs you actively serve — e.g. "We serve the Elmwood Village, North Buffalo, Amherst, Cheektowaga, and the Tonawandas." */}
              {/* TODO(owner): If a short-term rental host or historic-home owner has given permission to be referenced, one attributed sentence adds more credibility than several paragraphs of generic copy. */}
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
          city="Buffalo"
          links={[
            { label: 'Buffalo Niagara Partnership', href: 'https://www.thepartnership.org' },
            { label: 'Visit Buffalo Niagara', href: 'https://www.visitbuffaloniagara.com' },
          ]}
        />
      </LocationPageTemplate>
    </>
  )
}
