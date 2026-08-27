import type { Metadata } from 'next';
import Link from 'next/link';
import WatermarkImage from '@/components/WatermarkImage';

export const metadata: Metadata = {
  title: 'Solar PV Systems | Lavan Solar Systems',
  description: 'Grid-Tie, Off-Grid, Hybrid, Power Backup, and Borehole-Solarization solutions.',
};

export default function EnergySystemsPage() {
  const systems = [
    { 
      label: 'Grid-Tie Solutions', 
      href: '/services/grid-tie', 
      image: '/images/services/solar-pv/solarpanel-rooftop.jpg', 
      desc: 'Generate electricity while maintaining connection to the grid. Draw from the grid at night or during low solar production, without the need for storage.' 
    },
    { 
      label: 'Off-Grid Solutions', 
      href: '/services/off-grid', 
      image: '/images/services/solar-pv/solarpanel1.jpg', 
      desc: 'Complete energy independence with solar and battery storage. Perfect for remote locations or those seeking to break free from the grid.' 
    },
    { 
      label: 'Hybrid Systems', 
      href: '/services/hybrid-systems', 
      image: '/images/services/solar-pv/solarpanel1.jpg', 
      desc: 'Combined solar, battery, and grid systems that deliver complete energy independence and reduce reliance on unstable grid power.' 
    },
    { 
      label: 'Power Backup', 
      href: '/services/power-backup', 
      image: '/images/services/solar-pv/batterystorage.jpg', 
      desc: 'Battery banks and inverters that ensure your home or business keeps running seamlessly during blackouts. Basic or Total cover available.' 
    },
    { 
      label: 'Borehole Solarization', 
      href: '/services/solar-pumping', 
      image: '/images/services/energy-engineering/solarpanel-on-stand.jpg', 
      desc: 'Convert your existing borehole pump to run on solar energy over the grid, reducing costs and ensuring reliable water supply.' 
    },
  ];

  return (
    <div className="pt-36 md:pt-40 bg-white">
      <div className="relative h-100 md:h-125 overflow-hidden">
        <WatermarkImage 
          src="/images/services/solar-pv/solarpanel.jpg" 
          alt="Solar PV Systems" 
          fill 
          watermarkSize={100} 
          watermarkStyle="seal" 
        />
        <div className="absolute inset-0 bg-navy/70 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4">Solar PV Systems</h1>
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
              <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6">
                <WatermarkImage 
                  src={system.image} 
                  alt={system.label} 
                  fill 
                  watermarkSize={60} 
                  watermarkPosition="bottom-right"
                />
              </div>
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