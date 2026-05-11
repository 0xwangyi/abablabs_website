import type { Metadata } from 'next'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'About',
  description:
    'ABAB Labs builds intelligence systems and information infrastructure for structured knowledge, memory, and machine-assisted reasoning.',
  openGraph: {
    title: 'About | ABAB Labs',
    description:
      'ABAB Labs builds intelligence systems and information infrastructure for structured knowledge, memory, and machine-assisted reasoning.',
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
            ABAB Labs builds intelligence systems for structured knowledge.
          </h1>
          <p className="mt-6 text-base leading-8 text-gray-300 md:text-lg">
            Information infrastructure for signal discovery, memory, and machine-assisted reasoning.
          </p>
        </div>
      </Section>

      <Section className="bg-surfaceMuted">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              Systems orientation
            </h2>
          </div>
          <div className="space-y-5 text-[15px] leading-8 text-gray-700">
            <p>
              ABAB Labs works on long-horizon information infrastructure: systems that collect, structure, retain, and reason over knowledge.
            </p>
            <p>
              The work spans public information networks, structured AI systems, relationship memory, and cognitive learning systems.
            </p>
            <p>
              The company favors durable architecture, clear operating boundaries, and systems that improve through sustained operation.
            </p>
          </div>
        </div>
      </Section>

      <Section className="border-y border-gray-200/70 bg-surfaceMutedSoft">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-950">
              Operating principles
            </h2>
          </div>
          <div className="border-y border-gray-300/70">
            {[
              ['Long-horizon operation', 'Build systems that can be operated, maintained, and improved over years.'],
              ['Structured knowledge', 'Organize information into durable memory, context, and reasoning surfaces.'],
              ['Signal discipline', 'Prioritize clear boundaries, high-quality inputs, and compounding operational intelligence.'],
            ].map(([title, description]) => (
              <div
                key={title}
                className="grid gap-3 border-b border-gray-300/70 py-5 last:border-b-0 md:grid-cols-[180px_minmax(0,1fr)]"
              >
                <h3 className="text-base font-semibold tracking-tight text-gray-950">{title}</h3>
                <p className="text-sm leading-7 text-gray-600">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
