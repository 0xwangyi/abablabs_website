import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'ABAB Labs builds innovative products for AI and blockchain.',
  openGraph: {
    title: 'About | ABAB Labs',
    description: 'ABAB Labs builds innovative products for AI and blockchain.',
  },
}

export default function AboutPage() {
  return (
    <section className="px-4 pt-8 md:px-6 md:pt-10">
      <div>
        <h1 className="max-w-xl text-lg font-normal leading-8 text-gray-950">
          ABAB Labs builds innovative products for AI and blockchain.
        </h1>
      </div>
    </section>
  )
}
