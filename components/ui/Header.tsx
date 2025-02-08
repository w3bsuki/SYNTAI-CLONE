"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigationItems = [
  { name: "SOLUTIONS", href: "#solutions" },
  { name: "AGENTS", href: "#agents" },
  { name: "ABOUT", href: "#about" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1a1a1a] bg-black">
      <div className="mx-auto max-w-[1400px] px-6">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl font-semibold text-white">SYNTAI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <ButtonColorful
              onClick={() => window.location.href = '#contact'}
              label="Contact Us"
              className="rounded-full border-0"
            />
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full border-l border-[#1a1a1a] bg-black px-6 py-8"
              >
                <div className="flex flex-col space-y-6">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg text-zinc-400 hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <ButtonColorful
                    onClick={() => {
                      window.location.href = '#contact';
                      setIsOpen(false);
                    }}
                    label="Contact Us"
                    className="mt-4 rounded-full border-0"
                  />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
} 