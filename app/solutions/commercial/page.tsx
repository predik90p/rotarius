"use client"

import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
import { ArrowRight, Sprout, Sun, Wind, Construction, GraduationCap, ClipboardList, Truck } from "lucide-react"
import Link from "next/link"

const TYPE_COLOR = '#71A58D'

const TECH_CARDS = [
  {
    title: "Smart Agriculture",
    desc: "Autonomous drone fleets for precision crop management, spraying, and yield analytics.",
    icon: Sprout,
    href: "/solutions/agro",
    img: "/products/agro-drone-transparent.png"
  },
  {
    title: "Solar Maintenance",
    desc: "Automated panel cleaning and thermal inspection to maximize energy output.",
    icon: Sun,
    href: "/solutions/solar",
    img: "/products/agro-drone-transparent.png"
  },
  {
    title: "Wind Turbine Service",
    desc: "Advanced drone systems for turbine installation, blade inspection, and offshore logistics.",
    icon: Wind,
    href: "/solutions/wind",
    img: "/products/e630-transparent.png"
  },
  {
    title: "Winter Crane Ops",
    desc: "UAV support for Liebherr crane operations in extreme winter conditions.",
    icon: Construction,
    href: "/solutions/cranes",
    img: "/products/e620-transparent.png"
  }
]

const SERVICE_CARDS = [
  {
    title: "Civil Pilot School",
    desc: "Professional training for agricultural, inspection, and industrial drone operations. Certified programs for commercial pilots.",
    icon: GraduationCap,
    href: "#contact"
  },
  {
    title: "Agricultural Strategy",
    desc: "End-to-end strategy development for UAV integration in farming — from fleet selection to operational workflows and ROI modeling.",
    icon: ClipboardList,
    href: "/consulting"
  },
  {
    title: "Logistics Strategy",
    desc: "Drone logistics planning — route optimization, last-mile delivery frameworks, and warehouse inventory automation.",
    icon: Truck,
    href: "/consulting"
  }
]

export default function CommercialDivisionPage() {
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
                <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">Commercial Division</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-8">Commercial Solutions</h1>
              <p className="text-muted-foreground text-lg max-w-lg mb-10 leading-relaxed">
                From precision agriculture to renewable energy infrastructure — we deliver drone technology, pilot training, and strategic consulting for civilian industries.
              </p>
            </div>
            <div className="relative aspect-square w-full max-w-md ml-auto">
              <div className="w-full h-full rounded-[40px] bg-gradient-to-br from-[#71A58D]/20 to-[#71A58D]/5 border border-[#71A58D]/20 flex items-center justify-center">
                <img src="/products/agro-drone-transparent.png" alt="Commercial Drone" className="w-[85%] h-[85%] object-contain" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Solutions */}
      <section className="py-20 lg:py-28 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-12">
            <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">Technology Solutions</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3">Industry Verticals</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_CARDS.map((card, i) => {
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

      {/* Training & Strategy */}
      <section className="py-20 lg:py-28 border-t border-border/60 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-12">
            <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">Services</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3">Training & Strategy</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICE_CARDS.map((card, i) => {
              const Icon = card.icon
              return (
                <Link key={i} href={card.href} className="group relative bg-white rounded-[32px] border border-border/40 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-muted/20 flex items-center justify-center mb-6" style={{ color: TYPE_COLOR }}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{card.desc}</p>
                  <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: TYPE_COLOR }}>
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
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
