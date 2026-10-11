import Link from 'next/link'
import { contactEmail, contactEmailHref } from '@/lib/contact'

const footerLinks = [
  { href: '/terms', label: 'Terms' },
  { href: '/privacy', label: 'Privacy' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 px-4 md:px-6">
      <div className="flex flex-col gap-3 py-5 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {currentYear} ABAB Labs LLC</p>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {footerLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-gray-950">
              {link.label}
            </Link>
          ))}
          <a
            href={contactEmailHref}
            aria-label={`Email ABAB Labs at ${contactEmail}`}
            className="transition-colors hover:text-gray-950"
          >
            {contactEmail}
          </a>
        </nav>
      </div>
    </footer>
  )
}
