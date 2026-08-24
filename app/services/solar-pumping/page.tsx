import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Solar Water Pumping | Lavan Solar Systems',
  description: 'Reliable solar water pumping solutions for farms, boreholes, and remote areas.',
};

export default function SolarPumpingPage() {
  return (
    <div className="pt-36 md:pt-40 bg-white">
      <section className="relative h-[400px] overflow-hidden">
        <Image src="/images/projects/isiolo-waterJetting.webp" alt="Solar Pumping" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy/70 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Solar Water Pumping</h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">Reliable, high-performance pumps for domestic, agricultural, and commercial needs.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">Our Pumping Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-light-bg p-8 rounded-3xl shadow-lg border-b-4 border-gold">
              <h3 className="text-2xl font-bold text-navy mb-4">Surface Pumps</h3>
              <p className="text-gray-600 mb-4">Ideal for shallow wells, rivers, and storage tanks. Perfect for homes, gardens, and small-scale irrigation.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>✅ Model: QB60DC/24</li>
                <li>✅ Power: 0.5 HP (DC motor)</li>
                <li>✅ Flow Rate: 2.1 m³/hr</li>
                <li>✅ Head: 35 meters</li>
                <li>✅ Suction: 8 meters</li>
                <li>✅ 12-Month Warranty</li>
              </ul>
              <Link href="/quote?service=solar-surface-pump" className="block text-center bg-navy text-white py-3 rounded-full font-bold hover:bg-gold hover:text-navy">Request Quote</Link>
            </div>
            <div className="bg-light-bg p-8 rounded-3xl shadow-lg border-b-4 border-gold">
              <h3 className="text-2xl font-bold text-navy mb-4">Submersible Pumps</h3>
              <p className="text-gray-600 mb-4">Designed for deep boreholes and wells. Powerful, efficient, and built for long-term reliability.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>✅ Up to 250m Head</li>
                <li>✅ Flow up to 20,000L/day</li>
                <li>✅ 0.3kW – 5.5kW (DC or AC)</li>
                <li>✅ SS304 Stainless Steel Body</li>
                <li>✅ MPPT Controller Included</li>
                <li>✅ Custom Sizing Available</li>
              </ul>
              <Link href="/quote?service=solar-submersible-pump" className="block text-center bg-navy text-white py-3 rounded-full font-bold hover:bg-gold hover:text-navy">Request Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}