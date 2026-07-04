import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeUp, FadeIn } from "@/components/shared/Animations";
import { homeContent } from "@/content/home";

export function WhyChooseSection() {
  return (
    <section className="py-32 relative bg-background overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <div className="lg:w-1/2 relative min-h-[500px] w-full flex items-center justify-center order-2 lg:order-1">
            <FadeIn delay={0.3} className="relative w-full h-full max-w-md">
              {/* Backing shape */}
              <div className="absolute inset-0 bg-primary/5 rounded-[3rem] -rotate-6 scale-105 border-4 border-dashed border-primary/20" />
              
              <div className="relative z-10 w-full aspect-square">
                {/* Board in the center */}
                <Image 
                  src="/characters/Board.png" 
                  alt="MindVerse Learning Board" 
                  fill 
                  className="object-contain drop-shadow-xl" 
                />
              </div>

              {/* Presenter overlapping */}
              <div className="absolute -bottom-10 -right-10 w-[60%] h-[60%] z-20 animate-[float_6s_ease-in-out_infinite]">
                 <Image 
                  src="/characters/Purple-Taking in mic.png" 
                  alt="Tutor Presenting" 
                  fill 
                  className="object-contain drop-shadow-2xl" 
                />
              </div>

              {/* Decorative badges */}
              <div className="absolute top-10 -left-10 bg-white py-3 px-6 rounded-2xl shadow-float font-extrabold text-accent-green flex items-center gap-3 z-30 rotate-[-5deg]">
                <span className="text-2xl">⭐</span> Top Rated Tutors
              </div>
            </FadeIn>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-10 leading-tight">
                {homeContent.whyChooseUs.title}
              </h2>
            </FadeUp>
            <div className="space-y-10">
              {homeContent.whyChooseUs.features.map((feature, i) => (
                <FadeUp key={i} delay={i * 0.1} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white border border-primary/10 shadow-sm text-primary flex items-center justify-center text-2xl font-black group-hover:scale-110 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
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
