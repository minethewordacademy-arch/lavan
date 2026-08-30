import type { Metadata } from 'next';
import Link from 'next/link';
import WatermarkImage from '@/components/WatermarkImage';

export const metadata: Metadata = {
  title: 'Solar PV Systems | Lavan Solar Systems',
  description: 'Harness the power of the sun with Lavan Solar Systems. Reliable, affordable Solar PV installations for homes and businesses in Kenya, including PV Water Heating.',
};

export default function SolarPVPage() {
  return (
    <div className="pt-36 md:pt-40 bg-white">
      <section className="relative h-100 overflow-hidden">
        <WatermarkImage 
          src="/images/services/solar-pv/solarpanel-rooftop.jpg" 
          alt="Solar PV" 
          fill 
          watermarkSize={100} 
          watermarkStyle="seal" 
        />
        <div className="absolute inset-0 bg-navy/70 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Solar Power in Kenya</h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">Solar power is not only for the remote areas. It makes perfect sense when you live in a country like Kenya.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-8">A Smart Investment</h2>
          <p className="text-gray-700 text-lg mb-6">
            We are glad to assist all those visionary architects and home owners that believe in sustainable building and land development, in a smarter and kinder future where we&apos;ll take better care of our planet and will learn to work with the natural resources that we are given.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            We are calling upon all those farsighted individuals and corporates who believe in sound investments and business plans.
          </p>
          <p className="text-gray-700 mb-8">
            Let us help you make your dreams of independence from unreliable and expensive power supplies reality.
          </p>
          <Link href="/quote?service=solar-pv" className="block text-center bg-navy text-white py-5 rounded-full font-bold hover:bg-gold hover:text-navy transition max-w-sm mx-auto text-lg">Get a Quote for Solar PV</Link>
        </div>
      </section>

      <section className="py-20 bg-light-bg">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">Our Solar PV Products</h2>
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
                <WatermarkImage src="/images/oursolarproducts/gridtieinverters.jpg" alt="Grid-Tie Inverters" fill watermarkSize={50} watermarkPosition="bottom-right" />
              </div>
              <h3 className="text-xl font-bold text-navy">Grid-Tie Inverters</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}