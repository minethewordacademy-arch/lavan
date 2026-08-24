import type { Metadata } from 'next';
import Link from 'next/link';
import WatermarkImage from '@/components/WatermarkImage';

export const metadata: Metadata = {
  title: 'Borehole Solarization | Lavan Solar Systems',
  description: 'We focus on the solution, not the product. Solarize your existing borehole system to run on solar energy over the grid, saving costs and ensuring reliability.',
};

export default function SolarPumpingPage() {
  return (
    <div className="pt-36 md:pt-40 bg-white">
      {/* Hero - Using the correct borehole image */}
      <section className="relative h-100 overflow-hidden">
        <WatermarkImage src="/images/projects/kiambu-borehole.webp" alt="Borehole Solarization" fill watermarkSize={100} watermarkPosition="bottom-right" />
        <div className="absolute inset-0 bg-navy/70 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Borehole Solarization Solutions</h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              We focus on the solution, not the product. Solarize your existing borehole and run it on solar energy over the grid, reducing costs and ensuring uninterrupted water supply.
            </p>
          </div>
        </div>
      </section>

      {/* Core Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-8">Why Solarize Your Borehole?</h2>
          <p className="text-gray-700 text-lg mb-6">
            Instead of buying a brand new pump system, Lavan Solar Systems focuses on converting your existing, grid-powered borehole to run seamlessly on solar energy. This dramatically reduces your monthly electricity bills and protects your water supply from power outages.
          </p>
          <p className="text-gray-700 text-lg mb-10">
            With our smart controllers, your system intelligently switches between solar during the day and the grid only when necessary (usually at night or on extremely cloudy days), giving you the best of both worlds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-light-bg p-8 rounded-2xl shadow-lg border-b-4 border-gold">
              <div className="text-4xl mb-4 text-gold">💰</div>
              <h3 className="text-xl font-bold text-navy mb-4">Lower Energy Costs</h3>
              <p className="text-gray-600">Solar energy drastically reduces or eliminates the cost of running your borehole on the national grid.</p>
            </div>
            <div className="bg-light-bg p-8 rounded-2xl shadow-lg border-b-4 border-gold">
              <div className="text-4xl mb-4 text-gold">🛡️</div>
              <h3 className="text-xl font-bold text-navy mb-4">Grid Independence</h3>
              <p className="text-gray-600">Your borehole keeps running even during blackouts or load-shedding, ensuring water is always available.</p>
            </div>
            <div className="bg-light-bg p-8 rounded-2xl shadow-lg border-b-4 border-gold">
              <div className="text-4xl mb-4 text-gold">🔧</div>
              <h3 className="text-xl font-bold text-navy mb-4">Use Your Existing Pump</h3>
              <p className="text-gray-600">Save money by reusing your existing borehole pump and simply adding solar panels, brackets, and a smart controller.</p>
            </div>
          </div>

          <Link href="/quote?service=borehole-solarization" className="block text-center bg-navy text-white py-5 rounded-full font-bold hover:bg-gold hover:text-navy transition max-w-sm mx-auto mt-12 text-lg">
            Request a Borehole Site Survey
          </Link>
        </div>
      </section>
    </div>
  );
}