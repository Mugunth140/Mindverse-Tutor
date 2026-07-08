import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";

export const metadata: Metadata = {
  title: "Privacy Policy | Mindverse Tutor",
  description: "Read the Privacy Policy for Mindverse Tutor. We are committed to protecting your personal information and complying with international privacy standards.",
  alternates: {
    canonical: "https://mindversetutor.com/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] mix-blend-multiply"></div>
      
      <Container className="relative z-10 max-w-4xl mx-auto">
        <FadeUp delay={0.1}>
          <h1 className="text-4xl md:text-5xl font-black text-text-dark mb-6 tracking-tight">Privacy Policy</h1>
          <p className="text-muted font-bold mb-12">Effective Date: July 7, 2026</p>
        </FadeUp>

        <FadeUp delay={0.2} className="prose prose-lg prose-slate max-w-none text-muted leading-relaxed">
          <section className="mb-10 bg-white/60 p-8 rounded-3xl border border-muted/10 shadow-sm">
            <h2 className="text-2xl font-extrabold text-text-dark mb-4 mt-0">Overview</h2>
            <p>
              This document contains the Privacy Policy for Mindverse Tutor. It is intended for publication on the website and reflects international best practices for online tutoring businesses serving families in India, the United States, Canada, and Australia. It is not a substitute for jurisdiction-specific legal advice.
            </p>
            <p>
              Mindverse Tutor collects only the information necessary to deliver educational services, including parent and student contact information, grade level, learning goals, assessment results, and payment details processed by secure third-party providers. Information is used to manage enrolments, deliver classes, communicate with families, improve services, and comply with legal obligations. Children's information is collected only with parental or guardian consent where required by law. Parents may request access, correction, or deletion of their child's personal information. Mindverse Tutor does not sell or rent personal information or use children's data for behavioural advertising.
            </p>
          </section>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-text-dark mb-3">1. Information We Collect</h3>
              <p>
                We may collect parent/guardian name, student name, age/grade, contact details, country, learning goals, assessment results, and payment information processed securely through third-party providers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-dark mb-3">2. How We Use Information</h3>
              <p>
                To respond to enquiries, register students, schedule and deliver classes, communicate with parents, improve our services, and send important programme updates. We never sell or rent personal information.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-dark mb-3">3. Children's Privacy</h3>
              <p>
                Mindverse Tutor primarily serves children under 18. For students below the age of independent consent (including under 13 in the US), a parent or legal guardian must provide consent before any personal information is collected. Parents may review, update, or request deletion of their child's information. We collect only the minimum information necessary and do not knowingly use children's data for advertising or profiling.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-dark mb-3">4. Online Classes</h3>
              <p>
                Classes are conducted using secure platforms such as Microsoft Teams or Zoom. Sessions may occasionally be recorded for quality assurance or educational purposes, with prior notice where applicable.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-dark mb-3">5. Cookies</h3>
              <p>
                Our website may use cookies for analytics and website functionality. Users may disable cookies in browser settings.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-dark mb-3">6. Data Security</h3>
              <p>
                We implement reasonable technical and organisational safeguards to protect personal information, although no internet transmission is completely secure.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-dark mb-3">7. Third-Party Services</h3>
              <p>
                Trusted third-party providers may be used for payments, video conferencing, analytics, email, and learning management systems.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-dark mb-3">8. Parent Rights</h3>
              <p>
                Parents may request access, correction, updating, or deletion of their child's personal information, subject to applicable law.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-dark mb-3">9. International Privacy Compliance</h3>
              <p>
                Mindverse Tutor strives to comply with applicable privacy laws including COPPA (USA), PIPEDA (Canada), the Australian Privacy Act 1988 and Australian Privacy Principles (APPs), and India's Digital Personal Data Protection Act, 2023 (DPDP). Where required, parental consent is obtained before collecting children's information, only necessary information is collected, and reasonable safeguards are maintained.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-text-dark mb-3">10. Policy Updates</h3>
              <p>
                This policy may be updated periodically. Continued use constitutes acceptance of revisions.
              </p>
            </div>
          </div>
        </FadeUp>
      </Container>
    </div>
  );
}