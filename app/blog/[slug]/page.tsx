import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Clock, Tag, Phone } from 'lucide-react'
import { blogPosts, getBlogPost, getRecentPosts, formatDate, type ContentSection } from '@/lib/blog-posts'
import { BASE_URL, SITE_NAME, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema } from '@/lib/schema'
import JsonLd from '@/components/JsonLd'
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/data'

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return {
    title: `${post.metaTitle} | ${SITE_NAME}`,
    description: post.description,
    alternates: { canonical: `${BASE_URL}/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.metaTitle,
      description: post.description,
      url: `${BASE_URL}/blog/${post.slug}`,
      siteName: SITE_NAME,
      publishedTime: post.date,
      locale: 'en_US',
      images: [
        {
          url: ogImageUrl(post.title, post.category),
          width: 1200,
          height: 630,
          alt: post.title,
          type: 'image/png',
        },
      ],
    },
    robots: defaultRobots,
  }
}

function renderSection(section: ContentSection, index: number) {
  return (
    <div key={index} className="mb-6">
      {section.heading && (
        <h2 className="font-heading font-bold text-2xl text-brand-navy mt-10 mb-3">
          {section.heading}
        </h2>
      )}
      {section.subheading && (
        <h3 className="font-heading font-semibold text-lg text-brand-navy mt-6 mb-2">
          {section.subheading}
        </h3>
      )}
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="text-brand-gray text-base leading-relaxed mb-4">
          {p}
        </p>
      ))}
      {section.list && section.listType === 'ol' ? (
        <ol className="list-decimal list-inside space-y-2 text-brand-gray text-base pl-2 mb-4">
          {section.list.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      ) : section.list ? (
        <ul className="space-y-2 text-brand-gray text-base pl-2 mb-4">
          {section.list.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2.5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const related = getRecentPosts(4).filter((p) => p.slug !== post.slug).slice(0, 3)

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: BASE_URL,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/blog/${post.slug}` },
  }

  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Blog', href: '/blog' }, { name: post.title, href: `/blog/${post.slug}` }])} />
      <JsonLd data={articleSchema} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-navy to-[#132040] text-white py-14 lg:py-18">
        <div className="section-container max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/10 px-3 py-1.5 rounded-full">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-white/60">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
          <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            {post.title}
          </h1>
          <p className="text-white/65 text-sm">
            Published {formatDate(post.date)} · Black Diamond Cleaning Solutions
          </p>
        </div>
      </section>

      {/* Article body */}
      <section className="section-padding bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-start">
            {/* Main content */}
            <article className="max-w-2xl">
              {post.content.map((section, i) => renderSection(section, i))}

              {/* Bottom CTA */}
              <div className="mt-12 p-6 bg-brand-light rounded-2xl border border-gray-200">
                <h3 className="font-heading font-bold text-xl text-brand-navy mb-2">
                  Ready for a Professionally Clean Home?
                </h3>
                <p className="text-brand-gray text-sm mb-4">
                  Black Diamond Cleaning Solutions serves Pennsylvania and New York. Get a free, no-obligation quote today.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/contact" className="btn-primary text-sm py-2.5">
                    Get a Free Quote
                  </Link>
                  <a
                    href={`tel:${PHONE_TEL}`}
                    className="inline-flex items-center justify-center gap-2 border-2 border-brand-navy text-brand-navy font-semibold py-2.5 px-5 rounded-lg hover:bg-brand-navy hover:text-white transition-colors text-sm font-heading"
                  >
                    <Phone className="w-4 h-4" />
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-24 space-y-6">
              {/* About card */}
              <div className="bg-brand-navy text-white rounded-2xl p-6">
                <h3 className="font-heading font-bold text-base mb-2">Black Diamond Cleaning</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Professional house cleaning across Pennsylvania and New York. 4.9★ rated. 500+ homes cleaned.
                </p>
                <Link href="/contact" className="btn-primary text-sm py-2.5 w-full justify-center">
                  Get a Free Quote
                </Link>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div>
                  <h3 className="font-heading font-bold text-brand-navy text-sm uppercase tracking-wider mb-4">
                    More Articles
                  </h3>
                  <div className="space-y-3">
                    {related.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        className="block group bg-white rounded-xl p-4 border border-gray-100 shadow-sm hover:border-brand-blue transition-colors"
                      >
                        <span className="text-xs font-semibold text-brand-blue">{p.category}</span>
                        <p className="font-semibold text-brand-navy text-sm leading-snug mt-1 group-hover:text-brand-blue transition-colors">
                          {p.title}
                        </p>
                        <span className="inline-flex items-center gap-1 text-xs text-brand-gray mt-2">
                          {p.readTime} <ArrowRight className="w-3 h-3" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
