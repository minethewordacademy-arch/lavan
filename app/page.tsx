"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import WatermarkImage from '@/components/WatermarkImage';

export default function Home() {
  const slides = [
     { src: '/images/home/slide-1.jpg', alt: 'Residential Solar' },
    { src: '/images/home/slide-2.jpg', alt: 'Commercial Solar' },
    { src: '/images/home/slide-4.jpg', alt: 'Energy Engineering' },
    { src: '/images/home/slide-5.jpg', alt: 'Energy Systems' },
    { src: '/images/home/slide-6.jpg', alt: 'Thermal Energy' },
    { src: '/images/home/slide-3.jpg', alt: 'Solar Water Heating' },
    { src: '/images/home/slide-7.jpg', alt: 'Residential Solar' },
    { src: '/images/home/slide-8.jpg', alt: 'Commercial Solar' },
   
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => setCurrent(index);

  return (
    <>
      {/* Split Hero Section - Expanded Carousel */}
      <section className="pt-36 md:pt-40 bg-linear-to-br from-navy to-navy-dark pb-16 md:pb-24 relative overflow-hidden">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          
          {/* Left Text */}
          <div className="z-10">
            <span className="inline-block bg-gold/20 text-gold px-4 py-1 rounded-full text-sm font-semibold mb-4">
              ☀️ Kenya&apos;s Trusted Solar Partner
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
              Power Your Life with <span className="text-gold">Clean Energy</span>
            </h1>
            <p className="text-white/80 text-lg mb-8 max-w-lg">
              Lavan Solar Systems delivers end-to-end solar solutions designed to reduce electricity costs, improve energy reliability, and support long-term sustainability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-gold text-navy px-8 py-3 rounded-full font-bold hover:bg-white transition text-center">
                Free Consultation
              </Link>
              <Link href="/projects" className="border-2 border-white/50 text-white px-8 py-3 rounded-full font-semibold hover:border-gold hover:text-gold transition text-center">
                View Projects
              </Link>
            </div>
          </div>

          {/* Right Carousel Container - LARGER VIEW */}
          <div className="relative w-full">
            <div className="relative w-full h-80 md:h-150 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              
              {/* Absolute container for slides */}
              <div className="absolute inset-0">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === current ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  >
                    <WatermarkImage
                      src={slide.src}
                      alt={slide.alt}
                      fill
                      watermarkSize={70}
                      watermarkPosition="bottom-right"
                    />
                  </div>
                ))}
              </div>

              {/* Overlay - Subtle bottom fade for premium look */}
              <div className="absolute inset-0 bg-linear-to-t from-navy/30 to-transparent pointer-events-none"></div>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition ${
                      index === current ? 'bg-gold scale-125' : 'bg-white/60 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Core Business Divisions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold uppercase text-sm">Core Business Divisions</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy mt-2">Integrated Energy Solutions</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Our three divisions work together to provide complete energy solutions for your home or business.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <Link href="/services/energy-engineering" className="group bg-light-bg p-10 rounded-3xl hover:bg-navy transition-colors duration-500 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mb-6 text-navy text-3xl group-hover:bg-white group-hover:text-gold transition">⚙️</div>
              <h3 className="text-2xl font-extrabold text-navy group-hover:text-white mb-4">Energy Engineering</h3>
              <p className="text-gray-600 group-hover:text-white/80 leading-relaxed mb-6">Audits, Load Assessments, System Design & Consultancy.</p>
              <span className="text-gold font-bold group-hover:text-gold-light">Explore →</span>
            </Link>

            <Link href="/services/energy-systems" className="group bg-light-bg p-10 rounded-3xl hover:bg-navy transition-colors duration-500 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mb-6 text-navy text-3xl group-hover:bg-white group-hover:text-gold transition">🔋</div>
              <h3 className="text-2xl font-extrabold text-navy group-hover:text-white mb-4">Energy Systems</h3>
              <p className="text-gray-600 group-hover:text-white/80 leading-relaxed mb-6">Solar PV, Hybrid, Battery Storage & Backup Power.</p>
              <span className="text-gold font-bold group-hover:text-gold-light">Explore →</span>
            </Link>

            <Link href="/services/thermal-energy" className="group bg-light-bg p-10 rounded-3xl hover:bg-navy transition-colors duration-500 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mb-6 text-navy text-3xl group-hover:bg-white group-hover:text-gold transition">🔥</div>
              <h3 className="text-2xl font-extrabold text-navy group-hover:text-white mb-4">Thermal Energy</h3>
              <p className="text-gray-600 group-hover:text-white/80 leading-relaxed mb-6">Solar Water Heating, Heat Pumps & Commercial Hot Water.</p>
              <span className="text-gold font-bold group-hover:text-gold-light">Explore →</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-light-bg">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4 text-center">
          <div><h2 className="text-4xl font-extrabold text-navy">150+</h2><p className="text-gray-500 mt-2 text-sm uppercase">Projects</p></div>
          <div><h2 className="text-4xl font-extrabold text-navy">98%</h2><p className="text-gray-500 mt-2 text-sm uppercase">Satisfaction</p></div>
          <div><h2 className="text-4xl font-extrabold text-navy">10+</h2><p className="text-gray-500 mt-2 text-sm uppercase">Years Exp.</p></div>
          <div><h2 className="text-4xl font-extrabold text-navy">40+</h2><p className="text-gray-500 mt-2 text-sm uppercase">Commercial</p></div>
        </div>
      </section>

      {/* How We Work / Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-gold/20 text-gold px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">Our Process</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-4">How We Work</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">A simple, transparent journey from consultation to handover.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { num: '1', title: 'Consultation', desc: 'We understand your energy usage and goals.' },
              { num: '2', title: 'Site Assessment', desc: 'Technical review of roof space and load requirements.' },
              { num: '3', title: 'Proposal & Design', desc: 'We prepare a tailored system recommendation.' },
              { num: '4', title: 'Installation', desc: 'Professional setup with quality workmanship.' },
              { num: '5', title: 'Testing & Handover', desc: 'System commissioned and handed over with support.' },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-navy text-2xl font-extrabold mx-auto mb-4 shadow-lg">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Lavan Section */}
      <section className="py-20 bg-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Why Choose Lavan Solar Systems</h2>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto">We combine international engineering expertise with local understanding.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏠', title: 'Residential & Commercial', desc: 'We serve both homes and businesses with tailored solutions.' },
              { icon: '🔧', title: 'Practical Solutions', desc: 'Systems designed around your actual energy usage, not a one-size-fits-all approach.' },
              { icon: '⚡', title: 'PV & Water Heating', desc: 'We specialize in both solar PV and solar water heating for complete energy coverage.' },
              { icon: '🤝', title: 'Honest Service', desc: 'Transparent advice, clear communication, and dependable after-sales support.' },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 p-8 rounded-2xl text-center hover:bg-white/10 transition">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-gold text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}