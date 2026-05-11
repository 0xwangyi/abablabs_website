import type { Metadata } from 'next'
import Section from '@/components/Section'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact ABAB Labs for product partnerships, platform access, and operating product inquiries.',
}

export default function ContactPage() {
  return (
    <>
      <Section className="bg-gray-950 text-white">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ababYellow">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
            Contact ABAB Labs.
          </h1>
          <p className="mt-6 text-base leading-8 text-gray-300 md:text-lg">
            For product partnerships, platform access, operating product inquiries, or company discussions, contact the ABAB Labs team directly.
          </p>
        </div>
      </Section>

      <Section className="bg-surfaceMuted">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-gray-200 bg-white p-6">
            <h2 className="text-xl font-bold tracking-tight text-gray-950">Email</h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Include who you are, the product or workflow you want to discuss, and the best next step.
            </p>
            <div className="mt-6">
              <Button href="mailto:support@abablabs.com" variant="primary">
                support@abablabs.com
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Product partnerships', 'Distribution, integrations, and product collaboration around active platforms.'],
              ['Platform access', 'Use cases, access requests, and product-specific operating questions.'],
              ['Company discussions', 'Company overview, portfolio direction, and operating product context.'],
              ['Contributors', 'Engineering, product, research, and operations collaboration.'],
            ].map(([title, description]) => (
              <div key={title} className="rounded-lg border border-gray-200 bg-white p-5">
                <h3 className="text-base font-semibold text-gray-950">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
