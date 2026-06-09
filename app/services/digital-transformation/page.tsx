import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Digital Transformation | BusiQuip',
  description: 'Move from paper and legacy systems to modern digital workflows. Cloud, automation and payments.',
};

export default function DigitalTransformationPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80" alt="Digital Transformation" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500/92 to-blue-700/85" />
        <div className="container-max relative z-10">
          <nav className="text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-gold-400">Services</Link>
            <span className="mx-2">/</span>
            <span>Digital Transformation</span>
          </nav>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
            Digital <span className="text-gold-400">Transformation</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Move from paper and legacy systems to modern digital workflows that drive real, measurable business outcomes.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">What This Service Is</p>
              <h2 className="text-4xl font-bold text-navy-500 mb-6">From Legacy to Digital — Without the Disruption</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Digital transformation is not about buying the latest software — it's about changing how your organisation works. BusiQuip guides Eswatini enterprises through cloud migration, process automation, digital payments, and paperless workflows in a way that is phased, affordable, and tailored to your team's pace of change.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Cloud services implementation (Microsoft 365, Google Workspace)',
                  'Digital payment solutions integration',
                  'Custom business software development',
                  'Paper-to-digital workflow conversion',
                  'Process automation and scheduling',
                  'Staff training and change management',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 inline-flex items-center gap-2">
                  Start Your Transformation <ArrowRight size={18} />
                </Link>
                <Link href="/services/cybersecurity-services" className="btn-secondary inline-flex items-center gap-2">
                  Learn More: Cybersecurity <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <Image src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80" alt="Digital Transformation" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-navy-500 mb-12 text-center">Transformation Phases</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Assess', desc: 'Audit current systems and identify the highest-value transformation opportunities.' },
              { step: '02', title: 'Plan', desc: 'Build a phased roadmap with costs in lilangeni and a realistic timeline.' },
              { step: '03', title: 'Implement', desc: 'Roll out changes with minimal disruption, starting with quick wins.' },
              { step: '04', title: 'Optimise', desc: 'Monitor results, train staff, and continuously improve after go-live.' },
            ].map((item) => (
              <div key={item.step} className="service-card-3d">
                <span className="card-spin-bg" aria-hidden="true" />
                <span className="card-bg-mask" aria-hidden="true" />
                <div className="card-content" style={{alignItems:'center',textAlign:'center'}}>
                  <div className="card-icon-3d" style={{fontSize:'18px',fontWeight:800,color:'#D4AF37'}}>{item.step}</div>
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
          <p className="text-xl text-slate-200 mb-8 max-w-xl mx-auto">Book a free session and we'll show you exactly where to start.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-500 font-bold rounded-lg hover:bg-gold-400 transition-all text-lg">
            Book Free Session <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
