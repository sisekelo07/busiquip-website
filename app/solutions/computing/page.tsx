import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Computing Solutions | BusiQuip',
  description: 'HP ProBook notebooks, Dell Vostro desktops and Dell Venue tablets — fully configured for Eswatini enterprises.',
};

export default function ComputingPage() {
  return (
    <>
      <section className="relative py-32 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1600&q=80" alt="Computing Solutions" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500/92 to-blue-700/85" />
        <div className="container-max relative z-10">
          <nav className="text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/solutions" className="hover:text-gold-400">Solutions</Link>
            <span className="mx-2">/</span>
            <span>Computing Solutions</span>
          </nav>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
            Computing <span className="text-gold-400">Solutions</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Enterprise-grade HP and Dell computing hardware — procured, configured and deployed by certified technicians, with ongoing support.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">What This Solution Is</p>
              <h2 className="text-4xl font-bold text-navy-500 mb-6">The Right Hardware for Your Workforce</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Buying the wrong computing hardware for your organisation is an expensive mistake. Too underpowered and staff are frustrated; over-specified and you waste budget. BusiQuip works with HP and Dell as an authorised reseller to specify, procure, configure and deploy the right devices for each role in your business — pre-imaged, domain-joined and ready to work on day one.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                We also manage the full device lifecycle: warranty claims, repair, planned replacement and secure decommissioning so sensitive data never leaves on a discarded hard drive.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'HP ProBook business notebooks (authorised reseller)',
                  'Dell Vostro commercial desktops',
                  'Dell Venue tablets and 2-in-1 devices',
                  'Enterprise configuration and domain join',
                  'Software pre-installation and licensing',
                  'Warranty management and repair service',
                  'Planned device refresh programmes',
                  'Secure data erasure on decommissioned devices',
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 inline-flex items-center gap-2">
                Get a Computing Quote <ArrowRight size={18} />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <Image src="https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80" alt="Enterprise computing" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-navy-500 mb-12 text-center">Devices We Supply</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '💻', title: 'HP ProBook Notebooks', desc: 'Business-class laptops built for reliability and security. MIL-SPEC durability testing, vPro management capability and HP Sure View privacy screens.' },
              { icon: '🖥️', title: 'Dell Vostro Desktops', desc: 'Commercial desktops with small form-factor options for space-constrained offices. Upgradable, supportable, and right-sized for the budget.' },
              { icon: '📱', title: 'Dell Venue Tablets', desc: 'Ruggedised tablets for field staff, warehouse teams and executives who need a full Windows environment in a portable form factor.' },
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
          <h2 className="text-4xl font-bold mb-6">Need to Refresh Your Fleet?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-xl mx-auto">Tell us how many devices, what roles they serve, and we&apos;ll produce a specification and fixed price within 48 hours.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-500 font-bold rounded-lg hover:bg-gold-400 transition-all text-lg">
            Request a Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
