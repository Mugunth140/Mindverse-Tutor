import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";

interface TimelineStep {
  accent: string;
  circleClass: string;
  cardBorderClass: string;
  label: string;
  description: string;
  visual: "image-star" | "gap-visual" | "image-laptop" | "image-book";
}

const steps: TimelineStep[] = [
  {
    accent: "blue",
    circleClass: "bg-accent-blue",
    cardBorderClass: "border-accent-blue/10",
    label: "Elementary School",
    description:
      "Your child is learning at their own pace. Concepts are introduced gently, and small misunderstandings seem harmless.",
    visual: "image-star",
  },
  {
    accent: "yellow",
    circleClass: "bg-secondary",
    cardBorderClass: "border-yellow-300/30",
    label: "Hidden Learning Gaps Form",
    description:
      "Small misunderstandings quietly accumulate. Each skipped concept becomes a crack in the foundation — invisible until it is too late.",
    visual: "gap-visual",
  },
  {
    accent: "red",
    circleClass: "bg-accent-red",
    cardBorderClass: "border-accent-red/10",
    label: "Confidence Drops",
    description:
      "The child starts avoiding math, asking for help repeatedly, and showing frustration before even starting a problem.",
    visual: "image-laptop",
  },
  {
    accent: "slate",
    circleClass: "bg-slate-400",
    cardBorderClass: "border-slate-300/30",
    label: "Middle School Becomes Difficult",
    description:
      "Algebra and geometry arrive before foundations are solid. What was manageable becomes overwhelming.",
    visual: "image-book",
  },
];

function StepVisual({ visual }: { visual: TimelineStep["visual"] }) {
  if (visual === "gap-visual") {
    return (
      <div className="shrink-0 w-16 h-16 flex items-center justify-center">
        <div className="rounded-lg border-2 border-dashed border-yellow-400 bg-yellow-100 p-3 flex items-center justify-center w-full h-full">
          <span className="font-heading font-black text-yellow-600 text-sm leading-none">
            Gap
          </span>
        </div>
      </div>
    );
  }

  const imageProps: {
    src: string;
    alt: string;
    className?: string;
  } =
    visual === "image-star"
      ? {
          src: "/characters/blue-shows-paper-with-star.png",
          alt: "Student showing paper with star",
        }
      : visual === "image-laptop"
      ? {
          src: "/characters/Red-Using laptop.png",
          alt: "Student using laptop with frustration",
        }
      : {
          src: "/characters/Blue-Searching-Book.png",
          alt: "Student searching through book",
          className: "grayscale opacity-70",
        };

  return (
    <div className="shrink-0 w-16 h-16 relative">
      <Image
        src={imageProps.src}
        alt={imageProps.alt}
        fill
        className={`object-contain${imageProps.className ? ` ${imageProps.className}` : ""}`}
      />
    </div>
  );
}

export function ProblemTimeline() {
  return (
    <section className="py-20 md:py-28 bg-yellow-50 relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Section label */}
        <FadeUp delay={0.1} className="flex justify-center mb-6">
          <span className="rounded-full bg-yellow-200 text-yellow-800 text-sm font-bold px-4 py-1.5">
            The Problem
          </span>
        </FadeUp>

        {/* Heading */}
        <FadeUp delay={0.2} className="max-w-3xl mx-auto text-center mb-6">
          <h2 className="text-fluid-h2 font-extrabold text-text-dark font-heading text-center text-balance">
            Something Quietly Breaks Between Elementary and Middle School
          </h2>
        </FadeUp>

        {/* Subheading */}
        <FadeUp delay={0.3} className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-base md:text-lg text-muted leading-relaxed text-balance">
            The journey from confident elementary student to struggling middle
            schooler often happens silently one small gap at a time
          </p>
        </FadeUp>

        {/* Timeline */}
        <div className="max-w-2xl mx-auto">
          <div className="relative border-l-2 border-dashed border-yellow-300 ml-2">
            {steps.map((step, index) => (
              <FadeUp
                key={step.label}
                delay={0.1 * index + 0.3}
                className="relative pl-10 pb-12 last:pb-0"
              >
                {/* Circle on the border line */}
                <div
                  className={`absolute left-0 top-1 w-4 h-4 rounded-full ${step.circleClass} -translate-x-[9px] border-4 border-yellow-50`}
                />

                {/* Content card */}
                <div
                  className={`bg-white rounded-2xl p-6 shadow-sm border ${step.cardBorderClass} flex gap-4 items-start`}
                >
                  <StepVisual visual={step.visual} />

                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-bold text-text-dark text-base md:text-lg mb-2 leading-snug">
                      {step.label}
                    </h3>
                    <p className="text-muted text-sm md:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
