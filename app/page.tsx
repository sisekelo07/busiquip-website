import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
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
  Award
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Enterprise Technology Partner for Africa's Digital Future"
        subtitle="40+ Years Driving Digital Transformation for Government, Finance & Education"
        description="BusiQuip helps enterprises modernize their infrastructure, streamline operations, and achieve measurable ROI through trusted technology partnerships and world-class support."
        primaryCTA={{
          text: 'Schedule Free Consultation',
          href: '/contact',
        }}
        secondaryCTA={{
          text: 'Explore Solutions',
          href: '/solutions',
        }}
      />

      {/* Trust Signals Bar */}
      <div className="bg-slate-50 border-y border-slate-200">
        <div className="container-max py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-gold-500 mb-2">40+</p>
              <p className="text-slate-600 font-semibold">Years Operational Excellence</p>
              <p className="text-xs text-slate-500 mt-1">Since August 8, 1983</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gold-500 mb-2">36+</p>
              <p className="text-slate-600 font-semibold">Major Enterprise Clients</p>
              <p className="text-xs text-slate-500 mt-1">Government, Finance, Education</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gold-500 mb-2">9</p>
              <p className="text-slate-600 font-semibold">Certified Technicians</p>
              <p className="text-xs text-slate-500 mt-1">Manufacturer-trained experts</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-gold-500 mb-2">99.9%</p>
              <p className="text-slate-600 font-semibold">Uptime SLA</p>
              <p className="text-xs text-slate-500 mt-1">Proactive monitoring</p>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-500 mb-6">
              Comprehensive Enterprise Solutions
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From office automation to digital transformation, we provide end-to-end technology solutions backed by proactive SLAs and certified expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={Zap}
              title="Office Automation"
              description="Konica Minolta BizHub solutions optimizing document workflows and office productivity"
              benefits={[
                'Document management',
                'Service agreements',
                'Remote monitoring',
              ]}
              href="/solutions/office-automation"
            />
            <ServiceCard
              icon={Network}
              title="IT Infrastructure"
              description="Network switches, server upgrades, and infrastructure modernization services"
              benefits={[
                'Network solutions',
                'Server upgrades',
                'Consultancy services',
              ]}
              href="/solutions/it-infrastructure"
            />
            <ServiceCard
              icon={Smartphone}
              title="Digital Transformation"
              description="Cloud migration, digital payments, and custom software solutions"
              benefits={[
                'Cloud services',
                'Digital payments',
                'Software solutions',
              ]}
              href="/solutions/digital-transformation"
            />
            <ServiceCard
              icon={Lock}
              title="Data Security"
              description="Clearline Protection and secure data handling solutions"
              benefits={[
                'Power surge protection',
                'Data safeguarding',
                'Secure disposal',
              ]}
              href="/solutions/data-security"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-navy-50">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-navy-500 mb-12 text-center">
            Why Leading Organizations Choose BusiQuip
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center">
                  <Award className="text-navy-500" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-500 mb-2">Sole Authorised Dealerships</h3>
                <p className="text-slate-600">
                  Authentic products and valid warranties for Konica Minolta, Brother, HP/Dell, and OCE. Principal agency status ensures genuine quality.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center">
                  <Zap className="text-navy-500" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-500 mb-2">Rapid Response Capability</h3>
                <p className="text-slate-600">
                  Full local spares and consumables stock in Mbabane. Minimal downtime with on-site and in-house support options.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center">
                  <Users className="text-navy-500" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-500 mb-2">Certified Expertise</h3>
                <p className="text-slate-600">
                  Manufacturer-certified technicians with deep expertise in enterprise technology. Continuous training ensures cutting-edge knowledge.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-navy-500" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-500 mb-2">End-to-End Coverage</h3>
                <p className="text-slate-600">
                  Comprehensive service from consultation through lifecycle maintenance. Proactive SLAs with guaranteed response times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="section-padding bg-white border-y border-slate-200">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-navy-500 mb-12 text-center">
            Trusted by Eswatini's Leading Organizations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">🏛️</span> Government
              </h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gold-500" />
                  Ministry of Defence
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gold-500" />
                  High Court
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gold-500" />
                  City Council Mbabane
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">💰</span> Finance
              </h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gold-500" />
                  Standard Bank
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gold-500" />
                  Eswatini Bank
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gold-500" />
                  FINCORP / Tibiyo Insurance
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">📚</span> Education
              </h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gold-500" />
                  University of Eswatini
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gold-500" />
                  Exams Council
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="text-2xl">⚡</span> Utilities
              </h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gold-500" />
                  Swaziland Electricity Board
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gold-500" />
                  Eswatini Water Services
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-gold-500" />
                  Usutu Forest
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-navy-500 mb-12 text-center">
            What Our Clients Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="BusiQuip didn't just upgrade our infrastructure—they became our trusted technology partner. Their 40-year track record gave us confidence, and the 40% cost savings directly impacted our bottom line."
              author="CFO"
              title="Finance Director"
              organization="Major Financial Institution"
              rating={5}
            />
            <TestimonialCard
              quote="The BizHub solution transformed how we handle documents. It freed our team to focus on service delivery instead of paper shuffling. The security controls gave our compliance team peace of mind."
              author="Operations Manager"
              title="Government Agency"
              organization="Eswatini Government"
              rating={5}
            />
            <TestimonialCard
              quote="Since implementing their solutions, our team productivity increased measurably. The time we save means we can focus on strategic work. BusiQuip's support team has been exceptional."
              author="IT Manager"
              title="University Administrator"
              organization="University of Eswatini"
              rating={5}
            />
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-navy-500 mb-12 text-center">
            Global Technology Alliances
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Our strategic partnerships ensure you receive genuine products, valid warranties, and world-class support backed by industry leaders.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white border-2 border-navy-200 rounded-lg p-8 text-center hover:border-gold-500 transition-colors">
              <p className="font-bold text-navy-500 text-lg mb-2">Konica Minolta</p>
              <p className="text-sm text-slate-600">Principal Agency</p>
            </div>
            <div className="bg-white border-2 border-navy-200 rounded-lg p-8 text-center hover:border-gold-500 transition-colors">
              <p className="font-bold text-navy-500 text-lg mb-2">Brother</p>
              <p className="text-sm text-slate-600">Authorized Distributor</p>
            </div>
            <div className="bg-white border-2 border-navy-200 rounded-lg p-8 text-center hover:border-gold-500 transition-colors">
              <p className="font-bold text-navy-500 text-lg mb-2">HP / Dell</p>
              <p className="text-sm text-slate-600">Authorized Reseller</p>
            </div>
            <div className="bg-white border-2 border-navy-200 rounded-lg p-8 text-center hover:border-gold-500 transition-colors">
              <p className="font-bold text-navy-500 text-lg mb-2">Clearline</p>
              <p className="text-sm text-slate-600">Sole Distributor</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-navy-500 to-blue-700 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our technology experts to discuss your specific challenges and opportunities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary bg-gold-500 text-navy-500 hover:bg-gold-400 group">
              Schedule Free Consultation
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/solutions" className="px-7 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-navy-500 transition-all">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
