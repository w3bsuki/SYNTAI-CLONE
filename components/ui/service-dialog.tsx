import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Bot, Check, ArrowRight, Zap, Code, Lock, Sparkles, MessageCircle, Brain, Cpu, Blocks, ChartBar, Workflow, Shield, Gauge, Activity, LineChart } from "lucide-react";
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

const serviceDescriptions = {
  "AI Consulting": "Our AI consulting service provides expert guidance for seamless AI integration. We help businesses navigate the complexities of AI adoption with tailored strategies, technical expertise, and comprehensive implementation support.",
  "Machine Learning": "Leverage the power of machine learning with our custom model development and optimization services. From data preprocessing to model deployment, we deliver end-to-end ML solutions that drive business value.",
  "Natural Language": "Transform how you interact with data through our advanced NLP solutions. We build sophisticated language models that understand context, analyze sentiment, and enable natural communication across languages.",
  "Computer Vision": "Unlock visual intelligence with our computer vision solutions. From real-time object detection to advanced image analysis, we help businesses automate visual tasks and extract valuable insights from visual data."
};

const serviceCapabilities = {
  "AI Consulting": [
    { icon: Brain, text: "Strategic Planning" },
    { icon: ChartBar, text: "ROI Analysis" },
    { icon: Blocks, text: "Tech Integration" },
    { icon: Lock, text: "Risk Management" },
    { icon: Activity, text: "Performance Tracking" }
  ],
  "Machine Learning": [
    { icon: Brain, text: "Custom Models" },
    { icon: Cpu, text: "GPU Processing" },
    { icon: ChartBar, text: "Data Analytics" },
    { icon: Lock, text: "Model Security" },
    { icon: Gauge, text: "Real-time Monitoring" }
  ],
  "Natural Language": [
    { icon: MessageCircle, text: "Multi-language" },
    { icon: Brain, text: "Context Aware" },
    { icon: Blocks, text: "Text Analysis" },
    { icon: Lock, text: "Data Privacy" },
    { icon: Activity, text: "Response Optimization" }
  ],
  "Computer Vision": [
    { icon: Brain, text: "Deep Learning" },
    { icon: Cpu, text: "Real-time Vision" },
    { icon: Blocks, text: "3D Analysis" },
    { icon: Lock, text: "Secure Storage" },
    { icon: LineChart, text: "Accuracy Tracking" }
  ]
};

const serviceFeatures = {
  "AI Consulting": [
    "AI readiness assessment",
    "Technology stack optimization",
    "Implementation strategy",
    "Change management",
    "ROI optimization"
  ],
  "Machine Learning": [
    "Custom model development",
    "Data pipeline optimization",
    "Model training & tuning",
    "Performance monitoring",
    "Automated deployment"
  ],
  "Natural Language": [
    "Intelligent chatbots",
    "Semantic analysis",
    "Multi-language support",
    "Context awareness",
    "Real-time processing"
  ],
  "Computer Vision": [
    "Object recognition",
    "Visual inspection",
    "Scene understanding",
    "Real-time tracking",
    "Image enhancement"
  ]
};

export function ServiceDialog({ isOpen, onClose, service }: ServiceDialogProps) {
  const Icon = service.icon;
  const capabilities = serviceCapabilities[service.name as keyof typeof serviceCapabilities] || serviceCapabilities["AI Consulting"];
  const description = serviceDescriptions[service.name as keyof typeof serviceDescriptions] || "";
  const features = serviceFeatures[service.name as keyof typeof serviceFeatures] || service.features;

  // Define text color based on service gradient
  const textColor = service.gradient.includes("emerald") 
    ? "text-emerald-500"
    : service.gradient.includes("blue")
    ? "text-blue-500"
    : service.gradient.includes("violet")
    ? "text-violet-500"
    : "text-orange-500";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] w-[95%] xs:w-[90%] bg-black/90 border-zinc-800/50 p-3 xs:p-4 sm:p-6 gap-0 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-80" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.1),transparent_50%)]" />
        
        {/* Glowing Border Effect */}
        <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-[0.15]`}>
          <div className="absolute inset-[1px] rounded-2xl bg-black/95" />
        </div>

        {/* Header */}
        <DialogHeader className="relative pb-3 xs:pb-4 sm:pb-5 mb-3 sm:mb-4 border-b border-zinc-800/50">
          <div className="flex items-center gap-3 sm:gap-4">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative shrink-0"
            >
              {/* Glowing circle behind icon */}
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 sm:w-10 h-8 sm:h-10 bg-gradient-to-r ${service.gradient} opacity-30`} />
              
              {/* Icon wrapper */}
              <div className="relative flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-20`} />
                <div className="absolute inset-[1px] bg-black rounded-lg" />
                {Icon && <Icon className={`relative z-10 h-5 w-5 sm:h-6 sm:w-6 ${textColor}`} />}
              </div>
            </motion.div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <DialogTitle className={`text-lg xs:text-xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                  {service.name}
                </DialogTitle>
                <span className="text-xs font-mono bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-bold tracking-tight">
                  by SYNTAI
                </span>
              </div>
              <DialogDescription className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                {service.description}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        {/* Main Content */}
        <div className="relative space-y-3 sm:space-y-4">
          {/* Two Column Layout */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {/* Left Column - Core Features */}
            <div className="space-y-2">
              <h4 className={`text-xs sm:text-sm font-medium ${textColor}`}>Core Features</h4>
              <div className="grid gap-1.5 sm:gap-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className={`relative z-10 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-gradient-to-b ${service.gradient} p-[1px]`}>
                      <div className="w-full h-full rounded-md bg-black flex items-center justify-center">
                        <Icon className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${textColor}`} />
                      </div>
                    </div>
                    <span className="relative z-10 text-[10px] sm:text-xs font-medium text-zinc-300 ml-2">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column - Capabilities */}
            <div className="space-y-2">
              <h4 className={`text-xs sm:text-sm font-medium ${textColor}`}>Capabilities</h4>
              <div className="grid gap-1.5 sm:gap-2">
                {capabilities.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <div className={`relative z-10 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-gradient-to-b ${service.gradient} p-[1px]`}>
                      <div className="w-full h-full rounded-md bg-black flex items-center justify-center">
                        <item.icon className={`h-3 w-3 sm:h-3.5 sm:w-3.5 ${textColor}`} />
                      </div>
                    </div>
                    <span className="relative z-10 text-[10px] sm:text-xs font-medium text-zinc-300 ml-2">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section - Description */}
          <div className="space-y-2 pt-2 sm:pt-3 border-t border-zinc-800/50">
            <h4 className={`text-xs sm:text-sm font-medium ${textColor}`}>About {service.name}</h4>
            <p className="text-[10px] sm:text-xs text-zinc-400 leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="relative mt-3 sm:mt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative w-full overflow-hidden rounded-lg"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient}`} />
            <div className="relative flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2">
              <span className="text-[10px] sm:text-xs font-semibold text-white">
                Get Started
              </span>
              <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
            </div>
          </motion.button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 