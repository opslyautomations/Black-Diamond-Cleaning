import type { Metadata } from 'next'
import Link from 'next/link'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'

const faqs = [
  {
    question: "What's included in a move-out cleaning?",
    answer:
      "With the home empty, we clean everything a furnished clean can't reach: inside the oven, refrigerator, and dishwasher; every cabinet and drawer interior; behind and under appliances; scrubbed tile and grout; toilets, tubs, and showers; all baseboards, door frames, and sills hand-wiped; interior windows; closets; light fixtures; and a full vacuum and mop of every floor. The goal is a unit that shows ready and gives no cleaning-based reason to withhold a deposit.",
  },
  {
    question: 'Will a move-out cleaning get my security deposit back?',
    answer:
      "It removes the cleaning-based reasons a landlord can deduct. In both PA and NY, landlords may charge for \"cleaning beyond normal wear and tear\" — a professional clean eliminates that lever and gives you documentation that the unit was left spotless. It cannot fix actual damage (holes, broken fixtures, stains in carpet), which is a separate category, but cleaning is one of the most common deduction reasons and the most avoidable.",
  },
  {
    question: 'How long does my landlord have to return my deposit in New York?',
    answer:
      "Fourteen days. Under New York's 2019 HSTPA (General Obligations Law § 7-108), a landlord must return your deposit and a written itemized statement of any deductions within 14 days of your move-out, and the statement must specify any cleaning or repairs. If they miss the 14-day deadline, they forfeit the right to retain any portion of it. You also have the right to a pre-move-out inspection and a chance to fix issues first.",
  },
  {
    question: 'How long does my landlord have to return my deposit in Pennsylvania?',
    answer:
      'Thirty days. Under the Pennsylvania Landlord and Tenant Act, the landlord must return the deposit — or an itemized list of damages plus the remaining balance — within 30 days after the lease ends and you\'ve moved out. If you gave a written forwarding address and they miss the deadline, you may be able to sue for double the amount wrongly withheld. Cleaning beyond normal wear and tear is a permitted deduction, which is exactly what a professional clean prevents.',
  },
  {
    question: 'Should I clean before or after my furniture is out?',
    answer:
      "After, for a move-out — the empty home is the whole point, because we can reach inside cabinets, behind appliances, and across every floor without working around furniture. For a move-in, before you bring anything in is ideal, so the cabinets you're about to fill and the appliances you're about to use are clean first. We can also handle a partial move; just tell us the situation when you book.",
  },
  {
    question: 'Do you clean inside all the appliances and cabinets?',
    answer:
      "Yes — that's central to a move cleaning. Inside the oven (racks and broiler drawer), inside and behind the refrigerator, inside the dishwasher, and every cabinet and drawer interior are all included. With the home empty, these are accessible in a way they never are during a routine clean, and they're exactly the areas landlords and new occupants check first.",
  },
  {
    question: 'Can you do a move-in cleaning before I unpack?',
    answer:
      "Yes, and it's the ideal time. A move-in clean means you start in a genuinely clean home — sanitized bathrooms, cleaned-out cabinets and appliances, wiped baseboards and sills, and freshly mopped floors — before a single box is opened. It's especially worth it in older PA and NY homes, where surfaces and woodwork may carry buildup from previous occupants that a quick once-over won't remove.",
  },
  {
    question: 'Do you work with landlords, property managers, and Airbnb hosts?',
    answer:
      "Yes. Turnover cleaning between tenants or guests is a core part of this service. We deliver a consistent, ready-to-show clean on your timeline, which keeps units rentable and compliant with the deposit-return clock. Our reviews include reliable Airbnb turnovers in Scranton and deposit-back move-outs in Buffalo. For ongoing turnovers, ask about a standing arrangement.",
  },
  {
    question: 'Can you do a move cleaning on a tight timeline?',
    answer:
      "Often, yes. Move-outs and turnovers usually come with a hard date — a lease end, a closing, or a guest check-in — and we schedule around those deadlines. The more notice you can give, the easier it is to guarantee a slot, especially in peak moving months (late spring through early fall). Tell us your hand-off date when you request a quote and we'll confirm availability.",
  },
  {
    question: 'Will you give me a record of what was cleaned?',
    answer:
      "Yes — on request we can provide a checklist of the work completed for your records. If you're a tenant, that documentation is useful evidence that the unit was left clean, alongside your own dated move-out photos. If you're a landlord, it supports an itemized, defensible turnover record. Pair it with photos for the strongest paper trail either way.",
  },
  {
    question: 'Which areas do you serve for move cleaning?',
    answer:
      "We cover Pennsylvania and New York: State College, Scranton, Altoona, Harrisburg, Williamsport, and Erie in PA, and Buffalo, Rochester, and Syracuse in NY. Move-out and turnover work is available across all of them. Request a quote with your address and move date and we'll confirm coverage and timing.",
  },
]

export const metadata: Metadata = {
  title: { absolute: 'Move-Out Cleaning Service | Black Diamond' },
  description:
    'Move-in & move-out cleaning across PA & NY — empty-home deep clean of appliances, cabinets & floors for deposit-back and fast turnovers. 4.9★. Free quote.',
  alternates: { canonical: `${BASE_URL}/services/move-in-move-out-cleaning` },
  openGraph: {
    type: 'website',
    title: { absolute: 'Move-Out Cleaning Service | Black Diamond' },
    description:
      'Move-in & move-out cleaning across PA & NY — empty-home deep clean of appliances, cabinets & floors for deposit-back and fast turnovers. 4.9★. Free quote.',
    url: `${BASE_URL}/services/move-in-move-out-cleaning`,
    siteName: 'Black Diamond Cleaning Solutions',
    locale: 'en_US',
    images: [
      {
        url: ogImageUrl('Move-In & Move-Out Cleaning', 'Transition-Ready in Every Room — PA & NY'),
        secureUrl: ogImageUrl('Move-In & Move-Out Cleaning', 'Transition-Ready in Every Room — PA & NY'),
        width: 1200,
        height: 630,
        alt: 'Move-In/Move-Out Cleaning — Black Diamond Cleaning Solutions',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Move-In/Move-Out Cleaning | Black Diamond Cleaning Solutions',
    description: 'Transition-ready cleaning across PA & NY. Get your deposit back. Free quotes.',
    images: [ogImageUrl('Move-In & Move-Out Cleaning', 'Transition-Ready in Every Room — PA & NY')],
  },
  robots: defaultRobots,
}

export default function MoveInMoveOutPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          'Move-In/Move-Out Cleaning',
          'Transition-ready cleaning for empty homes — inside all appliances and cabinets, baseboards, interior windows, and full floor care for deposit-back and fast turnovers.',
          'move-in-move-out-cleaning',
        )}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Services', href: '/services' },
          { name: 'Move-In/Move-Out Cleaning', href: '/services/move-in-move-out-cleaning' },
        ])}
      />
      <ServicePageTemplate
        h1="Move-In / Move-Out Cleaning — Transition-Ready, Deposit-Smart"
        description={`Move-in and move-out cleaning is a different job from a routine clean: the home is empty, every surface is exposed, and the result has money or a deadline attached to it. For tenants, a professional move-out clean removes the "cleaning beyond normal wear and tear" that landlords are legally allowed to deduct from a deposit. For landlords, property managers, and Airbnb hosts, it turns a unit around fast and shows ready. We clean the empty home top to bottom — inside every appliance and cabinet, baseboards, interior windows, and full floor care — and we can work around your move dates.`}
        included={[
          'Kitchen: inside the oven (racks and broiler drawer), inside and behind the refrigerator, inside the dishwasher; every cabinet and drawer interior; under all appliances; backsplash and range hood degreased; sink and fixtures',
          'Bathrooms: tile and grout scrubbed; tub, shower, and door tracks; toilet inside and out including the base; vanity interiors; mirrors; chrome polished; exhaust fan covers',
          'Throughout: all baseboards, door frames, and window sills hand-wiped; interior windows and glass; closet floors and shelves; light fixtures and fan blades; walls spot-wiped for scuffs; full vacuum and mop of all floors',
        ]}
        benefits={[
          {
            emoji: '🔑',
            title: 'Deposit-Smart for Tenants',
            description:
              'Removes the cleaning-based deductions landlords are legally entitled to claim — with documentation available on request.',
          },
          {
            emoji: '🏢',
            title: 'Turnover-Ready for Landlords',
            description:
              'A consistent, checklist-driven clean that turns units fast and meets deposit-return deadlines in both PA (30 days) and NY (14 days).',
          },
          {
            emoji: '📦',
            title: 'Move-In Fresh for Buyers & Renters',
            description:
              'Start in a genuinely clean home — sanitized bathrooms, cleaned-out cabinets and appliances, mopped floors — before a single box is unpacked.',
          },
        ]}
        faqs={faqs}
        relatedServices={[
          { name: 'Deep Cleaning', href: '/services/deep-cleaning' },
          { name: 'Standard Cleaning', href: '/services/standard-cleaning' },
        ]}
      >
        <section className="section-padding bg-white">
          <div className="section-container">
            {/* Two Jobs, One Service */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6 text-center">Two Jobs, One Service</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-5 bg-brand-light rounded-xl border border-gray-200">
                  <p className="font-heading font-bold text-brand-navy mb-2">Moving Out (Tenants)</p>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    Hand back a unit that gives your landlord no cleaning-based reason to withhold your deposit. We can provide a
                    checklist of what was done for your records.
                  </p>
                </div>
                <div className="p-5 bg-brand-light rounded-xl border border-gray-200">
                  <p className="font-heading font-bold text-brand-navy mb-2">Moving In (Buyers & Renters)</p>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    Start in a home that&apos;s genuinely clean before a single box is unpacked — inside the cabinets you&apos;re
                    about to fill and the appliances you&apos;re about to use.
                  </p>
                </div>
                <div className="p-5 bg-brand-light rounded-xl border border-gray-200">
                  <p className="font-heading font-bold text-brand-navy mb-2">Turnovers (Landlords, PMs, Airbnb)</p>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    A fast, consistent, ready-to-show clean between tenants or guests. Our reviews include deposit-back move-outs in{' '}
                    <Link href="/service-areas/buffalo-ny" className="text-brand-blue hover:underline font-medium">
                      Buffalo
                    </Link>{' '}
                    and reliable Airbnb turnovers in{' '}
                    <Link href="/service-areas/scranton-pa" className="text-brand-blue hover:underline font-medium">
                      Scranton
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>

            {/* Deposit rules */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">
                Know the Deposit Rules in Your State
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-brand-light rounded-xl border border-gray-200">
                  <p className="font-heading font-bold text-brand-navy text-lg mb-3">Pennsylvania</p>
                  <p className="text-brand-gray text-sm leading-relaxed mb-3">
                    Under the Pennsylvania Landlord and Tenant Act, a landlord must return your security deposit — or a written,
                    itemized list of damages with the remaining balance — within <strong>30 days</strong> after the lease ends and
                    you&apos;ve vacated. Landlords may deduct for cleaning that is <em>beyond normal wear and tear</em>, but not for
                    ordinary, lived-in condition. If you provided a written forwarding address and the landlord misses the 30-day
                    deadline, you may be able to recover <strong>double</strong> the amount wrongly withheld.
                  </p>
                  <a
                    href="https://www.palawhelp.org/resource/security-deposits-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:underline text-sm font-medium"
                  >
                    Pennsylvania security deposit guide from PALawHELP →
                  </a>
                </div>
                <div className="p-6 bg-brand-light rounded-xl border border-gray-200">
                  <p className="font-heading font-bold text-brand-navy text-lg mb-3">New York</p>
                  <p className="text-brand-gray text-sm leading-relaxed mb-3">
                    Under the 2019 Housing Stability and Tenant Protection Act, a landlord must return your deposit and a written{' '}
                    <strong>itemized statement</strong> of any deductions within <strong>14 days</strong> of move-out — and the
                    statement must specify any cleaning or repairs charged. Deposits are capped at one month&apos;s rent, and you
                    have the right to a pre-move-out inspection and a chance to fix issues before the lease ends. Miss the 14-day
                    deadline and the landlord forfeits the right to keep any of it.
                  </p>
                  <a
                    href="https://www.nysenate.gov/legislation/laws/GOB/7-108"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:underline text-sm font-medium"
                  >
                    New York General Obligations Law § 7-108 →
                  </a>
                </div>
              </div>
              <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                <p className="text-brand-gray text-sm leading-relaxed">
                  <strong className="text-brand-navy">The practical point:</strong> in both states, &quot;cleaning beyond normal
                  wear and tear&quot; is a legitimate deduction. A documented professional clean removes that lever — and for
                  landlords, it&apos;s the fastest way to turn a unit and stay compliant on the clock.
                </p>
              </div>
            </div>

            {/* How It Works */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">How It Works</h2>
                <ol className="space-y-5">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-brand-navy">Best Done Empty</p>
                      <p className="text-brand-gray text-sm mt-1">
                        The most thorough result comes after furniture is out (move-out) or before it&apos;s in (move-in). We can
                        also work around a partial move.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-brand-navy">Coordinate with Your Dates</p>
                      <p className="text-brand-gray text-sm mt-1">
                        Tell us your hand-off or closing date and we&apos;ll schedule to hit it, including tight timelines.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-brand-navy">Checklist-Driven, Walkthrough at the End</p>
                      <p className="text-brand-gray text-sm mt-1">
                        Every area is worked from a checklist and inspected before we leave, backed by our 100% Satisfaction
                        Guarantee.
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
                    <span>Renters vacating a unit who need a deposit-return clean with documentation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>Landlords and property managers turning over a unit between tenants on deadline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>Buyers who want a genuinely clean home before moving in, regardless of how it was left</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>
                      Airbnb and short-term rental hosts who need reliable between-guest turnovers in{' '}
                      <Link
                        href="/service-areas/scranton-pa"
                        className="text-brand-blue hover:underline font-medium"
                      >
                        move-out cleaning in Scranton, PA
                      </Link>{' '}
                      and{' '}
                      <Link
                        href="/service-areas/buffalo-ny"
                        className="text-brand-blue hover:underline font-medium"
                      >
                        move-out cleaning in Buffalo, NY
                      </Link>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ServicePageTemplate>
    </>
  )
}
