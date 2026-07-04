import * as React from "react";
import { cn } from "@/lib/utils/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent-green" | "accent-blue";
  size?: "sm" | "md" | "lg" | "xl";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-primary text-white hover:bg-primary/90 shadow-[0_4px_14px_0_rgba(124,58,237,0.39)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.23)] hover:-translate-y-0.5",
      secondary: "bg-secondary text-text-dark hover:bg-secondary/90 shadow-[0_4px_14px_0_rgba(251,191,36,0.39)] hover:-translate-y-0.5",
      "accent-green": "bg-accent-green text-white hover:bg-accent-green/90 shadow-sm hover:-translate-y-0.5",
      "accent-blue": "bg-accent-blue text-white hover:bg-accent-blue/90 shadow-sm hover:-translate-y-0.5",
      outline: "border-2 border-primary/20 text-primary hover:border-primary hover:bg-primary/5",
      ghost: "hover:bg-primary/10 text-primary",
    };
    
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg font-bold",
      xl: "px-10 py-5 text-xl font-bold rounded-full",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background active:scale-95",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
