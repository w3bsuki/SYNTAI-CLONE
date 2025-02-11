"use client";

import { cn } from "@/lib/utils";
import { Search, Code, Bot, Rocket, ChartLine } from "lucide-react";
import { motion } from "framer-motion";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { ProcessDialog } from "@/components/ui/process-dialog";
import { useState } from "react";

const processSteps = [
  {
    number: 1,
    title: "Discovery",
    description: "We first analyze your business and all internal processes",
    icon: Search,
    gradient: "from-blue-500 via-cyan-400 to-blue-600",
    details: {
      what: "A comprehensive analysis phase where we dive deep into your business processes, data infrastructure, and AI opportunities.",
      how: [
        "Business process analysis",
        "Data assessment & mapping",
        "Opportunity identification",
        "ROI potential evaluation"
      ],
      outcome: "A clear understanding of your AI potential and a prioritized list of opportunities."
    }
  },
  {
    number: 2,
    title: "Plan",
    description: "Strategic roadmap and solution architecture for your AI journey.",
    icon: Code,
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    details: {
      what: "Strategic roadmap development that aligns AI solutions with your business objectives and technical capabilities.",
      how: [
        "Solution architecture design",
        "Technology stack selection",
        "Resource planning",
        "Timeline development"
      ],
      outcome: "A detailed implementation plan with clear milestones and deliverables."
    }
  },
  {
    number: 3,
    title: "Build",
    description: "Development and training of your personalized AI agents.",
    icon: Bot,
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500",
    details: {
      what: "Development and training of custom AI solutions tailored to your specific needs and use cases.",
      how: [
        "AI model development",
        "Integration design",
        "Testing & validation",
        "Performance optimization"
      ],
      outcome: "Production-ready AI solutions that seamlessly integrate with your systems."
    }
  },
  {
    number: 4,
    title: "Launch",
    description: "Seamless deployment with comprehensive team training.",
    icon: Rocket,
    gradient: "from-orange-500 via-pink-500 to-red-500",
    details: {
      what: "Smooth deployment of AI solutions with comprehensive training and support for your team.",
      how: [
        "Deployment planning",
        "Team training",
        "System monitoring setup",
        "Performance tracking"
      ],
      outcome: "Successfully implemented AI solutions with trained teams ready to utilize them."
    }
  },
  {
    number: 5,
    title: "Scale",
    description: "Expand and optimize your AI capabilities for maximum impact.",
    icon: ChartLine,
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    details: {
      what: "Continuous optimization and expansion of your AI capabilities to maximize business impact.",
      how: [
        "Performance monitoring",
        "Capability expansion",
        "Process optimization",
        "ROI tracking"
      ],
      outcome: "Scalable AI solutions that grow with your business needs."
    }
  },
];

export function FeaturesSectionWithHoverEffects() {
  const [selectedStep, setSelectedStep] = useState<typeof processSteps[0] | null>(null);

  return (
    <div className="relative z-10 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8 relative max-w-5xl mx-auto">
          {/* Continuous Line Behind Steps */}
          <div className="hidden md:block absolute top-8 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent transform -translate-y-1/2" />
          
          {processSteps.map((step, index) => (
            <ProcessStep 
              key={step.title} 
              {...step} 
              index={index} 
              isLast={index === processSteps.length - 1}
              onClick={() => setSelectedStep(step)}
            />
          ))}
        </div>
      </div>

      {/* Process Dialog */}
      {selectedStep && (
        <ProcessDialog
          isOpen={!!selectedStep}
          onClose={() => setSelectedStep(null)}
          step={selectedStep}
        />
      )}
    </div>
  );
}

const ProcessStep = ({
  title,
  description,
  icon: Icon,
  index,
  isLast,
  gradient,
  onClick
}: {
  title: string;
  description: string;
  icon: any;
  index: number;
  isLast: boolean;
  gradient: string;
  onClick: () => void;
}) => {
  return (
    <motion.div 
      className="relative group h-full cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      onClick={onClick}
    >
      {/* Step Container */}
      <div className={cn(
        "relative flex flex-col items-center text-center px-4 sm:px-6 py-8 sm:py-10",
        "rounded-2xl border overflow-hidden",
        "backdrop-blur-sm h-full min-h-[240px]"
      )}>
        {/* Border gradient */}
        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-20`} />
        <div className="absolute inset-[1px] rounded-2xl bg-black" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center h-full w-full">
          {/* Icon Container */}
          <div className={`relative mb-6 rounded-lg`}>
            <div className={`flex items-center justify-center w-12 h-12 rounded-lg border bg-black ${
              gradient.includes("blue") ? "border-blue-500/50" :
              gradient.includes("emerald") ? "border-emerald-500/50" :
              gradient.includes("violet") ? "border-violet-500/50" :
              gradient.includes("orange") ? "border-orange-500/50" :
              "border-indigo-500/50"
            }`}>
              <Icon className={`w-6 h-6 ${
                gradient.includes("blue") ? "text-blue-500" :
                gradient.includes("emerald") ? "text-emerald-500" :
                gradient.includes("violet") ? "text-violet-500" :
                gradient.includes("orange") ? "text-orange-500" :
                "text-indigo-500"
              }`} />
            </div>
          </div>

          {/* Title */}
          <h3 className={`text-lg font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent mb-4`}>
            {index + 1}. {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-zinc-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};