"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const mainLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '/projects', label: 'Projects' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

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
    label: 'Solar PV Systems',
    services: [
      { label: 'Solar PV Systems', href: '/services/solar-pv' },
      { label: 'Hybrid Systems', href: '/services/hybrid-systems' },
      { label: 'Power Backup', href: '/services/power-backup' },
      { label: 'Borehole Solarization', href: '/services/solar-pumping' },
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
  
  // State for collapse (holds the label of the currently open division, or null)
  const [openDivision, setOpenDivision] = useState<string | null>(null);

  const toggleDivision = (label: string) => {
    setOpenDivision(openDivision === label ? null : label);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 shadow-md">
        {/* Top Navbar - Far Left Logo */}
        <nav className="bg-white">
          <div className="flex items-center justify-between h-16 md:h-20 px-4 md:pl-6 md:pr-8">
            {/* Smaller Logo - Far Left */}
            <Link href="/" className="flex items-center">
              <div className="relative h-10 md:h-12 w-36 md:w-44">
                <Image
                  src="/logo.JPG"
                  alt="Lavan Solar Systems"
                  fill
                  className="object-contain object-left"
                  sizes="(max-width: 768px) 144px, 176px"
                  priority
                />
              </div>
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

            {/* Mobile Toggle */}
            <button className="md:hidden text-navy text-3xl" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </nav>

        {/* Division Bar (Desktop Only) */}
        <nav className="hidden md:block bg-navy">
          <div className="container mx-auto flex items-center justify-center h-14 space-x-12">
            {divisions.map((division) => (
              <div key={division.href} className="relative group">
                <Link href={division.href} className="text-white font-bold py-4 hover:text-gold transition flex items-center gap-2">
                  {division.label}
                  <span className="text-gold text-xs">▼</span>
                </Link>
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
      </header>

      {/* Mobile Menu (Collapsible Divisions) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-white overflow-y-auto pt-20 pb-8">
          <button className="absolute top-4 right-4 text-navy text-4xl" onClick={() => setIsOpen(false)} aria-label="Close menu">
            ✕
          </button>
          <ul className="flex flex-col px-6 space-y-4">
            {mainLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setIsOpen(false)} className="block font-bold text-navy text-2xl hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="bg-light-bg mt-8 px-6 py-8 space-y-4">
            <p className="text-xs uppercase tracking-wider text-gray-500 font-bold">Core Divisions</p>
            {divisions.map((division) => (
              <div key={division.href}>
                {/* Division Header (clickable to toggle) */}
                <button 
                  onClick={() => toggleDivision(division.label)}
                  className="w-full flex items-center justify-between font-extrabold text-navy text-xl hover:text-gold py-2 text-left"
                >
                  {division.label}
                  <span className="text-gold text-2xl">
                    {openDivision === division.label ? '−' : '+'}
                  </span>
                </button>
                
                {/* Expanded Services */}
                {openDivision === division.label && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {division.services.map((service) => (
                      <li key={service.href + service.label}>
                        <Link href={service.href} onClick={() => setIsOpen(false)} className="block text-navy text-base hover:text-gold py-1">
                          {service.label}
                        </Link>
                      </li>
                    ))}
                    <li className="pt-2">
                      <Link href={division.href} onClick={() => setIsOpen(false)} className="block text-gold font-semibold hover:underline">
                        View All →
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}