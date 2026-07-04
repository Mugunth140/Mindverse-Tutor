import { Container } from "@/components/layout/Container";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-5xl font-bold text-primary mb-6">Get in Touch</h1>
      <p className="text-xl text-muted">We'd love to hear from you.</p>
    </Container>
  );
}
