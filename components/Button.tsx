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
    'inline-block text-sm font-medium transition-all duration-200'

  const variants = {
    primary: 'px-5 py-2.5 bg-ababTeal text-white hover:bg-ababTeal/90',
    secondary:
      'px-5 py-2.5 bg-transparent text-gray-700 border border-gray-300 hover:border-ababTeal hover:text-ababTeal',
    ghost:
      'px-1 py-1 text-gray-600 hover:text-ababTeal underline-offset-4 hover:underline',
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
