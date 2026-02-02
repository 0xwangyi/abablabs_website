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
      <section id={id} className={`py-12 md:py-16 px-4 md:px-6 ${className}`}>
        <div className="max-w-6xl mx-auto">{children}</div>
      </section>
    </>
  )
}
