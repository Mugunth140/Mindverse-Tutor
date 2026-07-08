"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";

const educators = [
  {
    name: "Shwetha",
    role: "Founder, MindVerse Tutor",
    photo: "/tutors/Shwetha_tutor.jpg",
    accent: "bg-yellow-400",
    accentLight: "bg-yellow-50",
    accentBorder: "border-yellow-200",
    accentText: "text-yellow-700",
    tagBg: "bg-yellow-100",
    tagText: "text-yellow-800",
    bio: "I believe every child can excel in mathematics when concepts are taught with patience, clarity, and personalised attention. My teaching focuses on strengthening fundamentals, developing critical thinking, and helping students become confident, independent learners rather than relying on rote learning.",
    subjects: ["Mathematics", "Science", "English"],
    specialisations: [
      "Learner Mindset Transformation",
      "Personalised 1-on-1 Mentorship",
      "Skill Gap Fixing",
    ],
    quote:
      "Every child already has the ability, my job is to unlock it and show them that math makes sense.",
    reach: null,
  },
  {
    name: "Mythili",
    role: "Senior Educator",
    photo: "/tutors/Mythili_tutor.jpeg",
    accent: "bg-blue-400",
    accentLight: "bg-blue-50",
    accentBorder: "border-blue-200",
    accentText: "text-blue-700",
    tagBg: "bg-blue-100",
    tagText: "text-blue-800",
    bio: "With deep expertise across Maths, Chemistry, and Physics at the senior secondary level, I specialise in one-to-one classes that build genuine conceptual understanding. I focus on making sure students don't just get the right answer they know exactly why it's right.",
    subjects: ["Mathematics", "Chemistry", "Physics"],
    specialisations: [
      "Grades 9–12",
      "1-on-1 Classes",
      "Concept-Based Understanding",
    ],
    quote:
      "Understanding the concept is not a shortcut, it is the only path to lasting mastery.",
    reach: ["Japan", "United States", "UAE", "India"],
  },
  {
    name: "Kanna",
    role: "Advanced Level Educator",
    photo: "/tutors/Kanna_tutor.jpg",
    accent: "bg-green-400",
    accentLight: "bg-green-50",
    accentBorder: "border-green-200",
    accentText: "text-green-700",
    tagBg: "bg-green-100",
    tagText: "text-green-800",
    bio: "I believe that true mastery comes from active exploration, not passive listening. In my classes, we break down advanced formulas and abstract theories into plain, everyday language. By stripping away intimidating jargon, I help students see the beautiful logic behind maths and physics building lasting confidence and sparking genuine curiosity.",
    subjects: ["Mathematics", "Physics", "Applied Mechanics", "Applied Mathematics"],
    specialisations: [
      "AS Level & A Level",
      "Intuitive-Based Learning",
      "Advanced Problem Solving",
    ],
    quote:
      "Once a student sees the logic, the formula becomes obvious, not something to memorise, but something to rediscover.",
    reach: null,
  },
];

const SLIDE_DURATION = 5000; // ms per slide

export function EducatorSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % educators.length);
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (paused) return;
    intervalRef.current = setInterval(next, SLIDE_DURATION);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, next]);

  const educator = educators[current];

  return (
    <section
      className="py-20 md:py-28 bg-background relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background blobs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-yellow-100 rounded-full blur-[100px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-100 rounded-full blur-[100px] opacity-30 pointer-events-none" />

      <Container className="relative z-10">
        {/* Section header */}
        <FadeUp delay={0.1}>
          <div className="text-center mb-14">
            <div className="inline-block rounded-full bg-yellow-100 text-yellow-800 text-sm font-bold px-4 py-1.5 mb-4">
              Meet The Educators
            </div>
            <h2 className="text-fluid-h2 font-extrabold text-text-dark font-heading">
              The Experts Behind Every Session
            </h2>
            <p className="text-muted mt-4 max-w-xl mx-auto leading-relaxed">
              Every MindVerse Tutor educator brings deep subject expertise, genuine care, and a belief that every child can master mathematics.
            </p>
          </div>
        </FadeUp>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start"
            >
              {/* Photo column */}
              <div className="lg:col-span-2 flex flex-col items-center lg:items-start gap-4">
                <div
                  className={`relative w-full max-w-xs mx-auto rounded-3xl overflow-hidden aspect-[3/4] border-4 ${educator.accentBorder} shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]`}
                >
                  <Image
                    src={educator.photo}
                    alt={`${educator.name} — ${educator.role} at MindVerse Tutor`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 90vw, 320px"
                    priority={current === 0}
                  />
                  {/* Accent bar at bottom of photo */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1.5 ${educator.accent}`} />
                </div>

                {/* Dot indicators */}
                <div className="flex gap-2.5 justify-center mt-2">
                  {educators.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`View ${educators[i].name}`}
                      className={`rounded-full transition-all duration-300 ${
                        i === current
                          ? `w-7 h-2.5 ${educator.accent}`
                          : "w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Progress bar */}
                <div className="w-full max-w-xs mx-auto h-0.5 bg-slate-100 rounded-full overflow-hidden">
                  {!paused && (
                    <motion.div
                      key={`progress-${current}`}
                      className={`h-full ${educator.accent} rounded-full`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
                    />
                  )}
                </div>
              </div>

              {/* Content column */}
              <div className="lg:col-span-3 flex flex-col gap-6">
                {/* Name + role */}
                <div>
                  <div className={`w-10 h-1.5 rounded-full ${educator.accent} mb-4`} />
                  <h3 className="text-fluid-h3 font-extrabold text-text-dark font-heading leading-tight">
                    {educator.name}
                  </h3>
                  <p className={`font-semibold text-lg mt-1 ${educator.accentText}`}>
                    {educator.role}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-muted leading-relaxed">{educator.bio}</p>

                {/* Quote */}
                <div className={`rounded-2xl ${educator.accentLight} border ${educator.accentBorder} p-5 relative`}>
                  <div className={`w-6 h-1 rounded-full ${educator.accent} mb-3`} />
                  <p className="text-text-dark font-semibold leading-relaxed italic text-sm">
                    &ldquo;{educator.quote}&rdquo;
                  </p>
                </div>

                {/* Subjects + Specialisations */}
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-muted mb-2.5">
                      Core Subjects
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {educator.subjects.map((s) => (
                        <span
                          key={s}
                          className={`rounded-full ${educator.tagBg} ${educator.tagText} text-xs font-semibold px-3 py-1.5 border ${educator.accentBorder}`}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold uppercase tracking-widest text-muted mb-2.5">
                      Specialisations
                    </div>
                    <div className="flex flex-col gap-1.5">
                      {educator.specialisations.map((sp) => (
                        <div key={sp} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${educator.accent} flex-shrink-0`} />
                          <span className="text-sm text-text-dark font-medium">{sp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Global reach (optional) */}
                {educator.reach && (
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-muted mb-2.5">
                      Global Reach
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {educator.reach.map((country) => (
                        <span
                          key={country}
                          className="rounded-full bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1.5 border border-slate-200"
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next nav buttons */}
          <div className="flex gap-3 justify-center mt-10">
            <button
              onClick={() => setCurrent((c) => (c - 1 + educators.length) % educators.length)}
              className="w-10 h-10 rounded-full border-2 border-slate-200 bg-white hover:border-slate-400 transition-colors flex items-center justify-center"
              aria-label="Previous educator"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 3L5 8L10 13" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % educators.length)}
              className="w-10 h-10 rounded-full border-2 border-slate-200 bg-white hover:border-slate-400 transition-colors flex items-center justify-center"
              aria-label="Next educator"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 3L11 8L6 13" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
