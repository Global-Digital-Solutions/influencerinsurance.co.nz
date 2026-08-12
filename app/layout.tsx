import type { Metadata } from "next"
import "./globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"
import ExitIntentPopup from "../components/ExitIntentPopup"
import { siteConfig } from "../data/site-config"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Influencer Insurance | Cover for Content Creators",
    template: "%s | Influencer Insurance",
  },
  description: siteConfig.description,
  keywords: ["influencer insurance NZ", "content creator insurance New Zealand", "public liability influencer", "equipment insurance creator", "cyber insurance influencer NZ"],
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Influencer Insurance | Cover for Content Creators",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Insurance | Cover for Content Creators",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.schema.organizationName,
    url: siteConfig.schema.organizationUrl,
    logo: siteConfig.schema.organizationLogo,
    description: siteConfig.schema.organizationDescription,
    address: {
      "@type": "PostalAddress",
      addressCountry: "NZ",
    },
    areaServed: "NZ",
    serviceType: "Insurance Referral Service",
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-NZ",
    publisher: {
      "@type": "Organization",
      name: siteConfig.schema.organizationName,
      url: siteConfig.schema.organizationUrl,
    },
  }

  return (
    <html lang="en-NZ">
      <head>
        {/* Google tag (gtag.js) – GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HRMNGWLX44" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-HRMNGWLX44');`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ExitIntentPopup />
      </body>
    </html>
  )
}
