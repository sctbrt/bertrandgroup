import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://bertrandgroup.ca"),

  title: "Bertrand Group",
  description:
    "Bertrand Group is a family of brands and platforms built in Northern Ontario. Design studios, digital platforms, and hospitality.",

  openGraph: {
    type: "website",
    title: "Bertrand Group",
    description: "Brands, systems, and ventures. Sudbury, Canada.",
    url: "https://bertrandgroup.ca",
    locale: "en_CA",
    siteName: "Bertrand Group",
  },

  robots: { index: true, follow: true },

  icons: {
    icon: "/favicon-96x96.png",
    apple: "/apple-touch-icon.png",
  },

  other: {
    "theme-color": "#0a0a0a",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600&family=Fraunces:opsz,wght@9..144,300;9..144,400&family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500&display=swap"
          rel="stylesheet"
        />

        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bertrand Group",
              url: "https://bertrandgroup.ca",
              description:
                "A family of brands and platforms built in Northern Ontario.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Greater Sudbury",
                addressRegion: "Ontario",
                addressCountry: "CA",
              },
              subOrganization: [
                {
                  "@type": "Organization",
                  name: "Bertrand Brands",
                  url: "https://brands.bertrandgroup.ca",
                  description: "Brand & Web Systems Studio",
                },
              ],
              founder: {
                "@type": "Person",
                name: "Scott Bertrand",
                url: "https://scottbertrand.com",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
