import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  variant?: 'default' | 'simple';
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  variant = 'default',
}: HeroProps) {
  if (variant === 'simple') {
    return (
      <div className="bg-gradient-to-br from-navy-500 to-blue-700 text-white py-24">
        <div className="container-max">
          <nav className="text-sm text-slate-300 mb-8">
            <Link href="/" className="hover:text-gold-500">Home</Link>
            <span className="mx-2">/</span>
            <span>{title}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-slate-200">{subtitle}</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-500/90 to-blue-700/90"></div>

      {/* Content */}
      <div className="container-max relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl text-slate-100 mb-8">
            {subtitle}
          </p>
          {description && (
            <p className="text-lg text-slate-200 mb-8 leading-relaxed">
              {description}
            </p>
          )}

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="btn-primary bg-gold-500 text-navy-500 hover:bg-gold-400 group"
              >
                {primaryCTA.text}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="px-7 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-navy-500 transition-all duration-200 inline-flex items-center justify-center gap-2"
              >
                {secondaryCTA.text}
              </Link>
            )}
          </div>

          {/* Trust Signals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-slate-300/30">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-gold-500 flex-shrink-0" size={24} />
              <div>
                <p className="text-sm text-slate-200 font-semibold">40+ Years</p>
                <p className="text-xs text-slate-300">Operational Excellence</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-gold-500 flex-shrink-0" size={24} />
              <div>
                <p className="text-sm text-slate-200 font-semibold">36+ Clients</p>
                <p className="text-xs text-slate-300">Major Enterprises</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="text-gold-500 flex-shrink-0" size={24} />
              <div>
                <p className="text-sm text-slate-200 font-semibold">99.9% Uptime</p>
                <p className="text-xs text-slate-300">SLA Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
