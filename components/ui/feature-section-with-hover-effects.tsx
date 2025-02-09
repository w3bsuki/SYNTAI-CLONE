"use client";

import { cn } from "@/lib/utils";
import { Search, Code, Bot, Rocket, ChartLine } from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
  const processSteps = [
    {
      title: "Discovery",
      description: "We analyze your business processes and identify AI opportunities.",
      icon: Search,
    },
    {
      title: "Plan",
      description: "Strategic roadmap and solution architecture for your AI journey.",
      icon: Code,
    },
    {
      title: "Build",
      description: "Development and training of your personalized AI agents.",
      icon: Bot,
    },
    {
      title: "Launch",
      description: "Seamless deployment with comprehensive team training.",
      icon: Rocket,
    },
    {
      title: "Scale",
      description: "Expand and optimize your AI capabilities for maximum business impact.",
      icon: ChartLine,
    },
  ];

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
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const ProcessStep = ({
  title,
  description,
  icon: Icon,
  index,
  isLast
}: {
  title: string;
  description: string;
  icon: any;
  index: number;
  isLast: boolean;
}) => {
  return (
    <div className="relative group h-full">
      {/* Step Container */}
      <div className={cn(
        "flex flex-col items-center text-center px-6 py-10 relative h-full",
        "hover:bg-zinc-900/50 transition-all duration-300",
        "rounded-xl border border-zinc-800/50",
        "backdrop-blur-sm",
        "group-hover:border-blue-500/20"
      )}>
        {/* Step Number */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1">
          <span className="text-sm font-medium text-blue-400">Step {index + 1}</span>
        </div>

        {/* Icon */}
        <div className="relative size-16 mb-6 rounded-xl bg-gradient-to-b from-blue-500/10 to-transparent border border-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <Icon className="size-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-zinc-200 mb-3 relative z-10">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-zinc-400 relative z-10">
          {description}
        </p>
      </div>
    </div>
  );
}; 