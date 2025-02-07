'use client';
import React, { useMemo, type JSX } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TextShimmerProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  duration?: number;
  spread?: number;
}

export function TextShimmer({
  children,
  as: Component = 'p',
  className,
  duration = 2,
  spread = 2,
}: TextShimmerProps) {
  const MotionComponent = motion(Component as keyof JSX.IntrinsicElements);

  const dynamicSpread = useMemo(() => {
    const text = React.Children.toArray(children)
      .map(child => {
        if (typeof child === 'string' || typeof child === 'number') {
          return child.toString();
        }
        return '';
      })
      .join('');
    
    return Math.max(text.length * spread, 40); // Increased minimum spread
  }, [children, spread]);

  return (
    <MotionComponent
      className={cn(
        'relative inline-block bg-[length:200%_100%] bg-clip-text',
        'text-transparent',
        className
      )}
      initial={{ backgroundPosition: '200% center' }}
      animate={{ backgroundPosition: '0% center' }}
      transition={{
        repeat: Infinity,
        duration: duration * 2, // Slower animation
        ease: 'linear',
      }}
      style={{
        backgroundImage: `linear-gradient(90deg, 
          var(--tw-gradient-from, rgba(255,255,255,0.75)) 0%, 
          var(--tw-gradient-via, rgba(255,255,255,0.25)) 25%,
          var(--tw-gradient-to, rgba(255,255,255,0.75)) 50%,
          var(--tw-gradient-via, rgba(255,255,255,0.25)) 75%,
          var(--tw-gradient-from, rgba(255,255,255,0.75)) 100%
        )`,
        '--tw-gradient-from': 'rgba(255,255,255,0.1)',
        '--tw-gradient-via': 'rgba(255,255,255,0.75)',
        '--tw-gradient-to': 'rgba(255,255,255,0.1)',
      } as React.CSSProperties}
    >
      {children}
    </MotionComponent>
  );
} 