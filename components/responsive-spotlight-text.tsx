"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useTheme } from "./theme-provider"
import { SpotlightName } from "./spotlight-name"

interface ResponsiveSpotlightTextProps {
  children: React.ReactNode
  className?: string
}

export function ResponsiveSpotlightText({ children, className = "" }: ResponsiveSpotlightTextProps) {
  const { resolvedTheme } = useTheme()

  return (
    <div className={`relative ${className}`}>
      {/* Responsive Container */}
      <div className="spotlight-container">
        <SpotlightName className="inline-block">
          <motion.span
            className={`
              font-bold bg-clip-text text-transparent
              ${
                resolvedTheme === "dark"
                  ? "bg-gradient-to-r from-white via-blue-100 to-purple-200"
                  : "bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900"
              }
              
              /* Responsive Text Sizing */
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl
              
              /* Enhanced Readability */
              leading-tight tracking-tight
              
              /* Smooth Transitions */
              transition-all duration-300 ease-out
            `}
            style={{
              // Enhanced text stroke for better readability
              WebkitTextStroke: resolvedTheme === "dark" ? "1px rgba(255, 255, 255, 0.1)" : "1px rgba(0, 0, 0, 0.1)",

              // Fallback colors for better contrast
              color: resolvedTheme === "dark" ? "#ffffff" : "#1f2937",

              // Letter spacing adjustments for different screen sizes
              letterSpacing: "clamp(-0.02em, -0.01em + 0.1vw, 0.01em)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {children}
          </motion.span>
        </SpotlightName>
      </div>

      {/* Accessibility Enhancements */}
      <div className="sr-only" aria-live="polite">
        Spotlight effect on name: {children}
      </div>
    </div>
  )
}
