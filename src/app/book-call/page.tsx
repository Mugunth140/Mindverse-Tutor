import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { BookCallForm } from "@/components/sections/BookCallForm";

export const metadata: Metadata = { 
  title: "Book a Clarity Call",
  description: "Schedule a free, no-obligation clarity call with Mindverse Tutor to discuss your child's educational needs and discover the perfect learning pathway.",
  keywords: ["Book a Call", "Free Clarity Call", "Mindverse Tutor Consultation", "Educational Consultation"],
  alternates: {
    canonical: "https://mindversetutor.com/book-call",
  },
  openGraph: {
    title: "Book a Clarity Call | Mindverse Tutor",
    description: "Schedule a free, no-obligation clarity call with our expert educators.",
    url: "https://mindversetutor.com/book-call",
    type: "website",
  }
};

export default function BookCallPage() {
  return (
    <div className="bg-background min-h-screen pt-24 pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none mix-blend-multiply"></div>
      
      {/* Soft Background Globs */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-accent-blue/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-dark mb-6 tracking-tight">
            Book a Discovery Call
          </h1>
          <p className="text-lg md:text-xl text-muted font-medium">
            Select a time below to chat directly with our founder. We'll discuss your child's unique needs and map out exactly how we can help them thrive.
          </p>
        </div>

        <BookCallForm />
      </Container>
    </div>
  );
}
