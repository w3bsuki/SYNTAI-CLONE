"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Brain, Cpu, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface BuildAiDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BuildAiDialog({ isOpen, onClose }: BuildAiDialogProps) {
  const solutions = [
    {
      title: "AI Consulting",
      description: "Strategic AI integration and roadmaps",
      gradient: "from-emerald-500 to-green-500",
      icon: Brain,
      href: "#services"
    },
    {
      title: "Machine Learning",
      description: "Custom ML models and automation",
      gradient: "from-blue-500 via-cyan-400 to-blue-600",
      icon: Cpu,
      href: "#services"
    },
    {
      title: "Natural Language",
      description: "NLP and conversational AI",
      gradient: "from-violet-500 to-purple-500",
      icon: MessageCircle,
      href: "#services"
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-black/95 border-zinc-800/50 w-[95%] max-w-lg p-4 sm:p-6 gap-4">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-lg sm:text-xl text-white">
            Choose Your AI Solution
          </DialogTitle>
          <DialogDescription className="text-sm text-zinc-400 [text-shadow:_0_1px_2px_rgb(0_0_0_/_60%)]">
            Select the type of AI solution you want to build or connect with us directly.
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-3 py-2 sm:py-4">
          {solutions.map((solution) => (
            <motion.a
              key={solution.title}
              href={solution.href}
              onClick={onClose}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r ${solution.gradient} hover:opacity-90 transition-all text-left`}
            >
              <solution.icon className="w-5 h-5 text-white" />
              <div>
                <h4 className="text-sm font-medium text-white [text-shadow:_0_1px_2px_rgb(0_0_0_/_60%)]">{solution.title}</h4>
                <p className="text-xs text-white/80 [text-shadow:_0_1px_2px_rgb(0_0_0_/_60%)]">{solution.description}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-white ml-auto" />
            </motion.a>
          ))}
        </div>

        <div className="border-t border-zinc-800/50 pt-4">
          <a
            href="https://wa.me/your_whatsapp_number"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full p-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 transition-colors text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className="w-5 h-5">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
            <span className="text-sm font-medium">Chat on WhatsApp</span>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
} 