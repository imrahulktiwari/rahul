import Head from "next/head"
import { seoConfig } from "@/lib/seo-config"

interface SEOHeadProps {
  title?: string
  description?: string
  path?: string
  image?: string
}

export default function SEOHead({ title, description, path, image }: SEOHeadProps) {
  const pageTitle = title ? `${title} | ${seoConfig.title}` : seoConfig.title
  const pageDescription = description || seoConfig.description
  const pageUrl = `${seoConfig.url}${path || ""}`
  const pageImage = image || seoConfig.openGraph.images.default.url

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="title" content={pageTitle} />
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={seoConfig.keywords.join(", ")} />
      <meta name="author" content={seoConfig.author.name} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:site_name" content={seoConfig.openGraph.siteName} />
      <meta property="og:locale" content={seoConfig.openGraph.locale} />

      {/* Twitter */}
      <meta property="twitter:card" content={seoConfig.twitter.card} />
      <meta property="twitter:url" content={pageUrl} />
      <meta property="twitter:title" content={pageTitle} />
      <meta property="twitter:description" content={pageDescription} />
      <meta property="twitter:image" content={pageImage} />
      <meta property="twitter:creator" content={seoConfig.twitter.creator} />
      <meta property="twitter:site" content={seoConfig.twitter.site} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="msapplication-config" content="/browserconfig.xml" />

      {/* Canonical URL */}
      <link rel="canonical" href={pageUrl} />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />

      {/* Verification */}
      {seoConfig.verification.google && (
        <meta name="google-site-verification" content={seoConfig.verification.google} />
      )}
      {seoConfig.verification.bing && <meta name="msvalidate.01" content={seoConfig.verification.bing} />}
    </Head>
  )
}
