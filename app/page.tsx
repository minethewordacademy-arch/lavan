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
    }, 2000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => setCurrent(index);

  return (
    <>
      {/* Split Hero Section */}
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

          {/* Right Carousel */}
          <div className="relative w-full">
            <div className="relative w-full h-80 md:h-150 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <div className="absolute inset-0">
                {slides.map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === current ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                  >
                    <WatermarkImage src={slide.src} alt={slide.alt} fill watermarkSize={70} watermarkPosition="bottom-right" />
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-navy/30 to-transparent pointer-events-none"></div>
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

            <Link href="/services/solar-pv" className="group bg-light-bg p-10 rounded-3xl hover:bg-navy transition-colors duration-500 hover:shadow-2xl">
              <div className="w-16 h-16 bg-gold rounded-2xl flex items-center justify-center mb-6 text-navy text-3xl group-hover:bg-white group-hover:text-gold transition">🔋</div>
              <h3 className="text-2xl font-extrabold text-navy group-hover:text-white mb-4">Solar PV Systems</h3>
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
          <div><h2 className="text-4xl font-extrabold text-navy">30+</h2><p className="text-gray-500 mt-2 text-sm uppercase">Projects</p></div>
          <div><h2 className="text-4xl font-extrabold text-navy">98%</h2><p className="text-gray-500 mt-2 text-sm uppercase">Satisfaction</p></div>
          <div><h2 className="text-4xl font-extrabold text-navy">1+</h2><p className="text-gray-500 mt-2 text-sm uppercase">Years Exp.</p></div>
          <div><h2 className="text-4xl font-extrabold text-navy">3+</h2><p className="text-gray-500 mt-2 text-sm uppercase">Commercial</p></div>
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

      {/* Why Choose Lavan Section - NEW & IMPROVED */}
      <section className="py-20 bg-navy relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Proposition Banner */}
          <div className="text-center mb-16">
            <span className="inline-block bg-gold/20 text-gold px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              Our Fundamental Proposition
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Understand the Energy Requirement.<br/>
              <span className="text-gold">Engineer the Solution.</span> Install the System.
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto">
              We don&apos;t sell packages. We solve energy problems. Every system we design is built around your actual needs, not a generic template.
            </p>
          </div>

          {/* Why Choose Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-gold/50 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center mb-5 text-navy">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Engineering Before Equipment</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                System capacity should be determined by energy requirements rather than by generic package sizes.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-gold/50 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center mb-5 text-navy">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Integrated Energy Thinking</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Electrical and thermal energy should be considered together where appropriate for maximum efficiency.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-gold/50 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center mb-5 text-navy">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Proper System Sizing</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                PV, batteries, inverters, hot-water systems and heat pumps should be selected based on actual application requirements.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-gold/50 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center mb-5 text-navy">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Professional Implementation</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                The quality of the installation should match the quality of the engineering. We don&apos;t cut corners.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-gold/50 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center mb-5 text-navy">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Long-Term Performance</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                The relationship should continue beyond commissioning through monitoring, maintenance, troubleshooting and future system expansion.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm border border-white/10 hover:border-gold/50 hover:bg-white/10 transition-all duration-300">
              <div className="w-14 h-14 bg-gold rounded-xl flex items-center justify-center mb-5 text-navy">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Sustainability</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Sustainability and environmental stewardship is at the core of everything we do. We are committed to offering energy solutions that help reduce carbon emissions, minimize environmental impact and mitigate climate change.
              </p>
            </div>
          </div>

          {/* Bottom Statement */}
          <div className="mt-16 bg-gold/10 border border-gold/30 rounded-2xl p-8 text-center">
            <p className="text-white text-lg md:text-xl italic leading-relaxed max-w-4xl mx-auto">
              <span className="text-gold font-bold">&ldquo;</span>
              By choosing to work with us you are not just investing in your business or home, you are also contributing to a cleaner and greener planet.
              <span className="text-gold font-bold">&rdquo;</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}