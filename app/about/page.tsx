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
    <>
      <Section className="bg-ababMint">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">
            About
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 md:text-6xl">
            ABAB Labs is a product operating company.
          </h1>
          <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
            We build and operate software platforms across information, infrastructure, AI, communication, and consumer utilities.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              Company profile
            </h2>
          </div>
          <div className="space-y-6 text-base leading-8 text-gray-700">
            <p>
              ABAB Labs is a U.S.-based software company focused on building and operating internet-native products with long-term utility.
            </p>
            <p>
              Our work centers on scalable product systems: information discovery, identity and link infrastructure, real-world data access, AI-assisted professional workflows, and owned communication surfaces.
            </p>
            <p>
              We operate with a small, focused team and collaborate with contributors globally, prioritizing practical engineering, product clarity, and sustainable growth.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-gray-50">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['Builder-led', 'Products are shaped by direct product and engineering ownership.'],
            ['Portfolio-minded', 'Each product is designed to stand alone while informing the broader company direction.'],
            ['Long-horizon', 'We care about durable systems, maintainable infrastructure, and repeat user value.'],
          ].map(([title, description]) => (
            <div key={title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-950">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
