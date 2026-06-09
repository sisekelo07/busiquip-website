import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Data Security | BusiQuip',
  description: 'Clearline surge protection, power shielding and secure Kobra data disposal for Eswatini enterprises.',
};

export default function DataSecurityPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80" alt="Data Security" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500/92 to-blue-700/85" />
        <div className="container-max relative z-10">
          <nav className="text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/solutions" className="hover:text-gold-400">Solutions</Link>
            <span className="mx-2">/</span>
            <span>Data Security</span>
          </nav>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
            Data <span className="text-gold-400">Security</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Physical and digital protection for your most critical assets — from Clearline surge protection to secure Kobra document disposal.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" alt="Data security" fill className="object-cover" />
            </div>
            <div>
              <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">What This Solution Is</p>
              <h2 className="text-4xl font-bold text-navy-500 mb-6">Security at Every Layer</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Most cyber breaches in Eswatini begin with physical vulnerabilities — a power surge, an unsecured printer, or sensitive documents left in a recycling bin. BusiQuip&apos;s Data Security solution addresses protection at every layer: physical infrastructure through our exclusive Clearline distributorship, and secure document disposal through our Kobra shredder range.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Clearline surge & lightning protection (sole distributor)',
                  'Data, Power, Telecom and Fibre line protection',
                  'Security audits and vulnerability assessments',
                  'Kobra high-security cross-cut and micro-cut shredding',
                  'Staff cybersecurity awareness training',
                  'Compliance reviews for financial and government sectors',
                  'Secure document destruction certificates',
                  'Physical access control consultancy',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 inline-flex items-center gap-2">
                Get a Security Assessment <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-navy-500 mb-12 text-center">Three Layers of Protection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Physical Protection', desc: 'Clearline surge protection for data lines, power, telecom and fibre. Eswatini\'s sole distributor — prevent expensive hardware damage before it happens.' },
              { icon: '🗂️', title: 'Secure Disposal', desc: 'Kobra cross-cut and micro-cut shredders for high-security document destruction. Certificates of destruction for compliance purposes.' },
              { icon: '🎓', title: 'Human Layer', desc: 'Staff training on phishing, social engineering and safe data handling — the most overlooked and most cost-effective security investment.' },
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
          <h2 className="text-4xl font-bold mb-6">Is Your Organisation Truly Protected?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-xl mx-auto">Book a free security assessment and find out where you&apos;re exposed.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-500 font-bold rounded-lg hover:bg-gold-400 transition-all text-lg">
            Book Free Assessment <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
