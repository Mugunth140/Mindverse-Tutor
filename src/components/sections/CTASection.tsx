import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeUp } from "@/components/shared/Animations";

export function CTASection() {
  return (
    <section className="py-32 relative overflow-visible px-4">
      <Container>
        <div className="bg-primary rounded-[3rem] p-12 md:p-24 text-center relative shadow-float mt-10">
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full -translate-x-1/4 translate-y-1/4 pointer-events-none" />
          
          {/* Mascot breaking the frame */}
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 z-20 hover:-translate-y-4 transition-transform duration-500">
            <Image 
              src="/characters/Blue-Writing.png" 
              alt="Ready to learn" 
              fill 
              className="object-contain drop-shadow-2xl" 
            />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto pt-16">
            <FadeUp>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
                Ready to make learning fun again?
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="text-xl md:text-2xl text-white/90 mb-12 font-medium">
                Book a call today to discuss your child's needs and discover how our expert tutors can help them thrive.
              </p>
            </FadeUp>
            <FadeUp delay={0.2} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="xl" variant="secondary" className="w-full sm:w-auto text-primary hover:text-primary shadow-lg text-lg">
                Book a Call
              </Button>
              <Button size="xl" className="w-full sm:w-auto bg-primary text-white border-2 border-white/20 hover:bg-white/10 text-lg">
                Free Assessment
              </Button>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}
