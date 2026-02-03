import type { Metadata } from 'next'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'About',
  description:
    'ABAB Labs is a U.S.-based software company focused on building and operating digital platforms.',
  openGraph: {
    title: 'About | ABAB Labs',
    description:
      'ABAB Labs is a U.S.-based software company focused on building and operating digital platforms.',
  },
}

export default function AboutPage() {
  return (
    <Section className="bg-ababMint">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          About ABAB Labs
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            ABAB Labs is a U.S.-based software company and product studio focused on building and operating digital platforms across media, infrastructure, and consumer applications.
          </p>
          <p>
            Our work centers on designing and maintaining scalable, internet-native software systems, with an emphasis on long-term product development and user-centric design.
          </p>
          <p>
            ABAB Labs develops and operates multiple active products and platforms, including news and information services, market and data tools, and consumer-facing applications.
          </p>
          <p>
            We operate with a small, focused team and collaborate with contributors globally, prioritizing technical rigor and sustainable long-term growth.
          </p>
        </div>
      </div>
    </Section>
  )
}
