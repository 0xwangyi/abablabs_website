export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gray-200/60">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6">
        <p className="text-sm text-gray-600 leading-relaxed">
          Software products and digital platforms by ABAB Labs LLC.
        </p>
        <a
          href="mailto:support@abablabs.com"
          className="text-sm text-ababTeal hover:underline mt-1 inline-block"
        >
          support@abablabs.com
        </a>
        <p className="text-xs text-gray-400 mt-4">
          © {currentYear} ABAB Labs. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
