'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SITE } from '@/lib/site'

function isActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(href + '/')
}

export default function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-surface/92 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span
            className="flex h-9 w-9 items-center justify-center rounded-lg bg-signal-500 text-paper"
            aria-hidden
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 21s-6-5.1-6-10a6 6 0 1 1 12 0c0 4.9-6 10-6 10Z" strokeLinejoin="round" />
              <circle cx="12" cy="10.5" r="2.25" />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold tracking-tight text-ink">
              {SITE.name}
            </span>
            <span className="hidden text-[0.6875rem] tracking-[0.12em] uppercase text-ink-faint sm:block">
              {SITE.descriptor}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {SITE.nav.map((item) =>
            item.children ? (
              <div key={item.href} className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                <Link
                  href={item.href}
                  className={`flex min-h-11 items-center gap-1 rounded-lg px-3.5 text-[0.9375rem] font-medium transition-colors ${
                    item.children.some((c) => isActive(pathname, c.href))
                      ? 'text-ink'
                      : 'text-ink-soft hover:text-ink'
                  }`}
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((v) => !v)}
                >
                  {item.label}
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
                {servicesOpen && (
                  <div className="absolute left-0 top-full pt-2">
                    <div className="min-w-56 rounded-lg border border-line bg-surface p-1.5 shadow-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setServicesOpen(false)}
                          className={`flex min-h-11 items-center rounded-md px-3.5 text-[0.9375rem] font-medium transition-colors ${
                            isActive(pathname, child.href)
                              ? 'bg-signal-50 text-signal-700'
                              : 'text-ink-soft hover:bg-paper hover:text-ink'
                          }`}
                          aria-current={isActive(pathname, child.href) ? 'page' : undefined}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`flex min-h-11 items-center rounded-lg px-3.5 text-[0.9375rem] font-medium transition-colors ${
                  isActive(pathname, item.href) ? 'text-ink' : 'text-ink-soft hover:text-ink'
                }`}
                aria-current={isActive(pathname, item.href) ? 'page' : undefined}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link href="/scorecard" className="btn btn-primary ml-3 whitespace-nowrap text-[0.9375rem]">
            {SITE.cta}
          </Link>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <Link href="/scorecard" className="btn btn-primary px-4 text-sm">
            {SITE.cta}
          </Link>
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-lg border border-line"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 top-16 z-30 bg-paper/95 backdrop-blur lg:hidden">
          <nav className="container-site flex flex-col gap-1 py-8" aria-label="Mobile">
            <Link
              href="/scorecard"
              onClick={() => setOpen(false)}
              className="btn btn-primary mb-4 w-full"
            >
              {SITE.ctaFull}
            </Link>
            {SITE.nav.map((item) =>
              item.children ? (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-center rounded-lg px-2 font-display text-2xl text-ink"
                  >
                    {item.label}
                  </Link>
                  <div className="mb-3 ml-4 flex flex-col gap-1 border-l border-line pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="flex min-h-11 items-center rounded-lg px-2 text-[0.9375rem] font-medium text-ink-soft hover:text-ink"
                        aria-current={isActive(pathname, child.href) ? 'page' : undefined}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 items-center rounded-lg px-2 font-display text-2xl text-ink"
                  aria-current={isActive(pathname, item.href) ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 text-center text-ink-soft hover:text-ink"
            >
              Contact & booking
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}