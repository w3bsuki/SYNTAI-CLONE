"use client";

import { Badge } from "@/components/ui/badge";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { Info, ArrowRight, MessageSquare } from "lucide-react";
import HeroBadge from "@/components/ui/hero-badge";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section id="about-us" className="bg-black py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <HeroBadge 
            text="About"
            variant="outline"
            icon={<Info className="w-4 h-4" />}
          />
          <TextShimmer as="h2" className="max-w-2xl text-4xl font-bold text-white" duration={3}>
            Our Process
          </TextShimmer>
          <p className="text-zinc-400 max-w-2xl">
            From discovery to deployment, we guide you through every step of your AI transformation journey.
          </p>
        </div>

        <div className="bg-zinc-900/20 border-zinc-800/50 rounded-2xl border">
          <FeaturesSectionWithHoverEffects />
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-zinc-400 mb-8">
              Get in touch with our experts and discover how our AI solutions can drive your business forward.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 h-12 rounded-xl bg-zinc-900/50 border border-blue-500/20 text-white font-medium relative overflow-hidden group"
            >
              <div className="absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600" />
              <div className="relative z-10 flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Contact Us Now
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

