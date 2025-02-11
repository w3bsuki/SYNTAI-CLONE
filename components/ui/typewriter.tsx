import { useEffect, useState } from "react"
import { motion, Variants } from "framer-motion"
import { cn } from "@/lib/utils"

interface TypewriterText {
  prefix: string
  suffix: string
  prefixColor: string
  suffixColor: string
}

interface TypewriterProps {
  text: string | string[] | TypewriterText[]
  speed?: number
  initialDelay?: number
  waitTime?: number
  deleteSpeed?: number
  loop?: boolean
  className?: string
  showCursor?: boolean
  hideCursorOnType?: boolean
  cursorChar?: string | React.ReactNode
  cursorAnimationVariants?: {
    initial: Variants["initial"]
    animate: Variants["animate"]
  }
  cursorClassName?: string
  onTextChange?: (index: number) => void
}

const Typewriter = ({
  text,
  speed = 50,
  initialDelay = 0,
  waitTime = 2000,
  deleteSpeed = 30,
  loop = true,
  className,
  showCursor = true,
  hideCursorOnType = false,
  cursorChar = "|",
  cursorClassName = "ml-1",
  cursorAnimationVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.01,
        repeat: Infinity,
        repeatDelay: 0.4,
        repeatType: "reverse",
      },
    },
  },
  onTextChange,
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState<{ prefix: string; suffix: string }>({ prefix: "", suffix: "" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const texts = Array.isArray(text) ? text : [text]
  const isColoredText = (item: any): item is TypewriterText => 
    typeof item === "object" && "prefix" in item && "suffix" in item

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const currentText = texts[currentTextIndex]
    const currentTextObj = isColoredText(currentText) 
      ? currentText 
      : { prefix: currentText, suffix: "" }
    const fullText = isColoredText(currentText) 
      ? currentText.prefix + currentText.suffix 
      : currentText.toString()

    const startTyping = () => {
      if (isDeleting) {
        if (displayText.prefix === "" && displayText.suffix === "") {
          setIsDeleting(false)
          if (currentTextIndex === texts.length - 1 && !loop) {
            return
          }
          const nextIndex = (currentTextIndex + 1) % texts.length
          setCurrentTextIndex(nextIndex)
          onTextChange?.(nextIndex)
          setCurrentIndex(0)
          timeout = setTimeout(() => {}, waitTime)
        } else {
          timeout = setTimeout(() => {
            if (displayText.suffix.length > 0) {
              setDisplayText(prev => ({ ...prev, suffix: prev.suffix.slice(0, -1) }))
            } else {
              setDisplayText(prev => ({ ...prev, prefix: prev.prefix.slice(0, -1) }))
            }
          }, deleteSpeed)
        }
      } else {
        if (currentIndex < fullText.length) {
          timeout = setTimeout(() => {
            const char = fullText[currentIndex]
            if (isColoredText(currentText)) {
              if (currentIndex < currentText.prefix.length) {
                setDisplayText(prev => ({ ...prev, prefix: prev.prefix + char }))
              } else {
                setDisplayText(prev => ({ ...prev, suffix: prev.suffix + char }))
              }
            } else {
              setDisplayText(prev => ({ ...prev, prefix: prev.prefix + char }))
            }
            setCurrentIndex((prev) => prev + 1)
          }, speed)
        } else if (texts.length > 1) {
          timeout = setTimeout(() => {
            setIsDeleting(true)
          }, waitTime)
        }
      }
    }

    // Apply initial delay only at the start
    if (currentIndex === 0 && !isDeleting && displayText.prefix === "" && displayText.suffix === "") {
      timeout = setTimeout(startTyping, initialDelay)
    } else {
      startTyping()
    }

    return () => clearTimeout(timeout)
  }, [
    currentIndex,
    displayText,
    isDeleting,
    speed,
    deleteSpeed,
    waitTime,
    texts,
    currentTextIndex,
    loop,
    onTextChange
  ])

  const currentText = texts[currentTextIndex]
  const prefixColor = isColoredText(currentText) ? currentText.prefixColor : ""
  const suffixColor = isColoredText(currentText) ? currentText.suffixColor : ""

  return (
    <div className={`inline whitespace-pre-wrap tracking-tight ${className}`}>
      <span className={prefixColor}>{displayText.prefix}</span>
      <span className={suffixColor}>{displayText.suffix}</span>
      {showCursor && (
        <motion.span
          variants={cursorAnimationVariants}
          className={cn(
            cursorClassName,
            hideCursorOnType &&
              (currentIndex < (isColoredText(currentText) 
                ? currentText.prefix.length + currentText.suffix.length 
                : currentText.toString().length) || isDeleting)
              ? "hidden"
              : ""
          )}
          initial="initial"
          animate="animate"
        >
          {cursorChar}
        </motion.span>
      )}
    </div>
  )
}

export { Typewriter } 