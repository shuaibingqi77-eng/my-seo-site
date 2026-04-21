import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Webflow Picks - Best Website Builder Recommendations',
  description: 'Discover the best website builder for your industry. Expert recommendations for photographers, dental clinics, coffee shops, and more.',
  verification: {
    other: {
      'impact-site-verification': 'b2e3b96f-c16b-493f-9088-19cffe5714ee',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900`}>
        {children}
      </body>
    </html>
  )
}