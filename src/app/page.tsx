import { HeroSection } from "@/components/sections/HeroSection";
import { GlobalPresenceSection } from "@/components/sections/GlobalPresenceSection";
import { ProgramsSection } from "@/components/sections/ProgramsSection";
import { WhyChooseSection } from "@/components/sections/WhyChooseSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <GlobalPresenceSection />
      <ProgramsSection />
      <WhyChooseSection />
      <CTASection />
    </>
  );
}
