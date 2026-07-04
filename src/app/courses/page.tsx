import { Container } from "@/components/layout/Container";

export const metadata = { title: "Courses" };

export default function CoursesPage() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-5xl font-bold text-primary mb-6">Courses</h1>
      <p className="text-xl text-muted">Math, Science, and more.</p>
    </Container>
  );
}
