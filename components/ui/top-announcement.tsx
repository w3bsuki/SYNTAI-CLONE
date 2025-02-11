"use client";

import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import { Announcement } from "./announcement";

export function TopAnnouncement() {
  return (
    <div className="w-full flex justify-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Announcement 
          className="cursor-pointer hover:scale-[1.02] active:scale-[0.98] transition-transform"
          onClick={() => window.location.href = '#agents'}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-blue-600/10 border border-blue-500/20">
            <span className="text-[13px] font-medium whitespace-nowrap">
              <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-600 bg-clip-text text-transparent">Meet AIDR</span>
              <span className="text-white">, our Fullstack Agent</span>
            </span>
            <ArrowDown className="w-4 h-4 text-cyan-400 flex-shrink-0" />
          </div>
        </Announcement>
      </motion.div>
    </div>
  );
} 