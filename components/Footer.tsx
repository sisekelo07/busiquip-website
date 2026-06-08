import Link from 'next/link';
import { Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-500 text-white">
      {/* Main Footer Content */}
      <div className="container-max py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gold-500 rounded-lg flex items-center justify-center">
                <span className="text-navy-500 font-bold">BQ</span>
              </div>
              <h3 className="font-bold text-lg">BusiQuip</h3>
            </div>
            <p className="text-slate-300 text-sm mb-4">
              Driving Africa's Digital Future since 1983
            </p>
            <p className="text-slate-400 text-xs">
              Established August 8, 1983 in Mbabane, Eswatini
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-bold text-lg mb-6">Solutions</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>
                <Link href="/solutions/office-automation" className="hover:text-gold-500 transition-colors">
                  Office Automation
                </Link>
              </li>
              <li>
                <Link href="/solutions/it-infrastructure" className="hover:text-gold-500 transition-colors">
                  IT Infrastructure
                </Link>
              </li>
              <li>
                <Link href="/solutions/digital-transformation" className="hover:text-gold-500 transition-colors">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link href="/solutions/data-security" className="hover:text-gold-500 transition-colors">
                  Data Security
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>
                <Link href="/about" className="hover:text-gold-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-gold-500 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:text-gold-500 transition-colors">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-slate-300 text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-gold-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">(+268) 2404 0156 / 2404 1422</p>
                  <p className="text-xs text-slate-400">24/7 Emergency Support</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-gold-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">info@busiquip.com</p>
                  <p className="text-xs text-slate-400">General inquiries</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Bypass Mantsholo Road</p>
                  <p className="text-xs text-slate-400">Eveni, Mbabane</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-600 pt-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-slate-600">
            <div>
              <p className="text-gold-500 text-2xl font-bold">40+</p>
              <p className="text-slate-300 text-xs">Years of Excellence</p>
            </div>
            <div>
              <p className="text-gold-500 text-2xl font-bold">36+</p>
              <p className="text-slate-300 text-xs">Enterprise Clients</p>
            </div>
            <div>
              <p className="text-gold-500 text-2xl font-bold">9</p>
              <p className="text-slate-300 text-xs">Certified Technicians</p>
            </div>
            <div>
              <p className="text-gold-500 text-2xl font-bold">99.9%</p>
              <p className="text-slate-300 text-xs">Uptime SLA</p>
            </div>
          </div>

          {/* Social & Legal */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <a href="#" className="text-slate-300 hover:text-gold-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-gold-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-300 hover:text-gold-500 transition-colors">
                <Facebook size={20} />
              </a>
            </div>

            <div className="text-center md:text-right text-slate-400 text-xs">
              <p>&copy; {currentYear} BusiQuip Ltd. All rights reserved.</p>
              <div className="flex items-center justify-center md:justify-end gap-4 mt-2">
                <Link href="/privacy" className="hover:text-gold-500 transition-colors">
                  Privacy Policy
                </Link>
                <span>•</span>
                <Link href="/terms" className="hover:text-gold-500 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Statement */}
      <div className="border-t border-slate-600 bg-navy-600 py-6">
        <div className="container-max text-center">
          <p className="text-gold-500 font-bold">Driving Africa's Digital Future</p>
          <p className="text-slate-400 text-xs mt-1">
            Enterprise Technology Partner | Government | Finance | Education | Utilities
          </p>
        </div>
      </div>
    </footer>
  );
}
