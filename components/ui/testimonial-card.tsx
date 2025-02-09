import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialCardProps {
  name: string;
  title: string;
  image: string;
  content: string;
  className?: string;
}

export function TestimonialCard({ 
  name,
  title,
  image,
  content,
  className
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col rounded-lg border border-zinc-800",
        "bg-zinc-900/50",
        "p-6",
        "hover:bg-zinc-900/80",
        "max-w-[320px] sm:max-w-[320px]",
        "transition-colors duration-300",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <Avatar className="h-12 w-12">
          <AvatarImage src={image} alt={name} />
        </Avatar>
        <div className="flex flex-col items-start">
          <h3 className="text-md font-semibold leading-none text-zinc-100">
            {name}
          </h3>
          <p className="text-sm text-zinc-400">
            {title}
          </p>
        </div>
      </div>
      <p className="mt-4 text-sm text-zinc-300">
        {content}
      </p>
    </div>
  )
} 