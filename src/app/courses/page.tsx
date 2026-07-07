import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeUp, FadeIn } from "@/components/shared/Animations";

export const metadata = { title: "Courses | Mindverse Tutor" };

export default function CoursesPage() {
  return (
    <div className="overflow-hidden bg-background">
      
      {/* SECTION 1: HERO */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 min-h-[80vh] flex flex-col justify-center items-center overflow-hidden">
        {/* Notebook Paper Grid Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] mix-blend-multiply"></div>
        
        {/* Soft Background Globs */}
        <div className="absolute top-[5%] left-[5%] w-64 h-64 bg-accent-blue/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[5%] right-[5%] w-80 h-80 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">          
          <FadeUp delay={0.1}>
            <h1 className="text-fluid-h1 font-black text-text-dark mb-6 leading-[1.1] tracking-tight text-balance">
              Learning Pathways That Grow <br className="hidden sm:block" />
              <span className="text-accent-green relative inline-block mt-2">
                With Every Child.
                <svg className="absolute w-[105%] h-3 -bottom-1 left-[-2%] text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto text-balance mb-12">
              Every child learns differently. Our structured learning pathways help students build strong foundations, develop unshakeable confidence, and progress step by step through carefully designed programs.
            </p>
          </FadeUp>
        </Container>
      </section>

      {/* SECTION 2: CHOOSE YOUR LEARNING PATH */}
      <section className="py-24 md:py-32 bg-white relative border-y border-muted/5 overflow-hidden">
        <Container>
          <FadeUp className="text-center mb-16 md:mb-20">
            <h2 className="text-fluid-h2 font-black text-text-dark">Choose Your Learning Path</h2>
          </FadeUp>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
            
            {/* Math Panel */}
            <FadeUp delay={0.1} className="w-full lg:w-1/2">
              <div className="bg-accent-blue/5 rounded-[3rem] p-8 md:p-12 border border-accent-blue/10 shadow-sm relative overflow-hidden group h-full flex flex-col">
                <div className="w-12 h-3 bg-accent-blue rounded-full mb-8" />
                <h3 className="text-3xl md:text-4xl font-extrabold text-text-dark mb-4">Mathematics</h3>
                <p className="text-muted text-lg mb-8 leading-relaxed">
                  From foundational number sense to advanced algebra, designed to replace math anxiety with logical confidence.
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  <span className="px-4 py-2 bg-white border border-muted/10 rounded-xl text-sm font-bold shadow-sm">Grades 1–8</span>
                  <span className="px-4 py-2 bg-white border border-muted/10 rounded-xl text-sm font-bold shadow-sm">6 Month Programs</span>
                </div>
                
                <div className="mt-auto relative w-full h-56 flex items-end justify-center">
                  <Image src="/characters/yellow-blue-puzzle.png" alt="Math" fill className="object-contain object-bottom group-hover:scale-105 transition-transform duration-700 origin-bottom" />
                </div>
              </div>
            </FadeUp>

            {/* Reading Panel */}
            <FadeUp delay={0.2} className="w-full lg:w-1/2">
              <div className="bg-accent-green/5 rounded-[3rem] p-8 md:p-12 border border-accent-green/10 shadow-sm relative overflow-hidden group h-full flex flex-col">
                <div className="w-12 h-3 bg-accent-green rounded-full mb-8" />
                <h3 className="text-3xl md:text-4xl font-extrabold text-text-dark mb-4">Reading Studio</h3>
                <p className="text-muted text-lg mb-8 leading-relaxed">
                  A structured phonics and literacy journey taking students from letter sounds to confident independent reading.
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  <span className="px-4 py-2 bg-white border border-muted/10 rounded-xl text-sm font-bold shadow-sm">Early Literacy</span>
                  <span className="px-4 py-2 bg-white border border-muted/10 rounded-xl text-sm font-bold shadow-sm">Level Progression</span>
                </div>
                
                <div className="mt-auto relative w-full h-56 flex items-end justify-center">
                  <Image src="/characters/Yellow-Reading-Book.png" alt="Reading" fill className="object-contain object-bottom group-hover:scale-105 transition-transform duration-700 origin-bottom" />
                </div>
              </div>
            </FadeUp>

          </div>
        </Container>
      </section>

      {/* SECTION 3: MATHEMATICS LEARNING PATHWAY (Hero of the page) */}
      <section className="py-24 md:py-32 bg-background-alt relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

        <Container>
          <FadeUp className="text-center mb-20 md:mb-32">
            <span className="inline-block px-5 py-2 rounded-full bg-accent-blue/10 text-accent-blue font-extrabold text-xs uppercase tracking-widest mb-6">
              The Journey
            </span>
            <h2 className="text-fluid-h2 font-black text-text-dark">Mathematics Learning Pathway</h2>
          </FadeUp>

          {/* Vertical Roadmap Container */}
          <div className="max-w-6xl mx-auto relative">
            
            {/* The Central Animated Dotted Path */}
            <div className="absolute left-[32px] md:left-1/2 top-10 bottom-10 w-0 md:w-px border-l-4 border-dashed border-accent-blue/30 md:-translate-x-1/2 z-0"></div>

            <div className="space-y-20 md:space-y-32 relative z-10">
              
              {/* Pathway 1 */}
              <div className="flex flex-col md:flex-row items-center w-full gap-8 md:gap-0">
                <FadeUp className="w-full md:w-1/2 flex md:justify-end md:pr-16 relative pl-20 md:pl-0">
                  <div className="md:hidden absolute left-[32px] top-10 w-6 h-6 rounded-full bg-white border-4 border-accent-blue -translate-x-1/2 z-20"></div>
                  <div className="hidden md:flex absolute right-0 top-1/2 w-8 h-8 rounded-full bg-white border-4 border-accent-blue translate-x-1/2 -translate-y-1/2 z-20 shadow-sm"></div>
                  
                  <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-card border border-muted/5 w-full relative overflow-hidden group">
                     <div className="absolute top-0 left-0 w-full h-2 bg-accent-blue"></div>
                     <h3 className="text-2xl md:text-3xl font-extrabold text-text-dark mb-2 mt-2">Mindverse Math Pathway</h3>
                     <p className="text-accent-blue font-bold mb-6">Grades 1–3</p>
                     
                     <div className="flex gap-4 mb-8">
                       <div className="bg-background-alt px-4 py-2 rounded-xl text-sm font-bold text-text-dark border border-muted/10">48 Live Sessions</div>
                       <div className="bg-background-alt px-4 py-2 rounded-xl text-sm font-bold text-text-dark border border-muted/10">6 Months</div>
                     </div>

                     <div className="space-y-4">
                       <h4 className="text-xs font-extrabold text-muted uppercase tracking-widest">Focus Areas</h4>
                       <ul className="grid grid-cols-2 gap-3">
                         {['Number Sense', 'Place Value', 'Basic Operations', 'Measurement', 'Problem Solving'].map((item, i) => (
                           <li key={i} className="flex items-center gap-2 text-sm font-medium text-text-dark">
                             <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" /> {item}
                           </li>
                         ))}
                       </ul>
                     </div>
                  </div>
                </FadeUp>
                <div className="hidden md:flex w-1/2 justify-start pl-16">
                   <div className="relative w-72 h-72 animate-[float_6s_ease-in-out_infinite]">
                     <Image src="/characters/blue-found-chest.png" alt="Math Blocks" fill className="object-contain" />
                   </div>
                </div>
              </div>

              {/* Pathway 2 */}
              <div className="flex flex-col md:flex-row-reverse items-center w-full gap-8 md:gap-0">
                <FadeUp className="w-full md:w-1/2 flex md:justify-start md:pl-16 relative pl-20 md:pl-0">
                  <div className="md:hidden absolute left-[32px] top-10 w-6 h-6 rounded-full bg-white border-4 border-secondary -translate-x-1/2 z-20"></div>
                  <div className="hidden md:flex absolute left-0 top-1/2 w-8 h-8 rounded-full bg-white border-4 border-secondary -translate-x-1/2 -translate-y-1/2 z-20 shadow-sm"></div>
                  
                  <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-card border border-muted/5 w-full relative overflow-hidden group">
                     <div className="absolute top-0 left-0 w-full h-2 bg-secondary"></div>
                     <h3 className="text-2xl md:text-3xl font-extrabold text-text-dark mb-2 mt-2">Mindverse Math Mastery</h3>
                     <p className="text-yellow-600 font-bold mb-6">Grades 4–5</p>
                     
                     <div className="flex gap-4 mb-8">
                       <div className="bg-background-alt px-4 py-2 rounded-xl text-sm font-bold text-text-dark border border-muted/10">48 Live Sessions</div>
                       <div className="bg-background-alt px-4 py-2 rounded-xl text-sm font-bold text-text-dark border border-muted/10">6 Months</div>
                     </div>

                     <div className="space-y-4">
                       <h4 className="text-xs font-extrabold text-muted uppercase tracking-widest">Focus Areas</h4>
                       <ul className="grid grid-cols-2 gap-3">
                         {['Fractions', 'Decimals', 'Geometry', 'Measurement', 'Reasoning'].map((item, i) => (
                           <li key={i} className="flex items-center gap-2 text-sm font-medium text-text-dark">
                             <div className="w-1.5 h-1.5 rounded-full bg-secondary" /> {item}
                           </li>
                         ))}
                       </ul>
                     </div>
                  </div>
                </FadeUp>
                <div className="hidden md:flex w-1/2 justify-end pr-16">
                   <div className="relative w-80 h-80 animate-[float_7s_ease-in-out_infinite_reverse]">
                     <Image src="/characters/Yelllow-Teaching.png" alt="Teaching Math" fill className="object-contain" />
                   </div>
                </div>
              </div>

              {/* Pathway 3 */}
              <div className="flex flex-col md:flex-row items-center w-full gap-8 md:gap-0">
                <FadeUp className="w-full md:w-1/2 flex md:justify-end md:pr-16 relative pl-20 md:pl-0">
                  <div className="md:hidden absolute left-[32px] top-10 w-6 h-6 rounded-full bg-white border-4 border-accent-red -translate-x-1/2 z-20"></div>
                  <div className="hidden md:flex absolute right-0 top-1/2 w-8 h-8 rounded-full bg-white border-4 border-accent-red translate-x-1/2 -translate-y-1/2 z-20 shadow-sm"></div>
                  
                  <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-card border border-muted/5 w-full relative overflow-hidden group">
                     <div className="absolute top-0 left-0 w-full h-2 bg-accent-red"></div>
                     <h3 className="text-2xl md:text-3xl font-extrabold text-text-dark mb-2 mt-2">Mindverse Math Accelerator</h3>
                     <p className="text-accent-red font-bold mb-6">Grades 6–8</p>
                     
                     <div className="flex gap-4 mb-8">
                       <div className="bg-background-alt px-4 py-2 rounded-xl text-sm font-bold text-text-dark border border-muted/10">48 Live Sessions</div>
                       <div className="bg-background-alt px-4 py-2 rounded-xl text-sm font-bold text-text-dark border border-muted/10">6 Months</div>
                     </div>

                     <div className="space-y-4">
                       <h4 className="text-xs font-extrabold text-muted uppercase tracking-widest">Focus Areas</h4>
                       <ul className="grid grid-cols-2 gap-3">
                         {['Algebra', 'Geometry', 'Statistics', 'Data Analysis', 'Critical Thinking'].map((item, i) => (
                           <li key={i} className="flex items-center gap-2 text-sm font-medium text-text-dark">
                             <div className="w-1.5 h-1.5 rounded-full bg-accent-red" /> {item}
                           </li>
                         ))}
                       </ul>
                     </div>
                  </div>
                </FadeUp>
                <div className="hidden md:flex w-1/2 justify-start pl-16">
                   <div className="relative w-72 h-72 animate-[float_6s_ease-in-out_infinite]">
                     <Image src="/characters/red-attending-onlinecass.png" alt="Advanced Math" fill className="object-contain" />
                   </div>
                </div>
              </div>

            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 4: READING LEARNING PATHWAY (Ascending Staircase) */}
      <section className="py-24 md:py-32 bg-white relative border-y border-muted/5 overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-end relative">

            <div className="w-full lg:w-1/3 mb-10 lg:mb-0 lg:pb-12 text-center lg:text-left z-10">
              <FadeUp>
                <h2 className="text-3xl md:text-5xl font-black text-text-dark mb-4">Mindverse<br/>Reading Studio</h2>
                <p className="text-lg text-muted max-w-sm mx-auto lg:mx-0">
                  A structured phonics and early literacy journey built block by block.
                </p>
              </FadeUp>
            </div>

            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
              
              {/* Level 1 */}
              <FadeUp delay={0.1} className="md:mt-32">
                <div className="bg-background-alt border border-muted/10 rounded-4xl p-8 shadow-sm h-full flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-black text-accent-green mb-6 border border-muted/5 shadow-sm">1</div>
                  <h4 className="font-extrabold text-xl mb-2 text-text-dark">Phonics Foundations</h4>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted mb-6">16 Sessions</span>
                  <div className="space-y-3 mt-auto">
                    {['Letter Sounds', 'Blending', 'High Frequency Words'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-text-dark font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-green" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>

              {/* Level 2 */}
              <FadeUp delay={0.2} className="md:mt-16">
                <div className="bg-accent-green/5 border border-accent-green/10 rounded-4xl p-8 shadow-sm h-full flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-black text-accent-green mb-6 border border-muted/5 shadow-sm">2</div>
                  <h4 className="font-extrabold text-xl mb-2 text-text-dark">Reading Builders</h4>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted mb-6">16 Sessions</span>
                  <div className="space-y-3 mt-auto">
                    {['Digraphs', 'Long Vowels', 'Reading Fluency'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-text-dark font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-green" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>

              {/* Level 3 */}
              <FadeUp delay={0.3} className="md:mt-0">
                <div className="bg-accent-green/10 border border-accent-green/20 rounded-4xl p-8 shadow-sm h-full flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-black text-accent-green mb-6 border border-muted/5 shadow-sm">3</div>
                  <h4 className="font-extrabold text-xl mb-2 text-text-dark">Reading Fluency</h4>
                  <span className="text-xs font-bold uppercase tracking-widest text-muted mb-6">16 Sessions</span>
                  <div className="space-y-3 mt-auto">
                    {['Vocabulary', 'Comprehension', 'Independent Reading'].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-text-dark font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-green" /> {item}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>

            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 6: WHAT EVERY COURSE INCLUDES (Alternating Blocks) */}
      <section className="py-24 md:py-32 bg-white relative border-y border-muted/5">
        <Container>
          <FadeUp className="text-center mb-16 md:mb-24">
            <h2 className="text-fluid-h2 font-black text-text-dark">What Every Course Includes</h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {[
              { title: "Live Online Sessions", desc: "Interactive, face-to-face instruction with dedicated expert educators.", color: "bg-accent-blue/10 text-accent-blue" },
              { title: "Structured Curriculum", desc: "Carefully designed lesson plans that ensure steady, measurable progress.", color: "bg-secondary/15 text-yellow-600" },
              { title: "Progress Tracking", desc: "Clear milestones so parents and students can celebrate every achievement.", color: "bg-accent-green/10 text-accent-green" },
              { title: "Concept-Based Learning", desc: "Focusing heavily on 'why' instead of just memorizing 'how'.", color: "bg-accent-red/10 text-accent-red" },
              { title: "Interactive Activities", desc: "Gamified learning moments that keep students deeply engaged.", color: "bg-primary/10 text-primary" },
              { title: "Regular Feedback", desc: "Consistent communication to ensure alignment with parents.", color: "bg-accent-blue/10 text-accent-blue" }
            ].map((block, i) => (
              <div key={i} className="group h-full">
                <FadeUp delay={Math.floor(i / 2) * 0.15} className="bg-background-alt p-8 md:p-10 rounded-[2.5rem] border border-muted/5 flex items-start gap-6 hover:bg-white hover:shadow-card hover:-translate-y-1.5 transition-all duration-300 h-full">
                   <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0 ${block.color} group-hover:scale-110 transition-transform duration-300`}>
                     0{i + 1}
                   </div>
                   <div>
                     <h3 className="text-xl font-extrabold text-text-dark mb-2">{block.title}</h3>
                     <p className="text-muted text-sm md:text-base leading-relaxed">{block.desc}</p>
                   </div>
                </FadeUp>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 7: WHO IS EACH PATHWAY FOR? (Comparison Tickets) */}
      <section className="py-24 md:py-32 bg-background-alt relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-30 mix-blend-multiply pointer-events-none"></div>
        <Container className="relative z-10">
          <FadeUp className="text-center mb-16 md:mb-24">
            <h2 className="text-fluid-h2 font-black text-text-dark">Who Is Each Pathway For?</h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Ticket 1 */}
            <FadeUp delay={0.1}>
              <div className="bg-white rounded-[2rem] border-2 border-dashed border-accent-blue/30 p-8 shadow-sm h-full flex flex-col hover:-translate-y-2 transition-transform duration-500">
                <div className="bg-accent-blue/10 text-accent-blue font-extrabold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-block w-fit mb-6">Grades 1–3</div>
                <h3 className="text-2xl font-black text-text-dark mb-6">Early Explorers</h3>
                <ul className="space-y-4 mb-8">
                  {['Visual Learning', 'Educational Games', 'Strong Number Foundations'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-muted text-sm"><div className="w-2 h-2 rounded-full bg-accent-blue"/> {item}</li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            {/* Ticket 2 */}
            <FadeUp delay={0.2}>
              <div className="bg-white rounded-[2rem] border-2 border-dashed border-secondary/50 p-8 shadow-sm h-full flex flex-col hover:-translate-y-2 transition-transform duration-500">
                <div className="bg-secondary/20 text-yellow-700 font-extrabold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-block w-fit mb-6">Grades 4–5</div>
                <h3 className="text-2xl font-black text-text-dark mb-6">Foundational Builders</h3>
                <ul className="space-y-4 mb-8">
                  {['Logical Reasoning', 'Complex Problem Solving', 'Mathematical Confidence'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-muted text-sm"><div className="w-2 h-2 rounded-full bg-secondary"/> {item}</li>
                  ))}
                </ul>
              </div>
            </FadeUp>

            {/* Ticket 3 */}
            <FadeUp delay={0.3}>
              <div className="bg-white rounded-[2rem] border-2 border-dashed border-accent-red/30 p-8 shadow-sm h-full flex flex-col hover:-translate-y-2 transition-transform duration-500">
                <div className="bg-accent-red/10 text-accent-red font-extrabold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full inline-block w-fit mb-6">Grades 6–8</div>
                <h3 className="text-2xl font-black text-text-dark mb-6">Advanced Thinkers</h3>
                <ul className="space-y-4 mb-8">
                  {['Pre-Algebra & Algebra', 'Critical Thinking', 'Advanced Conceptual Math'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-bold text-muted text-sm"><div className="w-2 h-2 rounded-full bg-accent-red"/> {item}</li>
                  ))}
                </ul>
              </div>
            </FadeUp>

          </div>
        </Container>
      </section>

      {/* SECTION 8: READY TO FIND THE RIGHT PATHWAY? (CTA) */}
      <section className="py-32 md:py-40 bg-white border-t border-muted/5 relative overflow-hidden text-center">
      
        <Container className="relative z-10 max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="text-3xl md:text-5xl font-black text-text-dark mb-6 tracking-tight leading-tight">
              Not Sure Which Learning Path Fits Your Child?
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-lg md:text-xl text-muted mb-12 leading-relaxed">
              Take our free assessment and we'll help identify the best starting point based on your child's current understanding and unique learning needs.
            </p>
          </FadeUp>
          <FadeUp delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/book-call" size="md" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 shadow-lg border-2 border-primary hover:scale-105 transition-transform text-lg">Book a Discovery Call</Button>
            <Button href="https://assessment.mindversetutor.com" target="_blank" rel="noopener noreferrer" size="md" variant="outline" className="w-full sm:w-auto bg-white border-2 border-muted/20 text-text-dark hover:border-text-dark hover:bg-text-dark/5 shadow-sm hover:scale-105 transition-transform text-lg">
              Take a Free Assessment
            </Button>
          </FadeUp>
        </Container>
      </section>

    </div>
  );
}
