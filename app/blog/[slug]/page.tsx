import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/lib/blog';
import WatermarkImage from '@/components/WatermarkImage';
import ShareButtons from '@/components/ShareButtons';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return { title: 'Blog Post Not Found' };

  // ✅ Build absolute URL for the image (required for OG to work on WhatsApp, Facebook, etc.)
  const absoluteImageUrl = `https://lavansolar.co.ke${post.image}`;
  const pageUrl = `https://lavansolar.co.ke/blog/${post.slug}`;

  return {
    title: `${post.title} | Lavan Solar Systems`,
    description: post.excerpt,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: pageUrl,
      siteName: 'Lavan Solar Systems',
      images: [
        {
          url: absoluteImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.date,
      authors: ['Lavan Solar Systems Limited'],
      locale: 'en_KE',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [absoluteImageUrl],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) notFound();

  const shareUrl = `https://lavansolar.co.ke/blog/${post.slug}`;

  // JSON-LD BlogPosting for Google rich results
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: `https://lavansolar.co.ke${post.image}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lavan Solar Systems Limited',
      logo: {
        '@type': 'ImageObject',
        url: 'https://lavansolar.co.ke/logo.JPG',
      },
    },
    description: post.excerpt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': shareUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="pt-36 md:pt-40 pb-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Breadcrumb */}
          <Link
            href="/blog"
            className="text-navy hover:text-gold transition mb-8 inline-block"
          >
            ← Back to Blog
          </Link>

          {/* Hero Image */}
          <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden shadow-2xl mb-8 border-4 border-white/10">
            <WatermarkImage
              src={post.image}
              alt={post.title}
              fill
              watermarkSize={100}
              watermarkStyle="seal"
            />
          </div>

          {/* Title & Meta */}
          <div className="text-center mb-10">
            <p className="text-gray-500 text-sm mb-2">{post.date}</p>
            <h1 className="text-3xl md:text-5xl font-extrabold text-navy mb-4">
              {post.title}
            </h1>
            <p className="text-gray-600 text-sm">By {post.author}</p>
          </div>

          {/* Blog Content */}
          <article
            className="prose prose-navy prose-lg max-w-none
              prose-headings:text-navy prose-headings:font-bold
              prose-p:text-gray-700 prose-p:leading-relaxed
              prose-a:text-gold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-navy
              prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* ✅ Share section — label now reads "Share this blog" */}
          <div className="mt-12 border-t border-gray-200 pt-8">
            <ShareButtons
              title={post.title}
              url={shareUrl}
              image={post.image}
              label="Share this blog"
            />
          </div>

          {/* CTA */}
          <div className="mt-12 bg-navy rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Need a Custom Solar System?
            </h2>
            <p className="text-white/80 mb-6">
              Let our engineers design a solution tailored to your energy needs.
            </p>
            <Link
              href="/quote"
              className="inline-block bg-gold text-navy px-8 py-3 rounded-full font-bold hover:bg-white transition"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}