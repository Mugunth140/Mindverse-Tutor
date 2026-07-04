import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeUp, FloatingShape, FadeIn } from "@/components/shared/Animations";
import { homeContent } from "@/content/home";

export function HeroSection() {
  return (
    <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-background">
      {/* Decorative blobs */}
      <FloatingShape className="top-10 left-10 w-32 h-32 bg-secondary/20 rounded-full blur-2xl" delay={0} />
      <FloatingShape className="bottom-10 right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl" delay={1} />
      <FloatingShape className="top-1/3 left-1/2 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl" delay={2} />
      
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <FadeUp delay={0.1}>
              <span className="inline-block py-1.5 px-4 rounded-full bg-white shadow-sm border border-primary/10 text-primary font-bold text-sm mb-6">
                {homeContent.hero.badge}
              </span>
            </FadeUp>
            
            <FadeUp delay={0.2}>
              <h1 className="text-5xl md:text-7xl font-extrabold text-text-dark mb-6 tracking-tight text-balance leading-tight">
                Where Learning Feels Like an <span className="text-primary relative inline-block">
                  Adventure
                  <svg className="absolute w-[110%] h-4 -bottom-2 -left-[5%] text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.3}>
              <p className="text-xl md:text-2xl text-muted mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed text-balance">
                {homeContent.hero.subtitle}
              </p>
            </FadeUp>

            <FadeUp delay={0.4} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button size="xl" className="w-full sm:w-auto bg-primary text-white">
                Book a Call
              </Button>
              <Button size="xl" variant="secondary" className="w-full sm:w-auto bg-white border-2 border-secondary/20 hover:border-secondary shadow-sm">
                Free Assessment
              </Button>
            </FadeUp>
          </div>

          {/* Right Visual Scene */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none mx-auto lg:h-[600px] flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
            <FadeIn delay={0.5} className="relative w-full aspect-square lg:aspect-auto lg:w-[120%] lg:h-full lg:-right-10 flex items-center justify-center">
              
              {/* Central backing shape */}
              <div className="absolute inset-0 m-auto w-[80%] h-[80%] bg-white rounded-[3rem] shadow-soft rotate-3 opacity-60"></div>
              <div className="absolute inset-0 m-auto w-[80%] h-[80%] bg-secondary/10 rounded-[3rem] -rotate-3 border-2 border-dashed border-secondary/30"></div>
              
              {/* Characters composition */}
              <div className="absolute top-[10%] left-[10%] w-[35%] drop-shadow-2xl animate-[wiggle_6s_ease-in-out_infinite] hover:scale-110 transition-transform cursor-pointer z-20">
                <Image src="/characters/Blue-Writing.png" alt="Blue Character Writing" width={400} height={400} className="object-contain" />
              </div>
              
              <div className="absolute bottom-[5%] right-[5%] w-[40%] drop-shadow-2xl animate-[float_8s_ease-in-out_infinite] hover:scale-110 transition-transform cursor-pointer z-20">
                <Image src="/characters/Red-Using laptop.png" alt="Red Character Using Laptop" width={400} height={400} className="object-contain" />
              </div>

              <div className="absolute top-[20%] right-[0%] w-[45%] drop-shadow-2xl animate-[float_7s_ease-in-out_infinite_reverse] hover:scale-110 transition-transform cursor-pointer z-10">
                <Image src="/characters/Yelllow-Teaching.png" alt="Yellow Character Teaching" width={400} height={400} className="object-contain" />
              </div>
              
              {/* Floating UI Elements */}
              <div className="absolute top-1/2 left-0 -translate-x-4 -translate-y-1/2 bg-white px-6 py-4 rounded-2xl shadow-float z-30 flex items-center gap-4 animate-[bounce_4s_infinite]">
                 <span className="text-3xl">A+</span>
                 <div>
                   <p className="text-xs font-bold text-muted uppercase">Grade</p>
                   <p className="font-extrabold text-primary">Improved!</p>
                 </div>
              </div>
            </FadeIn>
          </div>
          
        </div>
      </Container>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
      `}} />
    </section>
  );
}
