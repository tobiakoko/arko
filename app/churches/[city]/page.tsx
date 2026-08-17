import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumbs from '@/components/Breadcrumbs'
import JsonLd from '@/components/JsonLd'
import { CITIES, getCity, SITE } from '@/lib/site'

type Props = { params: Promise<{ city: string }> }

export function generateStaticParams() {
  return CITIES.map((city) => ({ city: city.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: slug } = await params
  const city = getCity(slug)
  if (!city) return { title: 'Church Web Design' }
  return {
    title: `Church Web Design ${city.name}`,
    description: `Church web design in ${city.name}, TX — custom church websites that show up when families search "church near me". You own it, with a 90-day visibility guarantee.`,
  }
}

export default async function CityPage({ params }: Props) {
  const { city: slug } = await params
  const city = getCity(slug)
  if (!city) notFound()

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Church web design in ${city.name}, TX`,
    provider: { '@type': 'LocalBusiness', name: 'Arko Media Labs' },
    areaServed: `${city.name}, TX`,
    description: `Custom church websites for ${city.name} churches — visible in the map pack for "church near me", owned by the church from day one.`,
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: city.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Churches', href: '/services/church-websites' }, { label: city.name }]} />
      <section className="container-site pb-16 pt-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="type-eyebrow">Church Web Design · {city.name}, TX</p>
            <h1 className="type-h1 mt-4 text-[clamp(2.25rem,0.75rem+3.5vw,4.5rem)]">
              {city.h1}
            </h1>
            <p className="type-lead mt-6">{city.intro}</p>
            <p className="mt-4 font-medium text-ink">{city.hook}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/scorecard" className="btn btn-primary">
                {SITE.cta}
              </Link>
              <a href={SITE.contact.callHref} className="btn btn-secondary">
                {SITE.ctaCall}
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[10px] border border-line shadow-1">
            <iframe
              title={`Map of ${city.name}, TX`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(`${city.name}, TX`)}&output=embed`}
              className="h-80 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-16">
        <div className="container-site">
          <h2 className="type-h2">What {city.name} churches get</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {city.localProof.map((item) => (
              <div key={item} className="card p-7">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-signal-50 text-signal-500" aria-hidden>
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-soft">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-16">
        <h2 className="type-h2">Questions from {city.name} pastors</h2>
        <div className="mt-8 max-w-3xl space-y-4">
          {city.faq.map((item) => (
            <details key={item.question} className="card p-6">
              <summary className="cursor-pointer font-medium text-ink">{item.question}</summary>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-surface py-16">
        <div className="container-site">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="type-h2">Is your {city.name} church showing up?</h2>
            <p className="type-body mt-4">
              Take the scorecard and find out where you stand — free, 3 minutes, no call
              required.
            </p>
            <Link href="/scorecard" className="btn btn-primary mt-8">
              {SITE.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}