import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'BusiQuip | Enterprise Technology Solutions | Eswatini',
  description: 'BusiQuip: 40+ years of enterprise technology excellence. Office automation, IT infrastructure, digital transformation. Trusted by government, finance, and education.',
  keywords: 'technology solutions, office automation, IT infrastructure, digital transformation, Eswatini, Mbabane',
  authors: [{ name: 'BusiQuip Ltd' }],
  openGraph: {
    title: 'BusiQuip - Driving Africa\'s Digital Future',
    description: 'Enterprise technology partner with 40+ years of operational excellence',
    type: 'website',
    url: 'https://busiquip.com',
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://busiquip.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
