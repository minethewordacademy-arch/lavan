"use client";
import { useState } from 'react';
import Link from 'next/link';
import WatermarkImage from '@/components/WatermarkImage';

// Product data – update the image paths to match your files in public/images/oursolarproducts/
// Each product has an array of images for the gallery
const products = [
  {
    title: 'Solar Panels',
    description: 'High-efficiency monocrystalline and bifacial solar panels for residential, commercial, and industrial installations.',
    images: ['/images/oursolarproducts/solarpanel.jpg', '/images/oursolarproducts/solarpanel-2.jpg', '/images/oursolarproducts/solarpanel-3.jpg'],
    quoteService: 'solar-pv',
  },
  {
    title: 'Hybrid Inverters',
    description: 'Intelligent inverters combining solar, battery storage, and grid power for flexible energy management and backup.',
    images: ['/images/oursolarproducts/hybridinverters.jpg', '/images/oursolarproducts/hybridinverters-2.jpg'],
    quoteService: 'hybrid-solar-system',
  },
  {
    title: 'Grid-Tie Inverters',
    description: 'Efficient PV inverters designed to connect solar generation to the electrical grid and reduce electricity consumption.',
    images: ['/images/oursolarproducts/gridtieinverters.jpg', '/images/oursolarproducts/gridtieinverters-2.jpg'],
    quoteService: 'grid-tie',
  },
  {
    title: 'Solar Batteries',
    description: 'Lithium and other energy-storage technologies for backup power and solar energy storage.',
    images: ['/images/oursolarproducts/solarbatteries.jpg', '/images/oursolarproducts/solarbatteries-2.jpg'],
    quoteService: 'power-backup',
  },
  {
    title: 'Heat Pumps',
    description: 'Energy-efficient hot-water solutions suitable for homes, hotels, apartments, institutions, and commercial facilities.',
    images: ['/images/oursolarproducts/heatpumps.jpg', '/images/oursolarproducts/heatpumps-2.jpg'],
    quoteService: 'heat-pump-water-heater',
  },
  {
    title: 'Solar Water Heaters',
    description: 'Solar thermal systems designed to reduce electricity consumption for hot-water production.',
    images: ['/images/oursolarproducts/solarwaterheaters.jpg', '/images/oursolarproducts/solarwaterheaters-2.jpg'],
    quoteService: 'solar-water-heating',
  },
  {
    title: 'Solar Pumps',
    description: 'Solar-powered pumping systems for boreholes, irrigation, livestock watering, and water supply.',
    images: ['/images/oursolarproducts/solarpumps.jpg', '/images/oursolarproducts/solarpumps-2.jpg'],
    quoteService: 'borehole-solarization',
  },
  {
    title: 'Solar Accessories',
    description: 'Mounting structures, cables, breakers, surge protection, connectors, and other components required for professional solar installations.',
    images: ['/images/oursolarproducts/solaraccessories.jpg'],
    quoteService: 'energy-engineering',
  },
  {
    title: 'BSS and C and I systems',
    description: 'We provide large storage systems for industrial and commercial use. Ideal for apartments, hotels, etc.',
    images: ['/images/oursolarproducts/bss.jpg'],
    quoteService: 'power-backup',
  },
];

// Reusable Product Card component with image gallery
function ProductCard({ product }: { product: typeof products[0] }) {
  const [activeImage, setActiveImage] = useState(product.images[0]);

  return (
    <div className="group bg-light-bg rounded-3xl p-6 hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-gold/30">
      {/* Main Image with Watermark */}
      <div className="relative w-full h-64 rounded-2xl overflow-hidden mb-6">
        <WatermarkImage
          src={activeImage}
          alt={product.title}
          fill
          watermarkSize={80}
          watermarkStyle="seal"
          className="group-hover:scale-105 transition duration-500"
        />
      </div>

      <h3 className="text-2xl font-extrabold text-navy mb-2">{product.title}</h3>
      <p className="text-gray-600 mb-4">{product.description}</p>

      {/* Thumbnails (if multiple images) */}
      {product.images.length > 1 && (
        <div className="flex gap-2 mb-4">
          {product.images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(img)}
              className={`relative w-16 h-12 rounded-md overflow-hidden border-2 transition ${
                activeImage === img ? 'border-gold' : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <WatermarkImage
                src={img}
                alt={`${product.title} thumbnail ${idx + 1}`}
                fill
                watermarkSize={20}
                watermarkPosition="bottom-right"
              />
            </button>
          ))}
        </div>
      )}

      <Link
        href={`/quote?service=${product.quoteService}`}
        className="inline-block bg-navy text-white px-6 py-3 rounded-full font-bold hover:bg-gold hover:text-navy transition"
      >
        Get Quote
      </Link>
    </div>
  );
}

export default function ProductGrid() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <span className="text-gold font-semibold uppercase text-sm">Our Products</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-2">Premium Equipment for Every Need</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We source only the highest quality products to ensure your solar system performs at its best for years to come.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}
      </div>
    </div>
  );
}