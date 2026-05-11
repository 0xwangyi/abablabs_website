import Section from '@/components/Section'
import Button from '@/components/Button'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/portfolio'

const trustSignals = [
  {
    value: '6',
    label: 'portfolio products',
  },
  {
    value: '3',
    label: 'live public platforms',
  },
  {
    value: 'U.S.',
    label: 'registered company',
  },
  {
    value: 'Long-term',
    label: 'operator mindset',
  },
]

const focusAreas = [
  {
    title: 'Information products',
    description:
      'Products that help people discover, organize, and return to useful signal over time.',
  },
  {
    title: 'Infrastructure layers',
    description:
      'Shared systems for identity, links, communication, data access, and platform operations.',
  },
  {
    title: 'AI for professional work',
    description:
      'Vertical models and workflows designed for domains where reliability matters.',
  },
  {
    title: 'Consumer utilities',
    description:
      'Focused applications that turn repeated everyday workflows into owned product surfaces.',
  },
]

const operatingPrinciples = [
  {
    title: 'Build durable assets',
    description:
      'We prioritize products that can compound through data, distribution, identity, or workflow ownership.',
  },
  {
    title: 'Operate close to users',
    description:
      'We keep the product loop tight: ship, measure, learn, and improve the core user experience.',
  },
  {
    title: 'Keep systems interoperable',
    description:
      'We favor practical, open, and maintainable foundations over short-lived product theater.',
  },
]

export default function HomePage() {
  const featuredProjects = projects.slice(0, 6)

  return (
    <>
      <section className="relative overflow-hidden border-b border-gray-200/70 bg-ababMint px-4 py-16 md:px-6 md:py-24">
        <img
          src="/brand/abab-mark-512.png"
          alt=""
          aria-hidden="true"
          width={512}
          height={512}
          className="pointer-events-none absolute top-24 hidden h-[360px] w-[360px] opacity-[0.13] lg:right-[7%] lg:block xl:right-[10%]"
        />
        <div className="relative z-10 mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">
              Product studio and operating company
            </p>
            <h1 className="mt-5 text-5xl font-bold tracking-tight text-gray-950 md:text-7xl">
              ABAB Labs
            </h1>
            <p className="mt-6 max-w-3xl text-2xl font-semibold leading-tight tracking-tight text-gray-950 md:text-4xl">
              Building durable software platforms for information, identity, AI, and communication.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 md:text-lg">
              We develop and operate a focused portfolio of internet-native products, with an emphasis on long-term utility, technical rigor, and scalable product systems.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/portfolio" variant="primary">
                Explore portfolio
              </Button>
              <Button href="/contact" variant="secondary">
                Partner with us
              </Button>
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
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-ababTeal">
              What we focus on
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
              A portfolio built around compounding product surfaces.
            </h2>
            <p className="mt-5 text-base leading-8 text-gray-600">
              ABAB Labs concentrates on software areas where product usage can compound through data, identity, distribution, or repeat workflows.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area) => (
              <div key={area.title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-950">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-y border-gray-200/70 bg-gray-50">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-ababTeal">
              Portfolio
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
              Products in market and in development.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-gray-600">
              A clear product map helps investors, partners, and customers understand both current traction and the direction of the company.
            </p>
          </div>
          <Button href="/portfolio" variant="secondary">
            View all products
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      <Section className="bg-gray-950 text-white">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-ababYellow">
              Operating principles
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
              Built for credibility, not noise.
            </h2>
          </div>
          <div className="grid gap-4">
            {operatingPrinciples.map((principle, index) => (
              <div
                key={principle.title}
                className="grid gap-4 border-t border-white/15 pt-5 sm:grid-cols-[64px_1fr]"
              >
                <p className="text-sm font-semibold text-ababTeal">
                  0{index + 1}
                </p>
                <div>
                  <h3 className="text-lg font-semibold">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-gray-300">{principle.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-ababMint">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">
              Investors, partners, and customers
            </p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
              Talk to ABAB Labs about product partnerships, strategic distribution, or customer use cases.
            </h2>
          </div>
          <Button href="/contact" variant="primary">
            Contact ABAB Labs
          </Button>
        </div>
      </Section>
    </>
  )
}
