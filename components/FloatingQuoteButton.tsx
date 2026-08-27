"use client";
import Link from 'next/link';

export default function FloatingQuoteButton() {
  return (
    <Link
      href="/quote"
      className="fixed bottom-6 right-6 z-50 bg-gold text-navy px-6 py-4 rounded-full font-bold shadow-2xl hover:bg-navy hover:text-gold transition-all transform hover:scale-105"
    >
      Get a Quote
    </Link>
  );
}