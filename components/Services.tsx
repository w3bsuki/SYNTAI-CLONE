"use client"

import { Brain, Cpu, MessageCircle, Eye, ArrowRight } from "lucide-react"
import { StatusBadge } from "@/components/ui/status-badge"
import { TextShimmer } from "@/components/ui/text-shimmer"
import { Typewriter } from "@/components/ui/typewriter"
import HeroBadge from "@/components/ui/hero-badge"
import { Badge } from "@/components/ui/badge"

const services = [
  {
    title: "AI Consulting",
    description: "Expert guidance for AI integration, strategic planning, and implementation roadmaps.",
    icon: Brain,
    gradient: "from-emerald-500 to-green-500",
    features: [
      "Digital transformation strategy",
      "AI readiness assessment",
      "Implementation roadmap"
    ],
    status: {
      leftIcon: Brain,
      rightIcon: ArrowRight,
      leftLabel: "Strategic",
      rightLabel: "Solutions",
      status: "success" as const,
      color: "emerald"
    }
  },
  {
    title: "Machine Learning",
    description: "Custom ML models for predictive analytics, anomaly detection, and process optimization.",
    icon: Cpu,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Predictive maintenance",
      "Customer behavior modeling",
      "Process automation"
    ],
    status: {
      leftIcon: Cpu,
      rightIcon: ArrowRight,
      leftLabel: "Advanced",
      rightLabel: "Analytics",
      status: "success" as const,
      color: "blue"
    }
  },
  {
    title: "Natural Language",
    description: "Advanced NLP solutions for text analysis, chatbots, and automated communication.",
    icon: MessageCircle,
    gradient: "from-violet-500 to-purple-500",
    features: [
      "Customer support automation",
      "Document analysis",
      "Sentiment analysis"
    ],
    status: {
      leftIcon: MessageCircle,
      rightIcon: ArrowRight,
      leftLabel: "Intelligent",
      rightLabel: "Communication",
      status: "success" as const,
      color: "violet"
    }
  },
  {
    title: "Computer Vision",
    description: "Systems that can 'see' and interpret visual data for automation and analysis.",
    icon: Eye,
    gradient: "from-orange-500 to-pink-500",
    features: [
      "Quality control automation",
      "Security systems",
      "Visual inspection"
    ],
    status: {
      leftIcon: Eye,
      rightIcon: ArrowRight,
      leftLabel: "Visual",
      rightLabel: "Intelligence",
      status: "success" as const,
      color: "orange"
    }
  }
]

export default function Services() {
  const sectorTypes = [
    "Business",
    "Enterprise",
    "Government"
  ];

  return (
    <section id="services" className="relative overflow-hidden bg-black py-16 sm:py-24 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.5),rgba(0,0,0,1))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-[90%] sm:max-w-2xl text-center mb-12 sm:mb-16 md:mb-24">
          <HeroBadge 
            text="Services"
            variant="outline"
            icon={<Cpu className="w-4 h-4" />}
          />

          <div className="mt-6 sm:mt-8 flex flex-col items-center">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-8" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
              <span className="text-white">AI Solutions for</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                <Typewriter 
                  text={sectorTypes}
                  speed={50}
                  waitTime={3000}
                  loop={true}
                  className="inline-block"
                  cursorClassName="text-blue-400 ml-1"
                />
              </span>
            </h2>
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-8" />
          </div>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-zinc-400 max-w-[90%] mx-auto">
            Transform your business with our cutting-edge AI services, tailored to meet your specific needs and objectives.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative w-full"
            >
              <div className={`relative flex flex-col items-center text-center h-full overflow-hidden rounded-2xl border bg-zinc-900/50 p-6 sm:p-8 transition-all duration-300 hover:bg-zinc-900/80 ${
                service.gradient.includes("emerald") ? "border-emerald-500/20" :
                service.gradient.includes("blue") ? "border-blue-500/20" :
                service.gradient.includes("violet") ? "border-violet-500/20" :
                "border-orange-500/20"
              }`}>
                {/* Status Badge */}
                <div className="mb-4">
                  <StatusBadge {...service.status} className={`bg-zinc-900/80 backdrop-blur-sm border-${
                    service.gradient.includes("emerald") ? "emerald" :
                    service.gradient.includes("blue") ? "blue" :
                    service.gradient.includes("violet") ? "violet" :
                    "orange"
                  }-500/20`} />
                </div>

                {/* Icon */}
                <div className={`relative inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl border ${
                  service.gradient.includes("emerald") ? "border-emerald-500/20" :
                  service.gradient.includes("blue") ? "border-blue-500/20" :
                  service.gradient.includes("violet") ? "border-violet-500/20" :
                  "border-orange-500/20"
                } bg-zinc-900`}>
                  <div className={`absolute inset-0 rounded-2xl opacity-20 bg-gradient-to-br ${service.gradient}`} />
                  <service.icon className="relative z-10 h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400 max-w-[85%] mx-auto">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mt-5 space-y-2 w-full max-w-[85%]">
                  {service.features.map((feature) => (
                    <div 
                      key={feature} 
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl border bg-zinc-900/50 backdrop-blur-sm transition-colors duration-200 group-hover:bg-zinc-900 ${
                        service.gradient.includes("emerald") ? "border-emerald-500/10" :
                        service.gradient.includes("blue") ? "border-blue-500/10" :
                        service.gradient.includes("violet") ? "border-violet-500/10" :
                        "border-orange-500/10"
                      }`}
                    >
                      <Cpu className={`h-3.5 w-3.5 shrink-0 ${
                        service.gradient.includes("emerald") ? "text-emerald-500" :
                        service.gradient.includes("blue") ? "text-blue-500" :
                        service.gradient.includes("violet") ? "text-violet-500" :
                        "text-orange-500"
                      }`} />
                      <span className="text-sm font-medium text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="mt-6 w-full max-w-[85%]">
                  <button
                    onClick={() => {}}
                    className={`
                      w-full h-10 px-4 rounded-xl
                      bg-zinc-900 
                      border text-sm font-medium text-white
                      relative overflow-hidden
                      transition-all duration-300
                      hover:scale-[1.02]
                      ${
                        service.gradient.includes("emerald") ? "border-emerald-500/20 hover:border-emerald-500/30" :
                        service.gradient.includes("blue") ? "border-blue-500/20 hover:border-blue-500/30" :
                        service.gradient.includes("violet") ? "border-violet-500/20 hover:border-violet-500/30" :
                        "border-orange-500/20 hover:border-orange-500/30"
                      }
                    `}
                  >
                    <div className={`absolute inset-0 opacity-10 transition-opacity duration-300 group-hover:opacity-20 bg-gradient-to-r ${service.gradient}`} />
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

