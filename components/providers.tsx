"use client";

import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  // Initialize smooth scroll
  useSmoothScroll();
  
  // Initialize scroll animations
  useScrollAnimation();

  return <>{children}</>;
} 