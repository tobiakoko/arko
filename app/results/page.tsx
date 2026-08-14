import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Results',
  description:
    'Church websites we\u2019ve built and the results they\u2019re producing. We only publish numbers we can verify.',
}

const studies = [
  {
    client: 'Deeper Life Bible Church — Tampa, FL',
    scope: 'Full custom rebuild',
    challenge:
      'A congregation that was invisible on Google. The old site was years out of date, unusable on phones, and service information was wrong — guests couldn\u2019t trust what they found.',
    solution:
      'A custom, mobile-first rebuild: service times front and center, Plan-a-Visit pages, sermon archive, and giving — with the church\u2019s own voice and building in the design, not a template kit.',
    results: 'Measuring what changed after launch — we publish metrics only once we can verify them.',
    placeholder: true,
  },
  {
    client: 'DCLM Lewisville — Lewisville, TX',
    scope: 'Custom rebuild + digital presence',
    challenge:
      'A growing congregation whose online presence had not kept up: slow site, outdated info, and no sermon content reachable on Google.',
    solution:
      'Custom design with sermon and podcast setup, refreshed service and location info, and a Google presence aligned with how neighbors actually search.',
    results: 'Measuring what changed after launch — we publish metrics only once we can verify them.',
    placeholder: true,
  },
]

export default function ResultsPage() {
  return (
    <>
      <section className="container-site pb-16 pt-14 lg:pb-24 lg:pt-20">
        <p className="type-label mb-5">Results</p>
        <h1 className="type-h1 max-w-[16ch] text-ink">Churches we&apos;ve built.</h1>
        <p className="type-body mt-6 max-w-[65ch] text-text-body">
          Real churches, real builds. We only publish numbers we can verify — new client results
          are added here as they come in.
        </p>
        <div className="mt-8">
          <Link href="/health-check" className="btn btn-primary">
            {SITE.cta}
          </Link>
        </div>
      </section>

      <section className="bg-surface-2">
        <div className="container-site py-16 lg:py-24">
          <div className="grid gap-6 lg:grid-cols-2">
            {studies.map((s) => (
              <article key={s.client} className="card">
                <p className="type-label">{s.client}</p>
                <p className="mt-2 text-sm font-semibold text-amber-800">{s.scope}</p>
                <div className="mt-6 space-y-5">
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-text-secondary">Challenge</h2>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-text-body">{s.challenge}</p>
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-text-secondary">Solution</h2>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-text-body">{s.solution}</p>
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-wide text-text-secondary">Results</h2>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-text-body">{s.results}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-10 text-sm text-text-tertiary">
            More builds from our studio portfolio — starter projects that sharpened the craft before
            the church line: Ron&apos;s Body Shop · DLBC Tampa · DCLM Lewisville · Afromerica · Ossei
            Prempeh. Links on request.
          </p>
        </div>
      </section>
    </>
  )
}