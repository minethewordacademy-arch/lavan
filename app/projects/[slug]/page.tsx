import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import ShareButtons from '@/components/ShareButtons';
import WatermarkImage from '@/components/WatermarkImage';
import WatermarkVideo from '@/components/WatermarkVideo';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Lavan Solar Systems`,
    description: `Completed ${project.title} in ${project.location}. Trust Lavan for reliable solar energy solutions.`,
    openGraph: {
      title: `${project.title} - Lavan Solar Systems`,
      description: `View our completed ${project.title.toLowerCase()} project in ${project.location}.`,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const shareUrl = `https://lavansolar.co.ke/projects/${project.slug}`;

  return (
    <div className="pt-36 md:pt-40 pb-16 bg-light-bg">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link href="/projects" className="text-navy hover:text-gold transition mb-8 inline-block">← Back to Projects</Link>

        {project.video ? (
          <div className="mb-8">
            <WatermarkVideo
              src={project.video}
              poster={project.image}
              className="rounded-3xl overflow-hidden shadow-2xl"
              watermarkText="LAVAN SOLAR SYSTEMS"
            />
          </div>
        ) : (
          <div className="relative w-full h-100 md:h-125 rounded-3xl overflow-hidden shadow-2xl mb-8 border-4 border-white/10">
            <WatermarkImage src={project.image} alt={project.title} fill watermarkSize={100} watermarkPosition="bottom-right" />
          </div>
        )}

        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy mb-4">{project.title}</h1>
          <div className="flex items-center justify-center gap-2 text-gray-500 mb-8">
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {project.location}
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <p className="text-gray-600 mb-6">
              At Lavan Solar Systems, we take pride in delivering tailored energy solutions. This {project.title.toLowerCase()} in {project.location} showcases our commitment to quality, reliability, and long-term sustainability.
            </p>
            <Link href="/contact" className="inline-block bg-gold text-navy px-8 py-3 rounded-full font-bold hover:bg-navy hover:text-gold transition">
              Inquire About a Similar System
            </Link>
            <ShareButtons title={project.title} url={shareUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}