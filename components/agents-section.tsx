"use client";

import * as React from "react";
import { Brain, Bot, Shield, Rocket, Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { StatusBadge } from "@/components/ui/status-badge";
import { Typewriter } from "@/components/ui/typewriter";
import HeroBadge from "@/components/ui/hero-badge";
import { Badge } from "@/components/ui/badge";
import { AgentDialog } from "@/components/ui/agent-dialog";
import { cn } from "@/lib/utils";
import { ChatInput, ChatInputTextArea, ChatInputSubmit } from "@/components/ui/chat-input";
import { getGeminiResponse } from "@/lib/gemini";

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
    description: "Data & Administration",
    icon: Bot,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Real-time Analytics",
      "Automated Workflows",
      "Smart Data Processing",
      "Intelligent Insights"
    ],
    status: {
      leftIcon: Shield,
      rightIcon: Rocket,
      leftLabel: "Enterprise",
      rightLabel: "Ready",
      status: "success" as const,
      color: "blue"
    },
    buttonText: "Explore AIDO"
  },
  {
    name: "AIDY",
    description: "Customer Support",
    icon: Bot,
    gradient: "from-violet-500 to-purple-500",
    features: [
      "Natural Conversations",
      "Context Awareness",
      "Multilingual Support",
      "Proactive Assistance"
    ],
    status: {
      leftIcon: Clock,
      rightIcon: Rocket,
      leftLabel: "24/7",
      rightLabel: "Active",
      status: "success" as const,
      color: "violet"
    },
    buttonText: "Explore AIDY"
  },
  {
    name: "AIDR",
    description: "Fullstack Agent",
    icon: Bot,
    gradient: "from-orange-500 to-pink-500",
    features: [
      "Market Intelligence",
      "Predictive Insights",
      "Strategic Planning",
      "Risk Analysis"
    ],
    status: {
      leftIcon: Shield,
      rightIcon: Rocket,
      leftLabel: "Business",
      rightLabel: "Ready",
      status: "success" as const,
      color: "orange"
    },
    buttonText: "Explore AIDR"
  }
];

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface GeminiResponse {
  success: boolean;
  data: string;
  error?: string;
}

export default function AgentsSection() {
  const [selectedAgent, setSelectedAgent] = React.useState<typeof agents[0] | null>(null);
  const [inputValue, setInputValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm your AI assistant. How can I help you today?",
    },
  ]);
  
  const handleSubmit = async () => {
    if (!inputValue.trim() || isLoading) return;
    
    // Add user message
    const userMessage: Message = { role: "user", content: inputValue.trim() };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    
    try {
      const response = await getGeminiResponse(userMessage.content) as GeminiResponse;
      const assistantMessage: Message = {
        role: "assistant",
        content: response.success 
          ? response.data 
          : `I apologize, but I couldn't process your request. ${response.error || "Please try again."}`,
      };
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Failed to get AI response:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "I apologize, but something went wrong. Please try again.",
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="agents" className="relative overflow-hidden bg-black py-16 sm:py-24 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.5),rgba(0,0,0,1))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

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
                  text={["AI Agents", "Meet AIDR", "Meet AIDY", "Meet AIDO"]}
                  speed={100}
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
            Experience the future of AI with our specialized agents, each engineered to deliver unparalleled performance and intelligence for your business needs.
          </p>
        </motion.div>

        {/* Agents Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto place-items-center"
        >
          {agents.map((agent) => {
            // Define color schemes for each agent
            const colorScheme = agent.name === "AIDO" 
              ? "from-red-500 via-red-600 to-red-700"
              : agent.name === "AIDY"
              ? "from-blue-500 via-cyan-500 to-indigo-500"
              : "from-emerald-500 via-green-500 to-teal-500";

            // Define solid colors for each agent
            const solidColor = agent.name === "AIDO" 
              ? "red-500"
              : agent.name === "AIDY"
              ? "blue-500"
              : "emerald-500";

            // Define button text color
            const buttonTextColor = agent.name === "AIDO" 
              ? "text-red-500"
              : agent.name === "AIDY"
              ? "text-blue-500"
              : "text-emerald-500";

            // Define border color
            const borderColor = agent.name === "AIDO" 
              ? "border-red-500/30"
              : agent.name === "AIDY"
              ? "border-blue-500/30"
              : "border-emerald-500/30";

            return (
              <motion.div
                key={agent.name}
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                className="group relative w-full max-w-sm"
                style={{ backfaceVisibility: 'hidden' }}
              >
                {/* Card Container */}
                <div className="relative flex flex-col h-full overflow-hidden rounded-2xl bg-black/80">
                  {/* Background Elements */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-80" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme} opacity-[0.07]`} />
                  
                  {/* Spotlight Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_50%)]" />
                  
                  {/* Glowing Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme} opacity-90`}>
                    <div className="absolute inset-[1px] rounded-2xl bg-black" />
                  </div>

                  {/* Card Content */}
                  <div className="relative flex flex-col items-center justify-between p-6 h-full">
                    <div className="flex flex-col items-center w-full">
                      {/* Icon Container */}
                      <motion.div
                        variants={iconVariants}
                        initial="initial"
                        whileHover="hover"
                        className="relative"
                      >
                        {/* Glowing circle behind icon */}
                        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r ${colorScheme} opacity-30 rounded-full blur-sm`} />
                        
                        {/* Icon wrapper */}
                        <div className="relative flex items-center justify-center w-12 h-12 rounded-xl overflow-hidden">
                          <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme} opacity-20`} />
                          <div className="absolute inset-[1px] bg-black rounded-lg" />
                          <agent.icon className={`relative z-10 h-6 w-6 ${buttonTextColor}`} />
                        </div>
                      </motion.div>

                      {/* Status Badge */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4"
                      >
                        <div className="relative flex items-center gap-2 px-3 py-1 rounded-full">
                          <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme} opacity-10 rounded-full`} />
                          <div className="absolute inset-[1px] bg-black rounded-full" />
                          <div className="relative z-10 flex items-center gap-1.5">
                            <span className="relative flex h-1.5 w-1.5">
                              <span className={`absolute inline-flex h-full w-full rounded-full ${agent.name === "AIDO" ? "bg-red-500" : agent.name === "AIDY" ? "bg-blue-500" : "bg-emerald-500"} opacity-75 animate-ping`} />
                              <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${agent.name === "AIDO" ? "bg-red-500" : agent.name === "AIDY" ? "bg-blue-500" : "bg-emerald-500"}`} />
                            </span>
                            <span className={`text-xs font-medium ${buttonTextColor}`}>Online</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Title & Description */}
                      <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className={`mt-4 text-xl font-bold bg-gradient-to-r ${colorScheme} bg-clip-text text-transparent`}
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        {agent.name}
                      </motion.h3>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-1.5 text-xs text-zinc-400"
                      >
                        {agent.description}
                      </motion.p>

                      {/* Features Grid */}
                      <div className="mt-6 grid grid-cols-1 gap-2 w-full">
                        {agent.features.map((feature, index) => (
                          <motion.div 
                            key={feature}
                            whileHover={{ scale: 1.01 }}
                            className="relative flex items-center px-3 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50"
                            style={{ backfaceVisibility: 'hidden' }}
                          >
                            {/* Feature Content */}
                            <div className={`relative z-10 flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-b ${colorScheme} p-[1px]`}>
                              <div className="w-full h-full rounded-md bg-black flex items-center justify-center">
                                <Bot className={`h-3.5 w-3.5 ${buttonTextColor}`} />
                              </div>
                            </div>
                            <span className="relative z-10 text-xs font-medium text-zinc-300 ml-2.5">
                              {feature}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-6 w-full">
                      <motion.button
                        onClick={() => setSelectedAgent(agent)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative w-full overflow-hidden rounded-lg"
                        style={{ backfaceVisibility: 'hidden' }}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme}`} />
                        <div className="relative flex items-center justify-center gap-2 px-4 py-2">
                          <span className="text-xs font-semibold text-white">
                            {agent.buttonText}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-white" />
                        </div>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Chat Input Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 max-w-2xl mx-auto"
        >
          <div className="text-center mb-6">
            <p className="text-zinc-400 text-sm">Have questions? Our AI agents are here to help.</p>
          </div>
          
          <div className="relative">
            {/* Display Messages */}
            <div className="mb-4 space-y-4 max-h-[400px] overflow-y-auto p-4 rounded-lg bg-black/50 border border-zinc-800/50">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex gap-2 p-2 rounded-lg",
                    message.role === "assistant" ? "bg-zinc-900/50" : "bg-blue-900/20"
                  )}
                >
                  <span 
                    className={cn(
                      "shrink-0 w-6 h-6 rounded-full bg-gradient-to-r flex items-center justify-center text-xs font-medium text-white",
                      message.role === "assistant" 
                        ? "from-violet-500 to-purple-500" 
                        : "from-blue-500 to-cyan-500"
                    )}
                  >
                    {message.role === "assistant" ? "AI" : "U"}
                  </span>
                  <p className="text-sm text-zinc-300">{message.content}</p>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-2 p-2 rounded-lg bg-zinc-900/50">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 flex items-center justify-center text-xs font-medium text-white">
                    AI
                  </span>
                  <p className="text-sm text-zinc-300">Thinking...</p>
                </div>
              )}
            </div>

            {/* Chat Input */}
            <ChatInput
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onSubmit={handleSubmit}
              loading={isLoading}
              className="bg-black/80 backdrop-blur-sm border border-zinc-800/50 hover:border-blue-500/20 transition-colors rounded-xl overflow-hidden"
            >
              <ChatInputTextArea 
                placeholder="Ask anything about our AI agents..." 
                className="min-h-[60px] text-zinc-300 placeholder:text-zinc-600 bg-transparent focus:outline-none resize-none px-4 py-3"
                disabled={isLoading}
              />
              <div className="px-2 pb-2">
                <ChatInputSubmit 
                  className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 text-white hover:opacity-90 transition-opacity"
                  loading={isLoading}
                />
              </div>
            </ChatInput>
          </div>
        </motion.div>
      </div>

      {/* Agent Dialog */}
      {selectedAgent && (
        <AgentDialog
          isOpen={!!selectedAgent}
          onClose={() => setSelectedAgent(null)}
          agent={{
            name: selectedAgent.name,
            description: selectedAgent.description,
            gradient: selectedAgent.gradient,
            features: selectedAgent.features,
            icon: selectedAgent.icon
          }}
        />
      )}
    </section>
  );
}