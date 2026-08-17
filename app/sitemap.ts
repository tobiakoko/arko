import type { MetadataRoute } from 'next'
import { CITIES, SITE } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/scorecard',
    '/services/church-websites',
    '/services/visibility',
    '/services/care-plans',
    '/services/accessibility',
    '/case-studies',
    '/pricing',
    '/about',
    '/contact',
    '/accessibility-statement',
    '/legal/privacy',
    '/legal/terms',
  ]
  const cityPages = CITIES.map((city) => `/churches/${city.slug}`)
  return [...staticPages, ...cityPages].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: path === '' ? 1 : 0.7,
  }))
}