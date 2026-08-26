import type { Metadata } from 'next';
import Link from 'next/link';
import WatermarkImage from '@/components/WatermarkImage';

export const metadata: Metadata = {
  title: 'Grid-Tie Solutions | Lavan Solar Systems',
  description: 'Generate solar electricity while staying connected to the grid. Lower your bills and rely on the grid when needed.',
};

export default function GridTiePage() {
  return (
    <div className="pt-36 md:pt-40 bg-white">
      <section className="relative h-100 overflow-hidden">
        <WatermarkImage 
          src="/images/services/solar-pv/solarpanel-rooftop.jpg" 
          alt="Grid-Tie Solutions" 
          fill 
          watermarkSize={100} 
          watermarkStyle="seal" 
        />
        <div className="absolute inset-0 bg-navy/70 flex items-center justify-center">
          <div className="text-center max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Grid-Tie Solutions</h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">Generate clean energy while maintaining a reliable connection to the grid.</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-8">How It Works</h2>
          <p className="text-gray-700 text-lg mb-6">
            Grid-tie systems utilize solar energy to generate electricity while maintaining connection to the grid. The connection to the grid enables users to draw electricity from the grid at night or when the solar power generation is not sufficient such as during cloudy weather.
          </p>
          <p className="text-gray-700 text-lg mb-6">
            Unlike hybrid and off-grid systems, grid-tie systems do not have storage, resulting in lower costs. Grid-tie systems enable users to generate clean energy during the day, reducing reliance on fossil fuels and lowering your electricity bills.
          </p>
          <Link href="/quote?service=grid-tie" className="block text-center bg-navy text-white py-5 rounded-full font-bold hover:bg-gold hover:text-navy transition max-w-sm mx-auto text-lg">Get a Grid-Tie Quote</Link>
        </div>
      </section>
    </div>
  );
}