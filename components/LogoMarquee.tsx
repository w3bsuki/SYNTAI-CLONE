import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"

const logos = [
  { src: "/logos/aws.svg", alt: "AWS" },
  { src: "/logos/google-cloud.svg", alt: "Google Cloud" },
  { src: "/logos/azure.svg", alt: "Azure" },
  { src: "/logos/openai.svg", alt: "OpenAI" },
  { src: "/logos/anthropic.svg", alt: "Anthropic" },
  { src: "/logos/nvidia.svg", alt: "NVIDIA" },
  { src: "/logos/intel.svg", alt: "Intel" },
  { src: "/logos/ibm.svg", alt: "IBM" },
]

export default function LogoMarquee() {
  return (
    <div className="relative w-full">
      {/* Gradient Overlays */}
      <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[20%] bg-gradient-to-r from-black to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-[20%] bg-gradient-to-l from-black to-transparent" />
      
      <Marquee 
        speed={40} 
        pauseOnHover 
        className="py-8"
      >
        {logos.map((logo) => (
          <div
            key={logo.alt}
            className="mx-8 flex h-12 w-24 items-center justify-center"
          >
            <div className="relative h-8 w-full transition-all duration-300 hover:scale-110">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              />
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  )
} 