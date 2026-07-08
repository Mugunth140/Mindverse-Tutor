import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeUp, FadeIn } from "@/components/shared/Animations";

export const metadata = {
  title: "Page Not Found | Mindverse Tutor",
};

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-background relative py-20">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] mix-blend-multiply"></div>
      
      {/* Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10 text-center max-w-2xl mx-auto flex flex-col items-center">
        
        {/* Mascot searching in a book */}
        <FadeIn delay={0.1} className="relative w-32 h-32 md:w-80 md:h-56 mb-4 pointer-events-none select-none">
          <Image 
            src="/characters/Blue-Searching-Book.png" 
            alt="Character searching in a book" 
            fill 
            className="object-contain" 
            priority 
          />
        </FadeIn>

        <FadeUp delay={0.2}>
          <h1 className="text-7xl md:text-9xl font-black text-text-dark mb-4 tracking-tight drop-shadow-sm">
            404
          </h1>
        </FadeUp>

        <FadeUp delay={0.3}>
          <h2 className="text-fluid-h3 font-extrabold text-text-dark mb-6">
            Looks like you're <span className="text-accent-blue">lost.</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.4}>
          <Button href="/" variant="primary" size="md">
            Return to Homepage
          </Button>
        </FadeUp>
        
      </Container>
    </div>
  );
}
