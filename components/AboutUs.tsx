"use client";

import { Badge } from "@/components/ui/badge";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { Info, ArrowRight, MessageSquare } from "lucide-react";
import HeroBadge from "@/components/ui/hero-badge";
import { motion } from "framer-motion";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Typewriter } from "@/components/ui/typewriter";

export default function AboutUs() {
  return (
    <section id="about-us" className="bg-black py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <HeroBadge 
            text="About"
            variant="outline"
            color="violet"
            icon={<Info className="w-4 h-4" />}
          />
          <div className="mt-4 sm:mt-6 flex flex-col items-center">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-4 sm:mb-6" />
            <h2 className="text-4xl font-medium tracking-tight">
              <span>
                <Typewriter 
                  text={[
                    { prefix: "The", suffix: " Process", prefixColor: "text-white", suffixColor: "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent" },
                    { prefix: "The", suffix: " Journey", prefixColor: "text-white", suffixColor: "bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent" },
                    { prefix: "The", suffix: " Roadmap", prefixColor: "text-white", suffixColor: "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent" }
                  ]}
                  speed={100}
                  waitTime={3000}
                  loop={true}
                  className="inline-block"
                  cursorClassName="text-blue-400 ml-1"
                />
              </span>
            </h2>
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-4 sm:mt-6" />
          </div>

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
            <div className="flex items-center justify-center">
              <RainbowButton
                onClick={() => window.location.href = '/#contact'}
                variant="black"
                className="w-full sm:w-auto"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Contact Us Now</span>
                <ArrowRight className="w-4 h-4" />
              </RainbowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

