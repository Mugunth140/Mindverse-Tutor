import { Metadata } from "next";
import { Container } from "@/components/layout/Container";

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
    <Container className="py-24 text-center">
      <h1 className="text-5xl font-bold text-primary mb-6">Get in Touch</h1>
      <p className="text-xl text-muted">We'd love to hear from you.</p>
    </Container>
  );
}
