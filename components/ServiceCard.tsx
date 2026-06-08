import Link from 'next/link';
import { LucideIcon, ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits?: string[];
  href: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  benefits,
  href,
}: ServiceCardProps) {
  return (
    <Link href={href}>
      <div className="card cursor-pointer h-full hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 group">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
          <Icon className="text-blue-600" size={32} />
        </div>

        <h3 className="text-heading-md text-navy-500 mb-3">{title}</h3>
        <p className="text-body-md text-slate-600 mb-6">{description}</p>

        {benefits && benefits.length > 0 && (
          <ul className="space-y-2 mb-8">
            {benefits.slice(0, 3).map((benefit, idx) => (
              <li key={idx} className="text-sm text-slate-600 flex items-start gap-2">
                <span className="text-gold-500 font-bold mt-1">•</span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex items-center gap-2 text-blue-600 font-bold group-hover:gap-3 transition-all">
          Learn More
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
