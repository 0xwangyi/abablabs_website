import type { Metadata } from 'next'
import Section from '@/components/Section'
import { contactEmail, contactEmailHref } from '@/lib/contact'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for ABAB Labs products and services.',
}

export default function PrivacyPage() {
  return (
    <Section className="bg-surfacePage">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-gray-700 leading-relaxed text-sm">
          <p className="text-gray-500">
            Effective Date: February 1, 2026
          </p>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">1. Introduction</h2>
            <p>
              ABAB Labs LLC (&quot;ABAB Labs,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our websites, applications, and services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
            <p className="mb-3">
              We may collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Contact information (such as email address) when you reach out to us</li>
              <li>Account information if you create an account on any of our platforms</li>
              <li>Usage data and preferences when you interact with our services</li>
            </ul>
            <p className="mt-3">
              We may also automatically collect certain information when you use our services, including your IP address, browser type, operating system, referring URLs, and information about how you interact with our services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Send you technical notices and support messages</li>
              <li>Monitor and analyze trends, usage, and activities in connection with our services</li>
              <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">4. Cookies and Analytics</h2>
            <p>
              We may use cookies and similar tracking technologies to collect information about your browsing activities. These technologies help us analyze website traffic and understand how visitors interact with our services. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">5. Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties for marketing purposes. We may share information with trusted third parties who assist us in operating our services, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">7. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data. To exercise any of these rights, please contact us at the email address provided below.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">8. Children&apos;s Privacy</h2>
            <p>
              Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will take steps to delete such information.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the effective date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at{' '}
              <a
                href={contactEmailHref}
                className="text-ababTeal hover:underline"
              >
                {contactEmail}
              </a>.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
