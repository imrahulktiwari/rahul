"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Calendar, MapPin } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import StructuredData from "@/components/structured-data"
import { useTheme } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { TypewriterEffect } from "@/components/typewriter-effect"
import {
  ThemeAwareFloatingElements,
  ThemeAwareGradientText,
  ThemeAwareSkillBar,
  ThemeAwareCard,
  ThemeAwareButton,
  ThemeAwareTimelineDot,
  ThemeAwareSocialIcon,
  ThemeAwareLoadingSpinner,
  ThemeAwareSectionDivider,
} from "@/components/theme-aware-animations"

export default function Portfolio() {
  const [mounted, setMounted] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const skills = ["React.js", "PHP", "Node.js", "MySQL", "Next.js", "TypeScript"]

  const techStack = [
    { name: "React.js", level: 90, color: "bg-blue-500" },
    { name: "Next.js", level: 85, color: "bg-gray-800" },
    { name: "PHP", level: 80, color: "bg-purple-500" },
    { name: "Node.js", level: 75, color: "bg-green-500" },
    { name: "MySQL", level: 85, color: "bg-orange-500" },
    { name: "TypeScript", level: 70, color: "bg-blue-600" },
  ]

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MySQL",
      image: "/modern-ecommerce-website.png",
      tech: ["React", "Node.js", "MySQL", "Stripe"],
      github: "https://github.com",
      demo: "https://demo.com",
      details:
        "A comprehensive e-commerce platform featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard. Built with modern technologies and best practices.",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "Collaborative task management with real-time updates",
      image: "/task-management-dashboard.png",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
      details:
        "A collaborative task management application with real-time updates, team collaboration features, project tracking, and analytics dashboard.",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather data visualization with interactive maps",
      image: "/weather-dashboard-interface.png",
      tech: ["React", "D3.js", "OpenWeather API", "Tailwind"],
      github: "https://github.com",
      demo: "https://demo.com",
      details:
        "An interactive weather dashboard featuring real-time data visualization, interactive maps, weather forecasts, and historical data analysis.",
    },
  ]

  const experience = [
    {
      company: "TechCorp Solutions",
      position: "Senior Software Developer",
      duration: "2022 - Present",
      description:
        "Led development of web applications using React and Node.js. Mentored junior developers and improved code quality by 40%.",
      achievements: ["Led team of 4 developers", "Reduced load time by 60%", "Implemented CI/CD pipeline"],
    },
    {
      company: "StartupXYZ",
      position: "Full Stack Developer",
      duration: "2021 - 2022",
      description:
        "Developed and maintained multiple client projects using PHP, MySQL, and React. Collaborated with design team to implement pixel-perfect UIs.",
      achievements: ["Built 5+ client projects", "Improved database performance", "Integrated payment systems"],
    },
    {
      company: "WebDev Agency",
      position: "Junior Developer",
      duration: "2020 - 2021",
      description:
        "Started career building responsive websites and learning modern web technologies. Contributed to various client projects.",
      achievements: ["Learned React ecosystem", "Built responsive websites", "Collaborated with senior developers"],
    },
  ]

  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${resolvedTheme === "dark" ? "dark" : ""}`}>
      {!mounted ? (
        <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
          <ThemeAwareLoadingSpinner />
        </div>
      ) : (
        <>
          <StructuredData />
          {/* Navigation */}
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center py-4">
                <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold">
                  <ThemeAwareGradientText>RT</ThemeAwareGradientText>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                  {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                    <motion.button
                      key={item}
                      whileHover={{
                        scale: 1.05,
                        color: resolvedTheme === "dark" ? "#60a5fa" : "#2563eb",
                      }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {item}
                    </motion.button>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <ThemeToggle />

                  <button
                    className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="px-4 py-2 space-y-2">
                  {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                    <button
                      key={item}
                      onClick={() => scrollToSection(item.toLowerCase())}
                      className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.nav>

          {/* Hero Section */}
          <section
            id="home"
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
          >
            <motion.div style={{ y }} className="absolute inset-0 opacity-30">
              <ThemeAwareFloatingElements />
            </motion.div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <motion.h1
                  className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Hi, I'm <ThemeAwareGradientText className="font-bold">Rahul Tiwari</ThemeAwareGradientText>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 min-h-[4rem] flex items-center justify-center"
                >
                  <span className="mr-2">Software Developer specializing in</span>
                  <ThemeAwareGradientText className="font-semibold">
                    <TypewriterEffect words={skills} typeSpeed={120} deleteSpeed={80} delayBetweenWords={2500} />
                  </ThemeAwareGradientText>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto"
                >
                  Passionate about creating exceptional digital experiences with modern web technologies. 3+ years of
                  experience building scalable applications.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <ThemeAwareButton
                    onClick={() => scrollToSection("projects")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-lg"
                  >
                    View My Work
                  </ThemeAwareButton>
                  <ThemeAwareButton
                    onClick={() => scrollToSection("contact")}
                    className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 text-lg rounded-lg bg-transparent"
                  >
                    Get In Touch
                  </ThemeAwareButton>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
                <ThemeAwareSectionDivider />
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <ThemeAwareCard className="overflow-hidden rounded-2xl">
                    <Image
                      src="/rahul-tiwari-portrait.jpg"
                      alt="Rahul Tiwari - Software Developer"
                      width={350}
                      height={500}
                      className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                      priority
                    />
                  </ThemeAwareCard>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h3 className="text-3xl font-bold">
                    <ThemeAwareGradientText>Crafting Digital Solutions with Passion</ThemeAwareGradientText>
                  </h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                  >
                    I'm a dedicated software developer with 3+ years of experience in building modern web applications.
                    My journey started with a curiosity about how websites work, and it has evolved into a passion for
                    creating seamless user experiences.
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
                  >
                    I specialize in full-stack development using React, Next.js, PHP, and MySQL. I believe in writing
                    clean, maintainable code and staying updated with the latest industry trends and best practices.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 gap-6 mt-8"
                  >
                    {[
                      { title: "Frontend", skills: "React, Next.js, TypeScript, Tailwind CSS" },
                      { title: "Backend", skills: "Node.js, PHP, Express, REST APIs" },
                      { title: "Database", skills: "MySQL, PostgreSQL, MongoDB" },
                      { title: "Tools", skills: "Git, Docker, AWS, Vercel" },
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                        <p className="text-gray-600 dark:text-gray-400">{item.skills}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                  Skills & Expertise
                </h2>
                <ThemeAwareSectionDivider />
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {techStack.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ThemeAwareCard className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                        <motion.span
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          viewport={{ once: true }}
                          className="text-sm font-medium text-gray-600 dark:text-gray-400"
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <ThemeAwareSkillBar skill={skill} index={index} />
                    </ThemeAwareCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Featured Projects</h2>
                <ThemeAwareSectionDivider />
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <ThemeAwareCard
                      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                      whileHover={{ y: -10 }}
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={400}
                          height={300}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <motion.div
                          className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                          whileHover={{ opacity: 1 }}
                        >
                          <div className="flex space-x-4">
                            <motion.a
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              href={project.github}
                              className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Github className="w-5 h-5" />
                            </motion.a>
                            <motion.a
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              href={project.demo}
                              className="p-2 bg-white rounded-full text-gray-900 hover:bg-gray-100"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ExternalLink className="w-5 h-5" />
                            </motion.a>
                          </div>
                        </motion.div>
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, techIndex) => (
                            <motion.div
                              key={tech}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: techIndex * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <Badge variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </ThemeAwareCard>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Project Modal */}
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="bg-white dark:bg-gray-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="relative">
                    <Image
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={selectedProject.title}
                      width={800}
                      height={400}
                      className="w-full h-64 object-cover"
                    />
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 p-2 bg-white dark:bg-gray-800 rounded-full text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{selectedProject.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">{selectedProject.details}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tech.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-4">
                      <ThemeAwareButton className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </a>
                      </ThemeAwareButton>
                      <ThemeAwareButton className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg bg-transparent">
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </ThemeAwareButton>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </section>

          {/* Experience Section */}
          

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Get In Touch</h2>
                <ThemeAwareSectionDivider />
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mt-6">
                  I'm always interested in new opportunities and exciting projects. Let's discuss how we can work
                  together!
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h3>
                    <div className="space-y-4">
                      {[
                        {
                          icon: Mail,
                          label: "Email",
                          value: "contact@therahultiwari.com",
                          href: "mailto:contact@therahultiwari.com",
                        },
                        {
                          icon: Linkedin,
                          label: "LinkedIn",
                          value: "linkedin.com/in/rahultiwari",
                          href: "https://linkedin.com/in/rahultiwari",
                        },
                        {
                          icon: Github,
                          label: "GitHub",
                          value: "github.com/rahultiwari",
                          href: "https://github.com/rahultiwari",
                        },
                        { icon: MapPin, label: "Location", value: "India", href: null },
                      ].map((item, index) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          {item.href ? (
                            <ThemeAwareCard
                              as="a"
                              href={item.href}
                              className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                            >
                              <item.icon className="w-6 h-6 text-blue-600" />
                              <div>
                                <p className="font-medium text-gray-900 dark:text-white">{item.label}</p>
                                <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                              </div>
                            </ThemeAwareCard>
                          ) : (
                            <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <item.icon className="w-6 h-6 text-blue-600" />
                              <div>
                                <p className="font-medium text-gray-900 dark:text-white">{item.label}</p>
                                <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <ThemeAwareCard className="bg-white dark:bg-gray-800 shadow-lg">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-2xl text-gray-900 dark:text-white">Send a Message</CardTitle>
                        <CardDescription>I'll get back to you as soon as possible!</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form className="space-y-6">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                First Name
                              </label>
                              <Input placeholder="John" />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Last Name
                              </label>
                              <Input placeholder="Doe" />
                            </div>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Email
                            </label>
                            <Input type="email" placeholder="john@example.com" />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Subject
                            </label>
                            <Input placeholder="Project Inquiry" />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                              Message
                            </label>
                            <Textarea placeholder="Tell me about your project..." rows={5} />
                          </div>

                          <ThemeAwareButton
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
                          >
                            Send Message
                          </ThemeAwareButton>
                        </form>
                      </CardContent>
                    </Card>
                  </ThemeAwareCard>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 dark:bg-black text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-2xl font-bold mb-4">
                    <ThemeAwareGradientText>Rahul Tiwari</ThemeAwareGradientText>
                  </h3>
                  <p className="text-gray-400 mb-6">Software Developer • Problem Solver • Tech Enthusiast</p>

                  <div className="flex justify-center space-x-6 mb-8">
                    <ThemeAwareSocialIcon
                      href="https://github.com/rahultiwari"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </ThemeAwareSocialIcon>
                    <ThemeAwareSocialIcon
                      href="https://linkedin.com/in/rahultiwari"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </ThemeAwareSocialIcon>
                    <ThemeAwareSocialIcon
                      href="mailto:contact@therahultiwari.com"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Mail className="w-6 h-6" />
                    </ThemeAwareSocialIcon>
                  </div>

                  <div className="border-t border-gray-800 pt-8">
                    <p className="text-gray-400">© {new Date().getFullYear()} Rahul Tiwari. All rights reserved.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  )
}
