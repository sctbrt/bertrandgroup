import { SudburyHeader } from "@/components/sudbury/header"
import { SudburyHero } from "@/components/sudbury/hero"
import { StarterCard } from "@/components/sudbury/starter-card"
import { HowItWorks } from "@/components/sudbury/how-it-works"
import { TrustStrip } from "@/components/sudbury/trust-strip"
import { OtherServices } from "@/components/sudbury/other-services"
import { GetStartedForm } from "@/components/sudbury/get-started-form"
import { SudburyFooter } from "@/components/sudbury/footer"
import { StickyCta } from "@/components/sudbury/sticky-cta"
import { FadeObserver } from "@/components/fade-observer"

export default function SudburyPage() {
  return (
    <>
      <SudburyHeader />
      <main>
        <SudburyHero />
        <StarterCard />
        <HowItWorks />
        <TrustStrip />
        <OtherServices />
        <GetStartedForm />
      </main>
      <SudburyFooter />
      <StickyCta />
      <FadeObserver />
    </>
  )
}
