import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";
import { Button } from "@/components/ui/Button";

const subjectChips = [
  { label: "Number Sense", className: "bg-yellow-100 text-yellow-800 border border-yellow-200" },
  { label: "Fractions", className: "bg-blue-100 text-blue-800 border border-blue-200" },
  { label: "Decimals", className: "bg-green-100 text-green-800 border border-green-200" },
  { label: "Geometry", className: "bg-orange-100 text-orange-800 border border-orange-200" },
  { label: "Reasoning", className: "bg-slate-100 text-slate-700 border border-slate-200" },
  { label: "Place Value", className: "bg-yellow-100 text-yellow-800 border border-yellow-200" },
  { label: "Measurement", className: "bg-green-100 text-green-800 border border-green-200" },
];

const sampleOptions = ["0.75", "6/8", "75%", "All of the above"];

export function AssessmentShowcase() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Large decorative amber blob */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-100 rounded-full blur-[120px] opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/2" />

      <Container className="relative z-10">
        {/* Centered header */}
        <FadeUp delay={0.1} className="flex flex-col items-center text-center">
          <span className="rounded-full bg-yellow-200 text-yellow-800 text-sm font-bold px-4 py-1.5 mb-5">
            FREE Assessment
          </span>
          <h2 className="text-fluid-h2 font-extrabold text-text-dark font-heading text-center">
            We Assess Before We Teach.
          </h2>
        </FadeUp>

        <FadeUp delay={0.2} className="flex justify-center mt-4 mb-0">
          <p className="text-center text-muted max-w-2xl text-lg">
            Every student starts with a FREE Math Readiness Assessment — so we know exactly where to begin, and where not to waste time.
          </p>
        </FadeUp>

        {/* Card + flanking mascots */}
        <FadeUp delay={0.3}>
          <div className="relative mt-12 max-w-3xl mx-auto">
            {/* Left mascot */}
            <div className="absolute bottom-0 left-0 -ml-6 hidden lg:block">
              <Image
                src="/characters/Yelllow-Teaching.png"
                alt="Mascot teaching"
                width={176}
                height={220}
                className="object-contain w-32 md:w-44"
              />
            </div>

            {/* Right mascot */}
            <div className="absolute bottom-0 right-0 -mr-4 hidden lg:block">
              <Image
                src="/characters/blue-shows-paper-with-star.png"
                alt="Mascot showing starred paper"
                width={144}
                height={180}
                className="object-contain w-28 md:w-36"
              />
            </div>

            {/* Assessment card */}
            <div className="rounded-3xl bg-white shadow-[0_20px_80px_-20px_rgba(0,0,0,0.1)] border border-yellow-100 p-8 md:p-12">
              {/* Card header row */}
              <div className="flex items-center justify-between flex-wrap gap-3 mb-8">
                <div>
                  <div className="text-xs font-bold text-muted uppercase tracking-widest mb-1">
                    Math Readiness Assessment
                  </div>
                  <div className="text-xl font-extrabold text-text-dark font-heading">
                    Grade 6 Preparation · Summer 2025
                  </div>
                </div>
                <div className="rounded-full bg-green-100 text-green-700 text-sm font-bold px-4 py-1.5">
                  FREE
                </div>
              </div>

              {/* Subject chips */}
              <div className="flex flex-wrap gap-2">
                {subjectChips.map((chip) => (
                  <span
                    key={chip.label}
                    className={`rounded-full text-sm font-semibold px-4 py-1.5 ${chip.className}`}
                  >
                    {chip.label}
                  </span>
                ))}
              </div>

              <hr className="border-dashed border-slate-200 my-8" />

              {/* Mock question area */}
              <div
                className="rounded-2xl bg-amber-50 border border-amber-100 p-6"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(transparent, transparent 27px, #fde68a40 27px, #fde68a40 28px)",
                }}
              >
                <div className="text-xs font-bold text-muted uppercase tracking-widest mb-3">
                  Sample Question · Fractions
                </div>
                <p className="text-text-dark font-medium text-lg mb-6">
                  Which of the following is equivalent to{" "}
                  <span className="font-mono bg-white px-2 py-0.5 rounded border">3/4</span>?
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {sampleOptions.map((opt, i) => (
                    <div
                      key={i}
                      className={`rounded-xl border-2 px-4 py-3 text-center font-semibold text-sm cursor-default ${
                        i === 3
                          ? "border-green-400 bg-green-50 text-green-700"
                          : "border-slate-200 bg-white text-text-dark"
                      }`}
                    >
                      {opt}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted mt-4 italic">
                  This is a sample question for illustration purposes only.
                </p>
              </div>

              {/* Card footer */}
              <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-dashed border-slate-200">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-green" />
                  <span className="text-sm font-medium text-muted">Personalised</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
                  <span className="text-sm font-medium text-muted">30 Minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-blue" />
                  <span className="text-sm font-medium text-muted">Expert-Reviewed Results</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent-red" />
                  <span className="text-sm font-medium text-muted">Results in 48 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* CTA below card */}
        <FadeUp delay={0.4} className="text-center mt-10">
          <Button
            variant="primary"
            size="xl"
            href="https://assessment.mindversetutor.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Take the FREE Math Readiness Assessment
          </Button>
          <p className="text-sm text-muted mt-4">Free · No commitment · Takes 30 minutes</p>
        </FadeUp>
      </Container>
    </section>
  );
}
