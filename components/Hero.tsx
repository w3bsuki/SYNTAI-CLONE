"use client";

import { StatusBadge } from "@/components/ui/status-badge";
import { Bot, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient and grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.5),rgba(0,0,0,1))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8"
          >
            <StatusBadge
              leftIcon={Bot}
              rightIcon={ArrowRight}
              leftLabel="Agents"
              rightLabel="Solutions"
              status="success"
              color="blue"
              className="bg-zinc-900/80 backdrop-blur-sm border-zinc-800/50"
            />
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
              <span className="bg-gradient-to-r from-violet-500 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
                Government AI
              </span>
              <span className="block text-white">With Your Data</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mt-6"
          >
            Make the best models with the best data. Scale Data Engine powers nearly every major foundation model, and with Scale GenAI Platform, leverages your enterprise data to unlock the value of AI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 mt-8"
          >
            <button
              onClick={() => window.location.href = '#contact'}
              className="px-6 h-10 text-sm font-medium text-black rounded-lg bg-white hover:bg-zinc-200 transition-colors duration-200"
            >
              Book a Demo →
            </button>
            <button
              onClick={() => window.location.href = '#services'}
              className="px-6 h-10 text-sm font-medium text-white rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 transition-all duration-200"
            >
              Build AI →
            </button>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-zinc-500 text-sm mt-8"
          >
            Scale works with Generative AI Companies, U.S. Government Agencies & Enterprises
          </motion.p>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}

