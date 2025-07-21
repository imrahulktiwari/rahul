import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://therahultiwari.com"),
  title: {
    default: "Rahul Tiwari - Software Developer Portfolio | therahultiwari.com",
    template: "%s | Rahul Tiwari - Software Developer",
  },
  description:
    "Professional portfolio of Rahul Tiwari at therahultiwari.com - A passionate software developer with 3+ years of experience specializing in React, Next.js, PHP, MySQL, and modern web technologies. View my projects, skills, and experience.",
  keywords: [
    "Rahul Tiwari",
    "therahultiwari.com",
    "Software Developer",
    "Web Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "PHP Developer",
    "MySQL",
    "TypeScript",
    "JavaScript",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
    "Web Development",
    "Software Engineering",
    "India Developer",
    "Freelance Developer",
  ],
  authors: [{ name: "Rahul Tiwari", url: "https://therahultiwari.com" }],
  creator: "Rahul Tiwari",
  publisher: "Rahul Tiwari",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://therahultiwari.com",
    title: "Rahul Tiwari - Software Developer Portfolio | therahultiwari.com",
    description:
      "Professional portfolio showcasing modern web development projects, skills, and 3+ years of experience in React, Next.js, PHP, and MySQL. Visit therahultiwari.com to explore my work.",
    siteName: "Rahul Tiwari Portfolio - therahultiwari.com",
    images: [
      {
        url: "https://therahultiwari.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rahul Tiwari - Software Developer Portfolio | therahultiwari.com",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Tiwari - Software Developer Portfolio | therahultiwari.com",
    description: "Professional portfolio showcasing modern web development projects and skills at therahultiwari.com",
    images: ["https://therahultiwari.com/og-image.png"],
    creator: "@rahultiwari", // Replace with actual Twitter handle
    site: "@rahultiwari",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.png", color: "#2563eb" }],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification code
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: "https://therahultiwari.com",
  },
  category: "technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function() {
          try {
            var theme = localStorage.getItem('portfolio-theme');
            var systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
            var resolvedTheme = theme === 'system' || !theme ? systemTheme : theme;
            
            if (resolvedTheme === 'dark') {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          } catch (e) {}
        })();
      `,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
