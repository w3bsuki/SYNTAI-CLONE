import Hero from "@/components/Hero"
import AgentsSection from "@/components/agents-section"
import Services from "@/components/Services"
import AboutUs from "@/components/AboutUs"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import { Connect } from "@/components/Connect"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gray-900 text-white">
      <Hero />
      <AgentsSection />
      <Services />
      <AboutUs />
      <Testimonials />
      <FAQ />
      <Connect />
    </main>
  )
}

