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
      <DialogContent className="sm:max-w-[600px] w-[95%] xs:w-[90%] bg-black/90 border-zinc-800/50 p-4 gap-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent opacity-80" />
        <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-[0.07]`} />
        
        {/* Header */}
        <div className="relative flex items-center gap-3 mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-black/80 border border-zinc-800/50">
            <Icon className={`w-5 h-5 ${textColor}`} />
          </div>
          <div>
            <h2 className={`text-xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
              {service.name}
            </h2>
            <p className="text-sm text-zinc-400">
              {service.description}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="relative space-y-6">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Core Features */}
            <div className="space-y-3">
              <h3 className={`text-sm font-medium ${textColor}`}>Core Features</h3>
              <div className="space-y-2">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="px-3 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50"
                  >
                    <span className="text-sm text-zinc-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            <div className="space-y-3">
              <h3 className={`text-sm font-medium ${textColor}`}>Capabilities</h3>
              <div className="space-y-2">
                {capabilities.map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800/50"
                  >
                    <div className="flex items-center justify-center w-6 h-6 rounded-md bg-black/80 border border-zinc-800/50">
                      <item.icon className={`w-3.5 h-3.5 ${textColor}`} />
                    </div>
                    <span className="text-sm text-zinc-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-2">
            <h3 className={`text-sm font-medium ${textColor}`}>About {service.name}</h3>
            <p className="text-sm text-zinc-400 leading-relaxed">
              {description}
            </p>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full px-4 py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-medium text-white bg-gradient-to-r ${service.gradient} hover:opacity-90 transition-opacity`}
          >
            Get Started
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </DialogContent>
    </Dialog>
  );
} 