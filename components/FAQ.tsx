"use client";

import { HelpCircle, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import HeroBadge from "@/components/ui/hero-badge";
import { Typewriter } from "@/components/ui/typewriter";

const faqs = [
  {
    question: "What makes SyntAI's solutions unique?",
    answer:
      "Our AI solutions stand out through their specialized agents (AIDO, AIDY, AIDR), real-time adaptation capabilities, and enterprise-grade security. We focus on delivering customizable, scalable solutions that seamlessly integrate with your existing systems while maintaining high performance and reliability.",
    gradient: "from-blue-500 via-cyan-400 to-blue-600"
  },
  {
    question: "How do you ensure data security and privacy?",
    answer:
      "We implement enterprise-grade security protocols, including end-to-end encryption, regular security audits, and compliance with international data protection standards. Your data is processed with state-of-the-art encryption and stored in secure environments with strict access controls.",
    gradient: "from-emerald-500 via-green-500 to-teal-500"
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive enterprise support, including dedicated account managers, 24/7 technical assistance, and expert consultation. Our team provides thorough documentation, training sessions, and rapid response times to ensure smooth operation of your AI systems.",
    gradient: "from-violet-500 via-fuchsia-500 to-pink-500"
  },
  {
    question: "Can your AI agents integrate with existing systems?",
    answer:
      "Yes, our AI agents are designed with enterprise flexibility in mind. We offer robust APIs and custom integration options that allow seamless connection with your existing infrastructure, databases, and third-party applications while maintaining optimal performance.",
    gradient: "from-orange-500 via-pink-500 to-red-500"
  },
  {
    question: "What is your implementation process?",
    answer:
      "Our implementation follows a proven 5-step process: Discovery, Plan, Build, Launch, and Scale. Each phase is carefully managed to ensure successful integration, with typical timelines ranging from 2-4 weeks for basic implementations to 2-3 months for complex enterprise solutions.",
    gradient: "from-indigo-500 via-purple-500 to-pink-500"
  },
  {
    question: "How do you handle customization requests?",
    answer:
      "We specialize in tailoring our AI agents to meet specific enterprise needs. Our team works closely with you to understand your requirements, customize agent behaviors, and optimize performance for your unique use cases, ensuring maximum value and efficiency.",
    gradient: "from-blue-500 via-cyan-400 to-blue-600"
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative overflow-hidden bg-black py-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.5),rgba(0,0,0,1))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <HeroBadge 
            text="FAQ"
            variant="outline"
            color="blue"
            icon={<HelpCircle className="w-4 h-4" />}
          />
          
          <div className="mt-4 sm:mt-6 flex flex-col items-center">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-4 sm:mb-6" />
            <h2 className="text-4xl font-medium tracking-tight">
              <span>
                <Typewriter 
                  text={[
                    { prefix: "Common", suffix: " Questions", prefixColor: "text-white", suffixColor: "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent" },
                    { prefix: "Frequent", suffix: " Inquiries", prefixColor: "text-white", suffixColor: "bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent" },
                    { prefix: "Popular", suffix: " Topics", prefixColor: "text-white", suffixColor: "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent" }
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
            Find detailed answers about our enterprise AI solutions and implementation process
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="group relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-10 pointer-events-none"
                       style={{ backgroundImage: `linear-gradient(to right, ${faq.gradient})` }} />
                  
                  <AccordionTrigger className="px-6 text-left text-zinc-100 hover:text-white hover:no-underline group-hover:text-white transition-colors">
                    <div className="flex items-center gap-2">
                      <Plus className="w-4 h-4 shrink-0 transition-transform duration-200" />
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  
                  <AccordionContent className="px-6 pb-6 text-zinc-400">
                    <div className="pl-6 border-l border-zinc-800">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
} 