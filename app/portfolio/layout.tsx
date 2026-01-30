import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Explore our portfolio of ventures across media, infrastructure, and consumer applications.',
  openGraph: {
    title: 'Portfolio | ABAB Labs',
    description:
      'Explore our portfolio of ventures across media, infrastructure, and consumer applications.',
  },
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
