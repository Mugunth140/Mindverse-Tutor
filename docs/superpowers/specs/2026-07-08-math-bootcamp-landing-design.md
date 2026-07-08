# Design Spec: Middle School Math Readiness Bootcamp Landing Page

**Date:** 2026-07-08  
**Route:** `/math-bootcamp`  
**Goal:** Conversion landing page — drive parents to take the FREE Math Readiness Assessment  
**Primary CTA:** `https://assessment.mindversetutor.com` (external, `target="_blank"`)  
**Secondary CTA:** `/book-call` (internal Next.js Link)

---

## Architecture

### File Structure

```
src/app/math-bootcamp/
  page.tsx                          # Server component, metadata, section orchestrator

src/components/bootcamp/
  BootcampHero.tsx                  # Section 1
  ProblemTimeline.tsx               # Section 2
  LearningGapsRoadmap.tsx           # Section 3
  HiddenGapsSigns.tsx               # Section 4
  WhySummerSection.tsx              # Section 5
  AssessmentShowcase.tsx            # Section 6
  HowItWorksRoadmap.tsx             # Section 7
  BootcampFeatures.tsx              # Section 8
  CurriculumTimeline.tsx            # Section 9
  TeachingPhilosophy.tsx            # Section 10
  BeforeAfterSection.tsx            # Section 11
  EducatorSection.tsx               # Section 12
  TrustSection.tsx                  # Section 13
  TestimonialsWall.tsx              # Section 14
  FAQSection.tsx                    # Section 15
  FinalCTASection.tsx               # Section 16
```

All components are **server components** except those that require `useState`/`useEffect`:
- `FAQSection.tsx` — `"use client"` (accordion state)
- `CurriculumTimeline.tsx` — `"use client"` (week expand state)
- `LearningGapsRoadmap.tsx` — `"use client"` (motion/react SVG path draw)
- `HowItWorksRoadmap.tsx` — `"use client"` (motion/react dotted path)

All animation-only wrappers (FadeUp, motion.div) are already client-side via the shared `Animations.tsx`.

### Shared Dependencies

- `@/components/layout/Container` — standard horizontal padding wrapper
- `@/components/shared/Animations` — `FadeUp`, `FadeIn`, `FloatingShape`
- `@/components/ui/Button` — smart link/button component
- `motion/react` — for animations (NOT `framer-motion`)
- `next/image` — for all mascot and asset images

---

## Color Assignment per Section

| Section | Background | Accent Color |
|---------|-----------|--------------|
| Hero | Warm Cream `#FFFDF8` | Yellow `#FBBF24` |
| Problem Timeline | Soft Yellow `bg-yellow-50` | Yellow + Blue |
| Learning Gaps Roadmap | Warm Cream | Green `#34D399` path |
| Hidden Gaps Signs | Very Light Blue `bg-blue-50` | Blue |
| Why Summer | Very Light Green `bg-green-50` | Green |
| Assessment Showcase | Warm Cream | Yellow dominant |
| How It Works | Soft Yellow `bg-yellow-50` | Multi-color steps |
| Bootcamp Features | Warm Cream | Blue + Green |
| Curriculum Timeline | Very Light Blue | Week-color coded |
| Teaching Philosophy | Very Light Green | Green path |
| Before/After | Split: muted-left / bright-right | Red left / Green right |
| Educator | Warm Cream | Yellow accent bar |
| Why Parents Trust | Soft Yellow | Blue |
| Testimonials | Warm Cream | Mixed |
| FAQ | Very Light Blue | Blue |
| Final CTA | `#1E293B` dark slate | Yellow CTA |

---

## Section Specifications

### Section 1: Hero — `BootcampHero.tsx`

**Layout:** Full-height-ish hero (min-h `90vh`), two columns on desktop.

**Left column:**
- Small "pill" trust badge: `Summer 2026 · Grades 6 & 7 · Limited Seats`
- `<h1>` fluid heading: "Is Your Child Ready for Middle School Math?"
- Subheading paragraph: "Most students enter Grade 6 carrying hidden learning gaps that quietly hold them back. Our FREE Math Readiness Assessment identifies exactly where your child stands — before it becomes a problem."
- Two CTA buttons stacked on mobile, side-by-side on desktop:
  - Primary: `Button variant="primary" size="xl"` → assessment URL
  - Secondary: `Button variant="outline" size="xl"` → `/book-call`
- Trust indicators row (no emojis, plain text with colored dots):
  - "FREE Assessment" · "No Commitment" · "Results in 48 Hours" · "Expert Educator"

**Right column:**
- Large `Board.png` as background anchor
- `Yelllow-Teaching.png` overlaid left of board (absolute positioned)
- `Blue-Writing.png` overlaid right/bottom
- Floating math symbols as inline SVG text nodes (`÷`, `×`, `²`, `√`, `%`) with `FloatingShape` animation, colored in yellow/blue/green, scattered organically
- Background: faint yellow radial gradient blob behind the illustration cluster

**Mobile:** Left column stacks first, illustration below (contained, not full-height).

---

### Section 2: Problem Timeline — `ProblemTimeline.tsx`

**Layout:** Centered, max-width editorial, large whitespace.

**Structure:**
- Section label pill: "The Problem"
- Large `<h2>`: "Something Quietly Breaks Between Elementary and Middle School."
- Below: a **vertical visual timeline** with 4 steps connected by a dotted vertical line (pure CSS, not SVG):
  1. **Elementary School** — `blue-shows-paper-with-star.png`, blue accent, "Child learns concepts at their own pace"
  2. **Hidden Learning Gaps** — inline SVG gap/crack illustration (simple CSS-drawn crack), yellow accent, "Small misunderstandings go unnoticed and unfixed"
  3. **Confidence Drops** — `Red-Using laptop.png` small, red accent, "Child starts avoiding math, asking for help repeatedly"
  4. **Middle School Becomes Difficult** — `Blue-Searching-Book.png`, muted tone, "Algebra and geometry arrive before foundations are solid"

Each step: large step number (fluid type, very light), bold label, 1–2 sentence description. Connected by `border-l-2 border-dashed border-yellow-300`.

**Desktop:** Two-column alternating (timeline left, illustration right, then flip).

---

### Section 3: Learning Gaps Roadmap — `LearningGapsRoadmap.tsx` (`"use client"`)

**Layout:** Full-width with `Container`, centered heading, then winding S-curve path visual.

**Heading:** "How Learning Gaps Silently Build Up"

**Visual:** An SVG winding dotted path (drawn via `motion/react` `pathLength` animation on scroll). Along the path, 8 milestone nodes:
1. Number Sense — yellow circle node
2. Fractions — blue circle node
3. Decimals — green circle node
4. Ratios — red/orange circle node
5. Percentages — yellow circle node
6. Algebra — blue circle node (slightly larger — transition point)
7. Geometry — green circle node
8. Middle School Success — gold star burst node (final destination)

Each node: colored circle with subject label below, and a tiny 24×24 inline SVG icon (simple geometric: fraction bar, decimal point, x variable).

The path animates `pathLength: 0 → 1` on scroll entry (`whileInView`). Each node fades in sequentially with staggered delay.

**Mobile:** The S-curve becomes a straight vertical dotted line with nodes stacked.

---

### Section 4: Hidden Gaps Signs — `HiddenGapsSigns.tsx`

**Layout:** Editorial alternating — not a grid. 6 "paper cards" in a staggered masonry-like arrangement.

**Heading:** "Signs Your Child Has Hidden Skill Gaps"
**Subheading:** "These patterns often go unnoticed until middle school makes them impossible to ignore."

**Six paper cards**, each `rounded-3xl`, `border border-{color}/20`, `bg-white shadow-card`, with a colored accent bar at top:

1. **Avoids Solving Independently** — blue accent — `Blue-Searching-Book.png` thumbnail — "Reaches for help immediately instead of attempting problems first."
2. **Repeated Mistakes on the Same Type** — red accent — no image — "Makes the same error across multiple attempts — a sign of a concept gap, not carelessness."
3. **Calculator Dependency** — yellow accent — `Red-Using laptop.png` thumbnail — "Cannot estimate or perform basic arithmetic without a device."
4. **Confused by Fractions** — green accent — no image — "Treats fractions as separate numbers rather than parts of a whole."
5. **Math Anxiety** — blue accent — `Purple-Taking in mic.png` thumbnail — "Shows visible stress, avoidance, or frustration before even starting."
6. **Needs Repeated Explanations** — yellow accent — no image — "Same concept explained multiple times but understanding doesn't stick."

**Layout pattern:** On desktop, cards are in a 2-column editorial grid with intentional offset (col 1 cards at normal position, col 2 cards offset down by 2rem). Not perfectly symmetric. On mobile: single column.

---

### Section 5: Why Summer — `WhySummerSection.tsx`

**Layout:** Split — illustration left (sticky on desktop scroll), content right.

**Left:** `green-showing-note.png` large, inside a soft green rounded card with subtle dot pattern.

**Right:**
- Section label: "Why Summer Is The Best Time"
- `<h2>`: "Fix the Foundation Before It Becomes a Crisis."
- A 3-step vertical flow with connecting arrows (CSS, not SVG):
  1. **Before School Starts** — green dot — "The pressure is off. No grades. No stress. Pure learning."
  2. **Fix Learning Gaps** — yellow dot — "We identify and close every foundational gap systematically."
  3. **Enter Grade 6 Confident** — blue dot — "Your child arrives knowing they are prepared."
- Supporting paragraph about the bootcamp timing.
- CTA: `Button variant="primary"` → assessment URL

---

### Section 6: Assessment Showcase — `AssessmentShowcase.tsx`

**Layout:** Centered, full-width card with yellow/amber background, large visual.

**Heading:** "We Assess Before We Teach."
**Subheading:** "Every student starts with a FREE Math Readiness Assessment — so we know exactly where to begin."

**Central element:** A large "assessment card" mockup (pure HTML/CSS, not a real form):
- Styled like a soft paper card with subtle ruled lines (CSS `repeating-linear-gradient`)
- Header area: "Math Readiness Assessment · Grade 6 Preparation"
- 7 subject tags displayed as colored pill chips in a flex-wrap layout:
  - Number Sense (yellow)
  - Fractions (blue)
  - Decimals (green)
  - Geometry (red/orange)
  - Reasoning (purple — accent-only use)
  - Place Value (yellow)
  - Measurement (green)
- Below chips: a mock "question area" showing a sample fraction problem with 4 answer options styled as rounded answer buttons (purely illustrative, not interactive)
- Bottom of card: "Personalised · 30 Minutes · Expert-Reviewed Results"

**Flanking the card:** `Yelllow-Teaching.png` left (pointing at card), `blue-shows-paper-with-star.png` right.

---

### Section 7: How It Works — `HowItWorksRoadmap.tsx` (`"use client"`)

**Layout:** Horizontal roadmap on desktop, vertical on mobile.

**Heading:** "Your Child's Journey to Confidence"

**Four steps** connected by animated dotted SVG path:
1. **Assessment** — yellow node — "Take the FREE Math Readiness Assessment online"
2. **Skill Gap Report** — blue node — "Receive a detailed report of your child's specific gaps within 48 hours"
3. **Parent Consultation** — green node — "Discuss findings and the bootcamp plan with our educator"
4. **Join Bootcamp** — gold/yellow star node — "Begin 4 weeks of focused, concept-based learning"

Each step node: colored circle (48px), step number inside, label below, description below label. Connected by `motion.path` SVG line that draws left-to-right on scroll entry.

**Mobile:** Vertical stack, line draws top-to-bottom.

---

### Section 8: Bootcamp Features — `BootcampFeatures.tsx`

**Layout:** Large editorial, NOT a feature grid. Two-part layout:

**Top:** Large headline with key metrics inline:
- "`4 Weeks` of focused learning. `12 Live Sessions`. Always in `Small Groups`."
- Each number/highlighted term wrapped in a yellow/blue/green pill `<span>`.

**Bottom:** Two-column on desktop. Left: `yellow-blue-puzzle.png` large illustration in a colored rounded card. Right: list of 7 features in a **vertical stacked card** style (each feature is its own mini card, not a grid):
1. 4 Weeks · 12 Sessions — blue accent line
2. Small Groups (max 5 students) — green accent line
3. Weekly Homework Practice — yellow accent line
4. Concept-Based Teaching — blue accent line
5. Regular Teacher Feedback — green accent line
6. Confidence Building Activities — yellow accent line
7. Parent Progress Updates — blue accent line

Each feature card: `rounded-2xl bg-white border border-{color}/10 px-5 py-3`, accent-colored left border `border-l-4`.

---

### Section 9: Curriculum Timeline — `CurriculumTimeline.tsx` (`"use client"`)

**Layout:** Notebook-inspired. Light ruled-line background CSS. Four week "tabs" expand on click.

**Heading:** "12 Sessions. 4 Weeks. One Complete Transformation."

**Week structure** (each week is an expandable "notebook page"):

| Week | Color | Sessions | Topics |
|------|-------|----------|--------|
| Week 1 | Yellow | 1–3 | Number Sense, Place Value, Factors & Multiples |
| Week 2 | Blue | 4–6 | Fractions, Decimals, Percentages |
| Week 3 | Green | 7–9 | Ratios, Basic Algebra, Word Problems |
| Week 4 | Red/Orange | 10–12 | Geometry, Measurement, Reasoning & Review |

Each expanded week shows:
- 3 session rows, each with a tiny colored dot, session number, topic name, and 1-sentence description
- A small `Board.png` thumbnail (24×24px decorative)
- A "spiral binding" visual on the left (CSS circles, `rounded-full border-2`)

**Closed state:** Week header pill with week number, title, "3 Sessions", and expand chevron.
**Open state:** Slides down with `motion/react` height animation.

---

### Section 10: Teaching Philosophy — `TeachingPhilosophy.tsx`

**Layout:** Centered, winding dotted path (vertical, simpler than Section 3).

**Heading:** "How We Teach"
**Subheading:** "Every session follows the same six-step learning path."

**Six steps** connected by vertical dotted line (`border-l-2 border-dashed`):
1. **Understand** — yellow — "We explain the concept clearly before any practice"
2. **Visualize** — blue — "Students see the concept with diagrams and models"
3. **Practice** — green — "Guided problem-solving with increasing difficulty"
4. **Explain** — yellow — "Students explain their thinking back to the teacher"
5. **Apply** — blue — "Real-world application and word problems"
6. **Master** — green star — "Independent problem solving with confidence"

Each step: large step circle with number, bold label, description. Illustrated with `green-showing-note.png` (small thumbnail) at step 4 (Explain) and `Yelllow-Teaching.png` thumbnail at step 1.

---

### Section 11: Before/After — `BeforeAfterSection.tsx`

**Layout:** Two-column split card. NOT a table. A large single card (`rounded-4xl`) split left/right.

**Left half** (Before — muted, slightly desaturated):
- Background: `bg-slate-100`
- Label: "Before Bootcamp" in muted text
- `Blue-Searching-Book.png` — small, desaturated via `grayscale` CSS filter
- 5 descriptors as plain text with a `—` dash prefix (muted slate color):
  - Confused by fractions
  - Avoids math independently
  - Anxious before tests
  - Needs repeated help
  - Repeated mistakes

**Right half** (After — bright, warm):
- Background: `bg-yellow-50`
- Label: "After Bootcamp" in bold yellow-800
- `yellow-blue-hifi.png` — full color, `scale-105` hover
- 5 descriptors with a colored dot prefix (green dots):
  - Solves problems independently
  - Understands the WHY
  - Confident in class
  - Ready for Grade 6 algebra
  - Logical thinker

**Dividing line:** A subtle dashed vertical line in the center.

---

### Section 12: Educator — `EducatorSection.tsx`

**Layout:** Split — photo placeholder left, content right.

**Left:** A large rounded rectangle placeholder (`rounded-3xl bg-amber-50 border-2 border-amber-200`) with centered text "Educator Photograph" in muted type. Dimensions: `aspect-[3/4]`. A small `Yelllow-Teaching.png` in the corner as brand anchor.

**Right:**
- Section label: "Meet The Educator"
- Yellow accent bar `w-12 h-1.5 bg-secondary rounded-full`
- `<h2>`: "[Educator Name]" (placeholder)
- `<p className="text-accent-blue font-semibold">`: "Founder, MindVerse Tutor"
- Bio paragraph placeholder: "With over [X] years of experience teaching students across India, Canada, the USA, Australia, UAE, and Singapore, [Name] founded MindVerse Tutor with one mission: to make high-quality, personalised education accessible to every child, regardless of where they live."
- Second paragraph: "[Name]'s teaching philosophy is rooted in concept-based learning — ensuring every student not only gets the right answer, but understands why it's right."
- Mission statement card: `rounded-2xl bg-yellow-50 border border-yellow-200 p-6` — "Our mission is to build confident, independent thinkers who are prepared for the academic challenges ahead."

---

### Section 13: Trust Section — `TrustSection.tsx`

**Layout:** Editorial composition. NOT a feature grid.

**Heading:** "Why Parents Around the World Trust MindVerse Tutor"

**Layout:** 3-column on desktop, single column on mobile. But NOT equal cards. An asymmetric editorial layout:

- **Large card (spans 2 cols):** "Personalised Learning" — `yellow-blue-puzzle.png` illustration — `rounded-3xl bg-yellow-50` — long description about individual attention
- **Small card:** "Concept-Based Teaching" — `Board.png` small — `rounded-3xl bg-blue-50`
- **Small card:** "Small Groups" — max 5 students — `rounded-3xl bg-green-50`
- **Small card:** "Global Students" — countries list — `rounded-3xl bg-yellow-50`
- **Large card (spans 2 cols):** "Experienced Educator" + "Confidence Building" combined — `yellow-blue-hifi.png` — `rounded-3xl bg-white border`
- **Small card:** "Regular Feedback" — `green-showing-note.png` small — `rounded-3xl bg-green-50`

All `border border-{color}/10`, `shadow-soft`, `hover:shadow-float`.

---

### Section 14: Testimonials Wall — `TestimonialsWall.tsx`

**Layout:** Masonry-like, NOT a symmetric grid. Mix of card sizes.

**Heading:** "Families Who Chose MindVerse Tutor"

**Card types:**
1. **Video placeholder card** (large, 2-col span) — `rounded-3xl bg-slate-800` with centered play button SVG and "Parent Testimonial · [Location]" text — yellow play icon
2. **Review card small** — `rounded-2xl bg-white border` — Stars (using `★` text chars, colored yellow via class, not emoji) — parent name, location, quote
3. **Success story card** (medium) — `rounded-3xl bg-green-50 border border-green-100` — "Student Success" badge — brief story
4. **Google review chip** — `rounded-2xl bg-white border` — Google logo (text "Google" styled) — ★★★★★ — short quote

**All testimonial text is placeholder** — clearly marked as `[Parent testimonial placeholder]` in code comments. Real text goes here later.

**5 review cards total:**
- Video placeholder (large)
- 2 small review cards
- 1 success story (medium)
- 1 Google review chip

**Layout:** CSS grid with `grid-cols-1 md:grid-cols-3` and strategic `md:col-span-2` on large cards.

---

### Section 15: FAQ — `FAQSection.tsx` (`"use client"`)

**Layout:** Centered, max-width 800px, elegant accordion.

**Heading:** "Questions From Parents Like You"

**10 FAQ items**, each a `rounded-2xl bg-white border border-slate-100 shadow-card` card:

1. What is the Math Readiness Assessment?
2. Is the assessment really free?
3. How long does the assessment take?
4. What grade levels is the bootcamp for?
5. How many students are in each session?
6. Are the sessions live or recorded?
7. What if my child is already doing well in math?
8. What timezone are the sessions in?
9. How do I receive the skill gap report?
10. What happens after the bootcamp ends?

**Accordion behavior:** Only one open at a time. Animated with `motion/react` `AnimatePresence` + height transition. Chevron rotates 180° when open. Smooth ease-in-out.

**Closed state:** Question text + chevron icon (inline SVG, not emoji)
**Open state:** Question + answer paragraph (2–4 sentences) slides down.

---

### Section 16: Final CTA — `FinalCTASection.tsx`

**Layout:** Dark slate background (`bg-text-dark #1E293B`), centered, large type.

**Heading** (fluid h1 size): "Don't Let Hidden Learning Gaps Hold Your Child Back."
**Subheading:** "The best time to build confidence is before middle school begins. The assessment is free. The results are priceless."

**CTA buttons** (centered, stacked on mobile, side-by-side on desktop):
- Primary: `Button variant="secondary" size="xl"` (yellow on dark) → assessment URL
- Secondary: `Button variant="outline" size="xl"` (white outline on dark) → `/book-call`

**Mascot celebration cluster:** `yellow-blue-hifi.png` large, centered above or beside the heading. Optionally add `Characters-viewing-laptop.png` floating with `FloatingShape` animation.

**Background:** Subtle dot pattern overlay (`bg-dot-pattern opacity-10`).

---

## Animation Budget

| Component | Animation | Library |
|-----------|-----------|---------|
| All sections | `FadeUp` on headings/cards | `Animations.tsx` |
| Hero mascots | `FloatingShape` (gentle y oscillation) | `motion/react` |
| Math symbols in hero | `FloatingShape` staggered | `motion/react` |
| Roadmap paths (Sections 3, 7) | `pathLength: 0→1` `whileInView` | `motion/react` |
| Curriculum accordion | `AnimatePresence` height | `motion/react` |
| FAQ accordion | `AnimatePresence` height | `motion/react` |
| Card hovers | `hover:shadow-float hover:-translate-y-1` | Tailwind |
| Before/After mascot | `hover:scale-105` | Tailwind |

---

## Responsive Breakpoints

- **Mobile (<768px):** Single column, large tap targets (min 44px), no horizontal overflow
- **Tablet (768–1024px):** 2-column layouts, balanced
- **Desktop (≥1024px):** Full editorial layouts, split sections, sticky elements

---

## Performance Constraints

- All images: `next/image` with `loading="lazy"` (default) except hero (priority)
- No external fonts beyond those already in `layout.tsx`
- Minimal `"use client"` boundary — only 4 components need it
- No new npm packages required (all deps already installed)

---

## Accessibility

- Semantic heading hierarchy: `h1` in hero, `h2` per section, `h3` for cards
- All images have descriptive `alt` text
- FAQ accordion: `aria-expanded`, `aria-controls`, `role="button"` on triggers
- Color contrast: all text on colored backgrounds meets WCAG AA
- CTA buttons: minimum 44px touch target (already enforced by `Button.tsx`)

---

## What Is NOT Built Here

- No navbar override (the global `Navbar` from `layout.tsx` remains)
- No footer override (global `Footer` remains)
- No new routes beyond `/math-bootcamp`
- No Supabase integration on this page (assessment link is external)
- No new npm packages

---

## Open Questions (None — all resolved by brief)

All design decisions are specified in the user brief. No ambiguity requiring clarification.
