const BASE_URL = 'https://www.blackdiamondcleaningsolutionsllc.com'

const allCities = [
  { '@type': 'City', name: 'State College, PA' },
  { '@type': 'City', name: 'Scranton, PA' },
  { '@type': 'City', name: 'Altoona, PA' },
  { '@type': 'City', name: 'Harrisburg, PA' },
  { '@type': 'City', name: 'Williamsport, PA' },
  { '@type': 'City', name: 'Erie, PA' },
  { '@type': 'City', name: 'Buffalo, NY' },
  { '@type': 'City', name: 'Rochester, NY' },
  { '@type': 'City', name: 'Syracuse, NY' },
]

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'HouseCleaningService',
  '@id': `${BASE_URL}/#business`,
  name: 'Black Diamond Cleaning Solutions LLC',
  description:
    'Premium house cleaning, deep cleaning, move-in/move-out, recurring, and commercial cleaning service across Pennsylvania and New York.',
  url: BASE_URL,
  telephone: '+12156503101',
  email: 'info@blackdiamondcleaningsolutionsllc.com',
  image: `${BASE_URL}/api/og?title=Black+Diamond+Cleaning+Solutions&subtitle=Professional+House+Cleaning+in+PA+%26+NY`,
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Mobile Service — We Come to You',
    addressRegion: 'PA',
    addressCountry: 'US',
  },
  areaServed: allCities,
  sameAs: ['https://share.google/KuJi4x8bZufInyUMT'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '16:00',
    },
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Black Diamond Cleaning Solutions LLC',
  url: BASE_URL,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${BASE_URL}/search?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
}

export function serviceSchema(name: string, description: string, slug: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: { '@id': `${BASE_URL}/#business` },
    areaServed: allCities,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${BASE_URL}/services/${slug}`,
    },
  }
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  }
}

export function breadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
      ...items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 2,
        name: item.name,
        item: `${BASE_URL}${item.href}`,
      })),
    ],
  }
}

export const reviewAggregateSchema = {
  '@context': 'https://schema.org',
  '@type': 'AggregateRating',
  itemReviewed: { '@id': `${BASE_URL}/#business` },
  ratingValue: '4.9',
  reviewCount: '500',
  bestRating: '5',
}

export function reviewSchema(name: string, text: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: { '@id': `${BASE_URL}/#business` },
    author: { '@type': 'Person', name },
    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    reviewBody: text,
  }
}
