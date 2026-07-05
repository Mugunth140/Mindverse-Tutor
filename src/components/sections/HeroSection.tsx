import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeUp, FadeIn } from "@/components/shared/Animations";

export function HeroSection() {
  return (
    <section className="relative pt-8 pb-24 md:pt-16 md:pb-32 overflow-hidden bg-background">
      {/* Extremely subtle educational background decorations */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 mix-blend-multiply pointer-events-none"></div>
      
      {/* Soft color blobs to reduce empty space without overwhelming */}
      <div className="absolute top-10 left-[5%] w-72 h-72 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-[5%] w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Floating educational symbols */}
      <div className="absolute top-24 left-[8%] text-secondary/40 text-4xl animate-[spin_15s_linear_infinite] pointer-events-none">✦</div>
      <div className="absolute bottom-32 left-[40%] text-accent-blue/20 text-4xl font-black pointer-events-none rotate-12">+</div>
      <div className="absolute top-40 right-[40%] text-accent-red/20 text-3xl font-black pointer-events-none -rotate-12">×</div>
      <div className="absolute bottom-[20%] right-[8%] text-accent-green/20 text-5xl font-black pointer-events-none rotate-45">=</div>
      <div className="absolute top-[15%] right-[10%] text-primary/10 text-5xl font-black pointer-events-none">÷</div>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">
          
          {/* Left Text Content */}
          <div className="flex-1 text-center justify-center lg:text-left lg:w-5/12 z-20">
            <FadeUp delay={0.2}>
              <h1 className="text-5xl md:text-6xl font-extrabold text-text-dark mb-6 tracking-tight text-balance leading-[1.15]">
                Where Curious Minds Build <span className="text-primary relative inline-block">
                  Confidence
                  <svg className="absolute w-[105%] h-3 -bottom-1 left-[-2%] text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-lg text-muted mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed text-balance">
                {/* We provide personalized online tutoring that turns frustration into fascination. Our expert teachers help your child master core subjects, build strong academic foundations, and discover the true joy of learning. */}
                When school gets overwhelming, we help bring the spark back. Custom online tutoring that masters the tough subjects and restores their confidence.
              </p>
            </FadeUp>

            <FadeUp delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button size="md" variant="secondary" className="w-full sm:w-auto hover:scale-105 transition-transform">
                Book a Discovery Call
              </Button>
              <Button size="md" variant="outline" className="w-full sm:w-auto bg-white border border-muted/30 text-text-dark hover:border-text-dark hover:bg-text-dark/5 shadow-sm hover:scale-105 transition-transform">
                Take a Free Assessment
              </Button>
            </FadeUp>
          </div>

          {/* Right Visual Scene - Narrative Composition */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto h-[450px] lg:h-[600px] flex items-center justify-center lg:w-7/12 mt-8 lg:mt-0">
            <FadeIn delay={0.5} className="relative w-full h-full flex items-center justify-center">
              
              {/* Central Board Element - The anchor of the scene */}
              <div className="absolute inset-0 m-auto w-[80%] lg:w-[75%] h-fit drop-shadow-xl z-10">
                <Image src="/characters/Board.png" alt="Interactive Learning Board" width={600} height={400} className="object-contain w-full h-auto" priority />
              </div>
              
              {/* Teacher Mascot - Positioned actively teaching on the right */}
              <div className="absolute right-[-5%] md:right-[5%] top-[10%] lg:top-[15%] w-[35%] lg:w-[32%] drop-shadow-2xl z-20 animate-[float_7s_ease-in-out_infinite]">
                <Image src="/characters/Yelllow-Teaching.png" alt="Expert Tutor Guidance" width={300} height={300} className="object-contain w-full h-auto" />
              </div>
              
              {/* Student Mascot - Positioned learning on the left */}
              <div className="absolute left-[-5%] md:left-[2%] bottom-[5%] lg:bottom-[10%] w-[32%] lg:w-[28%] drop-shadow-2xl z-20 animate-[float_6s_ease-in-out_infinite_reverse]">
                <Image src="/characters/Blue-Writing.png" alt="Active Student Learning" width={300} height={300} className="object-contain w-full h-auto" />
              </div>
              
              {/* Meaningful Floating Educational Badges */}
              <div className="absolute top-[8%] left-[12%] lg:left-[5%] bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-float z-30 font-extrabold text-accent-green text-xs lg:text-sm rotate-[-4deg] animate-[wiggle_5s_ease-in-out_infinite] border border-accent-green/10 flex items-center gap-2">
                 <span className="text-lg">⭐</span> Interactive Classes
              </div>
              
              <div className="absolute bottom-[25%] right-[5%] lg:-right-[2%] bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-float z-30 font-extrabold text-accent-blue text-xs lg:text-sm rotate-[5deg] animate-[wiggle_6s_ease-in-out_infinite_reverse] border border-accent-blue/10 flex items-center gap-2">
                 <span className="text-lg">🎯</span> Personalized Path
              </div>

              {/* Tiny floating paper note */}
              <div className="absolute top-[40%] -left-[2%] bg-secondary px-3 py-3 rounded-br-xl rounded-tl-xl rounded-tr-sm rounded-bl-sm shadow-md z-0 rotate-12 opacity-80 animate-[float_8s_ease-in-out_infinite]">
                <span className="font-heading font-black text-white text-sm">A+</span>
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
