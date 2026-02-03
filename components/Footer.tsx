import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200/60">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8">
        {/* Top section */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Software products and digital platforms by ABAB Labs LLC.
            </p>
            <a
              href="mailto:support@abablabs.com"
              className="text-sm text-ababTeal hover:underline mt-1 inline-block"
            >
              support@abablabs.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">
            © {currentYear} ABAB Labs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
