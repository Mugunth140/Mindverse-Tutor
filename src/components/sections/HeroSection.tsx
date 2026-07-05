import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeUp, FloatingShape, FadeIn } from "@/components/shared/Animations";
import { homeContent } from "@/content/home";

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-32 md:pt-32 md:pb-40 overflow-hidden bg-background">
      {/* Handcrafted subtle background elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 mix-blend-multiply"></div>
      
      {/* Decorative soft shapes (Not purple-heavy) */}
      <FloatingShape className="top-10 left-[10%] w-64 h-64 bg-secondary/10 rounded-full blur-3xl" delay={0} duration={8} />
      <FloatingShape className="bottom-20 right-[10%] w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl" delay={2} duration={10} />
      
      {/* Tiny decorative stars/symbols */}
      <div className="absolute top-32 left-10 text-secondary text-2xl animate-[spin_10s_linear_infinite]">✦</div>
      <div className="absolute bottom-40 left-1/3 text-accent-green text-3xl opacity-50 animate-bounce delay-700">●</div>
      <div className="absolute top-40 right-1/4 text-accent-red text-xl opacity-60">▲</div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left pt-10">
            <FadeUp delay={0.1}>
              <div className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-white shadow-sm border border-muted/10 text-text-dark font-bold text-sm mb-8">
                <span className="text-secondary text-lg">✨</span>
                {homeContent.hero.badge}
              </div>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-text-dark mb-8 tracking-tight text-balance leading-[1.1]">
                Building Strong <span className="text-primary relative inline-block">
                  Foundations
                  <svg className="absolute w-[105%] h-3 -bottom-1 -left-[2%] text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" />
                  </svg>
                </span><br />
                for Lifelong Learning
              </h1>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-lg md:text-xl text-muted mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed text-balance">
                {homeContent.hero.subtitle}
              </p>
            </FadeUp>

            <FadeUp delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button size="xl" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20">
                {homeContent.hero.ctaPrimary}
              </Button>
              <Button size="xl" variant="secondary" className="w-full sm:w-auto bg-white border-2 border-secondary/30 text-text-dark hover:border-secondary hover:bg-secondary/5 shadow-sm">
                {homeContent.hero.ctaSecondary}
              </Button>
            </FadeUp>
          </div>

          {/* Right Visual Scene - Handcrafted Composition */}
          <div className="flex-1 relative w-full max-w-xl lg:max-w-none mx-auto lg:h-[600px] flex items-center justify-center mt-12 lg:mt-0">
            <FadeIn delay={0.5} className="relative w-full aspect-square lg:aspect-auto lg:w-full lg:h-full flex items-center justify-center">
              
              {/* Central Board Element */}
              <div className="relative z-10 w-[75%] lg:w-[85%] drop-shadow-2xl hover:scale-105 transition-transform duration-500">
                <Image src="/characters/Board.png" alt="Learning Board" width={600} height={400} className="object-contain" priority />
              </div>
              
              {/* Characters interacting with the board */}
              <div className="absolute -left-4 md:-left-12 bottom-[10%] w-[45%] drop-shadow-xl z-20 animate-[float_6s_ease-in-out_infinite]">
                <Image src="/characters/Blue-Writing.png" alt="Math Learning" width={300} height={300} className="object-contain" />
              </div>
              
              <div className="absolute -right-4 md:-right-8 top-[15%] w-[40%] drop-shadow-xl z-20 animate-[float_7s_ease-in-out_infinite_reverse]">
                <Image src="/characters/Yelllow-Teaching.png" alt="Tutor Guidance" width={300} height={300} className="object-contain" />
              </div>
              
              {/* Floating Subject Tags */}
              <div className="absolute top-[10%] left-[10%] bg-white px-4 py-2 rounded-xl shadow-float z-30 font-bold text-accent-blue text-sm rotate-[-6deg] animate-[wiggle_4s_ease-in-out_infinite]">
                 Math & Science
              </div>
              <div className="absolute bottom-[20%] right-0 bg-white px-4 py-2 rounded-xl shadow-float z-30 font-bold text-secondary text-sm rotate-[4deg] animate-[wiggle_5s_ease-in-out_infinite_reverse]">
                 Grades 1-10
              </div>

            </FadeIn>
          </div>
          
        </div>
      </Container>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-6deg); }
          50% { transform: rotate(2deg); }
        }
      `}} />
    </section>
  );
}
