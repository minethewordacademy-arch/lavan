import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Energy Audit & Consultancy | Lavan Solar Systems',
  description: 'Comprehensive energy audits, load assessments, and system design.',
};

export default function EnergyAuditPage() {
  return (
    <div className="pt-36 md:pt-40 bg-white">
      <section className="relative h-100 overflow-hidden">
        <Image src="/images/projects/katani-solarWater.webp" alt="Energy Audit" fill className="object-cover" />
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
                <span className="text-gold font-bold text-xl">✔</span>
                <span className="text-navy font-medium">{service}</span>
              </div>
            ))}
          </div>
          <Link href="/quote?service=energy-audit" className="block text-center bg-navy text-white py-5 rounded-full font-bold hover:bg-gold hover:text-navy transition max-w-sm mx-auto mt-12 text-lg">Book an Audit</Link>
        </div>
      </section>
    </div>
  );
}