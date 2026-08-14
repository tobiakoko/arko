import Link from 'next/link'
import { SITE } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-paper">
      <div className="container-site pb-28 pt-16 lg:py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-xl font-semibold text-ink">Arko Media Labs</p>
            <p className="mt-2 text-sm text-text-secondary">{SITE.descriptor}</p>
            <p className="mt-4 text-sm text-text-secondary">
              One senior builder. Custom design, not templates. Your site, domain, and content stay
              yours — no lock-in, cancel anytime.
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-3" aria-label="Footer">
            {SITE.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex min-h-11 items-center text-sm text-text-secondary transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="flex min-h-11 items-center text-sm text-text-secondary transition-colors hover:text-ink"
            >
              Contact
            </Link>
            <Link
              href="/health-check"
              className="flex min-h-11 items-center text-sm font-semibold text-amber-700 transition-colors hover:text-amber-800"
            >
              Free Health Check
            </Link>
            <Link
              href="/church-websites#nonprofits"
              className="flex min-h-11 items-center text-sm text-text-secondary transition-colors hover:text-ink"
            >
              Nonprofits & ministries
            </Link>
          </nav>

          <div className="flex flex-col gap-2 text-sm text-text-secondary">
            <a href={SITE.contact.emailHref} className="min-h-11 content-center underline-offset-4 hover:text-ink hover:underline">
              {SITE.contact.email}
            </a>
            <a href={SITE.contact.phoneHref} className="min-h-11 content-center underline-offset-4 hover:text-ink hover:underline">
              {SITE.contact.phone}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-text-tertiary sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Dallas–Fort Worth, Texas</p>
        </div>
      </div>
    </footer>
  )
}