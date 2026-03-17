"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"
import { FadeObserver } from "@/components/fade-observer"
import { BPOSPricingModal } from "@/components/bpos-pricing-modal"

export function HomeClient() {
  const [showPricing, setShowPricing] = useState(false)

  return (
    <>
      <Header onBPOSClick={() => setShowPricing(true)} />
      <main>
        <Hero />
        <AboutSection />
        <PortfolioGrid onBPOSClick={() => setShowPricing(true)} />
        <TeamSection />
      </main>
      <Footer />
      <FadeObserver />
      <BPOSPricingModal
        isOpen={showPricing}
        onClose={() => setShowPricing(false)}
      />
    </>
  )
}
