import type { Metadata } from 'next'
import { contactEmail, contactEmailHref } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Email ABAB Labs at ${contactEmail}.`,
}

export default function ContactPage() {
  return (
    <section id="contact-channel" className="scroll-mt-16 px-4 py-24 md:px-6 md:py-36">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-950 md:text-5xl">Contact</h1>
        <a
          href={contactEmailHref}
          aria-label={`Email ABAB Labs at ${contactEmail}`}
          className="mt-6 inline-block text-lg text-gray-950 underline underline-offset-4"
        >
          {contactEmail}
        </a>
      </div>
    </section>
  )
}
