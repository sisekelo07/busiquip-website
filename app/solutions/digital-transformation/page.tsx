import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Digital Transformation | BusiQuip',
  description: 'Cloud migration, digital payment solutions and custom software for modern Eswatini enterprises.',
};

export default function DigitalTransformationSolutionPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80" alt="Digital Transformation" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500/92 to-blue-700/85" />
        <div className="container-max relative z-10">
          <nav className="text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/solutions" className="hover:text-gold-400">Solutions</Link>
            <span className="mx-2">/</span>
            <span>Digital Transformation</span>
          </nav>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
            Digital <span className="text-gold-400">Transformation</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Move from paper and legacy systems to modern digital workflows — cloud, automation, payments and custom software tailored for Eswatini.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">What This Solution Is</p>
              <h2 className="text-4xl font-bold text-navy-500 mb-6">From Legacy to Digital — Without the Disruption</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Digital transformation is not about buying the latest software — it is about changing how your organisation works. BusiQuip guides Eswatini enterprises through cloud migration, process automation, digital payments and paperless workflows in a way that is phased, affordable and tailored to your team&apos;s pace.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Microsoft 365 and Google Workspace deployment',
                  'Cloud migration from on-premise servers',
                  'M-PESA and digital payment gateway integration',
                  'Custom business management systems',
                  'Paper-to-digital workflow conversion',
                  'Process automation and scheduling',
                  'Staff training and change management',
                  'Ongoing support and optimisation',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 inline-flex items-center gap-2">
                Start Your Transformation <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <Image src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80" alt="Digital transformation" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-navy-500 mb-12 text-center">What We Transform</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '☁️', title: 'Cloud Services', desc: 'Microsoft 365, Google Workspace, SharePoint and cloud file storage — giving your team secure access from any device, anywhere.' },
              { icon: '💳', title: 'Digital Payments', desc: 'M-PESA, EFT and payment gateway integration so your customers can pay the way they prefer — faster, safer, reconciled automatically.' },
              { icon: '💻', title: 'Custom Software', desc: 'Bespoke HR, inventory, payroll and approval systems built around your processes — not the other way around.' },
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
          <h2 className="text-4xl font-bold mb-6">Ready to Go Digital?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-xl mx-auto">Book a free session and we&apos;ll show you exactly where to start and what the return looks like.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-500 font-bold rounded-lg hover:bg-gold-400 transition-all text-lg">
            Book Free Session <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
