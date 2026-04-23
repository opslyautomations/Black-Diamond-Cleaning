import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'

const faqs = [
  {
    question: 'What size businesses do you serve?',
    answer: 'Small offices, medical suites, salons, fitness studios, and commercial buildings typically under 10,000 square feet.',
  },
  {
    question: 'Do you offer nightly or weekly service?',
    answer: "Yes. Most commercial clients choose weekly or bi-weekly — we'll recommend the right frequency for your space.",
  },
  {
    question: 'Are you insured for commercial work?',
    answer: 'Yes — we are fully licensed and insured for both residential and commercial cleaning.',
  },
]

export const metadata: Metadata = {
  title: 'Commercial Cleaning | Black Diamond Cleaning Solutions — PA & NY',
  description:
    'Commercial cleaning from Black Diamond — small offices, medical suites & salons across PA & NY. After-hours available. 4.9★ on Google. Get a free quote today.',
  alternates: { canonical: `${BASE_URL}/services/commercial-cleaning` },
  openGraph: {
    type: 'website',
    title: 'Commercial Cleaning | Black Diamond Cleaning Solutions — PA & NY',
    description:
      'Commercial cleaning from Black Diamond — small offices, medical suites & salons across PA & NY. After-hours available. 4.9★ on Google. Get a free quote today.',
    url: `${BASE_URL}/services/commercial-cleaning`,
    siteName: 'Black Diamond Cleaning Solutions LLC',
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
          'Dust and sanitize workstations, reception, and common areas',
          'Clean and sanitize break rooms and kitchenettes',
          'Thorough restroom cleaning and restocking (upon request)',
          'Vacuum carpets; sweep and mop hard floors',
          'Glass and interior window cleaning',
          'Trash removal and liner replacement',
          'After-hours or weekend availability',
        ]}
        benefits={[
          { emoji: '🏢', title: 'Built for Small Business', description: "Not enterprise-scale contracts — flexible service sized right for small offices and commercial spaces." },
          { emoji: '🕔', title: 'After-Hours & Weekends', description: "We clean when you're closed so your team arrives to a fresh workspace every morning." },
          { emoji: '📞', title: 'Direct Communication', description: "You deal with us directly, not a call center — fast, reliable, responsive." },
        ]}
        faqs={faqs}
        relatedServices={[
          { name: 'Recurring Cleaning', href: '/services/recurring-cleaning' },
          { name: 'Standard Cleaning', href: '/services/standard-cleaning' },
          { name: 'Deep Cleaning', href: '/services/deep-cleaning' },
        ]}
      />
    </>
  )
}
