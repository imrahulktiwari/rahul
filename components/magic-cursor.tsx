"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { useTheme } from "./theme-provider"

export function MagicCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  const cursorColor = resolvedTheme === "dark" ? "rgba(59, 130, 246, 0.4)" : "rgba(37, 99, 235, 0.3)" // blue-400/40 or blue-600/30

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] rounded-full mix-blend-soft-light"
      style={{
        left: mousePosition.x,
        top: mousePosition.y,
        transform: "translate(-50%, -50%)",
        background: `radial-gradient(circle at center, ${cursorColor} 0%, transparent 70%)`,
        filter: "blur(15px)", // Adjust blur for desired softness
      }}
      animate={{
        width: [30, 40, 30], // Subtle pulse effect
        height: [30, 40, 30],
        opacity: [0.8, 1, 0.8],
      }}
      transition={{
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  )
}
