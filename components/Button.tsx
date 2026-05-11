'use client'

import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary' | 'ghost'
  type?: 'button' | 'submit'
  onClick?: () => void
  className?: string
}

export default function Button({
  children,
  href,
  variant = 'primary',
  type = 'button',
  onClick,
  className = '',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center text-sm font-semibold transition-all duration-200 rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ababTeal'

  const variants = {
    primary: 'px-5 py-2.5 bg-gray-950 text-white hover:bg-gray-800',
    secondary:
      'px-5 py-2.5 bg-white text-gray-900 border border-gray-200 hover:border-gray-400 hover:bg-gray-50',
    ghost:
      'px-1 py-1 text-gray-600 hover:text-gray-950 underline-offset-4 hover:underline',
  }

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  )
}
