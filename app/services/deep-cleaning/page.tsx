import type { Metadata } from 'next'
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
    answer: "Standard cleaning maintains a home. Deep cleaning resets it. Deep cleanings take longer and address areas a standard clean doesn't touch — inside appliances, tile grout, baseboards, and more.",
  },
  {
    question: 'Is the 15% first-time discount available for deep cleaning?',
    answer: "Yes — new customers save 15% on their first Deep Cleaning. Mention the offer when you request your quote.",
  },
]

export const metadata: Metadata = {
  title: 'Deep Cleaning | Black Diamond Cleaning Solutions — PA & NY',
  description:
    'Deep cleaning service from Black Diamond — top-to-bottom intensive cleaning across PA & NY. New customers save 15%. 4.9★ on Google. Get a free quote today.',
  alternates: { canonical: `${BASE_URL}/services/deep-cleaning` },
  openGraph: {
    type: 'website',
    title: 'Deep Cleaning | Black Diamond Cleaning Solutions — PA & NY',
    description:
      'Deep cleaning service from Black Diamond — top-to-bottom intensive cleaning across PA & NY. New customers save 15%. 4.9★ on Google. Get a free quote today.',
    url: `${BASE_URL}/services/deep-cleaning`,
    siteName: 'Black Diamond Cleaning Solutions LLC',
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
          'Inside-oven and inside-fridge cleaning (upon request)',
          'Baseboards, door frames, and window sills hand-wiped',
          'Detailed bathroom scrubbing — tile grout, shower tracks, behind toilet',
          'Detailed kitchen — backsplash, cabinet fronts, under small appliances',
          'Light fixtures and ceiling fans dusted',
          'Interior window cleaning on accessible windows',
          'Detailed vacuuming under and around furniture',
        ]}
        benefits={[
          { emoji: '🧽', title: 'Months of Buildup Gone', description: "In a single visit, we tackle every surface a standard clean doesn't reach." },
          { emoji: '🏡', title: 'The Perfect Reset', description: "Ideal for first-time or seasonal cleans — your home comes back to life." },
          { emoji: '💎', title: 'Recommended Starting Point', description: "The best first clean before starting a recurring maintenance plan." },
        ]}
        faqs={faqs}
        relatedServices={[
          { name: 'Standard Cleaning', href: '/services/standard-cleaning' },
          { name: 'Move-In/Move-Out Cleaning', href: '/services/move-in-move-out-cleaning' },
          { name: 'Recurring Cleaning', href: '/services/recurring-cleaning' },
        ]}
      />
    </>
  )
}
