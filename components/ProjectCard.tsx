import type { Project } from '@/lib/portfolio'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statusColor =
    project.status === 'Live'
      ? 'bg-ababTeal text-white'
      : 'bg-ababYellow/80 text-gray-800'

  const CardContent = (
    <>
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-base font-semibold text-gray-900">{project.name}</h3>
        <span className={`px-2 py-0.5 text-xs font-medium ${statusColor}`}>
          {project.status}
        </span>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{project.tagline}</p>
    </>
  )

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white p-6 border border-gray-200 hover:border-ababTeal transition-all duration-200 hover:-translate-y-0.5"
      >
        {CardContent}
      </a>
    )
  }

  return (
    <div className="bg-white p-6 border border-gray-200">
      {CardContent}
    </div>
  )
}
