import type { Metadata } from 'next'
import Section from '@/components/Section'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for ABAB Labs products and services.',
}

export default function TermsPage() {
  return (
    <Section className="bg-surfacePage">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Terms of Service
        </h1>

        <div className="space-y-8 text-gray-700 leading-relaxed text-sm">
          <p className="text-gray-500">
            Effective Date: February 1, 2026
          </p>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using any website, application, or service operated by ABAB Labs LLC (&quot;ABAB Labs,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">2. Description of Services</h2>
            <p>
              ABAB Labs develops and operates software products and digital platforms. Our services may include, but are not limited to, news and information platforms, productivity tools, and consumer applications. We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">3. User Conduct</h2>
            <p>
              You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services in any way that violates any applicable federal, state, local, or international law or regulation, or to engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the services.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">4. Intellectual Property</h2>
            <p>
              All content, features, and functionality of our services, including but not limited to text, graphics, logos, icons, images, audio clips, software, and the compilation thereof, are the exclusive property of ABAB Labs or its licensors and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">5. Third-Party Links</h2>
            <p>
              Our services may contain links to third-party websites or services that are not owned or controlled by ABAB Labs. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that ABAB Labs shall not be responsible or liable for any damage or loss caused by or in connection with the use of any such third-party content.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">6. Disclaimer of Warranties</h2>
            <p>
              OUR SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. ABAB LABS DISCLAIMS ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">7. Limitation of Liability</h2>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ABAB LABS, ITS AFFILIATES, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">8. Termination</h2>
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms. Upon termination, your right to use the services will immediately cease.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">9. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions. Any legal action or proceeding arising under these Terms shall be brought exclusively in the federal or state courts located in Sacramento County, California.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">10. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">11. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at{' '}
              <a href="mailto:support@abablabs.com" className="text-ababTeal hover:underline">
                support@abablabs.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
