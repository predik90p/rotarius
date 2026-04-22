import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Analytics } from '@vercel/analytics/next'
import { LocaleProvider } from '@/components/locale-provider'
import './globals.css'

const ttLakesNeue = localFont({
  src: [
    {
      path: './fonts/TT-Lakes-Neue-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/TT-Lakes-Neue-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/TT-Lakes-Neue-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './fonts/TT-Lakes-Neue-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-tt-lakes',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rotarius.com'),
  title: 'Rotarius | Swiss Precision UAV Solutions',
  description: 'Full-cycle drone manufacturing for agriculture, defense, and emergency response. Swiss precision built on years of UAV expertise.',
  icons: {
    icon: '/logo1fb.png',
    apple: '/logo1fb.png',
  },
  openGraph: {
    title: 'Rotarius | Swiss Precision UAV Solutions',
    description: 'Full-cycle drone manufacturing for agriculture, defense, and emergency response.',
    images: ['/logo1fb.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ttLakesNeue.variable} font-sans antialiased`}>
        <LocaleProvider>
          {children}
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  )
}
