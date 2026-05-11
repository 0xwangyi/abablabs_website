import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import Button from '@/components/Button'
import { projects } from '@/lib/portfolio'

export default function PortfolioPage() {
  return (
    <>
      <Section className="bg-[#F4F6F3]">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
            Portfolio
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 md:text-6xl">
            Products operated by ABAB Labs.
          </h1>
          <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
            The portfolio includes operating products across information, AI infrastructure, relationship intelligence, and knowledge systems.
          </p>
        </div>
      </Section>

      <Section className="bg-[#ECEFF1]">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-950">
              Operating products
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Current product surfaces across web and selected mobile tools.
            </p>
          </div>
          <div className="rounded-full border border-ababTeal/25 bg-ababTeal/10 px-3 py-1.5 text-xs font-semibold text-gray-950">
            All products operating
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      <Section className="bg-gray-950 text-white">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Discuss a product, platform, or workflow.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300">
              Reach out for product partnerships, platform access, customer use cases, or company inquiries.
            </p>
          </div>
          <Button href="/contact" variant="secondary">
            Contact ABAB Labs
          </Button>
        </div>
      </Section>
    </>
  )
}
