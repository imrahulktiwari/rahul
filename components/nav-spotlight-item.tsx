"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import { useTheme } from "./theme-provider"

interface NavSpotlightItemProps {
  children: React.ReactNode
  onClick: () => void
  className?: string
}

export function NavSpotlightItem({ children, onClick, className }: NavSpotlightItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { resolvedTheme } = useTheme()

  const spotlightColor = resolvedTheme === "dark" ? "rgba(59, 130, 246, 0.3)" : "rgba(37, 99, 235, 0.2)" // blue-400/30 or blue-600/20

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.button
        onClick={onClick}
        className={`relative z-10 px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 ${className}`}
      >
        {children}
      </motion.button>

      {/* Subtle spotlight effect */}
      <motion.span
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${spotlightColor} 0%, transparent 70%)`,
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.5 : 0.5,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.div>
  )
}
