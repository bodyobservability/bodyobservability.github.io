import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Body Observability | Coming Soon",
  description: "Body Observability is redefining how we understand and optimize human health through advanced body scanning and data-driven insights. Coming soon.",
  keywords: ["body observability", "health tech", "body scanning", "health optimization", "preventive health", "healthspan"],
  authors: [{ name: "Body Observability" }],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: "Body Observability | Coming Soon",
    description: "Redefining how we understand and optimize human health through advanced body scanning and data-driven insights.",
    type: "website",
    locale: "en_US",
    url: "https://www.bodyobservability.com",
    siteName: "Body Observability",
    images: [
      {
        url: '/bodyobservability-app-icon.png',
        width: 1200,
        height: 1200,
        alt: 'Body Observability',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Body Observability | Coming Soon",
    description: "Redefining how we understand and optimize human health through advanced body scanning and data-driven insights.",
    images: ['/bodyobservability-app-icon.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className={`${roboto.className} quiet-luxury antialiased`}>
        {children}
      </body>
    </html>
  );
}
