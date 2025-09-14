import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout";
import AnalyticsLoader from "@/components/analytics/AnalyticsLoader";
import CookieConsentBanner from "@/components/consent/CookieConsentBanner";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: 'mekanapp - Dijital Loyalty Platform',
    template: '%s | mekanapp'
  },
  description: 'İzmir\'in önde gelen dijital müşteri sadakat platformu. Şans çarkı, QR menü ve analytics çözümleri ile işletmenizi dijitalleştirin, müşteri memnuniyetini artırın.',
  keywords: [
    'dijital loyalty',
    'müşteri sadakati',
    'şans çarkı',
    'QR menü',
    'İzmir işletme',
    'dijital dönüşüm',
    'restaurant teknoloji',
    'cafe çözümleri',
    'müşteri etkileşimi',
    'analytics dashboard',
    'loyalty program',
    'gamification'
  ],
  authors: [{ name: 'mekanapp', url: 'https://mekanup.com' }],
  creator: 'mekanapp',
  publisher: 'mekanapp',
  category: 'Business Technology',
  classification: 'Business',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mekanup.com'),
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/',
    },
  },
  openGraph: {
    title: 'mekanapp - İzmir\'in Dijital Loyalty Platformu',
    description: 'Şans çarkı, QR menü ve analytics ile işletmenizi dijitalleştirin. İzmir\'de 150+ işletmenin güvendiği platform.',
    url: 'https://mekanup.com',
    siteName: 'mekanapp',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'mekanapp Dijital Loyalty Platform - Şans Çarkı ve QR Menü Çözümleri',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
    countryName: 'Turkey',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mekanapp - İzmir\'in Dijital Loyalty Platformu',
    description: 'Şans çarkı, QR menü ve analytics ile işletmenizi dijitalleştirin',
    images: ['/opengraph-image'],
    creator: '@mekanapp',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'mekanapp',
    'application-name': 'mekanapp',
    'msapplication-TileColor': '#3B82F6',
    'theme-color': '#3B82F6',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Layout>
          {children}
        </Layout>
        {/* Consent & Analytics */}
        <CookieConsentBanner />
        <AnalyticsLoader />
      </body>
    </html>
  );
}
