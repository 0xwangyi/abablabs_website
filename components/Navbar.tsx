'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const navLinks = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const useDarkHeader = isHome && !scrolled

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 px-4 backdrop-blur md:px-6 ${
        useDarkHeader
          ? 'border-b border-white/10 bg-gray-950/95'
          : 'border-b border-gray-200/70 bg-white/90'
      }`}
    >
      <nav className="max-w-6xl mx-auto h-16 flex items-center justify-between">
        <Link
          href="/"
          className={`flex items-center gap-3 text-xl tracking-tight ${
            useDarkHeader ? 'text-white' : 'text-gray-950'
          }`}
        >
          <img
            src="/brand/abab-mark.svg"
            alt="ABAB Labs"
            width={30}
            height={30}
            className="block h-[30px] w-[30px]"
          />
          <span>
            <span className="font-bold">ABAB</span>
            <span className={`font-medium ${useDarkHeader ? 'text-gray-300' : 'text-gray-600'}`}> Labs</span>
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
                        ? `${useDarkHeader ? 'text-white' : 'text-gray-950'} after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-ababTeal`
                        : useDarkHeader
                          ? 'text-gray-300 hover:text-white'
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
            className={`rounded-md px-4 py-2 text-sm font-semibold transition-colors ${
              useDarkHeader
                ? 'border border-white/15 bg-white text-gray-950 hover:bg-gray-100'
                : 'bg-gray-950 text-white hover:bg-gray-800'
            }`}
          >
            Contact team
          </Link>
        </div>

        <button
          type="button"
          className={`rounded-md p-2 md:hidden ${
            useDarkHeader ? 'text-gray-200 hover:bg-white/10' : 'text-gray-700 hover:bg-gray-100'
          }`}
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
        <div className={`border-t md:hidden ${useDarkHeader ? 'border-white/10 bg-gray-950' : 'border-gray-200/70 bg-white'}`}>
          <ul className="mx-auto max-w-6xl space-y-3 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-md px-2 py-2 text-sm transition-colors ${
                      isActive
                        ? useDarkHeader
                          ? 'bg-white/10 font-semibold text-white'
                          : 'bg-gray-50 font-semibold text-gray-950'
                        : useDarkHeader
                          ? 'text-gray-300 hover:text-white'
                          : 'text-gray-600 hover:text-gray-950'
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
