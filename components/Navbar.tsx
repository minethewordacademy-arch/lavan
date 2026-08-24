"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

// Tier 1 Links
const mainLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

// Tier 2 Divisions (with direct sub-links)
const divisions = [
  {
    href: '/services/energy-engineering',
    label: 'Energy Engineering',
    services: [
      { label: 'Energy Audit & Consultancy', href: '/services/energy-audit' },
      { label: 'System Design', href: '/services/energy-engineering' },
      { label: 'Load Assessments', href: '/services/energy-engineering' },
      { label: 'Feasibility Studies', href: '/services/energy-engineering' },
    ],
  },
  {
    href: '/services/energy-systems',
    label: 'Energy Systems',
    services: [
      { label: 'Solar PV Systems', href: '/services/solar-pv' },
      { label: 'Hybrid Systems', href: '/services/hybrid-systems' },
      { label: 'Power Backup', href: '/services/power-backup' },
      { label: 'Solar Pumping', href: '/services/solar-pumping' },
    ],
  },
  {
    href: '/services/thermal-energy',
    label: 'Thermal Energy',
    services: [
      { label: 'Pressurized Water Heaters', href: '/services/thermal-energy' },
      { label: 'Non-Pressurized Heaters', href: '/services/thermal-energy' },
      { label: 'Heat Pump Systems', href: '/services/thermal-energy' },
      { label: 'Commercial Hot Water', href: '/services/thermal-energy' },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 shadow-md">
      {/* Tier 1: Main White Navbar */}
      <nav className="bg-white">
        <div className="container mx-auto flex items-center justify-between h-20 px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.JPG" alt="Lavan Solar Systems" width={200} height={60} className="object-contain h-12 md:h-16 w-auto" />
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8 items-center">
            {mainLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-medium text-navy hover:text-gold transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link href="/quote" className="hidden md:inline-block bg-gold text-navy px-6 py-2 rounded-full font-bold hover:bg-navy hover:text-gold transition">
            Get a Quote
          </Link>

          {/* Mobile Toggle */}
          <button className="md:hidden text-navy text-3xl" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Tier 2: Navy Blue Divisions Bar (Visible on Desktop) */}
      <nav className="hidden md:block bg-navy">
        <div className="container mx-auto flex items-center justify-center h-14 space-x-12">
          {divisions.map((division) => (
            <div key={division.href} className="relative group">
              <Link 
                href={division.href} 
                className="text-white font-bold py-4 hover:text-gold transition flex items-center gap-2"
              >
                {division.label}
                <span className="text-gold text-xs">▼</span>
              </Link>

              {/* Dropdown */}
              <div className="absolute left-0 top-full w-72 bg-white rounded-b-xl shadow-2xl border-t-4 border-gold opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <ul className="py-4">
                  {division.services.map((service) => (
                    <li key={service.href + service.label}>
                      <Link href={service.href} className="block px-6 py-3 text-navy font-medium hover:bg-light-bg hover:text-gold transition">
                        {service.label}
                      </Link>
                    </li>
                  ))}
                  <li className="border-t border-gray-100 mt-2 pt-2">
                    <Link href={division.href} className="block px-6 py-3 text-gold font-bold hover:bg-light-bg">
                      View All →
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 max-h-screen overflow-y-auto">
          <ul className="flex flex-col px-4 py-4 space-y-4">
            {mainLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setIsOpen(false)} className="block font-medium text-navy hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Divisions */}
          <div className="bg-navy/10 px-4 py-4 space-y-4">
            <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Core Divisions</p>
            {divisions.map((division) => (
              <div key={division.href}>
                <Link href={division.href} onClick={() => setIsOpen(false)} className="block font-bold text-navy hover:text-gold">
                  {division.label}
                </Link>
                <ul className="pl-4 mt-2 space-y-1">
                  {division.services.map((service) => (
                    <li key={service.href + service.label}>
                      <Link href={service.href} onClick={() => setIsOpen(false)} className="block text-sm text-gray-600 hover:text-gold">
                        {service.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="px-4 py-4 border-t border-gray-200">
            <Link href="/quote" onClick={() => setIsOpen(false)} className="block w-full text-center bg-gold text-navy px-6 py-2 rounded-full font-bold">
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}