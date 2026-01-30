import Link from 'next/link'

const footerLinks = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200/60">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10">
        {/* Top row: description + links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-6">
          <div className="max-w-md">
            <p className="text-sm text-gray-600 leading-relaxed">
              Building and operating software products and digital platforms.
            </p>
            <a
              href="mailto:support@abablabs.com"
              className="text-sm text-ababTeal hover:underline mt-1 inline-block"
            >
              support@abablabs.com
            </a>
          </div>
          <ul className="flex items-center space-x-6">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom row: copyright */}
        <div className="pt-6 border-t border-gray-100">
          <p className="text-xs text-gray-400">
            © {currentYear} ABAB Labs. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 mt-1">
            ABAB Labs LLC · Sacramento, California, United States · support@abablabs.com
          </p>
        </div>
      </div>
    </footer>
  )
}
