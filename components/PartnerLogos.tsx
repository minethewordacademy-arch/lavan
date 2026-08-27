"use client";
import Image from 'next/image';

const partners = [
  'deye',
  'srne',
  'solis',
  'goodwe',
  'jinko',
  'ja',
  'chloride-exide',
  'suntech',
  'lithium-valley',
  'suntree',
  'davis-shirtliff',
  'seven-ss',
  'aquasun',
];

export default function PartnerLogos() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4 mb-10 text-center">
        <h2 className="text-3xl font-extrabold text-navy">
          We&apos;ve partners - <span className="text-gold">leading global brands</span>
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-16">
          {/* Duplicate list for seamless loop */}
          {[...partners, ...partners].map((partner, idx) => (
            <div
              key={idx}
              className="relative h-24 w-40 object-contain flex-shrink-0"
            >
              <Image
                src={`/images/partners/${partner}.jpg`}
                alt={partner}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 20vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}