import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Shield, CheckCircle, Award, Heart, Zap } from 'lucide-react'
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
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-brand-light">
              <Image
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Black Diamond Cleaning team delivering professional house cleaning service"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">Our Story</h2>
              <p className="text-brand-gray text-lg leading-relaxed mb-6">
                Black Diamond Cleaning Solutions was founded to bring premium house cleaning and maid service to the East Coast. Our founder, Joe, owns rental properties and experienced firsthand the frustrations of unreliable cleaning services — missed appointments, inconsistent quality, and poor communication. Determined to do better, Joe launched Black Diamond to provide professional cleaning that eliminates the headaches.
              </p>
              <h3 className="font-heading font-bold text-xl text-brand-navy mb-4">What We Do</h3>
              <p className="text-brand-gray text-lg leading-relaxed mb-6">
                Whether you need deep cleaning, move-out cleaning, or recurring cleaning for your home, we deliver meticulous results every time. In just over a year, we&apos;ve proudly served 500+ customers and earned a 4.9-star Google rating. Homeowners, renters, property management companies, Airbnb hosts, and small commercial buildings trust Black Diamond for residential cleaning that shines.
              </p>
              <ul className="space-y-3">
                {[
                  'Trained, background-checked cleaners',
                  'Detailed checklists on every visit',
                  'Reliable scheduling and real-time communication',
                  'Fully licensed and insured',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-brand-gray">{item}</span>
                  </li>
                ))}
              </ul>
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
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
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
            <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-brand-light flex items-center justify-center">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                alt="Joe, founder of Black Diamond Cleaning Solutions LLC"
                width={600}
                height={800}
                className="w-full h-full object-cover"
              />
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
