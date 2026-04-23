import Link from 'next/link'
import { Phone, CheckCircle, ArrowRight } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/data'
import GHLForm from '@/components/GHLForm'

interface Benefit {
  emoji: string
  title: string
  description: string
}

interface FAQ {
  question: string
  answer: string
}

interface RelatedService {
  name: string
  href: string
}

interface ServicePageProps {
  h1: string
  description: string
  included: string[]
  benefits: Benefit[]
  faqs: FAQ[]
  relatedServices: RelatedService[]
}

export default function ServicePageTemplate({
  h1,
  description,
  included,
  benefits,
  faqs,
  relatedServices,
}: ServicePageProps) {
  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-brand-navy to-[#132040] text-white py-20">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-6 leading-tight">
              {h1}
            </h1>
            <p className="text-white/80 text-xl mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
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
              <span>Licensed & Insured</span>
              <span>·</span>
              <span>Satisfaction Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED + BENEFITS ── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-heading font-bold text-3xl text-brand-navy mb-8">What&apos;s Included</h2>
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-brand-blue flex-shrink-0 mt-0.5" />
                    <span className="text-brand-gray leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading font-bold text-3xl text-brand-navy mb-8">Key Benefits</h2>
              <div className="space-y-5">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex gap-4 p-5 bg-brand-light rounded-xl border border-gray-100">
                    <div className="text-3xl flex-shrink-0">{benefit.emoji}</div>
                    <div>
                      <h3 className="font-heading font-bold text-brand-navy mb-1">{benefit.title}</h3>
                      <p className="text-brand-gray text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="section-padding bg-brand-light">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-3xl text-brand-navy mb-10 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="font-heading font-bold text-lg text-brand-navy mb-3">{faq.question}</h3>
                  <p className="text-brand-gray leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <h2 className="font-heading font-bold text-3xl text-brand-navy mb-8 text-center">Related Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex items-center justify-between p-5 bg-brand-light rounded-xl border border-gray-200 hover:border-brand-blue hover:bg-white transition-all"
              >
                <span className="font-heading font-semibold text-brand-navy group-hover:text-brand-blue transition-colors">
                  {service.name}
                </span>
                <ArrowRight className="w-4 h-4 text-brand-blue flex-shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA + GHL FORM ── */}
      <section className="bg-brand-navy py-20">
        <div className="section-container">
          <div className="text-center mb-10">
            <h2 className="font-heading font-bold text-3xl text-white mb-4">Ready to Get Started?</h2>
            <p className="text-white/75 text-lg max-w-xl mx-auto mb-2">
              Get your free quote below or call us directly.
            </p>
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 text-brand-blue font-bold text-lg hover:underline">
              <Phone className="w-5 h-5" />
              {PHONE_DISPLAY}
            </a>
          </div>
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <GHLForm />
          </div>
        </div>
      </section>
    </>
  )
}
