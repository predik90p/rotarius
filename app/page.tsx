"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/corporate/header"
import { HeroSection } from "@/components/corporate/hero-section"
import { InfoSection } from "@/components/corporate/info-section"
import { AboutSection } from "@/components/corporate/about-section"
import { NewsSection } from "@/components/corporate/news-section"
import { CTASection } from "@/components/corporate/cta-section"
import { Footer } from "@/components/corporate/footer"

export default function HomePage() {
  const [activeHeroIdx, setActiveHeroIdx] = useState(0)
  const [activeInfoIdx, setActiveInfoIdx] = useState(0)
  const [isAutoCycleActive, setIsAutoCycleActive] = useState(true)

  useEffect(() => {
    if (!isAutoCycleActive) return
    const timer = setInterval(() => {
      setActiveHeroIdx((prev) => (prev + 1) % 3)
    }, 10000)
    return () => clearInterval(timer)
  }, [isAutoCycleActive])

  const handleHeroIdxChange = (idx: number) => {
    setActiveHeroIdx(idx)
    setActiveInfoIdx(idx) // Sync info to selection
    // Keep auto-cycle running as requested
  }

  const handleInfoIdxChange = (idx: number) => {
    setActiveInfoIdx(idx) // Change ONLY info section
  }

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection 
        activeIdx={activeHeroIdx} 
        onIdxChange={handleHeroIdxChange} 
        isAuto={isAutoCycleActive}
        setIsAuto={setIsAutoCycleActive}
      />
      <InfoSection 
        activeIdx={activeInfoIdx}
        onIdxChange={handleInfoIdxChange}
      />
      <AboutSection />
      <NewsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
