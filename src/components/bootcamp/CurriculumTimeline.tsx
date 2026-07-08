"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";

const weeks = [
  {
    week: 1,
    color: "bg-yellow-400",
    textColor: "text-yellow-900",
    bgLight: "bg-yellow-50",
    border: "border-yellow-200",
    title: "Number Foundations",
    sessions: [
      { num: 1, topic: "Number Sense & Place Value", desc: "Understanding how numbers work not just reading them." },
      { num: 2, topic: "Factors, Multiples & Divisibility", desc: "Building the mental toolkit for fraction and algebra work ahead." },
      { num: 3, topic: "Integers & Number Lines", desc: "Positive, negative, and the relationships between them." },
    ],
  },
  {
    week: 2,
    color: "bg-blue-400",
    textColor: "text-blue-900",
    bgLight: "bg-blue-50",
    border: "border-blue-200",
    title: "Fractions, Decimals & Percentages",
    sessions: [
      { num: 4, topic: "Fractions — Part to Whole", desc: "Deep understanding of what a fraction actually represents." },
      { num: 5, topic: "Decimals & Conversion", desc: "Moving fluently between fractions, decimals, and percentages." },
      { num: 6, topic: "Percentage Applications", desc: "Real-world percentage problems discounts, increase, decrease." },
    ],
  },
  {
    week: 3,
    color: "bg-green-400",
    textColor: "text-green-900",
    bgLight: "bg-green-50",
    border: "border-green-200",
    title: "Ratios, Algebra & Word Problems",
    sessions: [
      { num: 7, topic: "Ratios & Proportions", desc: "Understanding relationships between quantities the bridge to algebra." },
      { num: 8, topic: "Introduction to Algebra", desc: "Variables, expressions, and the logic of equations." },
      { num: 9, topic: "Word Problem Strategies", desc: "Translating real-world language into mathematical solutions." },
    ],
  },
  {
    week: 4,
    color: "bg-orange-400",
    textColor: "text-orange-900",
    bgLight: "bg-orange-50",
    border: "border-orange-200",
    title: "Geometry, Measurement & Review",
    sessions: [
      { num: 10, topic: "Geometry Fundamentals", desc: "Shapes, angles, perimeter, area building spatial reasoning." },
      { num: 11, topic: "Measurement & Units", desc: "Practical measurement skills applied to geometry problems." },
      { num: 12, topic: "Reasoning, Review & Celebration", desc: "Full programme review, confidence check, and celebration of progress." },
    ],
  },
];

export function CurriculumTimeline() {
  const [openWeek, setOpenWeek] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-blue-50 relative overflow-hidden">
      <Container>
        {/* Centered header */}
        <FadeUp>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 text-sm font-bold px-4 py-1.5 mb-6">
              12 Sessions · 4 Weeks
            </div>
            <h2 className="text-fluid-h2 font-bold text-text-dark mb-4">
              12 Sessions. 4 Weeks. One Complete Transformation
            </h2>
            <p className="text-muted text-lg">
              Each session is structured, concept-based, and designed to build on the previous one no wasted time
            </p>
          </div>
        </FadeUp>

        {/* Week accordions */}
        <div className="max-w-3xl mx-auto mt-12">
          {weeks.map((week, index) => (
            <motion.div
              key={week.week}
              className="mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              {/* Week header button */}
              <button
                onClick={() => setOpenWeek(openWeek === week.week ? null : week.week)}
                className="w-full flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 text-left group"
                aria-expanded={openWeek === week.week}
              >
                {/* Spiral binding dots (decorative) */}
                <div className="flex flex-col gap-1 mr-1">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full border-2 ${week.color.replace("bg-", "border-")} bg-white`}
                    />
                  ))}
                </div>

                {/* Week pill */}
                <div
                  className={`rounded-full ${week.color} px-3 py-1 text-xs font-bold ${week.textColor} flex-shrink-0`}
                >
                  Week {week.week}
                </div>

                {/* Title */}
                <div className="flex-1">
                  <div className="font-bold text-text-dark">{week.title}</div>
                  <div className="text-sm text-muted">3 Sessions</div>
                </div>

                {/* Chevron */}
                <motion.div
                  animate={{ rotate: openWeek === week.week ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="#64748B"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </button>

              {/* Expanded content */}
              <AnimatePresence initial={false}>
                {openWeek === week.week && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div
                      className={`mt-2 rounded-2xl ${week.bgLight} border ${week.border} p-5 space-y-3`}
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(transparent, transparent 35px, rgba(0,0,0,0.03) 35px, rgba(0,0,0,0.03) 36px)",
                      }}
                    >
                      {week.sessions.map((session) => (
                        <div key={session.num} className="flex gap-3 items-start">
                          <div
                            className={`rounded-full ${week.color} text-white text-xs font-bold w-7 h-7 flex items-center justify-center flex-shrink-0 mt-0.5`}
                          >
                            {session.num}
                          </div>
                          <div>
                            <div className="font-semibold text-text-dark text-sm">{session.topic}</div>
                            <div className="text-muted text-sm">{session.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
