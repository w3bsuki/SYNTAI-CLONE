import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Building2, Users, Bot, ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { RainbowButton } from "@/components/ui/rainbow-button";

interface BookDemoDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const businessSizes = [
  { id: "startup", label: "Startup (1-10)", icon: Building2 },
  { id: "small", label: "Small Business (11-50)", icon: Building2 },
  { id: "medium", label: "Medium Business (51-200)", icon: Building2 },
  { id: "enterprise", label: "Enterprise (201+)", icon: Building2 },
];

const agentTypes = [
  { id: "aido", label: "AIDO - Data Processing AI", icon: Bot },
  { id: "aidy", label: "AIDY - Customer Service AI", icon: Bot },
  { id: "aidr", label: "AIDR - Business Intelligence AI", icon: Bot },
];

export function BookDemoDialog({ isOpen, onClose }: BookDemoDialogProps) {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedAgent, setSelectedAgent] = useState<string>("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    // Here you would typically send this data to your backend
    const formData = {
      businessSize: selectedSize,
      agentType: selectedAgent,
      email,
      name,
    };
    
    console.log("Form submitted:", formData);
    
    // Redirect to WhatsApp
    const whatsappLink = "https://wa.me/YOUR_PHONE_NUMBER"; // Replace with your WhatsApp link
    window.open(whatsappLink, "_blank");
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-zinc-950/70 border-zinc-800/50 p-6 gap-0 backdrop-blur-xl">
        <DialogHeader className="pb-5 mb-6 border-b border-zinc-800/50">
          <div className="flex items-center gap-4">
            <div className="relative rounded-xl p-2.5 overflow-hidden bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
              <MessageSquare className="relative z-10 h-5 w-5 text-blue-400" />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-xl font-semibold bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
                Book a Demo
              </DialogTitle>
              <DialogDescription className="text-sm text-zinc-400 mt-1.5">
                Tell us about your business and we'll help you find the perfect AI solution
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Business Size Selection */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
              Business Size
            </h4>
            <div className="grid grid-cols-2 gap-3">
              {businessSizes.map((size) => (
                <button
                  key={size.id}
                  onClick={() => setSelectedSize(size.id)}
                  className={`group flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 ${
                    selectedSize === size.id
                      ? "border-blue-500/50 bg-blue-500/10"
                      : "border-zinc-800/50 bg-zinc-900/50 hover:bg-zinc-900/70 hover:border-zinc-700/50"
                  }`}
                >
                  <div className="relative flex items-center justify-center shrink-0 size-8 rounded-full bg-zinc-900 border border-zinc-800/50">
                    <size.icon className="size-4 text-zinc-400" />
                  </div>
                  <span className="text-sm font-medium text-zinc-300">{size.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Agent Type Selection */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
              Preferred Agent
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {agentTypes.map((agent) => (
                <button
                  key={agent.id}
                  onClick={() => setSelectedAgent(agent.id)}
                  className={`group flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 ${
                    selectedAgent === agent.id
                      ? "border-blue-500/50 bg-blue-500/10"
                      : "border-zinc-800/50 bg-zinc-900/50 hover:bg-zinc-900/70 hover:border-zinc-700/50"
                  }`}
                >
                  <div className="relative flex items-center justify-center shrink-0 size-8 rounded-full bg-zinc-900 border border-zinc-800/50">
                    <agent.icon className="size-4 text-zinc-400" />
                  </div>
                  <span className="text-sm font-medium text-zinc-300">{agent.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
              Contact Information
            </h4>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-zinc-800/50 bg-zinc-900/50 text-zinc-300 placeholder:text-zinc-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
              />
              <input
                type="email"
                placeholder="Business Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg border border-zinc-800/50 bg-zinc-900/50 text-zinc-300 placeholder:text-zinc-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/50"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 pt-5 border-t border-zinc-800/50">
          <RainbowButton
            onClick={handleSubmit}
            disabled={!selectedSize || !selectedAgent || !email || !name}
            className="w-full"
            variant="black"
          >
            <span>Continue to WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </RainbowButton>
        </div>
      </DialogContent>
    </Dialog>
  );
} 