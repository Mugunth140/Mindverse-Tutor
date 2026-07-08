"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";
import { Button } from "@/components/ui/Button";

export function FinalCTASection() {
  return (
    <section className="py-24 md:py-32 bg-text-dark relative overflow-hidden">
      {/* Dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />
      {/* Yellow glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-yellow-400 rounded-full blur-[150px] opacity-10 pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Celebration mascot cluster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center items-end gap-0 mb-10"
          >
            <Image
              src="/characters/yellow-blue-hifi.png"
              alt="Students celebrating mathematical confidence"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </motion.div>

          {/* Heading */}
          <FadeUp delay={0.1}>
            <h2 className="text-fluid-h1 font-extrabold text-white font-heading leading-tight">
              Don&apos;t Let Hidden Learning Gaps Hold Your Child Back.
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="text-slate-300 text-lg md:text-xl mt-6 leading-relaxed max-w-xl mx-auto">
              The best time to build confidence is before middle school begins. The assessment is free. The results are priceless.
            </p>
          </FadeUp>

          {/* CTAs */}
          <FadeUp delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button
                variant="secondary"
                size="xl"
                href="https://assessment.mindversetutor.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Take the FREE Math Readiness Assessment
              </Button>
              <Button
                variant="outline"
                size="xl"
                href="/book-call"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/60"
              >
                Book a Parent Consultation
              </Button>
            </div>
          </FadeUp>

          {/* Trust note */}
          <FadeUp delay={0.4}>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-10">
              {["FREE Assessment", "No Commitment Required", "Results in 48 Hours", "Expert Educator"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-green" />
                  {item}
                </div>
              ))}
            </div>
          </FadeUp>

        </div>
      </Container>
    </section>
  );
}
