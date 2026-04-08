"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLocale } from "@/components/locale-provider"

export function AboutSection() {
  const { dict } = useLocale()

  return (
    <section className="relative py-24 lg:py-32 bg-primary overflow-hidden text-primary-foreground">
      {/* Subtle Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full whitespace-nowrap text-center pointer-events-none opacity-[0.06] select-none">
        <span className="text-[160px] lg:text-[280px] font-black uppercase tracking-tighter">
          Ecosystem
        </span>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12 z-10">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16 lg:mb-24">
          <div>
            <span className="text-sm font-semibold tracking-widest uppercase opacity-60">{dict.about.title}</span>
            <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
              Building a Global<br />
              UAV Ecosystem
            </h2>
          </div>
          <div>
            <p className="opacity-70 text-lg leading-relaxed mb-8">
              {dict.about.description}
            </p>
            <Button asChild className="bg-background text-foreground hover:bg-background/90 rounded-2xl px-8 py-6 font-bold shadow-xl transition-all hover:scale-105 active:scale-95">
              <Link href="/history" className="flex items-center gap-2">
                {dict.about.readAboutUs}
              </Link>
            </Button>
          </div>
        </div>

        {/* Image Grid — Cleaner Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {/* Large Card */}
          <div className="col-span-2 row-span-2 rounded-[32px] overflow-hidden relative group">
            <img
              src="/products/Kazhan-AGRO-30-agricultural-drone.jpg"
              alt="Agriculture drone"
              className="w-full h-full object-cover min-h-[300px] lg:min-h-[500px] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">Agriculture</span>
              <h3 className="text-xl font-bold text-white mt-1">Precision Farming</h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-[24px] overflow-hidden relative group">
            <img
              src="/products/Kazhan-E620-Strike-UAS.jpg"
              alt="Military drone"
              className="w-full h-full object-cover min-h-[200px] lg:min-h-[240px] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">Defense</span>
              <h3 className="text-sm font-bold text-white mt-1">Tactical UAS</h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-[24px] overflow-hidden relative group">
            <img
              src="/products/Kazhan-E630-Firefighter-Drone-1.webp"
              alt="Firefighting drone"
              className="w-full h-full object-cover min-h-[200px] lg:min-h-[240px] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">Emergency</span>
              <h3 className="text-sm font-bold text-white mt-1">Fire Response</h3>
            </div>
          </div>

          {/* Card 4 */}
          <div className="rounded-[24px] overflow-hidden relative group">
            <img
              src="/products/SHMAVIK-quadcopter-scout-drone.webp"
              alt="ISR scout drone"
              className="w-full h-full object-cover min-h-[200px] lg:min-h-[240px] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">Recon</span>
              <h3 className="text-sm font-bold text-white mt-1">ISR Scout</h3>
            </div>
          </div>

          {/* Card 5 */}
          <div className="rounded-[24px] overflow-hidden relative group">
            <img
              src="/products/Pop-Fly-tactical-tube-launched-UAS.jpg"
              alt="Tube-launched UAS"
              className="w-full h-full object-cover min-h-[200px] lg:min-h-[240px] transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">Tactical</span>
              <h3 className="text-sm font-bold text-white mt-1">Loitering Munition</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
