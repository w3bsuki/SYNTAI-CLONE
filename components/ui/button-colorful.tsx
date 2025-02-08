import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ButtonColorfulProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
}

export function ButtonColorful({
    className,
    label = "Explore Components",
    ...props
}: ButtonColorfulProps) {
    return (
        <Button
            className={cn(
                "relative h-12 px-8 overflow-hidden",
                "bg-zinc-900/50 hover:bg-zinc-800/50",
                "transition-all duration-500",
                "group",
                className
            )}
            {...props}
        >
            {/* Animated gradient border */}
            <div
                className={cn(
                    "absolute inset-0 opacity-40",
                    "bg-[conic-gradient(from_var(--angle),#3b82f6,#8b5cf6,#ec4899,#3b82f6)]",
                    "group-hover:opacity-100",
                    "transition-opacity duration-500",
                    "animate-border-rotate"
                )}
                style={{ '--angle': '0deg' } as React.CSSProperties}
            />
            
            {/* Inner background */}
            <div className="absolute inset-[1px] bg-zinc-950 rounded-[inherit]" />

            {/* Glow effect */}
            <div
                className={cn(
                    "absolute inset-0",
                    "bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.5),transparent_50%)]",
                    "opacity-0 group-hover:opacity-100",
                    "transition-opacity duration-500",
                    "blur-xl"
                )}
            />

            {/* Shimmer effect */}
            <div
                className={cn(
                    "absolute inset-0 -translate-x-full",
                    "bg-gradient-to-r from-transparent via-white/10 to-transparent",
                    "group-hover:translate-x-full",
                    "transition-transform duration-1000",
                    "z-10"
                )}
            />

            {/* Content */}
            <div className="relative flex items-center justify-center gap-2 z-20">
                <motion.span 
                    className="text-white font-medium"
                    initial={false}
                    animate={{ y: 0 }}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                >
                    {label}
                </motion.span>
                <motion.div
                    initial={false}
                    animate={{ x: 0, y: 0 }}
                    whileHover={{ x: 2, y: -2 }}
                    transition={{ duration: 0.2 }}
                >
                    <ArrowUpRight className="w-4 h-4 text-white/90" />
                </motion.div>
            </div>
        </Button>
    );
} 