"use client";

import { motion } from "framer-motion";
import { Check, X, Brain, Cpu, MessageCircle, Eye, Users, Phone, ChevronRight } from "lucide-react"; // Import icons
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react"; // Import React
import Link from "next/link";

interface BenefitProps {
  text: string;
  checked: boolean;
}

const Benefit = ({ text, checked }: BenefitProps) => {
  return (
    <div className="flex items-center gap-3">
      {checked ? (
        <span className="grid size-4 place-content-center rounded-full bg-primary text-sm text-primary-foreground">
          <Check className="size-3" />
        </span>
      ) : (
        <span className="grid size-4 place-content-center rounded-full dark:bg-zinc-800 bg-zinc-200 text-sm dark:text-zinc-400 text-zinc-600">
          <X className="size-3" />
        </span>
      )}
      <span className="text-sm dark:text-zinc-300 text-zinc-600">{text}</span>
    </div>
  );
};

interface PricingCardProps {
  tier: string;
  price: string;
  bestFor: string;
  CTA: string;
  benefits: Array<{ text: string; checked: boolean }>;
  className?: string;
  icon?: any; // Keep icon prop, but type as any
  href: string;
}

export const PricingCard = ({
  tier,
  price,
  bestFor,
  CTA,
  benefits,
  className,
  icon: Icon, // Use icon prop as a component
  href
}: PricingCardProps) => {
  return (
    <motion.div
      initial={{ filter: "blur(2px)" }}
      whileInView={{ filter: "blur(0px)" }}
      transition={{ duration: 0.5, ease: "easeInOut", delay: 0.25 }}
    >
      <Card
        className={cn(
          "relative h-full w-full overflow-hidden border",
          "dark:border-zinc-700/50 dark:bg-gradient-to-b dark:from-zinc-900/50 dark:to-zinc-900",
          "border-zinc-200 bg-gradient-to-b from-zinc-50/50 to-zinc-100/80",
          "p-6 flex flex-col items-center",
          "transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:bg-zinc-700/50 hover:border-zinc-600/50",
          className
        )}
      >
        {/* Icon Rendering */}
        {Icon && (
          <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-4 shrink-0 mx-auto">
            <Icon className="h-10 w-10 text-zinc-400" />
          </div>
        )}
        <div className="flex flex-col items-center border-b pb-6 dark:border-zinc-700 border-zinc-200 w-full">
          <span className="mb-6 inline-block dark:text-zinc-50 text-zinc-900 text-2xl font-bold">
            {tier}
          </span>
          <span className="mb-3 inline-block text-base italic text-zinc-300">
            {price}
          </span>
          <span className="dark:text-zinc-400 text-zinc-600 text-center text-base grow mb-6">
            {bestFor}
          </span>
        </div>
        <div className="space-y-4 py-6 w-full">
          {benefits.map((benefit, index) => (
            <Benefit key={index} {...benefit} />
          ))}
        </div>
        <Button 
          className="w-full mt-auto bg-zinc-200 text-zinc-900 hover:bg-zinc-300 hover:text-zinc-900 transition-all duration-200" 
          variant="default" 
          asChild
        >
          <Link href={href}>{CTA}</Link>
        </Button>
      </Card>
    </motion.div>
  );
};