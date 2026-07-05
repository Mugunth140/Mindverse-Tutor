import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("container mx-auto px-4 sm:px-8 lg:px-16", className)}>
      {children}
    </div>
  );
}
