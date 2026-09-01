import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Lavan Solar Systems',
    short_name: 'Lavan Solar',
    description: 'Kenya’s trusted solar energy partner.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#113F58',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}