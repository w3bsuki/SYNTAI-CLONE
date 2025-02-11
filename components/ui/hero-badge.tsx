"use client";

import { motion, useAnimation, type Variants } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const ease = [0.16, 1, 0.3, 1];

interface HeroBadgeProps {
  href?: string;
  text: string;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  color?: "blue" | "purple" | "orange" | "emerald" | "violet" | "indigo";
  className?: string;
  onClick?: () => void;
}

const badgeVariants: Record<string, string> = {
  default: "bg-zinc-900/80 border border-zinc-800/50 hover:bg-zinc-900/90",
  outline: "border border-zinc-800/50 hover:bg-zinc-900/90",
  ghost: "border-0",
};

const sizeVariants: Record<string, string> = {
  sm: "px-3 py-1 text-xs gap-1.5",
  md: "px-4 py-1.5 text-sm gap-2",
  lg: "px-5 py-2 text-base gap-2.5",
};

const colorVariants: Record<string, { gradient: string; icon: string; glow: string; text: string }> = {
  blue: {
    gradient: "from-blue-500/10 via-cyan-500/10 to-blue-500/10",
    icon: "text-blue-400/80 group-hover:text-blue-400",
    glow: "from-blue-500/20 via-cyan-500/20 to-blue-500/20",
    text: "from-blue-500 via-cyan-400 to-blue-600"
  },
  emerald: {
    gradient: "from-emerald-500/10 via-green-500/10 to-emerald-500/10",
    icon: "text-emerald-400/80 group-hover:text-emerald-400",
    glow: "from-emerald-500/20 via-green-500/20 to-emerald-500/20",
    text: "from-emerald-500 via-green-500 to-teal-500"
  },
  violet: {
    gradient: "from-violet-500/10 via-fuchsia-500/10 to-violet-500/10",
    icon: "text-violet-400/80 group-hover:text-violet-400",
    glow: "from-violet-500/20 via-fuchsia-500/20 to-violet-500/20",
    text: "from-violet-500 via-fuchsia-500 to-pink-500"
  },
  orange: {
    gradient: "from-orange-500/10 via-amber-500/10 to-orange-500/10",
    icon: "text-orange-400/80 group-hover:text-orange-400",
    glow: "from-orange-500/20 via-amber-500/20 to-orange-500/20",
    text: "from-orange-500 via-amber-500 to-red-500"
  },
  indigo: {
    gradient: "from-indigo-500/10 via-purple-500/10 to-indigo-500/10",
    icon: "text-indigo-400/80 group-hover:text-indigo-400",
    glow: "from-indigo-500/20 via-purple-500/20 to-indigo-500/20",
    text: "from-indigo-500 via-purple-500 to-pink-500"
  }
};

const iconAnimationVariants: Variants = {
  initial: { rotate: 0, scale: 1 },
  hover: { 
    rotate: -10,
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

const badgeAnimationVariants: Variants = {
  initial: { 
    scale: 1,
    y: 0
  },
  hover: { 
    scale: 1.05,
    y: -2,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 15
    }
  }
};

export default function HeroBadge({
  href,
  text,
  icon,
  endIcon,
  variant = "default",
  size = "md",
  color = "blue",
  className,
  onClick,
}: HeroBadgeProps) {
  const controls = useAnimation();
  const colorScheme = colorVariants[color];

  const BadgeWrapper = href ? Link : motion.button;
  const wrapperProps = href ? { href } : { onClick };

  const baseClassName = cn(
    "inline-flex items-center rounded-full transition-all duration-200",
    badgeVariants[variant],
    sizeVariants[size],
    className
  );

  return (
    <BadgeWrapper
      {...wrapperProps}
      className={cn("group relative", href && "cursor-pointer")}
    >
      <motion.div
        className={baseClassName}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover="hover"
        variants={badgeAnimationVariants}
        transition={{ duration: 0.8, ease }}
      >
        {/* Glow effect */}
        <motion.div
          className={cn(
            "absolute -inset-1 rounded-full bg-gradient-to-r opacity-0 blur-lg group-hover:opacity-100 transition-opacity duration-500",
            colorScheme.glow
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {icon && (
          <motion.div
            className={cn(colorScheme.icon, "transition-colors")}
            variants={iconAnimationVariants}
          >
            {icon}
          </motion.div>
        )}
        <motion.span 
          className={`relative bg-gradient-to-r ${colorScheme.text} bg-clip-text text-transparent font-medium`}
          variants={{
            initial: { opacity: 0.9 },
            hover: { opacity: 1 }
          }}
        >
          {text}
        </motion.span>
        {endIcon && (
          <motion.div 
            className={cn(colorScheme.icon, "transition-colors")}
            variants={iconAnimationVariants}
          >
            {endIcon}
          </motion.div>
        )}
      </motion.div>
    </BadgeWrapper>
  );
}