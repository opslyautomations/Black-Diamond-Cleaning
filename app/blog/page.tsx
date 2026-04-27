import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import { blogPosts, formatDate } from '@/lib/blog-posts'
import { BASE_URL, SITE_NAME, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: { absolute: 'Cleaning Tips & Guides | Black Diamond Cleaning Blog' },
  description:
    'Expert cleaning tips, move-in/move-out guides, deep cleaning advice, and local resources for homeowners and renters in Pennsylvania and New York.',
  alternates: { canonical: `${BASE_URL}/blog` },
  openGraph: {
    type: 'website',
    title: 'Cleaning Tips & Guides | Black Diamond Cleaning Blog',
    description:
      'Expert cleaning tips, move-in/move-out guides, deep cleaning advice, and local resources for homeowners across PA & NY.',
    url: `${BASE_URL}/blog`,
    siteName: SITE_NAME,
    locale: 'en_US',
    images: [
      {
        url: ogImageUrl('Cleaning Tips & Guides', 'Black Diamond Cleaning Blog'),
        width: 1200,
        height: 630,
        alt: 'Black Diamond Cleaning Solutions Blog',
        type: 'image/png',
      },
    ],
  },
  robots: defaultRobots,
}

const categories = Array.from(new Set(blogPosts.map((p) => p.category)))

export default function BlogIndexPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Blog', href: '/blog' }])} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-navy to-[#132040] text-white py-16 lg:py-20">
        <div className="section-container text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-4">
            Cleaning Tips &amp; Guides
          </h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Expert advice on house cleaning, deep cleaning, moving, and home care — from the team at Black Diamond Cleaning Solutions.
          </p>
        </div>
      </section>

      {/* Category pills */}
      <section className="bg-white border-b border-gray-100 py-4">
        <div className="section-container">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-light text-brand-navy text-xs font-semibold"
              >
                <Tag className="w-3 h-3 text-brand-blue" />
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles grid */}
      <section className="section-padding bg-brand-light">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sorted.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col card-hover overflow-hidden"
              >
                {/* Category bar */}
                <div className="h-1.5 bg-brand-blue" />
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-brand-blue bg-brand-light px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-brand-gray">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-lg text-brand-navy mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-brand-gray text-sm leading-relaxed flex-1 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <time className="text-xs text-brand-gray">{formatDate(post.date)}</time>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 text-brand-blue font-semibold text-sm hover:gap-2 transition-all"
                    >
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-16">
        <div className="section-container text-center">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3">
            Ready for a Spotless Home?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Serving Pennsylvania and New York. Free quotes, no obligation.
          </p>
          <Link href="/contact" className="btn-primary py-3.5 px-8 text-base">
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
