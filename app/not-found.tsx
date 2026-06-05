import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/data'

export default function NotFound() {
  return (
    <section className="bg-gradient-to-br from-brand-navy to-[#132040] text-white min-h-[70vh] flex items-center">
      <div className="section-container text-center">
        <p className="text-white/40 text-sm font-semibold uppercase tracking-widest mb-4">404 — Page Not Found</p>
        <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-6">
          This Page Doesn&apos;t Exist
        </h1>
        <p className="text-white/70 text-lg max-w-md mx-auto mb-10">
          The URL you followed may be outdated or mistyped. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary py-3.5 px-8 inline-flex items-center gap-2">
            Back to Home <ArrowRight className="w-4 h-4" />
          </Link>
          <a href={`tel:${PHONE_TEL}`} className="btn-outline-white py-3.5 px-8">
            <Phone className="w-4 h-4" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  )
}
