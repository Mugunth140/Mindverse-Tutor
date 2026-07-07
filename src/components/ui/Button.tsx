import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent-green" | "accent-blue";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-white hover:bg-primary/90 shadow-[0_4px_14px_0_rgba(124,58,237,0.39)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.23)] hover:-translate-y-0.5",
      secondary: "bg-secondary text-text-dark hover:bg-secondary/90 shadow-[0_4px_14px_0_rgba(251,191,36,0.39)] border border-muted/20 text-text-dark hover:border-text-dark/50",
      "accent-green": "bg-accent-green text-white hover:bg-accent-green/90 shadow-sm hover:-translate-y-0.5",
      "accent-blue": "bg-accent-blue text-white hover:bg-accent-blue/90 shadow-sm hover:-translate-y-0.5",
      outline: "border-2 border-primary/20 text-primary hover:border-primary hover:bg-primary/5",
      ghost: "hover:bg-primary/10 text-primary",
    };
    
    // Ensure all buttons meet 44px minimum touch target height
    const sizes = {
      sm: "px-4 py-2.5 text-sm min-h-[44px]",
      md: "px-6 py-3 text-base min-h-[44px]",
      lg: "px-8 py-4 text-lg font-bold min-h-[56px]",
      xl: "px-8 md:px-10 py-4 md:py-5 text-lg md:text-xl font-bold rounded-full min-h-[60px]",
    };

    const combinedClassName = cn(
      "inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background active:scale-95 touch-manipulation",
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      if (href.startsWith('/')) {
        return (
          <Link href={href} className={combinedClassName} {...(props as any)}>
            {props.children}
          </Link>
        );
      }
      return (
        <a href={href} className={combinedClassName} {...(props as any)}>
          {props.children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={combinedClassName}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
