import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Bot, Check, ArrowRight, Zap, Code, Lock, Sparkles, MessageCircle, Brain, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface AgentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  agent: {
    name: string;
    description: string;
    gradient: string;
    features: string[];
    icon: LucideIcon;
  };
}

export function AgentDialog({ isOpen, onClose, agent }: AgentDialogProps) {
  const Icon = agent.icon;

  // Define color based on agent name
  const colorScheme = agent.name === "AIDO" 
    ? "from-blue-500 via-cyan-400 to-blue-600"
    : agent.name === "AIDY"
    ? "from-emerald-500 via-green-500 to-teal-500"
    : "from-orange-500 to-pink-500";

  // Define text color based on agent name
  const textColor = agent.name === "AIDO" 
    ? "text-blue-500"
    : agent.name === "AIDY"
    ? "text-emerald-500"
    : "text-orange-500";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] w-[95%] xs:w-[90%] bg-black/90 border-zinc-800/50 p-3 xs:p-4 sm:p-6 gap-0 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-80" />
        <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme} opacity-[0.07]`} />
        
        {/* Glowing Border Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme} opacity-90`}>
          <div className="absolute inset-[1px] bg-black" />
        </div>

        {/* Header */}
        <DialogHeader className="relative pb-3 xs:pb-4 sm:pb-5 mb-3 sm:mb-4 border-b border-zinc-800/50">
          <div className="flex items-center gap-3 sm:gap-4">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative shrink-0"
            >
              {/* Glowing circle behind icon */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r ${colorScheme} opacity-30`} />
              
              {/* Icon wrapper */}
              <div className="relative flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme} opacity-20`} />
                <div className="absolute inset-[1px] bg-black rounded-lg" />
                {Icon && <Icon className={`relative z-10 h-5 w-5 sm:h-6 sm:w-6 ${textColor}`} />}
              </div>
            </motion.div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <DialogTitle className={`text-lg xs:text-xl font-bold bg-gradient-to-r ${colorScheme} bg-clip-text text-transparent`}>
                  {agent.name}
                </DialogTitle>
                <span className="text-xs font-mono bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold tracking-tight">
                  by SYNTAI
                </span>
              </div>
              <DialogDescription className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                {agent.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Main Content */}
        <div className="relative space-y-3 sm:space-y-4">
          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* Left Column - Core Features */}
            <div className="space-y-2">
              <h4 className={`text-xs sm:text-sm font-medium ${textColor}`}>Core Features</h4>
              <div className="grid gap-1.5 sm:gap-2">
                {agent.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className={`relative z-10 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-gradient-to-b ${colorScheme} p-[1px]`}>
                      <div className="w-full h-full rounded-md bg-black flex items-center justify-center">
                        <Bot className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${textColor}`} />
                      </div>
                    </div>
                    <span className="relative z-10 text-[10px] sm:text-xs font-medium text-zinc-300 ml-2">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Capabilities */}
            <div className="space-y-2">
              <h4 className={`text-xs sm:text-sm font-medium ${textColor}`}>Capabilities</h4>
              <div className="grid gap-1.5 sm:gap-2">
                {[
                  { icon: Brain, text: "Advanced AI Models" },
                  { icon: Cpu, text: "Real-time Processing" },
                  { icon: MessageCircle, text: "Natural Language" },
                  { icon: Lock, text: "Enterprise Security" }
                ].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className={`relative z-10 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-gradient-to-b ${colorScheme} p-[1px]`}>
                      <div className="w-full h-full rounded-md bg-black flex items-center justify-center">
                        <item.icon className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${textColor}`} />
                      </div>
                    </div>
                    <span className="relative z-10 text-[10px] sm:text-xs font-medium text-zinc-300 ml-2">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section - Description */}
          <div className="space-y-2 pt-2 sm:pt-3 border-t border-zinc-800/50">
            <h4 className={`text-xs sm:text-sm font-medium ${textColor}`}>About {agent.name}</h4>
            <p className="text-[10px] sm:text-xs text-zinc-400 leading-relaxed">
              {agent.name === "AIDO" 
                ? "AIDO is an advanced AI agent specializing in data analysis and administrative tasks. With real-time processing capabilities and enterprise-grade security, AIDO streamlines your business operations through intelligent automation and data-driven insights."
                : agent.name === "AIDY"
                ? "AIDY is your intelligent customer support assistant, providing 24/7 multilingual support with natural language understanding. Equipped with context awareness and proactive assistance capabilities, AIDY ensures exceptional customer experiences."
                : "AIDR is a versatile fullstack agent combining market intelligence with strategic planning. Leveraging predictive analytics and risk assessment capabilities, AIDR helps businesses make informed decisions and stay ahead of market trends."
              }
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="relative mt-3 sm:mt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full overflow-hidden rounded-lg"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme}`} />
            <div className="relative flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2">
              <span className="text-[10px] sm:text-xs font-semibold text-white">
                Start Integration
              </span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
            </div>
          </motion.button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 