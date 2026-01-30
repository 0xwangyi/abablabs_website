'use client'

import { useState } from 'react'
import Section from '@/components/Section'
import Button from '@/components/Button'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Section className="bg-ababMint">
      <div className="max-w-2xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Contact
        </h1>
        <p className="text-gray-600 mb-8">
          Interested in working with us or learning more about what we do? Get in
          touch.
        </p>

        {/* Company Info */}
        <div className="mb-8 p-6 bg-white border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Company Information</h2>
          <div className="space-y-3 text-sm text-gray-600">
            <p>
              <span className="font-medium text-gray-700">Legal Name:</span>{' '}
              ABAB Labs LLC
            </p>
            <p>
              <span className="font-medium text-gray-700">Location:</span>{' '}
              Sacramento, California, United States
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mb-12 p-6 bg-white border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Email</h2>
          <a
            href="mailto:support@abablabs.com"
            className="text-ababTeal hover:underline"
          >
            support@abablabs.com
          </a>
        </div>

        {/* Contact Form */}
        <div className="p-6 bg-white border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">
            Send a Message
          </h2>

          {submitted ? (
            <div className="text-center py-8">
              <p className="text-ababTeal font-medium mb-2">Thank you!</p>
              <p className="text-gray-600 text-sm">
                Form submission coming soon. Please email us directly at{' '}
                <a
                  href="mailto:support@abablabs.com"
                  className="text-ababTeal hover:underline"
                >
                  support@abablabs.com
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-200 bg-ababMint focus:outline-none focus:border-ababTeal"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-200 bg-ababMint focus:outline-none focus:border-ababTeal"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-200 bg-ababMint focus:outline-none focus:border-ababTeal resize-none"
                />
              </div>

              <Button type="submit" variant="primary">
                Submit
              </Button>

              <p className="text-xs text-gray-500 mt-2">
                Note: Form submission coming soon.
              </p>
            </form>
          )}
        </div>
      </div>
    </Section>
  )
}
