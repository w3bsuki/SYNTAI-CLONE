"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Brain, Mail, MessageSquare, ArrowRight } from "lucide-react";
import { useAnimate } from "framer-motion";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";

import { Button, buttonVariants } from "@/components/ui/button";
import { ButtonColorful } from "@/components/ui/button-colorful";
import { HighlighterItem, HighlightGroup, Particles } from "@/components/ui/highlighter";

const techIcons = [
  "tensorflow",
  "pytorch",
  "python",
  "openai",
  "amazonaws",
  "googlecloud",
  "microsoftazure",
  "docker",
  "kubernetes",
  "postgresql",
  "mongodb",
  "redis",
  "kafka",
  "rabbitmq",
  "elasticsearch",
  "prometheus",
  "grafana",
  "nginx",
  "linux",
  "git",
];

export function Connect() {
  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    animate(
      [
        ["#pointer", { left: 180, top: 40 }, { duration: 0 }],
        ["#automation", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 40, top: 82 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#automation", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#ml", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 200, top: 150 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#ml", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#nlp", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 70, top: 180 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#nlp", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#vision", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 180, top: 40 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#vision", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      },
    );
  }, [animate]);
  
  return (
    <section id="contact" className="bg-black py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Contact Form Side */}
          <HighlightGroup className="group h-full">
            <div className="group/item h-full" data-aos="fade-down">
              <HighlighterItem className="rounded-3xl p-4 h-full">
                <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/20">
                  <Particles
                    className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                    quantity={150}
                    color={"#3b82f6"}
                    vy={-0.2}
                  />
                  <div className="flex items-center justify-center h-full">
                    <div className="flex flex-col items-start max-w-sm gap-8 py-12 px-8">
                      <div
                        className="relative mx-auto h-[160px] w-[240px]"
                        ref={scope}
                      >
                        <Brain className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-zinc-400" />
                        <div
                          id="vision"
                          className="absolute bottom-6 left-4 rounded-2xl border border-zinc-700 bg-zinc-800/80 px-2 py-0.5 text-[10px] opacity-50 text-zinc-300"
                        >
                          Computer Vision
                        </div>
                        <div
                          id="ml"
                          className="absolute left-2 top-8 rounded-2xl border border-zinc-700 bg-zinc-800/80 px-2 py-0.5 text-[10px] opacity-50 text-zinc-300"
                        >
                          Machine Learning
                        </div>
                        <div
                          id="nlp"
                          className="absolute right-2 top-[45%] rounded-2xl border border-zinc-700 bg-zinc-800/80 px-2 py-0.5 text-[10px] opacity-50 text-zinc-300"
                        >
                          Natural Language
                        </div>
                        <div
                          id="automation"
                          className="absolute right-4 top-8 rounded-2xl border border-zinc-700 bg-zinc-800/80 px-2 py-0.5 text-[10px] opacity-50 text-zinc-300"
                        >
                          AI Automation
                        </div>

                        <div id="pointer" className="absolute">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 13"
                            className="fill-blue-500"
                            stroke="white"
                            strokeWidth="1"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                            />
                          </svg>
                          <span className="bg-zinc-900/90 relative -top-1 left-2 rounded-xl px-1.5 py-0.5 text-[9px] text-zinc-200">
                            Agent
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-col items-start space-y-4">
                        <h3 className="text-4xl font-medium tracking-tight text-white">
                          Ready to Transform Your
                          <br />
                          Business?
                        </h3>
                        <p className="text-base text-zinc-400 max-w-[90%]">
                          Get in touch with us to discuss how our AI solutions can revolutionize your operations
                        </p>
                        <div className="flex items-center gap-4 pt-4">
                          <button
                            onClick={() => {}}
                            className="inline-flex items-center gap-2 px-6 h-10 rounded-lg bg-zinc-900 border border-violet-500/20 text-white text-sm font-medium relative overflow-hidden group"
                          >
                            <div className="absolute inset-0 opacity-10 bg-gradient-to-r from-violet-500 to-purple-500" />
                            <div className="relative z-10 flex items-center gap-2">
                              Schedule a Demo
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </button>
                          <button
                            onClick={() => {}}
                            className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors"
                          >
                            <MessageSquare className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
          </HighlightGroup>

          {/* Icon Cloud Side */}
          <HighlightGroup className="group h-full">
            <div className="group/item h-full" data-aos="fade-down">
              <HighlighterItem className="rounded-3xl p-4 h-full">
                <div className="relative z-20 h-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/20">
                  <Particles
                    className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                    quantity={80}
                    color={"#3b82f6"}
                    vy={-0.2}
                  />
                  <div className="flex items-center justify-center h-full p-4">
                    <div className="relative flex size-full items-center justify-center overflow-hidden rounded-lg">
                      <IconCloud iconSlugs={techIcons} />
                    </div>
                  </div>
                </div>
              </HighlighterItem>
            </div>
          </HighlightGroup>
        </div>
      </div>
    </section>
  );
} 