import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";
import { homeContent } from "@/content/home";

export function GlobalPresenceSection() {
  return (
    <section className="py-16 md:py-20 bg-white relative z-20 border-y border-muted/5">
      <Container>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-10">
          
          {/* Left: Text */}
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <FadeUp>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-text-dark mb-2 md:mb-3">
                {homeContent.global.title}
              </h2>
              <p className="text-muted text-base md:text-lg">
                {homeContent.global.subtitle}
              </p>
            </FadeUp>
          </div>

          {/* Right: Badges layout */}
          <div className="w-full lg:w-2/3 flex flex-wrap justify-center lg:justify-end gap-2.5 md:gap-3 lg:gap-4">
            {homeContent.global.countries.map((country, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-background-alt border border-muted/10 text-text-dark font-bold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-sm md:text-base">
                  {country.includes('UAE') ? (
                    <span className="text-muted/60">{country}</span>
                  ) : (
                    <span>{country}</span>
                  )}
                </div>
              </FadeUp>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
