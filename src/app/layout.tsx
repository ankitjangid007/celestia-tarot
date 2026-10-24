import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { business } from "@/config/business";
import { defaultTitle, siteDescription } from "@/lib/seo";
import "./globals.css";

const cormorant = localFont({
  src: [
    { path: "../fonts/cormorant-normal.woff2", style: "normal" },
    { path: "../fonts/cormorant-italic.woff2", style: "italic" },
  ],
  weight: "300 700",
  variable: "--font-cormorant",
  display: "swap",
});

const inter = localFont({
  src: "../fonts/inter.woff2",
  weight: "100 900",
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.siteUrl),
  applicationName: business.name,
  title: { default: defaultTitle, template: `%s | ${business.name}` },
  description: siteDescription,
  openGraph: {
    title: defaultTitle,
    description: siteDescription,
    url: "/",
    siteName: business.name,
    type: "website",
    locale: "en_IN",
  },
  twitter: { card: "summary", title: defaultTitle, description: siteDescription },
};

export const viewport: Viewport = {
  themeColor: "#21152D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="flex min-h-svh flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:text-midnight"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
