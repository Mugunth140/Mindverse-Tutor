import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { FadeUp, FadeIn } from "@/components/shared/Animations";

export const metadata = { title: "Programs | Mindverse Tutor" };

export default function ProgramsPage() {
  return (
    <div className="overflow-hidden bg-background">
      
      {/* SECTION 1: HERO */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 min-h-[70vh] flex flex-col justify-center items-center">
        <div className="absolute inset-0 bg-dot-pattern opacity-40 mix-blend-multiply pointer-events-none"></div>
        
        {/* Soft background accents */}
        <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />

        <Container className="relative z-10 text-center max-w-4xl mx-auto">
          <FadeUp>
            <h1 className="text-fluid-h1 font-black text-text-dark mb-6 leading-[1.1] tracking-tight text-balance">
              Programs Designed Around <br className="hidden sm:block" />
              <span className="text-accent-blue relative inline-block mt-2">
                Every Child.
                <svg className="absolute w-[105%] h-3 -bottom-1 -left-[2%] text-secondary" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
          </FadeUp>
          
          <FadeUp delay={0.1}>
            <p className="text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto text-balance">
              We know that every learner is different. Mindverse offers multiple personalized learning experiences designed to suit different goals, speeds, and natural curiosities.
            </p>
          </FadeUp>
        </Container>
      </section>

      {/* SECTION 2: HOW WE HELP STUDENTS (Journey) */}
      <section className="py-24 md:py-32 bg-white relative border-y border-muted/5 overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none"></div>
        
        <Container>
          <div className="text-center mb-16 md:mb-24 relative z-10">
            <FadeUp>
              <span className="inline-block text-secondary font-extrabold text-xs md:text-sm uppercase tracking-[0.2em] mb-4">
                The Mindverse Approach
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="text-fluid-h2 font-extrabold text-text-dark">A Journey to Mastery</h2>
            </FadeUp>
          </div>

          <div className="max-w-6xl mx-auto relative">
            
            {/* Desktop connecting path */}
            <div className="hidden md:block absolute top-[48px] left-[5%] right-[5%] border-t-[3px] border-dashed border-muted/10 z-0"></div>
            
            {/* Mobile connecting path */}
            <div className="md:hidden absolute top-[10%] bottom-[10%] left-[48px] border-l-[3px] border-dashed border-muted/10 z-0"></div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-start relative z-10 gap-12 md:gap-4 lg:gap-0">
              {[
                { label: "Discover", sub: "Potential", colorBg: "bg-accent-blue/15", colorBorder: "border-accent-blue/30", colorText: "text-accent-blue" },
                { label: "Strengthen", sub: "Foundations", colorBg: "bg-secondary/20", colorBorder: "border-secondary/40", colorText: "text-yellow-600" },
                { label: "Practice", sub: "With Purpose", colorBg: "bg-accent-red/15", colorBorder: "border-accent-red/30", colorText: "text-accent-red" },
                { label: "Grow", sub: "Confidence", colorBg: "bg-accent-green/15", colorBorder: "border-accent-green/30", colorText: "text-accent-green" },
                { label: "Succeed", sub: "Beyond Grades", colorBg: "bg-primary/10", colorBorder: "border-primary/20", colorText: "text-primary" }
              ].map((step, i) => (
                <FadeUp key={i} delay={i * 0.1} className="flex flex-row md:flex-col items-center gap-6 md:gap-8 w-full md:w-auto group">
                  
                  {/* Journey Node */}
                  <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
                    {/* Animated Outer Shape */}
                    <div className={`absolute inset-0 rounded-[2rem] ${step.colorBg} border ${step.colorBorder} -rotate-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}></div>
                    
                    {/* Inner Number Circle */}
                    <div className="absolute inset-3 bg-white rounded-full shadow-sm flex items-center justify-center">
                      <span className={`font-black text-xl md:text-2xl ${step.colorText}`}>0{i + 1}</span>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="text-left md:text-center pt-2 md:pt-0">
                    <h3 className="font-extrabold text-xl md:text-2xl text-text-dark mb-1">{step.label}</h3>
                    <p className={`text-xs md:text-sm font-bold uppercase tracking-widest ${step.colorText} opacity-80`}>{step.sub}</p>
                  </div>

                </FadeUp>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION 3: PROGRAMS (Main Section) */}
      <section className="py-24 md:py-32 bg-background-alt overflow-hidden">
        <Container className="space-y-32 md:space-y-40">
          
          {/* Program 1: Image Left, Content Right */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 bg-white rounded-[2rem] md:rounded-tr-[6rem] md:rounded-bl-[6rem] p-8 md:p-16 border border-muted/10 shadow-sm relative group">
            <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[450px] order-2 md:order-1 flex items-center justify-center">
              <div className="absolute inset-0 bg-secondary/5 rounded-full blur-[80px]"></div>
              <div className="relative w-[80%] md:w-[90%] h-full z-10 transition-transform duration-700 group-hover:scale-105">
                <Image src="/characters/Yelllow-Teaching.png" alt="Yellow Teacher" fill className="object-contain object-center" />
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <FadeUp>
                <div className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-yellow-700 font-extrabold text-xs uppercase tracking-widest mb-6">
                  Learning Designed Around Your Child
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-dark mb-8 leading-tight">
                  Personalized One-on-One Tutoring
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {['Grades K–10', 'Mathematics', 'Science', 'English', 'Personalized Learning Plans', 'Flexible Scheduling', 'Individual Progress Tracking'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-secondary shrink-0" />
                      <span className="text-muted font-medium text-sm md:text-base leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>

          {/* Program 2: Content Left, Image Right */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 relative group">
            <div className="w-full md:w-1/2">
              <FadeUp>
                <div className="inline-block px-4 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue font-extrabold text-xs uppercase tracking-widest mb-6">
                  Daily Learning. Daily Confidence.
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-dark mb-8 leading-tight">
                  After-School Support Programme
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Homework Support', 'Revision', 'Study Skills', 'Exam Preparation', 'One-on-One', 'Small Cohorts (Max 4)'].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 rounded-full bg-accent-blue shrink-0" />
                      <span className="text-muted font-medium text-sm md:text-base leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </FadeUp>
            </div>
            <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[450px] flex items-center justify-center bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] bg-white rounded-[3rem] border border-muted/10 shadow-sm p-8">
               <div className="relative w-[90%] h-full z-10 transition-transform duration-700 group-hover:-translate-y-4">
                 <Image src="/characters/Blue-Writing.png" alt="Blue Student Studying" fill className="object-contain object-bottom" />
               </div>
            </div>
          </div>

          {/* Program 3: Full Width */}
          <div className="w-full bg-white rounded-[2rem] md:rounded-[4rem] p-8 md:p-16 lg:p-24 border border-muted/10 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-red/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="flex flex-col lg:flex-row items-center gap-16 relative z-10">
              <div className="w-full lg:w-5/12 text-center lg:text-left">
                <FadeUp>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-accent-red/10 text-accent-red font-extrabold text-xs uppercase tracking-widest mb-6">
                    Preparing Students for the Next Step
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-dark mb-8 leading-tight">
                    Middle School Math Readiness Bootcamp
                  </h2>
                  <div className="flex flex-col gap-4 text-left max-w-sm mx-auto lg:mx-0">
                    {['Transition to Middle School', 'Confidence Building', 'Strong Math Foundations', 'Interactive Activities'].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 bg-background-alt px-5 py-3 rounded-2xl border border-muted/5">
                        <div className="w-2.5 h-2.5 rounded-sm rotate-45 bg-accent-red shrink-0" />
                        <span className="text-text-dark font-bold text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </FadeUp>
              </div>
              
              <div className="w-full lg:w-7/12 relative min-h-[350px] md:min-h-[500px] flex items-center justify-center">
                 <div className="relative w-full h-full">
                    <Image src="/characters/Board.png" alt="Math Board" fill className="object-contain z-10" />
                    <div className="absolute right-[5%] bottom-[10%] w-[45%] h-[60%] z-20 transition-transform duration-700 group-hover:scale-105 origin-bottom">
                      <Image src="/characters/Yelllow-Teaching.png" alt="Yellow Teacher" fill className="object-contain" />
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Program 4: Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-accent-blue/5 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 flex flex-col justify-center relative overflow-hidden group">
              <FadeUp>
                <div className="inline-block px-4 py-1.5 rounded-full bg-white shadow-sm text-accent-blue font-extrabold text-xs uppercase tracking-widest mb-6">
                  Master Multiplication with Confidence
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-text-dark mb-10 leading-tight">
                  Multiplication Bootcamp
                </h2>
                <div className="flex flex-wrap gap-3">
                  {['Speed', 'Accuracy', 'Patterns', 'Games', 'Problem Solving'].map((item, i) => (
                    <span key={i} className="px-5 py-2.5 bg-white border border-accent-blue/10 text-text-dark font-bold text-sm rounded-xl shadow-sm hover:-translate-y-1 transition-transform">
                      {item}
                    </span>
                  ))}
                </div>
              </FadeUp>
            </div>
            
            <div className="bg-white border border-muted/10 shadow-sm rounded-4xl md:rounded-[3rem] min-h-[350px] md:min-h-[450px] relative overflow-hidden flex items-center justify-center p-8 group">
               <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none"></div>
               <div className="relative w-[80%] h-full z-10">
                 <Image src="/characters/Board.png" alt="Board" fill className="object-contain opacity-50 blur-[2px]" />
               </div>
               <div className="absolute inset-0 m-auto w-[60%] h-[60%] z-20 transition-transform duration-700 group-hover:scale-110">
                 <Image src="/characters/Blue-Searching-Book.png" alt="Blue Learner" fill className="object-contain" />
               </div>
            </div>
          </div>

          {/* Program 5: Offset Layout with Timeline */}
          <div className="flex flex-col lg:flex-row items-start gap-12 md:gap-20 bg-accent-green/5 rounded-4xl md:rounded-[4rem] p-4 md:p-8 lg:p-12 relative overflow-hidden border border-accent-green/10">
            <div className="w-full lg:w-5/12 order-2 lg:order-1 relative min-h-100 flex items-end">
              <div className="absolute bottom-0 left-0 w-full h-[120%] z-10">
                <Image src="/characters/Yellow-Reading-Book.png" alt="Reading Mascot" fill className="object-contain object-bottom" />
              </div>
            </div>
            
            <div className="w-full lg:w-7/12 order-1 lg:order-2">
              <FadeUp>
                <div className="inline-block text-accent-green font-extrabold text-xs uppercase tracking-widest mb-6 ">
                  Building Lifelong Readers
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-dark mb-6 leading-tight">
                  Mindverse Reading Studio
                </h2>
                <p className="text-muted text-base md:text-lg mb-12">
                  A structured, engaging phonics and reading program designed to take students from learning letters to devouring chapter books with complete confidence.
                </p>
                
                {/* Visual Progression */}
                <div className="pl-6 border-l-2 border-dashed border-accent-green/30 space-y-6 relative">
                  <div className="relative">
                    <div className="absolute -left-[35px] top-1 w-4 h-4 bg-white border-4 border-accent-green rounded-full shadow-sm"/>
                    <h4 className="font-extrabold text-lg text-text-dark mb-1">Level 1: Foundation</h4>
                    <p className="text-sm text-muted">Phonics, letter recognition, and building the building blocks of language.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[35px] top-1 w-4 h-4 bg-white border-4 border-secondary rounded-full shadow-sm"/>
                    <h4 className="font-extrabold text-lg text-text-dark mb-1">Level 2: Fluency</h4>
                    <p className="text-sm text-muted">Blending words, reading simple sentences, and improving reading speed.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[35px] top-1 w-4 h-4 bg-white border-4 border-primary rounded-full shadow-sm"/>
                    <h4 className="font-extrabold text-lg text-text-dark mb-1">Level 3: Comprehension</h4>
                    <p className="text-sm text-muted">Independent reading, understanding narratives, and analytical thinking.</p>
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
            <FadeUp delay={0.1}>
              <h2 className="text-fluid-h2 font-extrabold text-text-dark">The Learning Experience</h2>
            </FadeUp>
          </div>

          <div className="max-w-5xl mx-auto relative mt-10 md:mt-20">
            
            {/* Thick Central Track (Desktop) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-4 bg-background-alt rounded-full -translate-x-1/2 shadow-inner"></div>
            
            {/* Thick Track (Mobile) */}
            <div className="md:hidden absolute left-8 top-0 bottom-0 w-3 bg-background-alt rounded-full shadow-inner"></div>

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
                  
                  {/* Content Side */}
                  <div className={`w-full md:w-1/2 flex ${i % 2 === 0 ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16'} relative pl-20 md:pl-0`}>
                     
                     {/* Mobile Dot */}
                     <div className="md:hidden absolute left-[32px] top-[30px] w-6 h-6 rounded-full border-4 border-white shadow-sm -translate-x-1/2 z-20">
                        <div className={`w-full h-full rounded-full ${step.color}`}></div>
                     </div>

                     <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-card hover:shadow-float transition-all duration-500 border border-muted/5 relative group w-full max-w-md hover:-translate-y-1">
                        {/* Giant faint number watermark */}
                        <div className="absolute top-2 md:top-4 right-4 md:right-6 font-black text-5xl md:text-6xl opacity-[0.03] pointer-events-none transition-transform group-hover:scale-110">
                          0{i + 1}
                        </div>
                        
                        <h4 className={`font-extrabold text-xl md:text-2xl mb-3 md:mb-4 ${step.textColor}`}>{step.title}</h4>
                        <p className="text-muted leading-relaxed text-sm md:text-base">{step.desc}</p>
                     </div>
                  </div>

                  {/* Central Desktop Dot */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 w-10 h-10 bg-white rounded-full border-[6px] border-white shadow-md -translate-x-1/2 -translate-y-1/2 items-center justify-center z-20">
                     <div className={`w-full h-full rounded-full ${step.color}`}></div>
                  </div>

                  {/* Illustration Side */}
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

      {/* SECTION 5: WHY PARENTS LOVE THESE PROGRAMS (Editorial Blocks) */}
      <section className="py-24 md:py-32 bg-background-alt relative overflow-hidden border-t border-muted/5">
        <Container>
          <FadeUp className="mb-16 md:mb-20 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black text-text-dark">Why Parents Love These Programs</h2>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
            
            {/* Block 1: 5 cols */}
            <FadeUp delay={0.1} className="lg:col-span-5 bg-white p-8 md:p-12 rounded-[2rem] border border-muted/10 shadow-sm relative overflow-hidden group">
               <div className="w-12 h-2 bg-secondary rounded-full mb-6" />
               <h3 className="text-2xl font-bold text-text-dark mb-4">Personalized Learning</h3>
               <p className="text-muted leading-relaxed">Education tailored to exactly how your child learns best, ensuring no one gets left behind.</p>
               <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-20 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                 <Image src="/characters/Blue-Writing.png" alt="Personalized" fill className="object-contain" />
               </div>
            </FadeUp>

            {/* Block 2: 7 cols */}
            <FadeUp delay={0.2} className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2rem] border border-muted/10 shadow-sm relative overflow-hidden group">
               <div className="w-12 h-2 bg-accent-blue rounded-full mb-6" />
               <h3 className="text-2xl font-bold text-text-dark mb-4">Experienced Guidance</h3>
               <p className="text-muted leading-relaxed max-w-md">Professional, patient tutors who know how to make complex subjects incredibly simple and fun.</p>
               <div className="absolute -bottom-2 right-4 w-40 h-40 opacity-20 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                 <Image src="/characters/Yelllow-Teaching.png" alt="Experienced" fill className="object-contain object-bottom" />
               </div>
            </FadeUp>

            {/* Block 3: 4 cols */}
            <FadeUp delay={0.3} className="lg:col-span-4 bg-white p-8 md:p-10 rounded-[2rem] border border-muted/10 shadow-sm relative group">
               <div className="w-8 h-2 bg-accent-green rounded-full mb-6" />
               <h3 className="text-xl font-bold text-text-dark mb-3">Small Cohorts</h3>
               <p className="text-muted text-sm leading-relaxed">Capped at exactly 4 students for maximum attention.</p>
            </FadeUp>

            {/* Block 4: 4 cols */}
            <FadeUp delay={0.4} className="lg:col-span-4 bg-white p-8 md:p-10 rounded-[2rem] border border-muted/10 shadow-sm relative group">
               <div className="w-8 h-2 bg-accent-red rounded-full mb-6" />
               <h3 className="text-xl font-bold text-text-dark mb-3">Concept-Based</h3>
               <p className="text-muted text-sm leading-relaxed">Focusing on deep understanding over rote memorization.</p>
            </FadeUp>

            {/* Block 5: 4 cols */}
            <FadeUp delay={0.5} className="lg:col-span-4 bg-white p-8 md:p-10 rounded-[2rem] border border-muted/10 shadow-sm relative group">
               <div className="w-8 h-2 bg-primary rounded-full mb-6" />
               <h3 className="text-xl font-bold text-text-dark mb-3">Progress Updates</h3>
               <p className="text-muted text-sm leading-relaxed">Regular check-ins so you always know how they are growing.</p>
            </FadeUp>

            {/* Block 6: 12 cols (Full) */}
            <FadeUp delay={0.6} className="lg:col-span-12 bg-white p-8 md:p-12 rounded-[2rem] border border-muted/10 shadow-sm relative overflow-hidden flex flex-col md:flex-row items-center gap-8 group">
               <div className="w-full md:w-2/3">
                 <div className="w-12 h-2 bg-secondary rounded-full mb-6" />
                 <h3 className="text-2xl md:text-3xl font-bold text-text-dark mb-4">Building Confidence</h3>
                 <p className="text-muted leading-relaxed max-w-xl">We replace academic anxiety with excitement. Our programs are designed to help students believe in their own boundless potential.</p>
               </div>
               <div className="w-full md:w-1/3 flex justify-center relative h-40">
                  <Image src="/characters/Red-Using laptop.png" alt="Confidence" fill className="object-contain group-hover:-translate-y-2 transition-transform duration-500" />
               </div>
            </FadeUp>

          </div>
        </Container>
      </section>

      {/* SECTION 7: CTA */}
      <section className="py-6 md:py-8 lg:py-10 bg-background relative overflow-hidden text-center">

        <Container className="relative z-10 max-w-3xl mx-auto">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-text-dark mb-8 tracking-tight leading-tight">
              Let's Build Your Child's <br className="hidden sm:block" /> Learning Journey
            </h2>
          </FadeUp>
          
          <FadeUp delay={0.2} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="md" className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 shadow-lg border-2 border-primary hover:scale-105 transition-transform text-lg">
              Book a Discovery Call
            </Button>
            <Button size="md" variant="outline" className="w-full sm:w-auto bg-white border-2 border-muted/20 text-text-dark hover:border-text-dark hover:bg-text-dark/5 shadow-sm hover:scale-105 transition-transform text-lg">
              Take Free Math Assessment
            </Button>
          </FadeUp>
        </Container>
      </section>

    </div>
  );
}
