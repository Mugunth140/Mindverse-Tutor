import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeUp, FadeIn } from "@/components/shared/Animations";

export function EducatorSection() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-100 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left column — photo placeholder */}
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="rounded-3xl bg-amber-50 border-2 border-dashed border-amber-200 aspect-[3/4] flex flex-col items-center justify-center relative overflow-hidden max-w-sm mx-auto">
                <div className="text-center p-8">
                  <div className="w-20 h-20 rounded-full bg-amber-200 mx-auto mb-4" />
                  <p className="text-muted text-sm font-medium">Educator Photograph</p>
                  <p className="text-xs text-muted/60 mt-1">Professional photo goes here</p>
                </div>

                {/* Brand anchor — Yellow Teacher mascot in corner */}
                <div className="absolute bottom-0 right-0 w-28">
                  <Image
                    src="/characters/Yelllow-Teaching.png"
                    alt="MindVerse Tutor educator"
                    width={112}
                    height={112}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right column — content */}
          <div>
            <FadeUp delay={0.1}>
              <div className="text-xs font-bold uppercase tracking-widest text-muted mb-2">Meet The Educator</div>
              <div className="w-12 h-1.5 rounded-full bg-secondary mb-6" />
              <h2 className="text-fluid-h2 font-extrabold text-text-dark font-heading">
                [Educator Name]
              </h2>
              <p className="text-accent-blue font-semibold text-lg mt-2">Founder, MindVerse Tutor</p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <p className="text-muted leading-relaxed mt-6">
                With over [X] years of experience teaching students across India, Canada, the United States, Australia, the UAE, and Singapore, [Name] founded MindVerse Tutor with one mission: to make high-quality, personalised education accessible to every child, regardless of where they live in the world.
              </p>

              <p className="text-muted leading-relaxed mt-4">
                {"[Name]'s teaching philosophy is rooted in concept-based learning — ensuring every student not only arrives at the right answer, but deeply understands why it is right. This understanding is what makes mathematical confidence permanent."}
              </p>
            </FadeUp>

            {/* Mission card */}
            <FadeUp delay={0.3}>
              <div className="mt-8 rounded-2xl bg-yellow-50 border border-yellow-200 p-6 relative">
                <div className="w-8 h-1 rounded-full bg-secondary mb-4" />
                <p className="text-text-dark font-semibold leading-relaxed italic">
                  &ldquo;Our mission is to build confident, independent thinkers who are fully prepared for the academic challenges ahead &mdash; one concept at a time.&rdquo;
                </p>
              </div>
            </FadeUp>

            {/* Teaching across the globe */}
            <FadeUp delay={0.4}>
              <div className="mt-6 flex flex-wrap gap-2">
                {["India", "Canada", "USA", "Australia", "UAE", "Singapore"].map((country) => (
                  <span
                    key={country}
                    className="rounded-full bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1.5 border border-slate-200"
                  >
                    {country}
                  </span>
                ))}
              </div>
              <p className="text-xs text-muted mt-2">Teaching students across these countries</p>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}
