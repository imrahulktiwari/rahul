export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rahul Tiwari",
    jobTitle: "Software Developer",
    description:
      "Professional software developer with 3+ years of experience specializing in React, Next.js, PHP, and MySQL. Portfolio available at therahultiwari.com",
    url: "https://therahultiwari.com",
    image: "https://therahultiwari.com/rahul-tiwari-portrait.jpg",
    email: "contact@therahultiwari.com",
    telephone: "+91-XXXXXXXXXX", // Replace with actual number
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "India",
    },
    sameAs: [
      "https://linkedin.com/in/rahultiwari",
      "https://github.com/rahultiwari",
      "https://twitter.com/rahultiwari",
    ],
    knowsAbout: [
      "React.js",
      "Next.js",
      "PHP",
      "MySQL",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Web Development",
      "Software Engineering",
      "Full Stack Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Your University Name", // Replace with actual education
    },
    worksFor: [
      {
        "@type": "Organization",
        name: "TechCorp Solutions",
        description: "Senior Software Developer",
      },
    ],
  }

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rahul Tiwari - Software Developer Portfolio",
    description: "Professional portfolio showcasing web development projects and skills at therahultiwari.com",
    url: "https://therahultiwari.com",
    author: {
      "@type": "Person",
      name: "Rahul Tiwari",
    },
    inLanguage: "en-US",
    copyrightYear: new Date().getFullYear(),
    genre: "Portfolio",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://therahultiwari.com/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Rahul Tiwari - Software Development Services",
    url: "https://therahultiwari.com",
    logo: "https://therahultiwari.com/favicon-32x32.png",
    image: "https://therahultiwari.com/rahul-tiwari-portrait.jpg",
    description: "Professional software development services specializing in React, Next.js, PHP, and MySQL",
    founder: {
      "@type": "Person",
      name: "Rahul Tiwari",
    },
    foundingDate: "2020",
    areaServed: "Worldwide",
    serviceType: "Software Development",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationStructuredData),
        }}
      />
    </>
  )
}
