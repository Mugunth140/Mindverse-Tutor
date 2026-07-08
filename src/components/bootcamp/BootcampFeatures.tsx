"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { FadeUp, FadeIn } from "@/components/shared/Animations";

const features = [
  {
    label: "4 Weeks · 12 Sessions",
    desc: "A structured month-long programme with consistent, progressive learning.",
    color: "border-accent-blue",
    dot: "bg-accent-blue",
  },
  {
    label: "Small Cohort",
    desc: "Every child gets individual attention in an intimate learning environment.",
    color: "border-accent-green",
    dot: "bg-accent-green",
  },
  {
    label: "Weekly Homework Practice",
    desc: "Reinforcement exercises that build independent problem-solving habits.",
    color: "border-secondary",
    dot: "bg-secondary",
  },
  {
    label: "Concept-Based Teaching",
    desc: "We teach the WHY, not just the HOW — so understanding is permanent.",
    color: "border-accent-blue",
    dot: "bg-accent-blue",
  },
  // {
  //   label: "Regular Teacher Feedback",
  //   desc: "Detailed progress updates after every session so parents stay informed.",
  //   color: "border-accent-green",
  //   dot: "bg-accent-green",
  // },
  {
    label: "Confidence Building Activities",
    desc: "Structured opportunities for students to present, explain, and succeed.",
    color: "border-secondary",
    dot: "bg-secondary",
  },
  // {
  //   label: "Parent Progress Updates",
  //   desc: "Regular communication so you always know exactly how your child is doing.",
  //   color: "border-accent-blue",
  //   dot: "bg-accent-blue",
  // },
];

export function BootcampFeatures() {
  return (
    <section className="py-10 md:py-14 bg-background relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100 rounded-full blur-[100px] opacity-40 pointer-events-none" />

      <Container>
        {/* Part 1 — Large editorial headline */}
        <div className="max-w-4xl mx-auto text-center">
          <FadeUp delay={0.1}>
            <div className="text-xs font-bold uppercase tracking-widest text-muted mb-4">
              The Bootcamp
            </div>
            <h2 className="text-fluid-h2 font-extrabold text-text-dark font-heading leading-tight">
              <span className="text-accent-blue">4 Weeks</span> of focused learning.{" "}
              <span className="text-accent-green">12 Live Sessions</span>.{" "}
              Always in{" "}
              <span className="bg-yellow-200 text-yellow-900 px-2 rounded-lg">
                Small Groups
              </span>
              .
            </h2>
            <p className="text-md text-muted mt-6 max-w-2xl mx-auto">
              The Middle School Math Readiness Bootcamp is a structured, expert-led
              programme designed to close foundational gaps and build genuine
              mathematical confidence before Grade 6 begins.
            </p>
          </FadeUp>
        </div>

        {/* Part 2 — Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-16">
          {/* Left: Illustration card */}
          <FadeIn delay={0.2}>
            <div className="rounded-3xl bg-gradient-to-br from-yellow-50 to-blue-50 border border-yellow-100 p-8 flex items-center justify-center min-h-[400px] relative overflow-hidden">
              <div className="absolute inset-0 bg-dot-pattern opacity-20" />
              <Image
                src="/characters/yellow-blue-puzzle.png"
                alt="Students and teacher working together"
                width={380}
                height={380}
                className="object-contain relative z-10"
              />
            </div>
          </FadeIn>

          {/* Right: Feature stacked cards */}
          <div className="flex flex-col gap-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
                className={`flex gap-4 items-start bg-white rounded-2xl border border-l-4 ${feature.color} border-slate-100 px-5 py-4 shadow-sm`}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full ${feature.dot} flex-shrink-0 mt-1.5`}
                />
                <div>
                  <div className="font-bold text-text-dark text-sm">
                    {feature.label}
                  </div>
                  <div className="text-muted text-sm mt-0.5">{feature.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
