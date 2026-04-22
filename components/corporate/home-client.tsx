"use client"

import { useState } from "react"
import { HeroSection } from "@/components/corporate/hero-section"
import { InfoSection } from "@/components/corporate/info-section"
import { AboutSection } from "@/components/corporate/about-section"
import { NewsSection } from "@/components/corporate/news-section"

export function HomeClient({ payloadHero, payloadAbout }: { payloadHero?: any; payloadAbout?: any }) {
  const [heroIdx, setHeroIdx] = useState(0)
  const [infoIdx, setInfoIdx] = useState(0)
  const [isAuto, setIsAuto] = useState(true)

  return (
    <>
      <HeroSection
        activeIdx={heroIdx}
        onIdxChange={setHeroIdx}
        isAuto={isAuto}
        setIsAuto={setIsAuto}
        payloadHero={payloadHero}
      />
      <InfoSection activeIdx={infoIdx} onIdxChange={setInfoIdx} />
      <AboutSection payloadAbout={payloadAbout} />
      <NewsSection />
    </>
  )
}
