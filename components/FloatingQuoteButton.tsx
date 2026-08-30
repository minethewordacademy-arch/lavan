"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Map page paths to service slugs
const pathToService: Record<string, string> = {
  '/services/energy-engineering': 'energy-engineering',
  '/services/energy-audit': 'energy-audit',
  '/services/solar-pv': 'solar-pv',
  '/services/energy-systems': 'solar-pv', // Energy Systems page is about Solar PV
  '/services/grid-tie': 'grid-tie',
  '/services/off-grid': 'off-grid',
  '/services/hybrid-systems': 'hybrid-solar-system',
  '/services/power-backup': 'power-backup',
  '/services/solar-pumping': 'borehole-solarization',
  '/services/thermal-energy': 'solar-water-heating',
  '/products': 'solar-pv', // default to solar-pv
};

export default function FloatingQuoteButton() {
  const pathname = usePathname();
  const service = pathToService[pathname] || 'general-inquiry';

  return (
    <Link
      href={`/quote?service=${service}`}
      className="fixed bottom-6 right-6 z-50 bg-gold text-navy px-6 py-4 rounded-full font-bold shadow-2xl hover:bg-navy hover:text-gold transition-all transform hover:scale-105"
    >
      Get a Quote
    </Link>
  );
}