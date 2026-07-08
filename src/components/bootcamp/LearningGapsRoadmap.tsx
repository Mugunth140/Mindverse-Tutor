"use client";

import { motion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";

// Winding S-curve path across the full SVG width
const WINDING_PATH =
  "M 50 260 C 150 100 250 100 350 260 C 450 420 550 420 650 260 C 750 100 820 180 880 260";

interface Milestone {
  cx: number;
  cy: number;
  subject: string;
  color: string;
  labelAbove: boolean;
  isGoal?: boolean;
}

const milestones: Milestone[] = [
  { cx: 50,  cy: 260, subject: "Number Sense",          color: "#FBBF24", labelAbove: false },
  { cx: 180, cy: 140, subject: "Fractions",             color: "#60A5FA", labelAbove: true  },
  { cx: 290, cy: 120, subject: "Decimals",              color: "#34D399", labelAbove: true  },
  { cx: 380, cy: 220, subject: "Ratios",                color: "#F87171", labelAbove: false },
  { cx: 450, cy: 350, subject: "Percentages",           color: "#FBBF24", labelAbove: false },
  { cx: 570, cy: 400, subject: "Algebra",               color: "#60A5FA", labelAbove: false },
  { cx: 680, cy: 220, subject: "Geometry",              color: "#34D399", labelAbove: true  },
  { cx: 840, cy: 170, subject: "Middle School\nSuccess", color: "#F59E0B", labelAbove: false, isGoal: true },
];

function MilestoneNode({
  milestone,
  index,
}: {
  milestone: Milestone;
  index: number;
}) {
  const { cx, cy, subject, color, labelAbove, isGoal } = milestone;
  const outerR = isGoal ? 38 : 30;
  const innerR = isGoal ? 26 : 20;
  // Label offset above or below the node
  const labelOffset = isGoal ? outerR + 18 : outerR + 14;
  const labelY = labelAbove ? cy - labelOffset : cy + labelOffset;

  // Split multi-line subjects (used for "Middle School\nSuccess")
  const lines = subject.split("\n");

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay: 0.3 * index + 0.4, duration: 0.5, ease: "backOut" }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    >
      {/* Outer glow ring */}
      <circle cx={cx} cy={cy} r={outerR} fill={color} opacity={0.18} />
      {/* Main filled circle */}
      <circle cx={cx} cy={cy} r={innerR} fill={color} />

      {/* Star character for goal node */}
      {isGoal && (
        <text
          x={cx}
          y={cy + 6}
          textAnchor="middle"
          fill="#ffffff"
          fontSize={20}
          fontWeight={700}
          fontFamily="inherit"
        >
          &#9733;
        </text>
      )}

      {/* Subject label — may be multi-line */}
      {lines.map((line, li) => {
        // Vertical spacing for multi-line: center the block around labelY
        const lineHeight = 15;
        const totalHeight = (lines.length - 1) * lineHeight;
        const lineY = labelY - totalHeight / 2 + li * lineHeight;
        return (
          <text
            key={li}
            x={cx}
            y={lineY}
            textAnchor="middle"
            fill="#1E293B"
            fontSize={isGoal ? 12 : 11}
            fontWeight={700}
            fontFamily="inherit"
          >
            {line}
          </text>
        );
      })}

      {/* Step number badge */}
      <circle cx={cx + innerR - 4} cy={cy - innerR + 4} r={9} fill="#ffffff" />
      <text
        x={cx + innerR - 4}
        y={cy - innerR + 8}
        textAnchor="middle"
        fill={color}
        fontSize={10}
        fontWeight={800}
        fontFamily="inherit"
      >
        {index + 1}
      </text>
    </motion.g>
  );
}

// Mobile milestone card
function MobileMilestone({
  milestone,
  index,
}: {
  milestone: Milestone;
  index: number;
}) {
  const { subject, color, isGoal } = milestone;
  const lines = subject.split("\n");
  const label = lines.join(" ");

  return (
    <FadeUp delay={0.1 * index + 0.2} className="relative pl-10 pb-8 last:pb-0">
      {/* Colored dot on the vertical line */}
      <div
        className="absolute left-0 top-0.5 w-5 h-5 rounded-full border-4 border-background -translate-x-[10px] shadow-sm"
        style={{ backgroundColor: color }}
      />

      {/* Step number */}
      <span
        className="absolute left-0 top-0.5 w-5 h-5 flex items-center justify-center rounded-full text-white text-[9px] font-black -translate-x-[10px]"
        style={{ backgroundColor: color }}
      >
        {index + 1}
      </span>

      {/* Label */}
      <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-slate-100">
        {isGoal && (
          <span style={{ color: color }} className="text-lg font-black select-none">
            &#9733;
          </span>
        )}
        <span className="font-bold text-text-dark text-sm md:text-base leading-snug">
          {label}
        </span>
        {isGoal && (
          <span className="ml-auto text-xs font-semibold text-green-600 bg-green-50 rounded-full px-2.5 py-0.5 whitespace-nowrap">
            Goal
          </span>
        )}
      </div>
    </FadeUp>
  );
}

export function LearningGapsRoadmap() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Soft background blobs for atmosphere */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        {/* --- Header --- */}
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <FadeUp delay={0.1} className="flex justify-center mb-4">
            <span className="rounded-full bg-green-100 text-green-700 text-sm font-bold px-4 py-1.5">
              The Learning Path
            </span>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h2 className="text-fluid-h2 font-extrabold text-text-dark font-heading leading-tight text-balance mb-4">
              How Learning Gaps Silently Build Up
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed text-balance">
              Each concept in math builds on the one before it. A gap at any
              stage makes every stage after it harder.
            </p>
          </FadeUp>
        </div>

        {/* --- Desktop SVG Roadmap --- */}
        <div className="hidden md:block">
          <FadeUp delay={0.3}>
            <div className="relative w-full rounded-3xl bg-white shadow-md border border-slate-100 p-6 overflow-hidden">
              {/* Faint grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, #64748B 0, #64748B 1px, transparent 0, transparent 50%), repeating-linear-gradient(90deg, #64748B 0, #64748B 1px, transparent 0, transparent 50%)",
                  backgroundSize: "32px 32px",
                }}
              />

              <svg
                viewBox="0 0 930 520"
                className="w-full"
                role="img"
                aria-labelledby="roadmap-title"
              >
                <title id="roadmap-title">
                  Math learning roadmap from Number Sense to Middle School
                  Success, showing 8 sequential milestones along a winding path.
                </title>

                {/* Shadow / depth path underneath */}
                <path
                  d={WINDING_PATH}
                  fill="none"
                  stroke="#34D399"
                  strokeWidth={8}
                  strokeLinecap="round"
                  opacity={0.08}
                  transform="translate(0, 4)"
                />

                {/* Animated dashed winding path */}
                <motion.path
                  d={WINDING_PATH}
                  fill="none"
                  stroke="#34D399"
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeDasharray="8 6"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />

                {/* Secondary lighter road outline for depth */}
                <motion.path
                  d={WINDING_PATH}
                  fill="none"
                  stroke="#34D399"
                  strokeWidth={18}
                  strokeLinecap="round"
                  opacity={0.06}
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />

                {/* Milestone nodes */}
                {milestones.map((milestone, i) => (
                  <MilestoneNode key={milestone.subject} milestone={milestone} index={i} />
                ))}
              </svg>

              {/* Legend */}
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 pt-4 border-t border-slate-100">
                {milestones.slice(0, 7).map((m) => (
                  <span key={m.subject} className="flex items-center gap-1.5 text-xs text-muted font-medium">
                    <span
                      className="inline-block w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: m.color }}
                    />
                    {m.subject}
                  </span>
                ))}
                <span className="flex items-center gap-1.5 text-xs font-bold text-yellow-700">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  Middle School Success
                </span>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* --- Mobile Vertical Roadmap --- */}
        <div className="block md:hidden max-w-sm mx-auto">
          <div className="relative border-l-2 border-dashed border-green-300 ml-2.5">
            {milestones.map((milestone, i) => (
              <MobileMilestone key={milestone.subject} milestone={milestone} index={i} />
            ))}
          </div>
        </div>

        {/* --- Bottom callout --- */}
        <FadeUp delay={0.5} className="mt-14 md:mt-20 max-w-2xl mx-auto">
          <div className="rounded-2xl bg-green-50 border border-green-200 px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-200 flex items-center justify-center">
              <svg
                className="w-5 h-5 text-green-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold text-text-dark text-sm md:text-base leading-snug mb-0.5">
                Our assessment pinpoints exactly where a gap exists on this path.
              </p>
              <p className="text-muted text-sm leading-relaxed">
                So your child gets targeted help — not a generic programme — and
                can move confidently toward middle school success.
              </p>
            </div>
          </div>
        </FadeUp>
      </Container>
    </section>
  );
}
