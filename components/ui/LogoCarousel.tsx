"use client"

import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Icons } from "@/components/ui/icons"
import { TextShimmer } from "@/components/ui/text-shimmer"

interface Logo {
  name: string
  id: number
  img: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface LogoColumnProps {
  logos: Logo[]
  index: number
  currentTime: number
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos)
  const columns: Logo[][] = Array.from({ length: columnCount }, () => [])
  
  // Ensure each column gets exactly 3 logos
  for (let i = 0; i < columnCount; i++) {
    columns[i] = shuffled.slice(i * 3, (i + 1) * 3)
    // If we don't have enough logos, repeat from the beginning
    while (columns[i].length < 3) {
      columns[i].push(shuffled[columns[i].length % shuffled.length])
    }
  }

  return columns
}

const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentTime }) => {
    const cycleInterval = 2000
    const columnDelay = index * 200
    const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length)
    const currentIndex = Math.floor(adjustedTime / cycleInterval)
    const CurrentLogo = useMemo(() => logos[currentIndex].img, [logos, currentIndex])

    return (
      <motion.div
        className="relative h-12 w-20 overflow-hidden md:h-16 md:w-32"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: index * 0.1,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${logos[currentIndex].id}-${currentIndex}`}
            className="absolute inset-0 flex items-center justify-center"
            initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
            animate={{
              y: "0%",
              opacity: 1,
              filter: "blur(0px)",
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                mass: 1,
                bounce: 0.2,
                duration: 0.5,
              },
            }}
            exit={{
              y: "-20%",
              opacity: 0,
              filter: "blur(6px)",
              transition: {
                type: "tween",
                ease: "easeIn",
                duration: 0.3,
              },
            }}
          >
            <CurrentLogo className="h-10 w-10 max-h-[80%] max-w-[80%] object-contain md:h-12 md:w-12 text-white opacity-60 hover:opacity-100 transition-opacity" />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    )
  }
)

LogoColumn.displayName = "LogoColumn"

const logos: Logo[] = [
  { name: "React", id: 1, img: Icons.react },
  { name: "Tailwind", id: 2, img: Icons.tailwind },
  { name: "Radix UI", id: 3, img: Icons.radix },
  { name: "GitHub", id: 4, img: Icons.github },
  { name: "Twitter", id: 5, img: Icons.twitter },
  { name: "NPM", id: 6, img: Icons.npm },
]

interface LogoCarouselProps {
  columnCount?: number
}

export function LogoCarousel({ columnCount = 2 }: LogoCarouselProps) {
  const [logoSets, setLogoSets] = useState<Logo[][]>([])
  const [currentTime, setCurrentTime] = useState(0)

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100)
  }, [])

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100)
    return () => clearInterval(intervalId)
  }, [updateTime])

  useEffect(() => {
    const distributedLogos = distributeLogos(logos, columnCount)
    setLogoSets(distributedLogos)
  }, [columnCount])

  return (
    <div className="w-full overflow-hidden bg-black py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center space-y-2">
            <p className="text-sm font-light text-zinc-400 uppercase tracking-widest">
              Trusted by Industry Leaders
            </p>
            <h3 className="text-xl font-extralight tracking-wide text-white/90">
              SYNTAI works with <span className="font-light">Generative AI Companies</span>, 
              <span className="font-normal text-white"> U.S. Government Agencies </span>
              & <span className="font-light">Enterprises</span>
            </h3>
          </div>
          <div className="flex justify-center space-x-16">
            {logoSets.map((logos, index) => (
              <LogoColumn
                key={index}
                logos={logos}
                index={index}
                currentTime={currentTime}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 