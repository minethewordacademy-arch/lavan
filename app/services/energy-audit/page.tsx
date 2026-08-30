import type { Metadata } from 'next';
import Link from 'next/link';
import WatermarkImage from '@/components/WatermarkImage';

export const metadata: Metadata = {
  title: 'Energy Audit & Consultancy | Lavan Solar Systems',
  description: 'Comprehensive energy audits, load assessments, and system design.',
};

export default function EnergyAuditPage() {
  return (
    <div className="pt-36 md:pt-40 bg-white">
      <section className="relative h-100 overflow-hidden">
        <WatermarkImage 
          src="/images/projects/katani-solarWater.webp" 
          alt="Energy Audit" 
          fill 
          watermarkSize={100} 
          watermarkStyle="seal" 
        />
        <div className="absolute inset-0 bg-navy/70 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Energy Audit & Consultancy</h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">We evaluate your actual energy usage and design the perfect system – no arbitrary packages.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">What Our Audit Includes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Energy audits & consultancy',
              'Load assessments & profiling',
              'Energy feasibility studies',
              'Solar PV system design (Grid-tie, Off-grid, Hybrid)',
              'Battery-storage sizing & configuration',
              'Hybrid-system design',
              'Solar water heating system design',
              'Solar pumping system design',
              'Power backup system design',
              'System performance assessment',
              'Independent technical reviews',
              'Troubleshooting of poorly performing systems',
              'Net metering analysis',
              'Carbon footprint & sustainability consulting',
              'Building energy efficiency analysis'
            ].map((service) => (
              <div key={service} className="bg-light-bg p-5 rounded-xl flex items-center gap-3">
                {/* Replaced emoji with SVG checkmark in gold circle */}
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-navy font-medium">{service}</span>
              </div>
            ))}
          </div>
          <Link href="/quote?service=energy-audit" className="block text-center bg-navy text-white py-5 rounded-full font-bold hover:bg-gold hover:text-navy transition max-w-sm mx-auto mt-12 text-lg">Book an Audit</Link>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-light-bg">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">Products We Recommend</h2>
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
    </div>
  );
}