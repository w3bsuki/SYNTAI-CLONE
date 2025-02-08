"use client";

import { cn } from "@/lib/utils";
import { Brain, Cpu, Wallet, Sparkles, Users, Clock, Shield, Heart } from "lucide-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "Built for developers",
      description: "Enterprise-grade AI solutions designed for seamless integration.",
      icon: Brain,
    },
    {
      title: "Ease of use",
      description: "Intuitive interface with no steep learning curve.",
      icon: Sparkles,
    },
    {
      title: "Competitive pricing",
      description: "Transparent pricing with no hidden costs or lock-in.",
      icon: Wallet,
    },
    {
      title: "100% Uptime",
      description: "Enterprise-grade reliability and performance.",
      icon: Shield,
    },
    {
      title: "Multi-tenant ready",
      description: "Secure isolation with resource optimization.",
      icon: Users,
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock expert assistance when you need it.",
      icon: Clock,
    },
    {
      title: "Satisfaction guarantee",
      description: "100% satisfaction guarantee or your money back.",
      icon: Heart,
    },
    {
      title: "Future-proof",
      description: "Continuous updates with latest AI advancements.",
      icon: Cpu,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-8 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string;
  description: string;
  icon: any;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center text-center px-6 py-8 sm:py-10 relative group/feature",
        "hover:bg-zinc-900/50 transition-colors duration-300",
        "rounded-xl border border-zinc-800/50",
        "backdrop-blur-sm"
      )}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 opacity-0 group-hover/feature:opacity-100 transition duration-300 bg-gradient-to-b from-zinc-800/50 via-transparent to-transparent rounded-xl pointer-events-none" />

      {/* Icon */}
      <div className="relative size-12 mb-4 rounded-lg bg-zinc-900/80 border border-zinc-800/50 flex items-center justify-center group-hover/feature:scale-110 transition-transform duration-300">
        <Icon className="size-6 text-zinc-400 group-hover/feature:text-zinc-300 transition-colors duration-300" />
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-zinc-200 mb-2 relative z-10">
        {title}
      </h3>
      <p className="text-sm text-zinc-400 relative z-10">
        {description}
      </p>
    </div>
  );
}; 