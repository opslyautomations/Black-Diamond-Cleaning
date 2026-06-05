import type { Metadata } from 'next'
import Link from 'next/link'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'

const faqs = [
  {
    question: 'What size businesses do you serve?',
    answer: 'Small offices, medical suites, salons, fitness studios, and commercial buildings typically under 10,000 square feet. We focus on small and mid-size commercial spaces where quality and reliability matter more than enterprise-scale contracts.',
  },
  {
    question: 'Do you offer nightly or weekly service?',
    answer: "Yes. Most commercial clients choose weekly or bi-weekly — we'll recommend the right frequency for your space and traffic level.",
  },
  {
    question: 'Are you insured for commercial work?',
    answer: 'Yes — we are fully licensed and insured for both residential and commercial cleaning across Pennsylvania and New York.',
  },
  {
    question: 'Can you start after our office closes in the evening?',
    answer: "Yes. After-hours and weekend availability is standard for our commercial clients — we clean when you're closed so your team arrives to a fresh workspace every day.",
  },
  {
    question: 'Do you bring your own supplies or use ours?',
    answer: "We bring all cleaning supplies and equipment. If your space has specific product requirements — for instance, a medical suite with particular disinfection standards — let us know and we'll accommodate.",
  },
  {
    question: 'How does commercial cleaning pricing work?',
    answer: "{/* TODO(owner): Fill in your actual commercial pricing approach here — e.g. whether you quote per square foot, per visit, or on a custom basis. Do not fabricate a number. */} Commercial pricing is customized based on your space size, frequency, and scope. Contact us for a free quote specific to your location.",
  },
]

export const metadata: Metadata = {
  title: { absolute: 'Commercial Cleaning | Black Diamond Cleaning PA & NY' },
  description:
    'Commercial cleaning from Black Diamond — small offices, medical suites & salons across PA & NY. After-hours available. 4.9★ on Google. Get a free quote today.',
  alternates: { canonical: `${BASE_URL}/services/commercial-cleaning` },
  openGraph: {
    type: 'website',
    title: { absolute: 'Commercial Cleaning | Black Diamond Cleaning PA & NY' },
    description:
      'Commercial cleaning from Black Diamond — small offices, medical suites & salons across PA & NY. After-hours available. 4.9★ on Google. Get a free quote today.',
    url: `${BASE_URL}/services/commercial-cleaning`,
    siteName: 'Black Diamond Cleaning Solutions',
    locale: 'en_US',
    images: [{
      url: ogImageUrl('Commercial Cleaning Service', 'Residential-Quality Care for Your Workplace — PA & NY'),
      secureUrl: ogImageUrl('Commercial Cleaning Service', 'Residential-Quality Care for Your Workplace — PA & NY'),
      width: 1200, height: 630,
      alt: 'Commercial Cleaning Service — Black Diamond Cleaning Solutions',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Commercial Cleaning | Black Diamond Cleaning Solutions',
    description: 'Small-office & commercial cleaning across PA & NY. After-hours available. Free quotes.',
    images: [ogImageUrl('Commercial Cleaning Service', 'Residential-Quality Care for Your Workplace — PA & NY')],
  },
  robots: defaultRobots,
}

export default function CommercialCleaningPage() {
  return (
    <>
      <JsonLd data={serviceSchema('Commercial Cleaning', 'Residential-quality cleaning for small offices, medical suites, salons, and other commercial spaces with after-hours and weekend availability.', 'commercial-cleaning')} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: 'Services', href: '/services/commercial-cleaning' }, { name: 'Commercial Cleaning', href: '/services/commercial-cleaning' }])} />
      <ServicePageTemplate
        h1="Commercial Cleaning — Residential-Quality Care for Your Workplace"
        description="Commercial Cleaning for small offices, medical suites, salons, boutique retail, and other small commercial spaces. We deliver the same meticulous residential-quality cleaning to your workplace, with after-hours and weekend availability."
        included={[
          'Workstations, desks, monitors, and accessible surfaces dusted and sanitized',
          'Reception areas, lobbies, and waiting rooms cleaned thoroughly',
          'Break rooms and kitchenettes: counters, sink, appliance exteriors, table and chair wipe-down, floor',
          'Restrooms: toilet, sink, mirror, and floor; restocking (supplies provided by client upon request)',
          'Trash removal and liner replacement throughout',
          'Vacuum all carpet areas; sweep and mop all hard floors',
          'Glass doors, partitions, and interior windows cleaned',
          'After-hours or weekend scheduling to avoid business disruption',
        ]}
        benefits={[
          { emoji: '🏢', title: 'Built for Small Business', description: "Flexible service sized right for small offices — not enterprise-scale contracts or minimums." },
          { emoji: '🕔', title: 'After-Hours & Weekends', description: "We clean when you're closed so your team arrives to a fresh workspace every morning." },
          { emoji: '📞', title: 'Direct Communication', description: "You deal with us directly, not a call center — fast, reliable, and responsive to your space's needs." },
        ]}
        faqs={faqs}
        relatedServices={[
          { name: 'Recurring Cleaning', href: '/services/recurring-cleaning' },
          { name: 'Standard Cleaning', href: '/services/standard-cleaning' },
          { name: 'Deep Cleaning', href: '/services/deep-cleaning' },
        ]}
      >
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">How It Works</h2>
                <ol className="space-y-5">
                  {[
                    { step: '1', title: 'Request a Quote', detail: 'Tell us your space type, square footage, and desired frequency. We provide a custom quote for your location.' },
                    { step: '2', title: 'Set Your Schedule', detail: 'We confirm a recurring time — typically after business hours or on weekends — that fits your operation.' },
                    { step: '3', title: 'Consistent Service', detail: 'The same team covers your space on schedule, working through a checklist specific to your space type.' },
                    { step: '4', title: 'Direct Line to Us', detail: "Need to add a service, adjust the scope, or report an issue? You contact us directly — not a call center." },
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
                    <span>Small offices, professional suites, and co-working spaces that need regular upkeep</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>Medical and dental offices with specific sanitization requirements for exam rooms and waiting areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>Salons, fitness studios, and boutique retail where cleanliness is part of the client experience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>Growing businesses across{' '}
                      <Link href="/service-areas/harrisburg-pa" className="text-brand-blue hover:underline font-medium">Pennsylvania</Link>
                      {' '}and{' '}
                      <Link href="/service-areas/syracuse-ny" className="text-brand-blue hover:underline font-medium">New York</Link>
                      {' '}that want a reliable, local cleaning partner — not a franchise
                    </span>
                  </li>
                </ul>
                <div className="mt-8 p-5 bg-brand-light rounded-xl border border-gray-200">
                  <p className="font-heading font-bold text-brand-navy mb-2">PA &amp; NY Regional Context</p>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    Pennsylvania and New York have strict health and sanitation standards for commercial and medical spaces. A consistent, documented cleaning schedule from a licensed and insured provider supports compliance and workplace hygiene across the Northeast&apos;s often-challenging seasonal environment — including managing road salt and winter debris tracked through commercial entrances from November through March.
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
