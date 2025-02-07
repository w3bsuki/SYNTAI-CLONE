"use client"

import { Brain, Cpu, MessageCircle, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { TextShimmer } from "@/components/ui/text-shimmer"
import Link from "next/link"

const services = [
  {
    title: "AI Consulting",
    badge: "Strategic Solutions",
    description: "Expert guidance for AI integration, strategic planning, and implementation roadmaps.",
    icon: Brain,
    agent: "Aido",
    agentGradient: "bg-gradient-to-r from-yellow-400 to-amber-500",
    features: [
      "Digital transformation strategy",
      "AI readiness assessment",
      "Implementation roadmap"
    ],
    titleGradient: "bg-gradient-to-r from-green-400 to-emerald-500"
  },
  {
    title: "Machine Learning",
    badge: "Advanced Analytics",
    description: "Custom ML models for predictive analytics, anomaly detection, and process optimization.",
    icon: Cpu,
    agent: "Aidr",
    agentGradient: "bg-gradient-to-r from-red-400 to-rose-500",
    features: [
      "Predictive maintenance",
      "Customer behavior modeling",
      "Process automation"
    ],
    titleGradient: "bg-gradient-to-r from-blue-400 to-cyan-500"
  },
  {
    title: "Natural Language",
    badge: "Intelligent Communication",
    description: "Advanced NLP solutions for text analysis, chatbots, and automated communication.",
    icon: MessageCircle,
    agent: "Aidy",
    agentGradient: "bg-gradient-to-r from-green-400 to-emerald-500",
    features: [
      "Customer support automation",
      "Document analysis",
      "Sentiment analysis"
    ],
    titleGradient: "bg-gradient-to-r from-yellow-400 to-amber-500"
  },
  {
    title: "Computer Vision",
    badge: "Visual Intelligence",
    description: "Systems that can 'see' and interpret visual data for automation and analysis.",
    icon: Eye,
    agent: "Aidr",
    agentGradient: "bg-gradient-to-r from-red-400 to-rose-500",
    features: [
      "Quality control automation",
      "Security systems",
      "Visual inspection"
    ],
    titleGradient: "bg-gradient-to-r from-red-400 to-rose-500"
  }
]

export default function Services() {
  return (
    <section id="services" className="bg-black py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center mb-16">
          <Badge variant="outline" className="bg-black text-zinc-300 border-zinc-800">
            Our Services
          </Badge>
          <TextShimmer 
            as="h2" 
            className="max-w-2xl text-4xl font-bold bg-gradient-to-b from-white to-white/80"
            duration={3}
          >
            Comprehensive AI Solutions
          </TextShimmer>
          <p className="text-zinc-400 max-w-2xl">
            Transform your business with our cutting-edge AI services, tailored to meet your specific needs and objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-screen-xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card 
                key={service.title}
                className="bg-zinc-900/20 border-zinc-800/50 p-8 rounded-2xl hover:bg-zinc-900/30 transition-all duration-300 group"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-8">
                    <Badge variant="outline" className="bg-black/50 text-zinc-300 border-zinc-800 font-light tracking-wide">
                      {service.badge}
                    </Badge>
                    <div className="p-2.5 rounded-lg bg-zinc-800/50 text-zinc-400 group-hover:text-zinc-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className={`text-xl font-light tracking-wide mb-4 bg-clip-text text-transparent ${service.titleGradient}`}>
                    {service.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="mt-auto space-y-8">
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm">
                          <span className="mr-2 mt-1 text-zinc-600">•</span>
                          <span className="text-zinc-300 font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="space-y-4 pt-4 border-t border-zinc-800/50">
                      <p className="text-sm text-zinc-400 font-light">
                        Powered by: <span className={`bg-clip-text text-transparent font-medium tracking-wide ${service.agentGradient}`}>{service.agent}</span>
                      </p>
                      <Button
                        asChild
                        variant="secondary"
                        className="w-full bg-white/90 text-black hover:bg-white transition-colors duration-300"
                      >
                        <Link href="#contact">
                          Learn More
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

