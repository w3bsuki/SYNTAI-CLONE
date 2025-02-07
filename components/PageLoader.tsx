"use client"

export default function PageLoader() {
  return (
    <div className="fixed inset-0 bg-zinc-950 flex flex-col items-center justify-center z-50 transition-all duration-500">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-zinc-300" />
      <p className="mt-4 text-zinc-400 text-sm">Loading...</p>
    </div>
  )
} 