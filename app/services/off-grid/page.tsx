import type { Metadata } from 'next';
import Link from 'next/link';
import WatermarkImage from '@/components/WatermarkImage';

export const metadata: Metadata = {
  title: 'Off-Grid Solutions | Lavan Solar Systems',
  description: 'Complete energy independence with solar panels and battery storage. Perfect for remote locations.',
};

export default function OffGridPage() {
  return (
    <div className="pt-36 md:pt-40 bg-white">
      <section className="relative h-100 overflow-hidden">
        <WatermarkImage 
          src="/images/services/solar-pv/solarpanel1.jpg" 
          alt="Off-Grid Solutions" 
          fill 
          watermarkSize={100} 
          watermarkStyle="seal" 
        />
        <div className="absolute inset-0 bg-navy/70 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Off-Grid Solutions</h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">Break free from the grid with solar and battery storage.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-8">How It Works</h2>
          <p className="text-gray-700 text-lg mb-6">
            For remote locations or those seeking complete energy independence, our off-grid solution provides a sustainable alternative to traditional power sources. By relying solely on solar energy and battery storage, you can break free from the constraints of the grid and enjoy electricity wherever you go.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Our off-grid systems are designed to meet your specific energy needs. Whether you need power for a cabin, farm, or off-grid home, we tailor the system to your exact requirements.
          </p>
          <Link href="/quote?service=off-grid" className="block text-center bg-navy text-white py-5 rounded-full font-bold hover:bg-gold hover:text-navy transition max-w-sm mx-auto text-lg">Get an Off-Grid Quote</Link>
        </div>
      </section>

      <section className="py-20 bg-light-bg">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="relative h-40 w-full rounded-xl overflow-hidden mb-4">
                <WatermarkImage src="/images/oursolarproducts/solarpanel.jpg" alt="Solar Panels" fill watermarkSize={50} watermarkPosition="bottom-right" />
              </div>
              <h3 className="text-xl font-bold text-navy">Solar Panels</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="relative h-40 w-full rounded-xl overflow-hidden mb-4">
                <WatermarkImage src="/images/oursolarproducts/solarbatteries.jpg" alt="Solar Batteries" fill watermarkSize={50} watermarkPosition="bottom-right" />
              </div>
              <h3 className="text-xl font-bold text-navy">Solar Batteries</h3>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="relative h-40 w-full rounded-xl overflow-hidden mb-4">
                <WatermarkImage src="/images/oursolarproducts/hybridinverters.jpg" alt="Hybrid Inverters" fill watermarkSize={50} watermarkPosition="bottom-right" />
              </div>
              <h3 className="text-xl font-bold text-navy">Hybrid Inverters</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}