import type { Metadata } from 'next';
import WatermarkImage from '@/components/WatermarkImage';
import ThermalAccordion from '@/components/ThermalAccordion';

export const metadata: Metadata = {
  title: 'Thermal Energy & Water Heating | Lavan Solar Systems',
  description:
    'Solar Water Heaters, Heat Pumps, and PV Water Heating systems. Efficient, durable, and eco-friendly hot water solutions.',
};

export default function ThermalEnergyPage() {
  return (
    <div className="pt-36 md:pt-40 bg-white">
      {/* Hero Section */}
      <section className="relative h-100 overflow-hidden">
        <WatermarkImage
          src="/images/services/thermal-energy/solarwaterheater.jpg"
          alt="Thermal Energy"
          fill
          watermarkSize={100}
          watermarkStyle="seal"
        />
        <div className="absolute inset-0 bg-navy/70 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
              Thermal Energy &amp; Water Heating
            </h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Harnessing the power of the sun for reliable, sustainable hot water solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">
            Our Thermal Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Solar Water Heaters */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden mb-4">
                <WatermarkImage
                  src="/images/services/thermal-energy/water-heater.jpg"
                  alt="Solar Water Heaters"
                  fill
                  watermarkSize={50}
                  watermarkPosition="bottom-right"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-bold text-navy">Solar Water Heaters</h3>
            </div>

            {/* Heat Pumps */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden mb-4">
                <WatermarkImage
                  src="/images/services/thermal-energy/heat-pump.jpg"
                  alt="Heat Pumps"
                  fill
                  watermarkSize={50}
                  watermarkPosition="bottom-right"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-bold text-navy">Heat Pumps</h3>
            </div>

            {/* Hot Water Tanks */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition">
              <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden mb-4">
                <WatermarkImage
                  src="/images/oursolarproducts/hotwatertank.jpg"
                  alt="Hot Water Tanks"
                  fill
                  watermarkSize={50}
                  watermarkPosition="bottom-right"
                  objectFit="cover"
                />
              </div>
              <h3 className="text-xl font-bold text-navy">Hot Water Tanks</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Accordion (Client Component) */}
      <ThermalAccordion />
    </div>
  );
}