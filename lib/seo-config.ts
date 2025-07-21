export const seoConfig = {
  domain: "therahultiwari.com",
  url: "https://therahultiwari.com",
  title: "Rahul Tiwari - Software Developer Portfolio",
  description:
    "Professional portfolio of Rahul Tiwari at therahultiwari.com - A passionate software developer with 3+ years of experience specializing in React, Next.js, PHP, MySQL, and modern web technologies.",
  keywords: [
    "Rahul Tiwari",
    "therahultiwari.com",
    "Software Developer India",
    "React Developer",
    "Next.js Developer",
    "PHP Developer",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "MySQL Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Software Engineer",
    "Web Development Services",
    "Freelance Developer India",
  ],
  author: {
    name: "Rahul Tiwari",
    email: "contact@therahultiwari.com", // Update with your actual email
    url: "https://therahultiwari.com",
    social: {
      twitter: "@rahultiwari", // Update with your actual handle
      linkedin: "https://linkedin.com/in/rahultiwari",
      github: "https://github.com/rahultiwari",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Rahul Tiwari Portfolio - therahultiwari.com",
    images: {
      default: {
        url: "https://therahultiwari.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rahul Tiwari - Software Developer Portfolio | therahultiwari.com",
      },
    },
  },
  twitter: {
    card: "summary_large_image",
    creator: "@rahultiwari", // Update with your actual handle
    site: "@rahultiwari",
  },
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console verification
    bing: "your-bing-verification-code", // Add your Bing Webmaster verification
  },
}

export const generatePageMetadata = (page: {
  title?: string
  description?: string
  path?: string
  image?: string
}) => {
  const title = page.title ? `${page.title} | ${seoConfig.title}` : seoConfig.title
  const description = page.description || seoConfig.description
  const url = `${seoConfig.url}${page.path || ""}`
  const image = page.image || seoConfig.openGraph.images.default.url

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      type: "website",
      locale: seoConfig.openGraph.locale,
      siteName: seoConfig.openGraph.siteName,
    },
    twitter: {
      card: seoConfig.twitter.card,
      title,
      description,
      images: [image],
      creator: seoConfig.twitter.creator,
      site: seoConfig.twitter.site,
    },
    alternates: {
      canonical: url,
    },
  }
}
