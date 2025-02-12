"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
  once?: boolean;
}

export function ScrollReveal({ 
  children, 
  direction = "up", 
  delay = 0, 
  className = "",
  once = true
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once,
    margin: "-20% 0px -20% 0px", // Trigger earlier on mobile
    amount: 0.3 // Only need 30% of element to be visible
  });

  const directionOffset = {
    up: { y: 30 }, // Reduced from 50 for mobile
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 }
  };

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        ...directionOffset[direction]
      }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : directionOffset[direction]?.y,
        x: isInView ? 0 : directionOffset[direction]?.x
      }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 