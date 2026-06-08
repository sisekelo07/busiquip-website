import TestimonialCard from '@/components/TestimonialCard';
import {
  Zap,
  Network,
  Smartphone,
  Lock,
  CheckCircle,
  ArrowRight,
  Users,
  TrendingUp,
  Award,
  Phone,
  Mail,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85"
          alt="Modern enterprise office"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500/90 via-navy-500/80 to-blue-700/85"></div>

        {/* Content */}
        <div className="container-max relative z-10 py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gold-500/20 border border-gold-500/40 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse"></span>
              <span className="text-gold-400 text-sm font-semibold">Established 1983 · Eswatini's Premier Tech Partner</span>
            </div>

            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Enterprise Technology Partner for{' '}
              <span className="text-gold-400">Africa's Digital Future</span>
            </h1>
            <p className="text-xl text-slate-200 mb-8 leading-relaxed">
              40+ Years Driving Digital Transformation for Government, Finance & Education across Eswatini and Southern Africa.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 text-navy-500 font-bold rounded-lg hover:bg-gold-400 transition-all text-lg group">
                Schedule Free Consultation
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/solutions" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-navy-500 transition-all text-lg">
                Explore Solutions
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <p className="text-3xl font-bold text-gold-400">40+</p>
                <p className="text-sm text-slate-300 mt-1">Years Excellence</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gold-400">36+</p>
                <p className="text-sm text-slate-300 mt-1">Enterprise Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gold-400">9</p>
                <p className="text-sm text-slate-300 mt-1">Certified Experts</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gold-400">99.9%</p>
                <p className="text-sm text-slate-300 mt-1">Uptime SLA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-500 mb-6">
              Comprehensive Enterprise Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              End-to-end technology solutions backed by proactive SLAs, certified expertise, and 40+ years of operational excellence.
            </p>
          </div>

          {/* Solution Cards with Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Office Automation */}
            <Link href="/solutions/office-automation" className="group relative rounded-2xl overflow-hidden h-72 block">
              <Image
                src="https://images.unsplash.com/photo-1612815292957-cde61a4ec2b8?w=800&q=80"
                alt="Office automation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-500/90 to-navy-500/20"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-navy-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Office Automation</h3>
                <p className="text-slate-300 text-sm">Konica Minolta BizHub solutions for document workflow optimization</p>
                <span className="inline-flex items-center gap-2 text-gold-400 font-bold mt-4 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* IT Infrastructure */}
            <Link href="/solutions/it-infrastructure" className="group relative rounded-2xl overflow-hidden h-72 block">
              <Image
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80"
                alt="IT Infrastructure server room"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-500/90 to-navy-500/20"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-4">
                  <Network className="text-navy-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">IT Infrastructure</h3>
                <p className="text-slate-300 text-sm">Network switches, server upgrades, structured cabling & consultancy</p>
                <span className="inline-flex items-center gap-2 text-gold-400 font-bold mt-4 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Digital Transformation */}
            <Link href="/solutions/digital-transformation" className="group relative rounded-2xl overflow-hidden h-72 block">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                alt="Digital transformation"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-500/90 to-navy-500/20"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="text-navy-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Digital Transformation</h3>
                <p className="text-slate-300 text-sm">Cloud services, digital payments & custom software solutions</p>
                <span className="inline-flex items-center gap-2 text-gold-400 font-bold mt-4 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </span>
              </div>
            </Link>

            {/* Data Security */}
            <Link href="/solutions/data-security" className="group relative rounded-2xl overflow-hidden h-72 block">
              <Image
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80"
                alt="Data security"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-500/90 to-navy-500/20"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center mb-4">
                  <Lock className="text-navy-500" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Data Security</h3>
                <p className="text-slate-300 text-sm">Clearline protection, surge shielding & secure data disposal</p>
                <span className="inline-flex items-center gap-2 text-gold-400 font-bold mt-4 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>

          <div className="text-center">
            <Link href="/solutions" className="btn-secondary inline-flex items-center gap-2">
              View All Solutions <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">Our Services</p>
            <h2 className="text-4xl md:text-5xl font-bold text-navy-500 mb-6">
              Everything Your Business Needs
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Six specialised service areas covering every aspect of your technology needs — backed by 40+ years of experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: '🎯',
                title: 'Strategic IT Consulting',
                desc: 'Vendor-independent IT strategy aligned to your business goals. A clear roadmap that aligns IT spend with revenue.',
                href: '/services/strategic-it-consulting',
              },
              {
                icon: '🔗',
                title: 'Systems Integration',
                desc: 'Connect your software, hardware, and cloud platforms into one seamless ecosystem. Eliminate data silos and manual workarounds.',
                href: '/services/systems-integration',
              },
              {
                icon: '⚡',
                title: 'Digital Transformation',
                desc: 'Cloud migration, process automation, digital payments and custom software that drives real business outcomes.',
                href: '/services/digital-transformation',
              },
              {
                icon: '🔒',
                title: 'Cybersecurity Services',
                desc: 'Clearline surge protection, data safeguarding, security audits, compliance reviews, and staff awareness training.',
                href: '/services/cybersecurity-services',
              },
              {
                icon: '🌐',
                title: 'IT & Networking Services',
                desc: 'Network infrastructure design, ADC Krone structured cabling, switch deployment, and proactive network management.',
                href: '/services/it-networking-services',
              },
              {
                icon: '💻',
                title: 'Web & Software Development',
                desc: 'Custom websites, e-commerce platforms, business management systems, and mobile apps built for the Eswatini market.',
                href: '/services/web-software-development',
              },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="service-card-3d">
                <span className="card-spin-bg" aria-hidden="true" />
                <span className="card-bg-mask" aria-hidden="true" />
                <div className="card-content">
                  <div className="card-icon-3d">{s.icon}</div>
                  <h3 className="text-xl font-bold text-navy-500 mb-3">{s.title}</h3>
                  <p className="text-slate-600 text-sm mb-6 flex-grow leading-relaxed">{s.desc}</p>
                  <div className="card-cta">
                    Learn More <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services" className="btn-secondary inline-flex items-center gap-2">
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About / Why Us Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image side */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                  alt="BusiQuip professional team meeting"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-slate-200">
                <p className="text-4xl font-bold text-gold-500">40+</p>
                <p className="text-navy-500 font-semibold">Years of Trust</p>
                <p className="text-slate-500 text-xs mt-1">Since August 8, 1983</p>
              </div>
              {/* Floating badge */}
              <div className="absolute -top-4 -left-4 bg-navy-500 rounded-xl shadow-xl p-4 text-white text-center">
                <p className="text-2xl font-bold text-gold-400">36+</p>
                <p className="text-xs text-slate-300">Enterprise Clients</p>
              </div>
            </div>

            {/* Content side */}
            <div>
              <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">Why BusiQuip</p>
              <h2 className="text-4xl font-bold text-navy-500 mb-6">
                Why Leading Organizations Choose Us
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                With over four decades of operational excellence, BusiQuip has earned the trust of Eswatini's most critical institutions — from government ministries to major financial institutions.
              </p>

              <div className="space-y-6">
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center">
                    <Award className="text-navy-500" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-500 text-lg mb-1">Sole Authorised Dealerships</h3>
                    <p className="text-slate-600 text-sm">Authentic Konica Minolta, Brother, HP/Dell & OCE products with valid warranties and Principal Agency status.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center">
                    <Zap className="text-navy-500" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-500 text-lg mb-1">Rapid Response</h3>
                    <p className="text-slate-600 text-sm">Full local spares and consumables stock in Mbabane. Minimal downtime, on-site and in-house support.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center">
                    <Users className="text-navy-500" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-500 text-lg mb-1">Certified Expertise</h3>
                    <p className="text-slate-600 text-sm">9 manufacturer-certified technicians providing in-house and on-site enterprise support.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="text-navy-500" size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-500 text-lg mb-1">End-to-End Coverage</h3>
                    <p className="text-slate-600 text-sm">Comprehensive service from consultation through lifecycle maintenance backed by proactive SLAs.</p>
                  </div>
                </div>
              </div>

              <Link href="/about" className="btn-primary bg-navy-500 hover:bg-navy-600 mt-10 inline-flex">
                Learn Our Story <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="section-padding bg-white border-y border-slate-200">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">Our Clients</p>
            <h2 className="text-4xl font-bold text-navy-500 mb-4">
              Trusted by Eswatini's Leading Organizations
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From government ministries to major financial institutions — 36+ enterprises rely on BusiQuip.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-xl">🏛️</div>
                <h3 className="font-bold text-navy-500 text-lg">Government</h3>
              </div>
              <ul className="space-y-3 text-slate-600 text-sm">
                {['Ministry of Defence', 'High Court', 'City Council Mbabane'].map(c => (
                  <li key={c} className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-gold-500 flex-shrink-0" />{c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-xl">🏦</div>
                <h3 className="font-bold text-navy-500 text-lg">Finance</h3>
              </div>
              <ul className="space-y-3 text-slate-600 text-sm">
                {['Standard Bank', 'Eswatini Bank', 'FINCORP', 'Tibiyo Insurance'].map(c => (
                  <li key={c} className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-gold-500 flex-shrink-0" />{c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-xl">📚</div>
                <h3 className="font-bold text-navy-500 text-lg">Education</h3>
              </div>
              <ul className="space-y-3 text-slate-600 text-sm">
                {['University of Eswatini (UNISWA)', 'Exams Council'].map(c => (
                  <li key={c} className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-gold-500 flex-shrink-0" />{c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-xl">⚡</div>
                <h3 className="font-bold text-navy-500 text-lg">Utilities</h3>
              </div>
              <ul className="space-y-3 text-slate-600 text-sm">
                {['Swaziland Electricity Board', 'Eswatini Water Services', 'Usutu Forest'].map(c => (
                  <li key={c} className="flex items-center gap-2">
                    <CheckCircle size={15} className="text-gold-500 flex-shrink-0" />{c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-navy-500">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="text-gold-400 font-semibold uppercase tracking-wider mb-3">Testimonials</p>
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="BusiQuip didn't just upgrade our infrastructure — they became our trusted technology partner. Their 40-year track record gave us confidence, and the 40% cost savings directly impacted our bottom line."
              author="CFO"
              title="Finance Director"
              organization="Major Financial Institution"
              rating={5}
            />
            <TestimonialCard
              quote="The BizHub solution transformed how we handle documents. Our team can now focus on service delivery instead of paper shuffling. Security controls gave our compliance team peace of mind."
              author="Operations Manager"
              title="Government Agency"
              organization="Eswatini Government"
              rating={5}
            />
            <TestimonialCard
              quote="Since implementing their solutions, team productivity increased measurably. BusiQuip's support team has been exceptional — always responsive, always professional."
              author="IT Manager"
              title="University Administrator"
              organization="University of Eswatini"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">Our Partners</p>
            <h2 className="text-3xl font-bold text-navy-500 mb-4">Global Technology Alliances</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Strategic partnerships ensuring genuine products, valid warranties and world-class support.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Konica Minolta', badge: 'Principal Agency' },
              { name: 'Brother', badge: 'via Mustek SA' },
              { name: 'HP / Dell', badge: 'Authorised Reseller' },
              { name: 'Clearline', badge: 'Sole Distributor' },
              { name: 'OCE', badge: 'Authorised Reseller' },
              { name: 'Beswick', badge: 'Office Products' },
              { name: 'ADC Krone', badge: 'Structured Cabling' },
              { name: 'Kobra', badge: 'Secure Shredders' },
            ].map(p => (
              <div key={p.name} className="border-2 border-slate-200 rounded-xl p-6 text-center hover:border-gold-500 hover:shadow-card-hover transition-all">
                <p className="font-bold text-navy-500 text-base mb-1">{p.name}</p>
                <p className="text-xs text-slate-500">{p.badge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative section-padding overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=80"
          alt="Modern office"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy-500/90"></div>
        <div className="container-max relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
            Schedule a free consultation with our technology experts and discover what 40+ years of experience can do for your organization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-500 font-bold rounded-lg hover:bg-gold-400 transition-all text-lg">
              Schedule Free Consultation <ArrowRight size={20} />
            </Link>
            <a href="tel:+26824040156" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-navy-500 transition-all text-lg">
              <Phone size={20} /> (+268) 2404 0156
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 mt-8 text-slate-300">
            <Mail size={16} />
            <a href="mailto:info@busiquip.com" className="hover:text-gold-400 transition-colors">info@busiquip.com</a>
          </div>
        </div>
      </section>
    </>
  );
}
