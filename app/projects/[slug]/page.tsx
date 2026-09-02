import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/lib/projects';
import ProjectDetailClient from '@/components/ProjectDetailClient';

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
    keywords: [`${project.title}`, `solar installation ${project.location}`, 'Lavan Solar Systems'],
    alternates: {
      canonical: `https://lavansolar.co.ke/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} - Lavan Solar Systems`,
      description: `View our completed ${project.title.toLowerCase()} project in ${project.location}.`,
      images: [{ url: project.image, width: 1200, height: 630, alt: project.title }],
      url: `https://lavansolar.co.ke/projects/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject = projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  return (
    <>
      <ProjectDetailClient
        project={project}
        prevProject={prevProject}
        nextProject={nextProject}
      />
      {/* JSON‑LD Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://lavansolar.co.ke' },
              { '@type': 'ListItem', position: 2, name: 'Projects', item: 'https://lavansolar.co.ke/projects' },
              { '@type': 'ListItem', position: 3, name: project.title, item: `https://lavansolar.co.ke/projects/${project.slug}` },
            ],
          }),
        }}
      />
    </>
  );
}