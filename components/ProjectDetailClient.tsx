"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import ShareButtons from '@/components/ShareButtons';
import WatermarkImage from '@/components/WatermarkImage';
import WatermarkVideo from '@/components/WatermarkVideo';

interface Project {
  slug: string;
  title: string;
  location: string;
  image: string;
  video?: string;
}

interface ProjectDetailClientProps {
  project: Project;
  prevProject: Project | null;
  nextProject: Project | null;
}

export default function ProjectDetailClient({ project, prevProject, nextProject }: ProjectDetailClientProps) {
  const router = useRouter();
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    // Swipe left -> next
    if (diff > 50 && nextProject) {
      router.push(`/projects/${nextProject.slug}`);
    }
    // Swipe right -> previous
    if (diff < -50 && prevProject) {
      router.push(`/projects/${prevProject.slug}`);
    }
    touchStartX.current = null;
  };

  return (
    <div className="pt-36 md:pt-40 pb-16 bg-light-bg" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb */}
        <Link href="/projects" className="text-navy hover:text-gold transition mb-8 inline-block">← Back to Projects</Link>

        {/* Media (reduced height) */}
        <div className="mb-6">
          {project.video ? (
            <WatermarkVideo
              src={project.video}
              poster={project.image}
              className="rounded-3xl overflow-hidden shadow-2xl max-h-100"
              watermarkText="LAVAN SOLAR SYSTEMS"
            />
          ) : (
            <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <WatermarkImage
                src={project.image}
                alt={project.title}
                fill
                watermarkSize={100}
                watermarkStyle="seal"
              />
            </div>
          )}
        </div>

        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">{project.title}</h1>
          <div className="flex items-center justify-center gap-2 text-gray-500 mb-6">
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {project.location}
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-gray-600 mb-6">
              At Lavan Solar Systems, we take pride in delivering tailored energy solutions. This {project.title.toLowerCase()} in {project.location} showcases our commitment to quality, reliability, and long-term sustainability.
            </p>
            <Link href="/contact" className="inline-block bg-gold text-navy px-8 py-3 rounded-full font-bold hover:bg-navy hover:text-gold transition">
              Inquire About a Similar System
            </Link>
            <ShareButtons title={project.title} url={`https://lavansolar.co.ke/projects/${project.slug}`} />
          </div>

          {/* Previous / Next Navigation */}
          <div className="flex justify-between items-center mt-8">
            {prevProject ? (
              <Link href={`/projects/${prevProject.slug}`} className="text-navy hover:text-gold transition font-semibold inline-flex items-center gap-2">
                <span aria-hidden="true">←</span> Previous
              </Link>
            ) : (
              <span />
            )}
            {nextProject ? (
              <Link href={`/projects/${nextProject.slug}`} className="text-navy hover:text-gold transition font-semibold inline-flex items-center gap-2">
                Next <span aria-hidden="true">→</span>
              </Link>
            ) : (
              <span />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}