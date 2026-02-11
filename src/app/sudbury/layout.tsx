import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bertrand Brands — Sudbury & Northern Ontario",
  description:
    "Clear, trustworthy websites built to convert. Starter sites, redesigns, and brandmarks for businesses in Sudbury and Northern Ontario.",

  openGraph: {
    type: "website",
    title: "Bertrand Brands — Sudbury & Northern Ontario",
    description:
      "Clear, trustworthy websites built to convert. Starter sites, redesigns, and brandmarks for businesses in Sudbury and Northern Ontario.",
    url: "https://bertrandgroup.ca/sudbury",
    locale: "en_CA",
    siteName: "Bertrand Brands",
  },

  robots: { index: true, follow: true },
}

export default function SudburyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
