import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeUp, FadeIn } from "@/components/shared/Animations";
import { homeContent } from "@/content/home";

export function WhyChooseSection() {
  return (
    <section className="py-20 md:py-24 lg:py-32 relative bg-[#F4FCE3] overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-16 lg:gap-24">
          
          {/* Left Visual: Mobile Order 2, Desktop Order 1 */}
          <div className="w-full lg:w-5/12 relative min-h-[350px] md:min-h-[450px] flex items-center justify-center order-2 lg:order-1 mt-8 lg:mt-0">
            <FadeIn delay={0.2} className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm h-full">
              {/* Organic background blob */}
              <div className="absolute inset-0 bg-accent-green/20 rounded-[3rem] md:rounded-[4rem] rounded-tl-[6rem] md:rounded-tl-[8rem] rounded-br-[6rem] md:rounded-br-[8rem] rotate-12 scale-110 blur-sm" />
              <div className="absolute inset-0 bg-white rounded-[2rem] md:rounded-[3rem] rounded-tr-[4rem] md:rounded-tr-[6rem] rounded-bl-[4rem] md:rounded-bl-[6rem] shadow-soft -rotate-3" />
              
              {/* Mascot breaking the layout */}
              <div className="absolute -top-12 md:-top-16 -left-8 md:-left-16 w-[120%] h-[120%] z-20 animate-[float_6s_ease-in-out_infinite] pointer-events-none">
                 <Image 
                  src="/characters/Green-Painting.png" 
                  alt="Creativity and Growth" 
                  fill 
                  className="object-contain drop-shadow-2xl" 
                />
              </div>

              {/* Floating Element */}
              <div className="absolute -bottom-4 md:-bottom-6 -right-4 md:-right-6 bg-white p-3 md:p-4 rounded-xl md:rounded-2xl shadow-float font-extrabold text-accent-green z-30 flex items-center gap-2 md:gap-3">
                <span className="text-2xl md:text-3xl bg-accent-green/10 p-1.5 md:p-2 rounded-lg md:rounded-xl">🌱</span>
                <div>
                  <p className="text-[10px] md:text-xs text-muted uppercase">Approach</p>
                  <p className="text-sm md:text-lg">Natural Growth</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Content: Staggered list */}
          <div className="w-full lg:w-7/12 order-1 lg:order-2">
            <FadeUp>
              <h2 className="text-fluid-h2 font-extrabold text-text-dark mb-8 md:mb-12 leading-[1.15] text-center lg:text-left">
                {homeContent.whyChooseUs.title}
              </h2>
            </FadeUp>
            <div className="space-y-6 md:space-y-8">
              {homeContent.whyChooseUs.features.map((feature, i) => (
                <FadeUp 
                  key={i} 
                  delay={i * 0.1} 
                  className={`flex gap-4 md:gap-6 p-5 md:p-6 rounded-2xl md:rounded-3xl bg-white shadow-card hover:shadow-float transition-shadow ${i % 2 !== 0 ? 'lg:ml-12' : ''}`}
                >
                  <div className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-background border border-muted/10 shadow-sm flex items-center justify-center text-2xl md:text-3xl font-black ${feature.color}`}>
                    {i === 0 ? '✨' : i === 1 ? '🎯' : '🎈'}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-1.5 md:mb-2">{feature.title}</h3>
                    <p className="text-muted leading-relaxed text-sm md:text-lg">{feature.description}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
          
        </div>
      </Container>
    </section>
  );
}
