"use client";

import { Brain, Bot, Sparkles, Cpu, Shield, Rocket, Clock, ArrowRight, Boxes, MessagesSquare, BarChart3 } from "lucide-react";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { StatusBadge } from "@/components/ui/status-badge";
import { Typewriter } from "@/components/ui/typewriter";
import HeroBadge from "@/components/ui/hero-badge";
import { Badge } from "@/components/ui/badge";

const agents = [
  {
    name: "Data Processing AI",
    description: "Automate complex data processes",
    poweredBy: "Powered by Aido",
    icon: Boxes,
    gradient: "from-blue-500 to-cyan-500",
    features: ["Document Analysis", "Data Extraction", "Automated Processing", "Format Conversion"],
    status: {
      leftIcon: Shield,
      rightIcon: Rocket,
      leftLabel: "Enterprise",
      rightLabel: "Ready",
      status: "success" as const,
      color: "blue"
    },
    buttonText: "Explore Aido"
  },
  {
    name: "Customer Service AI",
    description: "24/7 Phone & Text Service",
    poweredBy: "Powered by Aidy",
    icon: MessagesSquare,
    gradient: "from-violet-500 to-purple-500",
    features: ["24/7 Support", "Multi-language", "Smart Responses", "Issue Resolution"],
    status: {
      leftIcon: Clock,
      rightIcon: Rocket,
      leftLabel: "24/7",
      rightLabel: "Active",
      status: "success" as const,
      color: "violet"
    },
    buttonText: "Explore Aidy"
  },
  {
    name: "Business Intelligence AI",
    description: "Advanced Analytics and Predictions",
    poweredBy: "Powered by Aidr",
    icon: BarChart3,
    gradient: "from-orange-500 to-pink-500",
    features: ["Predictive Analytics", "Market Analysis", "Trend Detection", "Report Generation"],
    status: {
      leftIcon: Shield,
      rightIcon: Rocket,
      leftLabel: "Business",
      rightLabel: "Ready",
      status: "success" as const,
      color: "orange"
    },
    buttonText: "Explore Aidr"
  }
];

export default function AgentsSection() {
  const agentTitles = [
    "AI Agents",
    "Meet AIDR",
    "Meet AIDY",
    "Meet AIDO"
  ];

  return (
    <section id="agents" className="relative overflow-hidden bg-black py-16 sm:py-24 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.5),rgba(0,0,0,1))]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-[90%] sm:max-w-2xl text-center mb-12 sm:mb-16 md:mb-24">
          <HeroBadge 
            text="Agents"
            variant="outline"
            icon={<Brain className="w-4 h-4" />}
          />

          <div className="mt-6 sm:mt-8 flex flex-col items-center">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-8" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                <Typewriter 
                  text={agentTitles}
                  speed={50}
                  waitTime={3000}
                  loop={true}
                  className="inline-block"
                  cursorClassName="text-blue-400 ml-1"
                />
              </span>
            </h2>
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-8" />
          </div>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-zinc-400 max-w-[90%] mx-auto">
            Our suite of specialized AI agents is designed to handle complex business tasks with unprecedented efficiency and accuracy.
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-[90%] mx-auto">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="group relative"
            >
              <div className={`relative flex flex-col items-center text-center h-full overflow-hidden rounded-2xl border bg-zinc-900/50 p-6 sm:p-8 transition-all duration-300 hover:bg-zinc-900/80 hover:scale-[1.02] hover:shadow-lg ${
                agent.gradient.includes("blue") ? "border-blue-500/20 hover:border-blue-500/30" :
                agent.gradient.includes("violet") ? "border-violet-500/20 hover:border-violet-500/30" :
                "border-orange-500/20 hover:border-orange-500/30"
              }`}>
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-900/50 pointer-events-none opacity-50 group-hover:opacity-80 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`relative inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl border transition-all duration-300 group-hover:scale-110 ${
                  agent.gradient.includes("blue") ? "border-blue-500/20 group-hover:border-blue-500/30" :
                  agent.gradient.includes("violet") ? "border-violet-500/20 group-hover:border-violet-500/30" :
                  "border-orange-500/20 group-hover:border-orange-500/30"
                } bg-zinc-900`}>
                  <div className={`absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-br ${agent.gradient}`} />
                  <agent.icon className="relative z-10 h-7 w-7 sm:h-8 sm:w-8 text-white transition-transform duration-300 group-hover:scale-110" />
                </div>

                {/* Online Badge */}
                <div className="mt-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/20">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-sm font-medium text-emerald-500">Online</span>
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-white transition-colors duration-300 group-hover:text-zinc-100">
                  {agent.name}
                </h3>

                <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-zinc-400 max-w-[90%] mx-auto transition-colors duration-300 group-hover:text-zinc-300">
                  {agent.description}
                </p>

                {/* Features */}
                <div className="mt-5 sm:mt-6 space-y-2 w-full">
                  {agent.features.map((feature) => (
                    <div 
                      key={feature} 
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl border transition-all duration-300 
                        border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm
                        group-hover:bg-zinc-900 group-hover:border-zinc-700/50
                        ${
                          agent.gradient.includes("blue") ? "hover:border-blue-500/20" :
                          agent.gradient.includes("violet") ? "hover:border-violet-500/20" :
                          "hover:border-orange-500/20"
                        }`}
                    >
                      <Cpu className={`h-3.5 w-3.5 shrink-0 transition-colors duration-300 ${
                        agent.gradient.includes("blue") ? "text-blue-500 group-hover:text-blue-400" :
                        agent.gradient.includes("violet") ? "text-violet-500 group-hover:text-violet-400" :
                        "text-orange-500 group-hover:text-orange-400"
                      }`} />
                      <span className="text-sm font-medium text-zinc-300 transition-colors duration-300 group-hover:text-zinc-200">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="mt-6 sm:mt-8 w-full">
                  <button
                    onClick={() => {}}
                    className={`
                      w-full h-10 sm:h-11 px-4 rounded-xl
                      bg-zinc-900 
                      border text-sm font-medium text-white
                      relative overflow-hidden
                      transition-all duration-300
                      hover:scale-[1.02]
                      ${
                        agent.gradient.includes("blue") ? "border-blue-500/20 hover:border-blue-500/30" :
                        agent.gradient.includes("violet") ? "border-violet-500/20 hover:border-violet-500/30" :
                        "border-orange-500/20 hover:border-orange-500/30"
                      }
                    `}
                  >
                    <div className={`absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20 bg-gradient-to-r ${agent.gradient}`} />
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      {agent.buttonText}
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </button>
                </div>

                {/* Powered by text - moved to bottom */}
                <p className="text-sm text-zinc-500 mt-4 opacity-80">
                  {agent.poweredBy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}