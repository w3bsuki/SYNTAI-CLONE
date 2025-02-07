'use client'

import { Suspense, lazy, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    return () => setIsMounted(false)
  }, [])

  if (!isMounted) {
    return null
  }

  if (isError) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-zinc-800/50 rounded-lg">
        <div className="text-center space-y-2">
          <p className="text-zinc-400">Unable to load 3D scene</p>
          <p className="text-sm text-zinc-500">Please try refreshing the page</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full w-full">
      {isLoading && (
        <motion.div 
          className="absolute inset-0 flex items-center justify-center bg-zinc-800/50 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-zinc-400 border-t-transparent" />
            <p className="text-sm text-zinc-400">Loading 3D scene...</p>
          </div>
        </motion.div>
      )}
      
      <Suspense fallback={null}>
        <Spline
          scene={scene}
          className={className}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsError(true)
            setIsLoading(false)
          }}
        />
      </Suspense>
    </div>
  )
} 