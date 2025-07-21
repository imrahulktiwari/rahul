"use client"

import { motion } from "framer-motion"
import { useTheme } from "./theme-provider"
import type { ReactNode } from "react"

interface ThemeAwareMotionProps {
  children: ReactNode
  className?: string
  [key: string]: any
}

// Theme-aware floating elements for hero section
export function ThemeAwareFloatingElements() {
  const { resolvedTheme } = useTheme()

  const lightThemeColors = [
    "bg-blue-300/30",
    "bg-purple-300/30",
    "bg-pink-300/30",
    "bg-indigo-300/30",
    "bg-cyan-300/30",
  ]

  const darkThemeColors = ["bg-blue-500/20", "bg-purple-500/20", "bg-pink-500/20", "bg-indigo-500/20", "bg-cyan-500/20"]

  const colors = resolvedTheme === "dark" ? darkThemeColors : lightThemeColors

  return (
    <>
      <motion.div
        className={`absolute top-20 left-20 w-72 h-72 ${colors[0]} rounded-full mix-blend-multiply filter blur-xl`}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute top-40 right-20 w-72 h-72 ${colors[1]} rounded-full mix-blend-multiply filter blur-xl`}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.7, 0.4],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className={`absolute bottom-20 left-40 w-72 h-72 ${colors[2]} rounded-full mix-blend-multiply filter blur-xl`}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className={`absolute top-60 left-1/2 w-48 h-48 ${colors[3]} rounded-full mix-blend-multiply filter blur-xl`}
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.6, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          delay: 0.5,
        }}
      />
      <motion.div
        className={`absolute bottom-40 right-1/3 w-56 h-56 ${colors[4]} rounded-full mix-blend-multiply filter blur-xl`}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.3, 0.4],
          x: [0, -20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 9,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </>
  )
}

// Theme-aware gradient text
export function ThemeAwareGradientText({ children, className = "" }: ThemeAwareMotionProps) {
  const { resolvedTheme } = useTheme()

  const lightGradient = "bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600"
  const darkGradient = "bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400"

  return (
    <span
      className={`${resolvedTheme === "dark" ? darkGradient : lightGradient} bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  )
}

// Theme-aware skill progress bars
export function ThemeAwareSkillBar({ skill, index }: { skill: any; index: number }) {
  const { resolvedTheme } = useTheme()

  const lightColors = [
    "from-blue-400 to-blue-600",
    "from-gray-600 to-gray-800",
    "from-purple-400 to-purple-600",
    "from-green-400 to-green-600",
    "from-orange-400 to-orange-600",
    "from-indigo-400 to-indigo-600",
  ]

  const darkColors = [
    "from-blue-300 to-blue-500",
    "from-gray-400 to-gray-600",
    "from-purple-300 to-purple-500",
    "from-green-300 to-green-500",
    "from-orange-300 to-orange-500",
    "from-indigo-300 to-indigo-500",
  ]

  const gradients = resolvedTheme === "dark" ? darkColors : lightColors

  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: `${skill.level}%`, opacity: 1 }}
        transition={{
          duration: 1.5,
          delay: index * 0.1,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className={`h-full bg-gradient-to-r ${gradients[index % gradients.length]} rounded-full relative overflow-hidden`}
      >
        <motion.div
          className="absolute inset-0 bg-white/20"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            delay: index * 0.2,
          }}
        />
      </motion.div>
    </div>
  )
}

// Theme-aware card hover effects
export function ThemeAwareCard({ children, className = "", ...props }: ThemeAwareMotionProps) {
  const { resolvedTheme } = useTheme()

  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow:
          resolvedTheme === "dark"
            ? "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
            : "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}

// Theme-aware button with ripple effect
export function ThemeAwareButton({ children, className = "", onClick, ...props }: ThemeAwareMotionProps) {
  const { resolvedTheme } = useTheme()

  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: resolvedTheme === "dark" ? "0 0 20px rgba(59, 130, 246, 0.4)" : "0 0 20px rgba(37, 99, 235, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`relative overflow-hidden ${className}`}
      onClick={onClick}
      {...props}
    >
      <motion.div
        className={`absolute inset-0 ${
          resolvedTheme === "dark"
            ? "bg-gradient-to-r from-blue-400/20 to-purple-400/20"
            : "bg-gradient-to-r from-blue-600/20 to-purple-600/20"
        }`}
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}

// Theme-aware timeline dot
export function ThemeAwareTimelineDot({ isActive = false }: { isActive?: boolean }) {
  const { resolvedTheme } = useTheme()

  return (
    <motion.div
      className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-gray-800"
      style={{
        background:
          resolvedTheme === "dark"
            ? "linear-gradient(135deg, #3b82f6, #8b5cf6)"
            : "linear-gradient(135deg, #2563eb, #7c3aed)",
      }}
      whileHover={{ scale: 1.5 }}
      animate={
        isActive
          ? {
              boxShadow: [
                `0 0 0 0 ${resolvedTheme === "dark" ? "rgba(59, 130, 246, 0.7)" : "rgba(37, 99, 235, 0.7)"}`,
                `0 0 0 10px ${resolvedTheme === "dark" ? "rgba(59, 130, 246, 0)" : "rgba(37, 99, 235, 0)"}`,
              ],
            }
          : {}
      }
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
    >
      <motion.div
        className="w-full h-full rounded-full"
        animate={{
          background: resolvedTheme === "dark" ? ["#3b82f6", "#8b5cf6", "#3b82f6"] : ["#2563eb", "#7c3aed", "#2563eb"],
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      />
    </motion.div>
  )
}

// Theme-aware social media icons
export function ThemeAwareSocialIcon({
  children,
  href,
  className = "",
}: { children: ReactNode; href: string; className?: string }) {
  const { resolvedTheme } = useTheme()

  return (
    <motion.a
      href={href}
      className={`${className} transition-colors duration-300`}
      whileHover={{
        scale: 1.2,
        color: resolvedTheme === "dark" ? "#60a5fa" : "#2563eb",
        filter:
          resolvedTheme === "dark"
            ? "drop-shadow(0 0 8px rgba(96, 165, 250, 0.5))"
            : "drop-shadow(0 0 8px rgba(37, 99, 235, 0.5))",
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.a>
  )
}

// Theme-aware loading spinner
export function ThemeAwareLoadingSpinner() {
  const { resolvedTheme } = useTheme()

  return (
    <motion.div
      className={`w-8 h-8 border-2 border-t-transparent rounded-full ${
        resolvedTheme === "dark" ? "border-blue-400" : "border-blue-600"
      }`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
    />
  )
}

// Theme-aware section divider
export function ThemeAwareSectionDivider() {
  const { resolvedTheme } = useTheme()

  return (
    <motion.div
      className="w-24 h-1 mx-auto"
      style={{
        background:
          resolvedTheme === "dark"
            ? "linear-gradient(90deg, #3b82f6, #8b5cf6, #3b82f6)"
            : "linear-gradient(90deg, #2563eb, #7c3aed, #2563eb)",
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
    />
  )
}
