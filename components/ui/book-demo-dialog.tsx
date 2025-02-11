"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

interface BookDemoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookDemoDialog({ isOpen, onClose }: BookDemoDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black/95 border-zinc-800/50 w-[95%] max-w-lg p-4 sm:p-6 gap-4">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-lg sm:text-xl text-white">
            Book a Demo
          </DialogTitle>
          <DialogDescription className="text-sm text-zinc-400 [text-shadow:_0_1px_2px_rgb(0_0_0_/_60%)]">
            Schedule a personalized demo with our AI experts.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-2 sm:py-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="name" className="text-xs sm:text-sm text-zinc-200">Name</Label>
              <Input 
                id="name" 
                placeholder="Enter your name" 
                className="h-8 sm:h-10 text-sm bg-zinc-900/80 border-zinc-800 text-zinc-200" 
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs sm:text-sm text-zinc-200">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Enter your email" 
                className="h-8 sm:h-10 text-sm bg-zinc-900/80 border-zinc-800 text-zinc-200" 
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <Label htmlFor="date" className="text-xs sm:text-sm text-zinc-200">Preferred Date</Label>
              <div className="relative">
                <Input 
                  id="date" 
                  type="date" 
                  className="h-8 sm:h-10 text-sm bg-zinc-900/80 border-zinc-800 text-zinc-200 pl-9" 
                />
                <Calendar className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="time" className="text-xs sm:text-sm text-zinc-200">Preferred Time</Label>
              <div className="relative">
                <Input 
                  id="time" 
                  type="time" 
                  className="h-8 sm:h-10 text-sm bg-zinc-900/80 border-zinc-800 text-zinc-200 pl-9" 
                />
                <Clock className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="message" className="text-xs sm:text-sm text-zinc-200">Message</Label>
            <Textarea 
              id="message" 
              placeholder="Tell us about your needs..." 
              className="min-h-[60px] sm:min-h-[80px] text-sm bg-zinc-900/80 border-zinc-800 text-zinc-200" 
            />
          </div>
        </div>

        <DialogFooter className="sm:justify-between">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="w-full sm:w-auto bg-zinc-900 text-zinc-400 border-zinc-800 hover:bg-zinc-900/80"
          >
            Cancel
          </Button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full sm:w-auto px-4 py-2 rounded-lg flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 text-white hover:opacity-90 transition-all"
          >
            <span className="text-sm font-medium">Book Demo</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 