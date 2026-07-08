"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { FadeUp, FadeIn } from "@/components/shared/Animations";
import { Button } from "@/components/ui/Button";

const mathSymbols: {
  symbol: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  size: string;
  color: string;
  delay: number;
  duration: number;
}[] = [
  {
    symbol: "÷",
    top: "8%",
    right: "12%",
    size: "text-4xl",
    color: "text-yellow-400",
    delay: 0,
    duration: 3.2,
  },
  {
    symbol: "×",
    top: "18%",
    left: "6%",
    size: "text-3xl",
    color: "text-accent-blue",
    delay: 0.6,
    duration: 2.8,
  },
  {
    symbol: "²",
    top: "5%",
    left: "30%",
    size: "text-2xl",
    color: "text-accent-green",
    delay: 1.2,
    duration: 3.6,
  },
  {
    symbol: "√",
    bottom: "22%",
    left: "4%",
    size: "text-3xl",
    color: "text-yellow-500",
    delay: 0.4,
    duration: 3.0,
  },
  {
    symbol: "%",
    top: "12%",
    right: "5%",
    size: "text-2xl",
    color: "text-accent-green",
    delay: 1.8,
    duration: 2.6,
  },
  {
    symbol: "=",
    bottom: "15%",
    right: "8%",
    size: "text-4xl",
    color: "text-accent-blue",
    delay: 0.9,
    duration: 3.4,
  },
];

function TrustDot() {
  return (
    <span className="inline-block w-2 h-2 rounded-full bg-accent-green mr-1.5 align-middle" />
  );
}

const trustItems = [
  "FREE Assessment",
  "No Commitment",
  "Results in 48 Hours",
  "Expert Educator",
];

export function BootcampHero() {
  return (
    <section className="pt-16 pb-12 md:pt-24 md:pb-20 bg-background overflow-hidden relative">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column — content */}
          <div className="flex flex-col gap-7">
            {/* Badge pill */}
            <FadeUp delay={0.05}>
              <span className="inline-block rounded-full bg-yellow-100 border border-yellow-300 text-yellow-800 text-sm font-semibold px-4 py-1.5 w-fit">
                Summer 2026 &middot; Grades 6 &amp; 7 &middot; Limited Seats
              </span>
            </FadeUp>

            {/* Headline */}
            <FadeUp delay={0.15}>
              <h1 className="text-fluid-h1 font-extrabold text-text-dark font-heading leading-tight text-balance text-6xl!">
                Is Your Child Ready for Middle School Math?
              </h1>
            </FadeUp>

            {/* Subheading */}
            <FadeUp delay={0.25}>
              <p className="text-md text-muted leading-relaxed">
                Most students enter Grade 6 carrying hidden learning gaps that
                quietly hold them back. Our FREE Math Readiness Assessment
                identifies exactly where your child stands before it
                becomes a problem.
              </p>
            </FadeUp>

            {/* CTA buttons */}
            <FadeUp delay={0.35}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="primary"
                  size="md"
                  href="https://assessment.mindversetutor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  Take the FREE Assessment
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href="/book-call"
                  className="w-full sm:w-auto"
                >
                  Book a Parent Consultation
                </Button>
              </div>
            </FadeUp>

            {/* Trust indicators */}
            {/* <FadeUp delay={0.45}>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                {trustItems.map((item, i) => (
                  <span key={item} className="flex items-center text-sm text-muted font-medium">
                    <TrustDot />
                    {item}
                    {i < trustItems.length - 1 && (
                      <span className="ml-3 text-muted/40 select-none">&middot;</span>
                    )}
                  </span>
                ))}
              </div>
            </FadeUp> */}
          </div>

          {/* Right column — illustration cluster */}
          <FadeIn delay={0.3} className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-xl aspect-3/4 md:aspect-square">
              {/* Background blob */}
              <div className="absolute inset-8 bg-yellow-100 rounded-[40%] blur-2xl opacity-50 pointer-events-none" />

              {/* Floating math symbols */}
              {mathSymbols.map((sym) => (
                <motion.span
                  key={`${sym.symbol}-${sym.delay}`}
                  className={`absolute font-bold select-none pointer-events-none ${sym.size} ${sym.color}`}
                  style={{
                    top: sym.top,
                    bottom: sym.bottom,
                    left: sym.left,
                    right: sym.right,
                  }}
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: sym.duration,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: sym.delay,
                  }}
                >
                  {sym.symbol}
                </motion.span>
              ))}

              {/* Board — main background illustration */}
              <div className="relative w-full h-full">
                <Image
                  src="/characters/yellow-teaching-bootcamp.png"
                  alt="Math teaching to all students through onlineclass"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
