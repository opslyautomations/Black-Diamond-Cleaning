import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Star, ExternalLink } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_TEL, GBP_URL } from '@/lib/data'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { breadcrumbSchema, reviewAggregateSchema, reviewSchema } from '@/lib/schema'
import JsonLd from '@/components/JsonLd'

export const metadata: Metadata = {
  title: { absolute: 'Customer Reviews | 4.9★ Black Diamond Cleaning' },
  description:
    'Read real reviews from Black Diamond Cleaning customers across Pennsylvania and New York. 4.9★ average from 500+ cleanings. See what homeowners say.',
  alternates: { canonical: `${BASE_URL}/reviews` },
  openGraph: {
    type: 'website',
    title: { absolute: 'Customer Reviews | 4.9★ Black Diamond Cleaning' },
    description: 'Read real reviews from Black Diamond Cleaning customers across Pennsylvania and New York. 4.9★ average from 500+ cleanings.',
    url: `${BASE_URL}/reviews`,
    siteName: 'Black Diamond Cleaning Solutions',
    locale: 'en_US',
    images: [{ url: ogImageUrl('Customer Reviews', '4.9★ Average from 500+ Cleanings in PA & NY'), secureUrl: ogImageUrl('Customer Reviews', '4.9★ Average from 500+ Cleanings in PA & NY'), width: 1200, height: 630, alt: 'Black Diamond Cleaning Reviews — 4.9★ PA & NY', type: 'image/png' }],
  },
  twitter: { card: 'summary_large_image', title: 'Black Diamond Cleaning Reviews | 4.9★', description: '4.9★ average from 500+ cleanings across PA & NY. See real customer reviews.', images: [ogImageUrl('Customer Reviews', '4.9★ Average from 500+ Cleanings in PA & NY')] },
  robots: defaultRobots,
}

const allReviews = [
  { name: 'Sarah M.', city: 'Harrisburg, PA', date: 'March 2024', text: "Absolutely incredible service. The team showed up exactly on time and left our home spotless. I've tried other cleaning services in the area and none compare to Black Diamond's attention to detail. Highly recommend to anyone looking for professional house cleaning." },
  { name: 'David K.', city: 'Scranton, PA', date: 'February 2024', text: 'We use Black Diamond for our Airbnb in Scranton and they are absolutely reliable. Guests always comment on how clean the property is. Scheduling is easy and they always communicate proactively. Worth every penny.' },
  { name: 'Jessica R.', city: 'Buffalo, NY', date: 'January 2024', text: "Had a move-out cleaning done and my landlord was blown away. Got my full deposit back! Worth every penny. Will definitely use them again when I move into my new place. The bathroom and kitchen were spotless." },
  { name: 'Michael T.', city: 'State College, PA', date: 'March 2024', text: "I've been on a bi-weekly recurring plan for six months now. The same team comes every time, they know my home, and the quality is consistently excellent. This is exactly what a cleaning service should be." },
  { name: 'Amanda L.', city: 'Rochester, NY', date: 'February 2024', text: 'Joe and his team are the best. Professional, thorough, and reasonably priced. Our kitchen and bathrooms have never looked so clean. Will be a customer for life.' },
  { name: 'Robert C.', city: 'Syracuse, NY', date: 'January 2024', text: 'Used their deep cleaning service after moving into a new home. They went above and beyond — inside every cabinet, every appliance, every corner. Truly spotless. Took the stress completely out of moving.' },
  { name: 'Emily W.', city: 'Altoona, PA', date: 'March 2024', text: 'Quick, efficient, and spotless. I booked a standard cleaning for my apartment and was blown away by the results. They even cleaned areas I forgot to mention. Will absolutely book again.' },
  { name: 'Thomas B.', city: 'Erie, PA', date: 'February 2024', text: 'Best house cleaning service in the Erie area bar none. Reliable, thorough, and they actually pick up the phone. Used them for both my home and a rental property — both came out perfect.' },
  { name: 'Christina F.', city: 'Williamsport, PA', date: 'January 2024', text: 'Exceptional service from start to finish. The booking process was easy, they arrived right on time, and the clean was thorough and professional. My home smells amazing and looks brand new.' },
  { name: 'James H.', city: 'Buffalo, NY', date: 'March 2024', text: 'Used Black Diamond for a move-out clean on my rental property in Buffalo. Tenants had left it in rough shape. Black Diamond made it look brand new — new tenants complimented how clean it was on move-in day.' },
  { name: 'Patricia N.', city: 'Rochester, NY', date: 'February 2024', text: 'I manage several properties in the Rochester area and Black Diamond is my go-to for turnovers. Consistent quality, great communication, and they always accommodate urgent scheduling.' },
  { name: 'Kevin O.', city: 'Harrisburg, PA', date: 'January 2024', text: 'Started with a deep cleaning and was so impressed I signed up for bi-weekly service. The team is professional, friendly, and thorough. My house has never been this consistently clean.' },
]

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Reviews', href: '/reviews' }])} />
      <JsonLd data={reviewAggregateSchema} />
      {allReviews.map((r) => (
        <JsonLd key={r.name} data={reviewSchema(r.name, r.text)} />
      ))}

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-brand-navy to-[#132040] text-white py-20">
        <div className="section-container text-center">
          <h1 className="font-heading font-bold text-4xl sm:text-5xl text-white mb-6">
            What Our Customers Say
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto">
            4.9★ average rating from 500+ cleanings across Pennsylvania and New York.
          </p>
        </div>
      </section>

      {/* ── AGGREGATE RATING ── */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div>
              <p className="font-heading font-bold text-2xl text-brand-navy">4.9 out of 5</p>
              <p className="text-brand-gray">500+ cleanings · Reviewed on Google</p>
            </div>
            <a href={GBP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-brand-blue font-semibold hover:underline">
              View on Google <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── REVIEWS GRID ── */}
      <section className="section-padding bg-brand-light">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allReviews.map((review) => (
              <div key={review.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-brand-gray leading-relaxed mb-5">&ldquo;{review.text}&rdquo;</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-heading font-bold text-brand-navy">{review.name}</p>
                  <p className="text-sm text-brand-gray">{review.city} · {review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-navy py-20">
        <div className="section-container text-center">
          <h2 className="font-heading font-bold text-3xl text-white mb-4">
            Experience the Black Diamond Difference
          </h2>
          <p className="text-white/75 text-lg max-w-xl mx-auto mb-10">
            Join hundreds of satisfied homeowners across Pennsylvania and New York.
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
