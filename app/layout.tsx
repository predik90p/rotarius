import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  display: 'swap',
});

export const metadata: Metadata = {
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
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
