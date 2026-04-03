"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Flame, Navigation, Sprout, ShieldAlert, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const THEMES = [
  {
    id: 'agro',
    category: 'Smart Agriculture',
    title: 'Future of Farming',
    desc: 'VerdaAgro combines precision engineering with biological insights. Maximize yields with autonomous drone fleets and IoT sensor networks.',
    image: '/products/Kazhan-AGRO-30-agricultural-drone.jpg',
    typeColor: '#22c55e',
    icon: Sprout,
  },
  {
    id: 'military',
    category: 'Tactical Defense',
    title: 'Precision Security',
    desc: 'Military-grade UAV systems designed for high-stakes reconnaissance and strategic superiority. Swiss-engineered reliability for global defense.',
    image: '/e630hd.png',
    typeColor: '#3b82f6',
    icon: ShieldAlert,
  },
  {
    id: 'firefighting',
    category: 'Emergency Response',
    title: 'Thermal Resilience',
    desc: 'Next-generation firefighting drones with advanced thermal optics. Rapid deployment in high-temperature environments to save lives and forests.',
    image: '/products/Kazhan-E630-Firefighter-Drone-1.webp',
    typeColor: '#fb923c',
    icon: Flame,
  }
]

interface HeroSectionProps {
  activeIdx: number;
  onIdxChange: (idx: number) => void;
  isAuto: boolean;
  setIsAuto: (auto: boolean) => void;
}

export function HeroSection({ activeIdx, onIdxChange, isAuto, setIsAuto }: HeroSectionProps) {
  const current = THEMES[activeIdx]

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden transition-all duration-1000">
      {/* Background Section (Images with Transitions) */}
      <div className="absolute inset-0 z-0">
        {THEMES.map((theme, idx) => (
          <div
            key={theme.id}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out scale-105 ${idx === activeIdx ? 'opacity-100' : 'opacity-0'
              }`}
            style={{ backgroundImage: `url('${theme.image}')` }}
          />
        ))}
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px] z-[1]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Transitioning Content */}
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
              <span className="text-white">{current.title}</span>
            </h1>

            <p className="mt-8 text-xl text-white/80 leading-relaxed max-w-xl font-light">
              {current.desc}
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-5">
              <Button asChild size="lg" className="bg-white/10 border border-white/20 text-white px-8 py-7 text-lg rounded-2xl group transition-all duration-500 hover:scale-105 hover:bg-white/15 active:scale-95 shadow-2xl backdrop-blur-md" style={{ '--tc': current.typeColor } as React.CSSProperties & Record<string, string>}>
                <Link href={`/solutions/${current.id}`} className="flex items-center">
                  Explore Solutions
                  <ArrowRight className="ml-3 h-5 w-5 transition-colors duration-300 text-white/70 group-hover:[color:var(--tc)] group-hover:translate-x-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white/15 border-white/30 hover:bg-white/30 hover:border-white/60 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] text-white px-8 py-7 text-lg rounded-2xl transition-all backdrop-blur-md">
                <Link href="/history">
                  Learn Tech
                </Link>
              </Button>
            </div>
          </div>

          {/* orbital Visual Section Syncing with activeIdx */}
          <div className="hidden lg:flex relative lg:pl-8">
            <div className="relative aspect-square w-full max-w-lg mx-auto">
              {/* Concentric Circles (Non-interactive) */}
              <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none" />
              <div className="absolute inset-8 rounded-full border border-white/10 pointer-events-none" />

              {/* Center Branding Logo (Persistent) */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-40 h-40 rounded-full flex items-center justify-center bg-black/30 backdrop-blur-xl border border-white/10 shadow-2xl overflow-hidden animate-in zoom-in duration-1000">
                  <img src="/logof.png" alt="Branding" className="w-full h-full object-contain p-6" />
                </div>
              </div>

              {/* Orbital Segments - Highlighting Active Theme (INTERACTIVE) */}
              <div className="absolute inset-0 rounded-full z-50">
                {THEMES.map((theme, i) => {
                  const rotation = i * 120;
                  return (
                    <div
                      key={theme.id}
                      className="absolute inset-0 transition-all duration-1000 pointer-events-none"
                      style={{ transform: `rotate(${rotation}deg)` }}
                    >
                      <button
                        onClick={() => onIdxChange(i)}
                        className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2.5 rounded-full border transition-all duration-500 flex items-center gap-3 cursor-pointer pointer-events-auto hover:brightness-125 hover:scale-110 active:scale-95"
                        style={{
                          transform: `rotate(-${rotation}deg)`,
                          backgroundColor: i === activeIdx ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.4)',
                          borderColor: i === activeIdx ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.05)',
                          color: i === activeIdx ? theme.typeColor : 'rgba(255,255,255,0.4)',
                          transform: `rotate(-${rotation}deg)`,
                          scale: i === activeIdx ? '1.25' : '1.05',
                          boxShadow: i === activeIdx ? `0 25px 50px -12px ${theme.typeColor}20, 0 0 0 2px rgba(255,255,255,0.1)` : 'none',
                          zIndex: i === activeIdx ? 50 : 40,
                        }}
                      >
                        <theme.icon className="w-5 h-5" style={{ color: i === activeIdx ? theme.typeColor : 'rgba(255,255,255,0.4)' }} />
                        <span className="text-[11px] font-black uppercase tracking-wider text-white">{theme.id.toUpperCase()}</span>
                      </button>
                    </div>
                  )
                })}
              </div>

              {/* orbital Highlight (Ring rotation based on activeIdx) */}
              <div
                className="absolute inset-0 rounded-full border-2 transition-colors duration-1000 ease-in-out pointer-events-none"
                style={{ transform: `rotate(${activeIdx * 120}deg)`, clipPath: 'inset(0 0 70% 0)', borderColor: current.typeColor + '66' }}
              />

              {/* Orbital Flying Drones (Main Topic Tracker) */}
              <div className="absolute inset-0 animate-spin" style={{ animationDuration: '30s' }}>
                <img src="/droneicon.gif" alt="drone" className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 drop-shadow-[0_0_20px_rgba(255,255,255,0.7)] transition-colors duration-1000" style={{ filter: `drop-shadow(0 0 20px ${current.typeColor}80) brightness(0) invert(1)`, color: current.typeColor }} />
              </div>

              {/* Smaller Atmospheric Drones (MADE BIGGER) */}
              <div className="absolute inset-4 animate-spin" style={{ animationDuration: '45s', animationDirection: 'reverse' }}>
                <img src="/droneicon.gif" alt="drone" className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 opacity-60 transition-colors duration-1000" style={{ filter: `drop-shadow(0 0 8px ${current.typeColor}60) brightness(0) invert(1)` }} />
              </div>
              <div className="absolute inset-16 animate-spin" style={{ animationDuration: '25s' }}>
                <img src="/droneicon.gif" alt="drone" className="absolute top-0 left-1/2 -translate-x-1/2 w-7 h-7 opacity-50 transition-colors duration-1000" style={{ filter: `drop-shadow(0 0 8px ${current.typeColor}50) brightness(0) invert(1)` }} />
              </div>
              <div className="absolute inset-[-30px] animate-spin" style={{ animationDuration: '60s' }}>
                <img src="/droneicon.gif" alt="drone" className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 opacity-40 transition-colors duration-1000" style={{ filter: `drop-shadow(0 0 8px ${current.typeColor}40) brightness(0) invert(1)` }} />
              </div>
              <div className="absolute inset-12 animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }}>
                <img src="/droneicon.gif" alt="drone" className="absolute top-0 left-1/2 -translate-x-1/2 w-7 h-7 opacity-55 transition-colors duration-1000" style={{ filter: `drop-shadow(0 0 8px ${current.typeColor}55) brightness(0) invert(1)` }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
