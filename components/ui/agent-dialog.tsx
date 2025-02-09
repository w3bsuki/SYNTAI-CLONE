import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Bot, Check, ArrowRight, Zap, Code, Lock, Sparkles } from "lucide-react";
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

  // Define color schemes based on agent name
  const colorScheme = agent.name === "AIDO" 
    ? "from-red-500 via-red-600 to-red-700"
    : agent.name === "AIDY"
    ? "from-blue-500 via-cyan-500 to-indigo-500"
    : "from-emerald-500 via-green-500 to-teal-500";

  // Define text colors
  const textColor = agent.name === "AIDO" 
    ? "text-red-500"
    : agent.name === "AIDY"
    ? "text-blue-500"
    : "text-emerald-500";

  // Define border colors
  const borderColor = agent.name === "AIDO" 
    ? "border-red-500/30"
    : agent.name === "AIDY"
    ? "border-blue-500/30"
    : "border-emerald-500/30";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-black/90 border-zinc-800/50 p-6 gap-0 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-80" />
        <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme} opacity-[0.07]`} />
        
        {/* Glowing Border Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme} opacity-90`}>
          <div className="absolute inset-[1px] bg-black" />
        </div>

        {/* Header */}
        <DialogHeader className="relative pb-5 mb-6 border-b border-zinc-800/50">
          <div className="flex flex-col items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
            >
              {/* Glowing circle behind icon */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r ${colorScheme} opacity-30`} />
              
              {/* Icon wrapper */}
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme} opacity-20`} />
                <div className="absolute inset-[1px] bg-black rounded-lg" />
                {Icon && <Icon className={`relative z-10 h-6 w-6 ${textColor}`} />}
              </div>
            </motion.div>
            <div className="flex flex-col items-center text-center">
              <DialogTitle className={`text-xl font-bold bg-gradient-to-r ${colorScheme} bg-clip-text text-transparent`}>
                {agent.name}
              </DialogTitle>
              <DialogDescription className="text-sm text-zinc-400 mt-1.5 max-w-sm">
                {agent.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Main Content */}
        <div className="relative space-y-6">
          {/* Features */}
          <div className="space-y-3">
            <h4 className={`text-sm font-medium ${textColor}`}>Key Features</h4>
            <div className="grid gap-2">
              {agent.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.01 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-center px-3 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className={`relative z-10 flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-b ${colorScheme} p-[1px]`}>
                    <div className="w-full h-full rounded-md bg-black flex items-center justify-center">
                      <Bot className={`h-3.5 w-3.5 ${textColor}`} />
                    </div>
                  </div>
                  <span className="relative z-10 text-xs font-medium text-zinc-300 ml-2.5">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div className="space-y-3">
            <h4 className={`text-sm font-medium ${textColor}`}>Capabilities</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: Zap, text: "Real-time processing" },
                { icon: Code, text: "API Integration" },
                { icon: Lock, text: "Enterprise security" },
                { icon: Sparkles, text: "Advanced AI models" }
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.01 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <item.icon className={`h-3.5 w-3.5 ${textColor} shrink-0`} />
                  <span className="text-xs text-zinc-300">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative mt-6 pt-5 border-t border-zinc-800/50">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full overflow-hidden rounded-lg"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${colorScheme}`} />
            <div className="relative flex items-center justify-center gap-2 px-4 py-2">
              <span className="text-xs font-semibold text-white">
                Start Integration
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>
          </motion.button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 