import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'IT Infrastructure | BusiQuip',
  description: 'Network switches, server upgrades, ADC Krone structured cabling and IT consultancy for Eswatini enterprises.',
};

export default function ITInfrastructurePage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80" alt="IT Infrastructure" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500/92 to-blue-700/85" />
        <div className="container-max relative z-10">
          <nav className="text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/solutions" className="hover:text-gold-400">Solutions</Link>
            <span className="mx-2">/</span>
            <span>IT Infrastructure</span>
          </nav>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
            IT <span className="text-gold-400">Infrastructure</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Reliable, scalable network and server infrastructure designed and deployed by certified engineers — built to last.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <Image src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80" alt="Network infrastructure" fill className="object-cover" />
            </div>
            <div>
              <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">What This Solution Is</p>
              <h2 className="text-4xl font-bold text-navy-500 mb-6">The Foundation Every Organisation Needs</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Poor network infrastructure is the silent killer of productivity. Slow Wi-Fi, dropped connections, overloaded switches and ageing servers cost Eswatini businesses millions of lilangeni every year in lost time and frustrated staff.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                BusiQuip designs, supplies and installs enterprise-grade IT infrastructure — from ADC Krone structured cabling through to managed switch deployment, server upgrades and ongoing network management. Every project is backed by a proactive SLA so issues are caught before they become outages.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'ADC Krone structured cabling (authorised installer)',
                  'Managed switch and router deployment',
                  'Server procurement, configuration and upgrades',
                  'Wireless access point design and installation',
                  'Network monitoring with proactive SLA',
                  'Firewall configuration and network segmentation',
                  'VLAN design and implementation',
                  'IT consultancy and capacity planning',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 inline-flex items-center gap-2">
                Get a Network Assessment <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-navy-500 mb-12 text-center">Infrastructure We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🔌', title: 'Structured Cabling', desc: 'ADC Krone Cat6/Cat6A and fibre cabling installations — clean, labelled, tested and certified to support your network for 15+ years.' },
              { icon: '🖥️', title: 'Server & Storage', desc: 'Server procurement, RAID configuration, virtualisation setup and scheduled maintenance to keep your core systems running reliably.' },
              { icon: '📡', title: 'Network & Wireless', desc: 'Enterprise-grade switches, managed Wi-Fi, firewall and VLAN segmentation — designed for performance, security and future growth.' },
            ].map(item => (
              <div key={item.title} className="service-card-3d">
                <span className="card-spin-bg" aria-hidden="true" />
                <span className="card-bg-mask" aria-hidden="true" />
                <div className="card-content" style={{ alignItems: 'center', textAlign: 'center' }}>
                  <div className="card-icon-3d">{item.icon}</div>
                  <h3 className="text-xl font-bold text-navy-500 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-500 text-white text-center">
        <div className="container-max">
          <h2 className="text-4xl font-bold mb-6">Ready to Upgrade Your Infrastructure?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-xl mx-auto">Book a free site assessment and get a fixed-price proposal within 5 working days.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-500 font-bold rounded-lg hover:bg-gold-400 transition-all text-lg">
            Book Free Assessment <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
