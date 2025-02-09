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
  color?: "blue" | "purple" | "orange" | "emerald";
  className?: string;
  onClick?: () => void;
}

const badgeVariants: Record<string, string> = {
  default: "bg-zinc-900/80 hover:bg-zinc-900/90",
  outline: "border hover:bg-zinc-900/90",
  ghost: "hover:bg-zinc-900/50",
};

const sizeVariants: Record<string, string> = {
  sm: "px-3 py-1 text-xs gap-1.5",
  md: "px-4 py-1.5 text-sm gap-2",
  lg: "px-5 py-2 text-base gap-2.5",
};

const colorVariants: Record<string, { gradient: string; icon: string; glow: string }> = {
  blue: {
    gradient: "from-blue-500/10 via-cyan-500/10 to-blue-500/10",
    icon: "text-blue-400/80 group-hover:text-blue-400",
    glow: "from-blue-500/20 via-cyan-500/20 to-blue-500/20"
  },
  purple: {
    gradient: "from-purple-500/10 via-violet-500/10 to-purple-500/10",
    icon: "text-purple-400/80 group-hover:text-purple-400",
    glow: "from-purple-500/20 via-violet-500/20 to-purple-500/20"
  },
  orange: {
    gradient: "from-orange-500/10 via-amber-500/10 to-orange-500/10",
    icon: "text-orange-400/80 group-hover:text-orange-400",
    glow: "from-orange-500/20 via-amber-500/20 to-orange-500/20"
  },
  emerald: {
    gradient: "from-emerald-500/10 via-green-500/10 to-emerald-500/10",
    icon: "text-emerald-400/80 group-hover:text-emerald-400",
    glow: "from-emerald-500/20 via-green-500/20 to-emerald-500/20"
  }
};

const iconAnimationVariants: Variants = {
  initial: { rotate: 0 },
  hover: { rotate: -10 },
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
    "relative inline-flex items-center rounded-full transition-all duration-200",
    "bg-zinc-900/80 backdrop-blur-xl border-zinc-800/50",
    {
      [`before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-r ${colorScheme.gradient} before:opacity-0 hover:before:opacity-100 before:transition-opacity`]: true,
      [`after:absolute after:inset-0 after:rounded-full after:border after:border-${color}-500/20 after:opacity-0 hover:after:opacity-100 after:transition-opacity`]: true
    },
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
        transition={{ duration: 0.8, ease }}
        onHoverStart={() => controls.start("hover")}
        onHoverEnd={() => controls.start("initial")}
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
            initial="initial"
            animate={controls}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            {icon}
          </motion.div>
        )}
        <span className="relative bg-gradient-to-r from-white via-zinc-300 to-white bg-clip-text text-transparent font-medium">
          {text}
        </span>
        {endIcon && (
          <motion.div className={cn(colorScheme.icon, "transition-colors")}>
            {endIcon}
          </motion.div>
        )}
      </motion.div>
    </BadgeWrapper>
  );
}