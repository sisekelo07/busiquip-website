import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Document Management | BusiQuip',
  description: 'OCE wide format printing, Kobra shredding and folding/finishing systems for complete document control in Eswatini.',
};

export default function DocumentManagementPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1586772002130-b0f3daa6288b?w=1600&q=80" alt="Document Management" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500/92 to-blue-700/85" />
        <div className="container-max relative z-10">
          <nav className="text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/solutions" className="hover:text-gold-400">Solutions</Link>
            <span className="mx-2">/</span>
            <span>Document Management</span>
          </nav>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
            Document <span className="text-gold-400">Management</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            From wide-format OCE printing to high-security Kobra shredding — complete control over every document in your organisation.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <Image src="https://images.unsplash.com/photo-1568658313963-d6b5a1b73d47?w=800&q=80" alt="Document management" fill className="object-cover" />
            </div>
            <div>
              <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">What This Solution Is</p>
              <h2 className="text-4xl font-bold text-navy-500 mb-6">Total Control Over Your Documents</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Documents are at the centre of every Eswatini business — contracts, plans, reports, invoices, compliance records. Managing them poorly costs money, causes delays and creates compliance risk. BusiQuip&apos;s document management solution covers every stage of the document lifecycle: creation, distribution, storage, retrieval and secure destruction.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                As the authorised reseller for OCE wide-format systems and Kobra shredders, we supply the hardware and provide the service contracts, maintenance and consumables to keep your document workflow running without interruption.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'OCE wide-format printing for plans, maps and signage',
                  'Kobra cross-cut and micro-cut shredders',
                  'Document folding and finishing systems',
                  'USB direct document scanning',
                  'Scan-to-email and scan-to-folder workflows',
                  'Secure print release with user authentication',
                  'Document archiving and retrieval systems',
                  'Service and maintenance contracts',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 inline-flex items-center gap-2">
                Talk to a Specialist <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-navy-500 mb-12 text-center">What We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🖨️', title: 'Wide Format Printing', desc: 'OCE large-format printers for technical drawings, architectural plans, posters and banners — used by engineering firms, government and advertising agencies across Eswatini.' },
              { icon: '🗃️', title: 'Secure Shredding', desc: 'Kobra cross-cut and micro-cut shredders meeting DIN 66399 security levels. Destroy sensitive documents without risk of reconstruction or data leakage.' },
              { icon: '📄', title: 'Finishing Systems', desc: 'Document folding, binding and finishing equipment to produce professional output in-house — eliminating outsourcing costs and turnaround delays.' },
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
          <h2 className="text-4xl font-bold mb-6">Take Control of Your Documents</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-xl mx-auto">Speak to a specialist about the right document management solution for your volume and budget.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-500 font-bold rounded-lg hover:bg-gold-400 transition-all text-lg">
            Get in Touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
