import Section from '@/components/Section'
import Button from '@/components/Button'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/lib/portfolio'

const valueProps = [
  {
    title: 'Media & Information',
    description: 'Building modern media and information products.',
  },
  {
    title: 'Infrastructure & Platforms',
    description: 'Foundational software infrastructure for scalable digital services.',
  },
  {
    title: 'Consumer Apps',
    description: 'User-facing products built for everyday workflows.',
  },
  {
    title: 'Research & Experiments',
    description: 'Exploring new product ideas through rapid experiments.',
  },
]

const principles = [
  'Long-term thinking over short-term gains.',
  'Open protocols over closed platforms.',
  'User ownership over platform capture.',
  'Experiments over certainty.',
]

export default function HomePage() {
  const featuredProjects = projects.slice(0, 6)

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[60vh] md:min-h-[65vh] flex items-center bg-ababMint px-6 md:px-8">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              ABAB Labs
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed max-w-[60ch] mx-auto">
              Building and operating software products and digital platforms.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button href="/portfolio" variant="primary">
                Explore Portfolio
              </Button>
              <Button href="/contact" variant="ghost">
                Contact →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <Section className="bg-white" divider>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-10">
          What We Focus On
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {valueProps.map((prop) => (
            <div
              key={prop.title}
              className="p-5 border border-gray-200 bg-ababMint/50"
            >
              <h3 className="text-sm font-semibold text-gray-900 mb-2">
                {prop.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">{prop.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Portfolio Preview */}
      <Section className="bg-white" divider>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Portfolio
          </h2>
          <Button href="/portfolio" variant="ghost" className="text-sm">
            View All →
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      {/* Principles */}
      <Section className="bg-ababMint" divider>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900 text-center mb-10">
          Principles
        </h2>
        <div className="max-w-xl mx-auto">
          <ul className="space-y-2">
            {principles.map((principle, index) => (
              <li
                key={index}
                className="flex items-baseline gap-3 py-3 px-4 border-l border-ababTeal/60 bg-white"
              >
                <span className="text-ababTeal text-sm font-medium tabular-nums">
                  {index + 1}.
                </span>
                <span className="text-gray-700 text-sm leading-relaxed">{principle}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  )
}
