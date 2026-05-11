import Section from '@/components/Section'
import Button from '@/components/Button'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/portfolio'

const operatingSystems = [
  {
    title: 'Intelligence layers',
    description:
      'Systems designed to structure information, memory, and reasoning over time.',
  },
  {
    title: 'AI infrastructure',
    description:
      'Structured intelligence systems for documents, domain logic, and machine-assisted reasoning.',
  },
  {
    title: 'Memory systems',
    description:
      'Infrastructure for context, recall, knowledge retention, and operational continuity.',
  },
  {
    title: 'Operational intelligence',
    description:
      'Durable systems for high-context work, decision support, and institutional memory.',
  },
]

export default function HomePage() {
  const featuredProjects = projects

  return (
    <>
      <section className="relative overflow-hidden border-b border-gray-900 bg-gray-950 px-4 py-16 text-white md:px-6 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-15%,rgba(78,205,196,0.14),transparent_55%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_100%_0%,rgba(254,109,115,0.07),transparent_52%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.03)_0px,transparent_32px)] opacity-90"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-6xl animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold text-ababYellow">
                Intelligence infrastructure
              </p>
              <h1 className="mt-5 text-5xl font-bold tracking-tight text-white md:text-7xl">
                ABAB Labs
              </h1>
              <p className="mt-6 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                Operating systems for information, memory, and machine-assisted reasoning.
              </p>
              <div className="mt-6 max-w-2xl space-y-3 text-base leading-7 text-gray-300 md:text-lg md:leading-8">
                <p>
                  ABAB Labs builds long-horizon intelligence infrastructure for structured knowledge, signal discovery, and operational memory.
                </p>
                <p>
                  The company favors practical systems, operational reliability, and durable architecture.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/portfolio" variant="primary" className="!bg-white !text-gray-950 hover:!bg-gray-100">
                  Explore portfolio
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                  className="border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
                >
                  Contact ABAB Labs
                </Button>
              </div>

              <div className="mt-10 rounded-lg border border-white/10 bg-white/[0.04] p-5 backdrop-blur lg:hidden">
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-500">
                  Operating snapshot
                </p>
                <div className="mt-4 divide-y divide-white/10">
                  {[
                    ['Information systems', 'ABAB News'],
                    ['Structured AI', 'ABAB OK'],
                    ['Memory systems', 'ABAB Time, ABAB Word'],
                  ].map(([label, value]) => (
                    <div key={label} className="py-3 first:pt-0 last:pb-0">
                      <p className="text-sm font-semibold text-white">{label}</p>
                      <p className="mt-1 text-sm leading-6 text-gray-400">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden rounded-lg border border-white/10 bg-white/[0.04] p-5 backdrop-blur lg:block">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-gray-500">
                Operating snapshot
              </p>
              <div className="mt-5 divide-y divide-white/10">
                {[
                  ['Information systems', 'ABAB News'],
                  ['Structured AI', 'ABAB OK'],
                  ['Memory systems', 'ABAB Time, ABAB Word'],
                ].map(([label, value]) => (
                  <div key={label} className="py-4 first:pt-0 last:pb-0">
                    <p className="text-sm font-semibold text-white">{label}</p>
                    <p className="mt-1 text-sm leading-6 text-gray-400">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="border-b border-gray-200/70 bg-surfaceMuted">
        <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ababTeal">
              Operating Systems
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
              Systems built for sustained operation.
            </h2>
            <p className="mt-5 text-base leading-7 text-gray-600">
              ABAB Labs develops systems that improve through sustained operation, structured knowledge, and durable use.
            </p>
          </div>
          <div className="border-y border-gray-300/70">
            {operatingSystems.map((area) => (
              <div
                key={area.title}
                className="grid gap-3 border-b border-gray-300/70 py-5 last:border-b-0 md:grid-cols-[190px_minmax(0,1fr)]"
              >
                <h3 className="text-base font-semibold text-gray-950">{area.title}</h3>
                <p className="text-sm leading-7 text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-y border-gray-200/70 bg-surfaceMutedSoft">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ababTeal">
              Portfolio
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
              Operating systems and active layers.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
              A focused portfolio across information intelligence, structured AI, network memory, and cognitive systems.
            </p>
          </div>
          <Button href="/portfolio" variant="secondary">
            View all products
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      <Section className="bg-gray-950 text-white">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-ababYellow">
              Contact
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              Connect on systems, infrastructure, and platform access.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-300">
              For strategic partnerships, research collaboration, or infrastructure discussions, contact ABAB Labs directly.
            </p>
          </div>
          <Button href="/contact#contact-channel" variant="primary" className="!bg-white !text-gray-950 hover:!bg-gray-100">
            Get in touch
          </Button>
        </div>
      </Section>
    </>
  )
}
