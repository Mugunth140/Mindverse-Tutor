import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";
import { homeContent } from "@/content/home";

export function ProgramsSection() {
  return (
    <section className="py-32 relative bg-background-alt overflow-visible">
      {/* Decorative background SVG curve */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 opacity-50">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#FFFFFF"></path>
        </svg>
      </div>

      <Container className="relative pt-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-extrabold text-text-dark mb-6">
              {homeContent.programs.title}
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-xl text-muted text-balance">
              {homeContent.programs.subtitle}
            </p>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
          {homeContent.programs.items.map((program, i) => (
            <FadeUp 
              key={i} 
              delay={i * 0.1} 
              className={`relative ${i === 1 ? 'md:mt-12' : ''}`} // Staggered middle card
            >
              <div className={`bg-white rounded-[2.5rem] p-8 md:p-10 shadow-card hover:shadow-float transition-all duration-300 h-full border ${program.borderColor} group flex flex-col relative`}>
                
                {/* Character floating on the card */}
                <div className="absolute -top-12 -right-4 w-32 h-32 z-10 group-hover:scale-110 group-hover:-translate-y-4 transition-transform duration-500 drop-shadow-xl pointer-events-none">
                  <Image src={program.character} alt={program.title} fill className="object-contain" />
                </div>

                <div className="flex flex-wrap gap-2 mb-8 mt-6">
                  {program.tags.map((tag, tIndex) => (
                    <span key={tIndex} className={`text-xs font-bold px-3 py-1.5 rounded-full ${program.color} ${program.textColor}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-extrabold text-text-dark mb-4 pr-10">{program.title}</h3>
                <p className="text-muted leading-relaxed mb-10 flex-grow text-lg">{program.description}</p>
                
                <a href="/programs" className={`inline-flex items-center font-bold ${program.textColor} transition-opacity hover:opacity-70 text-lg group/link mt-auto`}>
                  Explore details 
                  <span className="ml-2 bg-white shadow-sm w-8 h-8 rounded-full flex items-center justify-center group-hover/link:translate-x-2 transition-transform border border-muted/10">
                    →
                  </span>
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
