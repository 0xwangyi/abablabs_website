import type { Metadata } from 'next'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about ABAB Labs, our mission, and our focus areas in building internet-native brands.',
  openGraph: {
    title: 'About | ABAB Labs',
    description:
      'Learn about ABAB Labs, our mission, and our focus areas.',
  },
}

const focusAreas = [
  'Decentralized media and information networks',
  'Open-source infrastructure and protocols',
  'Consumer applications with user ownership',
  'Identity, reputation, and coordination systems',
  'Prediction markets and information discovery',
  'Creative tools for distributed teams',
]

export default function AboutPage() {
  return (
    <Section className="bg-ababMint">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          About ABAB Labs
        </h1>

        <div className="space-y-6 text-gray-700 leading-relaxed mb-12">
          <p>
            ABAB Labs is a holding company and research lab focused on building,
            investing in, and incubating internet-native brands. We believe the
            next generation of impactful companies will be built on open protocols,
            user ownership, and long-term thinking.
          </p>
          <p>
            Our portfolio spans media, infrastructure, and consumer applications.
            We work with founders and teams who share our conviction that the
            internet&apos;s potential is still largely untapped—and that the most
            interesting opportunities lie at the intersection of technology,
            culture, and coordination.
          </p>
          <p>
            We operate with a small, focused team and a long time horizon. We
            prefer depth over breadth, and we&apos;re not afraid to explore
            unconventional ideas that may take years to mature.
          </p>
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          Focus Areas
        </h2>
        <ul className="space-y-3">
          {focusAreas.map((area, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-700"
            >
              <span className="text-ababTeal mt-1">•</span>
              <span>{area}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
