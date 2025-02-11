import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Bot, Check, ArrowRight, Zap, Code, Lock, Sparkles, MessageCircle, Brain, Cpu, Blocks, ChartBar, Workflow, Shield, Gauge, Activity, LineChart, Globe, Search, Microscope, LayoutGrid } from "lucide-react";
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
  "AI Consulting": "Transform your business with our expert AI consulting services. We provide comprehensive guidance for seamless AI integration, helping businesses navigate the complexities of AI adoption with tailored strategies, technical expertise, and end-to-end implementation support. Our team of experts works closely with you to identify opportunities, optimize processes, and ensure successful AI deployment.",
  "Machine Learning": "Harness the power of machine learning with our state-of-the-art solutions. From custom model development to automated decision systems, we deliver end-to-end ML solutions that drive tangible business value. Our advanced algorithms and optimization techniques ensure high performance and accuracy across all your ML applications.",
  "Natural Language": "Transform how you interact with data through our advanced NLP solutions. We build sophisticated language models that understand context, analyze sentiment, and enable natural communication across languages. Our solutions power intelligent chatbots, semantic analysis, and multilingual support systems that revolutionize customer interactions.",
  "Computer Vision": "Unlock visual intelligence with our cutting-edge computer vision solutions. From real-time object detection to advanced scene understanding, we help businesses automate visual tasks and extract valuable insights from images and video streams. Our solutions enable automated quality control, security monitoring, and intelligent visual analysis."
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
    { icon: Bot, text: "Intelligent Chatbots" },
    { icon: Brain, text: "Semantic Analysis" },
    { icon: Globe, text: "Multi-language" },
    { icon: Lock, text: "Data Privacy" },
    { icon: Activity, text: "Response Optimization" }
  ],
  "Computer Vision": [
    { icon: Search, text: "Object Recognition" },
    { icon: Microscope, text: "Visual Inspection" },
    { icon: LayoutGrid, text: "Scene Analysis" },
    { icon: Lock, text: "Secure Processing" },
    { icon: Activity, text: "Real-time Tracking" }
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
      <DialogContent className="bg-black/95 border-zinc-800/50 w-[95%] max-w-lg p-4 sm:p-6 gap-4">
        <DialogHeader className="space-y-2">
          <DialogTitle className="text-lg sm:text-xl text-white">
            {service.name}
          </DialogTitle>
          <DialogDescription className="text-sm text-zinc-400 [text-shadow:_0_1px_1px_rgb(0_0_0_/_40%)]">
            {service.description}
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-2 sm:py-4">
          {/* Two Column Layout */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Core Features */}
            <div className="space-y-2">
              <h4 className={`text-xs sm:text-sm font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>Core Features</h4>
              <div className="grid gap-1.5 sm:gap-2">
                {serviceFeatures[service.name as keyof typeof serviceFeatures].map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50"
                  >
                    <div className={`relative z-10 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-gradient-to-b ${service.gradient} p-[1px]`}>
                      <div className="w-full h-full rounded-md bg-black flex items-center justify-center">
                        <Bot className={`h-3 w-3 sm:h-3.5 sm:w-3.5 text-zinc-400`} />
                      </div>
                    </div>
                    <span className="relative z-10 text-[10px] sm:text-xs font-medium text-zinc-300 ml-2 [text-shadow:_0_1px_1px_rgb(0_0_0_/_40%)]">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            <div className="space-y-2">
              <h4 className={`text-xs sm:text-sm font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>Capabilities</h4>
              <div className="grid gap-1.5 sm:gap-2">
                {serviceCapabilities[service.name as keyof typeof serviceCapabilities].map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    whileHover={{ scale: 1.01 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-center px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50"
                  >
                    <div className={`relative z-10 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-md bg-gradient-to-b ${service.gradient} p-[1px]`}>
                      <div className="w-full h-full rounded-md bg-black flex items-center justify-center">
                        <item.icon className={`h-3 w-3 sm:h-3.5 sm:w-3.5 text-zinc-400`} />
                      </div>
                    </div>
                    <span className="relative z-10 text-[10px] sm:text-xs font-medium text-zinc-300 ml-2 [text-shadow:_0_1px_1px_rgb(0_0_0_/_40%)]">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-2 pt-2 sm:pt-3 border-t border-zinc-800/50">
            <h4 className={`text-xs sm:text-sm font-medium bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>About {service.name}</h4>
            <p className="text-[10px] sm:text-xs text-zinc-400 leading-relaxed [text-shadow:_0_1px_1px_rgb(0_0_0_/_40%)]">
              {serviceDescriptions[service.name as keyof typeof serviceDescriptions]}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="relative mt-3 sm:mt-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-white bg-gradient-to-r ${service.gradient} hover:opacity-90 transition-opacity`}
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 