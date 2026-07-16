import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mindversetutor.com"),
  title: {
    template: "%s | Mindverse Tutor",
    default: "Mindverse Tutor | Top Educational Programs & Tutoring",
  },
  description: "Playful, modern, and trustworthy educational programs for children. Build strong foundations and unshakeable confidence with Mindverse Tutor.",
  keywords: ["Mindverse Tutor", "Online Tutoring", "Mathematics", "Education", "Summer Programs", "Learning Pathways"],
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  openGraph: {
    title: "Mindverse Tutor | Educational Excellence",
    description: "Playful, modern, and trustworthy educational programs for children.",
    url: "https://mindversetutor.com",
    siteName: "Mindverse Tutor",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindverse Tutor",
    description: "Build strong foundations and unshakeable confidence with Mindverse Tutor.",
  },
};

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PlausibleAnalytics } from "@/components/PlausibleAnalytics";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1343299310662986');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1343299310662986&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <PlausibleAnalytics />
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
      <Analytics />
    </html>
  );
}
