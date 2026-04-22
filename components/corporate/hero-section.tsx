"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Sprout, Shield, Flame, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/components/locale-provider"

export function HeroSection({ activeIdx, onIdxChange, isAuto, setIsAuto, payloadHero }: {
  activeIdx: number
  onIdxChange: React.Dispatch<React.SetStateAction<number>>
  isAuto: boolean
  setIsAuto: (auto: boolean) => void
  payloadHero?: {
    category?: string
    title?: string
    description?: string
    image?: { url?: string }
    buttonText?: string
    buttonLink?: string
    typeColor?: string
  }
}) {
  const { dict } = useLocale()

  useEffect(() => {
    if (!isAuto) return
    const interval = setInterval(() => {
      onIdxChange((prev) => (prev + 1) % 4)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAuto, onIdxChange])

  const themes = [
    {
      id: 'commercial',
      link: '/solutions/commercial',
      category: payloadHero?.category || 'Commercial Division',
      title: payloadHero?.title || 'Civilian Solutions',
      desc: payloadHero?.description || 'Precision agriculture, solar & wind infrastructure, logistics strategy, and certified civil pilot training for commercial operators.',
      image: payloadHero?.image?.url || '/products/Kazhan-AGRO-30-agricultural-drone.jpg',
      typeColor: payloadHero?.typeColor || '#71A58D',
      icon: Sprout,
    },
    {
      id: 'defense',
      link: '/solutions/defense',
      category: 'Defense Division',
      title: 'Tactical Defense',
      desc: 'Military-grade UAV systems for reconnaissance, border security, and electronic warfare resilience. Combat operator certification included.',
      image: '/e630hd.png',
      typeColor: '#1C5B68',
      icon: Shield,
    },
    {
      id: 'emergency',
      link: '/solutions/emergency',
      category: 'Emergency & Rescue',
      title: 'Rapid Response',
      desc: 'Next-generation firefighting drones with thermal optics and suppressant delivery. Search & rescue systems for hazardous terrain.',
      image: '/products/Kazhan-E630-Firefighter-Drone-1.webp',
      typeColor: '#F47A60',
      icon: Flame,
    },
    {
      id: 'consulting',
      link: '/consulting',
      category: 'Consulting Center',
      title: 'Strategic Advisory',
      desc: 'Cross-industry UAV strategy, component sourcing intelligence, supply chain localization, and custom platform development.',
      image: '/products/SHMAVIK-quadcopter-scout-drone.webp',
      typeColor: '#6366f1',
      icon: Lightbulb,
    }
  ]

  const current = themes[activeIdx]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden transition-all duration-1000">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        {themes.map((theme, idx) => (
          <div
            key={theme.id}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out scale-105 ${
              idx === activeIdx ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url('${theme.image}')` }}
          />
        ))}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#010C0C]/90 via-[#010C0C]/50 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-[#010C0C]/20 backdrop-blur-[2px] z-[1]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div key={activeIdx} className="max-w-2xl animate-in fade-in slide-in-from-left-4 duration-1000">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-full bg-white/10 border border-white/20">
                <current.icon className="w-5 h-5" style={{ color: current.typeColor }} />
              </div>
              <span className="text-sm font-semibold tracking-widest uppercase text-white">
                {current.category}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              Autonomous <br />
              <span style={{ color: current.typeColor }}>{current.title}</span>
            </h1>

            <p className="mt-8 text-xl text-white/80 leading-relaxed max-w-xl font-light">
              {current.desc}
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-5">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground px-8 py-7 text-lg rounded-2xl group transition-all duration-500 hover:scale-105 hover:opacity-90 active:scale-95 shadow-2xl shadow-primary/20 backdrop-blur-md"
              >
                <Link href={current.link} className="flex items-center">
                  {payloadHero?.buttonText || dict.hero.exploreSolutions}
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-105 text-white px-8 py-7 text-lg rounded-2xl transition-all backdrop-blur-md"
              >
                <Link href="/history">
                  {dict.hero.learnTech}
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Orbital Visual */}
          <div className="hidden lg:flex relative lg:pl-8">
            <div className="relative aspect-square w-full max-w-lg mx-auto">

              {/* Concentric Circles */}
              <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none" />
              <div className="absolute inset-8 rounded-full border border-white/10 pointer-events-none" />

              {/* Center Logo */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-40 h-40 rounded-full flex items-center justify-center bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden">
                  <img src="/logof.png" alt="Branding" className="w-full h-full object-contain p-6" />
                </div>
              </div>

              {/* Atmospheric Drones — pointer-events-none so they never block buttons */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute inset-0 animate-spin"
                  style={{ animationDuration: '15s' }}
                >
                  <img src="/droneicon.gif" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20" style={{ filter: `drop-shadow(0 0 20px ${current.typeColor}80) brightness(0) invert(1)` }} />
              </div>
                <div className="absolute inset-4 animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }}>
                  <img src="/droneicon.gif" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 opacity-60" style={{ filter: `drop-shadow(0 0 8px ${current.typeColor}60) brightness(0) invert(1)` }} />
                </div>
                <div className="absolute inset-16 animate-spin" style={{ animationDuration: '25s' }}>
                  <img src="/droneicon.gif" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 w-7 h-7 opacity-50" style={{ filter: `drop-shadow(0 0 8px ${current.typeColor}50) brightness(0) invert(1)` }} />
                </div>
                <div className="absolute inset-[-30px] animate-spin" style={{ animationDuration: '60s' }}>
                  <img src="/droneicon.gif" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 opacity-40" style={{ filter: `drop-shadow(0 0 8px ${current.typeColor}40) brightness(0) invert(1)` }} />
                </div>
                <div className="absolute inset-12 animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }}>
                  <img src="/droneicon.gif" alt="" className="absolute top-0 left-1/2 -translate-x-1/2 w-7 h-7 opacity-55" style={{ filter: `drop-shadow(0 0 8px ${current.typeColor}55) brightness(0) invert(1)` }} />
                </div>
              </div>

              {/* Orbital Arc Highlight */}
              <div
                className="absolute inset-0 rounded-full border-2 transition-colors duration-1000 ease-in-out pointer-events-none"
                style={{
                  transform: `rotate(${activeIdx * 90}deg)`,
                  clipPath: 'inset(0 0 70% 0)',
                  borderColor: current.typeColor + '66'
                }}
              />

              {/* Orbital Buttons — rendered LAST so they sit on top of everything */}
              <div className="absolute inset-0 rounded-full" style={{ zIndex: 60 }}>
                {themes.map((theme, i) => {
                  const rotation = i * 90
                  return (
                    <div
                      key={theme.id}
                      className="absolute inset-0 pointer-events-none"
                      style={{ transform: `rotate(${rotation}deg)` }}
                    >
                      {/*
                        Separate wrapper handles position + counter-rotation
                        so it doesn't conflict with Tailwind's translate on the button itself
                      */}
                      <div
                        className="absolute left-1/2 -top-6 pointer-events-auto"
                        style={{
                          transform: `translateX(-50%) rotate(-${rotation}deg)`,
                        }}
                      >
                        <button
                          onClick={() => { onIdxChange(i); setIsAuto(false) }}
                          className="flex items-center gap-3 px-6 py-2.5 rounded-full border transition-all duration-500 hover:brightness-125 hover:scale-110 active:scale-95 cursor-pointer"
                          style={{
                            backgroundColor: i === activeIdx ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.4)',
                            borderColor: i === activeIdx ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.05)',
                            boxShadow: i === activeIdx
                              ? `0 25px 50px -12px ${theme.typeColor}20, 0 0 0 2px rgba(255,255,255,0.1)`
                              : 'none',
                            scale: i === activeIdx ? '1.15' : '1',
                          }}
                        >
                          <theme.icon
                            className="w-5 h-5"
                            style={{ color: i === activeIdx ? theme.typeColor : 'rgba(255,255,255,0.4)' }}
                          />
                          <span className="text-[11px] font-black uppercase tracking-wider text-white">
                            {theme.category}
                          </span>
                        </button>
                      </div>
                    </div>
                  )
                })}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
