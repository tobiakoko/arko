import Link from 'next/link'
import { SITE } from '@/lib/site'
import { CITIES } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-site py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-signal-500 text-paper"
                aria-hidden
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21s-6-5.1-6-10a6 6 0 1 1 12 0c0 4.9-6 10-6 10Z" strokeLinejoin="round" />
                  <circle cx="12" cy="10.5" r="2.25" />
                </svg>
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-ink">
                {SITE.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
              We help DFW churches that can&rsquo;t be found on Google get found by
              first-time guests — so more families walk through the door.
            </p>
            <p className="mt-6 text-sm text-ink-soft">
              <a href={SITE.contact.emailHref} className="link-signal">
                {SITE.contact.email}
              </a>
              <span className="block mt-1">{SITE.contact.region}</span>
            </p>
          </div>

          <nav aria-label="Services">
            <h2 className="type-eyebrow mb-4">Services</h2>
            <ul className="space-y-2.5">
              {SITE.nav[0].children!.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ink-soft hover:text-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h2 className="type-eyebrow mb-4">Company</h2>
            <ul className="space-y-2.5">
              <li>
                <Link href="/case-studies" className="text-sm text-ink-soft hover:text-ink">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-ink-soft hover:text-ink">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-ink-soft hover:text-ink">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-ink-soft hover:text-ink">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/accessibility-statement" className="text-sm text-ink-soft hover:text-ink">
                  Accessibility Statement
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Cities">
            <h2 className="type-eyebrow mb-4">Church Web Design</h2>
            <ul className="space-y-2.5">
              {CITIES.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/churches/${city.slug}`}
                    className="text-sm text-ink-soft hover:text-ink"
                  >
                    {city.name}, TX
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-faint">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/legal/privacy" className="text-sm text-ink-faint hover:text-ink">
              Privacy
            </Link>
            <Link href="/legal/terms" className="text-sm text-ink-faint hover:text-ink">
              Terms
            </Link>
            <Link href="/scorecard" className="btn btn-secondary text-sm">
              {SITE.cta}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}