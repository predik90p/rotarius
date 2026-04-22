"use client"

import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
import { ArrowRight, Lightbulb, Cpu, Sprout, Truck } from "lucide-react"
import Link from "next/link"

const TYPE_COLOR = '#6366f1'

const CARDS = [
  {
    title: "UAV Application Consulting",
    desc: "Cross-industry advisory on drone deployment — from civilian logistics to law enforcement and military operations. We help you select, customize, and integrate the right UAV platforms for your mission requirements.",
    icon: Lightbulb,
    href: "#contact"
  },
  {
    title: "Components & Supply Chain Consulting",
    desc: "Deep expertise in UAV component origins, global manufacturer landscapes, and market localization strategies. Navigate supply chains, identify reliable vendors, and plan localization for any region.",
    icon: Cpu,
    href: "#contact"
  },
  {
    title: "Agricultural Strategy Development",
    desc: "Comprehensive roadmaps for integrating drone technology into agricultural operations. Fleet planning, regulatory compliance, ROI analysis, and seasonal workflow design.",
    icon: Sprout,
    href: "#contact"
  },
  {
    title: "Logistics Strategy Development",
    desc: "Strategic planning for drone-based logistics — route networks, payload optimization, regulatory frameworks, and fleet scaling from pilot to nationwide deployment.",
    icon: Truck,
    href: "#contact"
  }
]

export default function ConsultingPage() {
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
                <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">Consulting Center</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-8">Consulting & Strategy</h1>
              <p className="text-muted-foreground text-lg max-w-lg mb-10 leading-relaxed">
                Expert advisory across the full UAV lifecycle — from component sourcing and platform customization to operational strategy and workforce training.
              </p>
            </div>
            <div className="relative aspect-square w-full max-w-md ml-auto">
              <div className="w-full h-full rounded-[40px] bg-gradient-to-br from-[#6366f1]/20 to-[#6366f1]/5 border border-[#6366f1]/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto rounded-full bg-[#6366f1]/10 flex items-center justify-center mb-4">
                    <Lightbulb className="w-10 h-10" style={{ color: TYPE_COLOR }} />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">Strategic Advisory</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="py-20 lg:py-28 border-t border-border/60 bg-muted/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="mb-12">
            <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">Our Services</span>
            <h2 className="text-3xl lg:text-4xl font-bold mt-3">Consulting Portfolio</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {CARDS.map((card, i) => {
              const Icon = card.icon
              return (
                <div key={i} className="group relative bg-white rounded-[32px] border border-border/40 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                  <div className="w-12 h-12 rounded-2xl bg-muted/20 flex items-center justify-center mb-6" style={{ color: TYPE_COLOR }}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{card.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{card.desc}</p>
                  <Link href={card.href} className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: TYPE_COLOR }}>
                    <span>Get in touch</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
