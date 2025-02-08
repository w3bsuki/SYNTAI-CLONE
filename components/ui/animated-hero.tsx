"use client";

import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Sparkles, Cpu, Bot, Zap } from "lucide-react";
import { ButtonColorful } from "@/components/ui/button-colorful";
import HeroBadge from "@/components/ui/hero-badge";
import { TextShimmer } from "@/components/ui/text-shimmer";
import { Particles } from "@/components/ui/particle-effects";
import { cn } from "@/lib/utils";

const glowingWords = [
  { text: "Automation", color: "from-blue-500 to-cyan-500", icon: Bot },
  { text: "Intelligence", color: "from-purple-500 to-pink-500", icon: Brain },
  { text: "Innovation", color: "from-orange-500 to-red-500", icon: Zap },
];

const techWords = [
  "Machine Learning", "Neural Networks", "Deep Learning", 
  "Computer Vision", "NLP", "Robotics", "Data Science",
  "AI Automation", "Predictive Analytics", "Cloud Computing"
];

function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [floatingWords, setFloatingWords] = useState<Array<{
    text: string;
    x: number;
    y: number;
    z: number;
    opacity: number;
  }>>([]);

  // Interactive grid background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let nodes: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    let animationFrameId: number;
    let mouseX = 0;
    let mouseY = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initNodes();
    };

    const initNodes = () => {
      nodes = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      }));
    };

    const drawNodes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      nodes.forEach((node, i) => {
        nodes.forEach((otherNode, j) => {
          if (i === j) return;
          
          const dx = otherNode.x - node.x;
          const dy = otherNode.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            ctx.strokeStyle = `rgba(62, 161, 255, ${1 - distance / 150})`;
            ctx.stroke();
          }
        });
      });

      // Draw nodes
      nodes.forEach(node => {
        const distanceToMouse = Math.sqrt(
          Math.pow(node.x - mouseX, 2) + Math.pow(node.y - mouseY, 2)
        );
        
        const glow = Math.max(0, 1 - distanceToMouse / 200);
        
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(62, 161, 255, ${0.5 + glow * 0.5})`;
        ctx.fill();
        
        if (glow > 0) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, 8 * glow, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(62, 161, 255, ${glow * 0.3})`;
          ctx.fill();
        }
      });
    };

    const updateNodes = () => {
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      });
    };

    const animate = () => {
      updateNodes();
      drawNodes();
      animationFrameId = requestAnimationFrame(animate);
    };

    canvas.addEventListener('mousemove', (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    });

    window.addEventListener('resize', resize);
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Floating tech words
  useEffect(() => {
    const interval = setInterval(() => {
      const word = techWords[Math.floor(Math.random() * techWords.length)];
      const x = Math.random() * window.innerWidth;
      const y = window.innerHeight;
      const z = Math.random() * 100;

      setFloatingWords(prev => [
        ...prev,
        { text: word, x, y, z, opacity: 1 }
      ].slice(-15)); // Keep only last 15 words
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Word rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % glowingWords.length);
        setIsAnimating(true);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Interactive grid background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-20"
      />

      {/* Floating tech words */}
      {floatingWords.map((word, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none text-sm font-mono"
          initial={{ y: word.y, x: word.x, opacity: 0, scale: 0.8 }}
          animate={{
            y: -100,
            opacity: [0, 0.5, 0],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 10,
            ease: "linear"
          }}
          style={{
            x: word.x,
            zIndex: Math.floor(word.z),
            color: `rgba(62, 161, 255, ${word.opacity})`
          }}
        >
          {word.text}
        </motion.div>
      ))}

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8 text-center">
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"
            />
            <HeroBadge
              text="Next-Gen AI Solutions"
              icon={<Sparkles className="w-4 h-4" />}
              variant="outline"
            />
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-4">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                {/* Split text effect */}
                <div className="relative">
                  <h1 className={cn(
                    "text-5xl md:text-7xl font-bold tracking-tight",
                    "text-white relative z-10",
                    "flex flex-col items-center"
                  )}>
                    <span className="relative inline-block">
                      Transform
                      <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 blur-sm" aria-hidden="true">
                        Transform
                      </span>
                      <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300" aria-hidden="true">
                        Transform
                      </span>
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </span>
                    <span className="relative inline-block mt-2">
                      Your Business
                      <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 blur-sm" aria-hidden="true">
                        Your Business
                      </span>
                      <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-300" aria-hidden="true">
                        Your Business
                      </span>
                      <motion.span 
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-500"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                      />
                    </span>
                  </h1>
                </div>

                {/* Subtle accent elements */}
                <motion.div
                  className="absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-4"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 }}
                >
                  <div className="w-full h-full bg-blue-500 rounded-full blur-sm" />
                  <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping" />
                </motion.div>
                <motion.div
                  className="absolute -right-8 top-1/2 -translate-y-1/2 w-4 h-4"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <div className="w-full h-full bg-blue-500 rounded-full blur-sm" />
                  <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping" />
                </motion.div>

                {/* Glitch effect line */}
                <motion.div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/3 h-px bg-blue-500/50"
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={{ scaleX: 1, opacity: [0, 1, 0.5] }}
                  transition={{ 
                    duration: 2,
                    opacity: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse"
                    }
                  }}
                />
              </motion.div>
            </div>

            <div className="h-[60px] md:h-[84px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    className={cn(
                      "p-2 rounded-full bg-gradient-to-r",
                      glowingWords[currentWordIndex].color
                    )}
                  >
                    {React.createElement(glowingWords[currentWordIndex].icon, {
                      className: "w-6 h-6 text-white",
                    })}
                  </motion.div>
                  <span
                    className={cn(
                      "text-4xl md:text-6xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                      glowingWords[currentWordIndex].color
                    )}
                  >
                    {glowingWords[currentWordIndex].text}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl relative"
          >
            <p className="text-xl text-zinc-400 leading-relaxed">
              Unlock the power of artificial intelligence to streamline operations,
              boost efficiency, and drive innovation across your organization.
            </p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/4 h-px bg-gradient-to-r from-transparent via-zinc-500 to-transparent"
            />
          </motion.div>

          {/* Feature badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            {[
              { icon: Brain, text: "Smart Automation" },
              { icon: Cpu, text: "Advanced AI" },
              { icon: Bot, text: "24/7 Operation" },
            ].map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)"
                }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/50 border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-900/80 transition-all duration-300"
              >
                <feature.icon className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-zinc-400">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <ButtonColorful
              onClick={() => window.location.href = '#services'}
              label="Explore AI Agents"
              className="min-w-[200px] hover:scale-105 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            />
            <ButtonColorful
              onClick={() => window.location.href = '#contact'}
              label="Book a Consultation"
              className="min-w-[200px] hover:scale-105 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export { Hero };