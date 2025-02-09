"use client";

import { Bot, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";
import { Typewriter } from "@/components/ui/typewriter";

export default function Hero() {
  const aiTypes = [
    "Government AI",
    "Business AI",
    "Industry AI"
  ];

  return (
    <div className="relative min-h-[85vh] w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient and grid */}
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.5),rgba(0,0,0,1))]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-[1400px] mx-auto">
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
              <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-tight">
                <span className="block text-white">Power</span>
                <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
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
              <button
                onClick={() => window.location.href = '#contact'}
                className="relative z-10 px-6 h-10 text-sm font-medium text-black rounded-lg bg-white hover:bg-zinc-200 transition-colors duration-200"
              >
                Book a Demo →
              </button>
              <button
                onClick={() => window.location.href = '#services'}
                className="relative z-10 px-6 h-10 text-sm font-medium text-white rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 transition-all duration-200"
              >
                Build AI →
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 -z-10 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}

