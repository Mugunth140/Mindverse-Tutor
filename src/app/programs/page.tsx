import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeUp, FadeIn } from "@/components/shared/Animations";

export const metadata = { title: "Programs | Mindverse Tutor" };

export default function ProgramsPage() {
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
          <FadeUp>
            <div className="inline-block px-5 py-2 rounded-full bg-white shadow-sm border border-muted/5 text-text-dark font-extrabold text-xs md:text-sm uppercase tracking-widest mb-8">
              <span className="text-secondary text-base mr-2">✦</span>
              Structured Learning Paths
            </div>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <h1 className="text-fluid-h1 font-black text-text-dark mb-6 leading-[1.1] tracking-tight text-balance">
              Learning Pathways That Grow <br className="hidden sm:block" />
              <span className="text-accent-green relative inline-block mt-2">
                With Every Child.
                <svg className="absolute w-[105%] h-3 -bottom-1 -left-[2%] text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
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

        {/* Hero Interactive Scene */}
        <FadeIn delay={0.3} className="relative w-full max-w-5xl mx-auto h-[350px] md:h-[450px] lg:h-[550px] z-20">
          <div className="absolute inset-0 m-auto w-[85%] md:w-[70%] h-fit drop-shadow-xl z-10">
            <Image src="/characters/Board.png" alt="Learning Board" width={800} height={500} className="object-contain w-full h-auto" priority />
          </div>
          <div className="absolute top-[10%] md:top-[15%] left-[0%] md:left-[10%] w-[35%] md:w-[28%] z-20 animate-[float_7s_ease-in-out_infinite]">
            <Image src="/characters/Blue-Writing.png" alt="Student" width={300} height={300} className="object-contain w-full h-auto" />
          </div>
          <div className="absolute bottom-[0%] md:bottom-[5%] right-[0%] md:right-[10%] w-[40%] md:w-[35%] z-20 animate-[float_6s_ease-in-out_infinite_reverse]">
            <Image src="/characters/Yelllow-Teaching.png" alt="Teacher" width={300} height={300} className="object-contain w-full h-auto" />
          </div>
          <div className="absolute top-[20%] right-[5%] md:right-[20%] w-[25%] md:w-[20%] z-0 animate-[float_8s_ease-in-out_infinite] opacity-90">
            <Image src="/characters/Yellow-Reading-Book.png" alt="Books" width={200} height={200} className="object-contain w-full h-auto" />
          </div>
        </FadeIn>
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

      {/* SECTION 3: PROGRAMS (Main Section) */}
      <section className="py-24 md:py-32 bg-background-alt overflow-hidden">
        <Container className="space-y-32 md:space-y-48">
          
          {/* Program 1: Personalized One-on-One */}
          <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 lg:gap-16 bg-secondary/5 rounded-[3rem] md:rounded-[4rem] p-8 md:p-12 lg:p-16 border border-secondary/20 shadow-sm overflow-hidden group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/60 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/10 rounded-full blur-[60px] pointer-events-none" />
            
            <div className="w-full md:w-1/2 relative h-[350px] md:h-[450px] lg:h-[550px] flex justify-center items-center z-10 order-2 md:order-1">
               <Image src="/characters/yellow-blue-hifi.png" alt="1-on-1 Tutoring" fill className="object-contain drop-shadow-2xl group-hover:scale-105 group-hover:-translate-y-2 transition-all duration-700 origin-bottom" priority />
            </div>
            
            <div className="w-full md:w-1/2 relative z-10 order-1 md:order-2">
              <FadeUp>
                <div className="inline-block px-4 py-1.5 rounded-full bg-white text-yellow-700 font-extrabold text-[10px] md:text-xs uppercase tracking-widest mb-6 shadow-sm border border-secondary/20">
                  Learning Designed Around Your Child
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-dark mb-6 leading-[1.15]">
                  Personalized <br className="hidden lg:block"/>One-on-One Tutoring
                </h2>
                <p className="text-muted text-base md:text-lg mb-8 leading-relaxed max-w-md">
                  Tailored to your child's exact learning pace and style. We focus on building deep conceptual understanding and unshakeable academic confidence.
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  <span className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-secondary/30 text-yellow-700 rounded-xl font-extrabold text-xs shadow-sm">Grades K–10</span>
                  <span className="px-4 py-2 bg-white/80 backdrop-blur-sm border border-secondary/30 text-yellow-700 rounded-xl font-extrabold text-xs shadow-sm">Math, Science & English</span>
                </div>
                <div className="space-y-5">
                  {[
                    { title: 'Personalized Learning Plans', desc: 'Curriculum adapted specifically to their pace.' },
                    { title: 'Flexible Scheduling', desc: 'Book sessions at times that work for your family.' },
                    { title: 'Individual Progress Tracking', desc: 'Detailed updates so you see every milestone.' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-yellow-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-text-dark text-sm md:text-base">{item.title}</h4>
                        <p className="text-xs md:text-sm text-muted font-medium mt-1">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>

          {/* Program 2: After-School Support */}
          <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row bg-white rounded-[2.5rem] md:rounded-[4rem] shadow-card border border-muted/5 overflow-hidden mt-32 group">
            <div className="w-full md:w-3/5 p-8 md:p-14 lg:p-20 relative z-20">
              <FadeUp>
                <div className="inline-block px-5 py-2 rounded-2xl bg-accent-blue/10 text-accent-blue font-extrabold text-[10px] md:text-xs uppercase tracking-widest mb-6">
                  Daily Learning. Daily Confidence.
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-dark mb-6 leading-[1.15]">
                  After-School <br className="hidden lg:block"/>Support Programme
                </h2>
                <p className="text-muted text-base md:text-lg mb-10 leading-relaxed max-w-md font-medium">
                  A structured daily environment where students tackle homework with confidence, build essential study habits, and prepare for exams without the stress.
                </p>
                <div className="flex flex-col gap-8 relative mt-4">
                  <div className="absolute left-[11px] top-6 bottom-6 w-px border-l-2 border-dashed border-accent-blue/20" />
                  <div className="flex gap-6 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-accent-blue flex items-center justify-center shrink-0 shadow-md border-4 border-white mt-1"></div>
                    <div>
                      <h4 className="font-black text-text-dark text-xl mb-1.5">Homework & Revision</h4>
                      <p className="text-muted font-medium text-sm leading-relaxed max-w-sm">
                        Daily guidance to ensure assignments are completed accurately while reinforcing core concepts.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center shrink-0 shadow-md border-4 border-white mt-1"></div>
                    <div>
                      <h4 className="font-black text-text-dark text-xl mb-1.5">Study Skills & Exams</h4>
                      <p className="text-muted font-medium text-sm leading-relaxed max-w-sm">
                        Developing long-term organizational habits and targeted preparation for upcoming tests.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
            <div className="w-full md:w-2/5 relative min-h-[400px] md:min-h-full bg-accent-blue/5 flex justify-center items-end border-l border-muted/5 z-10 overflow-visible">
               <div className="absolute inset-0 opacity-[0.15] bg-[radial-gradient(#60A5FA_2px,transparent_2px)] [background-size:24px_24px] pointer-events-none mix-blend-multiply"></div>
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-[60px] group-hover:scale-125 transition-transform duration-700 pointer-events-none"></div>
               <div className="absolute top-[15%] left-[-10%] md:left-[-20%] bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-float font-black text-accent-blue text-sm rotate-[-6deg] animate-[wiggle_6s_ease-in-out_infinite] z-30 border border-muted/5 flex items-center gap-2">
                 <span className="text-lg">🧑‍🏫</span> 1-on-1 Available
               </div>
               <div className="absolute top-[45%] right-[5%] bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-2xl shadow-float font-black text-yellow-600 text-sm rotate-[5deg] animate-[wiggle_7s_ease-in-out_infinite_reverse] z-30 border border-muted/5 flex items-center gap-2">
                 <span className="text-lg">🤝</span> Small Cohorts
               </div>
               <div className="absolute inset-10 z-20 transition-transform duration-700 group-hover:scale-105 group-hover:-translate-y-2 origin-bottom">
                 <Image src="/characters/blue-shows-paper-with-star.png" alt="Blue Student Homework Success" fill className="object-contain object-bottom drop-shadow-2xl" priority />
               </div>
            </div>
          </div>

          {/* Program 3: Middle School Math Readiness */}
          <div className="w-full max-w-6xl mx-auto bg-accent-red/5 rounded-[2rem] md:rounded-[4rem] pt-12 md:pt-20 px-6 md:px-12 border border-accent-red/10 shadow-sm relative overflow-hidden flex flex-col items-center group">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-red/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
            
            <FadeUp className="text-center relative z-20 max-w-3xl mx-auto mb-12">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white shadow-sm text-accent-red font-extrabold text-xs uppercase tracking-widest mb-6">
                Preparing Students for the Next Step
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-dark leading-[1.15]">
                Middle School Math <br className="hidden md:block"/>Readiness Bootcamp
              </h2>
            </FadeUp>

            <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex justify-center mt-auto z-20">
               <Image src="/characters/yellow-blue-puzzle.png" alt="Math Puzzle Foundation" fill className="object-contain object-bottom z-10 group-hover:scale-105 transition-transform duration-700 origin-bottom drop-shadow-2xl" />
               
               <div className="hidden md:flex absolute top-[10%] left-[5%] bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-float z-20 items-center gap-3 animate-[float_6s_ease-in-out_infinite]">
                 <span className="text-xl">🎓</span>
                 <span className="font-bold text-text-dark text-sm">Transition to Middle School</span>
               </div>
               <div className="hidden md:flex absolute top-[25%] right-[5%] bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-float z-20 items-center gap-3 animate-[float_7s_ease-in-out_infinite_reverse]">
                 <span className="text-xl">💪</span>
                 <span className="font-bold text-text-dark text-sm">Confidence Building</span>
               </div>
               <div className="hidden lg:flex absolute bottom-[30%] left-[8%] bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-float z-20 items-center gap-3 animate-[float_8s_ease-in-out_infinite]">
                 <span className="text-xl">🧱</span>
                 <span className="font-bold text-text-dark text-sm">Strong Foundations</span>
               </div>
               <div className="hidden lg:flex absolute bottom-[15%] right-[10%] bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-float z-20 items-center gap-3 animate-[float_5s_ease-in-out_infinite_reverse]">
                 <span className="text-xl">🎲</span>
                 <span className="font-bold text-text-dark text-sm">Interactive Activities</span>
               </div>
            </div>
            
            <div className="md:hidden w-full flex flex-col gap-3 pb-8 z-20 relative">
               {['Transition to Middle School', 'Confidence Building', 'Strong Math Foundations', 'Interactive Activities'].map((item, i) => (
                 <div key={i} className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-sm border border-muted/5 font-bold text-text-dark text-sm text-center">
                   {item}
                 </div>
               ))}
            </div>
          </div>

          {/* Program 4: Multiplication Bootcamp */}
          <div className="relative w-full max-w-6xl mx-auto bg-white rounded-[3rem] md:rounded-[4rem] shadow-card border border-muted/5 overflow-hidden flex flex-col lg:flex-row items-stretch gap-0 group">
            
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 relative z-10">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-2xl bg-white shadow-sm border border-muted/10 text-accent-blue font-extrabold text-[10px] md:text-xs uppercase tracking-widest mb-6">
                  <svg className="w-4 h-4 text-accent-blue" fill="currentColor" viewBox="0 0 20 20"><path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.381z" /></svg>
                  Master with Confidence
                </div>
                
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-dark mb-6 leading-[1.15]">
                  Multiplication <br className="hidden lg:block"/>Bootcamp
                </h2>

                <p className="text-muted text-base md:text-lg mb-10 leading-relaxed font-medium">
                  We turn times tables from a memorization chore into an exciting puzzle. Students build lightning-fast recall while deeply understanding the math behind the numbers.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Speed', color: 'border-accent-red' }, 
                    { label: 'Accuracy', color: 'border-accent-blue' }, 
                    { label: 'Patterns', color: 'border-accent-green' }, 
                    { label: 'Problem Solving', color: 'border-secondary' }
                  ].map((item, i) => (
                    <div key={i} className={`bg-background-alt px-5 py-3.5 border-l-4 ${item.color} rounded-2xl shadow-sm flex items-center group-hover:-translate-y-1 transition-transform duration-500 delay-${i * 100}`}>
                      <span className="font-extrabold text-text-dark text-sm md:text-base">{item.label}</span>
                    </div>
                  ))}
                  <div className="col-span-2 bg-background-alt px-5 py-3.5 border-l-4 border-primary rounded-2xl shadow-sm flex items-center group-hover:-translate-y-1 transition-transform duration-500 delay-400">
                    <span className="font-extrabold text-text-dark text-sm md:text-base">Gamified Learning Experience</span>
                  </div>
                </div>
              </FadeUp>
            </div>

            <div className="w-full lg:w-1/2 relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] bg-accent-blue/5 flex justify-center items-center p-8 z-10 border-l border-muted/5">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-[60px] group-hover:scale-125 transition-transform duration-700 pointer-events-none"></div>
               <div className="absolute inset-10 md:inset-16 z-20 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2 origin-center">
                 <Image src="/characters/blue-found-chest.png" alt="Multiplication Treasure" fill className="object-contain drop-shadow-2xl" />
               </div>
            </div>
          </div>

          {/* Program 5: Reading Studio (Organic Split) */}
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-20 bg-accent-green/5 rounded-[2rem] md:rounded-[4rem] p-8 md:p-16 lg:p-24 relative overflow-hidden border border-accent-green/10">
            <div className="w-full lg:w-1/2 order-2 lg:order-1 relative min-h-[350px] md:min-h-[500px] flex items-end justify-center group">
              <div className="absolute inset-0 bg-accent-green/20 rounded-[4rem] rounded-tl-[8rem] rounded-br-[8rem] rotate-6 group-hover:rotate-12 transition-transform duration-700 blur-sm scale-90" />
              <div className="absolute bottom-0 left-0 w-full h-[110%] md:h-[120%] z-10 transition-transform duration-700 group-hover:scale-105 origin-bottom">
                <Image src="/characters/Yellow-Reading-Book.png" alt="Reading Mascot" fill className="object-contain object-bottom drop-shadow-2xl" />
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2 lg:pt-10">
              <FadeUp>
                <div className="inline-block px-4 py-1.5 rounded-full bg-white shadow-sm text-accent-green font-extrabold text-xs uppercase tracking-widest mb-6 border border-accent-green/10">
                  Building Lifelong Readers
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-dark mb-6 leading-tight">
                  Mindverse Reading Studio
                </h2>
                <p className="text-muted text-base md:text-lg mb-12">
                  A structured, engaging phonics and reading program designed to take students from learning letters to devouring chapter books with complete confidence.
                </p>
                
                <div className="pl-6 md:pl-8 border-l-[3px] border-dashed border-accent-green/30 space-y-10 relative">
                  <div className="relative group">
                    <div className="absolute -left-[35px] md:-left-[43px] top-1 w-6 h-6 bg-white border-4 border-accent-green rounded-full shadow-sm group-hover:scale-125 transition-transform"/>
                    <h4 className="font-extrabold text-lg md:text-xl text-text-dark mb-1">Level 1: Foundation</h4>
                    <p className="text-sm md:text-base text-muted">Phonics, letter recognition, and building the core blocks of language.</p>
                  </div>
                  <div className="relative group">
                    <div className="absolute -left-[35px] md:-left-[43px] top-1 w-6 h-6 bg-white border-4 border-secondary rounded-full shadow-sm group-hover:scale-125 transition-transform"/>
                    <h4 className="font-extrabold text-lg md:text-xl text-text-dark mb-1">Level 2: Fluency</h4>
                    <p className="text-sm md:text-base text-muted">Blending words, reading simple sentences, and improving reading speed.</p>
                  </div>
                  <div className="relative group">
                    <div className="absolute -left-[35px] md:-left-[43px] top-1 w-6 h-6 bg-white border-4 border-primary rounded-full shadow-sm group-hover:scale-125 transition-transform"/>
                    <h4 className="font-extrabold text-lg md:text-xl text-text-dark mb-1">Level 3: Comprehension</h4>
                    <p className="text-sm md:text-base text-muted">Independent reading, understanding narratives, and analytical thinking.</p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>

        </Container>
      </section>

      {/* SECTION 4: LEARNING EXPERIENCE (Timeline) */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <Container>
          <div className="text-center mb-16 md:mb-24 relative z-10">
            <FadeUp>
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue font-extrabold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">
                Step-by-Step
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-fluid-h2 font-extrabold text-text-dark">The Learning Experience</h2>
            </FadeUp>
          </div>

          <div className="max-w-5xl mx-auto relative mt-10 md:mt-20">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-4 bg-background-alt rounded-full -translate-x-1/2 shadow-inner"></div>
            <div className="md:hidden absolute left-[32px] top-0 bottom-0 w-3 bg-background-alt rounded-full shadow-inner"></div>

            <div className="space-y-12 md:space-y-20 relative z-10">
              {[
                { 
                  title: "Student Joins", 
                  desc: "A warm, welcoming onboarding into the Mindverse family to set the stage for a positive journey.", 
                  color: "bg-accent-blue", 
                  textColor: "text-accent-blue",
                  img: null 
                },
                { 
                  title: "Deep Assessment", 
                  desc: "We pinpoint exactly how your child learns best and identify where their foundation needs support.", 
                  color: "bg-secondary", 
                  textColor: "text-yellow-600",
                  img: "/characters/Blue-Searching-Book.png" 
                },
                { 
                  title: "Custom Learning Plan", 
                  desc: "We craft a bespoke roadmap designed exclusively for their pace, goals, and natural curiosity.", 
                  color: "bg-accent-green", 
                  textColor: "text-accent-green",
                  img: null 
                },
                { 
                  title: "Live Interactive Classes", 
                  desc: "Engaging, face-to-face online sessions that transform challenging topics into fun discoveries.", 
                  color: "bg-accent-red", 
                  textColor: "text-accent-red",
                  img: "/characters/Yelllow-Teaching.png" 
                },
                { 
                  title: "Regular Feedback", 
                  desc: "Transparent progress reports and open communication channels keep parents completely in the loop.", 
                  color: "bg-primary", 
                  textColor: "text-primary",
                  img: "/characters/Purple-Taking in mic.png" 
                },
                { 
                  title: "Confidence & Growth", 
                  desc: "Watch their academic anxiety vanish as they master concepts and believe in their own potential.", 
                  color: "bg-secondary", 
                  textColor: "text-yellow-600",
                  img: "/characters/Characters-viewing-laptop.png" 
                }
              ].map((step, i) => (
                <FadeUp key={i} delay={i * 0.1} className={`relative flex flex-col md:flex-row items-center w-full gap-6 md:gap-0 ${i % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  
                  <div className={`w-full md:w-1/2 flex ${i % 2 === 0 ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16'} relative pl-20 md:pl-0`}>
                     <div className="md:hidden absolute left-[32px] top-[30px] w-6 h-6 rounded-full border-4 border-white shadow-sm -translate-x-1/2 z-20">
                        <div className={`w-full h-full rounded-full ${step.color}`}></div>
                     </div>

                     <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-card hover:shadow-float transition-all duration-500 border border-muted/5 relative group w-full max-w-md hover:-translate-y-1">
                        <div className="absolute top-2 md:top-4 right-4 md:right-6 font-black text-5xl md:text-6xl opacity-[0.03] pointer-events-none transition-transform group-hover:scale-110">
                          0{i + 1}
                        </div>
                        
                        <h4 className={`font-extrabold text-xl md:text-2xl mb-3 md:mb-4 ${step.textColor}`}>{step.title}</h4>
                        <p className="text-muted leading-relaxed text-sm md:text-base">{step.desc}</p>
                     </div>
                  </div>

                  <div className="hidden md:flex absolute left-1/2 top-1/2 w-10 h-10 bg-white rounded-full border-[6px] border-white shadow-md -translate-x-1/2 -translate-y-1/2 items-center justify-center z-20">
                     <div className={`w-full h-full rounded-full ${step.color}`}></div>
                  </div>

                  <div className={`hidden md:flex w-1/2 ${i % 2 === 0 ? 'justify-start pl-20' : 'justify-end pr-20'} items-center`}>
                     {step.img ? (
                        <div className={`relative w-48 h-48 ${i % 2 === 0 ? 'animate-[float_6s_ease-in-out_infinite]' : 'animate-[float_7s_ease-in-out_infinite_reverse]'}`}>
                           <Image src={step.img} alt={step.title} fill className="object-contain" />
                        </div>
                     ) : (
                        <div className="w-16 h-16 rounded-full bg-background-alt opacity-50"></div>
                     )}
                  </div>

                </FadeUp>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 5: HOW LEARNING PROGRESSES */}
      <section className="py-24 md:py-32 bg-background-alt relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-30 mix-blend-multiply pointer-events-none"></div>
        <Container>
          <FadeUp className="text-center mb-16 md:mb-24 relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white shadow-sm border border-muted/5 text-secondary-700 font-extrabold text-xs uppercase tracking-widest mb-6">
              Step-by-Step
            </span>
            <h2 className="text-fluid-h2 font-black text-text-dark">How Learning Progresses</h2>
          </FadeUp>

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { id: 1, title: 'Assessment', desc: 'Identify baseline skills.', color: 'bg-accent-blue', text: 'text-accent-blue' },
                { id: 2, title: 'Placement', desc: 'Assign correct level.', color: 'bg-secondary', text: 'text-yellow-600' },
                { id: 3, title: 'Learning Plan', desc: 'Custom tailored roadmap.', color: 'bg-accent-green', text: 'text-accent-green' },
                { id: 4, title: 'Live Classes', desc: 'Face-to-face sessions.', color: 'bg-accent-red', text: 'text-accent-red' },
                { id: 5, title: 'Practice', desc: 'Interactive exercises.', color: 'bg-primary', text: 'text-primary' },
                { id: 6, title: 'Feedback', desc: 'Regular parent updates.', color: 'bg-accent-blue', text: 'text-accent-blue' },
                { id: 7, title: 'Completion', desc: 'Celebrate milestones.', color: 'bg-secondary', text: 'text-yellow-600' },
                { id: 8, title: 'Next Pathway', desc: 'Continue growing.', color: 'bg-accent-green', text: 'text-accent-green' }
              ].map((step, i) => {
                let colStart = "";
                let rowStart = "";
                
                if (i === 0) { colStart = "md:col-start-1"; rowStart = "md:row-start-1"; }
                if (i === 1) { colStart = "md:col-start-2"; rowStart = "md:row-start-1"; }
                if (i === 2) { colStart = "md:col-start-3"; rowStart = "md:row-start-1"; }
                if (i === 3) { colStart = "md:col-start-4"; rowStart = "md:row-start-1"; }
                if (i === 4) { colStart = "md:col-start-4"; rowStart = "md:row-start-2"; }
                if (i === 5) { colStart = "md:col-start-3"; rowStart = "md:row-start-2"; }
                if (i === 6) { colStart = "md:col-start-2"; rowStart = "md:row-start-2"; }
                if (i === 7) { colStart = "md:col-start-1"; rowStart = "md:row-start-2"; }

                return (
                  <FadeUp key={i} delay={i * 0.1} className={`relative ${colStart} ${rowStart} flex flex-col items-center group`}>
                    {i < 3 && <div className="hidden md:block absolute top-[44px] left-1/2 w-[calc(100%+32px)] border-t-[3px] border-dashed border-muted/20 -z-10"></div>}
                    {i === 3 && <div className="hidden md:block absolute top-[44px] left-1/2 h-[calc(100%+32px)] border-l-[3px] border-dashed border-muted/20 -z-10"></div>}
                    {i >= 4 && i < 7 && <div className="hidden md:block absolute top-[44px] right-1/2 w-[calc(100%+32px)] border-t-[3px] border-dashed border-muted/20 -z-10"></div>}
                    {i < 7 && <div className="md:hidden absolute top-[44px] left-1/2 h-[calc(100%+24px)] border-l-[3px] border-dashed border-muted/20 -z-10"></div>}

                    <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-muted/10 flex flex-col items-center text-center w-full h-full group-hover:-translate-y-2 group-hover:shadow-float transition-all duration-500 z-10">
                      <div className={`w-14 h-14 rounded-2xl ${step.color}/10 flex items-center justify-center mb-5 shrink-0 group-hover:scale-110 transition-transform duration-500`}>
                        <span className={`font-black text-xl ${step.text}`}>0{i + 1}</span>
                      </div>
                      <h4 className="font-extrabold text-lg text-text-dark mb-2 leading-tight">{step.title}</h4>
                      <p className="text-xs text-muted font-medium leading-relaxed">{step.desc}</p>
                    </div>
                  </FadeUp>
                );
              })}
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
              <FadeUp key={i} delay={i * 0.1} className="bg-background-alt p-8 md:p-10 rounded-[2.5rem] border border-muted/5 flex items-start gap-6 group hover:bg-white hover:shadow-float transition-all duration-500">
                 <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl shrink-0 ${block.color}`}>
                   0{i + 1}
                 </div>
                 <div>
                   <h3 className="text-xl font-extrabold text-text-dark mb-2">{block.title}</h3>
                   <p className="text-muted text-sm md:text-base leading-relaxed">{block.desc}</p>
                 </div>
              </FadeUp>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION 7: WHO IS EACH PATHWAY FOR? */}
      <section className="py-24 md:py-32 bg-background-alt relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern opacity-30 mix-blend-multiply pointer-events-none"></div>
        <Container className="relative z-10">
          <FadeUp className="text-center mb-16 md:mb-24">
            <h2 className="text-fluid-h2 font-black text-text-dark">Who Is Each Pathway For?</h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
        <div className="absolute bottom-0 left-[2%] md:left-[10%] w-48 md:w-64 h-48 md:h-64 z-0 pointer-events-none hidden lg:block opacity-90 origin-bottom animate-[float_6s_ease-in-out_infinite]">
          <Image src="/characters/yellow-blue-hifi.png" alt="Students High-Five" fill className="object-contain object-bottom" />
        </div>
        
        <div className="absolute top-[10%] right-[5%] md:right-[15%] w-32 md:w-48 h-32 md:h-48 z-0 pointer-events-none opacity-80 animate-[float_7s_ease-in-out_infinite_reverse] hidden lg:block">
          <Image src="/characters/blue-found-chest.png" alt="Success" fill className="object-contain" />
        </div>

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
            <Button size="xl" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 shadow-lg border-2 border-primary hover:scale-105 transition-transform text-lg">
              Start Free Math Assessment
            </Button>
            <Button size="xl" variant="outline" className="w-full sm:w-auto bg-white border-2 border-muted/20 text-text-dark hover:border-text-dark hover:bg-text-dark/5 shadow-sm hover:scale-105 transition-transform text-lg">
              Book a Discovery Call
            </Button>
          </FadeUp>
        </Container>
      </section>

    </div>
  );
}
