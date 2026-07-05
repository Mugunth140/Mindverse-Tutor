import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";
import { homeContent } from "@/content/home";

export function GlobalPresenceSection() {
  return (
    <section className="py-20 bg-white relative z-20 border-y border-muted/5">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Left: Text */}
          <div className="md:w-1/3 text-center md:text-left">
            <FadeUp>
              <h2 className="text-2xl md:text-3xl font-extrabold text-text-dark mb-3">
                {homeContent.global.title}
              </h2>
              <p className="text-muted text-lg">
                {homeContent.global.subtitle}
              </p>
            </FadeUp>
          </div>

          {/* Right: Badges layout instead of raw stats */}
          <div className="md:w-2/3 flex flex-wrap justify-center md:justify-end gap-3 md:gap-4">
            {homeContent.global.countries.map((country, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-background-alt border border-muted/10 text-text-dark font-bold px-6 py-3 rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
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
