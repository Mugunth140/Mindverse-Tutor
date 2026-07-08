import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";

const steps = [
  {
    num: 1,
    label: "Understand",
    color: "#FBBF24",
    bg: "bg-yellow-100",
    border: "border-yellow-200",
    desc: "We explain the concept clearly and simply before any practice begins. Understanding WHY always comes before HOW.",
    mascot: null,
  },
  {
    num: 2,
    label: "Visualize",
    color: "#60A5FA",
    bg: "bg-blue-100",
    border: "border-blue-200",
    desc: "Students see the concept through diagrams, models, and real-world examples that make abstract ideas concrete.",
    mascot: null,
  },
  {
    num: 3,
    label: "Practice",
    color: "#34D399",
    bg: "bg-green-100",
    border: "border-green-200",
    desc: "Guided problem-solving with carefully sequenced difficulty — always supported, never overwhelming.",
    mascot: null,
  },
  {
    num: 4,
    label: "Explain",
    color: "#FBBF24",
    bg: "bg-yellow-100",
    border: "border-yellow-200",
    desc: "Students explain their thinking back to the teacher. If you can teach it, you truly understand it.",
    mascot: "green-showing-note.png",
  },
  {
    num: 5,
    label: "Apply",
    color: "#60A5FA",
    bg: "bg-blue-100",
    border: "border-blue-200",
    desc: "Real-world application and word problems — where the concept meets actual life and meaning.",
    mascot: null,
  },
  {
    num: 6,
    label: "Master",
    color: "#34D399",
    bg: "bg-green-100",
    border: "border-green-200",
    desc: "Independent problem-solving with full confidence. The student owns the concept — no teacher needed.",
    mascot: null,
  },
];

export function TeachingPhilosophy() {
  return (
    <section className="py-20 md:py-28 bg-green-50 relative overflow-hidden">
      <Container>
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <FadeUp delay={0.1}>
            <span className="inline-block rounded-full bg-green-100 text-green-700 text-sm font-bold px-4 py-1.5 mb-4">
              Our Teaching Method
            </span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-fluid-h2 font-extrabold text-text-dark font-heading mb-4">
              How We Teach
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              Every session follows the same six-step learning path — proven to
              build deep, lasting understanding.
            </p>
          </FadeUp>
        </div>

        {/* Steps */}
        <div className="max-w-xl mx-auto">
          {steps.map((step, index) => (
            <FadeUp key={step.num} delay={0.1 * index + 0.2}>
              <div className="flex gap-4 items-start pb-8 last:pb-0 relative">
                {/* Circle + connector line */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.num}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className="w-0.5 flex-1 min-h-[40px] border-l-2 border-dashed mt-2"
                      style={{ borderColor: step.color + "60" }}
                    />
                  )}
                </div>

                {/* Content card */}
                <div
                  className={`rounded-2xl ${step.bg} border ${step.border} p-5 flex-1 mb-2${step.mascot ? " flex gap-4 items-center" : ""}`}
                >
                  <div className="flex-1">
                    <h3 className="font-extrabold text-text-dark text-lg font-heading">
                      {step.label}
                    </h3>
                    <p className="text-muted text-sm mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  {step.mascot && (
                    <div className="flex-shrink-0">
                      <Image
                        src={`/characters/${step.mascot}`}
                        alt={step.label}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
