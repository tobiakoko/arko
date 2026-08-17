import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { SITE } from '@/lib/site'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.descriptor}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    'We help DFW churches that can\u2019t be found on Google get found by first-time guests. Custom church websites you own, month-to-month, with a 90-day visibility guarantee.',
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: `${SITE.name} | ${SITE.descriptor}`,
    description:
      'Custom church websites for Dallas–Fort Worth. You own your site and domain from day one. Take the free Church Visibility Scorecard.',
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
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-signal-500 focus:px-4 focus:py-3 focus:text-paper"
        >
          Skip to content
        </a>
        <Navigation />
        <main id="main">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}