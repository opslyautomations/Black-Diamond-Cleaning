import type { Metadata } from 'next'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'

const faqs = [
  {
    question: 'How long does a standard cleaning take?',
    answer: "Most homes take between 2 and 4 hours depending on size and condition. We'll give you an accurate time estimate when you request a quote.",
  },
  {
    question: 'Do I need to provide supplies?',
    answer: "No. We bring all cleaning supplies and professional-grade equipment. If you have preferred eco-friendly products, let us know and we'll use them.",
  },
  {
    question: 'Should I be home during the cleaning?',
    answer: "That's entirely up to you. Most of our clients leave us a key or code so they can come home to a spotless house.",
  },
]

export const metadata: Metadata = {
  title: 'Standard Cleaning | Black Diamond Cleaning Solutions — PA & NY',
  description:
    'Standard house cleaning from Black Diamond — professional whole-home cleaning across PA & NY. 4.9★ on Google. Consistent quality every visit. Get a free quote today.',
  alternates: { canonical: `${BASE_URL}/services/standard-cleaning` },
  openGraph: {
    type: 'website',
    title: 'Standard Cleaning | Black Diamond Cleaning Solutions — PA & NY',
    description:
      'Standard house cleaning from Black Diamond — professional whole-home cleaning across PA & NY. 4.9★ on Google. Consistent quality every visit. Get a free quote today.',
    url: `${BASE_URL}/services/standard-cleaning`,
    siteName: 'Black Diamond Cleaning Solutions LLC',
    locale: 'en_US',
    images: [{
      url: ogImageUrl('Standard House Cleaning', 'Consistent Quality Every Visit — PA & NY'),
      secureUrl: ogImageUrl('Standard House Cleaning', 'Consistent Quality Every Visit — PA & NY'),
      width: 1200, height: 630,
      alt: 'Standard House Cleaning — Black Diamond Cleaning Solutions',
      type: 'image/png',
    }],
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
      <JsonLd data={serviceSchema('Standard House Cleaning', 'Consistent, professional whole-home cleaning that keeps your space fresh, hygienic, and welcoming.', 'standard-cleaning')} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: 'Services', href: '/services/standard-cleaning' }, { name: 'Standard Cleaning', href: '/services/standard-cleaning' }])} />
      <ServicePageTemplate
        h1="Standard House Cleaning — Consistent Quality, Every Visit"
        description="Our Standard Cleaning is the reliable, consistent whole-home cleaning that keeps your space fresh, hygienic, and welcoming. Perfect for homeowners and renters who want professional upkeep without the hassle."
        included={[
          'Dust all accessible surfaces, furniture, and fixtures',
          'Vacuum carpets and rugs; sweep and mop hard floors',
          'Clean and sanitize kitchen counters, stovetop, and exterior of appliances',
          'Scrub and sanitize bathrooms (toilets, showers, sinks, mirrors)',
          'Empty trash and change visible liners',
          'Make beds and tidy common areas',
          'Wipe down light switches, door handles, and baseboards',
        ]}
        benefits={[
          { emoji: '✨', title: 'Consistent Quality', description: "Same premium result every visit — trained teams, detailed checklists." },
          { emoji: '🕒', title: 'Flexible Scheduling', description: "Fits easily into weekly or bi-weekly plans around your lifestyle." },
          { emoji: '💛', title: 'Hands-Off', description: "We handle every detail so you don't have to think about it." },
        ]}
        faqs={faqs}
        relatedServices={[
          { name: 'Deep Cleaning', href: '/services/deep-cleaning' },
          { name: 'Recurring Cleaning', href: '/services/recurring-cleaning' },
          { name: 'Move-In/Move-Out Cleaning', href: '/services/move-in-move-out-cleaning' },
        ]}
      />
    </>
  )
}
