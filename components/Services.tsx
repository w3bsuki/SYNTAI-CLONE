"use client"

import { Brain, Cpu, MessageCircle, Eye, ArrowRight } from "lucide-react"
import { TextShimmer } from "@/components/ui/text-shimmer"
import { Typewriter } from "@/components/ui/typewriter"
import HeroBadge from "@/components/ui/hero-badge"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useState } from "react"
import { ServiceDialog } from "@/components/ui/service-dialog"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.05, 
    rotate: 8,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

const featureVariants = {
  initial: { 
    opacity: 0.9,
    backgroundColor: "rgba(24, 24, 27, 0.5)",
    borderColor: "rgba(39, 39, 42, 0.5)"
  },
  hover: { 
    opacity: 1,
    backgroundColor: "rgba(24, 24, 27, 0.8)",
    borderColor: "rgba(59, 130, 246, 0.2)",
    transition: {
      type: "tween",
      duration: 0.2
    }
  }
};

const services = [
  {
    title: "AI Consulting",
    description: "Strategic AI integration and transformation roadmaps.",
    icon: Brain,
    gradient: "from-emerald-500 to-green-500",
    features: [
      "AI readiness assessment",
      "Technology stack optimization",
      "Implementation strategy"
    ]
  },
  {
    title: "Machine Learning",
    description: "State-of-the-art models for intelligent automation and prediction.",
    icon: Cpu,
    gradient: "from-blue-500 to-cyan-500",
    features: [
      "Real-time predictions",
      "Automated decision systems",
      "Performance optimization"
    ]
  },
  {
    title: "Natural Language",
    description: "Advanced NLP solutions that understand, analyze, generate.",
    icon: MessageCircle,
    gradient: "from-violet-500 to-purple-500",
    features: [
      "Intelligent chatbots",
      "Semantic analysis",
      "Multi-language support"
    ]
  },
  {
    title: "Computer Vision",
    description: "AI-powered visual intelligence for real-time analysis and automation.",
    icon: Eye,
    gradient: "from-orange-500 to-pink-500",
    features: [
      "Object recognition",
      "Visual inspection",
      "Scene understanding"
    ]
  }
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[90%] sm:max-w-2xl text-center mb-12 sm:mb-16 md:mb-24"
        >
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
            Unlock the power of artificial intelligence with our enterprise-grade solutions, expertly crafted to drive innovation and growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto place-items-stretch"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="group relative w-full"
              style={{ backfaceVisibility: 'hidden' }}
            >
              {/* Card Container */}
              <div className="relative flex flex-col h-full overflow-hidden rounded-2xl bg-black/80">
                {/* Spotlight Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-80" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_50%)]" />
                
                {/* Glowing Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-[0.15]`}>
                  <div className="absolute inset-[1px] rounded-2xl bg-black/95" />
                </div>

                {/* Content */}
                <div className="relative flex flex-col items-center text-center p-6 sm:p-8 h-full">
                  <div className="flex flex-col items-center flex-1">
                    {/* Icon */}
                    <motion.div
                      variants={iconVariants}
                      initial="initial"
                      whileHover="hover"
                      className="relative"
                    >
                      {/* Glowing circle behind icon */}
                      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r ${service.gradient} opacity-30 rounded-full blur-sm`} />
                      
                      {/* Icon wrapper */}
                      <div className="relative flex items-center justify-center w-12 h-12 rounded-xl overflow-hidden">
                        <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20`} />
                        <div className="absolute inset-[1px] bg-black rounded-lg" />
                        <service.icon className={`relative z-10 h-6 w-6 ${
                          service.gradient.includes("emerald") ? "text-emerald-500" :
                          service.gradient.includes("blue") ? "text-blue-500" :
                          service.gradient.includes("violet") ? "text-violet-500" :
                          "text-orange-500"
                        }`} />
                      </div>
                    </motion.div>

                    {/* Title & Description */}
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className={`mt-4 text-lg font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="mt-2 text-sm leading-relaxed text-zinc-400"
                    >
                      {service.description}
                    </motion.p>

                    {/* Features */}
                    <div className="mt-6 space-y-2 w-full">
                      {service.features.map((feature, index) => (
                        <motion.div 
                          key={feature}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          className="relative flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50"
                          style={{ backfaceVisibility: 'hidden' }}
                        >
                          <div className={`relative z-10 flex items-center justify-center w-5 h-5 rounded-md bg-gradient-to-b ${service.gradient} p-[1px]`}>
                            <div className="w-full h-full rounded-md bg-black flex items-center justify-center">
                              <service.icon className={`h-3 w-3 ${
                                service.gradient.includes("emerald") ? "text-emerald-500" :
                                service.gradient.includes("blue") ? "text-blue-500" :
                                service.gradient.includes("violet") ? "text-violet-500" :
                                "text-orange-500"
                              }`} />
                            </div>
                          </div>
                          <span className="text-xs font-medium text-zinc-300">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="mt-6 w-full">
                    <motion.button
                      onClick={() => setSelectedService(service)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative w-full overflow-hidden rounded-lg"
                      style={{ backfaceVisibility: 'hidden' }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient}`} />
                      <div className="relative flex items-center justify-center gap-2 px-4 py-2">
                        <span className="text-xs font-semibold text-white">
                          Learn More
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-white" />
                      </div>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Service Dialog */}
      {selectedService && (
        <ServiceDialog
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          service={{
            name: selectedService.title,
            description: selectedService.description,
            gradient: selectedService.gradient,
            features: selectedService.features,
            icon: selectedService.icon
          }}
        />
      )}
    </section>
  )
}

