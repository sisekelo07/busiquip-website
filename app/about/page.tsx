import { CheckCircle, Users, Award, TrendingUp, Target, Eye } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'About BusiQuip | 40+ Years of Enterprise Excellence',
  description: 'BusiQuip: Founded 1983, 40+ years driving digital transformation for government, finance, and education sectors in Eswatini.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
          alt="BusiQuip office"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500/92 to-blue-700/85"></div>
        <div className="container-max relative z-10">
          <nav className="text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="mx-2">/</span>
            <span>About Us</span>
          </nav>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl leading-tight">
            Driving Africa's Digital Future Since{' '}
            <span className="text-gold-400">1983</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl">
            From a modest office in Mbabane to Eswatini's premier enterprise technology partner — 40+ years of delivering excellence.
          </p>
        </div>
      </section>

      {/* Story + Stats */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">Our Journey</p>
              <h2 className="text-4xl font-bold text-navy-500 mb-8">Four Decades of Technological Leadership</h2>

              <div className="space-y-8">
                <div className="flex gap-5 pb-8 border-b border-slate-200">
                  <div className="flex-shrink-0 w-14 h-14 bg-gold-500 rounded-lg flex items-center justify-center">
                    <span className="text-navy-500 font-bold text-sm">1983</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-500 text-lg mb-2">The Foundation</h3>
                    <p className="text-slate-600">Founded on August 8, 1983 in Mbabane, Eswatini. Built a reputation for reliability, expertise, and customer-first service from day one.</p>
                  </div>
                </div>

                <div className="flex gap-5 pb-8 border-b border-slate-200">
                  <div className="flex-shrink-0 w-14 h-14 bg-gold-500 rounded-lg flex items-center justify-center">
                    <span className="text-navy-500 font-bold text-sm">2000s</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-500 text-lg mb-2">Regional Expansion</h3>
                    <p className="text-slate-600">Expanded from office equipment to comprehensive technology solutions. Earned Konica Minolta Principal Agency status and grew our certified team.</p>
                  </div>
                </div>

                <div className="flex gap-5 pb-8 border-b border-slate-200">
                  <div className="flex-shrink-0 w-14 h-14 bg-gold-500 rounded-lg flex items-center justify-center">
                    <span className="text-navy-500 font-bold text-xs text-center">Today</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-500 text-lg mb-2">Enterprise Leadership</h3>
                    <p className="text-slate-600">36+ major enterprise clients, 9 certified technicians, and a comprehensive solutions portfolio spanning IT, cloud, security, and automation.</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 bg-navy-500 rounded-lg flex items-center justify-center">
                    <span className="text-gold-400 font-bold text-xs text-center">Future</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-500 text-lg mb-2">Vision for Africa</h3>
                    <p className="text-slate-600">Committed to being the catalyst for digital empowerment across Africa — providing the tools, skills, and infrastructure for businesses to thrive globally.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Images grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden h-64">
                <Image
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                  alt="Professional team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-64 mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80"
                  alt="Enterprise technology"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-64">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80"
                  alt="Office workspace"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-64 mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80"
                  alt="IT infrastructure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-navy-500 rounded-2xl p-12">
            {[
              { value: '40+', label: 'Years Excellence', sub: 'Since 1983' },
              { value: '36+', label: 'Enterprise Clients', sub: 'Govt, Finance, Education' },
              { value: '9', label: 'Expert Technicians', sub: 'Manufacturer certified' },
              { value: '99.9%', label: 'Uptime SLA', sub: 'Proactive monitoring' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <p className="text-4xl font-bold text-gold-400 mb-2">{s.value}</p>
                <p className="text-white font-semibold">{s.label}</p>
                <p className="text-slate-400 text-xs mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">Our Purpose</p>
            <h2 className="text-4xl font-bold text-navy-500 mb-4">Mission, Vision & Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <div className="mv-card">
              {/* Large watermark word */}
              <span className="mv-watermark">MISSION</span>
              {/* Background icon */}
              <div className="mv-icon-bg">
                <Target size={260} strokeWidth={0.8} />
              </div>
              <div className="mv-content">
                <p className="mv-label">MISSION</p>
                <h3 className="mv-title">Drive Africa&apos;s digital transformation.</h3>
                <p className="mv-desc">
                  We deliver digital platforms, training, connectivity, and secure technology solutions that modernize operations, improve productivity, and unlock new economic opportunities.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="mv-card">
              <span className="mv-watermark">VISION</span>
              <div className="mv-icon-bg">
                <Eye size={260} strokeWidth={0.8} />
              </div>
              <div className="mv-content">
                <p className="mv-label">VISION</p>
                <h3 className="mv-title">Build a digitally empowered Africa.</h3>
                <p className="mv-desc">
                  Businesses, institutions, and communities should have the tools, skills, and infrastructure to thrive in a connected global economy.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: '✓', title: 'Integrity & Excellence', desc: 'Uncompromising honesty and exceptional results. 40 years of keeping promises.' },
              { icon: '🤝', title: 'Customer Partnership', desc: 'We see ourselves as extensions of your team. Your success is our success.' },
              { icon: '⚡', title: 'Innovation & Reliability', desc: 'Cutting-edge technology balanced with proven, rock-solid stability.' },
              { icon: '🎓', title: 'Continuous Learning', desc: 'Our team undergoes ongoing training to stay current with enterprise technologies.' },
            ].map(v => (
              <div key={v.title} className="service-card-3d">
                <span className="card-spin-bg" aria-hidden="true" />
                <span className="card-bg-mask" aria-hidden="true" />
                <div className="card-content">
                  <div className="card-icon-3d">{v.icon}</div>
                  <h4 className="text-lg font-bold text-navy-500 mb-3">{v.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">The BusiQuip Advantage</p>
              <h2 className="text-4xl font-bold text-navy-500 mb-10">What Sets Us Apart</h2>
              <div className="space-y-8">
                {[
                  { icon: Award, title: 'Sole Authorized Dealerships', desc: 'Authentic Konica Minolta, Brother, HP/Dell & OCE products with valid warranties. Principal agency status means genuine quality and direct manufacturer support.' },
                  { icon: Users, title: 'Certified Expertise', desc: '9 manufacturer-certified technicians with decades of combined experience. Continuous training ensures cutting-edge knowledge and professional delivery.' },
                  { icon: TrendingUp, title: 'Rapid Response', desc: 'Full local spares and consumables stock in Mbabane. On-site and in-house support with guaranteed SLA response times and minimal downtime.' },
                  { icon: CheckCircle, title: 'End-to-End Coverage', desc: 'Consultation through lifecycle maintenance. Proactive SLAs with 99.9% uptime guarantees and continuous optimization.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center">
                      <Icon className="text-navy-500" size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-navy-500 text-lg mb-1">{title}</h3>
                      <p className="text-slate-600 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-[600px]">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
                alt="Enterprise technology solutions"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-500/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-white font-bold text-lg mb-1">"Driving Africa's Digital Future"</p>
                <p className="text-slate-300 text-sm">BusiQuip Ltd. — Established 1983</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">Global Partnerships</p>
            <h2 className="text-3xl font-bold text-navy-500 mb-4">World-Class Technology Alliances</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Strategic partnerships ensuring genuine products, valid warranties and world-class local support.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Konica Minolta', badge: 'Principal Agency', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Logo_Konica_Minolta.svg' },
              { name: 'Brother', badge: 'via Mustek SA', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Brother_logo.svg' },
              { name: 'HP / Dell', badge: 'Authorised Reseller', logos: ['https://upload.wikimedia.org/wikipedia/commons/0/05/HP_logo_2025.svg', 'https://upload.wikimedia.org/wikipedia/commons/5/56/Dell_Technologies_logo.svg'] },
              { name: 'Clearline', badge: 'Sole Distributor', logo: null },
              { name: 'OCE', badge: 'Wide Format', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/OCE_logo_%282017%29.svg' },
              { name: 'Beswick', badge: 'Office Products', logo: null },
              { name: 'ADC Krone', badge: 'Structured Cabling', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Commscope-logo.png' },
              { name: 'Kobra', badge: 'Secure Shredders', logo: 'https://www.kobra-shredder.com/cdn/shop/files/Kobra-Shredders-CBM-Logo_170x@2x.png?v=1689236738' },
            ].map(p => (
              <div key={p.name} className="partner-card">
                <div className="partner-logo-wrap">
                  {'logos' in p && p.logos ? (
                    <div className="flex items-center justify-center gap-3 w-full">
                      {p.logos.map((src, i) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img key={i} src={src} alt={p.name} loading="lazy" className="partner-logo-img partner-logo-split" />
                      ))}
                    </div>
                  ) : p.logo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.logo} alt={p.name} loading="lazy" className="partner-logo-img" />
                  ) : (
                    <span className="partner-logo-text">{p.name}</span>
                  )}
                </div>
                <p className="partner-name">{p.name}</p>
                <p className="partner-badge">{p.badge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80"
          alt="Modern enterprise office"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-500/90"></div>
        <div className="container-max relative z-10 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Partner with a Trusted Technology Leader?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Let's discuss how BusiQuip can help your enterprise achieve its digital goals.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-500 font-bold rounded-lg hover:bg-gold-400 transition-all text-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
