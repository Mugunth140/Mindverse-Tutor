import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";
import { homeContent } from "@/content/home";

export function ProgramsSection() {
  return (
    <section className="py-20 md:py-24 lg:py-32 relative bg-background-alt overflow-visible">
      {/* Decorative background SVG curve */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 opacity-50">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[30px] md:h-[50px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFDF8"></path>
        </svg>
      </div>

      <Container className="relative pt-6 md:pt-10">
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <FadeUp>
            <h2 className="text-fluid-h2 font-extrabold text-text-dark mb-4 md:mb-6">
              {homeContent.programs.title}
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-base md:text-lg lg:text-xl text-muted text-balance px-4 sm:px-0">
              {homeContent.programs.subtitle}
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-10">
          {homeContent.programs.items.map((program, i) => (
            <FadeUp 
              key={i} 
              delay={i * 0.1} 
              className={`relative ${i === 1 ? 'lg:mt-12' : ''}`} // Staggered only on lg screens
            >
              <div className={`bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-card hover:shadow-float transition-all duration-300 h-full border ${program.borderColor} group flex flex-col relative`}>
                
                {/* Character floating on the card */}
                <div className="absolute -top-10 md:-top-12 -right-2 md:-right-4 w-24 h-24 md:w-32 md:h-32 z-10 group-hover:scale-110 group-hover:-translate-y-4 transition-transform duration-500 drop-shadow-xl pointer-events-none">
                  <Image src={program.character} alt={program.title} fill className="object-contain" />
                </div>

                <div className="flex flex-wrap gap-2 mb-6 md:mb-8 mt-4 md:mt-6">
                  {program.tags.map((tag, tIndex) => (
                    <span key={tIndex} className={`text-[10px] md:text-xs font-bold px-2.5 md:px-3 py-1 md:py-1.5 rounded-full ${program.color} ${program.textColor}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-text-dark mb-3 md:mb-4 pr-10">{program.title}</h3>
                <p className="text-muted leading-relaxed mb-8 md:mb-10 flex-grow text-sm md:text-base lg:text-lg">{program.description}</p>
                
                <a href="/programs" className={`inline-flex items-center font-bold ${program.textColor} transition-opacity hover:opacity-70 text-base md:text-lg group/link mt-auto w-fit py-2 min-h-[44px]`}>
                  Explore details 
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
