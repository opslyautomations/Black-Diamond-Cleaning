import type { Metadata } from 'next'
import Link from 'next/link'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'

const faqs = [
  {
    question: 'How often do I need a deep cleaning?',
    answer: "Most homes benefit from a deep cleaning 1–2 times per year, or as the first cleaning before starting a recurring plan. We'll help you decide what's right for your home.",
  },
  {
    question: 'How is this different from standard cleaning?',
    answer: "Standard cleaning maintains a home. Deep cleaning resets it. Deep cleanings take significantly longer and address areas a standard clean doesn't touch — inside appliances, tile grout, baseboards, inside cabinets, and years of accumulated buildup.",
  },
  {
    question: 'Is the 15% first-time discount available for deep cleaning?',
    answer: "Yes — new customers save 15% on their first Deep Cleaning. Mention the offer when you request your quote.",
  },
  {
    question: 'How long does a deep cleaning take?',
    answer: "A thorough deep cleaning typically takes 4–8 hours depending on the size of the home and how long it has been since the last detailed clean. We'll give you an accurate estimate when you request a quote.",
  },
  {
    question: 'Should I do a deep clean before starting a recurring plan?',
    answer: "Yes — we recommend it. A deep clean establishes a proper baseline for the home. From there, recurring standard cleanings maintain that level efficiently. Starting with standard cleaning on a dirty home means the first few visits are catch-up rather than maintenance.",
  },
  {
    question: 'What is the best time of year for a deep clean in PA or NY?',
    answer: "Spring — after the last road salt of the season — is the most common request. Months of winter salt, sand, and slush leave residue in grout, baseboards, and on floors that a maintenance clean can't fully address. A spring deep clean removes that seasonal accumulation and resets the home going into summer.",
  },
]

export const metadata: Metadata = {
  title: { absolute: 'Deep Cleaning Service | Black Diamond Cleaning' },
  description:
    'Deep cleaning service from Black Diamond — top-to-bottom intensive cleaning across PA & NY. New customers save 15%. 4.9★ on Google. Get a free quote today.',
  alternates: { canonical: `${BASE_URL}/services/deep-cleaning` },
  openGraph: {
    type: 'website',
    title: { absolute: 'Deep Cleaning Service | Black Diamond Cleaning' },
    description:
      'Deep cleaning service from Black Diamond — top-to-bottom intensive cleaning across PA & NY. New customers save 15%. 4.9★ on Google. Get a free quote today.',
    url: `${BASE_URL}/services/deep-cleaning`,
    siteName: 'Black Diamond Cleaning Solutions',
    locale: 'en_US',
    images: [{
      url: ogImageUrl('Deep Cleaning Service', 'The Total Reset Your Home Deserves — PA & NY'),
      secureUrl: ogImageUrl('Deep Cleaning Service', 'The Total Reset Your Home Deserves — PA & NY'),
      width: 1200, height: 630,
      alt: 'Deep Cleaning Service — Black Diamond Cleaning Solutions',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deep Cleaning | Black Diamond Cleaning Solutions',
    description: 'Top-to-bottom deep cleaning across PA & NY. New customers save 15%. Free quotes.',
    images: [ogImageUrl('Deep Cleaning Service', 'The Total Reset Your Home Deserves — PA & NY')],
  },
  robots: defaultRobots,
}

export default function DeepCleaningPage() {
  return (
    <>
      <JsonLd data={serviceSchema('Deep Cleaning', 'A top-to-bottom reset for your home — the intensive clean that tackles every neglected surface, corner, and crevice. New customers save 15% on their first deep cleaning.', 'deep-cleaning')} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: 'Services', href: '/services/deep-cleaning' }, { name: 'Deep Cleaning', href: '/services/deep-cleaning' }])} />
      <ServicePageTemplate
        h1="Deep Cleaning — The Total Reset Your Home Deserves"
        description="Deep Cleaning is a top-to-bottom reset for your home — the intensive clean that tackles every neglected surface, corner, and crevice. Ideal for first-time clients, seasonal refreshes, or any time your home needs serious attention. <strong>New customers save 15% on their first deep cleaning.</strong>"
        included={[
          'Everything in Standard Cleaning, PLUS:',
          'Kitchen: inside oven (including racks and broiler drawer); inside refrigerator; inside dishwasher; cabinet interiors and drawer liners; under and around all appliances; backsplash tile scrubbed',
          'Bathrooms: tile and grout scrubbed; behind and around toilet base; shower door tracks, seals, and runners; chrome polishing; exhaust fan cover dusted',
          'Throughout: all baseboards, door frames, and window sills hand-wiped; ceiling fan blades and light fixture covers; interior windows and glass doors (accessible without ladder)',
          'Detailed vacuuming under and around all furniture; couch cushion areas; closet floors and shelves swept',
          'Wipe walls for visible scuffs and marks throughout',
        ]}
        benefits={[
          { emoji: '🧽', title: 'Years of Buildup Gone', description: "In a single visit, we address every surface a standard clean maintains but doesn't reach." },
          { emoji: '🏡', title: 'The Perfect Reset', description: "Ideal for first-time or seasonal cleans — your home comes back to life from the inside out." },
          { emoji: '💎', title: 'Recommended Starting Point', description: "The best first clean before starting a recurring maintenance plan — establishes a proper baseline." },
        ]}
        faqs={faqs}
        relatedServices={[
          { name: 'Standard Cleaning', href: '/services/standard-cleaning' },
          { name: 'Move-In/Move-Out Cleaning', href: '/services/move-in-move-out-cleaning' },
          { name: 'Recurring Cleaning', href: '/services/recurring-cleaning' },
        ]}
      >
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">How It Works</h2>
                <ol className="space-y-5">
                  {[
                    { step: '1', title: 'Request a Quote', detail: "We'll ask about your home's size and when it was last professionally cleaned to give you an accurate time estimate." },
                    { step: '2', title: 'We Arrive Fully Equipped', detail: 'Our team brings extended supplies for detailed work — grout tools, appliance cleaners, and everything needed for a complete reset.' },
                    { step: '3', title: 'Kitchens and Bathrooms First', detail: "We start with the most intensive areas — inside appliances, grout, fixtures — then work systematically through the rest of the home." },
                    { step: '4', title: 'Walkthrough Before We Leave', detail: "We inspect every area before finishing. If anything doesn't meet standard, we address it on the spot." },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">{item.step}</span>
                      </div>
                      <div>
                        <p className="font-heading font-bold text-brand-navy">{item.title}</p>
                        <p className="text-brand-gray text-sm mt-1">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">Who It&apos;s For</h2>
                <ul className="space-y-4 text-brand-gray leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>New customers starting with us for the first time — deep cleaning sets the baseline that recurring visits maintain</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>Homeowners doing a seasonal reset, typically spring (post-salt) or fall before the holidays</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>Homes that have gone several months without a professional clean and need more than maintenance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>Historic and older homes in PA and NY where surfaces, grout, and woodwork have collected years of buildup</span>
                  </li>
                </ul>
                <div className="mt-8 p-5 bg-brand-light rounded-xl border border-gray-200">
                  <p className="font-heading font-bold text-brand-navy mb-2">PA &amp; NY Spring Deep Clean</p>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    Northeast winters deposit months of road salt, sand, and tracked-in slush on floors, in grout, and along baseboards. A spring deep clean — after the last road treatment of the season — is the most effective way to remove that accumulated residue before starting summer. It&apos;s one of the most common requests across our{' '}
                    <Link href="/service-areas/state-college-pa" className="text-brand-blue hover:underline font-medium">Pennsylvania</Link>
                    {' '}and{' '}
                    <Link href="/service-areas/buffalo-ny" className="text-brand-blue hover:underline font-medium">New York</Link>
                    {' '}service areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ServicePageTemplate>
    </>
  )
}
