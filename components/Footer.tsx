import Link from 'next/link'
import { projects } from '@/lib/portfolio'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200/70 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="mb-8 grid gap-8 md:grid-cols-[1.15fr_0.8fr_0.85fr_0.8fr]">
          <div>
            <Link href="/" className="mb-4 flex items-center gap-3 text-lg tracking-tight text-gray-950">
              <img
                src="/brand/abab-mark.svg"
                alt="ABAB Labs"
                width={28}
                height={28}
                className="h-7 w-7"
              />
              <span>
                <span className="font-bold">ABAB</span>
                <span className="font-medium text-gray-600"> Labs</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-gray-600">
              Software company operating web products and selected mobile tools across information, AI infrastructure, and professional workflows.
            </p>
            <a
              href="mailto:support@abablabs.com"
              className="mt-3 inline-block text-sm font-semibold text-gray-950 hover:text-ababTeal"
            >
              support@abablabs.com
            </a>
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold text-gray-950">Company</h2>
            <div className="grid gap-2">
              <Link href="/portfolio" className="text-sm text-gray-500 transition-colors hover:text-gray-950">
                Portfolio
              </Link>
              <Link href="/about" className="text-sm text-gray-500 transition-colors hover:text-gray-950">
                About
              </Link>
              <Link href="/contact" className="text-sm text-gray-500 transition-colors hover:text-gray-950">
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold text-gray-950">Public Products</h2>
            <div className="grid gap-2">
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 transition-colors hover:text-gray-950"
                >
                  {project.name}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-3 text-sm font-semibold text-gray-950">Legal</h2>
            <div className="grid gap-2">
              <Link
                href="/terms"
                className="text-sm text-gray-500 transition-colors hover:text-gray-950"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-sm text-gray-500 transition-colors hover:text-gray-950"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-5">
          <div className="flex flex-col gap-2 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© {currentYear} ABAB Labs. All rights reserved.</p>
            <p>Software products and digital platforms</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
