"use client";

import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HighlightGroup, HighlighterItem } from "@/components/ui/particle-effects";
import HeroBadge from "@/components/ui/hero-badge";

const faqs = [
  {
    question: "What makes your AI solutions unique?",
    answer:
      "Our AI solutions stand out through their advanced machine learning algorithms, real-time adaptation capabilities, and seamless integration options. We focus on delivering customizable, scalable solutions that grow with your business needs while maintaining high accuracy and performance.",
  },
  {
    question: "How do you ensure data security and privacy?",
    answer:
      "We implement industry-leading security protocols, including end-to-end encryption, regular security audits, and compliance with international data protection standards. Your data is stored in secure, encrypted environments with strict access controls and monitoring systems.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer comprehensive 24/7 technical support, including dedicated account managers, regular maintenance updates, and expert consultation. Our team provides thorough documentation, training sessions, and rapid response times to ensure smooth operation of your AI systems.",
  },
  {
    question: "Can your AI solutions integrate with existing systems?",
    answer:
      "Yes, our AI solutions are designed with flexibility in mind. We offer robust APIs and custom integration options that allow seamless connection with your existing infrastructure, databases, and third-party applications while maintaining optimal performance.",
  },
  {
    question: "What is your pricing model?",
    answer:
      "We offer flexible, transparent pricing models tailored to your needs. Our plans range from pay-as-you-go to enterprise-level subscriptions, ensuring you only pay for the features and capacity you use. Contact us for a customized quote based on your specific requirements.",
  },
  {
    question: "How long does implementation typically take?",
    answer:
      "Implementation timelines vary based on project complexity and specific requirements. Typically, basic implementations can be completed within 2-4 weeks, while more complex integrations may take 2-3 months. We work closely with you to establish clear timelines and milestones.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-black py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <HeroBadge 
            text="FAQ"
            variant="outline"
            color="orange"
            icon={<HelpCircle className="w-4 h-4" />}
          />
          <h2 className="max-w-2xl text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-400 max-w-2xl">
            Find answers to common questions about our AI solutions and services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl">
                <AccordionItem
                  value={`item-${index}`}
                  className="border-0"
                >
                  <AccordionTrigger className="px-6 text-zinc-100 hover:text-zinc-300 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-zinc-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
} 