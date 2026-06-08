import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Enterprise Solutions | BusiQuip',
  description: 'Office automation, IT infrastructure, digital transformation, and data security solutions for enterprises.',
};

const solutions = [
  {
    title: 'Office Automation',
    desc: 'Konica Minolta BizHub solutions for document workflow optimization, cost reduction, and productivity.',
    image: 'https://images.unsplash.com/photo-1612815292957-cde61a4ec2b8?w=800&q=80',
    href: '/solutions/office-automation',
    benefits: ['Document management', 'Service agreements', 'Remote monitoring', 'Leasing options'],
  },
  {
    title: 'IT Infrastructure',
    desc: 'Network switches, server upgrades, ADC Krone structured cabling and IT consultancy services.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    href: '/solutions/it-infrastructure',
    benefits: ['Network switches', 'Server upgrades', 'Structured cabling', 'IT consultancy'],
  },
  {
    title: 'Digital Transformation',
    desc: 'Cloud migration, digital payment solutions and custom software for a modern digital business.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    href: '/solutions/digital-transformation',
    benefits: ['Cloud services', 'Digital payments', 'Custom software', 'Training'],
  },
  {
    title: 'Data Security',
    desc: 'Clearline Protection (sole distributor), power surge shielding, and secure Kobra data disposal.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    href: '/solutions/data-security',
    benefits: ['Surge protection', 'Data safeguarding', 'Secure disposal', 'Fibre protection'],
  },
  {
    title: 'Computing Solutions',
    desc: 'HP ProBook notebooks, Dell Vostro desktops, Dell Venue tablets — fully configured for enterprise.',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80',
    href: '/solutions/computing',
    benefits: ['HP ProBook notebooks', 'Dell Vostro desktops', 'Dell Venue tablets', 'Enterprise deployment'],
  },
  {
    title: 'Document Management',
    desc: 'OCE wide format printing, Kobra shredding, and folding/finishing systems for complete document control.',
    image: 'https://images.unsplash.com/photo-1586772002130-b0f3daa6288b?w=800&q=80',
    href: '/solutions/document-management',
    benefits: ['Wide format printing', 'High-security shredding', 'Folding/finishing', 'USB document scanning'],
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80"
          alt="Enterprise solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500/92 to-blue-700/85"></div>
        <div className="container-max relative z-10">
          <nav className="text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="mx-2">/</span>
            <span>Solutions</span>
          </nav>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl leading-tight">
            Comprehensive Enterprise Solutions
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            End-to-end technology solutions backed by proactive SLAs, certified expertise, and 40+ years of operational excellence.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map(s => (
              <Link key={s.title} href={s.href} className="group card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 flex flex-col">
                <div className="relative rounded-xl overflow-hidden h-48 mb-6 -mx-2 -mt-2">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold text-navy-500 mb-3">{s.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-grow">{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.benefits.map(b => (
                    <li key={b} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle size={15} className="text-gold-500 flex-shrink-0" />{b}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-3 transition-all mt-auto">
                  Learn More <ArrowRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industry section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">Industries Served</p>
            <h2 className="text-4xl font-bold text-navy-500 mb-4">Solutions for Every Sector</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { emoji: '🏛️', title: 'Government', desc: 'Ministry of Defence, High Court, City Council Mbabane', image: 'https://images.unsplash.com/photo-1541872705-1f73c6400ec9?w=600&q=80' },
              { emoji: '🏦', title: 'Finance', desc: 'Standard Bank, Eswatini Bank, FINCORP, Tibiyo Insurance', image: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=600&q=80' },
              { emoji: '📚', title: 'Education', desc: 'University of Eswatini (UNISWA), Exams Council', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80' },
              { emoji: '⚡', title: 'Utilities', desc: 'Swaziland Electricity Board, Water Services, Usutu Forest', image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80' },
            ].map(ind => (
              <div key={ind.title} className="group relative rounded-2xl overflow-hidden h-64 cursor-pointer">
                <Image src={ind.image} alt={ind.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-500/90 to-navy-500/30"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-2xl mb-2">{ind.emoji}</div>
                  <h3 className="text-white font-bold text-lg mb-1">{ind.title}</h3>
                  <p className="text-slate-300 text-xs">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-500 text-white text-center">
        <div className="container-max">
          <h2 className="text-4xl font-bold mb-6">Find the Right Solution for Your Organization</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your specific needs and challenges.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-500 font-bold rounded-lg hover:bg-gold-400 transition-all text-lg">
            Schedule Free Consultation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  );
}
