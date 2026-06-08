import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'IT & Networking Services | BusiQuip',
  description: 'Network infrastructure, ADC Krone cabling, server upgrades, and proactive IT management.',
};

export default function ITNetworkingPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=1600&q=80" alt="IT & Networking" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500/92 to-blue-700/85" />
        <div className="container-max relative z-10">
          <nav className="text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-gold-400">Services</Link>
            <span className="mx-2">/</span>
            <span>IT & Networking Services</span>
          </nav>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
            IT & Networking <span className="text-gold-400">Services</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Reliable network infrastructure, structured cabling, and IT management backed by proactive SLAs.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">What This Service Is</p>
              <h2 className="text-4xl font-bold text-navy-500 mb-6">The Infrastructure Your Business Runs On</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                A slow or unreliable network costs your organisation money every single day. BusiQuip designs, installs, and manages enterprise network infrastructure across Eswatini — from ADC Krone structured cabling to managed switches, server upgrades, and 24/7 proactive monitoring.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Network design and architecture planning',
                  'ADC Krone structured cabling installation',
                  'Managed switches and router configuration',
                  'Server upgrades and virtualisation',
                  'Wi-Fi coverage design and deployment',
                  'Proactive monitoring with SLA response times',
                ].map((item) => (
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
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80" alt="Networking" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-navy-500 mb-12 text-center">Our SLA Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: '99.9%', label: 'Uptime Target', desc: 'Proactive monitoring catches issues before they cause downtime.' },
              { value: '4hr', label: 'On-Site Response', desc: 'Critical network faults receive an on-site technician within 4 hours.' },
              { value: '24/7', label: 'Emergency Support', desc: 'Round-the-clock coverage for mission-critical infrastructure.' },
            ].map((item) => (
              <div key={item.label} className="card text-center border-l-4 border-gold-500">
                <div className="text-4xl font-bold text-gold-500 mb-2">{item.value}</div>
                <h3 className="text-xl font-bold text-navy-500 mb-3">{item.label}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-500 text-white text-center">
        <div className="container-max">
          <h2 className="text-4xl font-bold mb-6">Is Your Network Holding You Back?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-xl mx-auto">Get a free network health check from our certified engineers.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-500 font-bold rounded-lg hover:bg-gold-400 transition-all text-lg">
            Book Free Network Check <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
