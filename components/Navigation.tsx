'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="container-max flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-navy-500 to-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">BQ</span>
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-bold text-navy-500">BusiQuip</h1>
            <p className="text-xs text-gold-500">Digital Future</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-slate-600 hover:text-navy-500 transition-colors font-medium">
            Home
          </Link>
          <Link href="/solutions" className="text-slate-600 hover:text-navy-500 transition-colors font-medium">
            Solutions
          </Link>
          <Link href="/about" className="text-slate-600 hover:text-navy-500 transition-colors font-medium">
            About
          </Link>
          <Link href="/case-studies" className="text-slate-600 hover:text-navy-500 transition-colors font-medium">
            Case Studies
          </Link>
          <Link href="/contact" className="btn-primary text-sm">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button className="inline-flex items-center gap-1 text-slate-600 hover:text-navy-500">
            <Phone size={18} />
          </button>
          <button
            onClick={toggleMenu}
            className="inline-flex items-center justify-center w-10 h-10 text-slate-600 hover:text-navy-500"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-max py-4 space-y-4">
            <Link href="/" className="block text-slate-600 hover:text-navy-500 font-medium py-2">
              Home
            </Link>
            <Link href="/solutions" className="block text-slate-600 hover:text-navy-500 font-medium py-2">
              Solutions
            </Link>
            <Link href="/about" className="block text-slate-600 hover:text-navy-500 font-medium py-2">
              About
            </Link>
            <Link href="/case-studies" className="block text-slate-600 hover:text-navy-500 font-medium py-2">
              Case Studies
            </Link>
            <Link href="/contact" className="block btn-primary w-full text-center mt-4">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
