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

  // Define color based on service gradient
  const textColor = service.gradient.includes("emerald") 
    ? "text-emerald-500"
    : service.gradient.includes("blue")
    ? "text-blue-500"
    : service.gradient.includes("violet")
    ? "text-violet-500"
    : "text-orange-500";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-black/90 border-zinc-800/50 p-6 gap-0 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-80" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_50%)]" />
        
        {/* Glowing Border Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-[0.15]`}>
          <div className="absolute inset-[1px] rounded-2xl bg-black/95" />
        </div>

        {/* Header */}
        <DialogHeader className="relative pb-5 mb-6 border-b border-zinc-800/50">
          <div className="flex flex-col items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative"
            >
              {/* Glowing circle behind icon */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-r ${service.gradient} opacity-30 rounded-full blur-sm`} />
              
              {/* Icon wrapper */}
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20`} />
                <div className="absolute inset-[1px] bg-black rounded-lg" />
                {Icon && <Icon className={`relative z-10 h-6 w-6 ${textColor}`} />}
              </div>
            </motion.div>
            <div className="flex flex-col items-center text-center">
              <DialogTitle className={`text-xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                {service.name}
              </DialogTitle>
              <DialogDescription className="text-sm text-zinc-400 mt-1.5 max-w-sm">
                {service.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Main Content */}
        <div className="relative space-y-6">
          {/* Features */}
          <div className="space-y-3">
            <h4 className={`text-sm font-medium ${textColor}`}>Key Features</h4>
            <div className="grid gap-2">
              {detailedFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.01 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-center px-3 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className={`relative z-10 flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-b ${service.gradient} p-[1px]`}>
                    <div className="w-full h-full rounded-md bg-black flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <span className="relative z-10 text-xs font-medium text-zinc-300 ml-2.5">
                    {feature.title}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Capabilities */}
          <div className="space-y-3">
            <h4 className={`text-sm font-medium ${textColor}`}>Capabilities</h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { icon: Zap, text: "Real-time processing" },
                { icon: Code, text: "API Integration" },
                { icon: Lock, text: "Enterprise security" },
                { icon: Sparkles, text: "Advanced AI models" }
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  whileHover={{ scale: 1.01 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <item.icon className={`h-3.5 w-3.5 ${textColor} shrink-0`} />
                  <span className="text-xs text-zinc-300">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="relative mt-6 pt-5 border-t border-zinc-800/50">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full overflow-hidden rounded-lg"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient}`} />
            <div className="relative flex items-center justify-center gap-2 px-4 py-2">
              <span className="text-xs font-semibold text-white">
                Get Started
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-white" />
            </div>
          </motion.button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 