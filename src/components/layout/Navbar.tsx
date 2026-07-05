import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-muted/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center  justify-center gap-2 group relative z-10 hover:scale-105 transition-transform duration-300">
          <Image 
            src="/logos/logo.png" 
            alt="MindVerse Tutor Logo" 
            width={125} 
            height={60} 
            className="object-contain w-auto h-10 md:h-12"
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/about" className="text-text-dark hover:text-primary font-bold transition-colors">About</Link>
          <Link href="/programs" className="text-text-dark hover:text-primary font-bold transition-colors">Programs</Link>
          <Link href="/courses" className="text-text-dark hover:text-primary font-bold transition-colors">Courses</Link>
          {/* <Link href="/contact" className="text-text-dark hover:text-primary font-bold transition-colors"></Link> */}
          <Button size="md" variant="secondary" className="shadow-sm">Book a Call</Button>
        </nav>
      </div>
    </header>
  );
}
