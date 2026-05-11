import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-950 antialiased flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
