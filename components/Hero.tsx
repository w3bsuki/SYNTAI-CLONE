"use client";

import { Bot, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Typewriter } from "@/components/ui/typewriter";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { BookDemoDialog } from "@/components/ui/book-demo-dialog";

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

export default function Hero() {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  
  const aiTypes = [
    { prefix: "Business", suffix: " AI", prefixColor: "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent", suffixColor: "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent" },
    { prefix: "Enterprise", suffix: " AI", prefixColor: "bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent", suffixColor: "bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent" },
    { prefix: "Government", suffix: " AI", prefixColor: "bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent", suffixColor: "bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent" }
  ];

  return (
    <div className="relative w-full bg-black overflow-hidden">
      {/* Background gradient and grid */}
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.5),rgba(0,0,0,1))]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Content */}
      <div className="relative mx-auto w-full">
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="flex min-h-[85vh] flex-col items-center justify-center py-24">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Online Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center"
              >
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/20">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-sm font-medium text-emerald-500">Available Now</span>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-4xl mx-auto space-y-4"
              >
                <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1]">
                  <span className="block text-white">Power</span>
                  <span>
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
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto"
              >
                Make the best models with the best data. Scale Data Engine powers nearly every major foundation model, and with Scale GenAI Platform, leverages your enterprise data to unlock the value of AI.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-3 pt-2"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="w-[200px]"
                >
                  <RainbowButton
                    onClick={() => setIsBookDemoOpen(true)}
                    variant="black"
                    className="w-full"
                  >
                    <span>Book a Demo</span>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </RainbowButton>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="w-[200px]"
                >
                  <RainbowButton
                    onClick={() => window.location.href = '#services'}
                    variant="white"
                    className="w-full"
                  >
                    <span>Build AI</span>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </RainbowButton>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 -z-10 bg-gradient-to-t from-black to-transparent" />

      {/* Book Demo Dialog */}
      <BookDemoDialog 
        isOpen={isBookDemoOpen}
        onClose={() => setIsBookDemoOpen(false)}
      />
    </div>
  );
}

