import type { Metadata } from 'next'
import { Fraunces, Figtree } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import MobileCta from '@/components/MobileCta'
import { SITE } from '@/lib/site'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.descriptor}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    'We help churches get found on Google — with a website they own, plus the $10,000/month in free Google Ads most churches never claim. Custom church websites for Dallas–Fort Worth and beyond.',
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: `${SITE.name} | ${SITE.descriptor}`,
    description:
      'Custom church websites, Google Ad Grant management, and care plans. You own your site. The $10,000/month grant most churches never claim — turned on.',
    url: SITE.url,
    siteName: SITE.name,
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${figtree.variable}`}>
      <body className="font-body antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
        <MobileCta />
        <Analytics />
      </body>
    </html>
  )
}