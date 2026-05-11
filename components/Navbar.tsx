'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/90 px-4 backdrop-blur md:px-6">
      <nav className="max-w-6xl mx-auto h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-xl text-gray-950 tracking-tight">
          <img
            src="/brand/abab-mark.svg"
            alt="ABAB Labs"
            width={30}
            height={30}
            className="block h-[30px] w-[30px]"
          />
          <span>
            <span className="font-bold">ABAB</span>
            <span className="font-medium text-gray-600"> Labs</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative pb-1 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-gray-950 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-ababTeal'
                        : 'text-gray-600 hover:text-gray-950'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <Link
            href="/contact"
            className="rounded-md bg-gray-950 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Contact team
          </Link>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-gray-200/70 bg-white md:hidden">
          <ul className="mx-auto max-w-6xl space-y-3 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-md px-2 py-2 text-sm transition-colors ${
                      isActive ? 'bg-gray-50 font-semibold text-gray-950' : 'text-gray-600 hover:text-gray-950'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </header>
  )
}
