import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeUp, FadeIn } from "@/components/shared/Animations";
import { Button } from "@/components/ui/Button";

const steps = [
  {
    label: "Before School Starts",
    desc: "The pressure is off. No grades, no tests, no stress. This is the perfect environment for genuine learning.",
    color: "bg-[#34D399]",
    borderColor: "border-[#34D399]/40",
  },
  {
    label: "Fix Learning Gaps",
    desc: "We identify every foundational gap and close them systematically so nothing is left to chance when school starts.",
    color: "bg-[#FBBF24]",
    borderColor: "border-[#FBBF24]/40",
  },
  {
    label: "Enter Grade 6 Confident",
    desc: "Your child arrives at Grade 6 knowing exactly what they are capable of. That confidence changes everything.",
    color: "bg-[#60A5FA]",
    borderColor: "border-[#60A5FA]/40",
  },
];

export function WhySummerSection() {
  return (
    <section className="py-20 md:py-28 bg-green-50 relative overflow-hidden">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — illustration */}
          <FadeIn delay={0.2}>
            <div className="rounded-3xl bg-white border border-green-100 shadow-sm p-8 relative overflow-hidden">
              {/* Dot pattern overlay */}
              <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
              <Image
                src="/characters/green-showing-note.png"
                alt="Green character showing a note"
                width={400}
                height={420}
                className="object-contain mx-auto relative z-10"
              />
            </div>
          </FadeIn>

          {/* Right column — content */}
          <div className="flex flex-col">
            {/* Section pill */}
            <FadeUp delay={0.1}>
              <span className="inline-block rounded-full bg-green-100 text-green-700 text-sm font-bold px-4 py-1.5 w-fit">
                Why Summer?
              </span>

              {/* Yellow accent bar */}
              {/* <div className="w-12 h-1.5 rounded-full bg-secondary mt-4 mb-6" /> */}

              {/* Heading */}
              <h2 className="text-fluid-h2 font-extrabold text-text-dark font-heading mt-8">
                Fix the Foundation Before It Becomes a Crisis.
              </h2>
            </FadeUp>

            {/* 3-step vertical flow */}
            <FadeUp delay={0.3}>
              <div className="mt-8">
                {steps.map((step, index) => {
                  const isLast = index === steps.length - 1;
                  return (
                    <div key={step.label} className="flex gap-4 items-start">
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-5 h-5 rounded-full ${step.color} shrink-0 mt-0.5`}
                        />
                        {!isLast && (
                          <div
                            className={`w-0.5 h-10 border-l-2 border-dashed ${step.borderColor} mt-1`}
                          />
                        )}
                      </div>
                      <div className="pb-8">
                        <h3 className="font-bold text-text-dark text-lg">
                          {step.label}
                        </h3>
                        <p className="text-muted mt-1">{step.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </FadeUp>

            {/* Supporting paragraph + CTA */}
            <FadeUp delay={0.4}>
              <p className="text-muted mb-6">
                The Middle School Math Readiness Bootcamp runs for 4 focused
                weeks during summer the ideal window to build the
                foundation your child needs.
              </p>
              <Button
                variant="primary"
                size="md"
                href="https://assessment.mindversetutor.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Take the FREE Math Assessment
              </Button>
            </FadeUp>
          </div>
        </div>
      </Container>
    </section>
  );
}
