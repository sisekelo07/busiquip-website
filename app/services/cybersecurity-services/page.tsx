import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Phone } from 'lucide-react';

export const metadata = {
  title: 'Cybersecurity Services | BusiQuip',
  description: 'Practical, layered cybersecurity sized for Eswatini SMEs and parastatals — email security, EDR, MFA, backups, and incident response.',
};

const services = [
  { icon: '📧', title: 'Email Security', desc: 'Anti-phishing, anti-spoofing, DMARC/DKIM/SPF enforcement, attachment sandboxing and link rewriting on Microsoft 365 and Google Workspace.' },
  { icon: '🖥️', title: 'Endpoint Detection & Response (EDR)', desc: 'Next-generation endpoint protection on every laptop, desktop and server — not the free antivirus that came pre-installed.' },
  { icon: '🛡️', title: 'Microsoft 365 / Google Workspace Hardening', desc: 'A 5-day hardening sprint that lifts a typical Eswatini tenant from a Secure Score of 30 to 80%+.' },
  { icon: '🔐', title: 'Multi-Factor Authentication (MFA)', desc: 'MFA rolled out across the workforce with conditional access policies — break-glass admin accounts protected separately.' },
  { icon: '💾', title: 'Immutable Backups', desc: "Backups that can't be deleted or encrypted by ransomware, with quarterly restore drills to prove they work." },
  { icon: '🔍', title: 'Vulnerability Management', desc: 'Scheduled vulnerability scanning, patch management and a prioritised remediation queue — so unpatched software stops being the open door.' },
  { icon: '🎓', title: 'Security Awareness Training', desc: 'Quarterly online training and simulated phishing campaigns — staff who learn to spot phishing in a safe test environment.' },
  { icon: '🚨', title: 'Incident Response Retainer', desc: '30-minute containment SLA on declared incidents. We own the response while you keep the business running.' },
  { icon: '📋', title: 'Eswatini Data Protection Act Alignment', desc: 'Data inventory, lawful-basis mapping, breach-response procedures and the documentation auditors expect.' },
];

const process = [
  { step: '1', title: 'Assess', desc: 'A 2-week posture assessment across identity, email, endpoints, backups, network and awareness. Output: a prioritised risk register scored on likelihood and impact.' },
  { step: '2', title: 'Harden', desc: 'Close the top five risks first — typically MFA, email filtering, EDR, backup verification and admin-role review.' },
  { step: '3', title: 'Monitor', desc: 'Ongoing EDR monitoring and monthly posture reports. Alerts triaged by our team, not dumped into your inbox to ignore.' },
  { step: '4', title: 'Respond', desc: 'Incident response retainer with a defined SLA. A containment call within 30 minutes of an active incident, an executive update within 2 hours.' },
];

const deliverables = [
  'Security posture report with prioritised risk register',
  'M365 / Google Workspace hardened to Secure Score 80%+',
  'EDR deployed to every endpoint with central console',
  'MFA enforced across the workforce',
  'Backup verification report and quarterly restore drills',
  'Awareness training enrolment and phishing simulation reports',
  'Eswatini DPA documentation pack',
  'Monthly security report to exec / board',
];

const pricing = [
  {
    tier: 'Essentials',
    price: 'SZL 4,500 – 9,000',
    period: '/ month',
    desc: 'MFA, EDR, email security, monthly reporting.',
    size: 'For teams of 5 to 25.',
    highlight: false,
  },
  {
    tier: 'Business',
    price: 'SZL 10,000 – 22,000',
    period: '/ month',
    desc: 'Adds awareness training, simulated phishing, vulnerability scanning and patching.',
    size: 'For teams of 25 to 150.',
    highlight: true,
  },
  {
    tier: 'Enterprise / Regulated',
    price: 'SZL 28,000 – 75,000',
    period: '/ month',
    desc: 'Adds 24/7 monitoring, incident response retainer with SLA, formal DPA / POPIA documentation.',
    size: 'For financial services, healthcare and regulated sectors.',
    highlight: false,
  },
];

const caseStudies = [
  {
    location: 'Eswatini',
    client: 'A financial services firm in Mbabane',
    outcome: 'Hardened M365, rolled out MFA to 80 staff and deployed EDR across the fleet — Secure Score moved from 32% to 87% in one week, and a real phishing attempt was blocked the following month.',
  },
  {
    location: 'Eswatini',
    client: 'A private hospital group',
    outcome: 'Implemented immutable backups, EDR and Eswatini DPA-aligned data-handling procedures across three sites.',
  },
  {
    location: 'Eswatini',
    client: 'A parastatal supplying government',
    outcome: 'Established an incident-response retainer and quarterly phishing simulations after a near-miss BEC attempt — staff susceptibility dropped from 28% to 6% in six months.',
  },
];

const faqs = [
  {
    q: 'How long does it take to harden a Microsoft 365 tenant?',
    a: 'Our standard hardening sprint runs 5 working days: MFA enforcement, conditional access, anti-phishing, audit logging, admin-role review and a baseline Secure Score lift from typical 30–45% up to 80%+.',
  },
  {
    q: 'Are you a Managed Security Service Provider (MSSP)?',
    a: 'Yes — for SMEs at our Business and Enterprise tiers we monitor your environment, triage alerts and handle incident response, so you don\'t need an in-house security analyst.',
  },
  {
    q: 'Do you handle the Eswatini Data Protection Act?',
    a: 'Yes. We map your data flows against the Eswatini DPA, align with POPIA where data crosses into South Africa, and produce the data inventory, lawful-basis register and breach-response procedures auditors and the regulator expect.',
  },
  {
    q: 'What about ransomware? Can we recover?',
    a: 'If your backups are immutable and tested (which is part of our Essentials tier), yes — you can refuse the ransom and restore. We run quarterly restore drills precisely so you don\'t find out backup is broken during an incident.',
  },
  {
    q: 'How fast do you respond to an active incident?',
    a: 'Enterprise / Regulated retainer clients get a 30-minute containment call SLA in business hours and a 2-hour SLA outside hours. We will be on the bridge before most internal teams have finished their first coffee.',
  },
  {
    q: 'Do we need a SIEM?',
    a: 'Not always. A SIEM helps once you have enough log volume and a team capable of triaging it. Most Eswatini SMEs are better served by managed EDR and email security first; SIEM enters the picture at the Enterprise tier.',
  },
  {
    q: 'Can you help if we\'ve already been breached?',
    a: 'Yes. Incident-response engagements include containment, forensics, communication support, regulator notification and post-incident hardening. Call us first, then your insurer.',
  },
];

export default function CybersecurityServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1600&q=80" alt="Cybersecurity" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-500/92 to-blue-700/85" />
        <div className="container-max relative z-10">
          <nav className="text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-gold-400">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-gold-400">Services</Link>
            <span className="mx-2">/</span>
            <span>Cybersecurity Services</span>
          </nav>
          <p className="text-gold-400 font-semibold uppercase tracking-wider mb-3 text-sm">Cybersecurity Services</p>
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 max-w-3xl leading-tight">
            Cybersecurity <span className="text-gold-400">Services</span>
          </h1>
          <p className="text-xl text-slate-200 max-w-2xl mb-8">
            Practical, layered security sized for an Eswatini SME or parastatal budget — not a Fortune-500 one.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3 bg-gold-500 text-navy-500 font-bold rounded-lg hover:bg-gold-400 transition-all">
              Talk to a Specialist <ArrowRight size={18} />
            </Link>
            <a href="https://wa.me/26879413899" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-navy-500 transition-all">
              <Phone size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* What This Service Is */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden h-[500px]">
              <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80" alt="Cybersecurity operations" fill className="object-cover" />
            </div>
            <div>
              <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">What This Service Is</p>
              <h2 className="text-4xl font-bold text-navy-500 mb-6">Security That Goes Beyond Antivirus</h2>
              <p className="text-slate-600 text-lg mb-5 leading-relaxed">
                The threat landscape facing Eswatini businesses is the same as the one facing organisations in Johannesburg, Cape Town or London — phishing, ransomware, business-email compromise, insider mistakes, lost laptops. What&apos;s different is the budget and the headcount available to defend against it.
              </p>
              <p className="text-slate-600 text-lg mb-5 leading-relaxed">
                BusiQuip&apos;s Cybersecurity practice designs layered defences sized for our local market: the controls that prevent the overwhelming majority of real-world attacks, deployed pragmatically, monitored continuously, and updated as threats evolve.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                We focus on the controls that consistently show up in post-incident reports as the difference between a near-miss and a six-figure loss in lilangeni: email security, endpoint protection, identity hardening, backup integrity, and staff awareness. Everything is aligned to the Eswatini Data Protection Act and POPIA where cross-border data flows are involved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">What We Do</p>
            <h2 className="text-4xl font-bold text-navy-500 mb-4">Nine Layers of Protection</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Every service addresses a distinct attack vector. Together they close the gaps attackers exploit most.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item) => (
              <div key={item.title} className="service-card-3d">
                <span className="card-spin-bg" aria-hidden="true" />
                <span className="card-bg-mask" aria-hidden="true" />
                <div className="card-content" style={{ alignItems: 'center', textAlign: 'center' }}>
                  <div className="card-icon-3d">{item.icon}</div>
                  <h3 className="text-lg font-bold text-navy-500 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For + Why BusiQuip */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Who it's for */}
            <div className="bg-navy-500 rounded-2xl p-10 text-white">
              <p className="text-gold-400 font-semibold uppercase tracking-wider mb-3 text-sm">Who It&apos;s For</p>
              <h2 className="text-3xl font-bold mb-5">Is This You?</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Any business handling customer data, processing payments, or running on Microsoft 365 — particularly financial services, healthcare, professional services, parastatals and government suppliers in Eswatini.
              </p>
              <p className="text-gold-400 font-semibold">
                If a successful ransomware attack would close you for a week, this is for you.
              </p>
            </div>

            {/* Why BusiQuip */}
            <div>
              <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3 text-sm">Why BusiQuip</p>
              <h2 className="text-3xl font-bold text-navy-500 mb-6">Local Expertise, Global Standards</h2>
              <div className="space-y-4">
                {[
                  'Locally based in Mbabane — same-day on-site response in Mbabane and Manzini',
                  'Engagements priced and contracted in SZL',
                  'Reference clients across Eswatini financial services, government, parastatals and the sugar industry',
                  'Fixed-scope proposals — no scope-creep surprises',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">Our Process</p>
            <h2 className="text-4xl font-bold text-navy-500">Four Phases to a Secure Environment</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((item) => (
              <div key={item.step} className="service-card-3d">
                <span className="card-spin-bg" aria-hidden="true" />
                <span className="card-bg-mask" aria-hidden="true" />
                <div className="card-content" style={{ alignItems: 'center', textAlign: 'center' }}>
                  <div className="process-step-badge card-icon-3d">{item.step}</div>
                  <h3 className="text-lg font-bold text-navy-500 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">What You Get</p>
              <h2 className="text-4xl font-bold text-navy-500 mb-4">Deliverables, Not Slides</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Every engagement ends with concrete deliverables — you don&apos;t pay for slides, you pay for outcomes.
              </p>
              <div className="space-y-3">
                {deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-gold-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-[480px]">
              <Image src="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80" alt="Security deliverables" fill className="object-cover" />
              <div className="absolute inset-0 bg-navy-500/50" />
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <p className="text-white font-bold text-lg mb-1">"Close the gaps before attackers find them"</p>
                <p className="text-slate-300 text-sm">BusiQuip Cybersecurity — Mbabane, Eswatini</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">Engagement & Pricing</p>
            <h2 className="text-4xl font-bold text-navy-500 mb-4">Indicative Pricing in Lilangeni</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Every project gets a fixed-scope quote once we understand your specific needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((p) => (
              <div key={p.tier} className={`rounded-2xl p-8 flex flex-col ${p.highlight ? 'bg-navy-500 text-white ring-4 ring-gold-500' : 'bg-white border-2 border-slate-200'}`}>
                <p className={`text-sm font-bold uppercase tracking-wider mb-2 ${p.highlight ? 'text-gold-400' : 'text-gold-500'}`}>{p.tier}</p>
                <p className={`text-3xl font-bold mb-1 ${p.highlight ? 'text-white' : 'text-navy-500'}`}>{p.price}</p>
                <p className={`text-sm mb-5 ${p.highlight ? 'text-slate-300' : 'text-slate-500'}`}>{p.period}</p>
                <p className={`text-sm mb-2 leading-relaxed flex-grow ${p.highlight ? 'text-slate-200' : 'text-slate-600'}`}>{p.desc}</p>
                <p className={`text-xs font-semibold mb-6 ${p.highlight ? 'text-gold-400' : 'text-slate-500'}`}>{p.size}</p>
                <Link href="/contact" className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${p.highlight ? 'bg-gold-500 text-navy-500 hover:bg-gold-400' : 'bg-navy-500 text-white hover:bg-navy-600'}`}>
                  Get a Quote <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">Where We&apos;ve Done This</p>
            <h2 className="text-4xl font-bold text-navy-500 mb-4">Eswatini Engagements</h2>
            <p className="text-slate-600 max-w-xl mx-auto">A sample of cybersecurity engagements with Eswatini businesses. Specific client details are kept confidential.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs) => (
              <div key={cs.client} className="service-card-3d">
                <span className="card-spin-bg" aria-hidden="true" />
                <span className="card-bg-mask" aria-hidden="true" />
                <div className="card-content">
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-gold-500 bg-gold-500/10 px-3 py-1 rounded-full mb-4">{cs.location}</span>
                  <h3 className="font-bold text-navy-500 mb-3">{cs.client}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{cs.outcome}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-slate-50">
        <div className="container-max max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-gold-500 font-semibold uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-4xl font-bold text-navy-500">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white border border-slate-200 rounded-xl p-6 cursor-pointer hover:border-blue-300 transition-colors">
                <summary className="flex items-center justify-between font-bold text-navy-500 group-open:text-blue-600 list-none">
                  {faq.q}
                  <span className="ml-4 flex-shrink-0 text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-slate-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy-500 text-white text-center">
        <div className="container-max">
          <h2 className="text-4xl font-bold mb-4">Is Your Organisation Truly Secure?</h2>
          <p className="text-xl text-slate-200 mb-8 max-w-xl mx-auto">Book a free 2-week posture assessment and find out exactly where you&apos;re exposed.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-500 font-bold rounded-lg hover:bg-gold-400 transition-all text-lg">
              Book Free Assessment <ArrowRight size={20} />
            </Link>
            <a href="https://wa.me/26879413899" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-navy-500 transition-all text-lg">
              <Phone size={20} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
