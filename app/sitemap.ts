import type { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';
import { staticRoutes } from '@/lib/routes';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lavansolar.co.ke';

  // Static pages
  const staticPages = staticRoutes.map((path) => ({
    url: `${baseUrl}${path === '/' ? '' : path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: path === '/' ? 1 : 0.8,
  }));

  // Dynamic project pages (automatically picked up from lib/projects.ts)
  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages];
}