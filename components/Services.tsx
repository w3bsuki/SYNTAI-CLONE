"use client"

import { Brain, Cpu, MessageCircle, Eye, ArrowRight, Sparkles, LucideIcon, Bot, Workflow, Globe, Search, Microscope, LayoutGrid } from "lucide-react"
import { TextShimmer } from "@/components/ui/text-shimmer"
import { Typewriter } from "@/components/ui/typewriter"
import HeroBadge from "@/components/ui/hero-badge"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { useState } from "react"
import { ServiceDialog } from "@/components/ui/service-dialog"
import { CustomOrderDialog } from "@/components/ui/custom-order-dialog"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { DialogClose } from "@/components/ui/dialog"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: {
      duration: 0.2
    }
  }
};

const iconVariants = {
  initial: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.1, 
    rotate: 8,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
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

interface Feature {
  text: string;
  icon: LucideIcon;
}

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  features: Feature[];
}

const services: Service[] = [
  {
    title: "AI Consulting",
    description: "Strategic AI integration and transformation roadmaps.",
    icon: Brain,
    gradient: "from-emerald-500 to-green-500",
    features: [
      { text: "AI readiness assessment", icon: Bot },
      { text: "Technology stack optimization", icon: Workflow },
      { text: "Implementation strategy", icon: Brain }
    ]
  },
  {
    title: "Machine Learning",
    description: "State-of-the-art models for intelligent automation and prediction.",
    icon: Cpu,
    gradient: "from-blue-500 via-cyan-400 to-blue-600",
    features: [
      { text: "Real-time predictions", icon: Bot },
      { text: "Automated decision systems", icon: Workflow },
      { text: "Performance optimization", icon: Brain }
    ]
  },
  {
    title: "Natural Language",
    description: "Advanced NLP solutions that understand, analyze, generate.",
    icon: MessageCircle,
    gradient: "from-violet-500 to-purple-500",
    features: [
      { text: "Intelligent chatbots", icon: Bot },
      { text: "Semantic analysis", icon: Brain },
      { text: "Multi-language support", icon: Globe }
    ]
  }
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);
  const [isCustomOrderOpen, setIsCustomOrderOpen] = useState(false);
  const sectorTypes = [
    { prefix: "Business", suffix: "", prefixColor: "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent", suffixColor: "" },
    { prefix: "Enterprise", suffix: "", prefixColor: "bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent", suffixColor: "" },
    { prefix: "Government", suffix: "", prefixColor: "bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent", suffixColor: "" }
  ];

  return (
    <section id="services" className="relative overflow-hidden bg-black py-12 sm:py-16 md:py-24 -mt-12 sm:-mt-16 md:-mt-24">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.5),rgba(0,0,0,1))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      
      {/* Grid Pattern Animation */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:8rem_8rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] animate-grid-pattern" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-[95%] xs:max-w-[90%] sm:max-w-2xl text-center mb-12 sm:mb-12 md:mb-16"
        >
          <HeroBadge 
            text="Services"
            variant="outline"
            color="emerald"
            icon={<Cpu className="w-3 h-3 sm:w-4 sm:h-4" />}
          />

          <div className="mt-4 sm:mt-6 flex flex-col items-center">
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent mb-4 sm:mb-6" />
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
              <span className="text-white">AI Solutions for</span>
              <br />
              <span>
                <Typewriter 
                  text={[
                    { prefix: "Business", suffix: "", prefixColor: "bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent", suffixColor: "text-transparent" },
                    { prefix: "Enterprise", suffix: "", prefixColor: "bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 bg-clip-text text-transparent", suffixColor: "text-transparent" },
                    { prefix: "Government", suffix: "", prefixColor: "bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent", suffixColor: "text-transparent" }
                  ]}
                  speed={50}
                  waitTime={3000}
                  loop={true}
                  className="inline-block"
                  cursorClassName="text-emerald-400 ml-1"
                />
              </span>
            </h2>
            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent mt-4 sm:mt-6" />
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
          className="grid gap-6 grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group relative w-full cursor-pointer transition-transform duration-200 hover:-translate-y-1"
              onClick={() => setSelectedService(service)}
            >
              <div className="relative flex flex-col h-full overflow-hidden rounded-2xl bg-black">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-80" />
                
                {/* Glowing Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-90 rounded-2xl`}>
                  <div className="absolute inset-[1px] rounded-2xl bg-black" />
                </div>
                
                {/* Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-zinc-800/50" />

                {/* Card Content */}
                <div className="relative z-20 flex flex-col items-center h-full p-6">
                  {/* Title & Description */}
                  <div className="text-center mb-6">
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent [text-shadow:_0_1px_1px_rgb(0_0_0_/_40%)]`}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-zinc-400 mt-2 [text-shadow:_0_1px_1px_rgb(0_0_0_/_40%)]">
                      {service.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="w-full space-y-2.5 mb-6">
                    {service.features.map((feature) => (
                      <div
                        key={feature.text}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-black/80 border border-zinc-800/50"
                      >
                        <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-black/90 border border-zinc-800/50">
                          <feature.icon className={`w-3.5 h-3.5 ${
                            service.gradient.includes("emerald") ? "text-emerald-500" :
                            service.gradient.includes("blue") ? "text-blue-500" :
                            "text-violet-500"
                          }`} />
                        </div>
                        <span className="text-sm text-zinc-300 [text-shadow:_0_1px_1px_rgb(0_0_0_/_40%)]">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* Button */}
                  <div className="w-full mt-auto">
                    <motion.button
                      whileTap={{ scale: 0.98 }}
                      className={`w-full px-4 py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-white bg-gradient-to-r ${service.gradient} hover:opacity-90 transition-opacity`}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom Order Button */}
        <div className="mt-8 sm:mt-12 max-w-5xl mx-auto flex justify-center w-full">
          <Dialog>
            <DialogTrigger asChild>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative inline-flex items-center gap-2.5 px-6 py-3 rounded-xl before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-[hsl(var(--color-1))] before:via-[hsl(var(--color-3))] before:to-[hsl(var(--color-5))] after:absolute after:inset-[2px] after:rounded-[10px] after:bg-black"
              >
                <span className="relative z-10 flex items-center gap-2 text-white">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    Build Custom Solution
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </motion.button>
            </DialogTrigger>
            <DialogContent className="bg-black/95 border-zinc-800/50">
              <DialogHeader>
                <DialogTitle className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
                  Create Custom AI Solution
                </DialogTitle>
                <DialogDescription className="text-zinc-400">
                  Tell us about your project requirements and we'll help you build the perfect AI solution.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-zinc-200">Name</Label>
                  <Input id="name" placeholder="Enter your name" className="bg-zinc-900/80 border-zinc-800 text-zinc-200" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-zinc-200">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" className="bg-zinc-900/80 border-zinc-800 text-zinc-200" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="requirements" className="text-zinc-200">Project Requirements</Label>
                  <Textarea 
                    id="requirements" 
                    placeholder="Describe your project requirements..." 
                    className="bg-zinc-900/80 border-zinc-800 text-zinc-200 min-h-[120px]" 
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" className="bg-zinc-900 text-zinc-400 border-zinc-800 hover:bg-zinc-900/80">
                    Cancel
                  </Button>
                </DialogClose>
                <DialogClose asChild>
                  <Button className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 text-white border-0">
                    Submit Request
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
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
            features: selectedService.features.map(f => f.text),
            icon: selectedService.icon
          }}
        />
      )}
    </section>
  )
}

