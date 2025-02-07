"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroBadge from "@/components/ui/hero-badge";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Business AI", "Enterprise AI", "Industry AI", "Consumer AI"],
    []
  );

  const gradients = useMemo(
    () => [
      "bg-gradient-to-r from-blue-300 to-indigo-400", // Business AI - Professional & Corporate
      "bg-gradient-to-r from-emerald-300 to-teal-400", // Enterprise AI - Growth & Success
      "bg-gradient-to-r from-purple-300 to-pink-400", // Industry AI - Innovation & Technology
      "bg-gradient-to-r from-amber-300 to-orange-400", // Consumer AI - Friendly & Accessible
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8 pt-16">
          {/* Badge */}
          <div className="mb-2">
            <HeroBadge
              text="Next-Gen AI Solutions"
              variant="outline"
              size="md"
              icon={<Brain className="h-5 w-5" />}
            />
          </div>

          {/* Hero Text */}
          <div className="flex flex-col items-center space-y-6">
            <h1 className="text-5xl md:text-7xl max-w-3xl tracking-tight text-center font-medium text-zinc-100">
              <span>Empowering</span>{" "}
              <span className="relative flex w-full justify-center overflow-hidden text-center">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className={`absolute font-bold ${gradients[index]} bg-clip-text text-transparent`}
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-zinc-400 max-w-2xl text-center">
              Transforming businesses with cutting-edge AI solutions that drive innovation and growth
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-zinc-300 text-zinc-900 hover:bg-zinc-100 hover:text-zinc-900 transition-all duration-200 hover:scale-105 hover:shadow-md min-w-[200px]" 
              asChild
            >
              <Link href="#services">
                Explore AI Agents
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-700 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-900 hover:text-zinc-100 transition-all duration-200 hover:scale-105 hover:shadow-md min-w-[200px]"
              asChild
            >
              <Link href="#contact">
                Book a Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero };