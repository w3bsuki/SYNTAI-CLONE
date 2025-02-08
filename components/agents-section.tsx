"use client";

import { Brain, Bot, Sparkles, Cpu, Shield, Rocket, Clock } from "lucide-react";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { StatusBadge } from "@/components/ui/status-badge";

const agents = [
  {
    name: "Data Processing AI",
    description: "Automate complex data processing workflows with intelligent document understanding and extraction capabilities.",
    icon: Brain,
    gradient: "from-blue-500 to-cyan-500",
    features: ["Document Analysis", "Data Extraction", "Automated Processing", "Format Conversion"],
    status: {
      leftIcon: Shield,
      rightIcon: Rocket,
      leftLabel: "Enterprise",
      rightLabel: "Ready",
      status: "success" as const,
      color: "blue"
    }
  },
  {
    name: "Customer Service AI",
    description: "24/7 intelligent customer support system that handles inquiries, resolves issues, and maintains high satisfaction rates.",
    icon: Bot,
    gradient: "from-violet-500 to-purple-500",
    features: ["24/7 Support", "Multi-language", "Smart Responses", "Issue Resolution"],
    status: {
      leftIcon: Clock,
      rightIcon: Rocket,
      leftLabel: "24/7",
      rightLabel: "Active",
      status: "success" as const,
      color: "violet"
    }
  },
  {
    name: "Business Intelligence AI",
    description: "Transform raw data into actionable insights with our advanced analytics and prediction capabilities.",
    icon: Sparkles,
    gradient: "from-orange-500 to-pink-500",
    features: ["Predictive Analytics", "Market Analysis", "Trend Detection", "Report Generation"],
    status: {
      leftIcon: Shield,
      rightIcon: Rocket,
      leftLabel: "Business",
      rightLabel: "Ready",
      status: "success" as const,
      color: "orange"
    }
  }
];

export default function AgentsSection() {
  return (
    <section id="agents" className="relative overflow-hidden bg-black py-16 sm:py-24 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.5),rgba(0,0,0,1))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-[90%] sm:max-w-2xl text-center mb-12 sm:mb-16 md:mb-24">
          <div className="inline-flex h-8 items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-4 backdrop-blur-sm">
            <span className="text-sm text-zinc-400">
              Intelligent AI Agents
            </span>
          </div>

          <h2 className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white">
            Powerful AI Agents for Every
            <span className="block mt-1 bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 bg-clip-text text-transparent">
              Business Need
            </span>
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-zinc-400 max-w-[90%] mx-auto">
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
              <div className="relative flex flex-col items-center text-center h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 hover:bg-zinc-900/80 transition-all duration-300">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-900/50 pointer-events-none`} />
                
                {/* Status Badge */}
                <div className="mb-4 sm:mb-6">
                  <StatusBadge {...agent.status} className="bg-zinc-900/80 backdrop-blur-sm border-zinc-800/50" />
                </div>

                {/* Icon */}
                <div className={`relative inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${agent.gradient} p-[1px] group-hover:scale-110 transition-transform duration-300`}>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/0 opacity-50" />
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-zinc-900">
                    <agent.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-white">
                  {agent.name}
                </h3>
                <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-zinc-400 max-w-[90%] mx-auto">
                  {agent.description}
                </p>

                {/* Features */}
                <div className="mt-5 sm:mt-6 space-y-2 w-full">
                  {agent.features.map((feature) => (
                    <div 
                      key={feature} 
                      className="flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-900 hover:border-zinc-700/50 transition-colors duration-200"
                    >
                      <Cpu className={`h-3.5 w-3.5 shrink-0 ${
                        agent.gradient.includes("blue") ? "text-blue-500" :
                        agent.gradient.includes("violet") ? "text-violet-500" :
                        "text-orange-500"
                      }`} />
                      <span className="text-sm font-medium text-zinc-300">{feature}</span>
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
                      border border-zinc-800
                      text-sm font-medium text-white
                      transition-all duration-300
                      relative
                      overflow-hidden
                      group/btn
                      hover:border-zinc-700
                      hover:scale-[1.02]
                      hover:shadow-xl hover:shadow-zinc-950
                    `}
                  >
                    <div className={`absolute inset-0 w-full h-full transition-all duration-300 opacity-0 group-hover/btn:opacity-20 bg-gradient-to-r ${agent.gradient}`} />
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      Learn More
                      <Rocket className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 