"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigationItems = [
  { name: "SOLUTIONS", href: "#services" },
  { name: "AGENTS", href: "#agents" },
  { name: "ABOUT", href: "#about" },
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
        isScrolled ? "bg-black border-b border-zinc-800/50" : "bg-black"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex h-16 items-center justify-between max-w-[1400px] mx-auto">
          {/* Logo */}
          <div className="flex-1 basis-0">
            <Link 
              href="/" 
              className="flex items-center"
            >
              <span className="text-lg font-bold tracking-tight text-white">
                SYNTAI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-12">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-200",
                  "hover:text-white",
                  activeSection === item.href.substring(1) ? "text-white" : "text-zinc-300"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Book a Demo Button */}
          <div className="hidden md:flex items-center justify-end flex-1 basis-0">
            <Button
              onClick={() => window.location.href = '#contact'}
              className="text-sm font-medium text-white bg-transparent hover:bg-zinc-800 border border-zinc-800 px-4 h-8 rounded-lg transition-all duration-200"
            >
              Book a Demo
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative text-zinc-400 hover:text-white"
                >
                  {isOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full border-l border-zinc-800/50 bg-black px-6 py-8"
              >
                <div className="flex flex-col space-y-6">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg text-zinc-300 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button
                    onClick={() => {
                      window.location.href = '#contact';
                      setIsOpen(false);
                    }}
                    className="text-sm font-medium text-white bg-transparent hover:bg-zinc-800 border border-zinc-800 px-4 h-8 rounded-lg transition-all duration-200"
                  >
                    Book a Demo
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
} 