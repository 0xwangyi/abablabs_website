import type { Metadata } from 'next'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact ABAB Labs for inquiries about our products and services.',
}

export default function ContactPage() {
  return (
    <Section className="bg-ababMint">
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Contact
        </h1>
        <p className="text-gray-600 mb-8">
          For inquiries, please contact us via email.
        </p>

        <div className="p-6 bg-white border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Email</h2>
          <a
            href="mailto:support@abablabs.com"
            className="text-ababTeal hover:underline"
          >
            support@abablabs.com
          </a>
        </div>
      </div>
    </Section>
  )
}
