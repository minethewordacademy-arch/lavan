import type { Metadata } from 'next';
import Link from 'next/link';
import WatermarkImage from '@/components/WatermarkImage';

export const metadata: Metadata = {
  title: 'Blog | Lavan Solar Systems',
  description: 'Insights, tips, and updates on solar energy in Kenya from the Lavan Solar Systems team.',
};

const blogPosts = [
  {
    title: "Kenya's Next Renewable Energy Challenge Isn't Generation. It's Storage.",
    date: 'September 2026',
    slug: 'kenya-renewable-energy-storage',
    image: '/images/oursolarproducts/blog0.jpg',
    excerpt: 'Kenya has built one of Africa’s strongest renewable electricity systems. But as solar and wind capacity grows, the next critical challenge is energy storage. This article explores why battery energy storage systems (BESS) and smart energy design are essential for balancing supply and demand.',
    externalUrl: 'https://www.linkedin.com/pulse/kenyas-next-renewable-energy-challenge-isnt-69w6f',
  },
  {
    title: 'How Solar Water Heating Works',
    date: 'August 2026',
    slug: 'how-solar-water-heating-works',
    image: '/images/projects/katani-solarWater.webp',
    excerpt: 'A simple process: water is heated by the sun through a collector and stored in a tank. Understand the basics of solar water heating.',
  },
  {
    title: 'Why Solar Power is a Smart Investment in Kenya',
    date: 'July 2026',
    slug: 'solar-power-smart-investment',
    image: '/images/projects/kajiado-commercialSolar.webp',
    excerpt: 'With electricity costs rising, solar power offers reliability and savings. Learn why Kenyan homeowners and businesses are turning to solar.',
  },
  {
    title: 'Borehole Solarization: Running Your Pump on Sunshine',
    date: 'June 2026',
    slug: 'borehole-solarization',
    image: '/images/projects/kiambu-borehole.webp',
    excerpt: 'Solarize your existing borehole to run on solar energy over the grid. Reduce costs and ensure uninterrupted water supply.',
  },
];

export default function BlogPage() {
  return (
    <div className="pt-36 md:pt-40 pb-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-gold font-semibold uppercase text-sm">Our Blog</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy mt-2">Solar Insights & News</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Expert tips, company updates, and practical advice on solar energy in Kenya.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PostCard({ post }: { post: typeof blogPosts[0] }) {
  const cardContent = (
    <>
      <div className="relative w-full h-56 overflow-hidden">
        <WatermarkImage src={post.image} alt={post.title} fill watermarkSize={70} watermarkPosition="bottom-right" />
      </div>
      <div className="p-6">
        <p className="text-gray-500 text-xs mb-2">{post.date}</p>
        <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-gold transition">{post.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
        <span className="text-gold font-semibold">
          {post.externalUrl ? 'Read on LinkedIn →' : 'Read More →'}
        </span>
      </div>
    </>
  );

  // If externalUrl exists, use an anchor tag to open LinkedIn
  if (post.externalUrl) {
    return (
      <a
        href={post.externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition border-b-4 border-gold block"
      >
        {cardContent}
      </a>
    );
  }

  // Otherwise, use Next.js Link for internal pages
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition border-b-4 border-gold"
    >
      {cardContent}
    </Link>
  );
}