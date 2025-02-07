"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  speed?: number;
}

function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 60,
  className,
  ...props
}: MarqueeProps) {
  return (
    <div 
      className={cn(
        "w-full overflow-hidden mt-32 mb-32 z-10",
        className
      )} 
      {...props}
    >
      <div className="relative flex max-w-[90vw] overflow-hidden py-5">
        <div 
          className={cn(
            "flex w-max animate-marquee",
            pauseOnHover && "hover:[animation-play-state:paused]",
            direction === "right" && "-translate-x-1/2"
          )}
          style={{ "--duration": `${speed}s` } as React.CSSProperties}
        >
          {children}
          {children}
        </div>
      </div>
    </div>
  );
}

interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface LogoMarqueeProps {
  logos: Logo[];
}

export default function LogoMarquee({ logos }: LogoMarqueeProps) {
  const logoElements = logos.map((logo, index) => (
    <div
      key={`${logo.alt}-${index}`}
      className="flex items-center justify-center w-48 mx-8 grayscale hover:grayscale-0 transition-all duration-200"
    >
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className="max-w-full max-h-full object-contain"
      />
    </div>
  ));

  return (
    <Marquee pauseOnHover direction="left" speed={60}>
      {logoElements}
    </Marquee>
  );
} 