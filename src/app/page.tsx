import { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { GlobalPresenceSection } from "@/components/sections/GlobalPresenceSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { TestimonialsWall } from "@/components/bootcamp/TestimonialsWall";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Mindverse Tutor | Top Educational Programs & Tutoring",
  description: "Join Mindverse Tutor for engaging, personalized educational programs that build strong foundations and unshakeable confidence in students globally.",
  alternates: {
    canonical: "https://mindversetutor.com",
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Mindverse Tutor",
    "url": "https://mindversetutor.com",
    "logo": "https://mindversetutor.com/logo.png",
    "description": "Playful, modern, and trustworthy educational programs for children globally.",
    "sameAs": [
      // Add social links here if known, e.g., "https://instagram.com/mindversetutor"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <GlobalPresenceSection />
      <ProgramsSection />
      <WhyChooseSection />
      <TestimonialsWall />
      <CTASection />
    </>
  );
}
