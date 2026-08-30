import type { Metadata } from 'next';
import Link from 'next/link';
import WatermarkImage from '@/components/WatermarkImage';

export const metadata: Metadata = {
  title: 'Power Backup Systems | Lavan Solar Systems',
  description: 'Say goodbye to blackouts! Battery backup systems for homes and businesses.',
};

export default function PowerBackupPage() {
  return (
    <div className="pt-36 md:pt-40 bg-white">
      <section className="relative h-100 overflow-hidden">
        <WatermarkImage 
          src="/images/oursolarproducts/batterystorage.jpg" 
          alt="Power Backup" 
          fill 
          watermarkSize={100} 
          watermarkStyle="seal" 
        />
        <div className="absolute inset-0 bg-navy/70 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Power Backup Systems</h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">Blackout mood… looks familiar? Swap that for uninterrupted peace of mind.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-8">How It Works</h2>
          <p className="text-gray-700 text-lg mb-6">
            Hours of work lost, movie night cancelled, candle hunt through the house and endless hours of waiting for the power to come back! There is nothing more frustrating than working an entire day to come home to a house immersed in darkness.
          </p>
          <p className="text-gray-700 text-lg mb-10">
            With a power backup system! A battery bank is charged when power is available and supplies power during blackouts! You can opt for a basic cover or a total cover.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-light-bg p-8 rounded-3xl border-b-4 border-gold">
              <h3 className="text-2xl font-bold text-navy mb-4">Basic Cover</h3>
              <p className="text-gray-600 mb-4">Power for essential appliances: Lighting, TV, Wi-Fi, Computers, and Fridge. Perfect for keeping your home functioning during short outages.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Essential appliances only</li>
                <li>• 2-4 hours backup time</li>
                <li>• Perfect for apartments & small homes</li>
              </ul>
              <Link href="/quote?service=power-backup-basic" className="block text-center bg-navy text-white py-3 rounded-full font-bold hover:bg-gold hover:text-navy transition mt-6">Get Basic Quote</Link>
            </div>
            <div className="bg-light-bg p-8 rounded-3xl border-b-4 border-gold">
              <h3 className="text-2xl font-bold text-navy mb-4">Total Cover</h3>
              <p className="text-gray-600 mb-4">Everything is backed up. Life goes on uninterrupted: Water pumps, kitchen appliances, and all electronics powered seamlessly.</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• All appliances fully powered</li>
                <li>• 8+ hours backup time</li>
                <li>• Perfect for homes & businesses</li>
              </ul>
              <Link href="/quote?service=power-backup-total" className="block text-center bg-navy text-white py-3 rounded-full font-bold hover:bg-gold hover:text-navy transition mt-6">Get Total Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-light-bg">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">Our Backup Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6">
                <WatermarkImage src="/images/oursolarproducts/batterystorage.jpg" alt="Solar Batteries" fill watermarkSize={60} watermarkPosition="bottom-right" />
              </div>
              <h3 className="text-2xl font-extrabold text-navy mb-3">Battery Storage</h3>
              <p className="text-gray-600">Lithium and other energy-storage technologies for backup power and solar energy storage.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6">
                <WatermarkImage src="/images/oursolarproducts/hybridinverters.jpg" alt="Hybrid Inverters" fill watermarkSize={60} watermarkPosition="bottom-right" />
              </div>
              <h3 className="text-2xl font-extrabold text-navy mb-3">Hybrid Inverters</h3>
              <p className="text-gray-600">Intelligent inverters combining solar, battery, and grid power for flexible energy management.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}