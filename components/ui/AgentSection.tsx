"use client";

import { useState } from "react";
import { Brain, Cpu, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SplineScene } from "@/components/ui/spline-scene";
import { Card } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { TextShimmer } from "@/components/ui/text-shimmer";

const agents = [
  {
    name: "Aidr",
    tagline: "All In One Agent",
    description:
      "Aidr is a versatile AI Agent designed to streamline and automate complex business operations. Powered by n8n automation workflows and advanced AI capabilities, Aidr acts as a ChatGPT-like operator, but specifically tailored for business needs.",
    icon: Brain,
    demoLink: "#agent-showcase",
    scene: "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode",
    gradient: "bg-gradient-to-r from-red-400 to-rose-500"
  },
  {
    name: "Aidy",
    tagline: "Customer Service Agent",
    description:
      "Aidy is a dedicated AI Customer Support Agent, designed specifically for industries requiring efficient dispatch and customer interaction. Initially targeting Taxi and Transportation companies, Aidy handles customer inquiries, dispatch requests, and communication seamlessly through phone and text.",
    icon: MessageCircle,
    demoLink: "#agent-showcase",
    scene: "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode",
    gradient: "bg-gradient-to-r from-green-400 to-emerald-500"
  },
  {
    name: "Aido",
    tagline: "Business Assistant Agent",
    description:
      "Aido is a cost-effective AI Agent designed to boost internal business efficiency by automating routine administrative and task-oriented functions. Aido acts as a smart assistant for daily operations, freeing up human employees for more strategic work.",
    icon: Cpu,
    demoLink: "#agent-showcase",
    scene: "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode",
    gradient: "bg-gradient-to-r from-yellow-400 to-amber-500"
  },
];

export default function AgentSection() {
  const [activeAgent, setActiveAgent] = useState(agents[0].name);
  const currentAgent = agents.find((agent) => agent.name === activeAgent)!;

  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <Badge variant="outline" className="bg-black text-zinc-300 border-zinc-800">
            Our AI Agents
          </Badge>
          <TextShimmer 
            as="h2" 
            className="max-w-2xl text-4xl font-bold bg-gradient-to-b from-white to-white/80"
            duration={3}
          >
            Meet Our AI Agents
          </TextShimmer>
          <p className="text-zinc-400 max-w-2xl">
            Discover our specialized AI agents designed to revolutionize different aspects of your business operations.
          </p>
        </div>

        <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden border-zinc-800">
          <div className="flex flex-col h-full">
            {/* Centered tab buttons */}
            <div className="w-full bg-zinc-900/50 rounded-lg p-1 mb-8">
              <div className="flex justify-center">
                {agents.map((agent) => (
                  <button
                    key={agent.name}
                    onClick={() => setActiveAgent(agent.name)}
                    className={`flex items-center gap-3 rounded-md px-6 py-3 text-base font-light tracking-wider transition-all duration-300
                      ${activeAgent === agent.name 
                        ? "bg-zinc-800/80 text-zinc-100 shadow-lg shadow-black/20" 
                        : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800/30"
                      }`}
                  >
                    <agent.icon className={`h-5 w-5 transition-colors duration-300 ${
                      activeAgent === agent.name 
                        ? "text-zinc-100" 
                        : "text-zinc-600"
                    }`} />
                    <span className={`bg-clip-text text-transparent ${agent.gradient}`}>
                      {agent.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Content area */}
            <div className="flex flex-1">
              {/* Left content */}
              <div className="flex-1 px-12 relative z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeAgent}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col justify-center h-full max-w-xl"
                  >
                    <h3 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-6">
                      {currentAgent.tagline}
                    </h3>
                    <p className="text-neutral-300 text-lg leading-relaxed">
                      {currentAgent.description}
                    </p>
                    <Button
                      className="mt-10 w-fit bg-zinc-100 text-zinc-900 hover:bg-zinc-200 hover:text-zinc-900 transition-colors"
                      size="lg"
                      asChild
                    >
                      <a href={currentAgent.demoLink}>
                        See {currentAgent.name} in Action
                      </a>
                    </Button>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right content - Spline scene (stays mounted) */}
              <div className="flex-1 relative">
                <SplineScene 
                  scene={agents[0].scene}
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
