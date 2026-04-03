"use client"

import { useState } from "react"
import { Header } from "@/components/corporate/header"
import { HeroSection } from "@/components/corporate/hero-section"
import { InfoSection } from "@/components/corporate/info-section"
import { AboutSection } from "@/components/corporate/about-section"
import { NewsSection } from "@/components/corporate/news-section"
import { Footer } from "@/components/corporate/footer"

export default function Home() {
  const [heroIdx, setHeroIdx] = useState(0)
  const [infoIdx, setInfoIdx] = useState(0)
  const [isAuto, setIsAuto] = useState(true)

  return (
    <>
      <Header />
      <HeroSection activeIdx={heroIdx} onIdxChange={setHeroIdx} isAuto={isAuto} setIsAuto={setIsAuto} />
      <InfoSection activeIdx={infoIdx} onIdxChange={setInfoIdx} />
      <AboutSection />
      <NewsSection />
      <Footer />
    </>
  )
}
