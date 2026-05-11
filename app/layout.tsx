import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ABAB Labs',
    template: '%s | ABAB Labs',
  },
  description:
    'ABAB Labs builds and operates internet-native software products across information, AI, infrastructure, and professional workflows.',
  icons: {
    icon: [
      { url: '/brand/abab-mark-64.png', sizes: '64x64', type: 'image/png' },
      { url: '/brand/abab-mark-256.png', sizes: '256x256', type: 'image/png' },
    ],
    shortcut: '/brand/abab-mark-64.png',
    apple: { url: '/brand/abab-mark-256.png', sizes: '256x256' },
  },
  openGraph: {
    title: 'ABAB Labs',
    description:
      'Building and operating a focused portfolio of internet-native infrastructure and intelligence products.',
    url: 'https://abablabs.com',
    siteName: 'ABAB Labs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABAB Labs',
    description:
      'Building and operating a focused portfolio of internet-native infrastructure and intelligence products.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className="flex min-h-screen flex-col bg-surfacePage font-sans text-gray-950 antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main
          id="main-content"
          className="flex-1 outline-none focus-visible:ring-2 focus-visible:ring-ababTeal focus-visible:ring-offset-2 focus-visible:ring-offset-surfacePage"
          tabIndex={-1}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
