import Hero from "@/components/Hero"
import AgentsSection from "@/components/agents-section"
import Services from "@/components/Services"
import AboutUs from "@/components/AboutUs"
import FAQ from "@/components/FAQ"
import { Connect } from "@/components/Connect"
import LogoCloud from "@/components/LogoCloud"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <Hero />
      <LogoCloud />
      <AgentsSection />
      <Services />
      <AboutUs />
      <FAQ />
      <Connect />
    </main>
  )
}

