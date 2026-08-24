import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solar Water Heating | Thermal Energy - Lavan Solar Systems',
  description: 'Explore Lavan Solar Systems\' range of solar water heating solutions.',
};

export default function ThermalEnergyPage() {
  return (
    <div className="pt-36 md:pt-40 bg-white">
      <section className="bg-navy py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Solar Water Heating</h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">Many different types of solar water heating systems, always supplied with the best solar panels in Kenya.</p>
        </div>
      </section>

      <section className="py-20 bg-light-bg">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl font-extrabold text-navy mb-8">How It Works</h2>
          <p className="text-gray-700 mb-6">Water is heated by the sun while it goes through a solar collector and is stored in a tank. The process repeats to achieve higher temperatures progressively.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-navy mb-12 text-center">Our Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-gold">
              <h3 className="text-2xl font-bold text-navy mb-4">Pressurized</h3>
              <p className="text-gray-600 mb-4">High-pressure, perfect for multi-storey buildings.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>✅ Evacuated Tubes</li>
                <li>✅ SS304 Inner Tank</li>
                <li>✅ Price from KSh 120,000</li>
              </ul>
              <Link href="/quote?service=pressurized-solar-water-heater" className="block text-center bg-navy text-white py-3 rounded-full font-bold hover:bg-gold hover:text-navy">Request Quote</Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-gold">
              <h3 className="text-2xl font-bold text-navy mb-4">Non-Pressurized</h3>
              <p className="text-gray-600 mb-4">Budget-friendly, ideal for gravity-fed systems.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>✅ Thermosiphon Flow</li>
                <li>✅ 50mm PUF Insulation</li>
                <li>✅ Price from KSh 65,000</li>
              </ul>
              <Link href="/quote?service=non-pressurized-solar-water-heater" className="block text-center bg-navy text-white py-3 rounded-full font-bold hover:bg-gold hover:text-navy">Request Quote</Link>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border-b-4 border-gold">
              <h3 className="text-2xl font-bold text-navy mb-4">Heat Pump</h3>
              <p className="text-gray-600 mb-4">Smart energy, endless hot water with 75% savings.</p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>✅ 2.2kW Capacity</li>
                <li>✅ COP 4.15</li>
                <li>✅ Price from KSh 215,000</li>
              </ul>
              <Link href="/quote?service=heat-pump-water-heater" className="block text-center bg-navy text-white py-3 rounded-full font-bold hover:bg-gold hover:text-navy">Request Quote</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}