"use client"

import { Brain, Cpu, MessageCircle, Eye, ArrowRight, Sparkles } from "lucide-react"
import { TextShimmer } from "@/components/ui/text-shimmer"
import { Typewriter } from "@/components/ui/typewriter"
import HeroBadge from "@/components/ui/hero-badge"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useState } from "react"
import { ServiceDialog } from "@/components/ui/service-dialog"
import { CustomOrderDialog } from "@/components/ui/custom-order-dialog"

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
    description: "AI-powered visual intelligence for real-time analysis.",
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
  const [isCustomOrderOpen, setIsCustomOrderOpen] = useState(false);
  const sectorTypes = [
    { prefix: "Business", suffix: "", prefixColor: "bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent", suffixColor: "" },
    { prefix: "Enterprise", suffix: "", prefixColor: "bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent", suffixColor: "" },
    { prefix: "Government", suffix: "", prefixColor: "bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent", suffixColor: "" }
  ];

  return (
    <section id="services" className="relative overflow-hidden bg-black py-8 sm:py-16 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.5),rgba(0,0,0,1))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[95%] xs:max-w-[90%] sm:max-w-2xl text-center mb-8 sm:mb-12 md:mb-24"
        >
          <HeroBadge 
            text="Services"
            variant="outline"
            icon={<Cpu className="w-3 h-3 sm:w-4 sm:h-4" />}
          />

          <div className="mt-4 sm:mt-6 flex flex-col items-center">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-6 sm:mb-8" />
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
              <span className="text-white">AI Solutions for</span>
              <br />
              <span>
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
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-6 sm:mt-8" />
          </div>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base leading-relaxed text-zinc-400 max-w-[95%] mx-auto">
            Unlock the power of artificial intelligence with our enterprise-grade solutions, expertly crafted to drive innovation and growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto place-items-stretch"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative w-full max-w-[95%] xs:max-w-sm mx-auto"
              style={{ backfaceVisibility: 'hidden' }}
            >
              {/* Card Container */}
              <div 
                onClick={() => setSelectedService(service)}
                className="relative flex flex-col h-full overflow-hidden rounded-2xl bg-black/80 cursor-pointer border border-[1px]"
                style={{
                  borderColor: service.gradient.includes("emerald") ? "rgba(16, 185, 129, 0.2)" :
                             service.gradient.includes("blue") ? "rgba(59, 130, 246, 0.2)" :
                             service.gradient.includes("violet") ? "rgba(139, 92, 246, 0.2)" :
                             "rgba(249, 115, 22, 0.2)",
                  borderWidth: "1px"
                }}
              >
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-80" />
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-[0.07]`} />
                
                {/* Glowing Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-90`}>
                  <div className="absolute inset-[1px] rounded-2xl bg-black" />
                </div>
                
                {/* Content */}
                <div className="relative flex flex-col h-full p-4 sm:p-5">
                  {/* Icon Container */}
                  <div className="flex justify-center mb-4">
                    <div className="relative w-[44px] h-[44px] rounded-lg bg-black/80 border border-zinc-800/50">
                      <service.icon className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 ${
                        service.gradient.includes("emerald") ? "text-emerald-500" :
                        service.gradient.includes("blue") ? "text-blue-500" :
                        service.gradient.includes("violet") ? "text-violet-500" :
                        "text-orange-500"
                      }`} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-lg font-semibold text-center mb-2 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-zinc-400 text-center mb-4">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2 flex-grow">
                    {service.features.map((feature, index) => (
                      <div
                        key={feature}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-black/80 border ${
                          service.gradient.includes("emerald") ? "border-emerald-500/20" :
                          service.gradient.includes("blue") ? "border-blue-500/20" :
                          service.gradient.includes("violet") ? "border-violet-500/20" :
                          "border-orange-500/20"
                        } ring-1 ${
                          service.gradient.includes("emerald") ? "ring-emerald-500/10" :
                          service.gradient.includes("blue") ? "ring-blue-500/10" :
                          service.gradient.includes("violet") ? "ring-violet-500/10" :
                          "ring-orange-500/10"
                        }`}
                      >
                        <div className={`flex items-center justify-center w-7 h-7 rounded-lg bg-black/90 border ${
                          service.gradient.includes("emerald") ? "border-emerald-500/20" :
                          service.gradient.includes("blue") ? "border-blue-500/20" :
                          service.gradient.includes("violet") ? "border-violet-500/20" :
                          "border-orange-500/20"
                        }`}>
                          <service.icon className={`w-3.5 h-3.5 ${
                            service.gradient.includes("emerald") ? "text-emerald-500" :
                            service.gradient.includes("blue") ? "text-blue-500" :
                            service.gradient.includes("violet") ? "text-violet-500" :
                            "text-orange-500"
                          }`} />
                        </div>
                        <span className="text-sm font-medium text-zinc-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <div className="mt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(service);
                      }}
                      className={`w-full px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-white bg-gradient-to-r ${service.gradient} hover:opacity-90 transition-opacity`}
                    >
                      Learn More
                      <motion.div
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Order Card */}
        <motion.div
          variants={cardVariants}
          className="mt-6 w-full max-w-5xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-2xl bg-black/80 max-w-[95%] xs:max-w-sm mx-auto md:max-w-none">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 opacity-[0.07]" />
            
            {/* Glowing Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 opacity-90">
              <div className="absolute inset-[1px] rounded-2xl bg-black" />
            </div>

            {/* Content */}
            <div className="relative flex flex-col md:flex-row items-center justify-between p-4 sm:p-5 gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-[44px] h-[44px] rounded-lg bg-black/80 border border-zinc-800/50">
                  <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-violet-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                    Custom Order
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Need a specific AI solution? Let's build it together.
                  </p>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsCustomOrderOpen(true)}
                className="shrink-0 px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-white bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 hover:opacity-90 transition-opacity min-w-[140px]"
              >
                Get Started
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </div>
          </div>
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

      {/* Custom Order Dialog */}
      <CustomOrderDialog
        isOpen={isCustomOrderOpen}
        onClose={() => setIsCustomOrderOpen(false)}
      />
    </section>
  )
}

