import Section from '@/components/Section'
import Button from '@/components/Button'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/portfolio'

const trustSignals = [
  {
    value: '4',
    label: 'operating products',
  },
  {
    value: '4',
    label: 'public domains',
  },
  {
    value: '4',
    label: 'iOS apps',
  },
  {
    value: 'LLC',
    label: 'ABAB Labs LLC',
  },
]

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

const companyRecord = [
  {
    title: 'Legal entity',
    description:
      'ABAB Labs LLC is listed as the operating company for the website and product portfolio.',
  },
  {
    title: 'Company base',
    description: 'California, United States.',
  },
  {
    title: 'Public domains',
    description:
      'The company lists public product domains for ABAB News, ABAB OK, ABAB Time, and ABAB Word.',
  },
  {
    title: 'iOS distribution',
    description:
      'All four products have iOS apps available through public App Store distribution.',
  },
  {
    title: 'Contact and legal pages',
    description:
      'The company publishes support@abablabs.com, Terms of Service, and Privacy Policy pages.',
  },
]

export default function HomePage() {
  const featuredProjects = projects

  return (
    <>
      <section className="relative overflow-hidden border-b border-gray-200/70 bg-ababMint px-4 py-16 md:px-6 md:py-24">
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold text-gray-500">
                U.S.-based software company
              </p>
              <h1 className="mt-5 text-5xl font-bold tracking-tight text-gray-950 md:text-7xl">
                ABAB Labs
              </h1>
              <p className="mt-6 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-gray-950 md:text-4xl">
                Operating software platforms for information, AI, and professional workflows.
              </p>
              <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-gray-600 md:text-lg">
                <p>
                  ABAB Labs develops internet-native infrastructure and intelligence products used through public platforms and structured workflows.
                </p>
                <p>
                  The company focuses on practical systems, operational reliability, and long-term product durability.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/portfolio" variant="primary">
                  Explore portfolio
                </Button>
                <Button href="/contact" variant="secondary">
                  Contact ABAB Labs
                </Button>
              </div>
            </div>

            <div className="hidden rounded-lg border border-gray-200 bg-white/80 p-5 shadow-sm backdrop-blur lg:block">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-400">
                Company facts
              </p>
              <div className="mt-5 divide-y divide-gray-100">
                {[
                  ['Legal entity', 'ABAB Labs LLC'],
                  ['Base', 'California, United States'],
                  ['Products', '4 operating products'],
                  ['Availability', 'Public domains and iOS apps'],
                ].map(([label, value]) => (
                  <div key={label} className="py-4 first:pt-0 last:pb-0">
                    <p className="text-sm font-semibold text-gray-950">{label}</p>
                    <p className="mt-1 text-sm leading-6 text-gray-500">{value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustSignals.map((signal) => (
              <div
                key={signal.label}
                className="rounded-lg border border-gray-200/80 bg-white/82 p-5 shadow-sm backdrop-blur"
              >
                <p className="text-2xl font-bold tracking-tight text-gray-950">{signal.value}</p>
                <p className="mt-1 text-sm text-gray-500">{signal.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section className="bg-white">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
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
          <div className="grid gap-4 sm:grid-cols-2">
            {operatingSystems.map((area) => (
              <div key={area.title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-950">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-y border-gray-200/70 bg-ababMint">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ababTeal">
              Company Record
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
              Public evidence for company and product operations.
            </h2>
            <p className="mt-5 text-base leading-8 text-gray-600">
              The company record is organized around entity information, public domains, iOS distribution, contact details, and legal pages.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {companyRecord.map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-y border-gray-200/70 bg-gray-50">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ababTeal">
              Portfolio
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
              Operating products and active systems.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-gray-600">
              The portfolio is intentionally small. Each product is tied to a public domain, an active workflow, and a clearly identified product surface.
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

      <Section className="bg-ababMint">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
              Contact
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
              Contact ABAB Labs for partnerships and platform access.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-gray-600">
              For customer, partner, or company inquiries, reach the team directly.
            </p>
          </div>
          <Button href="/contact" variant="primary">
            Contact ABAB Labs
          </Button>
        </div>
      </Section>
    </>
  )
}
