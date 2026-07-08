import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/sections/ContactForm";
import { FadeUp, FadeIn } from "@/components/shared/Animations";

export const metadata: Metadata = { 
  title: "Contact Us | Support & Inquiries",
  description: "Get in touch with the Mindverse Tutor team. We are here to answer your questions and help you find the best educational pathway for your child.",
  keywords: ["Contact Mindverse Tutor", "Customer Support", "Tutoring Inquiries"],
  alternates: {
    canonical: "https://mindversetutor.com/contact",
  },
  openGraph: {
    title: "Contact Mindverse Tutor",
    description: "Get in touch with our team for questions and support.",
    url: "https://mindversetutor.com/contact",
    type: "website",
  }
};

export default function ContactPage() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-32 relative overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] mix-blend-multiply"></div>
      
      {/* Soft Background Globs */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-accent-green/10 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10 max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
          
          {/* Left Column: Form */}
          <div className="w-full lg:w-3/5">
            <FadeUp delay={0.1}>
              <h1 className="text-fluid-h1 font-black text-text-dark mb-4 leading-tight tracking-tight text-center">
                Let's get in <span className="text-accent-blue">touch.</span>
              </h1>
              <p className="text-lg text-muted leading-relaxed mb-10 max-w-lg text-center">
                Have a question about our programs or your child's learning journey? Drop us a message and our team will get back to you shortly.
              </p>
            </FadeUp>

            <FadeUp delay={0.2} className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-muted/10 relative">
              <ContactForm />
            </FadeUp>
          </div>

        </div>
      </Container>
    </div>
  );
}
