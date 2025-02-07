"use client";

import { Badge } from "@/components/ui/badge";
import { TestimonialsSection } from "@/components/blocks/testimonials-with-marquee";

const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <Badge variant="outline" className="bg-black text-zinc-300 border-zinc-800">
            Testimonials
          </Badge>
          <h2 className="max-w-2xl text-4xl font-bold text-white">
            Trusted by developers worldwide
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            Join thousands of developers who are already building the future with our AI platform
          </p>
        </div>
        <div className="bg-zinc-900/20 border-zinc-800/50 rounded-2xl border p-8">
          <TestimonialsSection
            testimonials={testimonials}
            className="bg-transparent"
          />
        </div>
      </div>
    </section>
  );
} 