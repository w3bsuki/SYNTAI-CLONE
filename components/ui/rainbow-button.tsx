import React from "react";
import { cn } from "@/lib/utils";

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "black" | "white";
}

export function RainbowButton({
  children,
  className,
  variant = "black",
  ...props
}: RainbowButtonProps) {
  return (
    <button
      className={cn(
        // Base styles
        "group relative inline-flex h-11 items-center justify-center gap-2 rounded-xl px-8 text-sm font-medium transition-all",
        // Border styles based on variant
        variant === "black" ? 
          "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-[hsl(var(--color-1))] before:via-[hsl(var(--color-3))] before:to-[hsl(var(--color-5))]" :
          "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-[hsl(var(--color-1))] before:via-[hsl(var(--color-3))] before:to-[hsl(var(--color-5))]",
        "after:absolute after:inset-[2px] after:rounded-[10px]",
        // Hover effect
        variant === "black" ? "hover:before:opacity-90" : "hover:before:opacity-90",
        // Variant specific styles
        variant === "black" ? 
          "after:bg-black text-white" : 
          "after:bg-white text-black",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </button>
  );
} 