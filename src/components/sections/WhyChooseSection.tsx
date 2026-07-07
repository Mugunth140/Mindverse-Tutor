import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";

export function WhyChooseSection() {
  return (
    <section className="py-24 md:py-32 relative bg-background overflow-hidden">
      <Container>
        
        {/* Editorial Header */}
        <div className="max-w-3xl mb-16 md:mb-20">

          <FadeUp delay={0.1}>
            <h2 className="text-fluid-h2 font-black text-text-dark leading-[1.1] mb-6">
              Why Parents Worldwide Choose MindVerse
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl text-balance">
              We believe every student learns differently. Our approach goes beyond traditional tutoring to build deep understanding and unshakeable confidence in Grades 1–10.
            </p>
          </FadeUp>
        </div>

        {/* Bento/Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: Large Feature (Blue) */}
          <FadeUp delay={0.2} className="md:col-span-2">
            <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 shadow-card hover:shadow-float transition-all duration-500 border border-muted/5 relative overflow-hidden flex flex-col justify-center min-h-[350px] md:min-h-[400px] group">
              
              {/* Geometric Corner Accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-bl-[100px] pointer-events-none transition-transform duration-700 group-hover:scale-110" />
              
              <div className="relative z-10 max-w-[280px] sm:max-w-sm lg:max-w-md">
                <div className="w-12 h-2 bg-accent-blue rounded-full mb-6 md:mb-8" />
                <h3 className="text-2xl md:text-3xl font-extrabold text-text-dark mb-4">Personalized Learning Plans</h3>
                <p className="text-muted text-base md:text-lg leading-relaxed">
                  No rigid templates. We adapt to how your child naturally learns, ensuring they grasp core concepts deeply rather than just memorizing formulas.
                </p>
              </div>

              {/* Character Illustration */}
              <div className="absolute -bottom-6 -right-6 md:right-4 w-48 h-48 md:w-72 md:h-72 z-10 pointer-events-none transition-transform duration-700 group-hover:-translate-y-3 group-hover:-translate-x-2">
                <Image src="/characters/Blue-Writing.png" alt="Student taking notes" fill className="object-contain object-bottom" />
              </div>
            </div>
          </FadeUp>

          {/* Card 2: Tall Feature (Yellow) */}
          <FadeUp delay={0.3} className="md:col-span-1 md:row-span-2">
            <div className="bg-secondary/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-10 shadow-sm hover:shadow-float transition-all duration-500 border border-secondary/20 relative overflow-hidden flex flex-col h-full min-h-[400px] group">
              
              <div className="relative z-10">
                <div className="w-12 h-2 bg-secondary rounded-full mb-6 md:mb-8" />
                <h3 className="text-2xl md:text-3xl font-extrabold text-text-dark mb-4">Creative & Focused Classes</h3>
                <p className="text-text-dark/70 text-base leading-relaxed mb-6 font-medium">
                  Choose between dedicated 1-on-1 sessions or small cohorts capped at 4 students. Every child gets the undivided attention they deserve.
                </p>
              </div>

              {/* Character Illustration */}
              <div className="relative w-full h-56 md:h-64 mt-auto z-10 pointer-events-none transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2 origin-bottom">
                <Image src="/characters/Yelllow-Teaching.png" alt="Tutor teaching" fill className="object-contain object-bottom" />
              </div>
            </div>
          </FadeUp>

          {/* Card 3: Small Square (Red) */}
          <FadeUp delay={0.4} className="md:col-span-1">
            <div className="bg-accent-red/5 rounded-[2rem] md:rounded-[2.5rem] p-8 shadow-sm hover:shadow-float transition-all duration-500 border border-accent-red/10 relative overflow-hidden min-h-[280px] group">
              
              <div className="w-10 h-2 bg-accent-red rounded-full mb-6" />
              <h3 className="text-xl md:text-2xl font-extrabold text-text-dark mb-3 relative z-10">Building True Confidence</h3>
              <p className="text-muted text-sm md:text-base leading-relaxed relative z-10 max-w-[85%]">
                We replace academic anxiety with excitement, teaching students to believe in their own boundless potential.
              </p>
              
              {/* Character Illustration */}
              <div className="absolute -bottom-6 -right-6 w-36 h-36 opacity-90 pointer-events-none transition-transform duration-700 group-hover:-rotate-6 group-hover:-translate-y-2">
                <Image src="/characters/Red-Using laptop.png" alt="Digital learning" fill className="object-contain object-bottom" />
              </div>
            </div>
          </FadeUp>

          {/* Card 4: Small Square (Green / Dotted) */}
          <FadeUp delay={0.5} className="md:col-span-1 lg:col-span-1">
            <div className="bg-transparent rounded-[2rem] md:rounded-[2.5rem] p-8 hover:bg-white hover:shadow-float transition-all duration-500 border-2 border-dashed border-accent-green/30 relative flex flex-col justify-center min-h-[280px] group cursor-default">
              
              <div className="w-10 h-2 bg-accent-green rounded-full mb-6 opacity-80 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl md:text-2xl font-extrabold text-text-dark mb-3">Transparent Parent Updates</h3>
              <p className="text-muted text-sm md:text-base leading-relaxed">
                Stay in the loop with regular progress reports and direct communication. You’ll always know exactly how your child is growing.
              </p>
            </div>
          </FadeUp>

        </div>
      </Container>
    </section>
  );
}
