import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";

const stars = [1, 2, 3, 4, 5];

const cards = [
  {
    id: "video",
    colSpan: "md:col-span-2",
    content: (
      <div className="rounded-3xl bg-slate-800 aspect-video md:aspect-auto md:min-h-[280px] flex flex-col items-center justify-center relative overflow-hidden h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900" />
        <div className="relative z-10 flex flex-col items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#1E293B">
              <path d="M8 5.14v14l11-7-11-7z" />
            </svg>
          </div>
          <div className="text-center text-white">
            <div className="font-bold text-lg">Parent Testimonial</div>
            <div className="text-slate-400 text-sm mt-1">
              Parent of Grade 6 Student · India
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "review-canada",
    colSpan: "md:col-span-1",
    content: (
      <div className="rounded-2xl bg-white border border-slate-100 shadow-soft p-6 h-full">
        <div className="flex gap-0.5 mb-4">
          {stars.map((i) => (
            <span key={i} className="text-yellow-400 text-lg">
              &#9733;
            </span>
          ))}
        </div>
        <p className="text-text-dark text-sm leading-relaxed italic mb-4">
          &ldquo;My daughter went from dreading math to actually enjoying it. The
          concept-based approach made all the difference — she now understands
          WHY, not just HOW.&rdquo;
        </p>
        <div className="border-t border-slate-100 pt-4">
          <div className="font-semibold text-text-dark text-sm">
            Parent of Grade 6 Student
          </div>
          <div className="text-muted text-xs">Canada</div>
        </div>
      </div>
    ),
  },
  {
    id: "success-australia",
    colSpan: "md:col-span-1",
    content: (
      <div className="rounded-2xl bg-green-50 border border-green-100 shadow-soft p-6 h-full">
        <div className="rounded-full bg-green-100 text-green-700 text-xs font-bold px-3 py-1 inline-block mb-4">
          Student Success
        </div>
        <p className="text-text-dark text-sm leading-relaxed mb-3">
          &ldquo;My son had failed his last two math tests. After 4 weeks with
          MindVerse Tutor, he passed his mid-term with 78%. More importantly, he
          stopped saying he hated math.&rdquo;
        </p>
        <div className="text-muted text-xs font-medium">
          Parent of Grade 7 Student · Australia
        </div>
      </div>
    ),
  },
  {
    id: "review-uae",
    colSpan: "md:col-span-1",
    content: (
      <div className="rounded-2xl bg-white border border-slate-100 shadow-soft p-6 h-full">
        <div className="flex gap-0.5 mb-4">
          {stars.map((i) => (
            <span key={i} className="text-yellow-400 text-lg">
              &#9733;
            </span>
          ))}
        </div>
        <p className="text-text-dark text-sm leading-relaxed italic mb-4">
          &ldquo;Exceptional teaching. My child finally understands fractions
          after years of confusion. The small group format means she never gets
          lost.&rdquo;
        </p>
        <div className="border-t border-slate-100 pt-4">
          <div className="font-semibold text-text-dark text-sm">
            Parent of Grade 6 Student
          </div>
          <div className="text-muted text-xs">UAE</div>
        </div>
      </div>
    ),
  },
  {
    id: "google-review",
    colSpan: "md:col-span-2",
    content: (
      <div className="rounded-2xl bg-white border border-slate-100 shadow-soft p-6 flex gap-5 items-start h-full">
        <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-200 flex items-center justify-center flex-shrink-0">
          <span
            className="font-bold text-lg"
            style={{
              background:
                "linear-gradient(135deg, #4285F4, #34A853, #FBBC05, #EA4335)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            G
          </span>
        </div>
        <div>
          <div className="flex gap-0.5 mb-2 items-center">
            {stars.map((i) => (
              <span key={i} className="text-yellow-400">
                &#9733;
              </span>
            ))}
            <span className="text-muted text-sm ml-2">Google Review</span>
          </div>
          <p className="text-text-dark text-sm leading-relaxed italic">
            &ldquo;Best tutoring decision we ever made. Our daughter is now
            confident, independent, and genuinely excited about Grade 6. Worth
            every penny — and the assessment was free to start.&rdquo;
          </p>
          <div className="text-muted text-xs mt-3">Parent · Singapore</div>
        </div>
      </div>
    ),
  },
];

export function TestimonialsWall() {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      <Container>
        {/* Header */}
        <FadeUp className="flex flex-col items-center text-center mb-12">
          <span className="rounded-full bg-blue-100 text-blue-700 text-sm font-bold px-4 py-1.5 mb-4 inline-block">
            Parent Stories
          </span>
          <h2 className="text-fluid-h2 font-extrabold text-text-dark font-heading text-center max-w-2xl">
            Families Who Chose MindVerse Tutor
          </h2>
          <p className="text-muted mt-3 text-base">
            Real parents. Real results. Real confidence.
          </p>
        </FadeUp>

        {/* Asymmetric grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card, index) => (
            <FadeUp
              key={card.id}
              delay={0.1 * index}
              className={card.colSpan}
            >
              {card.content}
            </FadeUp>
          ))}
        </div>
      </Container>
    </section>
  );
}
