export const BASE_URL = 'https://www.blackdiamondcleaningsolutionsllc.com'
export const SITE_NAME = 'Black Diamond Cleaning Solutions'

export function ogImageUrl(title: string, subtitle?: string, variant?: string): string {
  const params = new URLSearchParams({ title })
  if (subtitle) params.set('subtitle', subtitle)
  if (variant) params.set('variant', variant)
  return `${BASE_URL}/api/og?${params.toString()}`
}

export const defaultOgImage = {
  url: ogImageUrl('Black Diamond Cleaning Solutions', 'Professional House Cleaning in PA & NY'),
  secureUrl: ogImageUrl('Black Diamond Cleaning Solutions', 'Professional House Cleaning in PA & NY'),
  width: 1200,
  height: 630,
  alt: 'Black Diamond Cleaning Solutions — Premium House Cleaning in PA & NY',
  type: 'image/png' as const,
}

export const defaultRobots = {
  index: true,
  follow: true,
  'max-image-preview': 'large' as const,
  'max-snippet': -1,
  'max-video-preview': -1,
}
