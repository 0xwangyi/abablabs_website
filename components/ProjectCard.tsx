import type { Project } from '@/lib/portfolio'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const CardContent = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-400">
            {project.category}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-gray-950">{project.name}</h3>
        </div>
        <span className="shrink-0 rounded-full border border-ababTeal/25 bg-ababTeal/10 px-2.5 py-1 text-xs font-semibold text-gray-950">
          {project.status}
        </span>
      </div>
      <p className="mt-5 text-sm leading-7 text-gray-800">{project.tagline}</p>
      <p className="mt-3 text-sm leading-7 text-gray-500">{project.operatingLine}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.signals.map((signal) => (
          <span
            key={signal}
            className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500"
          >
            {signal}
          </span>
        ))}
      </div>
      <p className="mt-7 border-t border-gray-100 pt-4 text-sm font-semibold text-gray-950">
        {project.ctaLabel}
        {project.link && <span aria-hidden="true"> -&gt;</span>}
      </p>
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
