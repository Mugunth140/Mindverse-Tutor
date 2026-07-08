"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";

/* ─── Data ─────────────────────────────────────────────────── */

const stars = [1, 2, 3, 4, 5];

function StarRow() {
  return (
    <div className="flex gap-0.5 mb-3">
      {stars.map((i) => (
        <span key={i} className="text-yellow-400 text-base leading-none">
          &#9733;
        </span>
      ))}
    </div>
  );
}

const studentReviews = [
  {
    id: "r1",
    type: "parent",
    quote:
      "Ms. Shwetha is an amazing teacher and plays a vital role in my son's learning as well as personal and academic development. She creates a very friendly and positive environment for my child to ask questions and never be scared to say he did not understand. As a compassionate educator, she is genuinely invested in his learning journey.",
    author: "Parent",
    grade: null,
    bg: "bg-white",
    border: "border-slate-100",
    tag: null,
  },
  {
    id: "r2",
    type: "student",
    quote:
      "My tuition is the best! Ms. Shwetha's classes help me understand subjects even easier. It makes me want to study with Ms. Shwetha every day. Whenever I struggle she always helps me in a fun way. Ms. Shwetha is the best!",
    author: "Raistia",
    grade: "Grade 6",
    bg: "bg-yellow-50",
    border: "border-yellow-100",
    tag: "Student",
  },
  {
    id: "r3",
    type: "parent",
    quote:
      "Ms. Shwetha is very patient and explains concepts in a way that is easy to understand. The lessons have fully helped my child's academics.",
    author: "Parent",
    grade: null,
    bg: "bg-white",
    border: "border-slate-100",
    tag: null,
  },
  {
    id: "r4",
    type: "student",
    quote:
      "Ms. Shwetha has helped me understand difficult classes through engaging lessons as well as quizzes. Additionally, her communication about science topics is clear and understandable.",
    author: "Student",
    grade: null,
    bg: "bg-blue-50",
    border: "border-blue-100",
    tag: "Student",
  },
  {
    id: "r5",
    type: "student",
    quote:
      "Ms. Shwetha has helped me improve my English, Science and Math through her ways of teaching, which I am truly grateful for.",
    author: "Harshchzud Sohal",
    grade: "Year 9",
    bg: "bg-green-50",
    border: "border-green-100",
    tag: "Student",
  },
  {
    id: "r6",
    type: "student",
    quote:
      "I have improved in my English, Math, and Science when you started tutoring me. I am so grateful that I have you as my teacher. I am also grateful that you make the lesson very fun for me.",
    author: "Umaha S.",
    grade: null,
    bg: "bg-white",
    border: "border-slate-100",
    tag: "Student",
  },
  {
    id: "r7",
    type: "student",
    quote:
      "Ms. Shwetha is an incredible teacher. Her classes are so interesting — when I don't understand the concept, Ms. breaks it down to make it easier to understand. She has a great bubbly personality and brings the best out in us every day. She has helped me improve my grades and I would definitely recommend her.",
    author: "Sylvia",
    grade: "Year 8",
    bg: "bg-yellow-50",
    border: "border-yellow-100",
    tag: "Student",
  },
];

const videos = [
  { id: "v1", src: "/review-videos/review1.mp4", label: "Parent Review" },
  { id: "v2", src: "/review-videos/review2.mp4", label: "Parent Review" },
  { id: "v3", src: "/review-videos/review3.mp4", label: "Parent Review" },
];

/* ─── Video card ────────────────────────────────────────────── */

function VideoCard({ src, label }: { src: string; label: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggle() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  }

  return (
    <div
      className="relative rounded-3xl overflow-hidden bg-slate-900 aspect-[9/16] cursor-pointer group"
      onClick={toggle}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        playsInline
        preload="metadata"
        onEnded={() => setPlaying(false)}
      />

      {/* Overlay — dims when playing, visible when paused */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent transition-opacity duration-300 ${
          playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
      />

      {/* Play / Pause button */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
          playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
      >
        <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
          {playing ? (
            /* Pause icon */
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#1E293B">
              <rect x="4" y="3" width="4" height="14" rx="1" />
              <rect x="12" y="3" width="4" height="14" rx="1" />
            </svg>
          ) : (
            /* Play icon */
            <svg width="20" height="20" viewBox="0 0 20 20" fill="#1E293B">
              <path d="M6 4l12 6-12 6V4z" />
            </svg>
          )}
        </div>
      </div>

      {/* Label at bottom */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-4 transition-opacity duration-300 ${
          playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
      >
        <div className="text-white font-bold text-sm">{label}</div>
        <div className="text-slate-300 text-xs mt-0.5">Ms. Shwetha · MindVerse Tutor</div>
      </div>
    </div>
  );
}

/* ─── Review card ───────────────────────────────────────────── */

function ReviewCard({
  quote,
  author,
  grade,
  bg,
  border,
  tag,
}: {
  quote: string;
  author: string;
  grade: string | null;
  bg: string;
  border: string;
  tag: string | null;
}) {
  return (
    <div className={`rounded-2xl ${bg} border ${border} shadow-sm p-5 h-full flex flex-col`}>
      {tag && (
        <span className="inline-block rounded-full bg-white/70 border border-slate-200 text-slate-600 text-xs font-bold px-3 py-1 mb-3 self-start">
          {tag}
        </span>
      )}
      <StarRow />
      <p className="text-text-dark text-sm leading-relaxed italic flex-1">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="font-semibold text-text-dark text-sm">{author}</span>
        {grade && (
          <span className="text-xs text-muted font-medium">{grade}</span>
        )}
      </div>
    </div>
  );
}

/* ─── Main export ───────────────────────────────────────────── */

export function TestimonialsWall() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-yellow-100 rounded-full blur-[120px] opacity-40 pointer-events-none translate-x-1/3 -translate-y-1/3" />

      <Container className="relative z-10">
        {/* Header */}
        <FadeUp className="flex flex-col items-center text-center mb-14">
          <span className="rounded-full bg-blue-100 text-blue-700 text-sm font-bold px-4 py-1.5 mb-4 inline-block">
            Reviews &amp; Stories
          </span>
          <h2 className="text-fluid-h2 font-extrabold text-text-dark font-heading max-w-2xl">
            Families Who Chose MindVerse Tutor
          </h2>
          <p className="text-muted mt-4 text-base max-w-xl leading-relaxed">
            Real words from real students and parents — unedited, unscripted, and unafraid to share.
          </p>
        </FadeUp>

        {/* ── Video row ── */}
        <div className="max-w-5xl mx-auto mb-8">
          <FadeUp delay={0.05}>
            <div className="text-xs font-bold uppercase tracking-widest text-muted mb-5">
              Video Reviews
            </div>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {videos.map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
              >
                <VideoCard src={v.src} label={v.label} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Written reviews ── */}
        <div className="max-w-5xl mx-auto">
          <FadeUp delay={0.05}>
            <div className="text-xs font-bold uppercase tracking-widest text-muted mb-5">
              Written Reviews
            </div>
          </FadeUp>

          {/*
            Masonry-style asymmetric grid:
            Row 1: large(2col) + small(1col)
            Row 2: small + small + small
            Row 3: large(2col) + small
          */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* r1 — large, parent */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <ReviewCard {...studentReviews[0]} />
            </motion.div>

            {/* r2 — Raistia grade 6 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <ReviewCard {...studentReviews[1]} />
            </motion.div>

            {/* r3, r4, r5 — three small */}
            {studentReviews.slice(2, 5).map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * (i + 3) }}
              >
                <ReviewCard {...r} />
              </motion.div>
            ))}

            {/* r7 — Sylvia, large */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <ReviewCard {...studentReviews[6]} />
            </motion.div>

            {/* r6 — Umaha */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
            >
              <ReviewCard {...studentReviews[5]} />
            </motion.div>

          </div>
        </div>
      </Container>
    </section>
  );
}
