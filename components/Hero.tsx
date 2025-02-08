"use client";

import { StatusBadge } from "@/components/ui/status-badge";
import { Sparkles, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient and grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.5),rgba(0,0,0,1))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <StatusBadge
              leftIcon={Sparkles}
              rightIcon={ArrowRight}
              leftLabel="Transform"
              rightLabel="Business"
              status="success"
              color="blue"
              className="bg-zinc-900/80 backdrop-blur-sm border-zinc-800/50"
            />
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-medium tracking-tight">
              <span className="block text-white">
                AI-Powered Solutions for
              </span>
              <span className="block mt-1 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
                Modern Enterprise
              </span>
            </h1>

            <p className="mt-6 text-xl text-zinc-400 max-w-3xl mx-auto">
              Leverage cutting-edge artificial intelligence to automate workflows, enhance decision-making, 
              and drive unprecedented business growth.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
            <button
              onClick={() => window.location.href = '#contact'}
              className="w-full sm:w-1/2 h-12 text-base font-medium text-white rounded-lg bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 hover:opacity-90 transition-opacity duration-200"
            >
              Get Started
            </button>
            <button
              onClick={() => window.location.href = '#demo'}
              className="w-full sm:w-1/2 h-12 text-base font-medium text-white rounded-lg border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 transition-all duration-200"
            >
              Request Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 mt-12 border-t border-zinc-800">
            {[
              { value: "99.9%", label: "Accuracy Rate" },
              { value: "24/7", label: "Operation Time" },
              { value: "500+", label: "Enterprises Served" },
              { value: "10x", label: "Efficiency Boost" },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
              >
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-zinc-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}

