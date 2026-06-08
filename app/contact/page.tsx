import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';

export const metadata = {
  title: 'Contact BusiQuip | Enterprise Technology Support',
  description: 'Contact BusiQuip for consulting, support, and partnership inquiries. Available 24/7 for emergencies.',
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Get in Touch with Our Enterprise Team"
        subtitle="We're ready to help you achieve your IT goals"
        variant="simple"
      />

      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Phone</h3>
                    <p className="text-blue-600 font-semibold mb-1">(+268) 2404 0156 / 2404 1422</p>
                    <p className="text-sm text-slate-600">
                      Mon-Fri: 8:00 AM - 5:00 PM<br />
                      Sat: 8:00 AM - 1:00 PM
                    </p>
                    <p className="text-xs text-gold-600 mt-2 font-semibold">24/7 Emergency Support Available</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Email</h3>
                    <p className="text-slate-600 text-sm">
                      <a href="mailto:info@busiquip.com" className="text-blue-600 hover:underline">
                        info@busiquip.com
                      </a>
                    </p>
                    <p className="text-slate-600 text-sm">
                      <a href="mailto:support@busiquip.com" className="text-blue-600 hover:underline">
                        support@busiquip.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Office Location</h3>
                    <p className="text-slate-600 text-sm">
                      Bypass Mantsholo Road<br />
                      Eveni, Mbabane<br />
                      Eswatini
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Business Hours</h3>
                    <p className="text-slate-600 text-sm">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 8:00 AM - 1:00 PM<br />
                      Sunday: Closed
                    </p>
                    <p className="text-xs text-gold-600 mt-2 font-semibold">Emergency Support: 24/7</p>
                  </div>
                </div>

                {/* Response Times */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Response Time Guarantee</h3>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                      Sales inquiries: 2 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                      Support tickets: 1 hour
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                      Emergencies: 15 minutes
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white">
                <h2 className="text-3xl font-bold text-navy-500 mb-2">Send Us a Message</h2>
                <p className="text-slate-600 mb-8">
                  Fill out the form below and our team will contact you within 2 hours during business hours.
                </p>
                <ContactForm variant="default" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Support */}
      <section className="section-padding bg-blue-50 border-y border-blue-200">
        <div className="container-max text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="text-blue-600" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-navy-500 mb-4">Live Chat Support</h2>
            <p className="text-slate-600 text-lg mb-6">
              Need immediate assistance? Our support team is available for live chat during business hours.
            </p>
            <p className="text-slate-600">
              <span className="font-semibold">Average response time:</span> 5 minutes<br />
              <span className="font-semibold">Hours:</span> Mon-Fri 8:00 AM - 5:00 PM
            </p>
          </div>
        </div>
      </section>

      {/* Existing Customer Support */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-2xl mx-auto">
          <div className="border-2 border-navy-200 rounded-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-navy-500 mb-6">For Existing Customers</h2>
            <p className="text-slate-600 mb-6">
              If you're already a BusiQuip customer, you can submit support requests and access your account through our customer portal.
            </p>
            <button className="btn-primary bg-blue-600 hover:bg-blue-700">
              Access Customer Portal
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-bold text-navy-500 mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <details className="group bg-white border border-slate-200 rounded-lg p-6 cursor-pointer hover:border-blue-300 transition-colors">
              <summary className="flex items-center justify-between font-bold text-slate-900 group-open:text-blue-600">
                What's your response time for support requests?
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-slate-600">
                We aim to respond to all inquiries within 2 hours during business hours (Mon-Fri, 8:00 AM - 5:00 PM). Emergency support is available 24/7 for critical issues.
              </p>
            </details>

            <details className="group bg-white border border-slate-200 rounded-lg p-6 cursor-pointer hover:border-blue-300 transition-colors">
              <summary className="flex items-center justify-between font-bold text-slate-900 group-open:text-blue-600">
                Do you offer free consultations?
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-slate-600">
                Yes! We provide free 1-hour enterprise consultations to understand your challenges and discuss potential solutions. Schedule one through the form above.
              </p>
            </details>

            <details className="group bg-white border border-slate-200 rounded-lg p-6 cursor-pointer hover:border-blue-300 transition-colors">
              <summary className="flex items-center justify-between font-bold text-slate-900 group-open:text-blue-600">
                What payment options do you accept?
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-slate-600">
                We accept major credit cards, bank transfers, and enterprise financing options. Our sales team can discuss custom payment arrangements based on your needs.
              </p>
            </details>

            <details className="group bg-white border border-slate-200 rounded-lg p-6 cursor-pointer hover:border-blue-300 transition-colors">
              <summary className="flex items-center justify-between font-bold text-slate-900 group-open:text-blue-600">
                Do you service organizations outside Eswatini?
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-slate-600">
                While our headquarters is in Mbabane, we serve clients across the SADC region. Contact us to discuss your specific location and needs.
              </p>
            </details>

            <details className="group bg-white border border-slate-200 rounded-lg p-6 cursor-pointer hover:border-blue-300 transition-colors">
              <summary className="flex items-center justify-between font-bold text-slate-900 group-open:text-blue-600">
                How do I report a billing issue?
                <span className="transition group-open:rotate-180">▼</span>
              </summary>
              <p className="mt-4 text-slate-600">
                Please contact our billing team at billing@busiquip.com or call 2404 0156 ext. 5. We'll investigate and resolve within 48 hours.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-navy-500 to-blue-700 text-white text-center">
        <div className="container-max">
          <h2 className="text-4xl font-bold mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-slate-100 mb-8 max-w-2xl mx-auto">
            Our team is here to help. Reach out using any method above and we'll get back to you shortly.
          </p>
          <button className="btn-primary bg-gold-500 text-navy-500 hover:bg-gold-400">
            Call Us Now
          </button>
        </div>
      </section>
    </>
  );
}
