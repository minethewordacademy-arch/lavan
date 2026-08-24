"use client";
import { useState } from 'react';

export default function FAQPage() {
  // FIX: Proper state handling
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How much does a solar system cost in Kenya?",
      answer: "The cost depends on your energy needs, roof space, and system type (PV, Water Heating, or Hybrid). Most residential systems start from around KSh 150,000, and commercial systems vary widely. We provide free consultations and tailored quotes."
    },
    {
      question: "Do you offer installation and maintenance services?",
      answer: "Yes, Lavan Solar Systems provides end-to-end services including site assessment, design, professional installation, testing, commissioning, and ongoing maintenance and support."
    },
    {
      question: "How long does a solar installation take?",
      answer: "A typical residential installation takes 1-3 days depending on the system size and complexity. Commercial installations may take longer based on the scope of work."
    },
    {
      question: "Will solar panels work during cloudy days or power outages?",
      answer: "Solar panels still generate electricity on cloudy days, though at a reduced rate. If you install a hybrid system with battery storage, you will have backup power during grid outages."
    }
  ];

  const toggleFaq = (index: number) => {
    // FIX: Proper assignment or function call
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-gold font-semibold uppercase text-sm">Help Center</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy mt-2">Frequently Asked Questions</h1>
          <p className="text-gray-600 mt-4">Find answers to common questions about solar installations, costs, and our services.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-light-bg rounded-2xl overflow-hidden border border-gray-200">
              <button 
                onClick={() => toggleFaq(index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center hover:bg-gray-50 transition"
              >
                <span className="font-bold text-navy">{faq.question}</span>
                <span className={`text-gold text-2xl transition-transform ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}