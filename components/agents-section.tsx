"use client";

import { Brain, Bot, Shield, Rocket, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { StatusBadge } from "@/components/ui/status-badge";
import { Typewriter } from "@/components/ui/typewriter";
import HeroBadge from "@/components/ui/hero-badge";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { AgentDialog } from "@/components/ui/agent-dialog";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.05, 
    rotate: 8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

const featureVariants = {
  initial: { 
    opacity: 0.9,
    backgroundColor: "rgba(24, 24, 27, 0.5)",
    borderColor: "rgba(39, 39, 42, 0.5)"
  },
  hover: { 
    opacity: 1,
    backgroundColor: "rgba(24, 24, 27, 0.8)",
    borderColor: "rgba(59, 130, 246, 0.2)",
    transition: {
      type: "tween",
      duration: 0.2
    }
  }
};

const agents = [
  {
    name: "AIDO",
    description: "Data Processing AI",
    icon: Bot,
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
    name: "AIDY",
    description: "Customer Service AI",
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
    },
    buttonText: "Explore Aidy"
  },
  {
    name: "AIDR",
    description: "Business Intelligence AI",
    icon: Bot,
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
  const [selectedAgent, setSelectedAgent] = useState<typeof agents[0] | null>(null);
  
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[90%] sm:max-w-2xl text-center mb-12 sm:mb-16 md:mb-24"
        >
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
        </motion.div>

        {/* Agents Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {agents.map((agent) => (
            <motion.div
              key={agent.name}
              variants={cardVariants}
              whileHover={{ scale: 1.01 }}
              className="group relative"
            >
              <div className={`relative flex flex-col items-center text-center h-full overflow-hidden rounded-2xl border bg-zinc-900/50 p-8 ${
                agent.gradient.includes("blue") ? "border-blue-500/20" :
                agent.gradient.includes("violet") ? "border-violet-500/20" :
                "border-orange-500/20"
              }`}>
                {/* Gradient Overlay */}
                <motion.div 
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 0.7 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-900/50 pointer-events-none`} 
                />
                
                {/* Icon */}
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  className={`relative inline-flex h-16 w-16 items-center justify-center rounded-2xl border ${
                    agent.gradient.includes("blue") ? "border-blue-500/20" :
                    agent.gradient.includes("violet") ? "border-violet-500/20" :
                    "border-orange-500/20"
                  } bg-zinc-900`}
                >
                  <div className={`absolute inset-0 rounded-2xl opacity-20 bg-gradient-to-br ${agent.gradient}`} />
                  <agent.icon className={`relative z-10 h-8 w-8 ${
                    agent.gradient.includes("blue") ? "text-blue-400" :
                    agent.gradient.includes("violet") ? "text-violet-400" :
                    "text-orange-400"
                  }`} />
                </motion.div>

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6"
                >
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-sm font-medium text-emerald-500">Available</span>
                  </div>
                </motion.div>

                {/* Title & Description */}
                <motion.h3 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6 text-xl font-semibold text-white"
                >
                  {agent.name}
                </motion.h3>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-2 text-sm text-zinc-400"
                >
                  {agent.description}
                </motion.p>

                {/* Features Grid */}
                <div className="mt-8 grid grid-cols-1 gap-3 w-full">
                  {agent.features.map((feature, index) => (
                    <motion.div 
                      key={feature}
                      variants={featureVariants}
                      initial="initial"
                      whileHover="hover"
                      className={`flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border 
                        border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm`}
                    >
                      <Bot className={`h-4 w-4 shrink-0 ${
                        agent.gradient.includes("blue") ? "text-blue-500" :
                        agent.gradient.includes("violet") ? "text-violet-500" :
                        "text-orange-500"
                      }`} />
                      <span className="text-sm font-medium text-zinc-300">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="mt-8 w-full">
                  <motion.button
                    onClick={() => setSelectedAgent(agent)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      w-full h-11 px-4 rounded-xl
                      bg-zinc-900 
                      border text-sm font-medium text-white
                      relative overflow-hidden
                      ${
                        agent.gradient.includes("blue") ? "border-blue-500/20" :
                        agent.gradient.includes("violet") ? "border-violet-500/20" :
                        "border-orange-500/20"
                      }
                    `}
                  >
                    <motion.div 
                      initial={{ opacity: 0.1 }}
                      whileHover={{ opacity: 0.2 }}
                      className={`absolute inset-0 bg-gradient-to-r ${agent.gradient}`} 
                    />
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      {agent.buttonText}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Agent Dialog */}
      {selectedAgent && (
        <AgentDialog
          isOpen={!!selectedAgent}
          onClose={() => setSelectedAgent(null)}
          agent={selectedAgent}
        />
      )}
    </section>
  );
}