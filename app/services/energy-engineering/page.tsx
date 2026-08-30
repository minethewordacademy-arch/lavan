import type { Metadata } from 'next';
import Link from 'next/link';
import WatermarkImage from '@/components/WatermarkImage';

export const metadata: Metadata = {
  title: 'Energy Engineering | Lavan Solar Systems',
  description: 'Energy audits, load assessments, feasibility studies, and system design for Solar PV, Pumping, Water Heating, and Backup Power.',
};

export default function EnergyEngineeringPage() {
  return (
    <div className="pt-36 md:pt-40 bg-white">
      <div className="relative h-100 md:h-125 overflow-hidden">
        <WatermarkImage 
          src="/images/services/energy-engineering/solarpanel-engineering.jpg" 
          alt="Energy Engineering" 
          fill 
          watermarkSize={100} 
          watermarkStyle="seal" 
        />
        <div className="absolute inset-0 bg-navy/70 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">Energy Engineering</h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
              The intellectual foundation of Lavan. We ensure equipment recommendations are based on actual requirements, not arbitrary package sizes.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-8 text-center">What We Do</h2>
          <p className="text-gray-700 text-lg mb-12 text-center max-w-3xl mx-auto">
            Lavan Solar Systems Limited provides end-to-end solar solutions designed to reduce electricity costs, improve energy reliability, and support long-term sustainability goals. Our visible service focus includes solar PV installation and commercial solar water heating, supported by a brand message centered on honest service and dependable energy performance.
          </p>
        </div>
      </section>

      <section className="py-20 bg-light-bg">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">Our Engineering Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
               { title: 'Independent Technical Reviews', desc: 'Third-party technical audits and reviews of planned or installed systems for banks, developers, and institutions.' },
              { title: 'Energy Audits', desc: 'Comprehensive assessment of your current energy consumption patterns, identifying inefficiencies and opportunities for savings.' },
              { title: 'Load Assessments & Profiling', desc: 'Detailed analysis of your electrical loads to understand peak demand, usage patterns, and system sizing requirements.' },
              { title: 'Energy Feasibility Studies', desc: 'Technical and financial feasibility studies to determine the viability and ROI of solar investments.' },
              { title: 'Solar PV System Design', desc: 'Grid-tie, off-grid, and hybrid PV system design optimized for your specific location, roof space, and energy needs.' },
              { title: 'Battery Storage Sizing', desc: 'Precise sizing and configuration of battery storage systems to ensure backup power and energy independence.' },
              { title: 'Hybrid System Design', desc: 'Integrated solar, battery, and grid systems for maximum reliability and cost savings.' },
              { title: 'Solar Water Heating Design', desc: 'Pressurized, non-pressurized, and heat pump system design for residential and commercial applications.' },
              { title: 'Solar Pumping System Design', desc: 'Surface and submersible pump system design for boreholes, farms, and community water projects.' },
              { title: 'Power Backup System Design', desc: 'Critical backup power systems for homes and businesses, ensuring zero downtime during outages.' },
              { title: 'Performance Assessment', desc: 'Monitoring and evaluation of existing systems to ensure they operate at peak efficiency.' },
              { title: 'Troubleshooting', desc: 'Diagnosis and repair of poorly performing solar systems, restoring your investment quickly.' },
            ].map((service) => (
              <div key={service.title} className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-gold hover:shadow-2xl transition">
                {/* Replaced emoji with SVG checkmark in gold circle */}
                <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">Products We Design With</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="relative h-40 w-full rounded-xl overflow-hidden mb-4">
                <WatermarkImage src="/images/oursolarproducts/solarpanel.jpg" alt="Solar Panels" fill watermarkSize={50} watermarkPosition="bottom-right" />
              </div>
              <h3 className="text-xl font-bold text-navy">Solar Panels</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="relative h-40 w-full rounded-xl overflow-hidden mb-4">
                <WatermarkImage src="/images/oursolarproducts/hybridinverters.jpg" alt="Hybrid Inverters" fill watermarkSize={50} watermarkPosition="bottom-right" />
              </div>
              <h3 className="text-xl font-bold text-navy">Hybrid Inverters</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="relative h-40 w-full rounded-xl overflow-hidden mb-4">
                <WatermarkImage src="/images/oursolarproducts/solarbatteries.jpg" alt="Solar Batteries" fill watermarkSize={50} watermarkPosition="bottom-right" />
              </div>
              <h3 className="text-xl font-bold text-navy">Solar Batteries</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-navy">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Need Expert Advice Before Buying Solar?</h2>
          <p className="text-white/80 mb-8">Let our engineers design the perfect system for you. We&apos;ll ensure you invest in the right solution for current and future needs.</p>
          <Link href="/quote?service=energy-engineering" className="bg-gold text-navy px-10 py-4 rounded-full font-bold hover:bg-white transition text-lg">
            Get an Engineering Quote
          </Link>
        </div>
      </section>
    </div>
  );
}