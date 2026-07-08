"use client";

import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";
import { motion } from "motion/react";
import { COUNTRY_PATHS } from "@/data/countryPaths";

// The 6 countries we serve, each with:
//  - key: matches COUNTRY_PATHS key
//  - label: display name
//  - pin: % position on the 895.92 × 471.76 viewBox map image
//  - delay: stagger for the animation
const HIGHLIGHTED_COUNTRIES = [
  { key: "India",                label: "India",     pin: { x: "71.4%", y: "46.6%" }, delay: 0 },
  { key: "United_States",        label: "USA",       pin: { x: "22.3%", y: "31.8%" }, delay: 0.15 },
  { key: "Canada",               label: "Canada",    pin: { x: "24.5%", y: "21.2%" }, delay: 0.3 },
  { key: "Australia",            label: "Australia", pin: { x: "83.7%", y: "74.1%" }, delay: 0.45 },
  { key: "Singapore",            label: "Singapore", pin: { x: "77%",   y: "57.2%" }, delay: 0.6 },
  { key: "United_Arab_Emirates", label: "UAE",       pin: { x: "64.7%", y: "44.5%" }, delay: 0.75 },
];

// Amber/yellow highlight color (matches brand accent)
const HIGHLIGHT_COLOR = "#F59E0B";
const HIGHLIGHT_COLOR_GLOW = "#FCD34D";

export function GlobalPresenceSection() {
  return (
    <section className="py-12 md:py-16 bg-background relative z-20 overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">

        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <FadeUp delay={0.2}>
            <h2 className="text-fluid-h2 font-extrabold text-text-dark mb-6 tracking-tight">
              Supporting Young Minds Across the World
            </h2>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-lg md:text-xl text-muted mb-10 leading-relaxed text-balance">
              Mindverse Tutor proudly delivers live, personalised learning experiences for students across multiple countries and time zones.
            </p>
          </FadeUp>
        </div>

        {/* Map Scene */}
        <div className="w-full relative flex justify-center items-center">
          <div className="relative w-full max-w-5xl aspect-[1.89] mx-auto">

            {/* Base map — grayscale background */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.35, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 pointer-events-none"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/world/MapChart_Map.svg"
                alt="World map"
                className="w-full h-full object-contain grayscale"
                draggable={false}
              />
            </motion.div>

            {/* Animated country highlight overlay — same viewBox as the source SVG */}
            <motion.svg
              viewBox="0 0 895.92 471.76"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin"
              className="absolute inset-0 w-full h-full pointer-events-none"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <defs>
                {/* Glow filter for highlighted countries */}
                <filter id="country-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {HIGHLIGHTED_COUNTRIES.map(({ key, delay }) => (
                <motion.path
                  key={key}
                  d={COUNTRY_PATHS[key]}
                  fill={HIGHLIGHT_COLOR}
                  stroke={HIGHLIGHT_COLOR_GLOW}
                  strokeWidth={0.4}
                  filter="url(#country-glow)"
                  variants={{
                    hidden: { opacity: 0, fillOpacity: 0 },
                    visible: {
                      opacity: 1,
                      fillOpacity: [0, 0.85, 0.6],
                      transition: {
                        delay,
                        duration: 1.2,
                        ease: "easeOut",
                        fillOpacity: {
                          times: [0, 0.5, 1],
                          repeat: Infinity,
                          repeatType: "reverse",
                          duration: 2.5,
                          delay,
                          ease: "easeInOut",
                        },
                      },
                    },
                  }}
                />
              ))}
            </motion.svg>

            {/* Pin labels */}
            {HIGHLIGHTED_COUNTRIES.map(({ key, label, pin, delay }) => (
              <motion.div
                key={`pin-${key}`}
                className="absolute flex flex-col items-center"
                style={{ left: pin.x, top: pin.y, transform: "translate(-50%, -50%)" }}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.8, duration: 0.4, ease: "backOut" }}
              >
                {/* Pulsing dot */}
                <span className="relative flex h-3 w-3 mb-1">
                  <motion.span
                    className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-70"
                    animate={{ scale: [1, 2.2, 1], opacity: [0.7, 0, 0.7] }}
                    transition={{ duration: 2, repeat: Infinity, delay, ease: "easeInOut" }}
                  />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500 shadow-lg" />
                </span>
                {/* Country name pill */}
                <span className="text-[10px] font-bold tracking-wide text-amber-900 bg-amber-100/90 backdrop-blur-sm border border-amber-300 rounded-full px-2 py-0.5 leading-tight shadow-sm whitespace-nowrap">
                  {label}
                </span>
              </motion.div>
            ))}

          </div>
        </div>

        {/* Country chip strip */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {HIGHLIGHTED_COUNTRIES.map(({ key, label, delay }) => (
            <motion.span
              key={`chip-${key}`}
              className="text-sm font-semibold text-amber-800 bg-amber-50 border border-amber-200 rounded-full px-4 py-1.5 shadow-sm"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 1.2, duration: 0.3 }}
            >
              {label}
            </motion.span>
          ))}
        </div>

      </Container>
    </section>
  );
}
