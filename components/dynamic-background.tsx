"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useTheme } from "./theme-provider"
import { useEffect, useState } from "react"

interface DynamicBackgroundProps {
  children: React.ReactNode
  className?: string
}

export function DynamicBackground({ children, className }: DynamicBackgroundProps) {
  const { resolvedTheme } = useTheme()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // Tailwind's md breakpoint
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const particleColors =
    resolvedTheme === "dark" ? ["#3b82f6", "#8b5cf6", "#ef4444"] : ["#2563eb", "#7c3aed", "#dc2626"] // Blue, Purple, Red

  const particles = Array.from({ length: isMobile ? 20 : 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * (isMobile ? 8 : 15) + (isMobile ? 2 : 5), // Smaller particles on mobile
    duration: Math.random() * 10 + 10, // Slower on mobile
    delay: Math.random() * 5,
    color: particleColors[Math.floor(Math.random() * particleColors.length)],
  }))

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Background texture overlay */}
      <div
        className="absolute inset-0 opacity-10 dark:opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fillOpacity='0.4' fillRule='evenodd'%3E%3Cpath d='M0 0h3v3H0V0zm3 3h3v3H3V3z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "10px 10px",
          filter: "brightness(0.5)",
        }}
      />

      {/* Animated particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            filter: `blur(${p.size / 4}px)`,
            mixBlendMode: "screen",
          }}
          animate={{
            x: [`${p.x}%`, `${p.x + (Math.random() - 0.5) * 20}%`, `${p.x}%`],
            y: [`${p.y}%`, `${p.y + (Math.random() - 0.5) * 20}%`, `${p.y}%`],
            opacity: [0, 0.7, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: p.duration,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Content layer */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}
