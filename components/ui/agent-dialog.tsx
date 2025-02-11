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
      <DialogContent className="bg-black/95 border-zinc-800/50 w-[95%] max-w-lg p-4 sm:p-6 gap-4">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-lg sm:text-xl text-white">
            {agent.name}
          </DialogTitle>
          <DialogDescription className="text-sm text-zinc-400 [text-shadow:_0_1px_1px_rgb(0_0_0_/_40%)]">
            {agent.description}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-2 sm:py-4">
          {/* Two Column Layout */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Core Features */}
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
                  >
                    <div className={`relative z-10 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-gradient-to-b ${colorScheme} p-[1px]`}>
                      <div className="w-full h-full rounded-md bg-black flex items-center justify-center">
                        <Bot className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${textColor}`} />
                      </div>
                    </div>
                    <span className="relative z-10 text-[10px] sm:text-xs font-medium text-zinc-300 ml-2 [text-shadow:_0_1px_1px_rgb(0_0_0_/_40%)]">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Capabilities */}
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
                  >
                    <div className={`relative z-10 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-gradient-to-b ${colorScheme} p-[1px]`}>
                      <div className="w-full h-full rounded-md bg-black flex items-center justify-center">
                        <item.icon className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${textColor}`} />
                      </div>
                    </div>
                    <span className="relative z-10 text-[10px] sm:text-xs font-medium text-zinc-300 ml-2 [text-shadow:_0_1px_1px_rgb(0_0_0_/_40%)]">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-2 pt-2 sm:pt-3 border-t border-zinc-800/50">
            <h4 className={`text-xs sm:text-sm font-medium ${textColor}`}>About {agent.name}</h4>
            <p className="text-[10px] sm:text-xs text-zinc-400 leading-relaxed [text-shadow:_0_1px_1px_rgb(0_0_0_/_40%)]">
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
            className={`w-full px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-white bg-gradient-to-r ${colorScheme} hover:opacity-90 transition-opacity`}
          >
            <span>Start Integration</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 