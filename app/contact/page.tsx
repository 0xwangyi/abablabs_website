import type { Metadata } from 'next'
import { contactEmail, contactEmailHref } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Email ABAB Labs at ${contactEmail}.`,
}

export default function ContactPage() {
  return (
    <section id="contact-channel" className="scroll-mt-16 px-4 pt-8 md:px-6 md:pt-10">
      <div>
        <h1 className="text-lg font-normal text-gray-950">
          <a
            href={contactEmailHref}
            aria-label={`Email ABAB Labs at ${contactEmail}`}
            className="underline underline-offset-4"
          >
            {contactEmail}
          </a>
        </h1>
      </div>
    </section>
  )
}
