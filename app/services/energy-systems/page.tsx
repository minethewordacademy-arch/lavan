import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Energy Systems | Lavan Solar Systems',
  description: 'Solar PV, Hybrid, Grid-tied, Battery Storage, Backup Power, and Solar Pumping systems.',
};

export default function EnergySystemsPage() {
  const systems = [
    { 
      label: 'Solar PV Systems', 
      href: '/services/solar-pv', 
      image: '/images/projects/kajiado-commercialSolar.webp', 
      desc: 'Grid-tie, off-grid, and hybrid PV installations for homes, offices, commercial buildings, institutions, farms, and industrial users seeking cleaner and more predictable power solutions.' 
    },
    { 
      label: 'Hybrid Systems', 
      href: '/services/hybrid-systems', 
      image: '/images/projects/embu-hybridSolar.webp', 
      desc: 'Combined solar, battery, and grid systems that deliver complete energy independence and reduce reliance on unstable grid power.' 
    },
    { 
      label: 'Power Backup', 
      href: '/services/power-backup', 
      image: '/images/projects/kiambu-heatPump.webp', 
      desc: 'Battery banks and inverters that ensure your home or business keeps running seamlessly during blackouts. Basic or Total cover available.' 
    },
    { 
      label: 'Solar Pumping', 
      href: '/services/solar-pumping', 
      image: '/images/projects/isiolo-waterJetting.webp', 
      desc: 'Solar-powered surface and submersible pumps for boreholes, farms, apartments, and community water projects. Water pumping solutions that require no grid or diesel.' 
    },
  ];

  return (
    <div className="pt-36 md:pt-40 bg-white">
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <Image src="/images/projects/kajiado-commercialSolar.webp" alt="Energy Systems" fill className="object-cover" />
        <div className="absolute inset-0 bg-navy/70 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">Energy Systems</h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
              Converting engineering designs into installed energy infrastructure that works reliably for years.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-12 text-center">Systems We Install</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {systems.map((system) => (
            <Link key={system.href} href={system.href} className="group bg-light-bg p-8 rounded-3xl hover:bg-navy transition-all duration-500 hover:shadow-2xl">
              <Image src={system.image} alt={system.label} width={600} height={300} className="rounded-2xl mb-6 object-cover h-48 w-full" />
              <h3 className="text-2xl font-extrabold text-navy group-hover:text-white mb-3">{system.label}</h3>
              <p className="text-gray-600 group-hover:text-white/80 mb-6">{system.desc}</p>
              <span className="text-gold font-bold group-hover:text-gold-light">View Details →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}