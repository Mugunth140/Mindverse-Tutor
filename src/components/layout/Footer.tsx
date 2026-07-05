"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export function Footer() {
  const text = "mindverse";
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.01,
      }
    }
  };

  const item: any = {
    hidden: { opacity: 0, y: 40 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.39, 0.24, 0.3, 1]
      }
    }
  };

  return (
    <footer className="relative border-t border-muted/10 pt-24 overflow-hidden bg-linear-to-b from-background to-secondary/15">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-5 gap-16 mb-20">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-8 hover:scale-105 transition-transform">
              <Image 
                src="/logos/logo.png" 
                alt="MindVerse Tutor Logo" 
                width={180} 
                height={54} 
                className="object-contain w-auto h-14"
              />
            </Link>
            <p className="text-muted text-base leading-relaxed mb-6 font-medium">
              Making learning a joyful adventure. Premium, personalized tutoring that builds confidence and inspires curiosity.
            </p>
          </div>
          <div>
            <h4 className="font-extrabold text-text-dark text-lg mb-8">Programs</h4>
            <ul className="space-y-4 text-base font-medium text-muted">
              <li><Link href="/programs" className="hover:text-primary transition-colors">Mathematics</Link></li>
              <li><Link href="/programs" className="hover:text-primary transition-colors">After School</Link></li>
              <li><Link href="/programs" className="hover:text-primary transition-colors">Summer Camps</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-text-dark text-lg mb-8">Company</h4>
            <ul className="space-y-4 text-base font-medium text-muted">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Book a Call</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-text-dark text-lg mb-8">Connect</h4>
            <ul className="space-y-4 text-base font-medium text-muted">
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">YouTube</a></li>
            </ul>
          </div>
        </div>
        
        {/* Pushed high up with pb-[16vw] so it sits perfectly above the giant text */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-[16vw] md:pb-[15vw] z-20 relative text-sm font-medium text-muted/80">
          <Link href="#" className="hover:text-primary transition-colors">Terms and conditions</Link>
          <p>&copy; {new Date().getFullYear()} MindVerse Tutor. All Rights Reserved</p>
          <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
        </div>
      </div>

      {/* 
        Massive Animated Background Text 
      */}
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        className="absolute bottom-[-5vw] left-0 w-full flex justify-center pointer-events-none select-none z-0"
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
