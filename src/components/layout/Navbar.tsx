"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  const menuVariants: any = {
    closed: { opacity: 0, y: "-100%" },
    open: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 30, staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const linkVariants: any = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <header className="sticky top-0 z-100 w-full border-b border-muted/10 bg-background/90 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-8 lg:px-18 h-16 md:h-18 flex items-center justify-between relative z-60">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group hover:scale-102 transition-transform duration-300" onClick={() => setIsOpen(false)}>
          <Image 
            src="/logos/logo.png" 
            alt="Mindverse Tutor Logo" 
            width={160} 
            height={48} 
            className="object-contain w-auto h-8 md:h-12 lg:h-14"
            priority
          />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-6 xl:gap-8 items-center">
          <Link href="/about" className="text-text-dark hover:text-primary font-bold transition-colors">About</Link>
          <Link href="/programs" className="text-text-dark hover:text-primary font-bold transition-colors">Programs</Link>
          <Link href="/courses" className="text-text-dark hover:text-primary font-bold transition-colors">Courses</Link>
          {/* <Link href="/contact" className="text-text-dark hover:text-primary font-bold transition-colors"></Link> */}
          <Button size="md" variant="secondary" className="shadow-sm">Book a Call</Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          type="button"
          className="lg:hidden p-2 min-h-[44px] min-w-[44px] flex flex-col justify-center items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg cursor-pointer touch-manipulation"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <motion.span 
            animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }} 
            className="block w-6 h-0.5 bg-text-dark rounded-full origin-center transition-all"
          />
          <motion.span 
            animate={{ opacity: isOpen ? 0 : 1 }} 
            className="block w-6 h-0.5 bg-text-dark rounded-full transition-all"
          />
          <motion.span 
            animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }} 
            className="block w-6 h-0.5 bg-text-dark rounded-full origin-center transition-all"
          />
        </button>

      </div>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute top-0 left-0 w-full h-screen bg-background/98 z-50 lg:hidden flex flex-col items-center justify-center px-4"
          >
            <nav className="flex flex-col items-center gap-8 w-full max-w-sm mt-10">
              <motion.div variants={linkVariants} className="w-full text-center">
                <Link href="/about" className="block text-2xl font-extrabold text-text-dark hover:text-primary py-2" onClick={() => setIsOpen(false)}>About</Link>
              </motion.div>
              <motion.div variants={linkVariants} className="w-full text-center">
                <Link href="/programs" className="block text-2xl font-extrabold text-text-dark hover:text-primary py-2" onClick={() => setIsOpen(false)}>Programs</Link>
              </motion.div>
              <motion.div variants={linkVariants} className="w-full text-center">
                <Link href="/courses" className="block text-2xl font-extrabold text-text-dark hover:text-primary py-2" onClick={() => setIsOpen(false)}>Courses</Link>
              </motion.div>
              <motion.div variants={linkVariants} className="w-full text-center">
                <Link href="/contact" className="block text-2xl font-extrabold text-text-dark hover:text-primary py-2" onClick={() => setIsOpen(false)}>Book a Call</Link>
              </motion.div>
              <motion.div variants={linkVariants} className="w-full pt-6 border-t border-muted/10">
                <Button href="https://assessment.mindversetutor.com" target="_blank" rel="noopener noreferrer" size="xl" variant="secondary" className="w-full shadow-lg" onClick={() => setIsOpen(false)}>Free Assessment</Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
