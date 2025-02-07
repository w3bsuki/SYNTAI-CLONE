"use client"

import { useEffect, useState } from "react"
import PageLoader from "@/components/PageLoader"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set a timeout to hide the loader after 500ms
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return isLoading ? <PageLoader /> : children
} 