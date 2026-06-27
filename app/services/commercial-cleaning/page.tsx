import type { Metadata } from 'next'
import Link from 'next/link'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'

const faqs = [
  {
    question: 'What types of businesses do you clean?',
    answer:
      "We focus on small offices, professional suites, retail spaces, and commercial buildings across PA and NY — the spaces that need dependable, professional cleaning without a large national-contractor overhead. We tailor scope to your space, whether that's a single office suite, a multi-room professional practice, or a small commercial building with shared common areas. Request a walkthrough and we'll confirm we're the right fit.",
  },
  {
    question: 'Do you clean after hours?',
    answer:
      "Yes — most commercial cleaning is done before you open or after you close so your team and customers are never disrupted. We schedule around your business hours and can handle early-morning or evening service depending on what works for your operation. Access details — keys, codes, alarm procedures — are agreed in advance so off-hours service runs smoothly and securely.",
  },
  {
    question: 'Do you offer recurring contracts, and how often do you come?',
    answer:
      "Yes. Most commercial clients are on a recurring schedule — nightly, several times a week, weekly, or whatever cadence your space needs. We set frequency during the walkthrough based on traffic, square footage, and the standard you want maintained. Recurring service is how commercial cleaning stays consistent and cost-effective, and how the same crew gets to know your building.",
  },
  {
    question: 'Do you bring your own equipment and supplies?',
    answer:
      "Yes. We arrive fully equipped with commercial-grade equipment, HEPA-filter vacuums, and cleaning products. If your business requires specific products — for sensitive environments, particular surfaces, or a green-cleaning policy — tell us during the walkthrough and we'll build it into the scope. We can use EPA-registered disinfectants on high-touch surfaces where your space calls for it.",
  },
  {
    question: 'Are you licensed and insured?',
    answer:
      "Yes. Black Diamond Cleaning Solutions is licensed and insured, which matters more for commercial work than residential — you're letting a vendor into your business space, often after hours. We handle keys, codes, and alarm procedures professionally and by agreement. If your building or lease requires proof of insurance on file, we can provide it.",
  },
  {
    question: 'Do you disinfect high-touch surfaces?',
    answer:
      "We can. In shared workspaces, high-touch surfaces — door handles, light switches, shared equipment, railings — are where germs spread fastest. Following CDC facility-cleaning guidance, regular cleaning of those surfaces is the baseline, with EPA-registered disinfectants applied where a space genuinely needs it, such as during illness season or in higher-traffic areas. We'll set the right level of disinfection for your environment during the walkthrough.",
  },
  {
    question: 'How do you handle keys, security, and alarms?',
    answer:
      "By agreement, in advance, and professionally. Before the first after-hours visit, we establish exactly how the crew enters and secures your space — key handling, access codes, and alarm arm/disarm procedures. The same vetted crew handles your building each visit, which keeps access predictable and secure. We treat your space's security as seriously as the cleaning itself.",
  },
  {
    question: 'Can you do a one-time office deep clean instead of a contract?',
    answer:
      "Yes. Not every business needs recurring service right away — some want a one-time deep clean before an event, after a renovation, ahead of a move, or to reset a space before starting a regular schedule. We're happy to do a single commercial deep clean and can talk about recurring service afterward if it's a fit. Request a walkthrough and tell us what you're after.",
  },
  {
    question: 'How is commercial cleaning priced?',
    answer:
      "By scope, established at the walkthrough — there's no fixed online price because a 600-square-foot office and a multi-room building are different jobs. We quote against exactly what's cleaned, how often, and the standard you want held. Recurring service is typically priced more favorably than one-off cleans. You get a clear, itemized scope and price before anything starts.",
  },
  {
    question: 'Which areas do you serve for commercial cleaning?',
    answer:
      'Our PA and NY service areas: State College, Scranton, Altoona, Harrisburg, Williamsport, and Erie in Pennsylvania, and Buffalo, Rochester, and Syracuse in New York. Commercial and office cleaning is available across all of them. Request a walkthrough with your business address and we\'ll confirm coverage and scheduling.',
  },
  {
    question: 'Can you scale across more than one location?',
    answer:
      "Often, yes, within our PA and NY footprint. If you run multiple small offices or sites across our service areas, we can discuss a coordinated schedule and consistent standard across them during the walkthrough. Tell us how many locations and where, and we'll let you know honestly what we can cover well — we'd rather do a few locations excellently than overpromise.",
  },
]

export const metadata: Metadata = {
  title: { absolute: 'Commercial Cleaning Service | Black Diamond' },
  description:
    'Reliable office & commercial cleaning across PA & NY — recurring, after-hours service with high-touch sanitizing. Licensed & insured. Get a free quote today.',
  alternates: { canonical: `${BASE_URL}/services/commercial-cleaning` },
  openGraph: {
    type: 'website',
    title: { absolute: 'Commercial Cleaning Service | Black Diamond' },
    description:
      'Reliable office & commercial cleaning across PA & NY — recurring, after-hours service with high-touch sanitizing. Licensed & insured. Get a free quote today.',
    url: `${BASE_URL}/services/commercial-cleaning`,
    siteName: 'Black Diamond Cleaning Solutions',
    locale: 'en_US',
    images: [
      {
        url: ogImageUrl('Commercial Cleaning Service', 'Reliable Office Cleaning for PA & NY Businesses'),
        secureUrl: ogImageUrl('Commercial Cleaning Service', 'Reliable Office Cleaning for PA & NY Businesses'),
        width: 1200,
        height: 630,
        alt: 'Commercial Cleaning Service — Black Diamond Cleaning Solutions',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning | Black Diamond Cleaning Solutions',
    description: 'Reliable office & commercial cleaning across PA & NY. Licensed & insured. Free quotes.',
    images: [ogImageUrl('Commercial Cleaning Service', 'Reliable Office Cleaning for PA & NY Businesses')],
  },
  robots: defaultRobots,
}

export default function CommercialCleaningPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema(
          'Commercial Cleaning',
          'Dependable commercial and office cleaning for small offices and commercial buildings across PA & NY — recurring, after-hours, high-touch sanitizing.',
          'commercial-cleaning',
        )}
      />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Services', href: '/services' },
          { name: 'Commercial Cleaning', href: '/services/commercial-cleaning' },
        ])}
      />
      <ServicePageTemplate
        h1="Commercial Cleaning — Reliable Service for PA & NY Businesses"
        description="For a business, cleaning isn't cosmetic — it's operational. A consistently clean office protects employee health, signals competence to every client who walks in, and removes a recurring headache from your week. The problem most businesses have isn't finding a cleaner; it's finding one that shows up reliably, every time, without being chased. That's the gap Black Diamond is built to close: dependable, professional commercial cleaning for small offices and commercial buildings across Pennsylvania and New York, on a schedule that fits how your business runs."
        included={[
          'Small offices and professional suites: workstations, common areas, conference rooms',
          'Commercial buildings and retail spaces: entryways, lobbies, shared corridors',
          'Restrooms: sanitized, restocked (upon request), and kept presentable every visit',
          'Breakrooms and kitchens: counters, sinks, appliance exteriors, tables',
          'Floors: vacuumed carpet and mopped hard surfaces throughout',
          'High-touch surfaces: door handles, light switches, shared equipment, railings, elevator buttons',
          'Trash and recycling: emptied and relined; after-hours or off-peak scheduling available',
        ]}
        benefits={[
          {
            emoji: '🏢',
            title: 'Reliability You Can Count On',
            description:
              'Same crew, on schedule, every time — the most common reason businesses switch cleaners is the vendor who stops showing up.',
          },
          {
            emoji: '🕔',
            title: 'After-Hours & Off-Peak',
            description:
              'We clean when you\'re closed so your team arrives to a fresh workspace every morning and customers are never disrupted.',
          },
          {
            emoji: '🔑',
            title: 'Vetted, Secure Access',
            description:
              'Keys, codes, and alarm procedures handled by agreement, in advance — the same vetted crew every visit, licensed and insured.',
          },
        ]}
        faqs={faqs}
        relatedServices={[
          { name: 'Recurring Cleaning', href: '/services/recurring-cleaning' },
          { name: 'Deep Cleaning', href: '/services/deep-cleaning' },
        ]}
      >
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">How We Work With Businesses</h2>
                <ol className="space-y-5">
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-brand-navy">Walkthrough and Custom Scope</p>
                      <p className="text-brand-gray text-sm mt-1">
                        Every business is different. We assess your space, agree on exactly what&apos;s cleaned and how often, and
                        quote against that scope — no generic package guesswork.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-brand-navy">After-Hours or Off-Peak</p>
                      <p className="text-brand-gray text-sm mt-1">
                        Most commercial work happens before opening or after close so your team and customers are never disrupted. We
                        schedule around your hours.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-brand-navy">A Consistent, Vetted Crew</p>
                      <p className="text-brand-gray text-sm mt-1">
                        You get the same reliable team that learns your building, handled professionally — including keys, codes, and
                        alarm procedures agreed in advance.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">4</span>
                    </div>
                    <div>
                      <p className="font-heading font-bold text-brand-navy">High-Touch Focus Where It Matters</p>
                      <p className="text-brand-gray text-sm mt-1">
                        In shared spaces, high-touch surfaces are where germs spread; per{' '}
                        <a
                          href="https://www.cdc.gov/hygiene/about/when-and-how-to-clean-and-disinfect-a-facility.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-blue hover:underline"
                        >
                          CDC facility cleaning guidance
                        </a>
                        , regular cleaning of those surfaces is the priority, with EPA-registered disinfectants used where a space
                        genuinely needs it.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div>
                <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">Why Businesses Switch to Us</h2>
                <ul className="space-y-4 text-brand-gray leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>
                      <strong className="text-brand-navy">The vendor who stops showing up.</strong> Reliability is the single most
                      common reason businesses change cleaners — and the thing we lead with. Same crew, on schedule, accountable.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>
                      <strong className="text-brand-navy">Restrooms and breakrooms that reflect on you.</strong> The two spaces
                      clients and staff judge hardest, kept consistently presentable.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>
                      <strong className="text-brand-navy">Winter entryways.</strong> Across PA and NY, salt, grit, and slush get
                      tracked into lobbies and corridors all season; we keep entrances and floors from compounding over the winter.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>
                      <strong className="text-brand-navy">Inconsistent quality.</strong> A checklist-driven crew means the standard
                      doesn&apos;t depend on who showed up that night.
                    </span>
                  </li>
                </ul>

                <div className="mt-8 p-5 bg-brand-light rounded-xl border border-gray-200">
                  <p className="font-heading font-bold text-brand-navy mb-2">PA &amp; NY Business Locations</p>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    Commercial and office cleaning across all our service areas, including{' '}
                    <Link href="/service-areas/harrisburg-pa" className="text-brand-blue hover:underline font-medium">
                      office cleaning in Harrisburg, PA
                    </Link>{' '}
                    and{' '}
                    <Link href="/service-areas/syracuse-ny" className="text-brand-blue hover:underline font-medium">
                      commercial cleaning in Syracuse, NY
                    </Link>
                    . Request a walkthrough with your business address and we&apos;ll confirm coverage and scheduling.
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
