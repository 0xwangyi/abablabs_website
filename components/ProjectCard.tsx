import type { Project } from '@/lib/portfolio'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statusColor =
    project.status === 'Live'
      ? 'bg-ababTeal/15 text-gray-950 border-ababTeal/30'
      : 'bg-ababYellow/45 text-gray-950 border-ababYellow'

  const CardContent = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
            {project.category}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-gray-950">{project.name}</h3>
        </div>
        <span className={`shrink-0 rounded-full border px-2.5 py-1 text-xs font-semibold ${statusColor}`}>
          {project.status}
        </span>
      </div>
      <p className="mt-5 text-gray-700 text-sm leading-relaxed">{project.tagline}</p>
      <p className="mt-4 text-sm leading-relaxed text-gray-500">{project.audience}</p>
      {project.link && (
        <p className="mt-6 text-sm font-semibold text-gray-950">
          View product <span aria-hidden="true">-&gt;</span>
        </p>
      )}
    </>
  )

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
      >
        {CardContent}
      </a>
    )
  }

  return (
    <div className="h-full rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      {CardContent}
    </div>
  )
}
