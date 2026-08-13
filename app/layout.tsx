import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arko Media Labs | Digital Innovation Studio',
  description: 'Arko Media Labs - Digital Innovation Studio. Everything you need in one agency.',
  icons: {
    icon: '/vite.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
