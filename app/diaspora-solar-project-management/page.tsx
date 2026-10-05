import type { Metadata } from 'next';
import DiasporaLanding from '@/components/DiasporaLanding';

export const metadata: Metadata = {
  title: 'Diaspora Solar Project Management Kenya | Lavan Solar',
  description: 'Independent solar project review and on-the-ground technical representation for Kenyans abroad building or renovating property in Kenya.',
  alternates: {
    canonical: 'https://www.lavansolar.co.ke/diaspora-solar-project-management',
  },
  openGraph: {
    title: 'Managing a Solar Project in Kenya From Abroad',
    description: 'Get independent design review, equipment verification, installation oversight and documented handover through Lavan Solar Systems.',
    url: 'https://www.lavansolar.co.ke/diaspora-solar-project-management',
    siteName: 'Lavan Solar Systems',
    images: [
      {
        url: 'https://lavansolar.co.ke/images/open-graphs/og-diaspora.jpg',
        width: 1200,
        height: 630,
        alt: 'Lavan Solar Systems Diaspora Project Management',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Managing a Solar Project in Kenya From Abroad',
    description: 'Independent solar project review and on-the-ground technical representation for Kenyans abroad.',
    images: ['https://lavansolar.co.ke/images/open-graphs/og-diaspora.jpg'],
  },
};

export default function DiasporaPage() {
  return (
    <>
      <DiasporaLanding />

      {/* Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Diaspora Solar Project Management',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Lavan Solar Systems Limited',
              url: 'https://lavansolar.co.ke',
              telephone: '+254100766486',
              email: 'info@lavansolar.co.ke',
            },
            areaServed: {
              '@type': 'Country',
              name: 'Kenya',
            },
            description:
              'Independent solar project review, equipment verification, installation oversight and documented handover for Kenyans in the diaspora building or renovating property in Kenya.',
            serviceType: 'Solar Project Management',
          }),
        }}
      />

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Can Lavan review a quotation from another solar company?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. We can assess the proposed sizing, specifications, compatibility, warranties, exclusions and expected performance before you make a decision.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can you supervise a contractor I have already selected?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, subject to an agreed scope and access to the site, contractor documents and relevant project information. Inspection points should ideally be agreed before installation begins.',
                },
              },
              {
                '@type': 'Question',
                name: 'Will you tell me when to release payment?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We can verify technical progress against agreed milestones and issue a documented recommendation. You retain contractual and payment authority unless a separate written mandate provides otherwise.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can Lavan also supply and install the system?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Design and delivery can be offered as a separate engagement. We will state clearly whether Lavan is acting as an independent reviewer, owner’s representative or installation contractor.',
                },
              },
              {
                '@type': 'Question',
                name: 'How will I receive updates?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Reporting may include scheduled online meetings, written progress reports, dated photographs, videos, action registers and commissioning records, depending on the project scope.',
                },
              },
              {
                '@type': 'Question',
                name: 'Can you manage solar water heating and heat pumps as well as solar PV?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Lavan works across electrical and thermal energy systems, allowing related requirements to be coordinated during design and construction.',
                },
              },
              {
                '@type': 'Question',
                name: 'Do you work throughout Kenya?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Projects are assessed based on location, scope, access and schedule. Submit the project details and Lavan will confirm availability and any travel requirements.',
                },
              },
              {
                '@type': 'Question',
                name: 'How much does the service cost?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Fees depend on the project stage, location, value, number of inspections and required deliverables. After the initial consultation, you will receive a defined scope and fee proposal before work begins.',
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}