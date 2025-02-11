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
import { CustomAgentDialog } from "@/components/ui/custom-agent-dialog";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
  },
  hover: {
    y: -5,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }
};

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.1, 
    rotate: 8,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30
    }
  }
};

const featureVariants = {
  hidden: { 
    opacity: 0,
    x: -10,
    backgroundColor: "rgba(24, 24, 27, 0.5)",
    borderColor: "rgba(39, 39, 42, 0.5)"
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 30
    }
  },
  hover: { 
    scale: 1.02,
    backgroundColor: "rgba(24, 24, 27, 0.8)",
    borderColor: "rgba(59, 130, 246, 0.2)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }
};

const agents = [
  {
    name: "AIDO",
    description: "Data & Administration",
    icon: Bot,
    gradient: "from-blue-500 via-cyan-400 to-blue-600",
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
    gradient: "from-emerald-500 via-green-500 to-teal-500",
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
      color: "emerald"
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
      content: "Hello, I'm Aidy. How can I help you?",
    },
  ]);
  const [isCustomAgentOpen, setIsCustomAgentOpen] = React.useState(false);
  
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
    <section id="agents" className="relative overflow-hidden bg-black py-12 sm:py-16 md:py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.5),rgba(0,0,0,1))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[95%] xs:max-w-[90%] sm:max-w-2xl text-center mb-12 sm:mb-12 md:mb-16"
        >
          <HeroBadge 
            text="Agents"
            variant="outline"
            color="blue"
            icon={<Brain className="w-3 h-3 sm:w-4 sm:h-4" />}
          />

          <div className="mt-4 sm:mt-6 flex flex-col items-center">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-4 sm:mb-6" />
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
              <span>
                <Typewriter 
                  text={[
                    { prefix: "AI", suffix: " Agents", prefixColor: "text-white", suffixColor: `bg-gradient-to-r ${selectedAgent?.gradient || "from-blue-500 via-cyan-400 to-blue-600"} bg-clip-text text-transparent` },
                    { prefix: "Meet", suffix: " AIDO", prefixColor: "text-white", suffixColor: "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent" },
                    { prefix: "Meet", suffix: " AIDY", prefixColor: "text-white", suffixColor: "bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent" },
                    { prefix: "Meet", suffix: " AIDR", prefixColor: "text-white", suffixColor: "bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent" }
                  ]}
                  speed={100}
                  waitTime={3000}
                  loop={true}
                  className="inline-block"
                  cursorClassName="text-blue-400 ml-1"
                />
              </span>
            </h2>
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-4 sm:mt-6" />
          </div>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-zinc-400 max-w-[95%] mx-auto">
            Experience the future of AI with our specialized agents, each engineered to deliver unparalleled performance and intelligence for your business needs.
          </p>
        </motion.div>

        {/* Agents Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-8 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto place-items-stretch"
        >
          {agents.map((agent) => {
            // Define color schemes for each agent
            const colorScheme = agent.name === "AIDO" 
              ? "from-blue-500 via-cyan-400 to-blue-600"
              : agent.name === "AIDY"
              ? "from-emerald-500 via-green-500 to-teal-500"
              : "from-orange-500 to-pink-500";

            // Define button text color
            const buttonTextColor = agent.name === "AIDO" 
              ? "text-blue-500"
              : agent.name === "AIDY"
              ? "text-emerald-500"
              : "text-orange-500";

            return (
              <motion.div
                key={agent.name}
                variants={cardVariants}
                initial="hidden"
                animate="show"
                whileHover="hover"
                className="group relative w-full max-w-[95%] xs:max-w-sm mx-auto mb-8 sm:mb-0 cursor-pointer"
                style={{ backfaceVisibility: 'hidden' }}
                onClick={() => setSelectedAgent(agent)}
              >
                <div className="relative flex flex-col h-full overflow-hidden rounded-2xl bg-black/80">
                  {/* Background Elements */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-80 rounded-2xl" />
                  <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme} opacity-[0.07] rounded-2xl`} />
                  
                  {/* Glowing Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme} opacity-90 rounded-2xl`}>
                    <div className="absolute inset-[1px] rounded-2xl bg-black" />
                  </div>
                  
                  {/* Spotlight Effect */}
                  <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_50%)] rounded-2xl" />

                  {/* Card Content */}
                  <div className="relative z-20 flex flex-col items-center justify-center h-full p-4 sm:p-5">
                    {/* Icon Container */}
                    <motion.div 
                      className="flex justify-center mb-6"
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                    >
                      <div className="relative flex items-center justify-center w-12 h-12 rounded-lg bg-black/80 border border-zinc-800/50">
                        <agent.icon className={`w-6 h-6 ${
                          agent.name === "AIDO" ? "text-blue-500" : 
                          agent.name === "AIDY" ? "text-emerald-500" : 
                          "text-orange-500"
                        }`} />
                      </div>
                    </motion.div>

                    {/* Title & Description */}
                    <div className="flex flex-col items-center text-center mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="relative flex h-2 w-2">
                          <span className={`absolute inline-flex h-full w-full rounded-full ${
                            agent.name === "AIDO" ? "bg-blue-500" : 
                            agent.name === "AIDY" ? "bg-emerald-500" : 
                            "bg-orange-500"
                          } opacity-75 animate-ping`} />
                          <span className={`relative inline-flex rounded-full h-2 w-2 ${
                            agent.name === "AIDO" ? "bg-blue-500" : 
                            agent.name === "AIDY" ? "bg-emerald-500" : 
                            "bg-orange-500"
                          }`} />
                        </span>
                        <motion.h3
                          variants={titleVariants}
                          className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${agent.gradient} bg-clip-text text-transparent [text-shadow:_0_1px_1px_rgb(0_0_0_/_40%)]`}
                        >
                          {agent.name}
                        </motion.h3>
                      </div>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-sm text-zinc-400 font-medium [text-shadow:_0_1px_1px_rgb(0_0_0_/_40%)]"
                      >
                        {agent.description}
                      </motion.p>
                    </div>

                    {/* Features List */}
                    <div className="w-full max-w-[90%] mx-auto space-y-2.5">
                      {agent.features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          variants={featureVariants}
                          custom={index}
                          whileHover="hover"
                          className={`flex items-center gap-3 px-4 py-2.5 rounded-lg bg-black/80 border ${
                            agent.name === "AIDO" ? "border-blue-500/20" : 
                            agent.name === "AIDY" ? "border-emerald-500/20" : 
                            "border-orange-500/20"
                          }`}
                        >
                          <div className={`flex items-center justify-center w-8 h-8 rounded-lg bg-black/90 border ${
                            agent.name === "AIDO" ? "border-blue-500/20" : 
                            agent.name === "AIDY" ? "border-emerald-500/20" : 
                            "border-orange-500/20"
                          }`}>
                            <agent.icon className={`w-4 h-4 ${
                              agent.name === "AIDO" ? "text-blue-500" : 
                              agent.name === "AIDY" ? "text-emerald-500" : 
                              "text-orange-500"
                            }`} />
                          </div>
                          <span className="text-sm font-medium text-zinc-300 [text-shadow:_0_1px_1px_rgb(0_0_0_/_40%)]">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Button */}
                    <div className="mt-6 w-full max-w-[90%] mx-auto">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full px-4 py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-white bg-gradient-to-r ${agent.gradient} hover:opacity-90 transition-opacity`}
                      >
                        {agent.buttonText}
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Custom Agent Button */}
          <div className="col-span-full mt-8 sm:mt-12 flex justify-center w-full">
            <Dialog>
              <DialogTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className="relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-[hsl(var(--color-1))] before:via-[hsl(var(--color-3))] before:to-[hsl(var(--color-5))] after:absolute after:inset-[2px] after:rounded-[10px] after:bg-black"
                >
                  <span className="relative z-10 flex items-center gap-2 text-white">
                    <Bot className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      Build Custom Agent
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.button>
              </DialogTrigger>
              <DialogContent className="bg-black/95 border-zinc-800/50">
                <DialogHeader>
                  <DialogTitle className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                    Create Custom AI Agent
                  </DialogTitle>
                  <DialogDescription className="text-zinc-400">
                    Tell us about your AI agent requirements and we'll help you build the perfect intelligent assistant.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-zinc-200">Name</Label>
                    <Input id="name" placeholder="Enter your name" className="bg-zinc-900/80 border-zinc-800 text-zinc-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-zinc-200">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" className="bg-zinc-900/80 border-zinc-800 text-zinc-200" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="agent-type" className="text-zinc-200">Agent Type</Label>
                    <select
                      id="agent-type"
                      className="w-full bg-zinc-900/80 border-zinc-800 text-zinc-200 rounded-lg px-3 py-2 text-sm"
                    >
                      <option value="" disabled selected>Select agent type</option>
                      <option value="data">Data & Administration (AIDO)</option>
                      <option value="support">Customer Support (AIDY)</option>
                      <option value="fullstack">Fullstack Agent (AIDR)</option>
                      <option value="custom">Custom Agent</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="requirements" className="text-zinc-200">Agent Requirements</Label>
                    <Textarea 
                      id="requirements" 
                      placeholder="Describe your AI agent requirements..." 
                      className="bg-zinc-900/80 border-zinc-800 text-zinc-200 min-h-[120px]" 
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline" className="bg-zinc-900 text-zinc-400 border-zinc-800 hover:bg-zinc-900/80">
                      Cancel
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 text-white border-0">
                      Submit Request
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>

        {/* Chat Input Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-16 sm:mt-20 max-w-3xl mx-auto px-4 sm:px-6"
        >
          <div className="text-center mb-6">
            <h3 className="text-lg sm:text-xl font-medium text-white mb-2">Have any questions?</h3>
            <p className="text-sm text-zinc-400">
              AIDY, our customer support agent, is here to assist you 24/7
            </p>
          </div>
          
          <div className="relative">
            {/* Display Messages */}
            <div className="relative mb-4 sm:mb-5 space-y-3 max-h-[300px] sm:max-h-[400px] overflow-y-auto p-4 sm:p-5 rounded-2xl bg-black/80 border border-emerald-500/20">
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-2xl opacity-20">
                <div className="absolute inset-[1px] rounded-2xl bg-black/90" />
              </div>
              
              {/* Messages Content */}
              <div className="relative z-10">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={cn(
                      "flex gap-3 p-3 rounded-xl text-sm mb-3",
                      message.role === "assistant" ? "bg-zinc-900/50" : "bg-emerald-500/10"
                    )}
                  >
                    <div className="shrink-0">
                      <span 
                        className={cn(
                          "flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r text-xs font-medium text-white",
                          message.role === "assistant" 
                            ? "from-emerald-500 via-green-500 to-teal-500" 
                            : "from-blue-500 via-cyan-400 to-blue-600"
                        )}
                      >
                        {message.role === "assistant" ? (
                          <Bot className="h-4 w-4" />
                        ) : (
                          "You"
                        )}
                      </span>
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm text-zinc-200 leading-relaxed">{message.content}</p>
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex gap-3 p-3 rounded-xl bg-zinc-900/50"
                  >
                    <div className="shrink-0">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500">
                        <Bot className="h-4 w-4 text-white" />
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        <motion.span
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0 }}
                          className="h-2 w-2 rounded-full bg-emerald-500"
                        />
                        <motion.span
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.2 }}
                          className="h-2 w-2 rounded-full bg-emerald-500"
                        />
                        <motion.span
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity, delay: 0.4 }}
                          className="h-2 w-2 rounded-full bg-emerald-500"
                        />
                      </div>
                      <span className="text-sm text-zinc-400">Thinking...</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Chat Input */}
            <div className="relative">
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity">
                <div className="absolute inset-[1px] rounded-2xl bg-black/90" />
              </div>

              <ChatInput
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onSubmit={handleSubmit}
                loading={isLoading}
                className="relative z-10 bg-black/80 backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-emerald-500/30 focus-within:border-emerald-500/50 transition-colors"
              >
                <ChatInputTextArea 
                  placeholder="Ask AIDY anything about our AI agents..." 
                  className="min-h-[52px] sm:min-h-[60px] text-base text-zinc-200 placeholder:text-zinc-500 bg-transparent focus:outline-none resize-none px-4 py-3"
                  disabled={isLoading}
                  style={{ fontSize: '16px' }}
                />
                <div className="px-3 pb-3">
                  <ChatInputSubmit 
                    className="bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white hover:opacity-90 transition-opacity shadow-lg shadow-emerald-500/20"
                    loading={isLoading}
                  />
                </div>
              </ChatInput>
            </div>
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

      {/* Custom Agent Dialog */}
      <CustomAgentDialog
        isOpen={isCustomAgentOpen}
        onClose={() => setIsCustomAgentOpen(false)}
      />
    </section>
  );
}