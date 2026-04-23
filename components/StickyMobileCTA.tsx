'use client'

import Link from 'next/link'
import { Phone } from 'lucide-react'
import { PHONE_TEL, PHONE_DISPLAY } from '@/lib/data'

export default function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden shadow-[0_-2px_12px_rgba(0,0,0,0.15)]">
      <div className="flex h-16">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex-1 flex items-center justify-center gap-2 bg-brand-blue text-white font-bold text-sm font-heading"
          aria-label={`Call ${PHONE_DISPLAY}`}
        >
          <Phone className="w-4 h-4" />
          📞 Call Now
        </a>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center bg-white text-brand-navy font-bold text-sm font-heading border-l border-gray-200"
        >
          Get Quote
        </Link>
      </div>
    </div>
  )
}
