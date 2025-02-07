"use client";

import { Badge } from "@/components/ui/badge";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { TextShimmer } from "@/components/ui/text-shimmer";

export default function AboutUs() {
  return (
    <section id="about-us" className="bg-black py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <Badge variant="outline" className="bg-black text-zinc-300 border-zinc-800">
            About Us
          </Badge>
          <TextShimmer as="h2" className="max-w-2xl text-4xl font-bold text-white" duration={3}>
            Why Choose Us
          </TextShimmer>
          <p className="text-zinc-400 max-w-2xl">
            Discover what makes us the leading choice for AI solutions and how we can transform your business operations.
          </p>
        </div>

        <div className="bg-zinc-900/20 border-zinc-800/50 rounded-2xl border">
          <FeaturesSectionWithHoverEffects />
        </div>
      </div>
    </section>
  );
}

