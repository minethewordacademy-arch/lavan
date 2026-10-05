"use client";
import { useState } from 'react';

type FAQ = {
  question: string;
  answer: string;
};

const generalFaqs: FAQ[] = [
  {
    question: 'How much does a solar system cost in Kenya?',
    answer:
      'The cost depends on your energy needs, roof space, and system type (PV, Water Heating, or Hybrid). Most residential systems start from around KSh 150,000, and commercial systems vary widely. We provide free consultations and tailored quotes.',
  },
  {
    question: 'Do you offer installation and maintenance services?',
    answer:
      'Yes, Lavan Solar Systems provides end-to-end services including site assessment, design, professional installation, testing, commissioning, and ongoing maintenance and support.',
  },
  {
    question: 'How long does a solar installation take?',
    answer:
      'A typical residential installation takes 1-3 days depending on the system size and complexity. Commercial installations may take longer based on the scope of work.',
  },
  {
    question: 'Will solar panels work during cloudy days or power outages?',
    answer:
      'Solar panels still generate electricity on cloudy days, though at a reduced rate. If you install a hybrid system with battery storage, you will have backup power during grid outages.',
  },
];

const diasporaFaqs: FAQ[] = [
  {
    question: 'Can Lavan review a quotation from another solar company?',
    answer:
      'Yes. We can assess the proposed sizing, specifications, compatibility, warranties, exclusions and expected performance before you make a decision.',
  },
  {
    question: 'Can you supervise a contractor I have already selected?',
    answer:
      'Yes, subject to an agreed scope and access to the site, contractor documents and relevant project information. Inspection points should ideally be agreed before installation begins.',
  },
  {
    question: 'Will you tell me when to release payment?',
    answer:
      'We can verify technical progress against agreed milestones and issue a documented recommendation. You retain contractual and payment authority unless a separate written mandate provides otherwise.',
  },
  {
    question: 'Can Lavan also supply and install the system?',
    answer:
      'Yes. Design and delivery can be offered as a separate engagement. We will state clearly whether Lavan is acting as an independent reviewer, owner’s representative or installation contractor.',
  },
  {
    question: 'How will I receive updates?',
    answer:
      'Reporting may include scheduled online meetings, written progress reports, dated photographs, videos, action registers and commissioning records, depending on the project scope.',
  },
  {
    question:
      'Can you manage solar water heating and heat pumps as well as solar PV?',
    answer:
      'Yes. Lavan works across electrical and thermal energy systems, allowing related requirements to be coordinated during design and construction.',
  },
  {
    question: 'Do you work throughout Kenya?',
    answer:
      'Projects are assessed based on location, scope, access and schedule. Submit the project details and Lavan will confirm availability and any travel requirements.',
  },
  {
    question: 'How much does the service cost?',
    answer:
      'Fees depend on the project stage, location, value, number of inspections and required deliverables. After the initial consultation, you will receive a defined scope and fee proposal before work begins.',
  },
];

function FAQList({
  faqs,
  sectionId,
  openIndex,
  setOpenIndex,
}: {
  faqs: FAQ[];
  sectionId: string;
  openIndex: number | null;
  setOpenIndex: (i: number | null) => void;
}) {
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div
          key={`${sectionId}-${index}`}
          className="bg-light-bg rounded-2xl overflow-hidden border border-gray-200"
        >
          <button
            onClick={() => toggleFaq(index)}
            className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-1"
            aria-expanded={openIndex === index}
            aria-controls={`${sectionId}-faq-${index}`}
          >
            <span className="font-bold text-navy pr-4">{faq.question}</span>
            <span
              className={`text-gold text-2xl transition-transform ${
                openIndex === index ? 'rotate-45' : ''
              }`}
            >
              +
            </span>
          </button>
          {openIndex === index && (
            <div
              id={`${sectionId}-faq-${index}`}
              className="px-6 pb-5 text-gray-600 leading-relaxed"
            >
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function FAQAccordion() {
  const [openGeneral, setOpenGeneral] = useState<number | null>(0);
  const [openDiaspora, setOpenDiaspora] = useState<number | null>(null);

  return (
    <div className="space-y-16">
      {/* Section — General FAQs */}
      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-6 text-center">
          General Solar Questions
        </h2>
        <FAQList
          faqs={generalFaqs}
          sectionId="general"
          openIndex={openGeneral}
          setOpenIndex={setOpenGeneral}
        />
      </div>

      {/* Section — Diaspora / Owner Representation FAQs */}
      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-6 text-center">
          Diaspora &amp; Owner Representation
        </h2>
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          For Kenyans abroad managing a solar project in Kenya. See the full{' '}
          <a
            href="/diaspora-solar-project-management"
            className="text-gold hover:underline font-semibold"
          >
            Diaspora Project Management service
          </a>{' '}
          for more details.
        </p>
        <FAQList
          faqs={diasporaFaqs}
          sectionId="diaspora"
          openIndex={openDiaspora}
          setOpenIndex={setOpenDiaspora}
        />
      </div>
    </div>
  );
}