"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Bot, ArrowRight, MessageCircle, Brain, Cpu, Blocks, ChartBar, Workflow, Shield, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface CustomOrderDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CustomOrderDialog({ isOpen, onClose }: CustomOrderDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requirements: "",
    serviceType: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Implement form submission logic
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulated delay
    
    setIsSubmitting(false);
    onClose();
    setFormData({ name: "", email: "", requirements: "", serviceType: "" });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/20 via-fuchsia-500/20 to-pink-500/20 opacity-10 pointer-events-none" />
        
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
            Custom AI Solution
          </DialogTitle>
          <DialogDescription className="text-zinc-400">
            Tell us about your project requirements and we'll help you build the perfect AI solution.
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
              <Label htmlFor="serviceType" className="text-sm font-medium text-zinc-200">
                Service Type
              </Label>
              <select
                id="serviceType"
                value={formData.serviceType}
                onChange={(e) => setFormData(prev => ({ ...prev, serviceType: e.target.value }))}
                className="w-full bg-zinc-900/80 border-zinc-800 focus:border-violet-500 focus:ring-violet-500/20 rounded-lg px-4 py-2.5 text-sm text-zinc-200"
                required
              >
                <option value="" disabled>Select a service type</option>
                <option value="consulting">AI Consulting</option>
                <option value="ml">Machine Learning</option>
                <option value="nlp">Natural Language</option>
                <option value="vision">Computer Vision</option>
                <option value="custom">Custom Solution</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements" className="text-sm font-medium text-zinc-200">
                Project Requirements
              </Label>
              <Textarea
                id="requirements"
                value={formData.requirements}
                onChange={(e) => setFormData(prev => ({ ...prev, requirements: e.target.value }))}
                placeholder="Describe your project requirements..."
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