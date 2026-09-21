import type { Metadata } from 'next';
import Link from 'next/link';
import WatermarkImage from '@/components/WatermarkImage';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | Lavan Solar Systems',
  description: 'Insights, tips, and updates on solar energy in Kenya from the Lavan Solar Systems team.',
  alternates: {
    canonical: 'https://lavansolar.co.ke/blog',
  },
};

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
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition border-b-4 border-gold"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <WatermarkImage
                  src={post.image}
                  alt={post.title}
                  fill
                  watermarkSize={70}
                  watermarkPosition="bottom-right"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-500 text-xs mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-gold transition">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <span className="text-gold font-semibold">Read More →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}