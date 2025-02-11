import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(
        // Base styles
        "group relative inline-flex h-11 items-center justify-center gap-2 rounded-xl px-8 text-sm font-medium",
        // Border styles based on variant
        variant === "black" ? 
          "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-[hsl(var(--color-1))] before:via-[hsl(var(--color-3))] before:to-[hsl(var(--color-5))]" :
          "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-[hsl(var(--color-1))] before:via-[hsl(var(--color-3))] before:to-[hsl(var(--color-5))]",
        "after:absolute after:inset-[2px] after:rounded-[10px]",
        // Variant specific styles
        variant === "black" ? 
          "after:bg-black text-white" : 
          "after:bg-white text-black",
        className
      )}
      {...props}
    >
      <motion.span 
        className="relative z-10 flex items-center gap-2"
        whileHover={{ x: 2 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
} 