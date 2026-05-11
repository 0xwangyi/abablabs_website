'use client'

import { useState } from 'react'
import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import Button from '@/components/Button'
import { projects } from '@/lib/portfolio'

type FilterStatus = 'All' | 'Operating' | 'In Development'

export default function PortfolioPage() {
  const [filter, setFilter] = useState<FilterStatus>('All')

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.status === filter)

  const filters: FilterStatus[] = ['All', 'Operating', 'In Development']

  return (
    <>
      <Section className="bg-ababMint">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-gray-500">
            Portfolio
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 md:text-6xl">
            Public platforms and operating products.
          </h1>
          <p className="mt-6 text-base leading-8 text-gray-600 md:text-lg">
            ABAB Labs maintains a focused portfolio across information platforms, AI infrastructure, relationship workflows, and knowledge systems.
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-gray-950">
              Operating map
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Showing {filteredProjects.length} of {projects.length} products with current operating status.
            </p>
          </div>
          <div className="inline-flex w-fit rounded-lg border border-gray-200 bg-gray-50 p-1">
            {filters.map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
                  filter === status
                    ? 'bg-white text-gray-950 shadow-sm'
                    : 'text-gray-500 hover:text-gray-950'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="py-12 text-center text-gray-500">
            No projects found with the selected filter.
          </p>
        )}
      </Section>

      <Section className="bg-gray-950 text-white">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Discuss an operating product or workflow use case.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300">
              Reach out for product partnerships, platform access, professional workflow inquiries, or company discussions.
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
