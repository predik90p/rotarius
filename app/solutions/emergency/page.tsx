"use client"

import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
import { ArrowRight, Flame, HeartPulse, Radio } from "lucide-react"
import Link from "next/link"

const TYPE_COLOR = '#F47A60'

const CARDS = [
  {
    title: "Firefighting & Rescue",
    desc: "Next-generation firefighting drones with advanced thermal optics and high-volume suppressant delivery for hazardous terrain.",
    icon: Flame,
    href: "/solutions/firefighting",
    img: "/products/e630-transparent.png"
  },
  {
    title: "Search & Rescue",
    desc: "Dual-spectral UAV systems to locate missing persons through smoke, debris, and low-visibility conditions. Rapid deployment for emergency response teams.",
    icon: HeartPulse,
    href: "#contact",
    img: "/products/e630-transparent.png"
  },
  {
    title: "Emergency Communications",
    desc: "Temporary aerial communication relays and situational awareness platforms for disaster zones and infrastructure outages.",
    icon: Radio,
    href: "#contact",
    img: "/products/e630-transparent.png"
  }
]

export default function EmergencyDivisionPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {/* Hero */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-border bg-background">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: TYPE_COLOR }} />
                <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">Emergency Division</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-8">Emergency & Rescue</h1>
              <p className="text-muted-foreground text-lg max-w-lg mb-10 leading-relaxed">
                Rapid-response drone systems for firefighting, search & rescue, and emergency communications in the most demanding conditions.
              </p>
            </div>
            <div className="relative aspect-square w-full max-w-md ml-auto">
              <div className="w-full h-full rounded-[40px] bg-gradient-to-br from-[#F47A60]/20 to-[#F47A60]/5 border border-[#F47A60]/20 flex items-center justify-center">
                <img src="/products/e630-transparent.png" alt="Emergency Drone" className="w-[85%] h-[85%] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20 lg:py-28 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-12">
            <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">Capabilities</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3">Emergency Portfolio</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CARDS.map((card, i) => {
              const Icon = card.icon
              return (
                <Link key={i} href={card.href} className="group relative bg-white rounded-[32px] border border-border/40 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className="w-12 h-12 rounded-2xl bg-muted/20 flex items-center justify-center mb-6" style={{ color: TYPE_COLOR }}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{card.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: TYPE_COLOR }}>
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10 group-hover:opacity-20 transition-opacity">
                    <img src={card.img} alt="" className="w-full h-full object-contain" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
