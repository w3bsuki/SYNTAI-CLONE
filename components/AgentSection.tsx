import { StatusBadge } from "@/components/ui/status-badge";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { Brain, Cpu, MessageCircle, ArrowRight } from "lucide-react";

        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <StatusBadge
            leftIcon={Brain}
            rightIcon={ArrowRight}
            leftLabel="Our"
            rightLabel="Agents"
            status="success"
            color="violet"
            className="bg-zinc-900/80 backdrop-blur-sm border-zinc-800/50"
          />
          <TextShimmer 
            as="h2" 
            className="max-w-2xl text-4xl font-bold bg-gradient-to-b from-white to-white/80"
            duration={3}
          > 