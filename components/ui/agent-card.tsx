"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { Brain, MessageCircle, Bot, CheckCircle2, Boxes, MessagesSquare, BarChart3 } from "lucide-react";
import { Particles } from "@/components/ui/particle-effects";
import { Badge } from "@/components/ui/badge";

interface AgentCardProps {
  name: string;
  description: string;
  icon: "aidr" | "aigy" | "aido";
  className?: string;
}

const agentIcons = {
  aidr: BarChart3,
  aigy: MessagesSquare,
  aido: Boxes,
};

const agentDetails = {
  aidr: {
    title: "Advanced Analytics and Predictions",
    poweredBy: "Powered by Aidr",
    capabilities: [
      "Workflow Automation",
      "Data Analysis & Reporting",
      "Task Management",
      "Custom Integrations"
    ],
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    buttonText: "Explore Aidr",
    status: "Business Ready"
  },
  aigy: {
    title: "24/7 Phone & Text Service",
    poweredBy: "Powered by Aidy",
    capabilities: [
      "24/7 Customer Support",
      "Multi-channel Communication",
      "Automated Inquiry Handling",
      "Intelligent Responses"
    ],
    gradient: "from-blue-500 via-cyan-400 to-teal-500",
    buttonText: "Explore Aidy",
    status: "24/7 Ready"
  },
  aido: {
    title: "Automate complex data processes",
    poweredBy: "Powered by Aido",
    capabilities: [
      "Document Processing",
      "Data Organization",
      "Workflow Automation",
      "Task Coordination"
    ],
    gradient: "from-rose-500 via-red-400 to-orange-500",
    buttonText: "Explore Aido",
    status: "Enterprise Ready"
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

        {/* Status Badge - Moved above icon */}
        <div className="mb-4 flex justify-center">
          <Badge 
            variant="outline" 
            className="bg-zinc-900/80 backdrop-blur-sm border-zinc-800 text-zinc-300 py-1 px-3"
          >
            {details.status}
          </Badge>
        </div>

        {/* Icon Animation */}
        <div className="mb-2 flex flex-col items-center">
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
            <div className="flex flex-wrap justify-center gap-2">
              {details.capabilities.map((capability, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="bg-zinc-900/80 backdrop-blur-sm border-zinc-800 text-zinc-300"
                >
                  {capability}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6">
          <ButtonColorful
            label={details.buttonText}
            onClick={() => {}}
            className={cn(
              "w-full hover:scale-105 transition-transform duration-200",
              "before:absolute before:inset-0 before:bg-gradient-to-r",
              details.gradient
            )}
          />
        </div>

        {/* Powered by text */}
        <p className="text-sm text-zinc-500 mt-4 opacity-80">
          {details.poweredBy}
        </p>
      </Card>
    </motion.div>
  );
} 