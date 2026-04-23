'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, ChevronDown, Menu, X, Diamond } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/data'

const navServices = [
  { name: 'Standard Cleaning', href: '/services/standard-cleaning' },
  { name: 'Deep Cleaning', href: '/services/deep-cleaning' },
  { name: 'Move-In/Move-Out Cleaning', href: '/services/move-in-move-out-cleaning' },
  { name: 'Recurring Cleaning', href: '/services/recurring-cleaning' },
  { name: 'Commercial Cleaning', href: '/services/commercial-cleaning' },
]

const navAreasPa = [
  { name: 'State College, PA', href: '/service-areas/state-college-pa' },
  { name: 'Scranton, PA', href: '/service-areas/scranton-pa' },
  { name: 'Altoona, PA', href: '/service-areas/altoona-pa' },
  { name: 'Harrisburg, PA', href: '/service-areas/harrisburg-pa' },
  { name: 'Williamsport, PA', href: '/service-areas/williamsport-pa' },
  { name: 'Erie, PA', href: '/service-areas/erie-pa' },
]

const navAreasNy = [
  { name: 'Buffalo, NY', href: '/service-areas/buffalo-ny' },
  { name: 'Rochester, NY', href: '/service-areas/rochester-ny' },
  { name: 'Syracuse, NY', href: '/service-areas/syracuse-ny' },
]

const mainLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Blog', href: '/blog' },
  { name: 'Specials', href: '/specials' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setMobileServicesOpen(false)
    setMobileAreasOpen(false)
  }, [pathname])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <Diamond className="w-7 h-7 text-brand-blue" fill="#1E6FD9" />
              <span className="font-heading font-bold text-brand-navy text-lg leading-tight">
                Black Diamond<br />
                <span className="text-xs font-medium text-brand-gray">Cleaning Solutions</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <NavLink href="/" label="Home" active={isActive('/')} />
              <NavLink href="/about" label="About" active={isActive('/about')} />

              {/* Services Dropdown */}
              <DesktopDropdown label="Services">
                <div className="py-2 min-w-[240px]">
                  {navServices.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2.5 text-sm text-brand-gray hover:bg-brand-light hover:text-brand-blue transition-colors"
                    >
                      {s.name}
                    </Link>
                  ))}
                </div>
              </DesktopDropdown>

              {/* Service Areas Dropdown */}
              <DesktopDropdown label="Service Areas">
                <div className="py-2 min-w-[280px]">
                  <div className="px-4 py-1.5 text-xs font-bold text-brand-navy uppercase tracking-wider">Pennsylvania</div>
                  {navAreasPa.map((a) => (
                    <Link
                      key={a.href}
                      href={a.href}
                      className="block px-4 py-2 text-sm text-brand-gray hover:bg-brand-light hover:text-brand-blue transition-colors"
                    >
                      {a.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 my-1" />
                  <div className="px-4 py-1.5 text-xs font-bold text-brand-navy uppercase tracking-wider">New York</div>
                  {navAreasNy.map((a) => (
                    <Link
                      key={a.href}
                      href={a.href}
                      className="block px-4 py-2 text-sm text-brand-gray hover:bg-brand-light hover:text-brand-blue transition-colors"
                    >
                      {a.name}
                    </Link>
                  ))}
                </div>
              </DesktopDropdown>

              <NavLink href="/reviews" label="Reviews" active={isActive('/reviews')} />
              <NavLink href="/blog" label="Blog" active={isActive('/blog')} />
              <NavLink href="/specials" label="Specials" active={isActive('/specials')} />
              <NavLink href="/contact" label="Contact" active={isActive('/contact')} />
            </nav>

            {/* Desktop Right: Phone + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-1.5 text-brand-navy font-semibold text-sm hover:text-brand-blue transition-colors"
              >
                <Phone className="w-4 h-4" />
                {PHONE_DISPLAY}
              </a>
              <Link href="/contact" className="btn-primary text-sm py-2.5">
                Get a Free Quote
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg text-brand-navy hover:bg-brand-light transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-80 max-w-full bg-white shadow-2xl lg:hidden transform transition-transform duration-300 ease-in-out overflow-y-auto ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
            <Diamond className="w-6 h-6 text-brand-blue" fill="#1E6FD9" />
            <span className="font-heading font-bold text-brand-navy text-base">Black Diamond</span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 rounded-lg text-brand-gray hover:bg-brand-light"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          <MobileNavLink href="/" label="Home" active={isActive('/')} />
          <MobileNavLink href="/about" label="About" active={isActive('/about')} />

          {/* Services Accordion */}
          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-brand-navy font-semibold hover:bg-brand-light transition-colors"
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileServicesOpen && (
              <div className="mt-1 ml-3 space-y-1 border-l-2 border-brand-light pl-3">
                {navServices.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-3 py-2 text-sm text-brand-gray hover:text-brand-blue transition-colors rounded"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Service Areas Accordion */}
          <div>
            <button
              onClick={() => setMobileAreasOpen(!mobileAreasOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-brand-navy font-semibold hover:bg-brand-light transition-colors"
            >
              Service Areas
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${mobileAreasOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {mobileAreasOpen && (
              <div className="mt-1 ml-3 space-y-1 border-l-2 border-brand-light pl-3">
                <div className="px-3 py-1 text-xs font-bold text-brand-navy uppercase tracking-wider">Pennsylvania</div>
                {navAreasPa.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="block px-3 py-2 text-sm text-brand-gray hover:text-brand-blue transition-colors rounded"
                  >
                    {a.name}
                  </Link>
                ))}
                <div className="px-3 py-1 text-xs font-bold text-brand-navy uppercase tracking-wider mt-2">New York</div>
                {navAreasNy.map((a) => (
                  <Link
                    key={a.href}
                    href={a.href}
                    className="block px-3 py-2 text-sm text-brand-gray hover:text-brand-blue transition-colors rounded"
                  >
                    {a.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <MobileNavLink href="/reviews" label="Reviews" active={isActive('/reviews')} />
          <MobileNavLink href="/blog" label="Blog" active={isActive('/blog')} />
          <MobileNavLink href="/specials" label="Specials" active={isActive('/specials')} />
          <MobileNavLink href="/contact" label="Contact" active={isActive('/contact')} />
        </nav>

        <div className="p-4 border-t border-gray-100 space-y-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="flex items-center justify-center gap-2 w-full border-2 border-brand-navy text-brand-navy font-semibold py-3 rounded-lg hover:bg-brand-navy hover:text-white transition-colors"
          >
            <Phone className="w-4 h-4" />
            {PHONE_DISPLAY}
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center w-full bg-brand-blue text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-18" />
    </>
  )
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`relative px-3 py-2 text-sm font-semibold font-heading transition-colors ${
        active ? 'text-brand-blue' : 'text-brand-navy hover:text-brand-blue'
      }`}
    >
      {label}
      {active && (
        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-blue rounded-full" />
      )}
    </Link>
  )
}

function MobileNavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`block px-3 py-2.5 rounded-lg font-semibold transition-colors ${
        active ? 'text-brand-blue bg-brand-light' : 'text-brand-navy hover:bg-brand-light'
      }`}
    >
      {label}
    </Link>
  )
}

function DesktopDropdown({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 px-3 py-2 text-sm font-semibold font-heading text-brand-navy hover:text-brand-blue transition-colors"
        onClick={() => setOpen(!open)}
      >
        {label}
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-xl border border-gray-100 z-50">
          {children}
        </div>
      )}
    </div>
  )
}
