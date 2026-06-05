import type { Metadata } from 'next'
import Link from 'next/link'
import ServicePageTemplate from '@/components/ServicePageTemplate'
import JsonLd from '@/components/JsonLd'
import { BASE_URL, ogImageUrl, defaultRobots } from '@/lib/metadata'
import { serviceSchema, faqSchema, breadcrumbSchema } from '@/lib/schema'

const faqs = [
  {
    question: 'How long does a standard cleaning take?',
    answer: "Most homes take between 2 and 4 hours depending on size and condition. We'll give you an accurate time estimate when you request a quote.",
  },
  {
    question: 'Do I need to provide supplies?',
    answer: "No. We bring all cleaning supplies and professional-grade equipment. If you have preferred eco-friendly products, let us know and we'll use them.",
  },
  {
    question: 'Should I be home during the cleaning?',
    answer: "That's entirely up to you. Most of our clients leave us a key or access code so they can come home to a spotless house.",
  },
  {
    question: 'How is a standard cleaning different from a deep cleaning?',
    answer: "Standard cleaning maintains a home that's already in good shape — surfaces, floors, bathrooms, kitchen. Deep cleaning resets it: inside appliances, tile grout, baseboards, cabinet interiors, and areas a standard clean doesn't cover. We recommend a deep clean first if you haven't had professional cleaning recently.",
  },
  {
    question: 'Can I add extras like inside-oven or inside-fridge cleaning?',
    answer: "Yes. Inside-oven, inside-fridge, interior windows, and other add-ons are available. Let us know when requesting your quote and we'll include them in your estimate.",
  },
  {
    question: 'What cadence is best for a home in Pennsylvania or New York?',
    answer: "Bi-weekly is the most popular choice for PA and NY homes. Northeast winters bring road salt and tracked-in debris that benefits from consistent upkeep; bi-weekly service keeps the home ahead of seasonal buildup without over-servicing. Homes with pets or kids often prefer weekly.",
  },
]

export const metadata: Metadata = {
  title: { absolute: 'Standard Cleaning Service | Black Diamond Cleaning' },
  description:
    'Standard house cleaning from Black Diamond — professional whole-home cleaning across PA & NY. 4.9★ on Google. Consistent quality every visit. Get a free quote today.',
  alternates: { canonical: `${BASE_URL}/services/standard-cleaning` },
  openGraph: {
    type: 'website',
    title: { absolute: 'Standard Cleaning Service | Black Diamond Cleaning' },
    description:
      'Standard house cleaning from Black Diamond — professional whole-home cleaning across PA & NY. 4.9★ on Google. Consistent quality every visit. Get a free quote today.',
    url: `${BASE_URL}/services/standard-cleaning`,
    siteName: 'Black Diamond Cleaning Solutions',
    locale: 'en_US',
    images: [{
      url: ogImageUrl('Standard House Cleaning', 'Consistent Quality Every Visit — PA & NY'),
      secureUrl: ogImageUrl('Standard House Cleaning', 'Consistent Quality Every Visit — PA & NY'),
      width: 1200, height: 630,
      alt: 'Standard House Cleaning — Black Diamond Cleaning Solutions',
      type: 'image/png',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Standard Cleaning | Black Diamond Cleaning Solutions',
    description: 'Professional standard house cleaning across PA & NY. 4.9★ Google. Free quotes.',
    images: [ogImageUrl('Standard House Cleaning', 'Consistent Quality Every Visit — PA & NY')],
  },
  robots: defaultRobots,
}

export default function StandardCleaningPage() {
  return (
    <>
      <JsonLd data={serviceSchema('Standard House Cleaning', 'Consistent, professional whole-home cleaning that keeps your space fresh, hygienic, and welcoming.', 'standard-cleaning')} />
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: 'Services', href: '/services/standard-cleaning' }, { name: 'Standard Cleaning', href: '/services/standard-cleaning' }])} />
      <ServicePageTemplate
        h1="Standard House Cleaning — Consistent Quality, Every Visit"
        description="Our Standard Cleaning is the reliable, consistent whole-home cleaning that keeps your space fresh, hygienic, and welcoming. Perfect for homeowners and renters who want professional upkeep without the hassle."
        included={[
          'Kitchen: countertops and sink scrubbed; stovetop exterior and drip pans wiped; exterior of all appliances cleaned; cabinet fronts and backsplash wiped; microwave interior cleaned',
          'Bathrooms: toilet (inside, outside, and base); shower and tub surfaces; tile walls wiped; sink, vanity, and faucets; mirror cleaned; floor mopped',
          'Bedrooms: all accessible surfaces dusted; furniture wiped; floors vacuumed or mopped; beds made; trash emptied',
          'Living areas: all surfaces and shelves dusted; glass surfaces cleaned; floors vacuumed and mopped',
          'Throughout: light switches, door handles, and baseboards wiped; all trash emptied and liners replaced',
          'Not included (available as add-ons): inside oven, inside fridge, interior windows, inside cabinets — see Deep Cleaning',
        ]}
        benefits={[
          { emoji: '✨', title: 'Consistent Quality', description: "Same premium result every visit — trained teams and detailed room-by-room checklists." },
          { emoji: '🕒', title: 'Flexible Scheduling', description: "Fits easily into weekly or bi-weekly recurring plans, or available as a one-time clean." },
          { emoji: '💛', title: 'Hands-Off Upkeep', description: "We handle every detail so you don't have to think about it between visits." },
        ]}
        faqs={faqs}
        relatedServices={[
          { name: 'Deep Cleaning', href: '/services/deep-cleaning' },
          { name: 'Recurring Cleaning', href: '/services/recurring-cleaning' },
          { name: 'Move-In/Move-Out Cleaning', href: '/services/move-in-move-out-cleaning' },
        ]}
      >
        <section className="section-padding bg-white">
          <div className="section-container">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">How It Works</h2>
                <ol className="space-y-5">
                  {[
                    { step: '1', title: 'Request a Quote', detail: 'Fill out the form or call us. We confirm your schedule and an accurate time estimate within 24 hours.' },
                    { step: '2', title: 'We Arrive On Time', detail: 'Our team shows up with all supplies and professional-grade equipment — no waiting, no prep needed from you.' },
                    { step: '3', title: 'Room-by-Room Checklist', detail: 'We work through your home systematically, covering every surface, floor, and fixture on the checklist.' },
                    { step: '4', title: 'Walkthrough Before We Leave', detail: 'We check our work before leaving. If anything needs attention, we address it on the spot.' },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-4">
                      <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">{item.step}</span>
                      </div>
                      <div>
                        <p className="font-heading font-bold text-brand-navy">{item.title}</p>
                        <p className="text-brand-gray text-sm mt-1">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div>
                <h2 className="font-heading font-bold text-3xl text-brand-navy mb-6">Who It&apos;s For</h2>
                <ul className="space-y-4 text-brand-gray leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>Homeowners who want consistent, reliable upkeep without spending weekends cleaning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>Busy professionals and families who need their home maintained on a schedule that fits their life</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>Renters who want to maintain a clean home through the lease term without letting it slide</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-brand-blue mt-1">✓</span>
                    <span>Anyone on a <Link href="/services/recurring-cleaning" className="text-brand-blue hover:underline font-medium">recurring plan</Link> who wants the same quality delivered consistently every visit</span>
                  </li>
                </ul>
                <div className="mt-8 p-5 bg-brand-light rounded-xl border border-gray-200">
                  <p className="font-heading font-bold text-brand-navy mb-2">PA &amp; NY Seasonal Note</p>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    Northeast winters bring road salt, sand, and tracked-in slush from November through March. A consistent standard cleaning schedule keeps this seasonal buildup from establishing itself on floors, in grout, and along baseboards — making the home easier to maintain and reducing the need for a heavy{' '}
                    <Link href="/services/deep-cleaning" className="text-brand-blue hover:underline font-medium">deep clean</Link>
                    {' '}later.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ServicePageTemplate>
    </>
  )
}
