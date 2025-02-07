"use client";

import { Icons } from "@/components/ui/icons";

const logos = [
  { icon: Icons.react, name: "React" },
  { icon: Icons.tailwind, name: "Tailwind CSS" },
  { icon: Icons.radix, name: "Radix UI" },
  { icon: Icons.github, name: "GitHub" },
  { icon: Icons.twitter, name: "Twitter" },
];

export function LogoMarquee() {
  return (
    <div className="w-full overflow-hidden bg-black py-12">
      <div className="flex w-full">
        <div 
          className="flex animate-marquee items-center gap-16 py-2 whitespace-nowrap"
          style={{ minWidth: "100%" }}
        >
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex items-center gap-2 transition-colors hover:text-zinc-100 text-zinc-500"
            >
              <logo.icon className="h-8 w-8" />
            </div>
          ))}
        </div>
        <div 
          className="flex animate-marquee items-center gap-16 py-2 whitespace-nowrap"
          style={{ minWidth: "100%" }}
        >
          {logos.map((logo, i) => (
            <div
              key={`${i}-clone`}
              className="flex items-center gap-2 transition-colors hover:text-zinc-100 text-zinc-500"
            >
              <logo.icon className="h-8 w-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 