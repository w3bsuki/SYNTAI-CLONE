import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Search, Code, Bot, Rocket, ChartLine, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ProcessDialogProps {
  isOpen: boolean;
  onClose: () => void;
  step: {
    number: number;
    title: string;
    description: string;
    icon: LucideIcon;
    gradient: string;
    details: {
      what: string;
      how: string[];
      outcome: string;
    };
  };
}

const processDetails = {
  "Discovery": {
    what: "A comprehensive analysis phase where we dive deep into your business processes, data infrastructure, and AI opportunities.",
    how: [
      "Business process analysis",
      "Data assessment & mapping",
      "Opportunity identification",
      "ROI potential evaluation"
    ],
    outcome: "A clear understanding of your AI potential and a prioritized list of opportunities."
  },
  "Plan": {
    what: "Strategic roadmap development that aligns AI solutions with your business objectives and technical capabilities.",
    how: [
      "Solution architecture design",
      "Technology stack selection",
      "Resource planning",
      "Timeline development"
    ],
    outcome: "A detailed implementation plan with clear milestones and deliverables."
  },
  "Build": {
    what: "Development and training of custom AI solutions tailored to your specific needs and use cases.",
    how: [
      "AI model development",
      "Integration design",
      "Testing & validation",
      "Performance optimization"
    ],
    outcome: "Production-ready AI solutions that seamlessly integrate with your systems."
  },
  "Launch": {
    what: "Smooth deployment of AI solutions with comprehensive training and support for your team.",
    how: [
      "Deployment planning",
      "Team training",
      "System monitoring setup",
      "Performance tracking"
    ],
    outcome: "Successfully implemented AI solutions with trained teams ready to utilize them."
  },
  "Scale": {
    what: "Continuous optimization and expansion of your AI capabilities to maximize business impact.",
    how: [
      "Performance monitoring",
      "Capability expansion",
      "Process optimization",
      "ROI tracking"
    ],
    outcome: "Scalable AI solutions that grow with your business needs."
  }
};

export function ProcessDialog({ isOpen, onClose, step }: ProcessDialogProps) {
  const Icon = step.icon;
  const details = processDetails[step.title as keyof typeof processDetails];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] w-[95%] xs:w-[90%] bg-black/90 border-zinc-800/50 p-3 xs:p-4 sm:p-6 gap-0 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-80" />
        <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-[0.07]`} />
        
        {/* Glowing Border Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-90`}>
          <div className="absolute inset-[1px] bg-black" />
        </div>

        {/* Header */}
        <DialogHeader className="relative pb-3 xs:pb-4 sm:pb-5 mb-3 sm:mb-4 border-b border-zinc-800/50">
          <div className="flex items-center gap-3 sm:gap-4">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative shrink-0"
            >
              {/* Icon wrapper */}
              <div className="relative flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-xl overflow-hidden">
                {/* Glowing background effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient} opacity-20`} />
                <div className="absolute inset-[1px] bg-black rounded-lg" />
                {/* Icon with gradient */}
                <motion.div
                  whileHover={{ rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Icon className={`relative z-10 h-5 w-5 sm:h-6 sm:w-6 ${
                    step.gradient.includes("blue") ? "text-blue-500" :
                    step.gradient.includes("emerald") ? "text-emerald-500" :
                    step.gradient.includes("violet") ? "text-violet-500" :
                    step.gradient.includes("orange") ? "text-orange-500" :
                    "text-indigo-500"
                  }`} />
                </motion.div>
              </div>
            </motion.div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <DialogTitle className={`text-lg xs:text-xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                  {step.number}. {step.title}
                </DialogTitle>
              </div>
              <DialogDescription className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                {step.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Main Content */}
        <div className="relative space-y-4">
          {/* What is it? */}
          <div className="space-y-2">
            <h4 className={`text-sm font-medium bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
              What is it?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {details.what}
            </p>
          </div>

          {/* How we do it */}
          <div className="space-y-2">
            <h4 className={`text-sm font-medium bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
              How we do it
            </h4>
            <div className="grid gap-2">
              {details.how.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-2 text-xs sm:text-sm text-zinc-400"
                >
                  <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${step.gradient}`} />
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div className="space-y-2">
            <h4 className={`text-sm font-medium bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
              Outcome
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
              {details.outcome}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="relative mt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onClose}
            className="relative w-full overflow-hidden rounded-lg"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${step.gradient}`} />
            <div className="relative flex items-center justify-center gap-2 px-4 py-2">
              <span className="text-xs font-semibold text-white">
                Got it
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>
          </motion.button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 