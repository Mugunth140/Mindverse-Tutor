import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";

export const metadata: Metadata = {
  title: "Terms & Conditions | Mindverse Tutor",
  description: "Read the Terms & Conditions and Refund Policy for Mindverse Tutor educational services.",
  alternates: {
    canonical: "https://mindversetutor.com/terms-conditions",
  },
};

export default function TermsConditionsPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] mix-blend-multiply"></div>
      
      <Container className="relative z-10 max-w-4xl mx-auto">
        <FadeUp delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-black text-text-dark mb-6 tracking-tight">Terms & Conditions</h1>
          <p className="text-muted font-bold mb-12">Effective Date: July 7, 2026</p>
        </FadeUp>

        <FadeUp delay={0.2} className="prose prose-lg prose-slate max-w-none text-muted leading-relaxed">
          <section className="mb-10 bg-white/60 p-8 rounded-3xl border border-muted/10 shadow-sm">
            <h2 className="text-2xl font-extrabold text-text-dark mb-4 mt-0">Acceptance</h2>
            <p>
              By using our website, services, or enrolling in a programme, parents and students indicate acceptance of these Terms.
            </p>
          </section>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-text-dark mb-3">Services</h3>
              <p>
                We provide mathematics, English, phonics, after-school academic support, one-to-one tutoring, small-group tutoring, assessments, workshops, and related educational services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-dark mb-3">Student Responsibilities</h3>
              <p>
                Students are expected to attend on time, participate respectfully, and complete assigned work.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-dark mb-3">Parent Responsibilities</h3>
              <p>
                Parents must provide accurate registration details, supervise enrolment, ensure suitable devices and internet access, support attendance, and provide a suitable learning environment.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-dark mb-3">General Terms & Intellectual Property</h3>
              <p>
                Programme content, schedules, tutors, and lesson formats may change where reasonably necessary. All educational materials remain the intellectual property of Mindverse Tutor and may not be copied, distributed, or recorded without written permission. Mindverse Tutor provides educational coaching only and does not guarantee examination scores or admissions outcomes.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-muted/20">
              <h2 className="text-2xl font-extrabold text-text-dark mb-6">Refund Policy</h2>
              <p className="mb-4">
                All programme fees, registration fees, deposits, and tuition payments are final and non-refundable. No refunds are provided for missed classes, change of mind, scheduling conflicts, withdrawal, relocation, technical issues on the student's end, or non-attendance.
              </p>
              <p className="mb-4">
                Make-up sessions may be offered solely at the discretion of Mindverse Tutor and subject to tutor availability. Programme changes required to maintain instructional quality do not constitute grounds for a refund.
              </p>
              <p className="mb-4">
                For children, enrolment must be completed by a parent or legal guardian. Parents are responsible for reviewing all programme information and policies before payment.
              </p>
              <p>
                In the rare event that Mindverse Tutor cannot deliver a programme and no suitable alternative can be provided, Mindverse Tutor may, at its sole discretion, offer a replacement class or programme credit without creating an obligation to provide a monetary refund.
              </p>
            </div>
          </div>
        </FadeUp>
      </Container>
    </div>
  );
}