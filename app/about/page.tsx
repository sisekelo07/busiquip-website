import Hero from '@/components/Hero';
import { CheckCircle, Users, Award, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About BusiQuip | 40+ Years of Enterprise Excellence',
  description: 'BusiQuip: Founded 1983, 40+ years driving digital transformation for government, finance, and education sectors in Eswatini.',
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About BusiQuip"
        subtitle="Four Decades of Enterprise Technology Excellence"
        variant="simple"
      />

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-navy-500 mb-8">
                Our Journey Since 1983
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gold-500 mb-3">1983: The Foundation</h3>
                  <p className="text-slate-600">
                    Founded on August 8, 1983, in Mbabane, Eswatini, BusiQuip was established with a simple mission: bring world-class technology and support to African enterprises. From our modest beginnings, we built a reputation for reliability, expertise, and customer-first service.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gold-500 mb-3">2000s: Regional Expansion</h3>
                  <p className="text-slate-600">
                    As Eswatini's economy evolved, so did BusiQuip. We expanded from office equipment distribution to comprehensive technology solutions, earning authorized dealership status with global leaders like Konica Minolta. Our team grew from 2 technicians to the certified specialists we are today.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gold-500 mb-3">Today: Enterprise Leadership</h3>
                  <p className="text-slate-600">
                    With 40+ years of operational excellence, BusiQuip now partners with 36+ major enterprises across government, finance, education, and utilities. We've modernized thousands of workflows, protected critical infrastructure, and enabled digital transformation across the region.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gold-500 mb-3">Tomorrow: Vision for Africa</h3>
                  <p className="text-slate-600">
                    We're committed to being the catalyst for digital empowerment across Africa. Every enterprise we partner with is a step toward a more connected, efficient, and prosperous continent.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-navy-500 to-blue-700 rounded-lg p-12 text-white">
              <div className="space-y-8">
                <div>
                  <p className="text-6xl font-bold text-gold-500 mb-2">40+</p>
                  <p className="text-2xl font-bold">Years of Excellence</p>
                  <p className="text-slate-300 text-sm mt-2">Established August 8, 1983</p>
                </div>

                <div className="h-1 bg-gold-500 rounded-full"></div>

                <div>
                  <p className="text-6xl font-bold text-gold-500 mb-2">36+</p>
                  <p className="text-2xl font-bold">Major Enterprise Clients</p>
                  <p className="text-slate-300 text-sm mt-2">Government, Finance, Education, Utilities</p>
                </div>

                <div className="h-1 bg-gold-500 rounded-full"></div>

                <div>
                  <p className="text-6xl font-bold text-gold-500 mb-2">9</p>
                  <p className="text-2xl font-bold">Certified Technicians</p>
                  <p className="text-slate-300 text-sm mt-2">Manufacturer-trained experts</p>
                </div>

                <div className="h-1 bg-gold-500 rounded-full"></div>

                <div>
                  <p className="text-6xl font-bold text-gold-500 mb-2">99.9%</p>
                  <p className="text-2xl font-bold">Uptime SLA</p>
                  <p className="text-slate-300 text-sm mt-2">Proactive support & monitoring</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding bg-slate-50 border-y border-slate-200">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-navy-500 mb-16 text-center">
            Our Mission, Vision & Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="card text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-500 mb-4">Our Mission</h3>
              <p className="text-slate-600 text-lg">
                To drive digital transformation via trusted technology partnerships, comprehensive training, and secure infrastructure solutions that enable enterprises to thrive in a connected global economy.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🌍</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-500 mb-4">Our Vision</h3>
              <p className="text-slate-600 text-lg">
                Providing the tools, skills, and infrastructure for businesses across Africa to compete globally and achieve sustainable growth through digital empowerment.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💎</span>
              </div>
              <h3 className="text-2xl font-bold text-navy-500 mb-4">Our Tagline</h3>
              <p className="text-slate-600 text-lg font-bold">
                Driving Africa's Digital Future
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg p-8 border-l-4 border-gold-500">
              <div className="text-3xl mb-4">✓</div>
              <h4 className="text-xl font-bold text-navy-500 mb-3">Integrity & Excellence</h4>
              <p className="text-slate-600 text-sm">
                We operate with uncompromising honesty and deliver exceptional results. Our 40-year track record is built on keeping promises.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border-l-4 border-gold-500">
              <div className="text-3xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-navy-500 mb-3">Customer Focus & Partnership</h4>
              <p className="text-slate-600 text-sm">
                We see ourselves as extensions of your team, not just vendors. Your success is our success.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border-l-4 border-gold-500">
              <div className="text-3xl mb-4">⚡</div>
              <h4 className="text-xl font-bold text-navy-500 mb-3">Innovation & Reliability</h4>
              <p className="text-slate-600 text-sm">
                We stay ahead of technology trends while ensuring rock-solid stability and proven reliability.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 border-l-4 border-gold-500">
              <div className="text-3xl mb-4">🎓</div>
              <h4 className="text-xl font-bold text-navy-500 mb-3">Continuous Learning</h4>
              <p className="text-slate-600 text-sm">
                Our team undergoes continuous training to stay current with the latest enterprise technologies and best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-navy-500 mb-16 text-center">
            What Sets Us Apart
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center">
                  <Award className="text-navy-500" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-500 mb-2">Sole Authorized Dealerships</h3>
                <p className="text-slate-600">
                  Authentic products and valid warranties for Konica Minolta, Brother, HP/Dell, and OCE. Principal agency status ensures genuine quality and direct support from manufacturers.
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
                  9 manufacturer-certified technicians with deep expertise in enterprise technology. Continuous training ensures cutting-edge knowledge and professional service delivery.
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
                <h3 className="text-xl font-bold text-navy-500 mb-2">Rapid Response</h3>
                <p className="text-slate-600">
                  Full local spares and consumables stock in Mbabane for minimal downtime. On-site and in-house support options with guaranteed SLA response times.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center">
                  <CheckCircle className="text-navy-500" size={24} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-navy-500 mb-2">End-to-End Coverage</h3>
                <p className="text-slate-600">
                  Comprehensive service from consultation through lifecycle maintenance. Proactive SLAs with 99.9% uptime guarantees and continuous optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-navy-500 mb-8 text-center">
            Meet Our Expert Team
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto text-lg">
            Our 9 fully trained, manufacturer-certified technicians bring decades of combined experience to every project. Each team member undergoes continuous training to stay current with the latest enterprise technologies.
          </p>

          <div className="bg-white rounded-lg p-12 border-2 border-slate-200 text-center">
            <p className="text-slate-600 mb-6">
              <span className="font-bold">Certifications Include:</span><br />
              Konica Minolta | Microsoft | CompTIA | Cisco | HP Enterprise | Dell | Cloud Certifications
            </p>
            <p className="text-slate-600">
              <span className="font-bold">Average Experience:</span> 12+ years in enterprise IT
            </p>
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-navy-500 mb-12 text-center">
            Global Partnerships
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Our strategic partnerships with industry leaders ensure you receive genuine products, valid warranties, and world-class support.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-slate-50 border-2 border-navy-200 rounded-lg p-8 text-center hover:border-gold-500 transition-colors">
              <p className="font-bold text-navy-500 text-lg mb-2">Konica Minolta</p>
              <p className="text-sm text-slate-600">Principal Agency</p>
            </div>
            <div className="bg-slate-50 border-2 border-navy-200 rounded-lg p-8 text-center hover:border-gold-500 transition-colors">
              <p className="font-bold text-navy-500 text-lg mb-2">Brother</p>
              <p className="text-sm text-slate-600">Authorized Distributor</p>
            </div>
            <div className="bg-slate-50 border-2 border-navy-200 rounded-lg p-8 text-center hover:border-gold-500 transition-colors">
              <p className="font-bold text-navy-500 text-lg mb-2">HP / Dell</p>
              <p className="text-sm text-slate-600">Authorized Reseller</p>
            </div>
            <div className="bg-slate-50 border-2 border-navy-200 rounded-lg p-8 text-center hover:border-gold-500 transition-colors">
              <p className="font-bold text-navy-500 text-lg mb-2">Clearline</p>
              <p className="text-sm text-slate-600">Sole Distributor</p>
            </div>
            <div className="bg-slate-50 border-2 border-navy-200 rounded-lg p-8 text-center hover:border-gold-500 transition-colors">
              <p className="font-bold text-navy-500 text-lg mb-2">OCE</p>
              <p className="text-sm text-slate-600">Authorized Reseller</p>
            </div>
            <div className="bg-slate-50 border-2 border-navy-200 rounded-lg p-8 text-center hover:border-gold-500 transition-colors">
              <p className="font-bold text-navy-500 text-lg mb-2">Beswick</p>
              <p className="text-sm text-slate-600">Office Products</p>
            </div>
            <div className="bg-slate-50 border-2 border-navy-200 rounded-lg p-8 text-center hover:border-gold-500 transition-colors">
              <p className="font-bold text-navy-500 text-lg mb-2">ADC Krone</p>
              <p className="text-sm text-slate-600">Structured Cabling</p>
            </div>
            <div className="bg-slate-50 border-2 border-navy-200 rounded-lg p-8 text-center hover:border-gold-500 transition-colors">
              <p className="font-bold text-navy-500 text-lg mb-2">Kobra</p>
              <p className="text-sm text-slate-600">Secure Shredders</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-navy-500 to-blue-700 text-white">
        <div className="container-max text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Partner with a Trusted Technology Leader?
          </h2>
          <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how BusiQuip can help your enterprise achieve its digital goals.
          </p>
          <Link href="/contact" className="btn-primary bg-gold-500 text-navy-500 hover:bg-gold-400">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
