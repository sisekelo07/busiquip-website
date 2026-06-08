import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Services | BusiQuip',
  description: 'Enterprise IT services including consulting, systems integration, digital transformation, cybersecurity, networking, and web development.',
};

const services = [
  {
    title: 'Strategic IT Consulting',
    desc: 'Vendor-independent IT strategy aligned to your business goals. We review your systems, understand where your business is heading, and produce a clear roadmap that aligns IT spend with revenue.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    href: '/services/strategic-it-consulting',
    icon: '🎯',
  },
  {
    title: 'Systems Integration',
    desc: 'Connect your software, hardware, and cloud platforms into one seamless ecosystem. We eliminate data silos and manual workarounds so your teams work faster and smarter.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    href: '/services/systems-integration',
    icon: '🔗',
  },
  {
    title: 'Digital Transformation',
    desc: 'Move from paper and legacy systems to modern digital workflows. Cloud migration, process automation, digital payments and custom software that drives real business outcomes.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    href: '/services/digital-transformation',
    icon: '⚡',
  },
  {
    title: 'Cybersecurity Services',
    desc: 'Protect your organisation from modern threats. Clearline surge protection, data safeguarding, security audits, compliance reviews, and staff awareness training.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    href: '/services/cybersecurity-services',
    icon: '🔒',
  },
  {
    title: 'IT & Networking Services',
    desc: 'Network infrastructure design, ADC Krone structured cabling, switch deployment, server upgrades, and ongoing network management with proactive SLAs.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
    href: '/services/it-networking-services',
    icon: '🌐',
  },
  {
    title: 'Web & Software Development',
    desc: 'Custom websites, e-commerce platforms, business management systems, and mobile apps built for the Eswatini market — hosted, maintained, and supported locally.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80',
    href: '/services/web-software-development',
    icon: '💻',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80" alt="Services" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500/92 to-blue-700/85" />
        <div className="container-max relative z-10">
          <nav className="text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="mx-2">/</span>
            <span>Services</span>
          </nav>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl leading-tight">
            Enterprise <span className="text-gold-400">Services</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            From strategic consulting to web development — comprehensive technology services tailored for Eswatini enterprises.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">What We Do</p>
            <h2 className="text-4xl font-bold text-navy-500 mb-4">Our Services</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Six specialised service areas covering every aspect of your technology needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="group card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 flex flex-col">
                <div className="relative rounded-xl overflow-hidden h-44 mb-6 -mx-2 -mt-2">
                  <Image src={s.image} alt={s.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-navy-500/40" />
                  <div className="absolute top-4 left-4 text-3xl">{s.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-navy-500 mb-3">{s.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">{s.desc}</p>
                <div className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-3 transition-all mt-auto">
                  Learn More <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Strip */}
      <section className="bg-navy-500 py-16">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: '40+', label: 'Years Experience' },
              { value: '36+', label: 'Enterprise Clients' },
              { value: '9', label: 'Certified Technicians' },
              { value: '99.9%', label: 'Uptime SLA' },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-bold text-gold-400 mb-2">{s.value}</p>
                <p className="text-slate-300 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-navy-500 mb-6">Not Sure Which Service You Need?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Schedule a free 1-hour consultation and our experts will assess your situation and recommend the right path forward.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all text-lg">
            Schedule Free Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
