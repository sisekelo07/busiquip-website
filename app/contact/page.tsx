import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Contact BusiQuip | Enterprise Technology Support',
  description: 'Contact BusiQuip for consulting, support, and partnership inquiries. Available 24/7 for emergencies.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80"
          alt="Contact BusiQuip"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500/92 to-blue-700/85"></div>
        <div className="container-max relative z-10">
          <nav className="text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="mx-2">/</span>
            <span>Contact</span>
          </nav>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Get in Touch with Our Enterprise Team
          </h1>
          <p className="text-xl text-slate-200">
            We're ready to help you achieve your IT goals. Response within 2 hours guaranteed.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Info Column */}
            <div className="lg:col-span-1 space-y-6">
              {/* Phone */}
              <div className="service-card-3d">
                <span className="card-spin-bg" aria-hidden="true" />
                <span className="card-bg-mask" aria-hidden="true" />
                <div className="card-content" style={{flexDirection:'row',gap:'1rem',alignItems:'flex-start'}}>
                  <div className="contact-icon-wrap"><Phone className="text-white" size={22} /></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-navy-500 mb-1 text-lg">Phone</h3>
                    <a href="tel:+26824040156" className="text-blue-600 font-semibold text-sm hover:underline block">(+268) 2404 0156</a>
                    <a href="tel:+26824041422" className="text-blue-600 font-semibold text-sm hover:underline block">(+268) 2404 1422</a>
                    <p className="text-xs text-gold-600 mt-2 font-semibold">24/7 Emergency Support</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="service-card-3d">
                <span className="card-spin-bg" aria-hidden="true" />
                <span className="card-bg-mask" aria-hidden="true" />
                <div className="card-content" style={{flexDirection:'row',gap:'1rem',alignItems:'flex-start'}}>
                  <div className="contact-icon-wrap"><Mail className="text-white" size={22} /></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-navy-500 mb-1 text-lg">Email</h3>
                    <a href="mailto:info@busiquip.com" className="text-blue-600 text-sm hover:underline block">info@busiquip.com</a>
                    <a href="mailto:support@busiquip.com" className="text-blue-600 text-sm hover:underline block">support@busiquip.com</a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="service-card-3d">
                <span className="card-spin-bg" aria-hidden="true" />
                <span className="card-bg-mask" aria-hidden="true" />
                <div className="card-content" style={{flexDirection:'row',gap:'1rem',alignItems:'flex-start'}}>
                  <div className="contact-icon-wrap"><MapPin className="text-white" size={22} /></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-navy-500 mb-1 text-lg">Office</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Bypass Mantsholo Road<br />
                      Eveni, Mbabane<br />
                      Eswatini
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="service-card-3d">
                <span className="card-spin-bg" aria-hidden="true" />
                <span className="card-bg-mask" aria-hidden="true" />
                <div className="card-content" style={{flexDirection:'row',gap:'1rem',alignItems:'flex-start'}}>
                  <div className="contact-icon-wrap"><Clock className="text-white" size={22} /></div>
                  <div className="flex-1">
                    <h3 className="font-bold text-navy-500 mb-1 text-lg">Business Hours</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Mon - Fri: 8:00 AM – 5:00 PM<br />
                      Saturday: 8:00 AM – 1:00 PM<br />
                      Sunday: Closed
                    </p>
                    <p className="text-xs text-gold-600 mt-2 font-semibold">Emergency: 24/7</p>
                  </div>
                </div>
              </div>

              {/* Response Times */}
              <div className="p-6 bg-navy-500 rounded-xl text-white">
                <h3 className="font-bold mb-4">Response Guarantee</h3>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full"></span>
                    Sales inquiries: 2 hours
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full"></span>
                    Support tickets: 1 hour
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold-400 rounded-full"></span>
                    Emergencies: 15 minutes
                  </li>
                </ul>
              </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-card">
                <h2 className="text-3xl font-bold text-navy-500 mb-2">Send Us a Message</h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form and our team will contact you within 2 hours during business hours.
                </p>
                <ContactForm variant="default" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map + Office Image */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-2xl overflow-hidden h-72">
              <Image
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                alt="BusiQuip office Mbabane"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy-500/50 flex flex-col justify-end p-8">
                <h3 className="text-white font-bold text-xl mb-1">BusiQuip Headquarters</h3>
                <p className="text-slate-300 text-sm">Bypass Mantsholo Road, Eveni, Mbabane</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden h-72">
              <Image
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
                alt="Enterprise support team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy-500/50 flex flex-col justify-end p-8">
                <h3 className="text-white font-bold text-xl mb-1">Expert Support Team</h3>
                <p className="text-slate-300 text-sm">9 manufacturer-certified technicians ready to help</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy-500">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "What's your response time for support requests?", a: "We respond within 2 hours during business hours (Mon-Fri, 8:00 AM - 5:00 PM). Emergency support is available 24/7 for critical issues." },
              { q: "Do you offer free consultations?", a: "Yes! We provide free 1-hour enterprise consultations. Schedule one through the form above and our team will reach out within 2 hours." },
              { q: "What payment options do you accept?", a: "We accept major credit cards, bank transfers, and enterprise financing. Our sales team can discuss custom payment arrangements." },
              { q: "Do you service organizations outside Eswatini?", a: "Our headquarters is in Mbabane but we serve clients across the SADC region. Contact us to discuss your specific location." },
              { q: "How do I report a billing issue?", a: "Contact billing@busiquip.com or call (+268) 2404 0156. We investigate and resolve all billing issues within 48 hours." },
            ].map((item, i) => (
              <details key={i} className="group bg-slate-50 border border-slate-200 rounded-xl p-6 cursor-pointer hover:border-blue-300 transition-colors">
                <summary className="flex items-center justify-between font-bold text-navy-500 group-open:text-blue-600 list-none">
                  {item.q}
                  <span className="ml-4 flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-navy-500 to-blue-700 text-white text-center">
        <div className="container-max">
          <h2 className="text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-xl mx-auto">
            Our team is here to help. Reach out and we'll get back to you promptly.
          </p>
          <a href="tel:+26824040156" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-500 font-bold rounded-lg hover:bg-gold-400 transition-all text-lg">
            <Phone size={20} /> Call Us Now
          </a>
        </div>
      </section>
    </>
  );
}
