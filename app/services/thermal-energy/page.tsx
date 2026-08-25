import type { Metadata } from 'next';
import WatermarkImage from '@/components/WatermarkImage';
import ThermalAccordion from '@/components/ThermalAccordion';

export const metadata: Metadata = {
  title: 'Thermal Energy & Water Heating | Lavan Solar Systems',
  description: 'Solar Water Heaters, Heat Pumps, and PV Water Heating systems. Efficient, durable, and eco-friendly hot water solutions.',
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
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Thermal Energy & Water Heating</h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">Harnessing the power of the sun for reliable, sustainable hot water solutions.</p>
          </div>
        </div>
      </section>

      {/* Interactive Accordion (Client Component) */}
      <ThermalAccordion />
    </div>
  );
}