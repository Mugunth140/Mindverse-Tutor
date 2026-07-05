import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeUp, FadeIn } from "@/components/shared/Animations";
import { homeContent } from "@/content/home";

export function WhyChooseSection() {
  return (
    <section className="py-32 relative bg-[#F4FCE3] overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Visual: Highly Asymmetrical */}
          <div className="lg:w-5/12 relative min-h-[450px] w-full flex items-center justify-center">
            <FadeIn delay={0.2} className="relative w-full max-w-sm h-full">
              {/* Organic background blob */}
              <div className="absolute inset-0 bg-accent-green/20 rounded-[4rem] rounded-tl-[8rem] rounded-br-[8rem] rotate-12 scale-110 blur-sm" />
              <div className="absolute inset-0 bg-white rounded-[3rem] rounded-tr-[6rem] rounded-bl-[6rem] shadow-soft -rotate-3" />
              
              {/* Mascot breaking the layout */}
              <div className="absolute -top-16 -left-16 w-[120%] h-[120%] z-20 animate-[float_6s_ease-in-out_infinite] pointer-events-none">
                 <Image 
                  src="/characters/Green-Painting.png" 
                  alt="Creativity and Growth" 
                  fill 
                  className="object-contain drop-shadow-2xl" 
                />
              </div>

              {/* Floating Element */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-float font-extrabold text-accent-green z-30 flex items-center gap-3">
                <span className="text-3xl bg-accent-green/10 p-2 rounded-xl">🌱</span>
                <div>
                  <p className="text-xs text-muted uppercase">Approach</p>
                  <p className="text-lg">Natural Growth</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Content: Staggered list */}
          <div className="lg:w-7/12">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-12 leading-[1.15]">
                {homeContent.whyChooseUs.title}
              </h2>
            </FadeUp>
            <div className="space-y-8">
              {homeContent.whyChooseUs.features.map((feature, i) => (
                <FadeUp 
                  key={i} 
                  delay={i * 0.1} 
                  className={`flex gap-6 p-6 rounded-3xl bg-white shadow-card hover:shadow-float transition-shadow ${i % 2 !== 0 ? 'lg:ml-12' : ''}`}
                >
                  <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-background border border-muted/10 shadow-sm flex items-center justify-center text-3xl font-black ${feature.color}`}>
                    {i === 0 ? '✨' : i === 1 ? '🎯' : '🎈'}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-dark mb-2">{feature.title}</h3>
                    <p className="text-muted leading-relaxed text-lg">{feature.description}</p>
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
