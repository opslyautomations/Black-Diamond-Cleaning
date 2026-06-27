import type { Metadata } from 'next'
import Link from 'next/link'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'

const faqs = [
  {
    question: "What's included in a deep cleaning that a standard clean doesn't cover?",
    answer:
      "A deep clean adds everything intensive and periodic: inside the oven (racks and broiler drawer), inside the refrigerator and dishwasher, cabinet and drawer interiors, under and around appliances, scrubbed tile grout, hand-wiped baseboards and door frames, ceiling fan blades, light-fixture covers, and interior windows. It's the reset that reaches built-up grease, grime, and dust a maintenance clean is not designed to remove.",
  },
  {
    question: 'How long does a deep cleaning take?',
    answer:
      "A thorough deep clean usually takes 4 to 8 hours depending on the size of the home and how long it's been since the last detailed clean. A small apartment may run 3 to 5 hours; a larger multi-story home can take 6 to 10 or more. A team works faster than a single cleaner. We give an accurate estimate when you request a quote.",
  },
  {
    question: 'How often do I need a deep cleaning?',
    answer:
      "Most homes benefit from a deep clean once or twice a year, plus as the first cleaning before starting a recurring plan. Homes with pets, kids, or high traffic may want one quarterly; well-maintained homes on a recurring schedule may only need one every six to twelve months. We'll help you decide what's right based on how your home lives.",
  },
  {
    question: 'Is the 15% first-time discount available for deep cleaning?',
    answer:
      "Yes. New customers save 15% on their first Deep Cleaning. Just mention the offer when you request your quote and we'll apply it. The discount is for new customers and applies to the first deep clean specifically — it's the most common way clients start with us before moving onto a maintenance schedule.",
  },
  {
    question: 'Should I deep clean before starting a recurring plan?',
    answer:
      "We recommend it. A deep clean establishes a proper baseline; from there, recurring standard cleanings maintain that level efficiently. Starting recurring service on a home with heavy buildup means the first several visits are catch-up rather than maintenance — slower and less satisfying. One deep clean up front makes every visit afterward faster and more consistent.",
  },
  {
    question: 'When is the best time of year for a deep clean in PA or NY?',
    answer:
      "Spring — after the last road salt of the season — is the most common request. Months of winter salt, sand, and slush leave residue in grout, along baseboards, and on floors that a maintenance clean can't fully address. A spring deep clean removes that seasonal accumulation and resets the home going into summer. Pre-holiday fall deep cleans are the second most popular window.",
  },
  {
    question: 'Do you clean inside the oven, refrigerator, and cabinets?',
    answer:
      'Yes — all three are included in a deep clean. Inside the oven covers the racks and broiler drawer; the refrigerator interior is cleaned out and wiped down; and cabinet interiors and drawer liners are addressed. These appliance and storage interiors are exactly the high-effort areas a standard clean leaves alone, which is a large part of what makes a deep clean worth booking.',
  },
  {
    question: 'Can you remove grout staining and hard-water buildup completely?',
    answer:
      "We scrub tile and grout to lift trapped soil and treat hard-water scale on glass, chrome, and showerheads with descalers. In most homes the improvement is dramatic. Be aware, though, that grout with deep-set staining or failed sealant, and glass that's been etched by long-term mineral deposits, may not return fully to original condition — we'll be honest about what's realistic for your surfaces.",
  },
  {
    question: 'Do you disinfect, or just clean?',
    answer:
      'A deep clean is a thorough cleaning — soap, scrubbing, and removal of dirt and grime, which the CDC notes removes most germs from surfaces on its own. We can also disinfect high-touch surfaces on request. Per <a href="https://www.cdc.gov/hygiene/about/when-and-how-to-clean-and-disinfect-your-home.html" target="_blank" rel="noopener noreferrer" class="text-brand-blue underline">CDC guidance on cleaning and disinfecting your home</a>, routine disinfection usually isn\'t necessary unless someone is ill or immunocompromised — so we focus on a genuinely deep clean and add disinfection where it\'s actually useful.',
  },
  {
    question: 'Do you handle post-renovation or construction cleanup?',
    answer:
      "Post-construction cleaning is a specialized job — fine drywall dust gets into every cavity and vent and needs multiple HEPA passes and containment, beyond a standard deep clean. We can take on lighter post-renovation resets; for heavy post-build dust, tell us the scope when you request a quote so we can give you an accurate estimate rather than under-quoting the work.",
  },
]

export const metadata: Metadata = {
  title: { absolute: 'Deep Cleaning Service | Black Diamond Cleaning' },
  description:
    'Top-to-bottom deep cleaning across PA & NY — inside appliances, grout, baseboards & years of buildup. New customers save 15%. 4.9★ on Google. Free quote.',
  alternates: { canonical: `${BASE_URL}/services/deep-cleaning` },
  openGraph: {
    type: 'website',
    title: { absolute: 'Deep Cleaning Service | Black Diamond Cleaning' },
    description:
      'Top-to-bottom deep cleaning across PA & NY — inside appliances, grout, baseboards & years of buildup. New customers save 15%. 4.9★ on Google. Free quote.',
    url: `${BASE_URL}/services/deep-cleaning`,
    siteName: 'Black Diamond Cleaning Solutions',
    locale: 'en_US',
    images: [
      {
        url: ogImageUrl('Deep Cleaning Service', 'The Total Reset Your Home Deserves — PA & NY'),
        secureUrl: ogImageUrl('Deep Cleaning Service', 'The Total Reset Your Home Deserves — PA & NY'),
        width: 1200,
        height: 630,
        alt: 'Deep Cleaning Service — Black Diamond Cleaning Solutions',
        type: 'image/png',
      },
    ],
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
      <JsonLd
        data={serviceSchema(
          'Deep Cleaning',
          'A top-to-bottom intensive reset that reaches inside appliances, scrubs grout, hand-wipes baseboards, and removes years of accumulated buildup. New customers save 15% on their first deep cleaning.',
          'deep-cleaning',
        )}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Services', href: '/services' },
          { name: 'Deep Cleaning', href: '/services/deep-cleaning' },
        ])}
      />
      <ServicePageTemplate
        h1="Deep Cleaning — The Total Reset Your Home Deserves"
        description={`A Deep Cleaning is the intensive, top-to-bottom reset that reaches everything routine cleaning maintains but never gets to — inside the oven and refrigerator, scrubbed grout, hand-wiped baseboards, behind and under appliances, and the years of buildup that quietly accumulate in a home. It's the right first clean before starting a maintenance plan, the seasonal refresh most Northeast homes need after winter, and the service to book when a home has gone months without detailed attention. <strong>New customers save 15% on their first deep cleaning.</strong> Mention the offer when you request a quote.`}
        included={[
          'Everything in a Standard Cleaning, PLUS:',
          'Kitchen: inside the oven (racks and broiler drawer); inside the refrigerator; inside the dishwasher; cabinet and drawer interiors; under and around all appliances; backsplash tile scrubbed; range hood degreased',
          'Bathrooms: tile and grout scrubbed; behind and around the toilet base; shower door tracks, seals, and runners; chrome and fixtures polished; exhaust fan covers dusted',
          'Throughout: all baseboards, door frames, and window sills hand-wiped; ceiling fan blades and light-fixture covers cleaned; interior windows and glass doors (accessible without a ladder)',
          'Detailed vacuuming under and around furniture; couch cushion areas; closet floors and shelves swept; walls spot-wiped for visible scuffs',
        ]}
        benefits={[
          {
            emoji: '🧽',
            title: 'Years of Buildup Gone',
            description:
              'In a single visit we address every surface a standard clean maintains but never reaches — inside appliances, grout, baseboards, and beyond.',
          },
          {
            emoji: '🏡',
            title: 'The Perfect Baseline',
            description:
              'The recommended first clean before starting a recurring plan — establishes the level that standard maintenance visits then hold efficiently.',
          },
          {
            emoji: '❄️',
            title: 'Spring Deep Clean for PA & NY',
            description:
              'After months of winter salt, sand, and tracked-in slush, a spring deep clean removes that accumulated residue before summer begins.',
          },
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
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-brand-navy">Request a Quote</p>
                      <p className="text-brand-gray text-sm mt-1">
                        We ask about your home&apos;s size and when it was last professionally cleaned to estimate the time
                        accurately.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-brand-navy">We Arrive with Extended Supplies</p>
                      <p className="text-brand-gray text-sm mt-1">
                        Degreasers, grout brushes, appliance-safe and stainless-safe cleaners, descalers, extendable dusters, and
                        HEPA vacuums — everything a full reset needs.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-brand-navy">Kitchens and Bathrooms First</p>
                      <p className="text-brand-gray text-sm mt-1">
                        We start with the most intensive areas — inside appliances, grout, fixtures — then work systematically
                        through the rest of the home.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-brand-navy">Walkthrough Before We Leave</p>
                      <p className="text-brand-gray text-sm mt-1">
                        We inspect every area; anything that doesn&apos;t meet standard is corrected on the spot, backed by our
                        100% Satisfaction Guarantee.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">The Buildup We Actually Remove</h2>
                <ul className="space-y-4 text-brand-gray leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>
                      <strong className="text-brand-navy">Baked-on oven grease and range-hood film</strong> — broken down with
                      degreasers and dwell time, not a quick wipe
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>
                      <strong className="text-brand-navy">Grout discoloration</strong> in kitchen and bath tile — scrubbed to lift
                      trapped soil (note: grout can be substantially improved, but deep staining or failed sealant won&apos;t always
                      return to original color)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>
                      <strong className="text-brand-navy">Hard-water scale</strong> on glass, chrome, and showerheads — common on
                      Northeast municipal and well water; treated with descaling, not abrasion
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>
                      <strong className="text-brand-navy">High-ledge and fan-blade dust</strong>, behind and under appliances, and
                      inside cabinets and drawers
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>
                      <strong className="text-brand-navy">Winter salt and grit residue</strong> tracked into entryways, grout lines,
                      and along baseboards over a full PA/NY season
                    </span>
                  </li>
                </ul>

                <div className="mt-8 p-5 bg-brand-light rounded-xl border border-gray-200">
                  <p className="font-heading font-bold text-brand-navy mb-2">PA &amp; NY Spring Deep Clean</p>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    Northeast winters deposit months of road salt, sand, and tracked-in slush on floors, in grout, and along
                    baseboards. A spring deep clean — after the last road treatment of the season — is the most effective way to
                    remove that accumulated residue before summer, and it&apos;s one of the most common requests across our{' '}
                    <Link href="/service-areas/state-college-pa" className="text-brand-blue hover:underline font-medium">
                      Pennsylvania
                    </Link>{' '}
                    and{' '}
                    <Link href="/service-areas/buffalo-ny" className="text-brand-blue hover:underline font-medium">
                      New York
                    </Link>{' '}
                    service areas.
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
