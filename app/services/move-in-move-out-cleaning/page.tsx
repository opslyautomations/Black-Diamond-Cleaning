import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'

const faqs = [
  {
    question: 'Do you work with landlords and property managers?',
    answer: 'Yes. We handle recurring turnover cleanings for property management companies and Airbnb hosts. Ask about our volume pricing.',
  },
  {
    question: 'How soon can you schedule a move-out cleaning?',
    answer: 'Often within 48 hours. Call (215) 650-3101 for our current availability.',
  },
  {
    question: 'Do you guarantee the cleaning will pass inspection?',
    answer: "Our move-out cleanings are thorough enough to pass standard landlord inspections. If any issue arises, we'll come back and make it right.",
  },
]

export const metadata: Metadata = {
  title: { absolute: 'Move-In/Out Cleaning | Black Diamond Cleaning' },
  description:
    'Move-in & move-out cleaning from Black Diamond — transition-ready top-to-bottom cleaning across PA & NY. Get your deposit back. 4.9★ on Google. Free quote today.',
  alternates: { canonical: `${BASE_URL}/services/move-in-move-out-cleaning` },
  openGraph: {
    type: 'website',
    title: { absolute: 'Move-In/Out Cleaning | Black Diamond Cleaning' },
    description:
      'Move-in & move-out cleaning from Black Diamond — transition-ready top-to-bottom cleaning across PA & NY. Get your deposit back. 4.9★ on Google. Free quote today.',
    url: `${BASE_URL}/services/move-in-move-out-cleaning`,
    siteName: 'Black Diamond Cleaning Solutions',
    locale: 'en_US',
    images: [{
      url: ogImageUrl('Move-In & Move-Out Cleaning', 'Transition-Ready in Every Room — PA & NY'),
      secureUrl: ogImageUrl('Move-In & Move-Out Cleaning', 'Transition-Ready in Every Room — PA & NY'),
      width: 1200, height: 630,
      alt: 'Move-In/Move-Out Cleaning — Black Diamond Cleaning Solutions',
      type: 'image/png',
    }],
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
      <JsonLd data={serviceSchema('Move-In/Move-Out Cleaning', 'Transition-ready, top-to-bottom cleaning designed for empty homes. Perfect for renters getting a deposit back, homeowners selling, landlords turning units, or buyers preparing to move in.', 'move-in-move-out-cleaning')} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: 'Services', href: '/services/move-in-move-out-cleaning' }, { name: 'Move-In/Move-Out Cleaning', href: '/services/move-in-move-out-cleaning' }])} />
      <ServicePageTemplate
        h1="Move-In & Move-Out Cleaning — Transition-Ready in Every Room"
        description="Move-In/Move-Out Cleaning is a transition-ready, top-to-bottom clean designed for empty homes. Perfect for renters getting a deposit back, homeowners selling, landlords turning units, or buyers preparing to move in."
        included={[
          'Full deep-clean of every room — empty homes get our most thorough service',
          'Inside all cabinets, drawers, and closets',
          'Inside oven, fridge, microwave, and dishwasher',
          'All baseboards, door frames, and window sills',
          'Interior windows and glass surfaces',
          'Detailed bathroom scrubbing including tile and grout',
          'Vacuum and mop entire floor plan',
          'Garage sweep-out (upon request)',
        ]}
        benefits={[
          { emoji: '🔑', title: 'Move-In Ready or Move-Out Certified', description: "Every single time — a thorough clean that meets landlord and buyer standards." },
          { emoji: '💵', title: 'Get Your Deposit Back', description: "Thorough enough to pass landlord inspections and reclaim your full security deposit." },
          { emoji: '🏢', title: 'Property Manager Approved', description: "Trusted for unit turnovers and Airbnb resets by property managers region-wide." },
        ]}
        faqs={faqs}
        relatedServices={[
          { name: 'Deep Cleaning', href: '/services/deep-cleaning' },
          { name: 'Standard Cleaning', href: '/services/standard-cleaning' },
          { name: 'Commercial Cleaning', href: '/services/commercial-cleaning' },
        ]}
      />
    </>
  )
}
