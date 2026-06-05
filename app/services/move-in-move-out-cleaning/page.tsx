import type { Metadata } from 'next'
import Link from 'next/link'
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
    answer: 'Often within 48 hours. Call us for current availability.',
  },
  {
    question: 'Do you guarantee the cleaning will pass inspection?',
    answer: "Our move-out cleanings are thorough enough to pass standard landlord inspections. If any issue arises, we'll come back and make it right.",
  },
  {
    question: "What's the difference between move-in and move-out cleaning?",
    answer: "The process is the same — a complete, empty-home clean from top to bottom. The difference is timing and purpose: move-out cleaning is for the departing tenant or owner, typically aimed at getting a security deposit back. Move-in cleaning is for the arriving resident who wants to start fresh in a properly cleaned space, regardless of how it was left.",
  },
  {
    question: 'Do you handle Airbnb and short-term rental turnover cleaning?',
    answer: "Yes. We work with short-term rental hosts across Pennsylvania and New York for fast, consistent between-guest turnovers — bathroom resets, linen changes, kitchen cleanup, restocking checklists upon request, and a finished result that's guest-ready.",
  },
  {
    question: 'How do you handle move-out cleans around lease dates in PA and NY?',
    answer: "Lease concentrations in university towns like State College and Syracuse mean demand spikes in July and August. In those markets we recommend booking 2–3 weeks ahead during peak season. In non-university markets we can often accommodate 48-hour turnaround. Call us to confirm current availability.",
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
          'Complete empty-home clean of every room, floor to ceiling',
          'Kitchen: inside oven (racks included), inside refrigerator, inside dishwasher and microwave; all cabinet and drawer interiors; under and around appliances',
          'Bathrooms: full tile and grout scrubbing; tub and shower reset; toilet inside and out; sink and vanity; mirrors; floor',
          'Throughout: all baseboards, door frames, and window sills; interior windows and glass doors; walls wiped for scuffs and marks',
          'All closet interiors swept or vacuumed; shelves wiped',
          'Vacuum and mop entire floor plan; detailed vacuum of edges and transitions',
          'Garage or utility room sweep (upon request)',
        ]}
        benefits={[
          { emoji: '🔑', title: 'Move-In Ready or Move-Out Certified', description: "Every single time — a thorough clean that meets landlord, buyer, and property manager standards." },
          { emoji: '💵', title: 'Get Your Deposit Back', description: "Thorough enough to pass landlord inspections and support reclaiming your full security deposit." },
          { emoji: '🏢', title: 'Property Manager Approved', description: "Trusted for unit turnovers, Airbnb resets, and real estate transitions by property managers across PA and NY." },
        ]}
        faqs={faqs}
        relatedServices={[
          { name: 'Deep Cleaning', href: '/services/deep-cleaning' },
          { name: 'Standard Cleaning', href: '/services/standard-cleaning' },
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
                    { step: '1', title: 'Book Early', detail: 'Contact us with your move-out or move-in date and property address. We confirm availability and give you an accurate quote.' },
                    { step: '2', title: 'We Arrive After the Home Is Empty', detail: 'Empty homes get our most thorough service — nothing in the way means nothing missed.' },
                    { step: '3', title: 'Systematic Room-by-Room Clean', detail: 'We start with kitchens and bathrooms (the most time-intensive areas) and work through every room, inside every appliance and cabinet.' },
                    { step: '4', title: 'Final Walkthrough', detail: 'We inspect every area before leaving. The standard is: a landlord could walk in immediately, or a new tenant could move in the next day.' },
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
                    <span>Renters vacating a rental who need a deposit-return clean</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>Landlords and property managers turning over a unit between tenants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>Buyers who want to clean before moving into a home, regardless of how it was left</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>Airbnb and short-term rental hosts who need reliable between-guest turnovers across{' '}
                      <Link href="/service-areas/scranton-pa" className="text-brand-blue hover:underline font-medium">Pennsylvania</Link>
                      {' '}and{' '}
                      <Link href="/service-areas/buffalo-ny" className="text-brand-blue hover:underline font-medium">New York</Link>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>Student-rental landlords managing semester-end turnovers near Penn State, Syracuse University, and other PA/NY campuses</span>
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
