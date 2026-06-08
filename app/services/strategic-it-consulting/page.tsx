import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Strategic IT Consulting | BusiQuip',
  description: 'Vendor-independent IT strategy for Eswatini enterprises. Align IT spend with revenue growth.',
};

export default function StrategicITConsultingPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80" alt="Strategic IT Consulting" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500/92 to-blue-700/85" />
        <div className="container-max relative z-10">
          <nav className="text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-gold-400">Services</Link>
            <span className="mx-2">/</span>
            <span>Strategic IT Consulting</span>
          </nav>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
            Strategic IT <span className="text-gold-400">Consulting</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Vendor-independent IT strategy that aligns technology spend with your business goals and revenue growth.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">What This Service Is</p>
              <h2 className="text-4xl font-bold text-navy-500 mb-6">IT Strategy Built for Eswatini Business</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Most businesses in Eswatini don't need more technology — they need the right technology, in the right order, at the right cost in lilangeni. BusiQuip's Strategic IT Consulting practice gives you a senior, vendor-independent advisor who reviews your current systems, understands where the business is heading over the next 12 to 36 months, and produces a clear roadmap that aligns IT spend with revenue.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our consultants have worked across Eswatini's financial services, public sector, sugar industry, retail and NGO landscape, so the advice is grounded in what actually works locally — not a copy-paste of an American MBA case study.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Technology audit of your current environment',
                  '12–36 month IT roadmap aligned to business strategy',
                  'Vendor-independent recommendations',
                  'Budget planning in lilangeni',
                  'Board-ready presentation of findings',
                  'Ongoing advisory retainer available',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 inline-flex items-center gap-2">
                Book a Free Consultation <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80" alt="IT Consulting" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-navy-500 mb-12 text-center">What You Get</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🔍', title: 'Current-State Audit', desc: 'A full review of your existing infrastructure, software licences, vendor contracts and IT spending patterns.' },
              { icon: '🗺️', title: 'Clear Roadmap', desc: 'A prioritised, costed plan for the next 12–36 months that the board and IT team can follow together.' },
              { icon: '📊', title: 'Measurable Outcomes', desc: 'Every recommendation is tied to a business outcome — cost reduction, uptime improvement, or revenue enablement.' },
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
          <h2 className="text-4xl font-bold mb-6">Ready to Align Your IT with Your Business?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-xl mx-auto">Get a free 1-hour consultation with our senior IT strategist.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-500 font-bold rounded-lg hover:bg-gold-400 transition-all text-lg">
            Book Free Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
