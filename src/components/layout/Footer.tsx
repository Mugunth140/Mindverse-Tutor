"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export function Footer() {
  const text = "Mindverse";
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const item: any = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="relative border-t border-muted/10 pt-8 md:pt-10 overflow-hidden bg-linear-to-b from-background to-secondary/25">
      
      <div className="container mx-auto px-4 sm:px-8 lg:px-18 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-16 mb-8 md:mb-12">
          <div className="sm:col-span-2 lg:col-span-2 text-center sm:text-left">
            <Link href="/" className="inline-block mb-6 md:mb-8 hover:scale-105 transition-transform">
              <Image 
                src="/logos/logo-full.png" 
                alt="Mindverse Tutor Logo" 
                width={180} 
                height={54} 
                className="object-contain w-auto h-14 md:h-20 mx-auto sm:mx-0"
              />
            </Link>
            <p className="text-muted text-sm md:text-base leading-relaxed mb-6 font-medium max-w-sm mx-auto sm:mx-0">
              Making learning a joyful adventure. Premium, personalized tutoring that builds confidence and inspires curiosity.
            </p>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-extrabold text-text-dark text-base md:text-lg mb-4 md:mb-8">Programs</h4>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base font-medium text-muted">
              <li><Link href="/programs" className="hover:text-primary transition-colors block py-1">Mathematics</Link></li>
              <li><Link href="/programs" className="hover:text-primary transition-colors block py-1">After School</Link></li>
              <li><Link href="/programs" className="hover:text-primary transition-colors block py-1">Summer Camps</Link></li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-extrabold text-text-dark text-base md:text-lg mb-4 md:mb-8">Company</h4>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base font-medium text-muted">
              <li><Link href="/about" className="hover:text-primary transition-colors block py-1">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors block py-1">Book a Call</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors block py-1">Careers</Link></li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <h4 className="font-extrabold text-text-dark text-base md:text-lg mb-4 md:mb-8">Connect</h4>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base font-medium text-muted">
              <li><a href="https://www.instagram.com/mindversetutor" className="hover:text-primary transition-colors block py-1">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors block py-1">Facebook</a></li>
              <li><a href="#" className="hover:text-primary transition-colors block py-1">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        {/* Pushed high up with pb-[20vw] on mobile, pb-[16vw] on desktop */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 pb-[22vw] px-4 sm:pb-[18vw] sm:px-8 md:pb-[15vw] md:px-16 z-20 relative text-xs md:text-sm font-medium text-muted/80 text-center">
          <Link href="#" className="hover:text-primary transition-colors py-2">Terms and conditions</Link>
          <p className="order-first md:order-0">&copy; {new Date().getFullYear()} Mindverse Tutor. All Rights Reserved</p>
          <Link href="#" className="hover:text-primary transition-colors py-2">Privacy Policy</Link>
        </div>
      </div>

      {/* Massive Animated Background Text */}
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        className="absolute bottom-[-3vw] left-0 w-full flex justify-center pointer-events-none select-none z-0"
      >
        {text.split("").map((char, index) => (
          <motion.span 
            key={index} 
            variants={item}
            className="font-heading font-black text-[18.5vw] leading-none text-secondary/10 tracking-tighter"
          >
            {char}
          </motion.span>
        ))}
      </motion.div>

    </footer>
  );
}
