import Link from 'next/link';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Our Services | Lavan Solar Systems',
  description: 'Explore our core divisions: Energy Engineering, Energy Systems, Thermal Energy, and their specialized solutions.',
};

export default function ServicesPage() {
  return (
    <div className="pt-36 md:pt-40 bg-white">
      <section className="bg-navy py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">Integrated Solar Solutions</h1>
          <p className="text-white/80 text-lg max-w-3xl mx-auto">
            Our three divisions work together to provide comprehensive energy solutions, from consultation to installation and maintenance.
          </p>
        </div>
      </section>

      <section className="py-20 bg-light-bg">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Link href="/services/energy-engineering" className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition border-b-4 border-gold">
              <Image src="/images/projects/kajiado-commercialSolar.webp" alt="Energy Engineering" width={400} height={200} className="rounded-xl mb-6 object-cover h-40 w-full" />
              <h3 className="text-2xl font-extrabold text-navy mb-3">Energy Engineering</h3>
              <p className="text-gray-600 mb-6">Audits, assessments, system design, and consultancy. The intellectual foundation of Lavan.</p>
              <span className="text-gold font-bold">Explore →</span>
            </Link>
            <Link href="/services/energy-systems" className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition border-b-4 border-gold">
              <Image src="/images/projects/laikipia-dairyPlantSolar.webp" alt="Energy Systems" width={400} height={200} className="rounded-xl mb-6 object-cover h-40 w-full" />
              <h3 className="text-2xl font-extrabold text-navy mb-3">Energy Systems</h3>
              <p className="text-gray-600 mb-6">Solar PV, Hybrid, Battery Storage, and Backup Power systems that run your world.</p>
              <span className="text-gold font-bold">Explore →</span>
            </Link>
            <Link href="/services/thermal-energy" className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition border-b-4 border-gold">
              <Image src="/images/projects/kiambu-heatPump.webp" alt="Thermal Energy" width={400} height={200} className="rounded-xl mb-6 object-cover h-40 w-full" />
              <h3 className="text-2xl font-extrabold text-navy mb-3">Thermal Energy</h3>
              <p className="text-gray-600 mb-6">Solar water heating, heat pumps, and commercial hot-water systems for every need.</p>
              <span className="text-gold font-bold">Explore →</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}