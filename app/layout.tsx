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
  openGraph: {
    title: "Body Observability | Coming Soon",
    description: "Redefining how we understand and optimize human health through advanced body scanning and data-driven insights.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Body Observability | Coming Soon",
    description: "Redefining how we understand and optimize human health through advanced body scanning and data-driven insights.",
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
