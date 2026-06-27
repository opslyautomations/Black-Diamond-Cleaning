import type { Metadata } from 'next'
import Link from 'next/link'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'

const faqs = [
  {
    question: 'How often should I have my house cleaned?',
    answer:
      "It depends on how your home lives. Households with kids, pets, allergies, or heavy traffic usually do best weekly or bi-weekly; quieter homes and smaller spaces are well served monthly. Bi-weekly is the most common choice because it keeps a home reliably clean without weekly visits. We'll suggest a starting cadence and fine-tune it after your first few cleans so it actually fits your routine.",
  },
  {
    question: "What's the difference between weekly, bi-weekly, and monthly?",
    answer:
      'Frequency, and how much upkeep happens between visits. Weekly keeps a home consistently guest-ready and is ideal for busy or high-traffic households. Bi-weekly — every two weeks — is the popular middle ground for most families. Monthly works for quieter homes where you keep up day to day and want a periodic professional reset. The right choice is whichever keeps your home where you want it without paying for visits you don\'t need.',
  },
  {
    question: 'Will I get the same cleaners every time?',
    answer:
      "That's the goal on a recurring plan. We aim to send the same team consistently so they learn your home, your preferences, and the details that matter to you. Familiarity makes each visit faster and more thorough, and it's a big part of why recurring clients get more consistent results than one-off bookings. If a regular team member is ever out, we brief the replacement on your home's specifics.",
  },
  {
    question: 'Do I need a deep clean before starting a recurring plan?',
    answer:
      "We recommend it for most homes. A one-time deep clean sets a proper baseline; recurring standard visits then maintain that level efficiently. Without it, your first several recurring visits become catch-up on built-up grime rather than true maintenance — slower and less satisfying. One deep clean up front makes the entire plan that follows faster, cleaner, and better value.",
  },
  {
    question: 'Can I skip or reschedule a visit?',
    answer:
      "Yes. Life happens — travel, events, the occasional bad week — and recurring plans are built to flex. Reschedule with reasonable notice and we'll find a new slot. Keep in mind that skipping too many visits lets buildup return, which can move you back toward needing a catch-up clean, so we'll help you keep a rhythm that protects the baseline you paid to establish.",
  },
  {
    question: 'Is recurring cleaning cheaper than one-time cleanings?',
    answer:
      "Per visit, yes, in most cases. Because a maintained home doesn't accumulate heavy buildup, each recurring visit takes less time than cleaning a neglected home from scratch, and recurring plans are typically priced more favorably than one-off deep cleans. The bigger savings is avoided catch-up: staying on a schedule prevents the periodic expensive resets that an unmaintained home eventually needs.",
  },
  {
    question: 'Can I change my frequency later?',
    answer:
      "Yes. Many clients start bi-weekly and adjust — moving to weekly when a new baby or pet arrives, or to monthly when a household quiets down. Your plan should match your life, not lock you in. Tell us when your needs change and we'll update the cadence, and your regular team carries over so there's no loss of continuity.",
  },
  {
    question: 'Do I need to be home for each recurring visit?',
    answer:
      "No. Most recurring clients provide access instructions and go about their day. Because you'll typically have the same trusted, insured team each visit, many clients are comfortable not being home at all. If you'd rather be present, that's fine too — and you can be there for some visits and not others. Whatever's convenient for you works.",
  },
  {
    question: 'Does regular cleaning actually help with allergies and dust?',
    answer:
      'It helps meaningfully. Dust, dust-mite debris, pet dander, and pollen accumulate in carpets, upholstery, and on surfaces, and they\'re common indoor asthma and allergy triggers. The EPA recommends routine vacuuming with a HEPA filter and damp dusting to control that buildup — exactly what a recurring plan delivers on a consistent schedule. See the EPA\'s guidance on <a href="https://www.epa.gov/asthma/asthma-triggers-gain-control" target="_blank" rel="noopener noreferrer" class="text-brand-blue underline">controlling indoor asthma triggers</a>.',
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "We keep it reasonable — give us notice and you can pause, reschedule, or end a recurring plan without drama. We'll confirm the specific notice window when you set up your plan so expectations are clear from the start. Our aim is that you stay because the service is worth it, not because you're locked in.",
  },
  {
    question: 'Which areas do you serve for recurring plans?',
    answer:
      'All of our PA and NY service areas: State College, Scranton, Altoona, Harrisburg, Williamsport, and Erie in Pennsylvania, and Buffalo, Rochester, and Syracuse in New York. Recurring cleaning is available across every one of them. Request a quote with your address and preferred cadence and we\'ll confirm coverage and set up your schedule.',
  },
]

export const metadata: Metadata = {
  title: { absolute: 'Recurring Cleaning Plans | Black Diamond Cleaning' },
  description:
    'Weekly, bi-weekly & monthly recurring cleaning across PA & NY — same trusted team, a maintained home, no buildup. 4.9★ on Google. Get a free quote today.',
  alternates: { canonical: `${BASE_URL}/services/recurring-cleaning` },
  openGraph: {
    type: 'website',
    title: { absolute: 'Recurring Cleaning Plans | Black Diamond Cleaning' },
    description:
      'Weekly, bi-weekly & monthly recurring cleaning across PA & NY — same trusted team, a maintained home, no buildup. 4.9★ on Google. Get a free quote today.',
    url: `${BASE_URL}/services/recurring-cleaning`,
    siteName: 'Black Diamond Cleaning Solutions',
    locale: 'en_US',
    images: [
      {
        url: ogImageUrl('Recurring House Cleaning', 'Your Home, Perpetually Spotless — PA & NY'),
        secureUrl: ogImageUrl('Recurring House Cleaning', 'Your Home, Perpetually Spotless — PA & NY'),
        width: 1200,
        height: 630,
        alt: 'Recurring House Cleaning — Black Diamond Cleaning Solutions',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recurring Cleaning | Black Diamond Cleaning Solutions',
    description: 'Weekly, bi-weekly, or monthly cleaning across PA & NY. Free quotes.',
    images: [ogImageUrl('Recurring House Cleaning', 'Your Home, Perpetually Spotless — PA & NY')],
  },
  robots: defaultRobots,
}

export default function RecurringCleaningPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          'Recurring Cleaning',
          'Weekly, bi-weekly, or monthly maintenance cleaning plans with a consistent team across PA & NY — a maintained home with no buildup.',
          'recurring-cleaning',
        )}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Services', href: '/services' },
          { name: 'Recurring Cleaning', href: '/services/recurring-cleaning' },
        ])}
      />
      <ServicePageTemplate
        h1="Recurring Cleaning — A Maintained Home, on Your Schedule"
        description={`Recurring cleaning is the difference between a home that gets cleaned and a home that stays clean. Instead of booking each time, you choose a cadence — weekly, bi-weekly, or monthly — and the same trusted team keeps your home at a consistent baseline. The compounding benefit is real: a home that's maintained on a schedule never accumulates the buildup that forces an expensive catch-up later, which makes every visit faster, more thorough, and better value than starting from a deep clean each time. This page is about choosing the right rhythm; for exactly what each visit covers, see <a href="/services/standard-cleaning" class="underline">Standard Cleaning</a>.`}
        included={[
          'All Standard Cleaning tasks at your chosen frequency: kitchen counters, appliance exteriors, and sink; bathrooms top to bottom; all accessible surfaces dusted; floors vacuumed and mopped throughout',
          'Same assigned team whenever possible — they learn your home, your preferences, and the spots that matter most to you',
          'High-touch surfaces wiped every visit: light switches, doorknobs, handrails',
          'Flexible cadence — weekly, bi-weekly, or monthly; adjustable as your household needs change',
          'Optional add-ons at any visit: inside appliances, interior windows, baseboards — see Deep Cleaning for the full list',
        ]}
        benefits={[
          {
            emoji: '👥',
            title: 'Same Trusted Team',
            description:
              'Your assigned team learns your home over time — layout, preferences, priority spots — making each visit faster and more thorough than the last.',
          },
          {
            emoji: '📉',
            title: 'No Buildup, No Catch-Up',
            description:
              'A maintained home never accumulates the buildup that forces an expensive reset. Every visit is true maintenance, not catch-up.',
          },
          {
            emoji: '📅',
            title: 'Flexible by Design',
            description:
              'Reschedule when life happens, change your frequency as your needs shift, and reach a real person who picks up the phone.',
          },
        ]}
        faqs={faqs}
        relatedServices={[
          { name: 'Standard Cleaning', href: '/services/standard-cleaning' },
          { name: 'Deep Cleaning', href: '/services/deep-cleaning' },
        ]}
      >
        <section className="section-padding bg-white">
          <div className="section-container">
            {/* Choosing Your Cadence */}
            <div className="mb-12">
              <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">Choosing Your Cadence</h2>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="p-5 bg-brand-light rounded-xl border border-gray-200">
                  <p className="font-heading font-bold text-brand-navy mb-2">Weekly</p>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    Best for busy households with kids, pets, allergy sensitivities, or heavy foot traffic, and for anyone who wants
                    the home consistently guest-ready.
                  </p>
                </div>
                <div className="p-5 bg-blue-50 rounded-xl border border-brand-blue/30">
                  <p className="font-heading font-bold text-brand-navy mb-1">Bi-Weekly</p>
                  <p className="text-xs text-brand-blue font-medium mb-2">Most Popular</p>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    Keeps a home reliably clean without weekly visits — ideal for most families and professionals.
                  </p>
                </div>
                <div className="p-5 bg-brand-light rounded-xl border border-gray-200">
                  <p className="font-heading font-bold text-brand-navy mb-2">Monthly</p>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    A good fit for quieter homes, smaller spaces, or single occupants who keep up between visits and want a periodic
                    professional reset.
                  </p>
                </div>
              </div>
              <p className="text-brand-gray text-sm text-center">
                Not sure? We&apos;ll recommend a starting cadence based on your home and adjust it after the first few visits — most
                clients land on the right rhythm quickly.
              </p>
            </div>

            {/* Why Consistency Wins */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">Why Consistency Wins</h2>
                <ol className="space-y-5">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-brand-navy">A Deep Clean Sets the Baseline; Recurring Maintains It</p>
                      <p className="text-brand-gray text-sm mt-1">
                        We usually start new clients with a one-time{' '}
                        <Link href="/services/deep-cleaning" className="text-brand-blue hover:underline">
                          Deep Cleaning
                        </Link>
                        , then recurring standard visits hold that level efficiently. Maintenance is far less work — and less cost —
                        than repeated catch-up cleans.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-brand-navy">The Same Team Learns Your Home</p>
                      <p className="text-brand-gray text-sm mt-1">
                        On a recurring plan we aim to send the same cleaners each visit. They know your layout, your preferences, and
                        the spots that matter to you, so visits get faster and more thorough over time.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-brand-navy">Less Buildup, Better Air</p>
                      <p className="text-brand-gray text-sm mt-1">
                        Regular damp dusting and HEPA-filter vacuuming keep dust, dust-mite debris, and pet dander from accumulating
                        — a meaningful benefit for households with allergies or asthma.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-brand-navy">Flexible by Design</p>
                      <p className="text-brand-gray text-sm mt-1">
                        Reschedule when life happens, change your frequency as your needs shift, and reach a real person who picks up
                        the phone.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">How Billing &amp; Scheduling Work</h2>
                <ul className="space-y-4 text-brand-gray leading-relaxed mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>
                      Each recurring visit is a standard whole-home clean; pricing is quoted per visit based on your home&apos;s
                      size and condition — no generic online price, every home is different
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>
                      Recurring visits are typically priced more favorably than one-off cleans because the home stays maintained
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>
                      You can change cadence or pause with reasonable notice; we&apos;ll confirm the specifics when you set up your
                      plan
                    </span>
                  </li>
                </ul>

                <div className="p-5 bg-brand-light rounded-xl border border-gray-200">
                  <p className="font-heading font-bold text-brand-navy mb-2">PA &amp; NY Year-Round Coverage</p>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    A recurring plan across our{' '}
                    <Link href="/service-areas/harrisburg-pa" className="text-brand-blue hover:underline font-medium">
                      recurring cleaning in Harrisburg, PA
                    </Link>{' '}
                    and{' '}
                    <Link href="/service-areas/rochester-ny" className="text-brand-blue hover:underline font-medium">
                      recurring cleaning in Rochester, NY
                    </Link>{' '}
                    service areas means your home stays maintained through winter salt season, spring mud, and summer — without you
                    ever having to think about booking.
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
