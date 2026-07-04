import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-white border-t border-muted/10 pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-10 w-96 h-96 bg-accent-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1">
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
        <div className="pt-8 border-t border-muted/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm font-medium">&copy; {new Date().getFullYear()} MindVerse Tutor. All rights reserved.</p>
          <div className="flex gap-6 text-sm font-medium text-muted">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
