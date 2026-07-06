"use client";

import { Container } from "@/components/layout/Container";
import { FadeUp } from "@/components/shared/Animations";
import { motion } from "motion/react";

export function GlobalPresenceSection() {
  const locations = [
    { id: 'india', name: 'India', label: 'Head Office', x: '71.4%', y: '46.6%', delay: 0.2 },
    { id: 'usa', name: 'USA', label: 'Live Classes', x: '22.3%', y: '31.8%', delay: 0.6 },
    { id: 'canada', name: 'Canada', label: 'Active Students', x: '24.5%', y: '21.2%', delay: 0.8 },
    { id: 'australia', name: 'Australia', label: 'Online Learning', x: '83.7%', y: '74.1%', delay: 1.0 },
    { id: 'singapore', name: 'Singapore', label: 'Interactive Classes', x: '77%', y: '57.2%', delay: 1.2 },
    { id: 'uae', name: 'UAE', label: 'Coming Soon', x: '64.7%', y: '44.5%', delay: 1.4 },
  ];

  return (
    <section className="py-12 md:py-16 bg-background relative z-20 overflow-hidden">
      {/* Decorative large background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <Container className="relative z-10">
        
        {/* Top Centered Content */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          
          <FadeUp delay={0.2}>
            <h2 className="text-fluid-h2 font-extrabold text-text-dark mb-6 tracking-tight">
              Supporting Young Minds Across the World
            </h2>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-lg md:text-xl text-muted mb-10 leading-relaxed text-balance">
              Mindverse Tutor proudly delivers live, personalized learning experiences for students across multiple countries and time zones.
            </p>
          </FadeUp>

          {/* Centered Country Chips */}
        </div>

        {/* Full Width Map Scene */}
        <div className="w-full relative flex justify-center items-center">
            
            <div className="relative w-full max-w-5xl aspect-[1.89] mx-auto">
              
              {/* Map SVG Component Base */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 0.4, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="absolute inset-0 mix-blend-multiply grayscale pointer-events-none"
              >
                <img src="/world/MapChart_Map.svg" alt="World Map" className="w-full h-full object-contain" />
              </motion.div>

              {/* Markers & Labels */}
              {locations.map((loc, i) => (
                <div 
                  key={`marker-${i}`} 
                  className="absolute z-20 flex flex-col items-center"
                  style={{ left: loc.x, top: loc.y, transform: "translate(-50%, -50%)" }}
                >
                  
                  {/* Floating Label */}
                  <motion.div 
                    initial={{ opacity: 0, y: 15, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: -12, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: loc.delay + 0.3, type: "spring", stiffness: 200 }}
                    className="absolute bottom-full mb-3 whitespace-nowrap bg-text-dark/95 backdrop-blur-md px-3 py-2 md:px-4 md:py-2.5 rounded-2xl shadow-xl pointer-events-none hidden sm:flex flex-col items-center border border-white/10"
                  >
                    <span className="text-[10px] md:text-xs font-black text-white leading-tight mb-0.5">{loc.name}</span>
                    <span className={`text-[9px] md:text-[10px] font-bold ${loc.id === 'uae' ? 'text-white/50' : 'text-secondary'} leading-tight`}>{loc.label}</span>
                    
                    {/* Tooltip Arrow */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-text-dark/95"></div>
                  </motion.div>

                  {/* Marker Dot */}
                  <div className="relative flex justify-center items-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.4, delay: loc.delay, type: "spring" }}
                      className={`relative w-4 h-4 md:w-5 md:h-5 rounded-full ${loc.id === 'uae' ? 'bg-muted/40 border-muted/20' : 'bg-secondary border-white shadow-[0_0_25px_rgba(251,191,36,0.9)]'} z-10 border-2`}
                    />
                    
                    {/* Pulse Effect */}
                    <motion.div 
                      animate={{ scale: [1, 3.5, 3.5], opacity: [0.7, 0, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: loc.delay + 0.5, ease: "easeOut" }}
                      className={`absolute w-full h-full rounded-full ${loc.id === 'uae' ? 'bg-muted/30' : 'bg-secondary'} z-0`}
                    />
                  </div>

                </div>
              ))}
            </div>
        </div>
      </Container>
    </section>
  );
}
