import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";
import { homeContent } from "@/content/home";

export function ProgramsSection() {
  return (
    <section className="py-24 relative overflow-visible mt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-accent-blue/5 skew-y-3 origin-top-left -z-10 shadow-sm border-y border-accent-blue/10"></div>
      
      <Container className="relative">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
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
          
          <FadeUp delay={0.2} className="hidden md:block relative w-48 h-48 -mb-10 mr-10 z-10">
            <Image src="/characters/Green-Painting.png" alt="Creative Learning" fill className="object-contain drop-shadow-xl hover:scale-110 transition-transform origin-bottom" />
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {homeContent.programs.items.map((program, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-soft hover:shadow-float transition-all duration-300 h-full border border-white hover:border-accent-blue/30 group hover:-translate-y-2 relative overflow-hidden">
                {/* Decorative background circle */}
                <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-10 transition-transform group-hover:scale-150 duration-500 ${program.color}`}></div>
                
                <div className={`w-20 h-20 rounded-2xl ${program.color} text-4xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-6 transition-transform relative z-10 text-white`}>
                  {program.icon}
                </div>
                <h3 className="text-3xl font-extrabold text-text-dark mb-4 relative z-10">{program.title}</h3>
                <p className="text-muted leading-relaxed mb-8 relative z-10 text-lg">{program.description}</p>
                <a href="/programs" className="inline-flex items-center text-primary font-bold hover:text-accent-blue transition-colors text-lg relative z-10 group/link">
                  Explore program <span className="ml-2 group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
