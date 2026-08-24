import type { Metadata } from 'next';
import Link from 'next/link';
import { projects } from '@/lib/projects';
import WatermarkImage from '@/components/WatermarkImage';

export const metadata: Metadata = {
  title: 'Our Projects | Lavan Solar Systems',
  description: 'Explore our portfolio of completed solar installations across Kenya.',
  openGraph: {
    title: 'Lavan Solar Projects',
    description: 'Real-world solar solutions: water heating, hybrid systems, commercial PV, and pumping solutions across Kenya.',
    images: ['/images/open-graphs/og-projects.jpg'],
  },
};

export default function ProjectsPage() {
  return (
    <div className="pt-36 md:pt-40 pb-16 bg-light-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold uppercase text-sm">Our Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy mt-2">Projects We&apos;ve Powered</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">From residential homes to commercial dairy plants, discover how Lavan Solar Systems is delivering reliable energy solutions across Kenya.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition group border-b-4 border-gold">
              <div className="relative w-full h-64 overflow-hidden">
                <WatermarkImage src={project.image} alt={project.title} fill watermarkSize={80} watermarkPosition="bottom-right" className="group-hover:scale-105 transition duration-500" />
                {project.video && (
                  <div className="absolute top-2 left-2 z-10 bg-gold text-navy text-xs font-bold px-2 py-1 rounded-full">
                    ▶ Video
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-gold transition">{project.title}</h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {project.location}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}