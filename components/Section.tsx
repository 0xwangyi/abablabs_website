interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  divider?: boolean
}

export default function Section({
  children,
  className = '',
  id,
  divider = false,
}: SectionProps) {
  return (
    <>
      {divider && (
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="border-t border-gray-200/50" />
        </div>
      )}
      <section
        id={id}
        className={`animate-fade-in-up px-4 py-14 motion-reduce:animate-none motion-reduce:opacity-100 md:px-6 md:py-20 ${className}`}
      >
        <div className="mx-auto max-w-6xl">{children}</div>
      </section>
    </>
  )
}
