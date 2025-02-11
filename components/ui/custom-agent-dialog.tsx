"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Bot, ArrowRight, MessageCircle, Brain, Cpu, Blocks, ChartBar, Workflow, Shield, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface CustomAgentDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CustomAgentDialog({ isOpen, onClose }: CustomAgentDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requirements: "",
    agentType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement form submission logic
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated delay
    
    setIsSubmitting(false);
    onClose();
    setFormData({ name: "", email: "", requirements: "", agentType: "" });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 via-fuchsia-500/20 to-pink-500/20 opacity-10 pointer-events-none" />
        
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
            Custom AI Agent
          </DialogTitle>
          <DialogDescription className="text-zinc-400">
            Tell us about your AI agent requirements and we'll help you build the perfect intelligent assistant.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-zinc-200">
                Name
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Enter your name"
                required
                className="w-full bg-zinc-900/80 border-zinc-800 focus:border-violet-500 focus:ring-violet-500/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-zinc-200">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="Enter your email"
                required
                className="w-full bg-zinc-900/80 border-zinc-800 focus:border-violet-500 focus:ring-violet-500/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="agentType" className="text-sm font-medium text-zinc-200">
                Preferred Agent Type
              </Label>
              <select
                id="agentType"
                value={formData.agentType}
                onChange={(e) => setFormData(prev => ({ ...prev, agentType: e.target.value }))}
                className="w-full bg-zinc-900/80 border-zinc-800 focus:border-violet-500 focus:ring-violet-500/20 rounded-lg px-4 py-2.5 text-sm text-zinc-200"
                required
              >
                <option value="" disabled>Select an agent type</option>
                <option value="data">Data & Administration (AIDO)</option>
                <option value="support">Customer Support (AIDY)</option>
                <option value="fullstack">Fullstack Agent (AIDR)</option>
                <option value="custom">Custom Agent</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements" className="text-sm font-medium text-zinc-200">
                Agent Requirements
              </Label>
              <Textarea
                id="requirements"
                value={formData.requirements}
                onChange={(e) => setFormData(prev => ({ ...prev, requirements: e.target.value }))}
                placeholder="Describe your AI agent requirements and use cases..."
                required
                className="w-full min-h-[120px] bg-zinc-900/80 border-zinc-800 focus:border-violet-500 focus:ring-violet-500/20"
              />
            </div>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                Submit Request
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </>
            )}
          </motion.button>
        </form>
      </DialogContent>
    </Dialog>
  );
} 