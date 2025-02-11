"use client"

import Link from "next/link"
import { ArrowRight, Twitter, Linkedin, Send } from "lucide-react"
import { motion } from "framer-motion"
import { RainbowButton } from "@/components/ui/rainbow-button"

export default function CustomFooter() {
  return (
    <footer className="relative overflow-hidden bg-black border-t border-zinc-800/50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,24,27,0.5),rgba(0,0,0,1))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-16">
            {/* Stay Connected Section */}
            <div className="md:col-span-5 space-y-4">
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Stay Connected
              </h3>
              <p className="text-sm text-zinc-400 max-w-md">
                Join our newsletter for the latest updates and exclusive offers. Be the first to know about new AI solutions and innovations.
              </p>
              
              {/* Newsletter Form */}
              <div className="relative max-w-md">
                <form className="relative flex items-center">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-zinc-900/50 text-sm text-zinc-200 placeholder:text-zinc-500 px-4 py-2.5 rounded-lg focus:outline-none focus:ring-1 focus:ring-violet-500/20 border border-zinc-800"
                  />
                  <button
                    type="submit"
                    className="shrink-0 ml-2 p-2.5 rounded-lg bg-violet-500 text-white hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3 md:col-start-7 space-y-4">
              <h3 className="text-sm font-semibold tracking-wide text-zinc-300 uppercase">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {["Home", "Services", "About Us", "Contact"].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`/#${item.toLowerCase().replace(" ", "-")}`}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-3 md:col-start-10 space-y-4">
              <h3 className="text-sm font-semibold tracking-wide text-zinc-300 uppercase">
                Contact Us
              </h3>
              <div className="space-y-2">
                <p className="text-sm text-zinc-400">AI Agency</p>
                <p className="text-sm text-zinc-400">Email: contact@ai-agency.com</p>
                <div className="flex items-center gap-4 pt-2">
                  <Link 
                    href="https://twitter.com" 
                    target="_blank"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                  </Link>
                  <Link 
                    href="https://linkedin.com" 
                    target="_blank"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </Link>
                </div>
                <div className="pt-4">
                  <RainbowButton
                    onClick={() => window.location.href = '/#contact'}
                    variant="black"
                    className="w-full"
                  >
                    <span>Contact Us</span>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </RainbowButton>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 pt-6 border-t border-zinc-800/50">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-zinc-500">
                © 2024 AI Agency. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <Link 
                  href="/privacy-policy"
                  className="text-xs text-zinc-500 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms-of-service"
                  className="text-xs text-zinc-500 hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}