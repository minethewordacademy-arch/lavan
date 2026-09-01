import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="pt-36 md:pt-40 pb-16 bg-light-bg min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-navy">404</h1>
        <p className="mt-4 text-lg text-gray-600">Oops! The page you are looking for doesn’t exist.</p>
        <Link href="/" className="inline-block mt-8 bg-gold text-navy px-8 py-3 rounded-full font-bold hover:bg-navy hover:text-gold transition">
          Go Home
        </Link>
      </div>
    </div>
  );
}