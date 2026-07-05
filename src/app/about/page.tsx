import { Container } from "@/components/layout/Container";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-5xl font-bold text-primary mb-6">About Mindverse</h1>
      <p className="text-xl text-muted">Dedicated to transforming learning.</p>
    </Container>
  );
}
