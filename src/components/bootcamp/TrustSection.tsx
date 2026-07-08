import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";

const cards = [
  {
    id: "personalised",
    colSpan: "md:col-span-2",
    content: (
      <div className="rounded-3xl bg-white border border-yellow-100 shadow-soft p-8 flex flex-col md:flex-row gap-6 items-center h-full">
        <Image
          src="/characters/yellow-blue-puzzle.png"
          width={140}
          height={140}
          className="object-contain shrink-0"
          alt="Personalised learning"
        />
        <div>
          <h3 className="font-extrabold text-text-dark text-xl font-heading mb-2">
            Personalised Learning
          </h3>
          <p className="text-muted leading-relaxed text-sm md:text-base">
            No two children have the same gaps. Our approach begins with
            understanding exactly where your child stands then building a path
            designed specifically for them. Every session is purposeful.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "concept",
    colSpan: "md:col-span-1 md:row-span-2",
    content: (
      <div className="rounded-3xl bg-blue-50 border border-blue-100 shadow-soft p-6 h-full">
        <Image
          src="/characters/Board.png"
          width={130}
          height={130}
          className="object-contain mb-4 mx-auto"
          alt="Concept-based teaching"
        />
        <h3 className="font-bold text-text-dark text-lg font-heading mb-2">
          Concept-Based Teaching
        </h3>
        <p className="text-muted text-sm leading-relaxed">
          We teach the WHY behind every method. Understanding beats memorisation always.
        </p>
      </div>
    ),
  },
  {
    id: "small-groups",
    colSpan: "md:col-span-1",
    content: (
      <div className="rounded-3xl bg-green-50 border border-green-100 shadow-soft p-6 h-full">
        <h3 className="font-bold text-text-dark text-lg font-heading mb-2">
          Small Cohort
        </h3>
        <p className="text-muted text-sm leading-relaxed">
          Every student gets individual attention in an intimate, focused
          learning environment.
        </p>
      </div>
    ),
  },
  {
    id: "global",
    colSpan: "md:col-span-1",
    content: (
      <div className="rounded-3xl bg-yellow-50 border border-yellow-200 shadow-soft p-6 h-full">
        <div className="font-bold text-text-dark text-lg font-heading mb-3">
          Global Students
        </div>
        <div className="flex flex-wrap gap-1.5">
          {["India", "Canada", "USA", "Australia", "UAE", "Singapore"].map(
            (c) => (
              <span
                key={c}
                className="rounded-full bg-white border border-yellow-200 text-yellow-800 text-xs font-semibold px-2.5 py-1"
              >
                {c}
              </span>
            )
          )}
        </div>
        <p className="text-muted text-sm mt-3">
          Live online learning time zones covered.
        </p>
      </div>
    ),
  },
  {
    id: "experienced",
    colSpan: "md:col-span-2",
    content: (
      <div className="rounded-3xl bg-white border border-slate-100 shadow-soft p-8 flex gap-6 items-center h-full">
        <div className="flex-1">
          <h3 className="font-extrabold text-text-dark text-xl font-heading mb-2">
            Experienced Educator
          </h3>
          <p className="text-muted leading-relaxed mb-4">
            Years of experience teaching students across 6 countries. Every
            lesson reflects both deep subject expertise and genuine care for each
            student's progress.
          </p>
          <h3 className="font-bold text-text-dark text-lg font-heading mb-1">
            Confidence Building
          </h3>
          <p className="text-muted text-sm">
            Students don't just learn math they learn that they CAN do math.
            That belief changes everything.
          </p>
        </div>
        <Image
          src="/characters/yellow-blue-hifi.png"
          width={130}
          height={130}
          className="hidden md:block object-contain shrink-0"
          alt="Confidence building"
        />
      </div>
    ),
  },
  {
    id: "feedback",
    colSpan: "md:col-span-1",
    content: (
      <div className="rounded-3xl bg-green-50 border border-green-100 shadow-soft p-6 h-full">
        <Image
          src="/characters/green-showing-note.png"
          width={90}
          height={90}
          className="object-contain mb-4"
          alt="Regular feedback"
        />
        <h3 className="font-bold text-text-dark text-lg font-heading mb-2">
          Regular Feedback
        </h3>
        <p className="text-muted text-sm leading-relaxed">
          Parents receive detailed progress updates after every session you
          always know exactly how your child is doing.
        </p>
      </div>
    ),
  },
];

export function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-yellow-50 relative overflow-hidden">
      <Container>
        {/* Header */}
        <FadeUp className="flex flex-col items-center text-center mb-12">
          <span className="rounded-full bg-yellow-200 text-yellow-800 text-sm font-bold px-4 py-1.5 mb-4 inline-block">
            Why Parents Trust Us
          </span>
          <h2 className="text-fluid-h2 font-extrabold text-text-dark font-heading text-center max-w-2xl">
            Why Parents Around the World Choose MindVerse Tutor
          </h2>
        </FadeUp>

        {/* Asymmetric grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, index) => (
            <FadeUp
              key={card.id}
              delay={0.1 * index}
              className={card.colSpan}
            >
              {card.content}
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
