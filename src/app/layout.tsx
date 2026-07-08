import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased flex flex-col min-h-screen">
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
