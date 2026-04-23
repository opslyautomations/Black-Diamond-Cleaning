import Link from 'next/link'
import { Phone, Mail, Diamond, ExternalLink } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL, EMAIL, GBP_URL } from '@/lib/data'

const serviceLinks = [
  { name: 'Standard Cleaning', href: '/services/standard-cleaning' },
  { name: 'Deep Cleaning', href: '/services/deep-cleaning' },
  { name: 'Move-In/Move-Out Cleaning', href: '/services/move-in-move-out-cleaning' },
  { name: 'Recurring Cleaning', href: '/services/recurring-cleaning' },
  { name: 'Commercial Cleaning', href: '/services/commercial-cleaning' },
]

const paAreas = [
  { name: 'State College, PA', href: '/service-areas/state-college-pa' },
  { name: 'Scranton, PA', href: '/service-areas/scranton-pa' },
  { name: 'Altoona, PA', href: '/service-areas/altoona-pa' },
  { name: 'Harrisburg, PA', href: '/service-areas/harrisburg-pa' },
  { name: 'Williamsport, PA', href: '/service-areas/williamsport-pa' },
  { name: 'Erie, PA', href: '/service-areas/erie-pa' },
]

const nyAreas = [
  { name: 'Buffalo, NY', href: '/service-areas/buffalo-ny' },
  { name: 'Rochester, NY', href: '/service-areas/rochester-ny' },
  { name: 'Syracuse, NY', href: '/service-areas/syracuse-ny' },
]

const companyLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Blog', href: '/blog' },
  { name: 'Specials', href: '/specials' },
  { name: 'Contact', href: '/contact' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-navy text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 — Company */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Diamond className="w-6 h-6 text-brand-blue" fill="#1E6FD9" />
              <span className="font-heading font-bold text-white text-lg">Black Diamond</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Premium House Cleaning. Spotless Every Time. Serving Pennsylvania &amp; New York.
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-2 text-white/80 hover:text-brand-blue transition-colors text-sm"
              >
                <Phone className="w-4 h-4 flex-shrink-0" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-2 text-white/80 hover:text-brand-blue transition-colors text-sm break-all"
              >
                <Mail className="w-4 h-4 flex-shrink-0" />
                {EMAIL}
              </a>
              <p className="text-white/50 text-xs pt-1">Mobile Service — Serving PA &amp; NY</p>
            </div>
            <a
              href={GBP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-4 text-white/50 hover:text-brand-blue transition-colors text-xs"
            >
              <ExternalLink className="w-3 h-3" />
              Google Business Profile
            </a>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-blue transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Service Areas */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">
              Service Areas
            </h3>
            <div className="mb-4">
              <p className="text-white/30 text-xs uppercase tracking-widest mb-2 font-semibold">Pennsylvania</p>
              <ul className="space-y-2">
                {paAreas.map((area) => (
                  <li key={area.href}>
                    <Link
                      href={area.href}
                      className="text-white/60 hover:text-brand-blue transition-colors text-sm"
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white/30 text-xs uppercase tracking-widest mb-2 font-semibold">New York</p>
              <ul className="space-y-2">
                {nyAreas.map((area) => (
                  <li key={area.href}>
                    <Link
                      href={area.href}
                      className="text-white/60 hover:text-brand-blue transition-colors text-sm"
                    >
                      {area.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 4 — Company Links */}
          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-5">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-brand-blue transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-white/50 text-xs mb-2">New Customer Special</p>
              <p className="text-white font-semibold text-sm">15% Off First Deep Clean</p>
              <Link
                href="/specials"
                className="text-brand-blue text-xs hover:underline mt-1 inline-block"
              >
                See all offers →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="section-container py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-white/40 text-xs text-center sm:text-left">
            © {year} Black Diamond Cleaning Solutions LLC. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            Website by Opsly Automations
          </p>
        </div>
      </div>
    </footer>
  )
}
