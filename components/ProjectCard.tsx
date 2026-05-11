import type { Project } from '@/lib/portfolio'

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md">
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
      <div className="mt-5 space-y-3 md:min-h-[132px]">
        <p className="text-sm leading-7 text-gray-800">{project.tagline}</p>
        <p className="text-sm leading-7 text-gray-500">{project.operatingLine}</p>
      </div>
      <dl className="grid gap-3 border-t border-gray-100 pt-5 sm:grid-cols-3">
        {[
          ['Domain', project.domain],
          ['Availability', project.availability],
          ['Product type', project.productType],
        ].map(([label, value]) => (
          <div key={label}>
            <dt className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-400">
              {label}
            </dt>
            <dd className="mt-1 text-sm font-medium leading-6 text-gray-800">{value}</dd>
          </div>
        ))}
      </dl>
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

      <div className="mt-5 border-t border-gray-100 pt-5">
        <p className="text-xs font-semibold text-gray-500">
          Available on
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.publicRecords.map((record) =>
            record.href ? (
              <a
                key={record.label}
                href={record.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-[11px] font-semibold text-gray-600 transition-colors hover:border-gray-300 hover:text-gray-950"
              >
                {record.label}
              </a>
            ) : (
              <span
                key={record.label}
                className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-[11px] font-semibold text-gray-500"
              >
                {record.label}
              </span>
            ),
          )}
        </div>
      </div>

      <div className="mt-auto pt-7">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex text-sm font-semibold text-gray-950 transition-colors group-hover:text-ababTeal"
          >
            {project.ctaLabel}
            <span aria-hidden="true" className="ml-1">
              -&gt;
            </span>
          </a>
        ) : (
          <p className="text-sm font-semibold text-gray-950">{project.ctaLabel}</p>
        )}
      </div>
    </article>
  )
}
