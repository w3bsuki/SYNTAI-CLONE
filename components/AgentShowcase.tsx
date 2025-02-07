"use client";

import { PricingCard } from "@/components/ui/dark-gradient-pricing";
import { Brain, Cpu, MessageCircle, Eye } from "lucide-react"; // Import the icon components

const agents = [
  {
    name: "Aidr",
    tagline: "The Intelligent Automation Powerhouse",
    description:
      "Aidr is a versatile AI Agent designed to streamline and automate complex business operations. Powered by n8n automation workflows and advanced AI capabilities, Aidr acts as a ChatGPT-like operator, but specifically tailored for business needs.",
    icon: Brain, // Pass the component directly
    demoLink: "#contact",
    benefits: [
      { text: "Advanced AI automation workflows", checked: true },
      { text: "Business process optimization", checked: true },
      { text: "ChatGPT-like operator capabilities", checked: true },
    ],
  },
  {
    name: "Aidy",
    tagline: "Your AI-Powered Dispatch and Customer Service Agent",
    description:
      "Aidy is a dedicated AI Customer Support Agent, designed specifically for industries requiring efficient dispatch and customer interaction. Initially targeting Taxi and Transportation companies, Aidy handles customer inquiries, dispatch requests, and communication seamlessly through phone and text.",
    icon: MessageCircle, // Pass the component directly
    demoLink: "#contact",
    benefits: [
      { text: "24/7 customer support automation", checked: true },
      { text: "Seamless dispatch management", checked: true },
      { text: "Multi-channel communication", checked: true },
    ],
  },
  {
    name: "Aido",
    tagline: "The Smart and Affordable Internal Business Assistant",
    description:
      "Aido is a cost-effective AI Agent designed to boost internal business efficiency by automating routine administrative and task-oriented functions. Aido acts as a smart assistant for daily operations, freeing up human employees for more strategic work.",
    icon: Cpu, // Pass the component directly
    demoLink: "#contact",
    benefits: [
      { text: "Administrative task automation", checked: true },
      { text: "Cost-effective operations", checked: true },
      { text: "Employee productivity boost", checked: true },
    ],
  },
];

export default function AgentShowcase() {
  return (
    <section id="agent-showcase" className="bg-black py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="mb-16 text-center text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          Meet Our AI Agents
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {agents.map((agent) => (
            <PricingCard
              key={agent.name}
              tier={agent.name}
              price={agent.tagline}
              bestFor={agent.description}
              CTA={`See ${agent.name} in Action`}
              href={agent.demoLink}
              benefits={agent.benefits}
              icon={agent.icon} // Pass the icon component as a prop
              className="bg-gradient-to-b from-zinc-900/50 to-zinc-900 border-zinc-800"
            />
          ))}
        </div>
      </div>
    </section>
  );
}