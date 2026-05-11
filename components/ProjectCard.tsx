import type { Project } from '@/lib/portfolio'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const externalLabel = `${project.name} — ${project.ctaLabel} (opens in new tab)`

  return (
    <article className="group flex h-full min-h-[260px] flex-col rounded-lg border border-gray-200 bg-white p-6 transition-colors duration-200 hover:border-gray-300 md:p-7">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400">
            {project.category}
          </p>
          <h3 className="mt-2 text-xl font-semibold tracking-tight text-gray-950">{project.name}</h3>
        </div>
        <span className="mt-1 inline-flex shrink-0 items-center gap-2 text-xs font-medium text-gray-500">
          <span
            className="h-1.5 w-1.5 shrink-0 rounded-full bg-ababTeal"
            aria-hidden="true"
          />
          {project.status}
        </span>
      </div>
      <div className="mt-7 flex flex-1 flex-col space-y-3 md:min-h-[112px]">
        <p className="line-clamp-3 text-[15px] leading-7 text-gray-800">{project.tagline}</p>
        <p className="line-clamp-2 text-sm leading-7 text-gray-500">{project.operatingLine}</p>
      </div>

      <div className="mt-auto border-t border-gray-100 pt-5">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={externalLabel}
            className="inline-flex text-sm font-semibold text-gray-950 transition-colors group-hover:text-ababTeal"
          >
            {project.ctaLabel}
            <span aria-hidden="true" className="ml-1">
              &rarr;
            </span>
          </a>
        ) : (
          <p className="text-sm font-semibold text-gray-950">{project.ctaLabel}</p>
        )}
      </div>
    </article>
  )
}
