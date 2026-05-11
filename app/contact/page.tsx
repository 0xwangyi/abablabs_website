import type { Metadata } from 'next'
import Section from '@/components/Section'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact ABAB Labs for platform access, strategic partnerships, research collaboration, and infrastructure discussions.',
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
            Connect with ABAB Labs.
          </h1>
          <p className="mt-6 text-base leading-8 text-gray-300 md:text-lg">
            A direct channel for platform access, strategic partnerships, research collaboration, and infrastructure discussions across intelligence systems.
          </p>
        </div>
      </Section>

      <Section className="bg-surfaceMuted">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-lg border border-gray-200 bg-white p-6 md:p-7">
            <h2 className="text-xl font-semibold tracking-tight text-gray-950">Direct channel</h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              For considered inquiries related to ABAB Labs platforms, systems, and long-term partnerships.
            </p>
            <div className="mt-6">
              <Button href="mailto:support@abablabs.com" variant="primary">
                Contact team
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              ['Platform access', 'Requests for access to ABAB Labs products, systems, and intelligence platforms.'],
              ['Strategic partnerships', 'Long-term partnerships across information systems, AI infrastructure, and knowledge networks.'],
              ['Research collaboration', 'Applied research across structured intelligence, cognition, networks, and AI systems.'],
              ['Infrastructure discussions', 'Conversations with teams and institutions building durable operating systems.'],
            ].map(([title, description]) => (
              <div key={title} className="rounded-lg border border-gray-200 bg-white p-5 md:p-6">
                <h3 className="text-base font-semibold tracking-tight text-gray-950">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
