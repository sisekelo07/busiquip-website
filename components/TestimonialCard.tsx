import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  organization: string;
  rating?: number;
}

export default function TestimonialCard({
  quote,
  author,
  title,
  organization,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
      {/* Stars */}
      <div className="flex gap-1 mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={18} className="fill-gold-500 text-gold-500" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-slate-700 mb-8 leading-relaxed italic text-lg">
        "{quote}"
      </p>

      {/* Author */}
      <div className="border-t border-slate-300 pt-6">
        <p className="font-bold text-slate-900">{author}</p>
        <p className="text-sm text-slate-600">{title}</p>
        <p className="text-sm text-slate-500">{organization}</p>
      </div>
    </div>
  );
}
