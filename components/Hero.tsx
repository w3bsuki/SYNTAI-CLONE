import { Hero } from "@/components/ui/animated-hero";
import { LogoCarousel } from "@/components/ui/LogoCarousel";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex flex-col min-h-[70vh] bg-black"
    >
      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Hero />
        </div>
      </div>
      <LogoCarousel columnCount={3} />
    </section>
  );
}