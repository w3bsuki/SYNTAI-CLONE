"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, ArrowRight, Loader2, Check, Sparkles, Code, Cpu, Brain, Zap, Workflow } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface BuildAiDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BuildAiDialog({ isOpen, onClose }: BuildAiDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedType, setSelectedType] = useState<string>("");

  const aiTypes = [
    {
      id: "aido",
      title: "AIDO",
      subtitle: "Data Intelligence",
      description: "Optimize data workflows & analytics",
      features: ["Data Analysis", "ML Models", "Insights"],
      gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
      icon: Brain
    },
    {
      id: "aidy",
      title: "AIDY",
      subtitle: "Development Assistant",
      description: "Full-stack development & automation",
      features: ["Code Generation", "Testing", "DevOps"],
      gradient: "from-blue-500 via-cyan-400 to-blue-600",
      icon: Code
    },
    {
      id: "aidr",
      title: "AIDR",
      subtitle: "Process Automation",
      description: "Streamline business workflows",
      features: ["Automation", "Integration", "Scaling"],
      gradient: "from-emerald-500 via-green-500 to-teal-500",
      icon: Workflow
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Close after showing success state
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black/95 border-zinc-800/50 w-[95%] max-w-[340px] sm:max-w-md md:max-w-lg p-3 sm:p-4 md:p-6 gap-3 sm:gap-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-fuchsia-500/10 to-pink-500/10 opacity-20 pointer-events-none" />
        
        <DialogHeader className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          <DialogTitle className="text-sm sm:text-base md:text-lg font-semibold bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent inline-flex items-center gap-2">
            <div className="p-1 sm:p-1.5 rounded-lg bg-black/40">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-fuchsia-500" />
            </div>
            Build Your AI Solution
          </DialogTitle>
          <DialogDescription className="text-[11px] sm:text-xs md:text-sm text-zinc-400 [text-shadow:_0_1px_2px_rgb(0_0_0_/_60%)]">
            Select an agent and tell us about your project requirements.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-6 sm:gap-8">
          {/* AI Type Selection */}
          <div className="space-y-4 sm:space-y-5">
            <div className="space-y-2 sm:space-y-3">
              <Label className="text-[11px] sm:text-xs md:text-sm text-zinc-200">Select Your Agent</Label>
              <div className="grid gap-2 sm:gap-3">
                {aiTypes.map((type) => (
                  <motion.button
                    key={type.id}
                    type="button"
                    onClick={() => setSelectedType(type.id)}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={cn(
                      "relative flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg text-left transition-all overflow-hidden",
                      "border border-zinc-800 hover:border-zinc-700",
                      selectedType === type.id
                        ? `bg-gradient-to-r ${type.gradient} text-white`
                        : "bg-zinc-900/80 text-zinc-400 hover:text-zinc-300"
                    )}
                  >
                    {/* Background Effects */}
                    {selectedType === type.id && (
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_107%,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.05)_5%,rgba(255,255,255,0)_45%)]" />
                    )}

                    {/* Icon */}
                    <div className={cn(
                      "shrink-0 p-2 rounded-lg transition-colors",
                      selectedType === type.id 
                        ? "bg-white/10 backdrop-blur-sm"
                        : "bg-black/40"
                    )}>
                      <type.icon className="w-4 h-4" />
                    </div>

                    {/* Content */}
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <span className="text-xs sm:text-sm font-semibold">{type.title}</span>
                        <span className={cn(
                          "text-[9px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full",
                          selectedType === type.id
                            ? "bg-white/20 text-white"
                            : "bg-zinc-800 text-zinc-400"
                        )}>
                          {type.subtitle}
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-[11px] opacity-90 truncate">{type.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {type.features.map((feature, index) => (
                          <span
                            key={index}
                            className={cn(
                              "text-[8px] sm:text-[10px] px-1 sm:px-1.5 py-0.5 rounded-full",
                              selectedType === type.id
                                ? "bg-black/20 text-white/90"
                                : "bg-zinc-800/50 text-zinc-400"
                            )}
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Selection Indicator */}
                    {selectedType === type.id && (
                      <div className="absolute top-2 right-2">
                        <Zap className="w-3 h-3 text-white" />
                      </div>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Details */}
          <div className="grid gap-4 sm:gap-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-xs sm:text-sm text-zinc-200">Name</Label>
              <Input 
                id="name" 
                placeholder="Enter your name" 
                className="h-9 sm:h-10 text-xs sm:text-sm bg-zinc-900/80 border-zinc-800 text-zinc-200 focus:ring-2 focus:ring-fuchsia-500/20 transition-all" 
                required
                disabled={isSubmitting || submitted}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-xs sm:text-sm text-zinc-200">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email" 
                className="h-9 sm:h-10 text-xs sm:text-sm bg-zinc-900/80 border-zinc-800 text-zinc-200 focus:ring-2 focus:ring-fuchsia-500/20 transition-all" 
                required
                disabled={isSubmitting || submitted}
              />
            </div>
          </div>

          {/* Project Requirements */}
          <div className="space-y-2">
            <Label htmlFor="requirements" className="text-xs sm:text-sm text-zinc-200">Project Requirements</Label>
            <Textarea 
              id="requirements" 
              placeholder="Tell us about your project requirements..." 
              className="min-h-[80px] sm:min-h-[100px] text-xs sm:text-sm bg-zinc-900/80 border-zinc-800 text-zinc-200 focus:ring-2 focus:ring-fuchsia-500/20 transition-all resize-none" 
              required
              disabled={isSubmitting || submitted}
            />
          </div>

          <DialogFooter className="flex sm:justify-between gap-3 sm:gap-4 mt-4 sm:mt-6">
            <Button 
              type="button"
              variant="outline" 
              onClick={onClose}
              className="w-full sm:w-auto h-8 sm:h-9 text-xs sm:text-sm bg-zinc-900 text-zinc-400 border-zinc-800 hover:bg-zinc-900/80 transition-all"
              disabled={isSubmitting || submitted}
            >
              Cancel
            </Button>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="w-full sm:w-auto h-8 sm:h-9 px-3 sm:px-4 rounded-lg flex items-center justify-center gap-2 bg-emerald-500 text-white"
                >
                  <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">Request Submitted!</span>
                </motion.div>
              ) : (
                <motion.button
                  type="submit"
                  disabled={isSubmitting || !selectedType}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "w-full sm:w-auto h-8 sm:h-9 px-3 sm:px-4 rounded-lg flex items-center justify-center gap-2",
                    "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500",
                    "text-white hover:opacity-90 transition-all disabled:opacity-50"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin" />
                      <span className="text-xs sm:text-sm font-medium">Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-xs sm:text-sm font-medium">Start Building</span>
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </>
                  )}
                </motion.button>
              )}
            </AnimatePresence>
          </DialogFooter>
        </form>

        {/* Powered by SyntAI */}
        <div className="absolute bottom-0 left-0 right-0 p-2 flex justify-center">
          <span className="text-[10px] text-zinc-500">
            Powered by{" "}
            <span className="font-medium bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              SyntAI
            </span>
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
} 