import Link from 'next/link'
import { Phone, MapPin, CheckCircle, Sparkles, Star, Home, CalendarCheck, Building2, ArrowRight } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL, services } from '@/lib/data'
import GHLForm from '@/components/GHLForm'

const serviceIconsMap: Record<string, React.ElementType> = {
  Sparkles, Star, Home, CalendarCheck, Building2,
}

interface LocationPageProps {
  city: string
  state: string
  intro: string
  reasons: string[]
  nearbyAreas: string[]
}

export default function LocationPageTemplate({ city, state, intro, reasons, nearbyAreas }: LocationPageProps) {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-brand-navy to-[#132040] text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
              <MapPin className="w-4 h-4" />
              {city}, {state}
            </div>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-6 leading-tight">
              Professional House Cleaning in {city}, {state}
            </h1>
            <p className="text-white/80 text-xl mb-8 leading-relaxed">{intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary py-3.5 px-8">
                Get a Free Quote
              </Link>
              <a href={`tel:${PHONE_TEL}`} className="btn-outline-white py-3.5 px-8">
                <Phone className="w-5 h-5" />
                Call {PHONE_DISPLAY}
              </a>
            </div>
            <div className="flex flex-wrap gap-4 mt-6 text-white/55 text-sm">
              <span>⭐ 4.9 Google Rating</span>
              <span>·</span>
              <span>500+ Homes Cleaned</span>
              <span>·</span>
              <span>Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading font-bold text-3xl text-brand-navy mb-8">
                Why {city} Residents Choose Black Diamond
              </h2>
              <ul className="space-y-5">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-brand-light rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-5 h-5 text-brand-blue" />
                    </div>
                    <span className="text-brand-gray text-lg leading-snug">{reason}</span>
                  </li>
                ))}
              </ul>

              {nearbyAreas.length > 0 && (
                <div className="mt-10">
                  <h3 className="font-heading font-bold text-lg text-brand-navy mb-4">
                    Also Serving Nearby Areas
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {nearbyAreas.map((area) => (
                      <span key={area} className="px-3 py-1.5 bg-brand-light rounded-full text-sm text-brand-navy font-medium border border-gray-200">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Trust signals */}
            <div className="bg-brand-light rounded-2xl p-8">
              <h3 className="font-heading font-bold text-xl text-brand-navy mb-6">
                The Black Diamond Promise
              </h3>
              <div className="space-y-4">
                {[
                  { icon: <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />, text: '4.9-Star Google Rating' },
                  { icon: <CheckCircle className="w-5 h-5 text-brand-blue" />, text: '500+ Homes Cleaned' },
                  { icon: <Home className="w-5 h-5 text-brand-blue" />, text: 'Licensed & Insured' },
                  { icon: <CheckCircle className="w-5 h-5 text-brand-blue" />, text: '100% Satisfaction Guarantee' },
                  { icon: <Phone className="w-5 h-5 text-brand-blue" />, text: 'Real Person Answers Every Call' },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3 bg-white rounded-xl p-4">
                    {icon}
                    <span className="font-semibold text-brand-navy text-sm">{text}</span>
                  </div>
                ))}
              </div>
              <a href={`tel:${PHONE_TEL}`} className="mt-6 flex items-center justify-center gap-2 w-full bg-brand-blue text-white font-semibold py-3.5 rounded-xl hover:bg-blue-700 transition-colors">
                <Phone className="w-5 h-5" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES AVAILABLE ── */}
      <section className="section-padding bg-brand-light">
        <div className="section-container">
          <h2 className="font-heading font-bold text-3xl text-brand-navy mb-3 text-center">
            Services Available in {city}, {state}
          </h2>
          <p className="text-brand-gray text-center mb-10">
            All five of our cleaning services are available in the {city} area.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => {
              const Icon = serviceIconsMap[service.icon]
              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-start gap-4 hover:border-brand-blue hover:shadow-md transition-all"
                >
                  <div className="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-brand-navy mb-1 group-hover:text-brand-blue transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-brand-gray text-sm leading-snug">{service.description}</p>
                    <span className="inline-flex items-center gap-1 mt-2 text-brand-blue text-xs font-semibold group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── GHL QUOTE FORM ── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-brand-navy mb-3 text-center">
              Get Your Free Quote in {city}
            </h2>
            <p className="text-brand-gray text-center mb-8">
              Fill out the form and we&apos;ll get back to you fast. Or call{' '}
              <a href={`tel:${PHONE_TEL}`} className="text-brand-blue font-semibold hover:underline">
                {PHONE_DISPLAY}
              </a>
              .
            </p>
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-100">
              <GHLForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-brand-navy py-20">
        <div className="section-container text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Ready for a Spotless Home in {city}?
          </h2>
          <p className="text-white/75 text-lg max-w-xl mx-auto mb-4">
            Join hundreds of {state} homeowners who trust Black Diamond. Get your free quote today.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-white/50 text-sm mb-8">
            <span>⭐ 4.9 Google Rating</span>
            <span>·</span>
            <span>Licensed & Insured</span>
            <span>·</span>
            <span>100% Satisfaction Guarantee</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary py-4 px-10 text-base">
              Get a Free Quote
            </Link>
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
