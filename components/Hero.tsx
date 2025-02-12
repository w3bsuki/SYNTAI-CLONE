"use client";

import { Bot, ArrowRight } from "lucide-react";
import { LazyMotion, domAnimation } from "framer-motion";
import React, { useState, useCallback, Suspense } from "react";
import dynamic from 'next/dynamic';

// Dynamically import components with loading states
const Typewriter = dynamic(() => import('@/components/ui/typewriter').then(mod => mod.Typewriter), {
  loading: () => <div className="h-[40px] w-[200px] animate-pulse bg-zinc-800/50 rounded" />
});

const RainbowButton = dynamic(() => import('@/components/ui/rainbow-button').then(mod => mod.RainbowButton), {
  loading: () => <div className="h-[44px] w-full sm:w-[180px] animate-pulse bg-zinc-800/50 rounded-lg" />
});

const TopAnnouncementComponent = dynamic(() => import('@/components/ui/top-announcement').then(mod => mod.TopAnnouncement), {
  loading: () => <div className="h-12 w-full max-w-md mx-auto animate-pulse bg-zinc-800/50 rounded-full" />,
  ssr: false
});

const ScrollReveal = dynamic(() => import('@/components/ui/scroll-reveal').then(mod => mod.ScrollReveal));

// Lazy load dialogs
const DynamicBookDemoDialog = dynamic(() => import('@/components/ui/book-demo-dialog').then(mod => mod.BookDemoDialog), {
  ssr: false
});

const DynamicBuildAiDialog = dynamic(() => import('@/components/ui/build-ai-dialog').then(mod => mod.BuildAiDialog), {
  ssr: false
});

interface TypewriterItem {
  prefix: string;
  suffix: string;
  prefixColor: string;
  suffixColor: string;
}

export default function Hero() {
  const [isBookDemoOpen, setIsBookDemoOpen] = useState(false);
  const [isBuildAiOpen, setIsBuildAiOpen] = useState(false);
  
  const aiTypes: TypewriterItem[] = [
    { prefix: "Government", suffix: "", prefixColor: "bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent", suffixColor: "" },
    { prefix: "Business", suffix: "", prefixColor: "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent", suffixColor: "" },
    { prefix: "Enterprise", suffix: "", prefixColor: "bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent", suffixColor: "" }
  ];

  const handleDemoClick = useCallback(() => setIsBookDemoOpen(true), []);
  const handleBuildAiClick = useCallback(() => setIsBuildAiOpen(true), []);

  return (
    <LazyMotion features={domAnimation}>
      <section 
        className="relative w-full bg-black overflow-hidden min-h-[calc(100vh-80px)] pb-12 sm:pb-16 lg:pb-20" 
        aria-label="Hero Section"
      >
        {/* Background Effects - with will-change optimization */}
        <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.5),rgba(0,0,0,1))] will-change-[opacity,transform]" />
        <div 
          className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] will-change-[opacity,transform]"
          aria-hidden="true"
        />
        
        {/* Content Container */}
        <div className="container relative mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-80px)] pt-20 sm:pt-24 md:pt-32">
          {/* Main Content */}
          <div className="w-full max-w-[90rem] space-y-12 sm:space-y-16 lg:space-y-20">
            {/* Top Announcement */}
            <Suspense fallback={<div className="h-12 w-full max-w-md mx-auto animate-pulse bg-zinc-800/50 rounded-full" />}>
              <TopAnnouncementComponent />
            </Suspense>

            <div className="flex flex-col items-center space-y-8 sm:space-y-10 lg:space-y-12 w-full max-w-[1200px] mx-auto px-4 sm:px-6">
              {/* Main Heading */}
              <ScrollReveal>
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] text-center">
                  <span className="block text-white mb-3 sm:mb-4">Power</span>
                  <span className="block mb-3 sm:mb-4 min-h-[1.1em]">
                    <Suspense fallback={<div className="h-[1.1em] w-[200px] mx-auto animate-pulse bg-zinc-800/50 rounded" />}>
                      <Typewriter 
                        text={aiTypes}
                        speed={50}
                        waitTime={2000}
                        loop={true}
                        className="inline-block"
                        cursorClassName="text-blue-400 ml-1"
                      />
                    </Suspense>
                  </span>
                  <span className="block text-white">With Your Data</span>
                </h1>
              </ScrollReveal>

              {/* Description */}
              <ScrollReveal delay={0.2}>
                <p className="text-base sm:text-lg text-zinc-400 max-w-2xl text-center mx-auto leading-relaxed px-4 sm:px-0">
                  Experience the next generation of AI with our specialized agents. From data analysis to 
                  full-stack development, unlock unprecedented efficiency and innovation for your enterprise.
                </p>
              </ScrollReveal>

              {/* CTA Buttons */}
              <ScrollReveal delay={0.4} direction="up">
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full max-w-md px-4 sm:px-0">
                  <Suspense fallback={<div className="h-[44px] w-full sm:w-[180px] animate-pulse bg-zinc-800/50 rounded-lg" />}>
                    <RainbowButton
                      onClick={handleDemoClick}
                      variant="black"
                      className="w-full sm:w-[180px] py-3 sm:py-3.5"
                    >
                      <span className="text-sm font-medium">Book a Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </RainbowButton>
                  </Suspense>

                  <Suspense fallback={<div className="h-[44px] w-full sm:w-[180px] animate-pulse bg-zinc-800/50 rounded-lg" />}>
                    <RainbowButton
                      onClick={handleBuildAiClick}
                      variant="white"
                      className="w-full sm:w-[180px] py-3 sm:py-3.5"
                    >
                      <span className="text-sm font-medium">Build AI</span>
                      <ArrowRight className="w-4 h-4" />
                    </RainbowButton>
                  </Suspense>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Gradient Separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-50" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-gradient-to-t from-zinc-900 to-transparent blur-xl opacity-50" aria-hidden="true" />
        </div>

        {/* Lazy loaded dialogs */}
        <Suspense fallback={null}>
          {isBookDemoOpen && (
            <DynamicBookDemoDialog 
              isOpen={isBookDemoOpen}
              onClose={() => setIsBookDemoOpen(false)}
            />
          )}

          {isBuildAiOpen && (
            <DynamicBuildAiDialog
              isOpen={isBuildAiOpen}
              onClose={() => setIsBuildAiOpen(false)}
            />
          )}
        </Suspense>
      </section>
    </LazyMotion>
  );
}

