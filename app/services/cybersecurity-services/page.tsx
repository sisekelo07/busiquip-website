import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Cybersecurity Services | BusiQuip',
  description: 'Protect your organisation with Clearline surge protection, security audits, and compliance services.',
};

export default function CybersecurityServicesPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80" alt="Cybersecurity" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500/92 to-blue-700/85" />
        <div className="container-max relative z-10">
          <nav className="text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-gold-400">Services</Link>
            <span className="mx-2">/</span>
            <span>Cybersecurity Services</span>
          </nav>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
            Cybersecurity <span className="text-gold-400">Services</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Protect your organisation from physical and digital threats with Eswatini's most trusted security partner.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" alt="Cybersecurity" fill className="object-cover" />
            </div>
            <div>
              <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">What This Service Is</p>
              <h2 className="text-4xl font-bold text-navy-500 mb-6">Security That Goes Beyond Antivirus</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Most cyber breaches in Eswatini begin with physical vulnerabilities — a power surge, an unsecured printer, or an untrained employee. BusiQuip addresses security at every layer: physical infrastructure protection through our exclusive Clearline distributorship, data safeguarding, secure document disposal with Kobra shredders, and staff training.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Clearline surge & lightning protection (sole distributor)',
                  'Data, Power, Telecom and Fibre protection',
                  'Security audits and vulnerability assessments',
                  'Kobra high-security cross-cut and micro-cut shredding',
                  'Staff cybersecurity awareness training',
                  'Compliance reviews for financial and government sectors',
                ].map((item) => (
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
          <h2 className="text-3xl font-bold text-navy-500 mb-12 text-center">Security Layers We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Physical Protection', desc: 'Clearline surge protection for data lines, power, telecom and fibre. Prevent hardware damage before it happens.' },
              { icon: '📄', title: 'Data Disposal', desc: 'Kobra shredders for high-security document destruction. Prevent sensitive data leaving your premises.' },
              { icon: '🎓', title: 'Human Layer', desc: 'Staff training on phishing, social engineering and safe data handling — the most overlooked security layer.' },
            ].map((item) => (
              <div key={item.title} className="service-card-3d">
                <span className="card-spin-bg" aria-hidden="true" />
                <span className="card-bg-mask" aria-hidden="true" />
                <div className="card-content" style={{alignItems:'center',textAlign:'center'}}>
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
          <h2 className="text-4xl font-bold mb-6">Is Your Organisation Truly Secure?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-xl mx-auto">Book a free security assessment and find out where you're exposed.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-500 font-bold rounded-lg hover:bg-gold-400 transition-all text-lg">
            Book Free Assessment <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
