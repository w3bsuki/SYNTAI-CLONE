"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface StaggeredFadeInProps {
  children: React.ReactNode
  /** Delay between each child's animation in seconds */
  delay?: number
  /** Optional className to extend the default styles */
  className?: string
}

export default function StaggeredFadeIn({
  children,
  delay = 0.1,
  className = "",
}: StaggeredFadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * delay,
        ease: "easeInOut",
      },
    }),
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {React.Children.map(children, (child, index) => {
        return (
          <motion.div variants={variants} custom={index}>
            {child}
          </motion.div>
        )
      })}
    </motion.div>
  )
} 