'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';

const services = [
  { label: 'Strategic IT Consulting', href: '/services/strategic-it-consulting' },
  { label: 'Systems Integration', href: '/services/systems-integration' },
  { label: 'Digital Transformation', href: '/services/digital-transformation' },
  { label: 'Cybersecurity Services', href: '/services/cybersecurity-services' },
  { label: 'IT & Networking Services', href: '/services/it-networking-services' },
  { label: 'Web & Software Development', href: '/services/web-software-development' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="container-max flex items-center justify-between h-20">

        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="BusiQuip - Driving Africa's Digital Future"
            width={130}
            height={56}
            className="h-14 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <Link href="/" className="text-slate-700 hover:text-navy-500 font-medium transition-colors text-sm">
            Home
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 text-slate-700 hover:text-navy-500 font-medium transition-colors text-sm"
            >
              Services
              <ChevronDown size={16} className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>

            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-200 py-2 z-50">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setServicesOpen(false)}
                    className="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-navy-500 transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/solutions" className="text-slate-700 hover:text-navy-500 font-medium transition-colors text-sm">
            Solutions
          </Link>
          <Link href="/about" className="text-slate-700 hover:text-navy-500 font-medium transition-colors text-sm">
            About
          </Link>
          <Link href="/contact" className="text-slate-700 hover:text-navy-500 font-medium transition-colors text-sm">
            Contact
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            Get Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-700"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="container-max py-4 space-y-1">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-700 hover:text-navy-500 font-medium rounded-lg hover:bg-slate-50">
              Home
            </Link>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-slate-700 font-medium rounded-lg hover:bg-slate-50"
              >
                Services
                <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-200 pl-4">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
                      className="block py-2 text-sm text-slate-600 hover:text-navy-500"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/solutions" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-700 hover:text-navy-500 font-medium rounded-lg hover:bg-slate-50">
              Solutions
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-700 hover:text-navy-500 font-medium rounded-lg hover:bg-slate-50">
              About
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-700 hover:text-navy-500 font-medium rounded-lg hover:bg-slate-50">
              Contact
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block mx-3 mt-2 py-2.5 bg-blue-600 text-white font-bold rounded-lg text-center hover:bg-blue-700">
              Get Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
