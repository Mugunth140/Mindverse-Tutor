import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/shared/Animations";

export function CTASection() {
  return (
    <section className="py-32 relative overflow-visible px-4 bg-background">
      <Container>
        <div className="bg-secondary rounded-[3rem] p-12 md:p-24 text-center relative shadow-float mt-10 overflow-hidden border-4 border-white">
          
          {/* Decorative Pattern inside yellow */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:30px_30px]" />
          
          {/* Mascot breaking the frame */}
          <div className="absolute -top-24 left-[10%] lg:left-[20%] w-56 h-56 z-20 hover:rotate-6 transition-transform duration-500 hidden md:block">
            <Image 
              src="/characters/Red-Using laptop.png" 
              alt="Digital Learning" 
              fill 
              className="object-contain drop-shadow-2xl" 
            />
          </div>
          
          {/* Another mascot */}
          <div className="absolute -bottom-10 right-[5%] lg:right-[15%] w-64 h-64 z-20 hover:-rotate-6 transition-transform duration-500 hidden md:block">
            <Image 
              src="/characters/Purple-Taking in mic.png" 
              alt="Confident Communication" 
              fill 
              className="object-contain drop-shadow-2xl" 
            />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto pt-8">
            <FadeUp>
              <h2 className="text-4xl md:text-6xl font-extrabold text-text-dark mb-6 tracking-tight leading-tight">
                Ready to make learning fun again?
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-xl md:text-2xl text-text-dark/80 mb-12 font-medium">
                Book a call today to discuss your child's needs and discover how our expert tutors can help them thrive.
              </p>
            </FadeUp>
            <FadeUp delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="xl" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 shadow-lg text-lg border-2 border-primary">
                Book a Call
              </Button>
              <Button size="xl" variant="outline" className="w-full sm:w-auto bg-white border-2 border-text-dark/10 text-text-dark hover:border-text-dark/30 shadow-sm text-lg">
                Free Assessment
              </Button>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}
