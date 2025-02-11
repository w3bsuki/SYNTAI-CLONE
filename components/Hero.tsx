"use client";

import { Bot, ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Typewriter } from "@/components/ui/typewriter";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { BookDemoDialog } from "@/components/ui/book-demo-dialog";
import { Announcement } from "@/components/ui/announcement";

interface TypewriterItem {
  prefix: string;
  suffix: string;
  prefixColor: string;
  suffixColor: string;
}

export default function Hero() {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  
  const aiTypes: TypewriterItem[] = [
    { prefix: "Government", suffix: "", prefixColor: "bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent", suffixColor: "" },
    { prefix: "Business", suffix: "", prefixColor: "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent", suffixColor: "" },
    { prefix: "Enterprise", suffix: "", prefixColor: "bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent", suffixColor: "" }
  ];

  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.5),rgba(0,0,0,1))]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Content Container */}
      <div className="container relative mx-auto flex flex-col items-center min-h-[calc(100vh-80px)] pt-32">
        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center justify-center w-full max-w-[90rem] mx-auto px-4">
          {/* Top Announcement */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <Announcement 
              className="cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-transform" 
              onClick={() => window.location.href = '#agents'}
            >
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-blue-600/10 border border-blue-500/20">
                <span className="text-[13px] font-medium bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  Meet AIDR, our Fullstack Agent
                </span>
                <ArrowDown className="w-4 h-4 text-cyan-400" />
              </div>
            </Announcement>
          </motion.div>

          <div className="flex flex-col items-center gap-8 sm:gap-10 w-full max-w-[1200px]">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1]">
                <span className="block text-white mb-3 sm:mb-4">Power</span>
                <span className="block mb-3 sm:mb-4">
                  <Typewriter 
                    text={aiTypes}
                    speed={50}
                    waitTime={2000}
                    loop={true}
                    className="inline-block"
                    cursorClassName="text-blue-400 ml-1"
                  />
                </span>
                <span className="block text-white">With Your Data</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base sm:text-lg text-zinc-400 max-w-2xl text-center mx-auto"
            >
              Experience the next generation of AI with our specialized agents. From data analysis to 
              full-stack development, unlock unprecedented efficiency and innovation for your enterprise.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full max-w-md"
            >
              <RainbowButton
                onClick={() => setIsBookDemoOpen(true)}
                variant="black"
                className="w-full sm:w-[180px] py-3"
              >
                <span className="text-sm font-medium">Book a Demo</span>
                <ArrowRight className="w-4 h-4" />
              </RainbowButton>

              <RainbowButton
                onClick={() => window.location.href = '#services'}
                variant="white"
                className="w-full sm:w-[180px] py-3"
              >
                <span className="text-sm font-medium">Build AI</span>
                <ArrowRight className="w-4 h-4" />
              </RainbowButton>
            </motion.div>

            {/* Partnership Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="text-center"
            >
              <p className="text-xs sm:text-sm text-zinc-500">
                <span className="text-white">SyntAI</span> works with <span className="text-white">Generative AI Companies</span>, 
                <br className="hidden sm:block" />
                U.S. Government Agencies & Enterprises
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Book Demo Dialog */}
      <BookDemoDialog 
        isOpen={isBookDemoOpen}
        onClose={() => setIsBookDemoOpen(false)}
      />
    </section>
  );
}

