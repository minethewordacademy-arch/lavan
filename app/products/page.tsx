import type { Metadata } from 'next';
import WatermarkImage from '@/components/WatermarkImage';
import ProductGrid from '@/components/ProductGrid';

export const metadata: Metadata = {
  title: 'Our Solar Products | Lavan Solar Systems',
  description: 'Explore our wide range of premium solar products including solar panels, inverters, batteries, heat pumps, water heaters, solar pumps, and more.',
};

export default function ProductsPage() {
  return (
    <div className="pt-36 md:pt-40 bg-white">
      {/* Hero Section */}
      <section className="relative h-100 overflow-hidden">
        <WatermarkImage
          src="/images/oursolarproducts/solarpanel.jpg"
          alt="Our Solar Products"
          fill
          watermarkSize={120}
          watermarkStyle="seal"
        />
        <div className="absolute inset-0 bg-navy/70 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Our Solar Products</h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              We supply a wide range of high-quality solar and energy products from reputable manufacturers for residential, commercial, and industrial applications.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid (Client Component for interactivity) */}
      <ProductGrid />
    </div>
  );
}