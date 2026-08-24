import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Lavan Solar Systems',
  description: 'Learn about Lavan Solar Systems: our mission, vision, and the team behind Kenya’s trusted solar energy solutions.',
  openGraph: {
    title: 'About Lavan Solar Systems',
    description: 'We design and deliver solar systems that solve real energy challenges through quality equipment, practical engineering, and transparent advice.',
    images: ['/images/open-graphs/og-about.jpg'],
    url: 'https://lavansolar.co.ke/about',
    siteName: 'Lavan Solar Systems',
    locale: 'en_KE',
    type: 'website',
  },
};

export default function About() {
  return (
    <div className="pt-36 md:pt-40 pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-gold font-semibold uppercase text-sm">About Us</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-navy mt-2">About Lavan Solar Systems</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Lavan Solar Systems Limited is a Kenya-based solar energy company focused on delivering clean, reliable, and efficient energy solutions.
          </p>
        </div>

        <div className="prose prose-navy max-w-none">
          <p className="text-gray-700 text-lg">
            Lavan Solar Systems Limited is a Kenya-based solar energy company focused on delivering clean, reliable, and efficient energy solutions for residential and commercial clients.
          </p>
          <p className="text-gray-700 text-lg">
            Our mission is to design and deliver solar systems that solve real energy challenges through quality equipment, practical engineering, transparent advice, and responsive support.
          </p>
          
          {/* Updated Vision from CEO */}
          <h2 className="text-2xl font-bold mt-8 mb-4 text-navy">Our Vision</h2>
          <p className="text-gray-700">
            To become a trusted energy engineering company known for designing and delivering reliable, intelligent and high-performing energy systems for homes and businesses.
          </p>
          
          {/* Updated Mission from CEO */}
          <h2 className="text-2xl font-bold mt-8 mb-4 text-navy">Our Mission</h2>
          <p className="text-gray-700">
            To help clients make better energy investments by combining engineering, quality equipment, professional installation and long-term system performance.
          </p>
          
          <h2 className="text-2xl font-bold mt-8 mb-4 text-navy">What We Solve</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Lower monthly power costs through solar adoption.</li>
            <li>Better energy independence for homes and businesses.</li>
            <li>Tailored system sizing based on usage needs.</li>
            <li>Professional installation and long-term support.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}