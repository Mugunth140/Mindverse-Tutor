import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeUp, FadeIn } from "@/components/shared/Animations";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background min-h-[calc(100vh-80px)] flex items-center justify-center">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 mix-blend-multiply pointer-events-none"></div>
      
      {/* Soft color blobs */}
      <div className="absolute top-0 md:top-10 left-[-10%] md:left-[5%] w-64 md:w-72 h-64 md:h-72 bg-secondary/10 md:bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] md:right-[5%] w-80 md:w-96 h-80 md:h-96 bg-accent-blue/10 md:bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Floating educational symbols - Hidden on very small screens to avoid clutter */}
      <div className="hidden sm:block absolute top-20 md:top-24 left-[5%] md:left-[8%] text-secondary/40 text-2xl md:text-4xl animate-[spin_15s_linear_infinite] pointer-events-none">✦</div>
      <div className="hidden md:block absolute bottom-32 left-[40%] text-accent-blue/20 text-4xl font-black pointer-events-none rotate-12">+</div>
      <div className="hidden sm:block absolute top-32 md:top-40 right-[10%] md:right-[40%] text-accent-red/20 text-2xl md:text-3xl font-black pointer-events-none -rotate-12">×</div>
      <div className="absolute bottom-[10%] md:bottom-[20%] right-[5%] md:right-[8%] text-accent-green/20 text-4xl md:text-5xl font-black pointer-events-none rotate-45">=</div>
      <div className="hidden lg:block absolute top-[15%] right-[10%] text-primary/10 text-5xl font-black pointer-events-none">÷</div>

      <Container className="relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-8 xl:gap-12 w-full">
          
          {/* Text Content */}
          <div className="w-full flex-1 text-center lg:text-left pt-4 md:pt-8 lg:pt-10 z-20">
            <FadeUp delay={0.2}>
              <h1 className="text-fluid-h1 font-extrabold text-text-dark mb-4 md:mb-6 tracking-tight text-balance">
                Where Curious Minds Build <span className="text-primary relative inline-block">
                  Confidence
                  <svg className="absolute w-[105%] h-2 md:h-3 -bottom-0.5 md:-bottom-1 left-[-2%] text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-base md:text-lg text-muted mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed text-balance px-4 sm:px-0">
                We provide personalized online tutoring with 1 on 1 sessions that turns frustration into fascination. Our expert tutors help your child master core subjects, build strong academic foundations, and discover the true joy of learning.
              </p>
            </FadeUp>

            <FadeUp delay={0.4} className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start items-center w-full sm:w-auto px-4 sm:px-0">
              <Button href="/book-call" size="lg" variant="secondary" className="w-full sm:w-auto text-base md:text-lg">Book a Discovery Call</Button>
              <Button href="https://assessment.mindversetutor.com" target="_blank" rel="noopener noreferrer" size="lg" variant="outline" className="w-full sm:w-auto bg-white border border-muted/20 text-text-dark hover:border-text-dark/50 hover:bg-text-dark/5 transition-transform text-base md:text-lg">
                Take a Free Assessment
              </Button>
            </FadeUp>
          </div>

          {/* Visual Scene */}
          <div className="w-full flex-1 relative max-w-md md:max-w-xl lg:max-w-none mx-auto h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center mt-4 md:mt-8 lg:mt-0">
            <FadeIn delay={0.5} className="relative w-full h-full flex items-center justify-center">
              
              {/* Central Board */}
              <div className="absolute inset-0 m-auto w-[90%] sm:w-[85%] lg:w-[80%] h-fit drop-shadow-xl z-10 flex justify-center items-center">
                <Image src="/characters/Board.png" alt="Interactive Learning Board" width={600} height={400} className="object-contain w-full h-auto" priority />
              </div>
              
              {/* Teacher Mascot */}
              <div className="absolute right-[-2%] sm:right-0 md:right-[2%] lg:right-[5%] xl:right-[10%] top-[5%] md:top-[10%] lg:top-[15%] w-[40%] sm:w-[35%] lg:w-[32%] drop-shadow-2xl z-20 animate-[float_7s_ease-in-out_infinite]">
                <Image src="/characters/Yelllow-Teaching.png" alt="Expert Tutor Guidance" width={300} height={300} className="object-contain w-full h-auto" priority />
              </div>
              
              {/* Student Mascot */}
              <div className="absolute left-[-2%] sm:left-0 md:left-[2%] lg:left-[5%] xl:left-[10%] bottom-[0%] sm:bottom-[5%] lg:bottom-[10%] w-[35%] sm:w-[32%] lg:w-[28%] drop-shadow-2xl z-20 animate-[float_6s_ease-in-out_infinite_reverse]">
                <Image src="/characters/Blue-Writing.png" alt="Active Student Learning" width={300} height={300} className="object-contain w-full h-auto" priority />
              </div>
              
              {/* Badges */}
              <div className="absolute top-[2%] md:top-[8%] left-[5%] md:left-[10%] lg:left-[5%] bg-white/95 backdrop-blur-sm px-3 md:px-4 py-2 md:py-2.5 rounded-xl md:rounded-2xl shadow-float z-30 font-extrabold text-accent-green text-[10px] md:text-xs lg:text-sm rotate-[-4deg] animate-[wiggle_5s_ease-in-out_infinite] border border-accent-green/10 flex items-center gap-1.5 md:gap-2">
                 <span className="text-base md:text-lg">⭐</span> <span className="hidden sm:inline">Interactive Classes</span><span className="sm:hidden">Interactive</span>
              </div>
              
              <div className="absolute bottom-[15%] md:bottom-[25%] right-[2%] md:right-[5%] lg:-right-[2%] bg-white/95 backdrop-blur-sm px-3 md:px-4 py-2 md:py-2.5 rounded-xl md:rounded-2xl shadow-float z-30 font-extrabold text-accent-blue text-[10px] md:text-xs lg:text-sm rotate-[5deg] animate-[wiggle_6s_ease-in-out_infinite_reverse] border border-accent-blue/10 flex items-center gap-1.5 md:gap-2">
                 <span className="text-base md:text-lg">🎯</span> <span className="hidden sm:inline">Personalized Path</span><span className="sm:hidden">Personalized</span>
              </div>

              {/* Note */}
              <div className="absolute top-[35%] md:top-[40%] left-0 md:-left-[2%] bg-secondary px-2 md:px-3 py-2 md:py-3 rounded-br-xl rounded-tl-xl rounded-tr-sm rounded-bl-sm shadow-md z-0 rotate-12 opacity-80 animate-[float_8s_ease-in-out_infinite]">
                <span className="font-heading font-black text-white text-xs md:text-sm">A+</span>
              </div>

            </FadeIn>
          </div>
          
        </div>
      </Container>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-4deg); }
          50% { transform: rotate(3deg); }
        }
      `}} />
    </section>
  );
}
