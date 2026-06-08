import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-500 to-blue-700 flex items-center justify-center px-4">
      <div className="text-center text-white max-w-md">
        <div className="mb-8">
          <p className="text-8xl font-bold text-gold-500 mb-4">404</p>
          <h1 className="text-4xl font-bold mb-2">Page Not Found</h1>
          <p className="text-xl text-slate-200">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 text-navy-500 font-bold rounded-lg hover:bg-gold-400 transition-colors"
          >
            <Home size={20} />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-navy-500 transition-colors"
          >
            <ArrowLeft size={20} />
            Contact Us
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-300">
          <p className="text-sm text-slate-300">
            Need help? <a href="/contact" className="text-gold-500 hover:underline">Contact our team</a>
          </p>
        </div>
      </div>
    </div>
  );
}
