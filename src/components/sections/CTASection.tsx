import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/shared/Animations";

export function CTASection() {
  return (
    <section className="py-20 md:py-24 lg:py-32 relative overflow-visible px-4 bg-background">
      <Container>
        <div className="bg-secondary rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-24 text-center relative shadow-float mt-10 md:mt-16 overflow-visible border-4 border-white">
          
          {/* Decorative Pattern inside yellow */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_2px,transparent_2px)] [background-size:20px_20px] md:[background-size:30px_30px] rounded-[2rem] md:rounded-[3rem]" />
          
          {/* Mascot breaking the frame - responsive hiding */}
          <div className="absolute -top-16 md:-top-20 lg:-top-24 left-[5%] md:left-[10%] lg:left-[20%] w-32 md:w-48 lg:w-56 h-32 md:h-48 lg:h-56 z-20 hover:rotate-6 transition-transform duration-500 hidden sm:block">
            <Image 
              src="/characters/Red-Using laptop.png" 
              alt="Digital Learning" 
              fill 
              className="object-contain drop-shadow-2xl" 
            />
          </div>
          
          {/* Another mascot */}
          <div className="absolute -bottom-8 md:-bottom-10 right-0 md:right-[5%] lg:right-[15%] w-40 md:w-56 lg:w-64 h-40 md:h-56 lg:h-64 z-20 hover:-rotate-6 transition-transform duration-500 hidden sm:block">
            <Image 
              src="/characters/Purple-Taking in mic.png" 
              alt="Confident Communication" 
              fill 
              className="object-contain drop-shadow-2xl" 
            />
          </div>

          <div className="relative z-10 max-w-2xl mx-auto pt-4 sm:pt-12 md:pt-8 lg:pt-8">
            <FadeUp>
              <h2 className="text-fluid-h2 font-extrabold text-text-dark mb-4 md:mb-6 tracking-tight leading-tight">
                Ready to make learning fun again?
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-base md:text-xl lg:text-2xl text-text-dark/80 mb-8 md:mb-12 font-medium px-2">
                Book a call today to discuss your child's needs and discover how our expert tutors can help them thrive.
              </p>
            </FadeUp>
            <FadeUp delay={0.2} className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center w-full">
              <Button size="xl" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 shadow-lg text-base md:text-lg border-2 border-primary">
                Book a Call
              </Button>
              <Button size="xl" variant="outline" className="w-full sm:w-auto bg-white border-2 border-text-dark/10 text-text-dark hover:border-text-dark/30 shadow-sm text-base md:text-lg">
                Free Assessment
              </Button>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}
