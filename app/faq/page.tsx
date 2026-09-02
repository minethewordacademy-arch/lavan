import type { Metadata } from 'next';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'FAQ | Lavan Solar Systems',
  description: 'Find answers to common questions about solar installations, costs, maintenance, and Lavan Solar Systems.',
  keywords: [
    'solar FAQ',
    'solar panels Kenya',
    'solar installation costs',
    'solar maintenance Kenya',
  ],
  alternates: {
    canonical: 'https://lavansolar.co.ke/faq',
  },
};

export default function FAQPage() {
  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-gold font-semibold uppercase text-sm">Help Center</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy mt-2">Frequently Asked Questions</h1>
          <p className="text-gray-600 mt-4">Find answers to common questions about solar installations, costs, and our services.</p>
        </div>
        <FAQAccordion />
      </div>
    </div>
  );
}