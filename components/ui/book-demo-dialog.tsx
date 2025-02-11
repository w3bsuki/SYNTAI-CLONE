"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowRight, Loader2, Check, Sparkles } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface BookDemoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookDemoDialog({ isOpen, onClose }: BookDemoDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
      <DialogContent className="bg-black/95 border-zinc-800/50 w-[95%] max-w-[340px] sm:max-w-md p-4 sm:p-6 gap-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-cyan-400/10 to-blue-600/10 opacity-20 pointer-events-none" />
        
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-base sm:text-lg font-semibold bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent inline-flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-black/40">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
            </div>
            Book a Demo
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-zinc-400 [text-shadow:_0_1px_2px_rgb(0_0_0_/_60%)]">
            Schedule a personalized demo with our AI experts.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="grid gap-4 py-2">
          {/* Contact Details */}
          <div className="grid gap-3 sm:gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-xs sm:text-sm text-zinc-200">Name</Label>
              <Input 
                id="name" 
                placeholder="Enter your name" 
                className="h-8 sm:h-9 text-xs sm:text-sm bg-zinc-900/80 border-zinc-800 text-zinc-200 focus:ring-2 focus:ring-blue-500/20 transition-all" 
                required
                disabled={isSubmitting || submitted}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs sm:text-sm text-zinc-200">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email" 
                className="h-8 sm:h-9 text-xs sm:text-sm bg-zinc-900/80 border-zinc-800 text-zinc-200 focus:ring-2 focus:ring-blue-500/20 transition-all" 
                required
                disabled={isSubmitting || submitted}
              />
            </div>
          </div>

          {/* Date & Time Selection */}
          <div className="grid gap-3 sm:gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="date" className="text-xs sm:text-sm text-zinc-200">Preferred Date</Label>
              <div className="relative">
                <Input 
                  id="date" 
                  type="date" 
                  className="h-8 sm:h-9 text-xs sm:text-sm bg-zinc-900/80 border-zinc-800 text-zinc-200 focus:ring-2 focus:ring-blue-500/20 transition-all pl-9" 
                  required
                  disabled={isSubmitting || submitted}
                />
                <Calendar className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="time" className="text-xs sm:text-sm text-zinc-200">Preferred Time</Label>
              <div className="relative">
                <Input 
                  id="time" 
                  type="time" 
                  className="h-8 sm:h-9 text-xs sm:text-sm bg-zinc-900/80 border-zinc-800 text-zinc-200 focus:ring-2 focus:ring-blue-500/20 transition-all pl-9" 
                  required
                  disabled={isSubmitting || submitted}
                />
                <Clock className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-zinc-400" />
              </div>
            </div>
          </div>

          <DialogFooter className="flex sm:justify-between gap-2 sm:gap-4 mt-2">
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
                  <span className="text-xs sm:text-sm font-medium">Demo Scheduled!</span>
                </motion.div>
              ) : (
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "w-full sm:w-auto h-8 sm:h-9 px-3 sm:px-4 rounded-lg flex items-center justify-center gap-2",
                    "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600",
                    "text-white hover:opacity-90 transition-all disabled:opacity-50"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin" />
                      <span className="text-xs sm:text-sm font-medium">Scheduling...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-xs sm:text-sm font-medium">Schedule Demo</span>
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
            <span className="font-medium bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
              SyntAI
            </span>
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
} 