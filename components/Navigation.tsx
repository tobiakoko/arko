'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { SITE } from '@/lib/site'

export default function Navigation() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-paper/85 backdrop-blur">
      <div className="container-site flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex min-h-11 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-ink text-paper" aria-hidden>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M12 3l8 6v12H4V9l8-6z" strokeLinejoin="round" />
              <path d="M9 21v-6h6v6" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-semibold tracking-tight text-ink">Arko Media Labs</span>
            <span className="hidden text-[0.6875rem] tracking-wide text-text-secondary sm:block">
              Church Websites & Digital Ministry
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {SITE.nav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex min-h-11 items-center rounded-lg px-3.5 text-[0.9375rem] font-medium transition-colors ${
                  active ? 'text-ink' : 'text-text-secondary hover:text-ink'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            )
          })}
          <Link href="/health-check" className="btn btn-primary ml-3 whitespace-nowrap text-[0.9375rem]">
            {SITE.ctaShort}
          </Link>
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <Link href="/health-check" className="btn btn-primary px-4 text-sm">
            {SITE.ctaShort}
          </Link>
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-lg border border-border-strong"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
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
            {SITE.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-lg px-2 font-display text-2xl text-ink hover:text-amber-700"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/health-check"
              onClick={() => setOpen(false)}
              className="btn btn-primary mt-6 w-full"
            >
              {SITE.cta}
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 text-center text-text-secondary hover:text-ink"
            >
              Contact & booking
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}