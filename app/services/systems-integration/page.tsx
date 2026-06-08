import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Systems Integration | BusiQuip',
  description: 'Connect your software, hardware, and cloud platforms into one seamless ecosystem.',
};

export default function SystemsIntegrationPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80" alt="Systems Integration" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500/92 to-blue-700/85" />
        <div className="container-max relative z-10">
          <nav className="text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-gold-400">Services</Link>
            <span className="mx-2">/</span>
            <span>Systems Integration</span>
          </nav>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
            Systems <span className="text-gold-400">Integration</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Connect your software, hardware, and cloud platforms into one seamless, efficient ecosystem.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <Image src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80" alt="Systems Integration" fill className="object-cover" />
            </div>
            <div>
              <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">What This Service Is</p>
              <h2 className="text-4xl font-bold text-navy-500 mb-6">One Ecosystem, Zero Silos</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Many organisations in Eswatini run separate systems for accounting, HR, CRM, printing, and operations — none of which talk to each other. The result is duplicate data entry, slow reporting, and costly errors. BusiQuip's Systems Integration service connects your existing platforms so data flows automatically and your teams work from a single source of truth.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'API and middleware integration between business systems',
                  'ERP, CRM and accounting platform connectivity',
                  'Cloud and on-premise hybrid integration',
                  'Konica Minolta BizHub workflow integration',
                  'Data migration and consolidation',
                  'Testing, documentation and staff training',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 inline-flex items-center gap-2">
                Get a Free Assessment <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-navy-500 mb-12 text-center">Integration Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: 'Faster Operations', desc: 'Eliminate manual data re-entry. Information entered once flows automatically to every connected system.' },
              { icon: '📉', title: 'Fewer Errors', desc: 'Single source of truth across all platforms means no more discrepancies between departments.' },
              { icon: '📊', title: 'Real-Time Reporting', desc: 'Pull live dashboards from integrated data across finance, operations and customer records.' },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-navy-500 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-500 text-white text-center">
        <div className="container-max">
          <h2 className="text-4xl font-bold mb-6">Stop Running Disconnected Systems</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-xl mx-auto">Let us assess your integration gaps — free, no obligation.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-500 font-bold rounded-lg hover:bg-gold-400 transition-all text-lg">
            Book Free Assessment <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
