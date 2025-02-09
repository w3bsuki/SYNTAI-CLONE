import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Bot, Check, ArrowRight, Zap, Code, Lock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface ServiceDialogProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    name: string;
    description: string;
    gradient: string;
    features: string[];
    icon: LucideIcon;
  };
}

const defaultDetailedFeatures = {
  "AI Consulting": [
    {
      title: "Strategic Planning",
      description: "Expert guidance on AI strategy and digital transformation roadmap.",
      icon: <Zap className="h-5 w-5" />
    },
    {
      title: "Technology Assessment",
      description: "Comprehensive evaluation of your current systems and AI readiness.",
      icon: <Code className="h-5 w-5" />
    },
    {
      title: "Implementation Planning",
      description: "Detailed planning for seamless AI integration into your business.",
      icon: <Lock className="h-5 w-5" />
    },
    {
      title: "Change Management",
      description: "Guide your team through the AI transformation process.",
      icon: <Sparkles className="h-5 w-5" />
    }
  ],
  "Machine Learning": [
    {
      title: "Custom Models",
      description: "Tailored machine learning models for your specific business needs.",
      icon: <Zap className="h-5 w-5" />
    },
    {
      title: "Data Pipeline",
      description: "Efficient data processing and model training pipelines.",
      icon: <Code className="h-5 w-5" />
    },
    {
      title: "Model Optimization",
      description: "Performance tuning and optimization of ML models.",
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      title: "Secure Deployment",
      description: "Safe and scalable deployment of ML models to production.",
      icon: <Lock className="h-5 w-5" />
    }
  ],
  "Natural Language": [
    {
      title: "NLP Processing",
      description: "Advanced natural language processing and understanding.",
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      title: "Language Models",
      description: "Custom language models for your domain and use case.",
      icon: <Code className="h-5 w-5" />
    },
    {
      title: "Real-time Analysis",
      description: "Instant text analysis and response generation.",
      icon: <Zap className="h-5 w-5" />
    },
    {
      title: "Data Privacy",
      description: "Secure handling of sensitive text and conversation data.",
      icon: <Lock className="h-5 w-5" />
    }
  ],
  "Computer Vision": [
    {
      title: "Image Processing",
      description: "Advanced image and video processing capabilities.",
      icon: <Sparkles className="h-5 w-5" />
    },
    {
      title: "Object Detection",
      description: "Real-time object detection and tracking systems.",
      icon: <Code className="h-5 w-5" />
    },
    {
      title: "Visual Analysis",
      description: "Deep analysis of visual data for insights and automation.",
      icon: <Zap className="h-5 w-5" />
    },
    {
      title: "Secure Storage",
      description: "Secure management of visual data and analysis results.",
      icon: <Lock className="h-5 w-5" />
    }
  ]
};

const defaultBenefits = {
  "AI Consulting": [
    "Accelerated AI adoption",
    "Reduced implementation risks",
    "Clear transformation roadmap",
    "Expert-guided process"
  ],
  "Machine Learning": [
    "Improved prediction accuracy",
    "Automated decision making",
    "Reduced operational costs",
    "Scalable ML infrastructure"
  ],
  "Natural Language": [
    "Enhanced communication",
    "24/7 automated responses",
    "Multi-language support",
    "Improved user experience"
  ],
  "Computer Vision": [
    "Automated visual inspection",
    "Real-time monitoring",
    "Reduced error rates",
    "Scalable visual analysis"
  ]
};

const defaultPricing = {
  "AI Consulting": {
    starter: {
      price: "$2,999",
      period: "per month",
      features: [
        "Initial assessment",
        "Strategy development",
        "Weekly consultations",
        "Basic implementation support"
      ]
    }
  },
  "Machine Learning": {
    starter: {
      price: "$1,999",
      period: "per month",
      features: [
        "Custom model development",
        "Basic API access",
        "Model hosting",
        "Technical support"
      ]
    }
  },
  "Natural Language": {
    starter: {
      price: "$999",
      period: "per month",
      features: [
        "Basic NLP processing",
        "API integration",
        "Language support",
        "Regular updates"
      ]
    }
  },
  "Computer Vision": {
    starter: {
      price: "$1,499",
      period: "per month",
      features: [
        "Basic image processing",
        "Object detection",
        "API access",
        "Cloud storage"
      ]
    }
  }
};

export function ServiceDialog({ isOpen, onClose, service }: ServiceDialogProps) {
  const detailedFeatures = defaultDetailedFeatures[service.name as keyof typeof defaultDetailedFeatures];
  const benefits = defaultBenefits[service.name as keyof typeof defaultBenefits];
  const pricing = defaultPricing[service.name as keyof typeof defaultPricing];

  const Icon = service.icon;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-zinc-950/70 border-zinc-800/50 p-6 gap-0 backdrop-blur-xl">
        <DialogHeader className="pb-5 mb-6 border-b border-zinc-800/50">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className={`relative rounded-xl p-2.5 overflow-hidden`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`} />
                {Icon && <Icon className="relative z-10 h-5 w-5 text-white" />}
              </div>
              <div className="flex-1">
                <DialogTitle className="text-xl font-semibold bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">
                  {service.name}
                </DialogTitle>
                <DialogDescription className="text-sm text-zinc-400 mt-1.5 line-clamp-2">
                  {service.description}
                </DialogDescription>
              </div>
            </div>
            <Badge variant="outline" className="h-6 shrink-0 px-2.5 py-0.5 border-zinc-800/50 text-zinc-400">
              Enterprise
            </Badge>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-6">
          {/* Left Column - Features */}
          <div className="space-y-5">
            <div>
              <h4 className="text-sm font-medium bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent mb-4">Key Features</h4>
              <div className="space-y-3">
                {detailedFeatures.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-center gap-3.5 p-3.5 rounded-lg bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-900/70 hover:border-zinc-700/50 transition-all duration-200"
                  >
                    <div className={`relative flex items-center justify-center shrink-0 rounded-full p-2 overflow-hidden`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-200`} />
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors duration-200">{feature.title}</h5>
                      <p className="text-xs text-zinc-400 mt-0.5 line-clamp-2 leading-relaxed group-hover:text-zinc-300 transition-colors duration-200">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Benefits & Pricing */}
          <div className="space-y-5">
            {/* Benefits */}
            <div>
              <h4 className="text-sm font-medium bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent mb-4">Benefits</h4>
              <div className="space-y-3 bg-zinc-900/50 rounded-lg p-4 border border-zinc-800/50">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <Check className="h-4 w-4 text-emerald-500/70 group-hover:text-emerald-500 transition-colors duration-200 shrink-0" />
                    <span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors duration-200 leading-relaxed">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="rounded-lg border border-zinc-800/50 bg-zinc-900/50 p-4">
              <div className="flex items-baseline gap-1.5 mb-4">
                <span className="text-2xl font-bold bg-gradient-to-br from-white to-zinc-400 bg-clip-text text-transparent">{pricing.starter.price}</span>
                <span className="text-xs text-zinc-400">{pricing.starter.period}</span>
              </div>
              <div className="space-y-3">
                {pricing.starter.features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <Check className="h-3 w-3 text-emerald-500/70 group-hover:text-emerald-500 transition-colors duration-200 shrink-0" />
                    <span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors duration-200 leading-relaxed">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-6 pt-5 border-t border-zinc-800/50">
          <button className={`
            w-full h-11 px-4 rounded-lg
            bg-zinc-900/50 
            border text-sm font-medium text-white
            relative overflow-hidden group
            transition-all duration-200
            hover:border-opacity-50
            ${service.gradient.includes("emerald") ? "border-emerald-500/20 hover:border-emerald-500/30" :
              service.gradient.includes("blue") ? "border-blue-500/20 hover:border-blue-500/30" :
              service.gradient.includes("violet") ? "border-violet-500/20 hover:border-violet-500/30" :
              "border-orange-500/20 hover:border-orange-500/30"
            }
          `}>
            <motion.div 
              initial={{ opacity: 0.1 }}
              whileHover={{ opacity: 0.15 }}
              transition={{ duration: 0.2 }}
              className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} 
            />
            <div className="relative z-10 flex items-center justify-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </div>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 