import Image from "next/image"

const logos = [
  { src: "/logos/microsoft.svg", alt: "Microsoft" },
  { src: "/logos/meta.svg", alt: "Meta" },
  { src: "/logos/openai.svg", alt: "OpenAI" },
  { src: "/logos/cohere.svg", alt: "Cohere" },
  { src: "/logos/adept.svg", alt: "Adept" },
  { src: "/logos/character-ai.svg", alt: "Character.ai" },
]

export default function LogoCloud() {
  return (
    <div className="w-full bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-4">
          <p className="text-sm text-zinc-500">
            SyntAI works with{" "}
            <span className="text-zinc-300 underline decoration-zinc-700 underline-offset-4">
              Generative AI Companies
            </span>
            , U.S. Government Agencies & Enterprises
          </p>
        </div>
        <div className="mx-auto grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 lg:grid-cols-6 pb-8">
          {logos.map((logo) => (
            <div key={logo.alt} className="relative h-6 grayscale opacity-50 transition-all duration-300 hover:grayscale-0 hover:opacity-100">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 