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
    <section className="px-4 py-24 md:px-6 md:py-36">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-950 md:text-5xl">About</h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
          ABAB Labs builds innovative products for AI and blockchain.
        </p>
      </div>
    </section>
  )
}
