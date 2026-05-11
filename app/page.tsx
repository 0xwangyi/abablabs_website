import Section from '@/components/Section'
import Button from '@/components/Button'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/portfolio'

const operatingSystems = [
  {
    title: 'Public platforms',
    description:
      'Products designed for continuous public operation and long-term information utility.',
  },
  {
    title: 'AI infrastructure',
    description:
      'Shared intelligence systems for workflows, document understanding, and structured reasoning.',
  },
  {
    title: 'Knowledge systems',
    description:
      'Infrastructure layers designed around memory, organization, and operational reuse.',
  },
  {
    title: 'Professional workflows',
    description:
      'AI systems designed for operational and domain-specific workflows.',
  },
]

export default function HomePage() {
  const featuredProjects = projects

  return (
    <>
      <section className="relative overflow-hidden border-b border-gray-900 bg-gray-950 px-4 py-16 text-white md:px-6 md:py-24">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold text-ababYellow">
                Building and operating software products
              </p>
              <h1 className="mt-5 text-5xl font-bold tracking-tight text-white md:text-7xl">
                ABAB Labs
              </h1>
              <p className="mt-6 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                Operating software platforms for information, AI, and professional workflows.
              </p>
              <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-gray-300 md:text-lg">
                <p>
                  ABAB Labs develops internet-native infrastructure and intelligence products used through public platforms and structured workflows.
                </p>
                <p>
                  The company focuses on practical systems, operational reliability, and long-term product durability.
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
            </div>

            <div className="hidden rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/30 backdrop-blur lg:block">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
                Operating snapshot
              </p>
              <div className="mt-5 divide-y divide-white/10">
                {[
                  ['Public platforms', 'ABAB News, ABAB Time'],
                  ['AI systems', 'ABAB OK'],
                  ['Knowledge systems', 'ABAB Word'],
                  ['Availability', 'Web products and selected mobile tools'],
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

      <Section className="border-b border-gray-200/70 bg-[#F4F6F3]">
        <div className="mb-8 max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ababTeal">
            Operating Systems
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
            Products built around continuous operation.
          </h2>
          <p className="mt-5 text-base leading-8 text-gray-600">
            ABAB Labs focuses on products that can compound through continuous operation, structured workflows, and durable user utility.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {operatingSystems.map((area) => (
            <div key={area.title} className="rounded-lg border border-gray-200/80 bg-white/85 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-950">{area.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-600">{area.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-y border-gray-200/70 bg-[#ECEFF1]">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ababTeal">
              Portfolio
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
              Operating products and active systems.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-gray-600">
              The portfolio is focused. Each product is tied to a product domain, an active workflow, and a clearly identified product surface.
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ababYellow">
              Contact
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-white md:text-4xl">
              Contact ABAB Labs for partnerships and platform access.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-gray-300">
              For customer, partner, or company inquiries, reach the team directly.
            </p>
          </div>
          <Button href="/contact" variant="primary" className="!bg-white !text-gray-950 hover:!bg-gray-100">
            Contact ABAB Labs
          </Button>
        </div>
      </Section>
    </>
  )
}
