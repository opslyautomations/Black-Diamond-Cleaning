import type { Metadata } from 'next'
import Link from 'next/link'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'

const faqs = [
  {
    question: "What's included in a standard house cleaning?",
    answer:
      "A standard clean covers the whole home's everyday upkeep: kitchen counters, appliance exteriors, stovetop, sink, and microwave; bathrooms cleaned and sanitized including toilets, showers, sinks, and mirrors; dusting of reachable surfaces; vacuuming and mopping all floors; and wiping high-touch surfaces like switches and doorknobs. It maintains a home that's already in good shape rather than resetting one with heavy buildup.",
  },
  {
    question: 'How is a standard cleaning different from a deep cleaning?',
    answer:
      "A standard clean maintains; a deep clean resets. Standard visits handle routine surfaces and floors and are designed for homes kept up regularly. A deep clean is far more intensive — inside the oven, refrigerator, and cabinets, scrubbed grout, hand-wiped baseboards, and years of accumulated buildup — and takes significantly longer. Most clients deep clean once or twice a year and use standard cleans in between.",
  },
  {
    question: 'How long does a standard cleaning take?',
    answer:
      'For a maintained average three-bedroom home, a two-person team usually finishes in about 1.5 to 3 hours. The exact time depends on the size of the home, the layout, how many bathrooms there are, and how much general tidying is needed. We give you an accurate estimate when you request a quote so there are no surprises.',
  },
  {
    question: 'Do I need a deep cleaning before starting standard cleanings?',
    answer:
      "If your home hasn't had a professional clean in several months, we usually recommend it. A standard visit is built to maintain a baseline efficiently, not to remove months of built-up grime, grease, and dust in one pass. Starting with a deep clean means your first standard visits are true maintenance instead of catch-up — which keeps every visit faster and more consistent.",
  },
  {
    question: 'How often should I book a standard cleaning?',
    answer:
      "It depends on your household. Homes with kids, pets, or heavy foot traffic often do best weekly or bi-weekly; quieter homes are well served monthly. There's no single right answer — we'll help you match a cadence to how your home actually lives. Many clients put standard cleanings on a recurring schedule so they never have to think about booking each time.",
  },
  {
    question: 'Do you bring your own supplies and equipment?',
    answer:
      "Yes. Our team arrives fully equipped with all cleaning products, microfiber cloths, and HEPA-filter vacuums — you don't need to provide anything. If you'd prefer we use specific products you keep at home, or you have surfaces that need a particular cleaner, just let us know when you book and we'll work with it.",
  },
  {
    question: 'Are your cleaning products safe for kids and pets?',
    answer:
      "They can be. On request we clean with EPA Safer Choice–certified products, which are reviewed by the EPA so that every ingredient meets strict human-health and environmental criteria — a safer option around children, pets, and anyone with sensitivities. If you have specific allergies or product preferences, tell us at booking and we'll accommodate them.",
  },
  {
    question: 'Do I need to be home during the cleaning?',
    answer:
      "No. Many clients give us access instructions and go about their day — work, errands, or out of the house entirely. Others prefer to be home for the first visit and step out afterward. Whatever you're comfortable with works. We're licensed and insured, and on a recurring plan you'll typically have the same trusted team each time.",
  },
  {
    question: 'Will I get the same cleaners each time?',
    answer:
      "On a recurring schedule, we aim to send the same team consistently. The same cleaners learn your home, your preferences, and the spots that matter most to you, which makes every visit faster and more thorough. For one-time standard cleanings we send a trained team working from the same checklist, so the standard stays the same regardless of who's assigned.",
  },
  {
    question: 'Can I add tasks like inside the oven or fridge to a standard clean?',
    answer:
      'Yes — those are deep-cleaning tasks, but you can add them to any standard visit as extras. Inside the oven, inside the refrigerator, interior windows, or hand-wiping baseboards can be requested à la carte when you book. If you find you\'re adding several extras regularly, a periodic <a href="/services/deep-cleaning" class="text-brand-blue underline">Deep Cleaning</a> is usually the better value.',
  },
  {
    question: 'Which areas do you serve?',
    answer:
      "We're a mobile service covering Pennsylvania and New York: State College, Scranton, Altoona, Harrisburg, Williamsport, and Erie in PA, and Buffalo, Rochester, and Syracuse in NY. If you're near one of those areas, request a quote and we'll confirm coverage for your address.",
  },
]

export const metadata: Metadata = {
  title: { absolute: 'Standard Cleaning Service | Black Diamond Cleaning' },
  description:
    'Standard house cleaning across PA & NY — a consistent whole-home maintenance clean by a trained, insured team. 4.9★ on Google. Get a free quote today.',
  alternates: { canonical: `${BASE_URL}/services/standard-cleaning` },
  openGraph: {
    type: 'website',
    title: { absolute: 'Standard Cleaning Service | Black Diamond Cleaning' },
    description:
      'Standard house cleaning across PA & NY — a consistent whole-home maintenance clean by a trained, insured team. 4.9★ on Google. Get a free quote today.',
    url: `${BASE_URL}/services/standard-cleaning`,
    siteName: 'Black Diamond Cleaning Solutions',
    locale: 'en_US',
    images: [
      {
        url: ogImageUrl('Standard House Cleaning', 'Consistent Quality Every Visit — PA & NY'),
        secureUrl: ogImageUrl('Standard House Cleaning', 'Consistent Quality Every Visit — PA & NY'),
        width: 1200,
        height: 630,
        alt: 'Standard House Cleaning — Black Diamond Cleaning Solutions',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Standard Cleaning | Black Diamond Cleaning Solutions',
    description: 'Professional standard house cleaning across PA & NY. 4.9★ Google. Free quotes.',
    images: [ogImageUrl('Standard House Cleaning', 'Consistent Quality Every Visit — PA & NY')],
  },
  robots: defaultRobots,
}

export default function StandardCleaningPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          'Standard Cleaning',
          'A consistent, whole-home maintenance clean that handles everyday dust, kitchen and bathroom grime, floors, and high-touch surfaces on a repeating schedule.',
          'standard-cleaning',
        )}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Services', href: '/services' },
          { name: 'Standard Cleaning', href: '/services/standard-cleaning' },
        ])}
      />
      <ServicePageTemplate
        h1="Standard Cleaning — Consistent, Whole-Home Upkeep"
        description={`A Standard Cleaning is the maintenance clean that keeps an already-in-shape home consistently fresh: the recurring whole-home routine that handles everyday dust, kitchen and bathroom grime, floors, and the high-touch surfaces a household uses every day. It is the workhorse service most clients book on a repeating schedule. If your home hasn't had a professional clean in several months, we'll usually recommend starting with a one-time <a href="/services/deep-cleaning" class="underline">Deep Cleaning</a> to set a baseline first — a standard visit maintains a clean home efficiently, but it isn't built to remove months of accumulated buildup in a single pass.`}
        included={[
          'Kitchen: countertops, backsplash, and appliance exteriors wiped; stovetop and cooktop cleaned; sink scrubbed and sanitized; microwave inside and out; cabinet fronts spot-cleaned; floor vacuumed and mopped',
          'Bathrooms: toilets cleaned and sanitized inside and out including the base; showers, tubs, and surrounds wiped; glass and chrome cleaned; sinks, vanities, and mirrors; floors vacuumed and mopped; high-touch surfaces sanitized',
          'Bedrooms & Living Areas: all reachable surfaces dusted (ledges, sills, picture frames); beds made or linens changed if left out; carpets vacuumed; hard floors mopped; mirrors and glass cleaned',
          'Throughout: high-touch surfaces wiped — light switches, doorknobs, handrails, banisters; trash emptied and liners replaced; cobwebs removed from reachable corners',
        ]}
        benefits={[
          {
            emoji: '✅',
            title: 'Checklist-Driven Consistency',
            description:
              'Every cleaner works from the same detailed checklist — the result is the same on visit one and visit twenty, not just the first time.',
          },
          {
            emoji: '🧹',
            title: 'Right Equipment & Products',
            description:
              'HEPA-filter vacuums, color-separated microfiber cloths for kitchen vs. bathroom, and EPA Safer Choice–certified products available on request.',
          },
          {
            emoji: '📅',
            title: 'Built for a Recurring Plan',
            description:
              'Most clients move from their first clean onto a weekly, bi-weekly, or monthly schedule with the same trusted team each visit.',
          },
        ]}
        faqs={faqs}
        relatedServices={[
          { name: 'Deep Cleaning', href: '/services/deep-cleaning' },
          { name: 'Recurring Cleaning', href: '/services/recurring-cleaning' },
        ]}
      >
        <section className="section-padding bg-white">
          <div className="section-container">
            {/* Not-included note */}
            <div className="mb-10 p-5 bg-amber-50 rounded-xl border border-amber-200 max-w-3xl mx-auto">
              <p className="font-heading font-bold text-brand-navy mb-1">What a Standard Clean Does Not Include</p>
              <p className="text-brand-gray text-sm leading-relaxed">
                A standard clean intentionally does not include the intensive, periodic tasks — inside the oven, refrigerator, or
                cabinets; hand-wiping every baseboard; scrubbing tile grout; or interior windows and wall washing. Those belong to a{' '}
                <Link href="/services/deep-cleaning" className="text-brand-blue hover:underline font-medium">
                  Deep Cleaning
                </Link>{' '}
                and can be added to any visit as extras on request.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">How We Work</h2>
                <ol className="space-y-5">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-brand-navy">Trained, Checklist-Driven Team</p>
                      <p className="text-brand-gray text-sm mt-1">
                        Every cleaner works from the same detailed checklist, so the result is the same on visit one and visit twenty
                        — not just the first time.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-brand-navy">Typical Timing</p>
                      <p className="text-brand-gray text-sm mt-1">
                        A maintained average three-bedroom home usually takes a two-person team roughly 1.5–3 hours, depending on
                        size, layout, and condition. We give an accurate estimate when you request a quote.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-brand-navy">The Right Tools</p>
                      <p className="text-brand-gray text-sm mt-1">
                        We use microfiber cloths (color-separated for kitchen vs. bathroom to avoid cross-contamination) and
                        HEPA-filter vacuums. On request, we clean with EPA Safer Choice–certified products that are safer around
                        children, pets, and people with sensitivities.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-brand-navy">Consistency You Can Keep</p>
                      <p className="text-brand-gray text-sm mt-1">
                        Most clients move from their first clean onto a repeating schedule. See{' '}
                        <Link href="/services/recurring-cleaning" className="text-brand-blue hover:underline">
                          Recurring Cleaning
                        </Link>{' '}
                        to choose a weekly, bi-weekly, or monthly cadence with the same team each visit.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">Who It&apos;s For</h2>
                <ul className="space-y-4 text-brand-gray leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>Homes already in good shape that need dependable upkeep, not a reset</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>Busy households, families, and professionals who want consistent results without doing it themselves</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>Clients on (or moving toward) a recurring plan, where standard visits maintain a deep-clean baseline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>
                      Anyone in our{' '}
                      <Link
                        href="/service-areas/state-college-pa"
                        className="text-brand-blue hover:underline font-medium"
                      >
                        house cleaning in State College, PA
                      </Link>{' '}
                      and{' '}
                      <Link
                        href="/service-areas/buffalo-ny"
                        className="text-brand-blue hover:underline font-medium"
                      >
                        house cleaning in Buffalo, NY
                      </Link>{' '}
                      service areas who wants a trained, insured team they can rely on
                    </span>
                  </li>
                </ul>

                {/* Authority link note */}
                <div className="mt-8 p-5 bg-brand-light rounded-xl border border-gray-200">
                  <p className="font-heading font-bold text-brand-navy mb-2">Prefer Safer Cleaning Products?</p>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    We can use EPA Safer Choice–certified cleaners on request. Learn what the certification means on the{' '}
                    <a
                      href="https://www.epa.gov/saferchoice/learn-about-safer-choice-label"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:underline font-medium"
                    >
                      EPA Safer Choice label
                    </a>{' '}
                    page.
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
