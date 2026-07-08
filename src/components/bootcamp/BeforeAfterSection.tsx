"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";

export function BeforeAfterSection() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center">
          <FadeUp delay={0.1}>
            <h2 className="text-fluid-h2 font-extrabold text-text-dark font-heading text-center">
              The Bootcamp Difference
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
              Every child who has gaps can close them. Here is what that
              transformation looks like.
            </p>
          </FadeUp>
        </div>

        {/* Split card */}
        <div className="max-w-5xl mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="rounded-[2.5rem] overflow-hidden shadow-[0_20px_80px_-20px_rgba(0,0,0,0.12)] border border-slate-100 flex flex-col md:flex-row">

              {/* LEFT: Before */}
              <div className="flex-1 bg-slate-100 p-8 md:p-12 relative overflow-hidden">
                {/* Subtle hatching pattern */}
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, #000 0px, #000 1px, transparent 1px, transparent 10px)",
                  }}
                />

                <div className="relative z-10">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                    Before Bootcamp
                  </div>

                  {/* Desaturated mascot */}
                  <div className="mb-6">
                    <Image
                      src="/characters/Blue-Searching-Book.png"
                      alt="Student struggling with math before the bootcamp"
                      width={140}
                      height={140}
                      className="object-contain grayscale opacity-60"
                    />
                  </div>

                  {/* 5 before descriptors */}
                  <ul className="space-y-3">
                    {[
                      "Confused by fractions and decimals",
                      "Avoids solving problems independently",
                      "Anxious before every math test",
                      "Needs the same concept explained repeatedly",
                      "Makes the same mistakes over and over",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-start text-slate-500">
                        <span className="text-slate-300 font-bold flex-shrink-0 mt-0.5">
                          —
                        </span>
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Divider — vertical on desktop */}
              <div className="hidden md:flex items-stretch">
                <div className="w-px border-l-2 border-dashed border-slate-200 my-8" />
              </div>
              {/* Divider — horizontal on mobile */}
              <div className="md:hidden h-px border-t-2 border-dashed border-slate-200 mx-8" />

              {/* RIGHT: After */}
              <div className="flex-1 bg-yellow-50 p-8 md:p-12 relative overflow-hidden">
                {/* Warm dot pattern */}
                <div className="absolute inset-0 bg-dot-pattern opacity-10" />

                <div className="relative z-10">
                  <div className="text-xs font-bold uppercase tracking-widest text-yellow-700 mb-4">
                    After Bootcamp
                  </div>

                  {/* Bright celebratory mascot */}
                  <div className="mb-6">
                    <Image
                      src="/characters/yellow-blue-hifi.png"
                      alt="Students celebrating mathematical confidence after the bootcamp"
                      width={140}
                      height={140}
                      className="object-contain"
                    />
                  </div>

                  {/* 5 after descriptors */}
                  <ul className="space-y-3">
                    {[
                      "Solves fraction and decimal problems independently",
                      "Attempts problems with confidence and logic",
                      "Approaches tests with preparation and calm",
                      "Understands concepts deeply — not just procedures",
                      "Applies the right method without prompting",
                    ].map((item, i) => (
                      <li key={i} className="flex gap-3 items-start text-text-dark">
                        <span className="w-2 h-2 rounded-full bg-accent-green flex-shrink-0 mt-1.5" />
                        <span className="text-sm leading-relaxed font-medium">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reassurance text */}
        <p className="text-center text-muted mt-8 text-sm max-w-lg mx-auto">
          Every child starts with a FREE Math Readiness Assessment that shows
          exactly which gaps need to be closed.
        </p>
      </Container>
    </section>
  );
}
