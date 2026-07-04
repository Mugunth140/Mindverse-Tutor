import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";
import { homeContent } from "@/content/home";

export function StatsSection() {
  return (
    <section className="py-12 bg-white relative z-20">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-muted/10">
          {homeContent.stats.map((stat, i) => (
            <FadeUp key={i} delay={i * 0.1} className="text-center px-4">
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{stat.value}</div>
              <div className="text-sm md:text-base font-medium text-muted uppercase tracking-wider">{stat.label}</div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
