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
    'ABAB Labs builds, invests, and incubates internet-native brands across media, infrastructure, and consumer applications.',
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
      'Build, invest, and incubate internet-native brands.',
    url: 'https://abablabs.com',
    siteName: 'ABAB Labs',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ABAB Labs',
    description:
      'Build, invest, and incubate internet-native brands.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-ababMint text-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
