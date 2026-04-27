import type { Metadata } from 'next'
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
          'All Standard Cleaning services, on your chosen schedule',
          'Same assigned cleaning team whenever possible',
          'Priority scheduling over one-time customers',
          'Discounted rate vs. one-time cleaning',
          'Easy rescheduling via text or phone',
          'Flexible frequency — change your plan any time',
        ]}
        benefits={[
          { emoji: '💰', title: 'Lower Per-Visit Price', description: "Recurring plans cost less per visit than one-time service — premium cleaning at a better value." },
          { emoji: '👥', title: 'Same Trusted Team', description: "Your assigned team learns your home's specific needs and preferences over time." },
          { emoji: '📅', title: 'Never Think About Cleaning Again', description: "It's just handled. Set your schedule and come home to a spotless house, every time." },
        ]}
        faqs={faqs}
        relatedServices={[
          { name: 'Standard Cleaning', href: '/services/standard-cleaning' },
          { name: 'Deep Cleaning', href: '/services/deep-cleaning' },
          { name: 'Commercial Cleaning', href: '/services/commercial-cleaning' },
        ]}
      />
    </>
  )
}
