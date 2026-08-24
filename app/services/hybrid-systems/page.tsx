import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Hybrid Solar Systems | Lavan Solar Systems',
  description: 'Combine solar PV, battery storage, and grid connection for the ultimate energy independence.',
};

export default function HybridSystemsPage() {
  return (
    <div className="pt-36 md:pt-40 bg-white">
      <section className="relative h-[400px] overflow-hidden">
        <Image src="/images/projects/embu-hybridSolar.webp" alt="Hybrid Systems" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy/70 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Hybrid Solar Systems</h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">The ultimate energy solution: solar, battery, and grid working together seamlessly.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-8">Why Go Hybrid?</h2>
          <p className="text-gray-700 text-lg mb-6">
            Hybrid systems give you the best of both worlds: power your home during the day with solar, store excess energy in batteries, and rely on the grid as a backup when needed. This means you are never left in the dark.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-gold">
              <div className="text-4xl mb-4 text-gold">☀️</div>
              <h3 className="text-xl font-bold text-navy mb-4">Daytime</h3>
              <p className="text-gray-600">Solar panels directly power your home and charge batteries.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-gold">
              <div className="text-4xl mb-4 text-gold">🔋</div>
              <h3 className="text-xl font-bold text-navy mb-4">Night</h3>
              <p className="text-gray-600">Batteries supply power seamlessly – no interruptions.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border-b-4 border-gold">
              <div className="text-4xl mb-4 text-gold">⚡</div>
              <h3 className="text-xl font-bold text-navy mb-4">Grid Backup</h3>
              <p className="text-gray-600">If batteries run low, the grid automatically takes over.</p>
            </div>
          </div>
          <Link href="/quote?service=hybrid-solar-system" className="block text-center bg-navy text-white py-5 rounded-full font-bold hover:bg-gold hover:text-navy transition max-w-sm mx-auto mt-12 text-lg">Get a Hybrid Quote</Link>
        </div>
      </section>
    </div>
  );
}