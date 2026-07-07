import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeUp, FadeIn } from "@/components/shared/Animations";

export const metadata = { title: "About Us | Mindverse Tutor" };

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      
      {/* SECTION 1: HERO */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-background min-h-[70vh] flex items-center">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0 bg-dot-pattern opacity-30 mix-blend-multiply pointer-events-none"></div>
        <div className="absolute top-0 left-[10%] w-96 h-96 bg-accent-green/5 rounded-full blur-3xl pointer-events-none" />
        
        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          <FadeUp>
            <h1 className="text-fluid-h1 font-black text-text-dark mb-6 leading-[1.1] tracking-tight text-balance">
              Building More Than <br className="hidden sm:block" />
              <span className="text-accent-green relative inline-block mt-2">
                Better Grades.
                <svg className="absolute w-[105%] h-3 -bottom-1 -left-[2%] text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto text-balance">
              Mindverse is a thoughtful educational partner focused on helping children build confidence, close learning gaps, and develop a lifelong love of learning.
            </p>
          </FadeUp>
        </Container>

        {/* Mascot Integration */}
        <FadeIn delay={0.3} className="absolute bottom-0 left-[2%] md:left-[10%] w-48 md:w-72 h-48 md:h-72 z-20 pointer-events-none">
          <Image src="/characters/Yellow-Reading-Book.png" alt="Curious Learning" fill className="object-contain object-bottom" priority />
        </FadeIn>
      </section>

      {/* SECTION 2: OUR STORY (Visual Narrative) */}
      <section className="py-24 md:py-32 bg-white relative">
        <Container className="max-w-5xl">
          <FadeUp className="text-center mb-16 md:mb-24">
            <span className="inline-block text-secondary font-extrabold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">Our Story</span>
            <h2 className="text-fluid-h2 font-extrabold text-text-dark">The Mindverse Journey</h2>
          </FadeUp>

          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-px border-l-2 border-dashed border-muted/20 md:-translate-x-1/2"></div>

            <div className="space-y-16 md:space-y-24">
              
              {/* Block 1 */}
              <div className="relative flex flex-col md:flex-row items-center w-full group">
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-white border-4 border-secondary rounded-full -translate-x-[7px] md:-translate-x-1/2 z-10 group-hover:scale-150 transition-transform"></div>
                <FadeUp className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-16 md:text-right">
                  <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-3">Every child has potential.</h3>
                  <p className="text-muted leading-relaxed text-sm md:text-base">We believe that curiosity is innate. Children are born with an incredible capacity to absorb, understand, and explore the world around them.</p>
                </FadeUp>
              </div>

              {/* Block 2 */}
              <div className="relative flex flex-col md:flex-row items-center w-full group">
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-white border-4 border-accent-blue rounded-full -translate-x-[7px] md:-translate-x-1/2 z-10 group-hover:scale-150 transition-transform"></div>
                <FadeUp className="w-full md:w-1/2 pl-16 md:pl-16 md:ml-auto md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-3">Learning gaps go unnoticed.</h3>
                  <p className="text-muted leading-relaxed text-sm md:text-base">In crowded classrooms with rigid curriculums, pacing is fixed. When a child misses a core concept, the gap is often overlooked, creating a shaky foundation.</p>
                </FadeUp>
              </div>

              {/* Block 3 */}
              <div className="relative flex flex-col md:flex-row items-center w-full group">
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-white border-4 border-accent-red rounded-full -translate-x-[7px] md:-translate-x-1/2 z-10 group-hover:scale-150 transition-transform"></div>
                <FadeUp className="w-full md:w-1/2 pl-16 md:pl-0 md:pr-16 md:text-right">
                  <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-3">Confidence begins to fade.</h3>
                  <p className="text-muted leading-relaxed text-sm md:text-base">Academic frustration grows. Learning transitions from a joyful adventure into a stressful chore, and students start believing they "just aren't good at it."</p>
                </FadeUp>
              </div>

              {/* Block 4 */}
              <div className="relative flex flex-col md:flex-row items-center w-full group">
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-white border-4 border-accent-green rounded-full -translate-x-[7px] md:-translate-x-1/2 z-10 group-hover:scale-150 transition-transform"></div>
                <FadeUp className="w-full md:w-1/2 pl-16 md:pl-16 md:ml-auto md:text-left">
                  <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-3">Mindverse was created to change that.</h3>
                  <p className="text-muted leading-relaxed text-sm md:text-base">We set out to create an environment where teaching adapts to the student. By identifying gaps and replacing anxiety with excitement, we rebuild their confidence from the ground up.</p>
                </FadeUp>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: MEET THE EDUCATOR */}
      <section className="py-24 md:py-32 bg-background-alt border-y border-muted/5">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            
            {/* Photograph Placeholder */}
            <FadeIn className="w-full lg:w-5/12">
              <div className="w-full aspect-[4/5] bg-white rounded-[3rem] border border-muted/10 shadow-sm relative overflow-hidden flex flex-col items-center justify-center group p-8">
                 <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
                 {/* <div className="w-24 h-24 rounded-full bg-secondary/10 flex items-center justify-center mb-6 border border-secondary/20">
                   <span className="text-4xl">📸</span>
                 </div>
                 <span className="text-text-dark font-bold text-center">Educator Photograph<br/>Placeholder</span>
                 <p className="text-xs text-muted mt-4 text-center max-w-xs">A professional, warm, and welcoming portrait of the founder/tutor.</p> */}
              </div>
            </FadeIn>

            {/* Details */}
            <div className="w-full lg:w-7/12">
              <FadeUp>
                <h2 className="text-fluid-h2 font-extrabold text-text-dark mb-6">Meet Your Educator</h2>
                <p className="text-lg text-muted mb-8 leading-relaxed">
                  With a deep passion for education and years of experience guiding students across the globe, our founder established Mindverse Tutor to provide the personalized attention that traditional schooling often misses.
                </p>
              </FadeUp>

              <FadeUp delay={0.1} className="space-y-6">
                
                <div>
                  <h4 className="text-sm font-bold text-text-dark uppercase tracking-wider mb-3 opacity-70">Core Subjects</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-accent-blue/10 text-accent-blue font-bold text-xs rounded-full border border-accent-blue/20">Mathematics</span>
                    <span className="px-4 py-2 bg-accent-green/10 text-accent-green font-bold text-xs rounded-full border border-accent-green/20">Science</span>
                    <span className="px-4 py-2 bg-accent-red/10 text-accent-red font-bold text-xs rounded-full border border-accent-red/20">English</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-text-dark uppercase tracking-wider mb-3 opacity-70">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-4 py-2 bg-white text-text-dark font-bold text-xs rounded-full border border-muted/10 shadow-sm">Grades 1–10</span>
                    <span className="px-4 py-2 bg-white text-text-dark font-bold text-xs rounded-full border border-muted/10 shadow-sm">Concept-Based Learning</span>
                    <span className="px-4 py-2 bg-white text-text-dark font-bold text-xs rounded-full border border-muted/10 shadow-sm">1-on-1 Mentorship</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-text-dark uppercase tracking-wider mb-3 opacity-70">Global Reach</h4>
                  <p className="text-sm font-medium text-muted">Proudly teaching students from the USA, Canada, Australia, Singapore, India, and the UAE.</p>
                </div>

              </FadeUp>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4: TEACHING PHILOSOPHY (Horizontal Process) */}
      <section className="py-24 md:py-32 bg-white overflow-hidden relative">
        <Container>
          <FadeUp className="text-center mb-16 md:mb-24 relative z-10 flex flex-col items-center">
            {/* New Character Integration - Centered above text to prevent overlap */}
            <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 z-10 pointer-events-none animate-[float_6s_ease-in-out_infinite]">
               <Image src="/characters/Blue-Searching-Book.png" alt="Observe and Understand" fill className="object-contain" />
            </div>
            
            <h2 className="text-fluid-h2 font-extrabold text-text-dark">Our Teaching Philosophy</h2>
            <p className="text-lg text-muted mt-4">A proven framework to transform frustration into mastery.</p>
          </FadeUp>

          <div className="relative">
            {/* Desktop Horizontal Connecting Line */}
            <div className="hidden lg:block absolute top-[44px] left-[10%] w-[80%] border-t-2 border-dashed border-muted/20 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              
              {[
                { step: "01", title: "Observe", desc: "Identifying how the student naturally learns.", color: "text-accent-blue" },
                { step: "02", title: "Understand", desc: "Pinpointing exact gaps in their foundation.", color: "text-secondary" },
                { step: "03", title: "Personalize", desc: "Crafting a bespoke, engaging learning plan.", color: "text-accent-green" },
                { step: "04", title: "Practice", desc: "Interactive, concept-based exercises.", color: "text-accent-red" },
                { step: "05", title: "Grow", desc: "Building unshakeable academic confidence.", color: "text-primary" },
              ].map((item, i) => (
                <FadeUp key={i} delay={i * 0.1} className="flex flex-col items-center text-center group">
                  <div className="w-[88px] h-[88px] rounded-full bg-white border-2 border-dashed border-muted/20 flex items-center justify-center mb-6 group-hover:border-secondary transition-colors duration-500 shadow-sm relative">
                    <div className="absolute inset-2 rounded-full bg-background-alt flex items-center justify-center">
                      <span className={`font-black text-xl ${item.color}`}>{item.step}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-extrabold text-text-dark mb-2">{item.title}</h3>
                  <p className="text-xs md:text-sm text-muted leading-relaxed px-2">{item.desc}</p>
                </FadeUp>
              ))}

            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 5: MISSION & VISION */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            <FadeUp>
              <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border-2 border-dashed border-muted/10 h-full flex flex-col justify-center relative overflow-hidden group hover:border-secondary/30 transition-colors">
                <div className="w-12 h-2 bg-secondary rounded-full mb-6" />
                <h3 className="text-2xl md:text-3xl font-extrabold text-text-dark mb-4">Our Mission</h3>
                <p className="text-muted text-base md:text-lg leading-relaxed">
                  To provide accessible, premium, and highly personalized online education that meets students exactly where they are, helping them bridge academic gaps and unlock their true potential.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 border-2 border-dashed border-muted/10 h-full flex flex-col justify-center relative overflow-hidden group hover:border-accent-blue/30 transition-colors">
                <div className="w-12 h-2 bg-accent-blue rounded-full mb-6" />
                <h3 className="text-2xl md:text-3xl font-extrabold text-text-dark mb-4">Our Vision</h3>
                <p className="text-muted text-base md:text-lg leading-relaxed">
                  A world where no child feels left behind in the classroom. We envision an educational landscape driven by confidence, joyful curiosity, and lifelong learning.
                </p>
              </div>
            </FadeUp>

          </div>
        </Container>
      </section>

      {/* SECTION 6: WHY PARENTS TRUST MINDVERSE (Editorial Highlights) */}
      <section className="py-24 md:py-32 bg-white">
        <Container>
          <FadeUp className="mb-16 md:mb-20 text-center md:text-left">
            <h2 className="text-fluid-h2 font-extrabold text-text-dark">The Mindverse Standard</h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 md:gap-x-12">
            
            {[
              { title: "Personalized Learning", desc: "Tailored lesson plans that adapt organically to your child's unique pace and learning style." },
              { title: "Concept-Based Teaching", desc: "Moving away from rote memorization to focus on deep, foundational understanding." },
              { title: "Small Cohort Classes", desc: "Interactive group sessions strictly capped at 4 students to ensure individualized attention." },
              { title: "One-on-One Tutoring", desc: "Dedicated, undivided mentorship for students who thrive with direct, private guidance." },
              { title: "Regular Parent Updates", desc: "Complete transparency with consistent progress reports and open communication channels." },
              { title: "International Standard", desc: "Premium online learning connecting students from North America, Asia, and the Middle East." }
            ].map((feature, i) => (
              <FadeUp key={i} delay={i * 0.1} className="relative pl-6 md:pl-8 border-l-2 border-muted/10 hover:border-secondary transition-colors duration-300">
                <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-muted/20"></div>
                <h3 className="text-lg md:text-xl font-bold text-text-dark mb-3">{feature.title}</h3>
                <p className="text-muted text-sm md:text-base leading-relaxed">{feature.desc}</p>
              </FadeUp>
            ))}

          </div>
        </Container>
      </section>

      {/* SECTION 7: CALL TO ACTION */}
      <section className="py-12 md:py-16 bg-background-alt relative overflow-hidden border-t border-muted/5 text-center">
        
        {/* Full Scene Mascot Integration */}
        {/* <div className="absolute bottom-0 right-[2%] md:right-[5%] lg:right-[15%] w-48 md:w-64 lg:w-80 h-48 md:h-64 lg:h-80 z-0 pointer-events-none hidden md:block opacity-90 hover:scale-105 transition-transform duration-700 origin-bottom animate-[float_8s_ease-in-out_infinite_reverse]">
          <Image src="/characters/Characters-viewing-laptop.png" alt="Students Learning Online" fill className="object-contain object-bottom" />
        </div> */}

        <Container className="relative z-10 max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-black text-text-dark mb-6 tracking-tight">
              Ready to start the journey?
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-lg md:text-xl text-muted mb-12 leading-relaxed">
              Whether your child needs to catch up or wants to jump ahead, we are here to help them thrive.
            </p>
          </FadeUp>
          <FadeUp delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/book-call" size="lg" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 shadow-lg border-2 border-primary transition-transform text-base md:text-lg">Book a Discovery Call</Button>
            <Button href="https://assessment.mindversetutor.com" target="_blank" rel="noopener noreferrer" size="lg" variant="outline" className="w-full sm:w-auto bg-white border-2 border-muted/20 text-text-dark hover:border-text-dark hover:bg-text-dark/5 shadow-sm transition-transform text-base md:text-lg">
              Take a Free Assessment
            </Button>
          </FadeUp>
        </Container>
      </section>

    </div>
  );
}
