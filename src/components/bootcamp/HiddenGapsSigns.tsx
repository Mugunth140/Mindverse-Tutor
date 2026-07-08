import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";

const cards = [
  {
    id: 1,
    colSpan: "md:col-span-1",
    accent: "bg-accent-blue",
    border: "border-blue-200/40",
    title: "Avoids Solving Independently",
    body: "Reaches for help immediately instead of attempting problems first. Independent effort feels impossible, not just difficult.",
    image: { src: "/characters/Blue-Searching-Book.png", width: 80, height: 80, className: "object-contain float-right ml-4 mb-2" },
    layout: "default",
  },
  {
    id: 2,
    colSpan: "md:col-span-1",
    accent: "bg-accent-red",
    border: "border-red-200/40",
    title: "Repeated Mistakes on the Same Type",
    body: "Makes the same error across multiple attempts a sign of a concept gap, not carelessness. The misunderstanding is structural.",
    image: null,
    layout: "default",
  },
  {
    id: 3,
    colSpan: "md:col-span-2",
    accent: "bg-secondary",
    border: "border-yellow-200/40",
    title: "Calculator Dependency",
    body: "Cannot estimate or perform basic arithmetic without a device. This masks a missing number sense foundation that will cause serious problems in algebra.",
    image: { src: "/characters/Red-Using laptop.png", width: 96, height: 96, className: "object-contain shrink-0" },
    layout: "horizontal",
  },
  {
    id: 4,
    colSpan: "md:col-span-1",
    accent: "bg-accent-green",
    border: "border-green-200/40",
    title: "Confused by Fractions",
    body: "Treats fractions as two separate numbers rather than understanding a part-to-whole relationship. This gap silently blocks all of ratios, percentages, and algebra.",
    image: null,
    layout: "default",
  },
  {
    id: 5,
    colSpan: "md:col-span-1",
    accent: "bg-accent-blue",
    border: "border-blue-200/40",
    title: "Math Anxiety",
    body: "Shows visible stress, avoidance, or frustration before even starting. The anxiety itself becomes a barrier to learning, separate from the actual skill gap.",
    image: { src: "/characters/Purple-Taking in mic.png", width: 80, height: 80, className: "object-contain float-right ml-4 mb-2 opacity-80" },
    layout: "default",
  },
  {
    id: 6,
    colSpan: "md:col-span-2",
    accent: "bg-secondary",
    border: "border-yellow-200/40",
    title: "Needs Repeated Explanations",
    body: "The same concept has been explained multiple times, but understanding doesn't stick. This usually points to a prerequisite skill that was never properly mastered not a learning difficulty.",
    image: null,
    layout: "default",
  },
] as const;

export function HiddenGapsSigns() {
  return (
    <section className="py-20 md:py-28 bg-blue-50 relative overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center">
          <FadeUp delay={0.1}>
            <span className="inline-block rounded-full bg-blue-100 text-blue-700 text-sm font-bold px-4 py-1.5">
              Signs to Watch For
            </span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h2 className="text-fluid-h2 font-bold text-text-dark mt-4">
              Signs Your Child Has Hidden Skill Gaps
            </h2>
            <p className="text-muted mt-4 max-w-2xl mx-auto text-lg">
              These patterns often go unnoticed until middle school makes them impossible to ignore.
            </p>
          </FadeUp>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
          {cards.map((card, index) => (
            <FadeUp key={card.id} delay={0.1 * index + 0.2} className={card.colSpan}>
              {card.layout === "horizontal" ? (
                <div
                  className={`rounded-3xl bg-white shadow-sm border ${card.border} p-7 flex flex-col md:flex-row gap-6 items-start h-full`}
                >
                  <div className="flex flex-col gap-4 flex-1">
                    <div className={`w-10 h-1.5 rounded-full ${card.accent}`} />
                    <h3 className="text-lg font-bold text-text-dark">{card.title}</h3>
                    <p className="text-muted leading-relaxed">{card.body}</p>
                  </div>
                  {card.image && (
                    <div className="shrink-0 self-center md:self-start">
                      <Image
                        src={card.image.src}
                        alt=""
                        width={card.image.width}
                        height={card.image.height}
                        className={card.image.className}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div
                  className={`rounded-3xl bg-white shadow-sm border ${card.border} p-7 flex flex-col gap-4 h-full`}
                >
                  <div className={`w-10 h-1.5 rounded-full ${card.accent}`} />
                  {card.image && (
                    <Image
                      src={card.image.src}
                      alt=""
                      width={card.image.width}
                      height={card.image.height}
                      className={card.image.className}
                    />
                  )}
                  <h3 className="text-lg font-bold text-text-dark">{card.title}</h3>
                  <p className="text-muted leading-relaxed">{card.body}</p>
                </div>
              )}
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
