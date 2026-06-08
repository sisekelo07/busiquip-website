import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import { Zap, Network, Smartphone, Lock, BarChart3 } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Enterprise Solutions | BusiQuip',
  description: 'Office automation, IT infrastructure, digital transformation, and data security solutions for enterprises.',
};

export default function SolutionsPage() {
  return (
    <>
      <Hero
        title="Enterprise Solutions"
        subtitle="Comprehensive Technology Solutions Backed by SLAs"
        variant="simple"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy-500 mb-6">
              Integrated Solutions for Enterprise Success
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From office automation to digital transformation, we provide end-to-end technology services with proactive support and certified expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <ServiceCard
              icon={Zap}
              title="Office Automation"
              description="Konica Minolta BizHub solutions for document workflow optimization"
              benefits={[
                'Document management',
                'Service agreements',
                'Workflow optimization',
              ]}
              href="/solutions/office-automation"
            />
            <ServiceCard
              icon={Network}
              title="IT Infrastructure"
              description="Network modernization and infrastructure upgrades"
              benefits={[
                'Network switches',
                'Server upgrades',
                'Consultancy services',
              ]}
              href="/solutions/it-infrastructure"
            />
            <ServiceCard
              icon={Smartphone}
              title="Digital Transformation"
              description="Cloud migration and digital business solutions"
              benefits={[
                'Cloud services',
                'Digital payments',
                'Custom software',
              ]}
              href="/solutions/digital-transformation"
            />
            <ServiceCard
              icon={Lock}
              title="Data Security"
              description="Comprehensive data protection solutions"
              benefits={[
                'Power surge protection',
                'Data safeguarding',
                'Secure disposal',
              ]}
              href="/solutions/data-security"
            />
            <ServiceCard
              icon={BarChart3}
              title="Computing Solutions"
              description="Enterprise laptops, desktops, and mobile devices"
              benefits={[
                'HP ProBook notebooks',
                'Dell Vostro desktops',
                'Enterprise deployment',
              ]}
              href="/solutions/computing"
            />
          </div>
        </div>
      </section>

      {/* Why Our Solutions Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-navy-500 mb-12 text-center">
            Why Choose BusiQuip Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="w-16 h-16 bg-gold-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-500 mb-4">
                Proactive SLAs
              </h3>
              <p className="text-slate-600">
                Guaranteed response times and uptime commitments. We don't just react to problems—we prevent them with continuous monitoring and preventive maintenance.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-gold-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-500 mb-4">
                Expert Implementation
              </h3>
              <p className="text-slate-600">
                Certified technicians handle every aspect—from assessment through go-live. Minimal disruption, maximum results.
              </p>
            </div>

            <div>
              <div className="w-16 h-16 bg-gold-500 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-500 mb-4">
                Measurable ROI
              </h3>
              <p className="text-slate-600">
                We help you achieve cost savings, efficiency gains, and productivity improvements—with clear metrics and transparent reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions By Industry */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-navy-500 mb-12 text-center">
            Industry-Specific Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Link href="/industries/government" className="group">
              <div className="card hover:shadow-card-hover transition-all cursor-pointer">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold text-navy-500 mb-3 group-hover:text-blue-600">Government</h3>
                <p className="text-slate-600 text-sm">
                  Compliance-focused solutions for government agencies and ministries with data security at the core.
                </p>
              </div>
            </Link>

            <Link href="/industries/finance" className="group">
              <div className="card hover:shadow-card-hover transition-all cursor-pointer">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-xl font-bold text-navy-500 mb-3 group-hover:text-blue-600">Finance</h3>
                <p className="text-slate-600 text-sm">
                  Secure, compliant infrastructure for banks, insurance, and financial services organizations.
                </p>
              </div>
            </Link>

            <Link href="/industries/education" className="group">
              <div className="card hover:shadow-card-hover transition-all cursor-pointer">
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-navy-500 mb-3 group-hover:text-blue-600">Education</h3>
                <p className="text-slate-600 text-sm">
                  Affordable, scalable solutions for universities, schools, and educational institutions.
                </p>
              </div>
            </Link>

            <Link href="/industries/utilities" className="group">
              <div className="card hover:shadow-card-hover transition-all cursor-pointer">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-navy-500 mb-3 group-hover:text-blue-600">Utilities</h3>
                <p className="text-slate-600 text-sm">
                  Resilient infrastructure for critical operations with 99.9% uptime guarantees.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-500 text-white text-center">
        <div className="container-max">
          <h2 className="text-4xl font-bold mb-6">
            Let's Find the Right Solution for Your Organization
          </h2>
          <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your specific needs and challenges.
          </p>
          <Link href="/contact" className="btn-primary bg-gold-500 text-navy-500 hover:bg-gold-400">
            Schedule Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
