"use client"

import { Brain, Cpu, MessageCircle, Eye, ArrowRight } from "lucide-react"
import { StatusBadge } from "@/components/ui/status-badge"
import { TextShimmer } from "@/components/ui/text-shimmer"

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
      color: "blue"
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
      color: "violet"
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
      color: "orange"
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
      color: "blue"
    }
  }
]

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-black py-16 sm:py-24 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.5),rgba(0,0,0,1))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-[90%] sm:max-w-2xl text-center mb-12 sm:mb-16 md:mb-24">
          <StatusBadge
            leftIcon={Cpu}
            rightIcon={ArrowRight}
            leftLabel="Our"
            rightLabel="Services"
            status="success"
            color="orange"
            className="bg-zinc-900/80 backdrop-blur-sm border-zinc-800/50"
          />

          <TextShimmer as="h2" className="mt-6 sm:mt-8 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white" duration={3}>
            Comprehensive AI Solutions for
            <span className="block mt-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Modern Businesses
            </span>
          </TextShimmer>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-relaxed text-zinc-400 max-w-[90%] mx-auto">
            Transform your business with our cutting-edge AI services, tailored to meet your specific needs and objectives.
          </p>
        </div>

        {/* Services Grid - Updated with better centering */}
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2 max-w-5xl mx-auto place-items-center">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative w-full max-w-xl"
            >
              <div className="relative flex flex-col items-center text-center h-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 sm:p-8 hover:bg-zinc-900/80 transition-all duration-300">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-900/50 pointer-events-none`} />
                
                {/* Status Badge */}
                <div className="mb-4 sm:mb-6">
                  <StatusBadge {...service.status} className="bg-zinc-900/80 backdrop-blur-sm border-zinc-800/50" />
                </div>

                {/* Icon */}
                <div className={`relative inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} p-[1px] group-hover:scale-110 transition-transform duration-300`}>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/0 opacity-50" />
                  <div className="flex h-full w-full items-center justify-center rounded-2xl bg-zinc-900">
                    <service.icon className="h-7 w-7 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-4 sm:mt-6 text-lg sm:text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 sm:mt-3 text-sm leading-relaxed text-zinc-400 max-w-[90%] mx-auto">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mt-5 sm:mt-6 space-y-2 w-full max-w-[90%]">
                  {service.features.map((feature) => (
                    <div 
                      key={feature} 
                      className="flex items-center gap-2 px-3 py-2 rounded-xl border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm hover:bg-zinc-900 hover:border-zinc-700/50 transition-colors duration-200"
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
                <div className="mt-6 sm:mt-8 w-full max-w-[90%]">
                  <button
                    onClick={() => {}}
                    className={`
                      w-full h-10 sm:h-11 px-4 rounded-xl
                      bg-zinc-900 
                      border border-zinc-800
                      text-sm font-medium text-white
                      transition-all duration-300
                      relative
                      overflow-hidden
                      group/btn
                      hover:border-zinc-700
                      hover:scale-[1.02]
                      hover:shadow-xl hover:shadow-zinc-950
                    `}
                  >
                    <div className={`absolute inset-0 w-full h-full transition-all duration-300 opacity-0 group-hover/btn:opacity-20 bg-gradient-to-r ${service.gradient}`} />
                    <div className="relative z-10 flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
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

