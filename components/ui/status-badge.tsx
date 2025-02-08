import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

const statusBadgeVariants = cva(
  "inline-flex items-center gap-x-2 sm:gap-x-2.5 rounded-tremor-full px-2.5 sm:px-3 py-1 sm:py-1.5 text-tremor-label border",
  {
    variants: {
      status: {
        success: "",
        error: "",
        default: "",
      },
      color: {
        blue: "",
        violet: "",
        orange: "",
      }
    },
    defaultVariants: {
      status: "default",
      color: "blue",
    },
  }
)

interface StatusBadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statusBadgeVariants> {
  leftIcon?: LucideIcon
  rightIcon?: LucideIcon
  leftLabel: string
  rightLabel: string
}

export function StatusBadge({
  className,
  status,
  color,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  leftLabel,
  rightLabel,
  ...props
}: StatusBadgeProps) {
  const getIconColor = () => {
    if (color === "blue") return "text-blue-500"
    if (color === "violet") return "text-violet-500"
    return "text-orange-500"
  }

  return (
    <span 
      className={cn(
        statusBadgeVariants({ status, color }), 
        "relative group whitespace-nowrap",
        className
      )} 
      {...props}
    >
      {/* Subtle glow effect */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tremor-full blur",
        color === "blue" && "bg-blue-500/10",
        color === "violet" && "bg-violet-500/10",
        color === "orange" && "bg-orange-500/10"
      )} />

      {/* Left content */}
      <span className="relative inline-flex items-center gap-1 sm:gap-1.5 font-medium text-foreground">
        {LeftIcon && (
          <LeftIcon 
            className={cn(
              "h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0",
              getIconColor()
            )} 
            aria-hidden={true}
          />
        )}
        <span className="text-[10px] sm:text-[11px] font-semibold tracking-wide uppercase">
          {leftLabel}
        </span>
      </span>

      {/* Divider */}
      <span className="h-3 w-px bg-zinc-800" />

      {/* Right content */}
      <span className="relative inline-flex items-center gap-1 sm:gap-1.5 text-muted-foreground">
        {RightIcon && (
          <RightIcon 
            className={cn(
              "h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0",
              "text-zinc-500 group-hover:text-zinc-400 transition-colors"
            )} 
            aria-hidden={true}
          />
        )}
        <span className="text-[10px] sm:text-[11px] font-medium text-zinc-500 group-hover:text-zinc-400 transition-colors uppercase">
          {rightLabel}
        </span>
      </span>
    </span>
  )
} 