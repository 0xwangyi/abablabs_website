import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Email ABAB Labs.',
  openGraph: {
    title: 'Contact | ABAB Labs',
    description: 'Email ABAB Labs.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
