'use client'

import { useState } from 'react'
import Section from '@/components/Section'
import ProjectCard from '@/components/ProjectCard'
import { projects, type Project } from '@/lib/portfolio'
import type { Metadata } from 'next'

type FilterStatus = 'All' | 'Live' | 'Building'

export default function PortfolioPage() {
  const [filter, setFilter] = useState<FilterStatus>('All')

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((p) => p.status === filter)

  const filters: FilterStatus[] = ['All', 'Live', 'Building']

  return (
    <Section className="bg-ababMint">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Portfolio
      </h1>
      <p className="text-gray-600 mb-8 max-w-2xl">
        A collection of ventures we&apos;ve built, invested in, or are actively
        incubating. From media to infrastructure to consumer applications.
      </p>

      {/* Filters */}
      <div className="flex items-center gap-2 mb-8">
        {filters.map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 text-sm font-medium transition-colors ${
              filter === status
                ? 'bg-ababTeal text-white'
                : 'bg-white text-gray-700 border border-gray-200 hover:border-ababTeal'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <p className="text-gray-500 text-center py-12">
          No projects found with the selected filter.
        </p>
      )}
    </Section>
  )
}
