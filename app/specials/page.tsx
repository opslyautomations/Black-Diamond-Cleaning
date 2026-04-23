import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/data'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import JsonLd from '@/components/JsonLd'
import GHLForm from '@/components/GHLForm'

export const metadata: Metadata = {
  title: 'Current Specials | Black Diamond Cleaning Solutions — PA & NY',
  description:
    'Save on professional house cleaning — 15% off your first deep cleaning for new customers. Plus recurring plan savings and property manager pricing. Get a free quote.',
  alternates: { canonical: `${BASE_URL}/specials` },
  openGraph: {
    type: 'website',
    title: 'Current Specials | Black Diamond Cleaning Solutions — PA & NY',
    description: 'Save on professional house cleaning — 15% off your first deep cleaning for new customers. Plus recurring plan savings and property manager pricing.',
    url: `${BASE_URL}/specials`,
    siteName: 'Black Diamond Cleaning Solutions LLC',
    locale: 'en_US',
    images: [{ url: ogImageUrl('Current Specials & Offers', '15% Off Your First Deep Cleaning — New Customers'), secureUrl: ogImageUrl('Current Specials & Offers', '15% Off Your First Deep Cleaning — New Customers'), width: 1200, height: 630, alt: 'Black Diamond Cleaning Specials — 15% Off First Deep Clean', type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', title: 'Current Specials | Black Diamond Cleaning Solutions', description: '15% off your first deep cleaning. New customers only. Get a free quote.', images: [ogImageUrl('Current Specials & Offers', '15% Off Your First Deep Cleaning — New Customers')] },
  robots: defaultRobots,
}

export default function SpecialsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Specials', href: '/specials' }])} />

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-brand-navy to-[#132040] text-white py-20">
        <div className="section-container text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-6">
            Current Specials &amp; Offers
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Save on premium cleaning with our limited-time offers.
          </p>
        </div>
      </section>

      {/* ── OFFERS ── */}
      <section className="section-padding bg-brand-light">
        <div className="section-container">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Primary Offer */}
            <div className="bg-brand-blue rounded-2xl p-8 sm:p-10 text-white shadow-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="text-5xl">🎉</div>
                <div className="flex-1">
                  <div className="inline-block bg-white/20 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider mb-3">
                    Featured Offer · New Customers Only
                  </div>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3">
                    15% Off Your First Deep Cleaning
                  </h2>
                  <p className="text-white/85 text-lg leading-relaxed mb-2">
                    New customers only. Save 15% on your first Deep Cleaning with Black Diamond. Experience the premium difference — risk-free.
                  </p>
                  <p className="text-white/60 text-sm mb-6">
                    ⚡ Same-day service available · Limited spots this week
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-brand-blue font-bold px-7 py-3.5 rounded-lg hover:bg-gray-50 transition-colors font-heading">
                      Claim This Offer <ArrowRight className="w-4 h-4" />
                    </Link>
                    <a href={`tel:${PHONE_TEL}`} className="btn-outline-white py-3.5 px-7">
                      <Phone className="w-4 h-4" />
                      Call to Book
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Offers */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <SecondaryOffer emoji="🤝" title="Refer-a-Friend Bonus" description="Refer a friend and you both save. Ask us for details when you book." badge="Ongoing" />
              <SecondaryOffer emoji="📅" title="Recurring Plan Savings" description="Save per visit when you choose a weekly, bi-weekly, or monthly recurring plan." badge="Always Available" />
              <SecondaryOffer emoji="🏢" title="Property Manager Pricing" description="Volume discounts for property management companies and Airbnb hosts. Ask about portfolio pricing." badge="Ask for Details" />
            </div>
          </div>
        </div>
      </section>

      {/* ── GHL FORM + FINAL CTA ── */}
      <section className="bg-brand-navy py-20">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl text-white mb-4">Lock In Your Savings Today</h2>
            <p className="text-white/75 text-lg max-w-xl mx-auto mb-2">
              Offers are limited. Get your free quote below or call us directly.
            </p>
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 text-brand-blue font-bold text-lg hover:underline">
              <Phone className="w-5 h-5" />
              {PHONE_DISPLAY}
            </a>
            <p className="text-white/50 text-sm mt-2">⚡ Same-day service available · 15% Off Ends Soon — New Customers</p>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <GHLForm />
          </div>
        </div>
      </section>
    </>
  )
}

function SecondaryOffer({ emoji, title, description, badge }: { emoji: string; title: string; description: string; badge: string }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="inline-block bg-brand-light text-brand-blue text-xs font-bold px-3 py-1 rounded-full mb-4">{badge}</div>
      <div className="text-3xl mb-3">{emoji}</div>
      <h3 className="font-heading font-bold text-lg text-brand-navy mb-2">{title}</h3>
      <p className="text-brand-gray text-sm leading-relaxed mb-4">{description}</p>
      <Link href="/contact" className="inline-flex items-center gap-1 text-brand-blue font-semibold text-sm hover:gap-2 transition-all">
        Ask About This <ArrowRight className="w-3 h-3" />
      </Link>
    </div>
  )
}
