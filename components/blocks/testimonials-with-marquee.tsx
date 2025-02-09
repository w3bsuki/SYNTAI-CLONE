import { cn } from "@/lib/utils";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { TextShimmer } from "@/components/ui/text-shimmer";
import HeroBadge from "@/components/ui/hero-badge";
import { MessageSquare } from "lucide-react";

interface TestimonialsSectionProps {
  className?: string;
}

const testimonials = [
  {
    name: "Emma Thompson",
    title: "@emmaai",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    content: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented."
  },
  {
    name: "David Park",
    title: "@davidtech",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution."
  },
  {
    name: "Sofia Rodriguez",
    title: "@sofiaml",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    content: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
  },
  {
    name: "James Wilson",
    title: "@jameswtech",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    content: "The scalability and performance of this platform is remarkable. It handles our enterprise workload with ease."
  }
];

export function TestimonialsWithMarquee({ className }: TestimonialsSectionProps) {
  return (
    <section className={cn("relative py-8", className)}>
      <div className="flex flex-col items-center gap-4 text-center mb-16">
        <HeroBadge 
          text="Testimonials"
          variant="outline"
          color="purple"
          icon={<MessageSquare className="w-4 h-4" />}
        />
        <h2 className="max-w-2xl text-4xl font-bold text-white">
          What Our Clients Say
        </h2>
        <p className="text-zinc-400 max-w-2xl">
          Discover how our AI solutions have transformed businesses and exceeded expectations
        </p>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <div className="group flex w-full overflow-hidden py-8 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
          <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
            {[...Array(4)].map((_, setIndex) => (
              testimonials.map((testimonial, i) => (
                <TestimonialCard 
                  key={`${setIndex}-${i}`}
                  {...testimonial}
                />
              ))
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black" />
      </div>
    </section>
  );
} 