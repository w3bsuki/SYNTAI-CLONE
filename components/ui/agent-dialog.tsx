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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-zinc-950/70 border-zinc-800/50 p-6 gap-0 backdrop-blur-xl">
        <DialogHeader className="pb-5 mb-6 border-b border-zinc-800/50">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`relative rounded-xl p-2.5 overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-20`} />
                {Icon && <Icon className="relative z-10 h-5 w-5 text-white" />}
              </div>
              <div className="flex-1">
                <DialogTitle className="text-xl font-semibold bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
                  {agent.name}
                </DialogTitle>
                <DialogDescription className="text-sm text-zinc-400 mt-1.5 line-clamp-2">
                  {agent.description}
                </DialogDescription>
              </div>
            </div>
            <Badge variant="outline" className="h-6 shrink-0 px-2.5 py-0.5 border-zinc-800/50 text-zinc-400">
              Enterprise
            </Badge>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-6">
          {/* Left Column - Features */}
          <div className="space-y-5">
            <div>
              <h4 className="text-sm font-medium bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent mb-4">Key Features</h4>
              <div className="space-y-3">
                {agent.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex gap-3.5 p-3.5 rounded-lg bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-900/70 hover:border-zinc-700/50 transition-all duration-200"
                  >
                    <div className={`relative shrink-0 rounded-full p-2 overflow-hidden`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-200`} />
                      <Bot className="relative z-10 h-4 w-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors duration-200">{feature}</h5>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Capabilities & Status */}
          <div className="space-y-5">
            {/* Capabilities */}
            <div>
              <h4 className="text-sm font-medium bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent mb-4">Capabilities</h4>
              <div className="space-y-3 bg-zinc-900/50 rounded-lg p-4 border border-zinc-800/50">
                <div className="grid gap-3">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-3 group"
                  >
                    <Zap className="h-4 w-4 text-blue-500/70 group-hover:text-blue-500 transition-colors duration-200 shrink-0" />
                    <span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors duration-200 leading-relaxed">Real-time processing</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <Code className="h-4 w-4 text-emerald-500/70 group-hover:text-emerald-500 transition-colors duration-200 shrink-0" />
                    <span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors duration-200 leading-relaxed">API Integration</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 group"
                  >
                    <Lock className="h-4 w-4 text-violet-500/70 group-hover:text-violet-500 transition-colors duration-200 shrink-0" />
                    <span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors duration-200 leading-relaxed">Enterprise security</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-3 group"
                  >
                    <Sparkles className="h-4 w-4 text-orange-500/70 group-hover:text-orange-500 transition-colors duration-200 shrink-0" />
                    <span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors duration-200 leading-relaxed">Advanced AI models</span>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="rounded-lg border border-zinc-800/50 bg-zinc-900/50 p-4">
              <h4 className="text-sm font-medium bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent mb-4">Status</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 group">
                  <div className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </div>
                  <span className="text-xs text-emerald-500 font-medium">Online</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Check className="h-3 w-3 text-emerald-500/70 group-hover:text-emerald-500 transition-colors duration-200 shrink-0" />
                  <span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors duration-200 leading-relaxed">99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Check className="h-3 w-3 text-emerald-500/70 group-hover:text-emerald-500 transition-colors duration-200 shrink-0" />
                  <span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors duration-200 leading-relaxed">24/7 Availability</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Check className="h-3 w-3 text-emerald-500/70 group-hover:text-emerald-500 transition-colors duration-200 shrink-0" />
                  <span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors duration-200 leading-relaxed">Real-time Updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 pt-5 border-t border-zinc-800/50">
          <button className={`
            w-full h-11 px-4 rounded-lg
            bg-zinc-900/50 
            border text-sm font-medium text-white
            relative overflow-hidden group
            transition-all duration-200
            hover:border-opacity-50
            ${agent.gradient.includes("blue") ? "border-blue-500/20 hover:border-blue-500/30" :
              agent.gradient.includes("violet") ? "border-violet-500/20 hover:border-violet-500/30" :
              "border-orange-500/20 hover:border-orange-500/30"
            }
          `}>
            <motion.div 
              initial={{ opacity: 0.1 }}
              whileHover={{ opacity: 0.15 }}
              transition={{ duration: 0.2 }}
              className={`absolute inset-0 bg-gradient-to-br ${agent.gradient}`} 
            />
            <div className="relative z-10 flex items-center justify-center gap-2">
              Start Integration
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 