import { Container } from "@/components/layout/Container";

export const metadata = { title: "Programs" };

export default function ProgramsPage() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-5xl font-bold text-primary mb-6">Our Programs</h1>
      <p className="text-xl text-muted">Explore our After School & Summer programs.</p>
    </Container>
  );
}
