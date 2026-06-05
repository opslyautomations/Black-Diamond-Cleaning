import type { Metadata } from 'next'
import Link from 'next/link'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'

const faqs = [
  {
    question: 'What frequency is best?',
    answer: "Most families choose bi-weekly — it keeps the home consistently clean without over-servicing. Weekly is popular for busy households or homes with pets and kids.",
  },
  {
    question: 'Can I skip or reschedule a cleaning?',
    answer: "Absolutely. Just text or call us — we're flexible. Most changes can be made with 24 hours' notice.",
  },
  {
    question: 'Is there a contract?',
    answer: "No contract. You can change frequency or cancel any time. We earn your business every visit.",
  },
  {
    question: 'Do I get the same team every visit?',
    answer: "We assign the same team to your home whenever possible. Over time, your team learns the layout, your priorities, and any specific preferences — which means a more efficient and consistent result each visit.",
  },
  {
    question: 'How much less does a recurring plan cost vs. one-time service?',
    answer: "{/* TODO(owner): Fill in your actual recurring discount percentage or pricing structure here — e.g. 'Recurring plans are priced 10-15% less per visit than one-time service.' Do not fabricate a number. */} Recurring plans are priced at a lower per-visit rate than one-time service. Contact us for a specific quote for your home.",
  },
  {
    question: 'What cadence is best for a home with pets?',
    answer: "Pet households typically benefit from weekly service — pet hair, dander, and tracked-in outdoor debris accumulate faster than in pet-free homes. Bi-weekly is possible if you're willing to do light pickup in between. We'll help you choose the right frequency for your situation.",
  },
]

export const metadata: Metadata = {
  title: { absolute: 'Recurring Cleaning Service | Black Diamond Cleaning' },
  description:
    'Recurring house cleaning from Black Diamond — weekly, bi-weekly, or monthly plans at discounted rates across PA & NY. No contract. 4.9★ on Google. Free quote today.',
  alternates: { canonical: `${BASE_URL}/services/recurring-cleaning` },
  openGraph: {
    type: 'website',
    title: { absolute: 'Recurring Cleaning Service | Black Diamond Cleaning' },
    description:
      'Recurring house cleaning from Black Diamond — weekly, bi-weekly, or monthly plans at discounted rates across PA & NY. No contract. 4.9★ on Google. Free quote today.',
    url: `${BASE_URL}/services/recurring-cleaning`,
    siteName: 'Black Diamond Cleaning Solutions',
    locale: 'en_US',
    images: [{
      url: ogImageUrl('Recurring House Cleaning', 'Your Home, Perpetually Spotless — PA & NY'),
      secureUrl: ogImageUrl('Recurring House Cleaning', 'Your Home, Perpetually Spotless — PA & NY'),
      width: 1200, height: 630,
      alt: 'Recurring House Cleaning — Black Diamond Cleaning Solutions',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recurring Cleaning | Black Diamond Cleaning Solutions',
    description: 'Weekly, bi-weekly, or monthly cleaning across PA & NY. No contract. Free quotes.',
    images: [ogImageUrl('Recurring House Cleaning', 'Your Home, Perpetually Spotless — PA & NY')],
  },
  robots: defaultRobots,
}

export default function RecurringCleaningPage() {
  return (
    <>
      <JsonLd data={serviceSchema('Recurring House Cleaning', 'Set-it-and-forget-it cleaning plans — weekly, bi-weekly, or monthly at a discounted rate vs. one-time service. No contract required.', 'recurring-cleaning')} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: 'Services', href: '/services/recurring-cleaning' }, { name: 'Recurring Cleaning', href: '/services/recurring-cleaning' }])} />
      <ServicePageTemplate
        h1="Recurring House Cleaning — Your Home, Perpetually Spotless"
        description="Recurring Cleaning is your set-it-and-forget-it plan for a perpetually spotless home. Choose weekly, bi-weekly, or monthly — and come home to the same premium result every time. Recurring plans come at a discounted rate vs. one-time service."
        included={[
          'All Standard Cleaning services at your chosen schedule — kitchen, bathrooms, bedrooms, living areas, floors',
          'Same assigned team whenever possible — they learn your home over time',
          'Priority scheduling and booking over one-time customers',
          'Discounted per-visit rate vs. one-time service',
          'Easy rescheduling by text or phone — most changes with 24 hours notice',
          'Flexible frequency — switch from bi-weekly to weekly, or pause a month, any time',
          'Optional add-ons available at any visit: inside appliances, interior windows, and more',
        ]}
        benefits={[
          { emoji: '💰', title: 'Lower Per-Visit Price', description: "Recurring plans cost less per visit than one-time service — premium cleaning at a better value." },
          { emoji: '👥', title: 'Same Trusted Team', description: "Your assigned team learns your home's layout, priorities, and preferences — better results over time." },
          { emoji: '📅', title: 'Never Think About Cleaning Again', description: "It's just handled. Set your schedule and come home to a spotless house, every single visit." },
        ]}
        faqs={faqs}
        relatedServices={[
          { name: 'Standard Cleaning', href: '/services/standard-cleaning' },
          { name: 'Deep Cleaning', href: '/services/deep-cleaning' },
          { name: 'Commercial Cleaning', href: '/services/commercial-cleaning' },
        ]}
      >
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">How It Works</h2>
                <ol className="space-y-5">
                  {[
                    { step: '1', title: 'Choose Your Frequency', detail: 'Weekly, bi-weekly, or monthly — we help you pick the right cadence for your home size and lifestyle.' },
                    { step: '2', title: 'Set Your Schedule', detail: 'We confirm a recurring day and time that works for you. You can always adjust going forward.' },
                    { step: '3', title: 'Same Team, Every Visit', detail: 'Your assigned team arrives on schedule, works through the full checklist, and maintains the standard you expect.' },
                    { step: '4', title: 'Adjust Any Time', detail: "Skip a visit, change frequency, or add an extra service — just text or call. No penalties, no contract." },
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
                    <span>Homeowners who want their home consistently maintained without spending any personal time on it</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>Busy professionals and dual-income households where time is the scarcest resource</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>Households with pets or kids who generate enough mess to benefit from regular professional attention</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>Anyone who already had a{' '}
                      <Link href="/services/deep-cleaning" className="text-brand-blue hover:underline font-medium">deep cleaning</Link>
                      {' '}and wants to maintain that standard going forward
                    </span>
                  </li>
                </ul>
                <div className="mt-8 p-5 bg-brand-light rounded-xl border border-gray-200">
                  <p className="font-heading font-bold text-brand-navy mb-2">PA &amp; NY Year-Round Coverage</p>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    Northeast winters bring road salt and seasonal buildup that benefits from consistent upkeep. A recurring plan across our{' '}
                    <Link href="/service-areas/state-college-pa" className="text-brand-blue hover:underline font-medium">Pennsylvania</Link>
                    {' '}and{' '}
                    <Link href="/service-areas/buffalo-ny" className="text-brand-blue hover:underline font-medium">New York</Link>
                    {' '}service areas means your home stays maintained through winter, spring mud season, and summer — without you having to think about it.
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
