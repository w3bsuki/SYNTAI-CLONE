"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function Contact() {
  return (
    <section id="contact" className="bg-zinc-950 py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="mb-16 text-center text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
          Contact Us
        </h2>
        
        <form className="mx-auto max-w-md space-y-6">
          <Input 
            type="text" 
            placeholder="Name" 
            className="w-full bg-zinc-800 text-zinc-200 placeholder:text-zinc-400 border-zinc-700 py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-colors duration-200"
          />
          
          <Input 
            type="email" 
            placeholder="Email" 
            className="w-full bg-zinc-800 text-zinc-200 placeholder:text-zinc-400 border-zinc-700 py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent transition-colors duration-200"
          />
          
          <Textarea 
            placeholder="Message" 
            rows={4}
            className="w-full bg-zinc-800 text-zinc-200 placeholder:text-zinc-400 border-zinc-700 py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent resize-none transition-colors duration-200"
          />
          
          <Button 
            asChild
            className="w-full bg-zinc-300 text-zinc-900 hover:bg-zinc-200 hover:text-zinc-900 transition-all duration-200 hover:scale-105 hover:shadow-md data-[active=true]:bg-zinc-500"
          >
            <Link href="#contact">
              Send Message
            </Link>
          </Button>
        </form>
      </div>
    </section>
  )
}

