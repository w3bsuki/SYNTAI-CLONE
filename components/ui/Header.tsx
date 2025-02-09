"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { RainbowButton } from "@/components/ui/rainbow-button";

const buttonVariants = {
  initial: { 
    scale: 1,
    backgroundColor: "rgb(255, 255, 255)"
  },
  hover: { 
    scale: 1.01,
    backgroundColor: "rgb(255, 255, 255, 0.9)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  },
  tap: {
    scale: 0.98
  }
};

const arrowVariants = {
  initial: { x: 0 },
  hover: { 
    x: 4,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }
};

interface NavigationItem {
  name: string;
  href: string;
  isHighlighted?: boolean;
}

const navigationItems: NavigationItem[] = [
  { name: "Solutions", href: "#services" },
  { name: "Agents", href: "#agents", isHighlighted: true },
  { name: "About", href: "#why-choose-us" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle intersection observer for active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    navigationItems.forEach((item) => {
      const element = document.querySelector(item.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "border-b border-zinc-800/50 bg-black/50 backdrop-blur-lg",
        isScrolled && "bg-black/80"
      )}
    >
      <div className="relative mx-auto w-full">
        <div className="mx-auto max-w-[1400px] px-6">
          <nav className="flex h-24 items-center">
            <div className="flex w-full items-center justify-between gap-8">
              {/* Logo - Left */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex w-[180px]"
              >
                <Link 
                  href="/" 
                  className="flex items-center gap-2 group"
                >
                  <span className="text-2xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-zinc-300">
                    Synt AI
                  </span>
                </Link>
              </motion.div>

              {/* Navigation - Center */}
              <div className="hidden flex-1 md:flex items-center justify-center">
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-20"
                >
                  {navigationItems.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          "group relative py-2",
                          "text-[15px] font-medium tracking-wide transition-all duration-200",
                          item.isHighlighted 
                            ? "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent hover:opacity-80" 
                            : "text-zinc-300 hover:text-white",
                          activeSection === item.href.substring(1) && "text-white"
                        )}
                      >
                        {item.name}
                        <span className={cn(
                          "absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent",
                          "opacity-0 transition-all duration-300 group-hover:opacity-100",
                          activeSection === item.href.substring(1) && "opacity-100"
                        )} />
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* CTA Button - Right */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex w-[180px] justify-end"
              >
                <div className="hidden md:block">
                  <Link href="/#contact">
                    <RainbowButton className="flex items-center gap-2">
                      <span className="relative z-10">Contact Us</span>
                      <ArrowRight className="relative z-10 w-4 h-4" />
                    </RainbowButton>
                  </Link>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(!isOpen)}
                  className="inline-flex items-center justify-center p-2.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors md:hidden"
                >
                  {isOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </motion.button>
              </motion.div>
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-zinc-800/50 md:hidden"
          >
            <div className="mx-auto max-w-[1400px] px-6">
              <div className="py-8">
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
                  className="flex flex-col gap-6"
                >
                  {navigationItems.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "text-base font-medium tracking-wide transition-colors duration-200 py-2",
                          item.isHighlighted 
                            ? "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent hover:opacity-80" 
                            : "text-zinc-300 hover:text-white"
                        )}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <Link href="/#contact" onClick={() => setIsOpen(false)}>
                    <RainbowButton className="flex w-full items-center justify-center gap-2">
                      <span className="relative z-10">Contact Us</span>
                      <ArrowRight className="relative z-10 w-4 h-4" />
                    </RainbowButton>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
} 