import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import TestimonialCard from '@/components/TestimonialCard';
import { CheckCircle, Zap, Shield, Printer } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Office Automation & Document Management | BusiQuip',
  description: 'Konica Minolta BizHub solutions for document workflow optimization, reducing costs, and improving productivity.',
};

export default function OfficeAutomationPage() {
  return (
    <>
      <Hero
        title="Office Automation & Document Management Solutions"
        subtitle="Konica Minolta BizHub - Transform Your Document Workflow"
        variant="simple"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mb-16">
            <p className="text-xl text-slate-600 leading-relaxed">
              From invoices and contracts to reports and correspondence, enterprises process millions of documents annually. BusiQuip's office automation solutions streamline document workflows, reduce costs, improve compliance—all while enhancing productivity and security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-navy-500 mb-8">
                The Enterprise Document Workflow Challenge
              </h2>

              <div className="space-y-4">
                {[
                  { icon: '📄', title: 'Manual Processes Consume Resources', desc: 'Document scanning, filing, and retrieval eat up 30-40% of administrative time, costing $50K+ annually' },
                  { icon: '🔗', title: 'Fragmented Systems & Inefficiency', desc: 'Disparate copiers, printers, and systems create silos, lost documents, and compliance gaps' },
                  { icon: '📈', title: 'Growing Document Volumes', desc: 'Paper costs, storage requirements, and environmental impact exceed $200 per employee annually' },
                  { icon: '🔐', title: 'Security & Compliance Risks', desc: 'Unsecured document handling violates regulations, risking audit failures and compliance penalties' },
                ].map((item) => (
                  <div key={item.title} className="service-card-3d">
                    <span className="card-spin-bg" aria-hidden="true" />
                    <span className="card-bg-mask" aria-hidden="true" />
                    <div className="card-content" style={{ flexDirection: 'row', gap: '1rem', alignItems: 'flex-start' }}>
                      <div className="card-icon-3d" style={{ flexShrink: 0, marginBottom: 0 }}>{item.icon}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-navy-500 mb-2">{item.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-100 rounded-lg p-12 flex items-center justify-center min-h-96">
              <div className="text-center">
                <Printer size={64} className="mx-auto text-navy-500 mb-4" />
                <p className="text-slate-600 font-semibold">Konica Minolta BizHub</p>
                <p className="text-sm text-slate-500 mt-2">Enterprise Document Solution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-slate-50 border-y border-slate-200">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-navy-500 mb-8 text-center">
            Konica Minolta BizHub Enterprise Solution
          </h2>
          <p className="text-center text-slate-600 mb-16 max-w-3xl mx-auto text-lg">
            BusiQuip's office automation solution centers on Konica Minolta BizHub—a trusted, enterprise-grade platform used by thousands of organizations worldwide. We don't just install equipment; we optimize your entire document workflow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div className="card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-500 mb-3">Advanced Multifunction Devices</h3>
              <p className="text-slate-600">
                Scanning, copying, printing, and faxing in one system with network integration for seamless workflow, user authentication, and encryption.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <CheckCircle className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-500 mb-3">Workflow Optimization</h3>
              <p className="text-slate-600">
                Automated document routing, filing, and integration with business applications reduces manual work by up to 80%.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-navy-500 mb-3">Cost Management</h3>
              <p className="text-slate-600">
                Usage tracking, billing allocation, and flexible leasing models provide predictable costs and 40%+ waste reduction.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Shield className="text-blue-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-500 mb-3">24/7 Support & SLAs</h3>
              <p className="text-slate-600">
                Proactive monitoring, rapid response (4-hour SLA), and preventive maintenance ensure maximum uptime and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-navy-500 mb-12 text-center">
            Key Features & Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-navy-500 mb-4">Cloud Integration</h3>
              <p className="text-slate-600 mb-4">
                Connect to cloud storage (OneDrive, Google Drive) for seamless document access and reduced paper usage.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-gold-500" />
                  Reduce paper usage by 40%
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-gold-500" />
                  Improve document accessibility
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-gold-500" />
                  Enable hybrid work models
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-500 mb-4">Mobile Printing</h3>
              <p className="text-slate-600 mb-4">
                Print securely from tablets, phones, and laptops anywhere in your office network.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-gold-500" />
                  Support flexible work arrangements
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-gold-500" />
                  Reduce document loss
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-gold-500" />
                  Improve security
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-500 mb-4">OCR & Document Capture</h3>
              <p className="text-slate-600 mb-4">
                Automatic text recognition and digital filing makes documents searchable and eliminates manual filing.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-gold-500" />
                  Searchable document archives
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-gold-500" />
                  Reduce manual filing by 80%
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-gold-500" />
                  Faster information retrieval
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-navy-500 mb-4">Enterprise Security</h3>
              <p className="text-slate-600 mb-4">
                Biometric authentication, encryption, and audit logs ensure document compliance and protection.
              </p>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-gold-500" />
                  Meet compliance requirements
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-gold-500" />
                  Protect sensitive information
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-gold-500" />
                  Full audit trails
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-navy-500 mb-12 text-center">
            Service Packages & Pricing
          </h2>

          <div className="overflow-x-auto mb-12">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-navy-500 text-white">
                  <th className="px-6 py-4 text-left font-bold">Feature</th>
                  <th className="px-6 py-4 text-center font-bold">Standard</th>
                  <th className="px-6 py-4 text-center font-bold">Professional</th>
                  <th className="px-6 py-4 text-center font-bold">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-white">
                  <td className="px-6 py-4 font-semibold">Device Lease</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="inline text-gold-500" size={20} /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="inline text-gold-500" size={20} /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="inline text-gold-500" size={20} /></td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 font-semibold">Supplies Included</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="inline text-gold-500" size={20} /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="inline text-gold-500" size={20} /></td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="inline text-gold-500" size={20} /></td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-semibold">Maintenance</td>
                  <td className="px-6 py-4 text-center">Basic</td>
                  <td className="px-6 py-4 text-center">Standard</td>
                  <td className="px-6 py-4 text-center">Premium</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 font-semibold">Response Time (SLA)</td>
                  <td className="px-6 py-4 text-center">8 hours</td>
                  <td className="px-6 py-4 text-center">4 hours</td>
                  <td className="px-6 py-4 text-center">2 hours</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-6 py-4 font-semibold">24/7 Support</td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4 text-center">-</td>
                  <td className="px-6 py-4 text-center"><CheckCircle className="inline text-gold-500" size={20} /></td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="px-6 py-4 font-semibold">Cloud Integration</td>
                  <td className="px-6 py-4 text-center">Basic</td>
                  <td className="px-6 py-4 text-center">Advanced</td>
                  <td className="px-6 py-4 text-center">Enterprise</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white border-2 border-navy-200 rounded-lg p-8 text-center">
            <p className="text-slate-600 mb-4">
              Monthly investment: <span className="text-3xl font-bold text-gold-500">$800-$1,800</span>
            </p>
            <p className="text-slate-600">
              Flexible financing and custom configurations available. Implementation: 4-5 weeks with zero downtime.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding bg-white border-y border-slate-200">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-navy-500 mb-12 text-center">
            Success Case Study
          </h2>

          <div className="bg-slate-50 rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <p className="text-sm text-slate-600 mb-2">Client Type</p>
                <p className="text-lg font-bold text-navy-500">Major Financial Institution</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-2">Organization Size</p>
                <p className="text-lg font-bold text-navy-500">500+ Employees</p>
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-2">Document Volume</p>
                <p className="text-lg font-bold text-navy-500">50,000+ Monthly</p>
              </div>
            </div>

            <div className="border-t border-slate-300 pt-8">
              <h3 className="text-2xl font-bold text-navy-500 mb-6">The Challenge</h3>
              <p className="text-slate-600 mb-8">
                The organization processed 50,000+ documents monthly with manual filing consuming 12 full-time employees. Multiple copiers created vendor fragmentation, and a compliance audit identified document security gaps.
              </p>

              <h3 className="text-2xl font-bold text-navy-500 mb-6 mt-8">The Solution</h3>
              <p className="text-slate-600 mb-8">
                BusiQuip deployed 8x Konica Minolta BizHub A3 devices across locations with cloud document management integration, user authentication, and encryption. Preventive maintenance SLA provided guaranteed support.
              </p>

              <h3 className="text-2xl font-bold text-navy-500 mb-6 mt-8">The Results</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg p-6 text-center border-l-4 border-gold-500">
                  <p className="text-3xl font-bold text-gold-500">60%</p>
                  <p className="text-sm text-slate-600">Manual Filing Reduction</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border-l-4 border-gold-500">
                  <p className="text-3xl font-bold text-gold-500">$150K</p>
                  <p className="text-sm text-slate-600">Annual Cost Savings</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border-l-4 border-gold-500">
                  <p className="text-3xl font-bold text-gold-500">100%</p>
                  <p className="text-sm text-slate-600">Audit Compliance</p>
                </div>
                <div className="bg-white rounded-lg p-6 text-center border-l-4 border-gold-500">
                  <p className="text-3xl font-bold text-gold-500">35%</p>
                  <p className="text-sm text-slate-600">Paper Reduction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-slate-50">
        <div className="container-max max-w-2xl">
          <TestimonialCard
            quote="The BizHub solution transformed how we handle documents. It freed our team to focus on customer service instead of paper shuffling. The security controls gave our compliance team peace of mind. The ROI was clear within the first 6 months."
            author="Operations Manager"
            title="Finance Director"
            organization="Major Financial Institution"
            rating={5}
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-navy-500 mb-12 text-center">
            Ready to Transform Your Document Workflow?
          </h2>

          <ContactForm variant="inline" />
        </div>
      </section>

      {/* Related Solutions */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-navy-500 mb-12 text-center">
            Explore Other Solutions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/solutions/it-infrastructure">
              <div className="card hover:shadow-card-hover transition-all cursor-pointer">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="text-xl font-bold text-navy-500 mb-3">IT Infrastructure</h3>
                <p className="text-slate-600">Network modernization and infrastructure upgrades</p>
              </div>
            </Link>

            <Link href="/solutions/digital-transformation">
              <div className="card hover:shadow-card-hover transition-all cursor-pointer">
                <div className="text-4xl mb-4">☁️</div>
                <h3 className="text-xl font-bold text-navy-500 mb-3">Digital Transformation</h3>
                <p className="text-slate-600">Cloud migration and digital business solutions</p>
              </div>
            </Link>

            <Link href="/solutions/data-security">
              <div className="card hover:shadow-card-hover transition-all cursor-pointer">
                <div className="text-4xl mb-4">🔒</div>
                <h3 className="text-xl font-bold text-navy-500 mb-3">Data Security</h3>
                <p className="text-slate-600">Comprehensive data protection solutions</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
