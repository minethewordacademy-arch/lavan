import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GlobalProtection from '@/components/GlobalProtection';
import FloatingQuoteButton from '@/components/FloatingQuoteButton';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://lavansolar.co.ke'),
  title: {
    default: 'Lavan Solar Systems | Powered by the Sun. Perfected by Lavan.',
    template: '%s | Lavan Solar Systems',
  },
  description: 'Lavan Solar Systems Limited is a Kenya-based solar energy company delivering clean, reliable, and efficient solar energy solutions for residential and commercial clients.',
  keywords: ['solar Kenya', 'solar panels', 'solar water heating', 'borehole solarization', 'Lavan Solar', 'solar installation Nairobi'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Lavan Solar Systems | Powered by the Sun. Perfected by Lavan.',
    description: 'End-to-end solar PV, water heating, and energy consultation solutions in Kenya.',
    url: 'https://lavansolar.co.ke',
    siteName: 'Lavan Solar Systems',
    images: [
      {
        url: '/images/open-graphs/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Lavan Solar Systems',
      },
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lavan Solar Systems',
    description: 'Kenya’s trusted solar partner.',
    images: ['/images/open-graphs/og-home.jpg'],
  },
  other: {
    'google-site-verification': 'YOUR_GOOGLE_VERIFICATION_CODE', // ⬅️ Replace with your real code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Lavan Solar Systems Limited',
              description: 'Kenya-based solar energy company offering solar PV, water heating, and borehole solarization.',
              url: 'https://lavansolar.co.ke',
              telephone: '+254100766486',
              email: 'info@lavansolar.co.ke',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Omega Business Park',
                addressLocality: 'Nairobi',
                postalCode: '00200',
                addressCountry: 'KE',
              },
              openingHours: 'Mo-Fr 08:00-18:00',
            }),
          }}
        />
      </head>
      <body>
        <GlobalProtection />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingQuoteButton />
      </body>
    </html>
  );
}