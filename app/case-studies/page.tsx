import type { Metadata } from 'next'
import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import { SITE } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'Proof you can check: before/after metrics from churches we\u2019ve served. First case studies publishing soon — no invented quotes, ever.',
}

export default function CaseStudiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Case Studies' }]} />
      <section className="container-site pb-16 pt-10">
        <div className="max-w-3xl">
          <p className="type-eyebrow">Proof · under construction, on purpose</p>
          <h1 className="type-h1 mt-4 text-[clamp(2.25rem,0.75rem+3.5vw,4.5rem)]">
            Case studies are coming after our next two builds.
          </h1>
          <p className="type-lead mt-6">
            We publish numbers you can check, not quotes we invented. Our first two case
            studies — DLBC Tampa and DCLM Lewisville — are being documented now with real
            before/after metrics, and they&rsquo;ll go up right here.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-16">
        <div className="container-site">
          <div className="mx-auto max-w-2xl rounded-[10px] border border-line bg-paper p-8 text-center">
            <h2 className="type-h3">Until then, the guarantee stands on its own.</h2>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-soft">
              No measurable improvement in your Google visibility within 90 days? Your next
              month is free. Bounded, in writing, from day one.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/scorecard" className="btn btn-primary">
                {SITE.cta}
              </Link>
              <Link href="/pricing" className="btn btn-secondary">
                See pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}