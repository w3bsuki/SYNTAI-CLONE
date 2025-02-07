# Loading Wrapper Component

This component provides a loading state wrapper for your application, with a smooth fade-in/fade-out transition and a centered loading spinner.

## Code

```tsx
// components/LoadingWrapper.tsx
"use client"

import { useEffect, useState } from "react"

interface LoadingWrapperProps {
  children: React.ReactNode
  /** Optional delay in milliseconds before showing content */
  delay?: number
}

export default function LoadingWrapper({
  children,
  delay = 500,
}: LoadingWrapperProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-zinc-950 flex flex-col items-center justify-center z-50 transition-opacity duration-500">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-zinc-300" />
        <p className="mt-4 text-zinc-400 text-sm">Loading...</p>
      </div>
    )
  }

  return children
}
```

## Usage

Wrap your main content or specific components with the LoadingWrapper:

```tsx
// app/layout.tsx
import LoadingWrapper from "@/components/LoadingWrapper"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body>
        <LoadingWrapper>
          <main>{children}</main>
        </LoadingWrapper>
      </body>
    </html>
  )
}
```

## Features

1. **Smooth Transitions**
   - Uses Tailwind's transition utilities for smooth fade effects
   - Customizable delay before showing content

2. **Centered Loading State**
   - Displays a spinning loader in the center of the screen
   - Shows a subtle "Loading..." text below the spinner

3. **Customization Options**
   - Adjustable delay timing through props
   - Easily customizable styling using Tailwind classes

4. **TypeScript Support**
   - Fully typed props interface
   - Type-safe implementation

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | React.ReactNode | required | The content to be wrapped |
| delay | number | 500 | Delay in milliseconds before showing content |

## Styling

The component uses Tailwind CSS classes for styling:

- `fixed inset-0`: Positions the loader fullscreen
- `bg-zinc-950`: Dark background
- `flex flex-col items-center justify-center`: Centers the loader
- `z-50`: Ensures loader appears above other content
- `transition-opacity duration-500`: Smooth fade transition
- `animate-spin`: Spinning animation for the loader
- `border-t-4 border-zinc-300`: Creates the spinner effect

## Notes

1. The loading state is controlled by an internal state using `useState`
2. The delay is implemented using `setTimeout` and cleaned up properly
3. The component is marked with "use client" for client-side rendering
4. The spinner uses border animation for better performance 