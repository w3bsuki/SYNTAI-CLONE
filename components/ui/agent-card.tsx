"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { Brain, MessageCircle, Bot, CheckCircle2 } from "lucide-react";
import { Particles } from "@/components/ui/particle-effects";

interface AgentCardProps {
  name: string;
  description: string;
  icon: "aidr" | "aigy" | "aido";
  className?: string;
}

const agentIcons = {
  aidr: Brain,
  aigy: MessageCircle,
  aido: Bot,
};

const agentDetails = {
  aidr: {
    title: "All In One Agent",
    capabilities: [
      "Workflow Automation",
      "Data Analysis & Reporting",
      "Task Management",
      "Custom Integrations"
    ],
    gradient: "from-indigo-500 via-purple-500 to-pink-500"
  },
  aigy: {
    title: "Customer Service Agent",
    capabilities: [
      "24/7 Customer Support",
      "Multi-channel Communication",
      "Automated Inquiry Handling",
      "Intelligent Responses"
    ],
    gradient: "from-blue-500 via-cyan-400 to-teal-500"
  },
  aido: {
    title: "Business Assistant Agent",
    capabilities: [
      "Document Processing",
      "Data Organization",
      "Workflow Automation",
      "Task Coordination"
    ],
    gradient: "from-rose-500 via-red-400 to-orange-500"
  }
};

export function AgentCard({ name, description, icon, className }: AgentCardProps) {
  const Icon = agentIcons[icon];
  const details = agentDetails[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("w-full h-full", className)}
    >
      <Card className="group relative h-full overflow-hidden border-zinc-800 bg-zinc-900/50 p-6 flex flex-col">
        {/* Particle effects */}
        <Particles
          className="absolute inset-0 -z-10"
          quantity={20}
          staticity={50}
          color="#3b82f6"
        />

        {/* Icon Animation */}
        <div className="mb-6 flex justify-center">
          <motion.div 
            className="relative flex h-24 w-24 items-center justify-center"
            animate={{ 
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Gradient rings */}
            <div className={cn(
              "absolute inset-0 rounded-full opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r",
              details.gradient
            )} />
            <div className={cn(
              "absolute inset-2 rounded-full opacity-20 blur-lg group-hover:opacity-30 transition-opacity duration-500 bg-gradient-to-r",
              details.gradient
            )} />
            
            {/* Icon container */}
            <div className={cn(
              "relative flex h-16 w-16 items-center justify-center rounded-full p-0.5 bg-gradient-to-br",
              details.gradient
            )}>
              <div className="flex h-full w-full items-center justify-center rounded-full bg-zinc-900">
                <Icon className="h-8 w-8 text-white" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4 text-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
            <p className={cn(
              "text-sm font-medium bg-gradient-to-r bg-clip-text text-transparent",
              details.gradient
            )}>{details.title}</p>
          </div>
          <p className="text-zinc-400 text-sm">{description}</p>
          
          {/* Capabilities */}
          <div className="mt-6 space-y-2">
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Capabilities</p>
            <div className="space-y-2">
              {details.capabilities.map((capability, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-center gap-2 text-sm text-zinc-300"
                >
                  <CheckCircle2 className="h-4 w-4 text-zinc-500" />
                  <span>{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6">
          <ButtonColorful
            label="See in Action"
            onClick={() => {}}
            className={cn(
              "w-full hover:scale-105 transition-transform duration-200",
              "before:absolute before:inset-0 before:bg-gradient-to-r",
              details.gradient
            )}
          />
        </div>
      </Card>
    </motion.div>
  );
} 