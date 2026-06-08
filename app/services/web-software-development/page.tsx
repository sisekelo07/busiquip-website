import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Web & Software Development | BusiQuip',
  description: 'Custom websites, e-commerce platforms, business management systems, and mobile apps built for the Eswatini market — hosted, maintained, and supported locally.',
};

export default function WebSoftwareDevelopmentPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=80"
          alt="Web & Software Development"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500/92 to-blue-700/85" />
        <div className="container-max relative z-10">
          <nav className="text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-gold-400">Services</Link>
            <span className="mx-2">/</span>
            <span>Web & Software Development</span>
          </nav>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-6 max-w-3xl leading-tight">
            Web & Software <span className="text-gold-400">Development</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            Custom digital solutions built for the Eswatini market — designed, hosted, maintained, and supported locally.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
                alt="Software Development"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">What This Service Is</p>
              <h2 className="text-4xl font-bold text-navy-500 mb-6">Software Built Around Your Business</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Off-the-shelf software rarely fits the way Eswatini businesses actually work. BusiQuip designs and builds custom websites, web applications, and business management systems that are tailored to your processes — and backed by a local team that understands your environment.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Professional corporate and e-commerce websites',
                  'Custom business management and ERP systems',
                  'Mobile-responsive web applications',
                  'Payment gateway and M-PESA integration',
                  'Inventory, HR, and payroll management tools',
                  'Local hosting, domain management, and SSL',
                  'Ongoing maintenance, support, and updates',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 inline-flex items-center gap-2">
                Discuss Your Project <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-navy-500 mb-12 text-center">What We Build</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌐',
                title: 'Websites & E-Commerce',
                desc: 'Fast, secure corporate websites and online stores with local payment integration. Designed to convert visitors into customers.',
              },
              {
                icon: '🗂️',
                title: 'Business Management Systems',
                desc: 'Custom ERP, CRM, inventory, and HR platforms that replace spreadsheets and paper-based workflows with efficient digital processes.',
              },
              {
                icon: '📱',
                title: 'Mobile & Web Applications',
                desc: 'Cross-platform mobile and web apps that give your staff and customers access to your services from any device, anywhere.',
              },
              {
                icon: '💳',
                title: 'Payment & API Integration',
                desc: 'Connect your platform to M-PESA, EFT, and local payment gateways. We also integrate third-party APIs and government portals.',
              },
              {
                icon: '📊',
                title: 'Reporting & Dashboards',
                desc: 'Real-time dashboards and automated reports that give management instant visibility into business performance.',
              },
              {
                icon: '🛡️',
                title: 'Hosting & Maintenance',
                desc: 'Local and cloud hosting, SSL certificates, uptime monitoring, security patches, and priority support — all under one roof.',
              },
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

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">How It Works</p>
            <h2 className="text-3xl font-bold text-navy-500">Our Development Process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'We meet to understand your goals, users, and existing processes.' },
              { step: '02', title: 'Design', desc: 'Wireframes and UI designs reviewed and approved by your team before a single line of code is written.' },
              { step: '03', title: 'Build & Test', desc: 'Iterative development with regular demos. You see progress every step of the way.' },
              { step: '04', title: 'Launch & Support', desc: 'Deployment, staff training, and an ongoing support agreement so you\'re never left on your own.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white font-bold text-lg flex items-center justify-center mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-navy-500 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-500 text-white text-center">
        <div className="container-max">
          <h2 className="text-4xl font-bold mb-6">Have a Project in Mind?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-xl mx-auto">
            Tell us what you need and we&apos;ll scope it out — no commitment required.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-500 font-bold rounded-lg hover:bg-gold-400 transition-all text-lg"
          >
            Start a Conversation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
