import Link from 'next/link'
import { SITE } from '@/lib/site'

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="type-eyebrow">404 · every path leads somewhere</p>
      <h1 className="type-h1 mt-4 text-[clamp(2.25rem,0.75rem+3.5vw,4.5rem)]">
        This one&rsquo;s a dead end.
      </h1>
      <p className="type-lead mt-6 max-w-xl">
        You&rsquo;ve wandered off the path. Here&rsquo;s the way back — and while
        you&rsquo;re here, the scorecard still works.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Link href="/scorecard" className="btn btn-primary">
          {SITE.cta}
        </Link>
        <Link href="/" className="btn btn-secondary">
          Back home
        </Link>
      </div>
    </section>
  )
}