"use client";

import { motion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";

interface RoadmapStep {
  number: string;
  label: string;
  description: string;
  circleClass: string;
  textClass: string;
  isDestination?: boolean;
}

const steps: RoadmapStep[] = [
  {
    number: "1",
    label: "Take the Assessment",
    description:
      "Complete the FREE Math Readiness Assessment online 30 minutes, no pressure.",
    circleClass: "bg-secondary",
    textClass: "text-text-dark",
  },
  {
    number: "2",
    label: "Receive Your Report",
    description:
      "Get a detailed breakdown of your child's specific gaps within 48 hours.",
    circleClass: "bg-accent-blue",
    textClass: "text-white",
  },
  {
    number: "3",
    label: "Parent Consultation",
    description:
      "Discuss the findings and bootcamp plan one-on-one with our educator.",
    circleClass: "bg-accent-green",
    textClass: "text-white",
  },
  {
    number: "4",
    label: "Join the Bootcamp",
    description:
      "Begin 4 weeks of focused, concept-based learning in a small group.",
    circleClass: "bg-secondary",
    textClass: "text-text-dark",
    isDestination: true,
  },
];

export function HowItWorksRoadmap() {
  return (
    <section className="py-20 md:py-28 bg-yellow-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-300/15 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* Header */}
        <FadeUp delay={0.1} className="flex justify-center mb-6">
          <span className="rounded-full bg-yellow-200 text-yellow-800 text-sm font-bold px-4 py-1.5">
            Your Journey
          </span>
        </FadeUp>

        <FadeUp delay={0.2} className="max-w-3xl mx-auto text-center mb-6">
          <h2 className="text-fluid-h2 font-extrabold text-text-dark font-heading text-balance">
            Your Child&apos;s Path to Confidence
          </h2>
        </FadeUp>

        <FadeUp delay={0.3} className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-base md:text-lg text-muted leading-relaxed text-balance">
            Four simple steps from assessment to middle school readiness.
          </p>
        </FadeUp>

        {/* Desktop roadmap — horizontal */}
        <div className="hidden md:flex items-start justify-center gap-0 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-start flex-1">
              {/* Step node */}
              <motion.div
                className="flex flex-col items-center text-center flex-1 px-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                {/* Circle */}
                <div
                  className={`
                    w-16 h-16 rounded-full flex items-center justify-center mb-4 shrink-0
                    ${step.circleClass} ${step.textClass}
                    ${step.isDestination ? "ring-4 ring-yellow-300 ring-offset-2 ring-offset-yellow-50" : ""}
                  `}
                >
                  <span className="text-2xl font-bold leading-none">{step.number}</span>
                </div>

                {/* Label */}
                <h3 className="font-heading font-bold text-text-dark text-sm md:text-base mb-2 leading-snug max-w-[150px]">
                  {step.label}
                </h3>

                {/* Description */}
                <p className="text-muted text-xs md:text-sm leading-relaxed max-w-[160px]">
                  {step.description}
                </p>
              </motion.div>

              {/* Connector — between steps */}
              {index < steps.length - 1 && (
                <div className="flex items-center mt-8 w-8 shrink-0">
                  <motion.div
                    className="h-0 w-full border-t-2 border-dashed border-slate-300"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 * index + 0.2, duration: 0.5 }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile roadmap — vertical */}
        <div className="flex md:hidden flex-col max-w-sm mx-auto">
          <div className="relative border-l-2 border-dashed border-yellow-300 ml-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="relative pl-10 pb-10 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
              >
                {/* Circle on border line */}
                <div
                  className={`
                    absolute left-0 top-0 w-16 h-16 rounded-full flex items-center justify-center
                    -translate-x-[calc(50%+1px)]
                    ${step.circleClass} ${step.textClass}
                    ${step.isDestination ? "ring-4 ring-yellow-300 ring-offset-2 ring-offset-yellow-50" : ""}
                  `}
                >
                  <span className="text-xl font-bold leading-none">{step.number}</span>
                </div>

                {/* Content card */}
                <div className="ml-6 bg-white rounded-2xl p-5 shadow-sm border border-yellow-100">
                  <h3 className="font-heading font-bold text-text-dark text-base mb-1.5 leading-snug">
                    {step.label}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
