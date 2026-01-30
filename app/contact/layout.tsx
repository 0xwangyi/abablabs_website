import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with ABAB Labs. We are always interested in hearing from founders, collaborators, and curious minds.',
  openGraph: {
    title: 'Contact | ABAB Labs',
    description: 'Get in touch with ABAB Labs.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
