"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import { ThemeAwareCard, ThemeAwareButton } from "@/components/theme-aware-animations"

interface ExperienceItem {
  company: string
  position: string
  duration: string
  description: string
  achievements: string[]
}

interface ExperienceCarouselProps {
  experience: ExperienceItem[]
}

export function ExperienceCarousel({ experience }: ExperienceCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768) // Tailwind's md breakpoint
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    if (!isMobile) return // Only auto-swap on mobile

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % experience.length)
    }, 5000) // Auto-swap every 5 seconds

    return () => clearInterval(interval)
  }, [isMobile, experience.length])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + experience.length) % experience.length)
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experience.length)
  }

  // For desktop horizontal scroll
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" }) // Scroll by card width approx
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" }) // Scroll by card width approx
    }
  }

  return (
    <div className="relative w-full">
      {isMobile ? (
        // Mobile Carousel View
        <div className="relative flex items-center justify-center w-full">
          <ThemeAwareButton
            onClick={handlePrev}
            className="absolute left-0 z-10 p-2 rounded-full bg-gray-200/70 dark:bg-gray-700/70 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Previous experience"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </ThemeAwareButton>

          <div className="w-full max-w-md mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <ThemeAwareCard className="bg-white dark:bg-gray-900 shadow-lg p-6 rounded-xl">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{experience[currentIndex].duration}</span>
                      </div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">
                        {experience[currentIndex].position}
                      </CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-700 dark:text-gray-300">
                        {experience[currentIndex].company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{experience[currentIndex].description}</p>
                      <ul className="space-y-2">
                        {experience[currentIndex].achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ThemeAwareCard>
              </motion.div>
            </AnimatePresence>
          </div>

          <ThemeAwareButton
            onClick={handleNext}
            className="absolute right-0 z-10 p-2 rounded-full bg-gray-200/70 dark:bg-gray-700/70 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Next experience"
          >
            <ChevronRight className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </ThemeAwareButton>

          <div className="absolute bottom-[-30px] flex space-x-2">
            {experience.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex ? "bg-blue-600 w-4" : "bg-gray-400 dark:bg-gray-600"
                }`}
                aria-label={`Go to experience ${index + 1}`}
              />
            ))}
          </div>
        </div>
      ) : (
        // Desktop Horizontal Scroll View
        <div className="relative flex items-center">
          <ThemeAwareButton
            onClick={scrollLeft}
            className="absolute left-0 z-10 p-2 rounded-full bg-gray-200/70 dark:bg-gray-700/70 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors hidden lg:block"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </ThemeAwareButton>

          <div
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-none w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 snap-center"
              >
                <ThemeAwareCard className="bg-white dark:bg-gray-900 shadow-lg p-6 rounded-xl h-full flex flex-col">
                  <Card className="flex-grow">
                    <CardHeader>
                      <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm font-medium">{exp.duration}</span>
                      </div>
                      <CardTitle className="text-xl text-gray-900 dark:text-white">{exp.position}</CardTitle>
                      <CardDescription className="text-lg font-medium text-gray-700 dark:text-gray-300">
                        {exp.company}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow flex flex-col">
                      <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{exp.description}</p>
                      <ul className="space-y-2 mt-auto">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                            <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ThemeAwareCard>
              </motion.div>
            ))}
          </div>

          <ThemeAwareButton
            onClick={scrollRight}
            className="absolute right-0 z-10 p-2 rounded-full bg-gray-200/70 dark:bg-gray-700/70 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors hidden lg:block"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-800 dark:text-gray-200" />
          </ThemeAwareButton>
        </div>
      )}
    </div>
  )
}
