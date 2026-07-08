"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";

const faqs = [
  {
    q: "What is the Math Readiness Assessment?",
    a: "The Math Readiness Assessment is a FREE, 30-minute online evaluation that measures your child's current level across 7 key mathematical areas: Number Sense, Fractions, Decimals, Geometry, Reasoning, Place Value, and Measurement. You receive a detailed Skill Gap Report within 48 hours.",
  },
  {
    q: "Is the assessment really free?",
    a: "Yes — completely free, with no credit card required and no commitment to join the bootcamp. The assessment is our way of ensuring every parent has a clear, honest picture of where their child stands before making any decisions.",
  },
  {
    q: "How long does the assessment take?",
    a: "The assessment takes approximately 30 minutes to complete. It is conducted online and can be taken from home at a time that suits your child. Results and the Skill Gap Report are delivered to you within few hours.",
  },
  {
    q: "What grade levels is the bootcamp for?",
    a: "The Middle School Math Readiness Bootcamp is designed specifically for students entering Grade 6 or Grade 7. It addresses the foundational gaps that make the transition to middle school mathematics challenging.",
  },
  {
    q: "How many students are in each session?",
    a: "Sessions are kept to a small cohort. This small group format ensures every student receives individual attention while also benefiting from the collaborative energy of peer learning.",
  },
  {
    q: "Are the sessions live or recorded?",
    a: "All sessions are live conducted with the educator in real time. There are no pre recorded lectures. This interactive format is essential to our concept-based teaching approach.",
  },
  {
    q: "What if my child is already doing well in math?",
    a: "Many students who appear to be doing well still carry hidden gaps in foundational areas. The assessment often reveals surprising results. Even strong students benefit from consolidating their foundations before the complexity of middle school mathematics increases significantly.",
  },
  {
    q: "What timezone are the sessions in?",
    a: "Live sessions are held daily at 9:00 AM PT / 10:00 AM MT / 11:00 AM CT / 12:00 PM ET / 1:00 PM AT, and all calendar links and reminders will automatically convert to your local time zone upon enrollment.",
  },
    {
    q: "What if the scheduled class time doesn't work for my child?",
    a: "We understand that every family's schedule is different. If our scheduled class time doesn't work for you, please contact us. We'll do our best to accommodate your preferred time. If there is sufficient interest, we may open an additional batch at a different time.",
  },
  {
    q: "How do I receive the skill gap report?",
    a: "The Skill Gap Report is prepared by our AI Agents and delivered to you via email within few hours of the assessment. It includes a section-by-section breakdown of your child's performance and specific recommendations.",
  },
  // {
  //   q: "What happens after the bootcamp ends?",
  //   a: "At the end of the 4-week bootcamp, you receive a final progress report. Continued support options are available depending on your child's needs. Many families continue with one-to-one or small group sessions through MindVerse Tutor's regular programmes.",
  // },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 md:py-28 bg-blue-50 relative overflow-hidden">
      <Container>
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <FadeUp delay={0.1}>
            <div className="inline-block rounded-full bg-blue-100 text-blue-700 text-sm font-bold px-4 py-1.5 mb-4">
              Common Questions
            </div>
            <h2 className="text-fluid-h2 font-extrabold text-text-dark font-heading">
              Questions From Parents Like You
            </h2>
          </FadeUp>
        </div>

        {/* Accordion */}
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors duration-150"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-text-dark text-sm md:text-base leading-snug">
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="#60A5FA"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-muted text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
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
