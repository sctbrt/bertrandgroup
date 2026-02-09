import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { AboutSection } from "@/components/about-section"
import { PortfolioGrid } from "@/components/portfolio-grid"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"
import { FadeObserver } from "@/components/fade-observer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <PortfolioGrid />
        <TeamSection />
      </main>
      <Footer />
      <FadeObserver />
    </>
  )
}
