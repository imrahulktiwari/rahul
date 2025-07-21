"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useTheme } from "./theme-provider"
import { useState } from "react"

interface SpotlightNameProps {
  children: React.ReactNode
  className?: string
}

export function SpotlightName({ children, className = "" }: SpotlightNameProps) {
  const { resolvedTheme } = useTheme()
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Spotlight Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Moving Spotlight */}
        <motion.div
          className={`absolute inset-0 ${
            resolvedTheme === "dark"
              ? "bg-gradient-to-r from-transparent via-white/20 to-transparent"
              : "bg-gradient-to-r from-blue-200/30 via-blue-300/40 to-transparent"
          }`}
          style={{
            filter: `blur(${isHovered ? "15px" : "20px"})`,
            transform: "skewX(-20deg)",
          }}
          animate={{
            x: ["-200%", "200%"],
            opacity: isHovered ? [0.4, 0.8, 0.4] : [0.2, 0.6, 0.2],
          }}
          transition={{
            x: {
              duration: isHovered ? 2.5 : 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: isHovered ? 1.5 : 3,
              ease: "easeInOut",
            },
            opacity: {
              duration: isHovered ? 2.5 : 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: isHovered ? 1.5 : 3,
              ease: "easeInOut",
            },
          }}
        />

        {/* Radial Glow */}
        <motion.div
          className={`absolute inset-0 ${
            resolvedTheme === "dark"
              ? "bg-gradient-radial from-blue-400/30 via-purple-500/20 to-transparent"
              : "bg-gradient-radial from-blue-500/20 via-purple-600/15 to-transparent"
          }`}
          style={{
            filter: `blur(${isHovered ? "25px" : "30px"})`,
          }}
          animate={{
            scale: isHovered ? [1, 1.4, 1] : [1, 1.2, 1],
            opacity: isHovered ? [0.3, 0.7, 0.3] : [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: isHovered ? 3 : 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Shimmer Effect */}
        <motion.div
          className={`absolute inset-0 ${
            resolvedTheme === "dark"
              ? "bg-gradient-to-r from-transparent via-white/15 to-transparent"
              : "bg-gradient-to-r from-transparent via-blue-300/25 to-transparent"
          }`}
          style={{
            filter: `blur(${isHovered ? "8px" : "12px"})`,
            transform: "skewX(-45deg)",
            mixBlendMode: "overlay",
          }}
          animate={{
            x: ["-150%", "150%"],
            opacity: isHovered ? [0, 0.8, 0] : [0, 0.5, 0],
          }}
          transition={{
            duration: isHovered ? 1.8 : 2.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: isHovered ? 2 : 3.5,
            ease: "easeOut",
          }}
        />

        {/* Floating Particles - Responsive */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full ${
              resolvedTheme === "dark" ? "bg-blue-300/60" : "bg-blue-500/40"
            }`}
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + (i % 3) * 20}%`,
              filter: `blur(${isHovered ? "1px" : "2px"})`,
            }}
            animate={{
              y: isHovered ? [-10, -25, -10] : [-5, -15, -5],
              x: isHovered ? [-5, 5, -5] : [-2, 2, -2],
              opacity: isHovered ? [0.4, 0.9, 0.4] : [0.3, 0.7, 0.3],
              scale: isHovered ? [0.8, 1.3, 0.8] : [0.6, 1, 0.6],
            }}
            transition={{
              duration: isHovered ? 2.5 : 3.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Hover-Specific Magnetic Effect */}
        {isHovered && (
          <motion.div
            className={`absolute inset-0 ${
              resolvedTheme === "dark"
                ? "bg-gradient-conic from-blue-400/20 via-purple-500/30 to-cyan-400/20"
                : "bg-gradient-conic from-blue-500/15 via-purple-600/20 to-cyan-500/15"
            }`}
            style={{
              filter: "blur(35px)",
              mixBlendMode: "soft-light",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0.8, 1.5, 0.8],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.div>

      {/* Text with Enhanced Readability */}
      <motion.div
        className="relative z-10"
        style={{
          textShadow:
            resolvedTheme === "dark"
              ? `
              0 0 10px rgba(0, 0, 0, 0.8),
              0 0 20px rgba(0, 0, 0, 0.6),
              0 2px 4px rgba(0, 0, 0, 0.9)
            `
              : `
              0 0 10px rgba(255, 255, 255, 0.9),
              0 0 20px rgba(255, 255, 255, 0.7),
              0 2px 4px rgba(255, 255, 255, 0.8)
            `,
        }}
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut",
        }}
      >
        {children}
      </motion.div>

      {/* Responsive Glow Backdrop for Better Contrast */}
      <motion.div
        className={`absolute inset-0 -z-10 ${resolvedTheme === "dark" ? "bg-gray-900/40" : "bg-white/40"}`}
        style={{
          filter: "blur(40px)",
          transform: "scale(1.2)",
        }}
        animate={{
          opacity: isHovered ? 0.8 : 0.5,
        }}
        transition={{
          duration: 0.3,
        }}
      />

      {/* CSS for Gradient Definitions */}
      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
        .bg-gradient-conic {
          background: conic-gradient(var(--tw-gradient-stops));
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .spotlight-container {
            filter: brightness(0.8);
          }
        }
        
        @media (max-width: 480px) {
          .spotlight-container {
            filter: brightness(0.7);
          }
        }
        
        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .spotlight-container {
            filter: contrast(1.5) brightness(1.2);
          }
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .spotlight-container * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  )
}
