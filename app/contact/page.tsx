import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, Clock, MapPin, ExternalLink } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, GBP_URL, serviceAreasPa, serviceAreasNy } from '@/lib/data'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import JsonLd from '@/components/JsonLd'
import GHLForm from '@/components/GHLForm'

export const metadata: Metadata = {
  title: 'Contact Black Diamond Cleaning Solutions | Get a Free Quote Today',
  description:
    'Contact Black Diamond Cleaning Solutions for a free house cleaning quote across PA & NY. Call (215) 650-3101 or fill out our form. Same-day service often available.',
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    type: 'website',
    title: 'Contact Black Diamond Cleaning Solutions | Get a Free Quote Today',
    description: 'Contact Black Diamond Cleaning Solutions for a free house cleaning quote across PA & NY. Call (215) 650-3101 or fill out our form.',
    url: `${BASE_URL}/contact`,
    siteName: 'Black Diamond Cleaning Solutions LLC',
    locale: 'en_US',
    images: [{ url: ogImageUrl('Get a Free Quote', 'Contact Black Diamond Cleaning Solutions'), secureUrl: ogImageUrl('Get a Free Quote', 'Contact Black Diamond Cleaning Solutions'), width: 1200, height: 630, alt: 'Contact Black Diamond Cleaning Solutions — Free Quote', type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', title: 'Contact Black Diamond Cleaning Solutions', description: 'Get a free house cleaning quote across PA & NY. Call (215) 650-3101.', images: [ogImageUrl('Get a Free Quote', 'Contact Black Diamond Cleaning Solutions')] },
  robots: defaultRobots,
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Contact', href: '/contact' }])} />

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-brand-navy to-[#132040] text-white py-20">
        <div className="section-container text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-6">
            Contact Black Diamond Cleaning Solutions
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            Get your free quote in minutes. We&apos;ll get back to you fast.
          </p>
          <p className="text-white/50 text-sm mt-3">⚡ Same-Day Service Available · Limited Spots This Week</p>
        </div>
      </section>

      {/* ── CONTACT LAYOUT ── */}
      <section className="section-padding bg-brand-light">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Left — GHL Form */}
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6">
              <h2 className="font-heading font-bold text-2xl text-brand-navy mb-1">Get Your Free Quote</h2>
              <p className="text-brand-gray text-sm mb-4">Fill out the form and we&apos;ll respond within hours.</p>
              <GHLForm />
            </div>

            {/* Right — Contact Info */}
            <div className="space-y-5">

              {/* Phone */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-gray uppercase tracking-wider mb-1">Phone</p>
                    <a href={`tel:${PHONE_TEL}`} className="font-heading font-bold text-xl text-brand-navy hover:text-brand-blue transition-colors">
                      {PHONE_DISPLAY}
                    </a>
                    <p className="text-brand-gray text-sm">Click to call — we answer fast</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-gray uppercase tracking-wider mb-1">Email</p>
                    <a href={`mailto:${EMAIL}`} className="font-heading font-semibold text-brand-navy hover:text-brand-blue transition-colors break-all">
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-gray uppercase tracking-wider mb-3">Business Hours</p>
                    <div className="space-y-1.5">
                      <div className="flex justify-between gap-8">
                        <span className="text-brand-gray text-sm">Monday–Friday</span>
                        <span className="font-semibold text-brand-navy text-sm">8:00 AM – 6:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span className="text-brand-gray text-sm">Saturday</span>
                        <span className="font-semibold text-brand-navy text-sm">9:00 AM – 4:00 PM</span>
                      </div>
                      <div className="flex justify-between gap-8">
                        <span className="text-brand-gray text-sm">Sunday</span>
                        <span className="font-semibold text-brand-navy text-sm">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service areas */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-brand-gray uppercase tracking-wider mb-1">Service Style</p>
                    <p className="font-semibold text-brand-navy mb-3">Mobile Service — We Come to You</p>
                    <p className="text-xs font-bold text-brand-gray uppercase tracking-wider mb-2">Service Areas</p>
                    <div className="flex flex-wrap gap-1.5">
                      {[...serviceAreasPa, ...serviceAreasNy].map((area) => (
                        <Link key={area.href} href={area.href} className="px-2.5 py-1 bg-brand-light text-brand-navy text-xs font-medium rounded-full hover:bg-brand-blue hover:text-white transition-colors">
                          {area.name}, {area.state}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* GBP */}
              <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-brand-blue transition-colors group">
                <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0">
                  <ExternalLink className="w-5 h-5 text-brand-blue" />
                </div>
                <div>
                  <p className="font-semibold text-brand-navy group-hover:text-brand-blue transition-colors">View on Google Business</p>
                  <p className="text-sm text-brand-gray">See our reviews and hours on Google</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="section-container text-center">
          <p className="text-brand-gray text-lg">
            Prefer to talk?{' '}
            <a href={`tel:${PHONE_TEL}`} className="text-brand-blue font-bold hover:underline">
              Call {PHONE_DISPLAY}
            </a>{' '}
            — we answer fast.
          </p>
        </div>
      </section>
    </>
  )
}
