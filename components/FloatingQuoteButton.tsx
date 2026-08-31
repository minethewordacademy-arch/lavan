"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const pathToService: Record<string, string> = {
  '/services/energy-engineering': 'energy-engineering',
  '/services/energy-audit': 'energy-audit',
  '/services/solar-pv': 'solar-pv',
  '/services/energy-systems': 'solar-pv',
  '/services/grid-tie': 'grid-tie',
  '/services/off-grid': 'off-grid',
  '/services/hybrid-systems': 'hybrid-solar-system',
  '/services/power-backup': 'power-backup',
  '/services/solar-pumping': 'borehole-solarization',
  '/services/thermal-energy': 'solar-water-heating',
  '/products': 'solar-pv',
};

export default function FloatingQuoteButton() {
  const pathname = usePathname();
  const service = pathToService[pathname] || 'general-inquiry';

  return (
    <Link
      href={`/quote?service=${service}`}
      className="fixed bottom-4 right-4 z-50 bg-gold text-navy px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-navy hover:text-gold transition-all"
    >
      Get a Quote
    </Link>
  );
}