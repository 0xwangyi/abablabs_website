'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'

const navLinks = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const MOBILE_MENU_ID = 'primary-mobile-nav'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const menuPanelRef = useRef<HTMLDivElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  useEffect(() => {
    closeMenu()
  }, [pathname, closeMenu])

  useEffect(() => {
    if (!mobileMenuOpen) return

    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const main = document.querySelector('main')
    const footer = document.querySelector('footer')
    main?.setAttribute('inert', '')
    footer?.setAttribute('inert', '')

    return () => {
      document.body.style.overflow = prevOverflow
      main?.removeAttribute('inert')
      footer?.removeAttribute('inert')
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    if (!mobileMenuOpen || !menuPanelRef.current) return

    const panel = menuPanelRef.current
    const focusable = panel.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled])',
    )
    const list = Array.from(focusable)
    if (list.length > 0) {
      list[0].focus()
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        closeMenu()
        menuButtonRef.current?.focus()
        return
      }
      if (e.key !== 'Tab' || list.length === 0) return

      const first = list[0]
      const last = list[list.length - 1]
      const active = document.activeElement

      if (e.shiftKey) {
        if (active === first) {
          e.preventDefault()
          last.focus()
        }
      } else if (active === last) {
        e.preventDefault()
        first.focus()
      }
    }

    panel.addEventListener('keydown', onKeyDown)
    return () => panel.removeEventListener('keydown', onKeyDown)
  }, [mobileMenuOpen, closeMenu])

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/70 bg-white/95 px-4 backdrop-blur md:px-6">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between" aria-label="Primary">
        <Link
          href="/"
          className="flex items-center gap-3 text-xl tracking-tight text-gray-950"
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
          ref={menuButtonRef}
          type="button"
          className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          onClick={() => setMobileMenuOpen((o) => !o)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls={MOBILE_MENU_ID}
        >
          {mobileMenuOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
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
              aria-hidden="true"
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
        <div
          ref={menuPanelRef}
          id={MOBILE_MENU_ID}
          className="border-t border-gray-200/70 bg-white md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <ul className="mx-auto max-w-6xl space-y-1 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-md px-2 py-2 text-sm transition-colors ${
                      isActive
                        ? 'bg-gray-50 font-semibold text-gray-950'
                        : 'text-gray-600 hover:text-gray-950'
                    }`}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="mx-auto max-w-6xl border-t border-gray-100 px-2 pb-4 pt-2">
            <Link
              href="/contact"
              className="block rounded-md bg-gray-950 px-3 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-gray-800"
              onClick={closeMenu}
            >
              Contact team
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
