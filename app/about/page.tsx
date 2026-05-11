import type { Metadata } from 'next'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'About',
  description:
    'ABAB Labs builds and operates products across information, AI, and infrastructure.',
  openGraph: {
    title: 'About | ABAB Labs',
    description:
      'ABAB Labs builds and operates products across information, AI, and infrastructure.',
  },
}

export default function AboutPage() {
  return (
    <>
      <Section className="bg-gray-950 text-white">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ababYellow">
            About
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            ABAB Labs builds and operates software products.
          </h1>
          <p className="mt-6 text-base leading-8 text-gray-300 md:text-lg">
            The company operates software products across information platforms, AI infrastructure, knowledge systems, and professional workflows.
          </p>
        </div>
      </Section>

      <Section className="bg-surfaceMuted">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              Company profile
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-gray-700">
            <p>
              ABAB Labs is a software company focused on building and operating internet-native products with long-term utility across focused operating areas.
            </p>
            <p>
              Our work centers on operating systems for information discovery, structured intelligence, document understanding, relationship workflows, and AI-assisted professional workflows.
            </p>
            <p>
              We operate with a small, focused team and collaborate with contributors globally, prioritizing practical engineering, product clarity, and durable systems.
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-y border-gray-200/70 bg-surfaceMutedSoft">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              Operating posture
            </h2>
          </div>
          <div className="border-y border-gray-300/70">
            {[
              ['Operator-led', 'Products are shaped by direct product, engineering, and operating ownership.'],
              ['Maintained systems', 'The portfolio emphasizes products that can be maintained and improved over time.'],
              ['Durable utility', 'We care about maintainable infrastructure, structured workflows, and repeat user value.'],
            ].map(([title, description]) => (
              <div
                key={title}
                className="grid gap-3 border-b border-gray-300/70 py-5 last:border-b-0 md:grid-cols-[180px_minmax(0,1fr)]"
              >
                <h3 className="text-base font-semibold text-gray-950">{title}</h3>
                <p className="text-sm leading-7 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
