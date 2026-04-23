import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Phone,
  Star,
  Home,
  Shield,
  CheckCircle,
  Sparkles,
  CalendarCheck,
  Building2,
  MapPin,
  ArrowRight,
  Clock,
  MessageSquare,
} from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL, services, serviceAreasPa, serviceAreasNy, featuredReviews } from '@/lib/data'
import { getRecentPosts, formatDate } from '@/lib/blog-posts'
import { BASE_URL, SITE_NAME, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { websiteSchema } from '@/lib/schema'
import JsonLd from '@/components/JsonLd'
import GHLForm from '@/components/GHLForm'

export const metadata: Metadata = {
  title: `${SITE_NAME} | Professional House Cleaning in PA & NY`,
  description:
    'Premium house cleaning, deep cleaning & maid service across Pennsylvania and New York. 4.9★ on Google. 500+ homes cleaned. Get a free quote today.',
  alternates: { canonical: `${BASE_URL}/` },
  openGraph: {
    type: 'website',
    title: `${SITE_NAME} | Professional House Cleaning in PA & NY`,
    description:
      'Premium house cleaning, deep cleaning & maid service across Pennsylvania and New York. 4.9★ on Google. 500+ homes cleaned. Get a free quote today.',
    url: `${BASE_URL}/`,
    siteName: SITE_NAME,
    locale: 'en_US',
    images: [
      {
        url: ogImageUrl('Black Diamond Cleaning Solutions', 'Professional House Cleaning in PA & NY'),
        secureUrl: ogImageUrl('Black Diamond Cleaning Solutions', 'Professional House Cleaning in PA & NY'),
        width: 1200,
        height: 630,
        alt: 'Black Diamond Cleaning Solutions — Premium House Cleaning in PA & NY',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} | House Cleaning PA & NY`,
    description: 'Premium house cleaning across PA & NY. 4.9★ on Google. Free quotes.',
    images: [ogImageUrl('Black Diamond Cleaning Solutions', 'Professional House Cleaning in PA & NY')],
  },
  robots: defaultRobots,
  other: { 'theme-color': '#0B1220' },
}

const serviceIcons: Record<string, React.ElementType> = {
  Sparkles,
  Star,
  Home,
  CalendarCheck,
  Building2,
}

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema} />

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-brand-navy to-[#132040] text-white">
        <div className="section-container py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                4.9-Star Rated · 500+ Homes Cleaned
              </div>
              <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight text-white mb-6">
                Premium House Cleaning. Spotless Every Time.
              </h1>
              <p className="text-lg text-white/80 mb-8 max-w-lg">
                Professional maid service across Pennsylvania and New York. 500+ happy homeowners. 4.9★ on Google.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-base py-3.5 px-7 justify-center">
                  Get a Free Quote
                </Link>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="btn-outline-white text-base py-3.5 px-7 justify-center"
                >
                  <Phone className="w-5 h-5" />
                  Call Now {PHONE_DISPLAY}
                </a>
              </div>
              {/* Trust signals near CTA */}
              <div className="flex flex-wrap gap-4 mt-6 text-white/60 text-sm">
                <span>✅ 100% Satisfaction Guarantee</span>
                <span>🛡️ Licensed & Insured</span>
              </div>
            </div>

            {/* Right — GHL Form */}
            <div id="quote-form" className="bg-white rounded-xl shadow-2xl p-4 sm:p-6">
              <h2 className="font-heading font-bold text-xl text-brand-navy mb-1 text-center">
                Get Your Free Quote
              </h2>
              <p className="text-brand-gray text-sm text-center mb-4">
                We'll get back to you within hours.
              </p>
              <GHLForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="section-container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <TrustBadge icon={<Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />} text="4.9-Star Google Rating" />
            <TrustBadge icon={<Home className="w-6 h-6 text-brand-blue" />} text="500+ Homes Cleaned" />
            <TrustBadge icon={<Shield className="w-6 h-6 text-brand-blue" />} text="Licensed & Insured" />
            <TrustBadge icon={<CheckCircle className="w-6 h-6 text-brand-blue" />} text="100% Satisfaction Guarantee" />
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="section-padding bg-brand-light">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy mb-4">
              Our Cleaning Services
            </h2>
            <p className="text-brand-gray text-lg max-w-2xl mx-auto">
              From routine maintenance to deep resets, we have the right service for every home and schedule.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 3).map((service) => {
              const Icon = serviceIcons[service.icon]
              return (
                <ServiceCard
                  key={service.href}
                  href={service.href}
                  name={service.name}
                  description={service.description}
                  icon={<Icon className="w-8 h-8 text-brand-blue" />}
                />
              )
            })}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6 lg:max-w-2xl lg:mx-auto">
            {services.slice(3).map((service) => {
              const Icon = serviceIcons[service.icon]
              return (
                <ServiceCard
                  key={service.href}
                  href={service.href}
                  name={service.name}
                  description={service.description}
                  icon={<Icon className="w-8 h-8 text-brand-blue" />}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE BLACK DIAMOND ── */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy mb-4">
              Why Choose Black Diamond?
            </h2>
            <p className="text-brand-gray text-lg max-w-2xl mx-auto">
              We built Black Diamond to solve every frustration customers have with cleaning services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-light rounded-2xl p-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                <Clock className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-navy mb-3">
                Reliability You Can Count On
              </h3>
              <p className="text-brand-gray leading-relaxed">
                We show up on time, every time. No missed appointments, no excuses. Our team treats every appointment with the same professionalism and punctuality we'd expect ourselves.
              </p>
            </div>
            <div className="bg-brand-light rounded-2xl p-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                <Sparkles className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-navy mb-3">
                Consistent, Meticulous Quality
              </h3>
              <p className="text-brand-gray leading-relaxed">
                Every cleaner is trained on our detailed checklist. You get the same premium result every visit — not just the first one. Nothing gets missed, every corner gets attention.
              </p>
            </div>
            <div className="bg-brand-light rounded-2xl p-8">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-5 shadow-sm">
                <MessageSquare className="w-6 h-6 text-brand-blue" />
              </div>
              <h3 className="font-heading font-bold text-xl text-brand-navy mb-3">
                Clear Communication
              </h3>
              <p className="text-brand-gray leading-relaxed">
                Text updates, easy booking, and a real person who picks up the phone. You'll always know when we're coming and how things went.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREAS ── */}
      <section className="section-padding bg-brand-light">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy mb-4">
              Proudly Serving Pennsylvania &amp; New York
            </h2>
            <p className="text-brand-gray text-lg max-w-2xl mx-auto">
              Professional house cleaning across two states. Local expertise, consistent premium quality.
            </p>
          </div>
          <div className="space-y-10">
            <div>
              <h3 className="font-heading font-bold text-xl text-brand-navy mb-5 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-brand-blue inline-block" />
                Pennsylvania
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {serviceAreasPa.map((area) => (
                  <LocationCard key={area.href} area={area} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl text-brand-navy mb-5 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-brand-blue inline-block" />
                New York
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {serviceAreasNy.map((area) => (
                  <LocationCard key={area.href} area={area} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ── */}
      <BlogPreview />

      {/* ── REVIEWS ── */}
      <section className="section-padding bg-brand-light">
        <div className="section-container">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy mb-4">
              What Our Customers Say
            </h2>
            <p className="text-brand-gray text-lg">
              4.9★ average across 500+ cleanings in Pennsylvania and New York.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {featuredReviews.map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 card-hover"
              >
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-brand-gray text-sm leading-relaxed mb-4 line-clamp-4">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="border-t border-gray-100 pt-3">
                  <p className="font-semibold text-brand-navy text-sm">{review.name}</p>
                  <p className="text-xs text-brand-gray">{review.city} · {review.date}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/reviews" className="btn-primary">
              Read All Reviews <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SPECIAL BANNER ── */}
      <section className="bg-brand-blue py-14">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-white text-center lg:text-left">
              <div className="text-4xl mb-3">🎉</div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-2">
                Save 15% on Your First Deep Cleaning
              </h2>
              <p className="text-white/85 text-lg">
                New Customers Only. Call {PHONE_DISPLAY} or Get a Free Quote.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <Link href="/contact" className="btn-outline-white py-3.5 px-8">
                Get a Free Quote
              </Link>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center gap-2 bg-white text-brand-blue font-semibold px-8 py-3.5 rounded-lg hover:bg-gray-50 transition-colors font-heading"
              >
                <Phone className="w-5 h-5" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-brand-navy py-20">
        <div className="section-container text-center">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white mb-4">
            Ready for a Spotless Home?
          </h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-4">
            Join 500+ homeowners, renters, and property managers who trust Black Diamond. Get your free quote today.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-white/50 text-sm mb-8">
            <span>⭐ 4.9 Google Rating</span>
            <span>·</span>
            <span>500+ Homes Cleaned</span>
            <span>·</span>
            <span>Licensed & Insured</span>
            <span>·</span>
            <span>Satisfaction Guaranteed</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary py-4 px-10 text-base">
              Get Free Quote
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

function TrustBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      {icon}
      <span className="font-semibold text-brand-navy text-sm font-heading">{text}</span>
    </div>
  )
}

function ServiceCard({ href, name, description, icon }: { href: string; name: string; description: string; icon: React.ReactNode }) {
  return (
    <Link href={href} className="group bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col card-hover">
      <div className="w-14 h-14 bg-brand-light rounded-xl flex items-center justify-center mb-4">{icon}</div>
      <h3 className="font-heading font-bold text-lg text-brand-navy mb-2">{name}</h3>
      <p className="text-brand-gray text-sm leading-relaxed flex-1">{description}</p>
      <div className="flex items-center gap-1 mt-4 text-brand-blue font-semibold text-sm group-hover:gap-2 transition-all">
        Learn More <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  )
}

function LocationCard({ area }: { area: { name: string; state: string; href: string; description: string } }) {
  return (
    <Link href={area.href} className="group bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-start gap-4 card-hover">
      <div className="w-10 h-10 bg-brand-light rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
        <MapPin className="w-5 h-5 text-brand-blue" />
      </div>
      <div>
        <h4 className="font-heading font-bold text-brand-navy text-base">{area.name}, {area.state}</h4>
        <p className="text-brand-gray text-sm mt-1 leading-snug">{area.description}</p>
        <span className="inline-flex items-center gap-1 mt-2 text-brand-blue font-semibold text-xs group-hover:gap-2 transition-all">
          View Details <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </Link>
  )
}

function BlogPreview() {
  const posts = getRecentPosts(3)
  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-brand-navy mb-4">
            Cleaning Tips &amp; Guides
          </h2>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">
            Expert advice from the Black Diamond team — helping you keep your home cleaner, longer.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="bg-brand-light rounded-xl p-6 flex flex-col card-hover border border-gray-100"
            >
              <span className="text-xs font-semibold text-brand-blue mb-3 inline-block">
                {post.category}
              </span>
              <h3 className="font-heading font-bold text-brand-navy text-lg leading-snug mb-2 flex-1">
                {post.title}
              </h3>
              <p className="text-brand-gray text-sm mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <span className="text-xs text-brand-gray">{formatDate(post.date)}</span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-brand-blue font-semibold text-sm hover:gap-2 transition-all"
                >
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center">
          <Link href="/blog" className="btn-primary">
            View All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
