import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Shield, CheckCircle, Award, Heart, Zap, Diamond, Star } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/data'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'About Black Diamond Cleaning Solutions | Trusted House Cleaners in PA & NY',
  description:
    'About Black Diamond Cleaning Solutions — founded by Joe to bring reliable, consistent house cleaning to PA & NY. 4.9★ on Google. 500+ homes cleaned. Learn our story.',
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    type: 'website',
    title: 'About Black Diamond Cleaning Solutions | Trusted House Cleaners in PA & NY',
    description: 'About Black Diamond Cleaning Solutions — founded by Joe to bring reliable, consistent house cleaning to PA & NY. 4.9★ on Google. 500+ homes cleaned.',
    url: `${BASE_URL}/about`,
    siteName: 'Black Diamond Cleaning Solutions LLC',
    locale: 'en_US',
    images: [{ url: ogImageUrl('About Black Diamond Cleaning Solutions', 'Built on Reliability, Consistency & Care'), secureUrl: ogImageUrl('About Black Diamond Cleaning Solutions', 'Built on Reliability, Consistency & Care'), width: 1200, height: 630, alt: 'About Black Diamond Cleaning Solutions', type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', title: 'About Black Diamond Cleaning Solutions', description: 'Trusted house cleaning across PA & NY. Founded by Joe. 4.9★ Google.', images: [ogImageUrl('About Black Diamond Cleaning Solutions', 'Built on Reliability, Consistency & Care')] },
  robots: defaultRobots,
}

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'About', href: '/about' }])} />

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-brand-navy to-[#132040] text-white py-20">
        <div className="section-container text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-6">
            About Black Diamond Cleaning Solutions
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            A premium house cleaning service built on reliability, consistency, and care.
          </p>
        </div>
      </section>

      {/* ── OUR STORY ── */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">Our Story</h2>
          <p className="text-brand-gray text-lg leading-relaxed mb-6">
            Black Diamond Cleaning Solutions was founded to bring premium house cleaning and maid service to the East Coast. Our founder, Joe, owns rental properties and experienced firsthand the frustrations of unreliable cleaning services — missed appointments, inconsistent quality, and poor communication. Determined to do better, Joe launched Black Diamond to provide professional cleaning that eliminates the headaches.
          </p>
          <h3 className="font-heading font-bold text-xl text-brand-navy mb-4">What We Do</h3>
          <p className="text-brand-gray text-lg leading-relaxed mb-8">
            Whether you need deep cleaning, move-out cleaning, or recurring cleaning for your home, we deliver meticulous results every time. In just over a year, we&apos;ve proudly served 500+ customers and earned a 4.9-star Google rating. Homeowners, renters, property management companies, Airbnb hosts, and small commercial buildings trust Black Diamond for residential cleaning that shines.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              'Trained, background-checked cleaners',
              'Detailed checklists on every visit',
              'Reliable scheduling and real-time communication',
              'Fully licensed and insured',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-brand-light rounded-xl p-4">
                <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                <span className="text-brand-navy font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-6 text-center">
            <div className="bg-brand-light rounded-xl p-6">
              <p className="font-heading font-bold text-3xl text-brand-blue mb-1">500+</p>
              <p className="text-brand-gray text-sm">Homes Cleaned</p>
            </div>
            <div className="bg-brand-light rounded-xl p-6">
              <p className="font-heading font-bold text-3xl text-brand-blue mb-1">4.9★</p>
              <p className="text-brand-gray text-sm">Google Rating</p>
            </div>
            <div className="bg-brand-light rounded-xl p-6">
              <p className="font-heading font-bold text-3xl text-brand-blue mb-1">2</p>
              <p className="text-brand-gray text-sm">States Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VALUES ── */}
      <section className="section-padding bg-brand-light">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy mb-4">Our Values</h2>
            <p className="text-brand-gray text-lg max-w-xl mx-auto">Three principles drive every cleaning we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard icon={<Zap className="w-7 h-7 text-brand-blue" />} title="Reliability" description="We honor every appointment. No surprises." />
            <ValueCard icon={<Award className="w-7 h-7 text-brand-blue" />} title="Consistency" description="The same premium quality, every single clean." />
            <ValueCard icon={<Heart className="w-7 h-7 text-brand-blue" />} title="Care" description="We treat your home like our own." />
          </div>
        </div>
      </section>

      {/* ── MEET JOE ── */}
      <section className="section-padding bg-white">
        <div className="section-container max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">Meet Joe</h2>
              <p className="text-brand-gray text-lg leading-relaxed mb-6">
                As a rental property owner, Joe saw the cleaning industry from the customer side — and knew it had to be better. He built Black Diamond to set a new standard for house cleaning on the East Coast. Today, he personally oversees the quality of every cleaning team we send out.
              </p>
              <div className="flex items-center gap-3 p-4 bg-brand-light rounded-xl">
                <Shield className="w-8 h-8 text-brand-blue flex-shrink-0" />
                <p className="text-brand-gray text-sm">
                  <span className="font-semibold text-brand-navy">Fully Licensed &amp; Insured.</span>{' '}
                  Every cleaning is backed by our insurance and our satisfaction guarantee.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-brand-navy to-[#132040] rounded-2xl p-10 flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-5">
                <Diamond className="w-10 h-10 text-white" fill="rgba(255,255,255,0.15)" />
              </div>
              <p className="font-heading font-bold text-white text-2xl mb-1">Joe</p>
              <p className="text-white/60 text-sm mb-6">Founder &amp; Owner</p>
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-white/75 text-sm italic leading-relaxed">
                &ldquo;I built Black Diamond because I know what it feels like to be let down by a cleaning service. We do not miss appointments. We do not cut corners.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-navy py-20">
        <div className="section-container text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Experience the Black Diamond Difference
          </h2>
          <p className="text-white/75 text-lg max-w-xl mx-auto mb-10">
            Join 500+ satisfied customers across Pennsylvania and New York.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary py-4 px-10 text-base">Get Your Free Quote</Link>
            <a href={`tel:${PHONE_TEL}`} className="btn-outline-white py-4 px-10 text-base">
              <Phone className="w-5 h-5" />
              Call {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function ValueCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center">
      <div className="w-16 h-16 bg-brand-light rounded-2xl flex items-center justify-center mx-auto mb-5">{icon}</div>
      <h3 className="font-heading font-bold text-xl text-brand-navy mb-3">{title}</h3>
      <p className="text-brand-gray">{description}</p>
    </div>
  )
}
