import Link from 'next/link'
import { SITE } from '@/lib/site'

export default function NotFound() {
  return (
    <section className="container-site py-24 text-center lg:py-32">
      <p className="type-label mb-5">404</p>
      <h1 className="type-h1 text-ink">Find your way home.</h1>
      <p className="type-body mx-auto mt-6 max-w-[65ch] text-text-body">
        The page you&apos;re looking for moved — or never existed. But your church&apos;s Google
        presence shouldn&apos;t be a dead end either.
      </p>
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link href="/health-check" className="btn btn-primary">
          {SITE.cta}
        </Link>
        <Link href="/" className="btn btn-secondary">
          Back to home
        </Link>
      </div>
    </section>
  )
}