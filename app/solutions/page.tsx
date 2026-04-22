"use client"

import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import Link from "next/link"

const CATEGORIES = [
  {
    id: "01",
    title: "Commercial Division",
    short: "Civilian UAV applications",
    desc: "Precision agriculture, solar & wind infrastructure, logistics strategy, and certified civil pilot training for commercial operators.",
    href: "/solutions/commercial",
    color: "#71A58D",
    bg: "bg-[#71A58D]/5",
    border: "border-[#71A58D]/20",
    hover: "hover:bg-[#71A58D]/10",
    img: "/products/agro-drone-transparent.png"
  },
  {
    id: "02",
    title: "Defense Division",
    short: "Military & security",
    desc: "Tactical surveillance platforms, combat pilot certification, and defense consulting for law enforcement and armed forces.",
    href: "/solutions/defense",
    color: "#1C5B68",
    bg: "bg-[#1C5B68]/5",
    border: "border-[#1C5B68]/20",
    hover: "hover:bg-[#1C5B68]/10",
    img: "/products/e620-transparent.png"
  },
  {
    id: "03",
    title: "Emergency Division",
    short: "Rescue & response",
    desc: "Firefighting drone fleets, search & rescue systems, and emergency communications relays for critical missions.",
    href: "/solutions/emergency",
    color: "#F47A60",
    bg: "bg-[#F47A60]/5",
    border: "border-[#F47A60]/20",
    hover: "hover:bg-[#F47A60]/10",
    img: "/products/e630-transparent.png"
  },
  {
    id: "04",
    title: "Consulting Center",
    short: "Strategy & advisory",
    desc: "Cross-industry UAV strategy, component sourcing intelligence, supply chain localization, and custom platform development.",
    href: "/consulting",
    color: "#6366f1",
    bg: "bg-[#6366f1]/5",
    border: "border-[#6366f1]/20",
    hover: "hover:bg-[#6366f1]/10",
    img: "/products/e620-transparent.png"
  }
]

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#fcfcf9]">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left — Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-stone-200 bg-white">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-400" />
                <span className="text-[10px] font-bold tracking-[0.2em] text-stone-500 uppercase">Our Expertise</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[1.05] mb-8">
                Strategic<br />
                <span className="text-stone-400">Solutions</span>
              </h1>
              <p className="text-stone-500 text-lg leading-relaxed max-w-md">
                Rotarius delivers end-to-end drone technology, operator training, and strategic consulting across three core divisions — backed by a dedicated advisory center.
              </p>
            </div>

            {/* Right — 4 Category Rows */}
            <div className="space-y-3">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.id}
                  href={cat.href}
                  className={`group flex items-center gap-5 p-5 rounded-3xl border ${cat.border} ${cat.bg} ${cat.hover} transition-all duration-500 hover:-translate-y-1`}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-white border border-stone-100 flex items-center justify-center">
                    <span className="text-xs font-black text-stone-900">{cat.id}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: cat.color }} />
                      <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wider">{cat.title}</h3>
                    </div>
                    <p className="text-sm text-stone-500 leading-relaxed line-clamp-2">{cat.desc}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-stone-300 group-hover:text-stone-900 transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="h-px bg-stone-200" />
      </div>

      {/* Explore Divisions — Cards Section */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-stone-500 uppercase">Explore</span>
              <h2 className="text-3xl lg:text-5xl font-bold text-stone-900 mt-3 leading-tight">Divisions & Services</h2>
            </div>
            <p className="text-stone-500 max-w-md text-sm leading-relaxed">
              Each division combines technology platforms, training programs, and strategic services tailored to its operational environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                href={cat.href}
                className="group relative bg-white rounded-[40px] border border-stone-100 overflow-hidden transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* Top bar with color */}
                <div className="h-1.5 w-full" style={{ backgroundColor: cat.color }} />

                <div className="p-10 flex flex-col h-full min-h-[360px]">
                  <div className="flex items-center justify-between mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                      <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">{cat.short}</span>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:border-stone-900 transition-all">
                      <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-stone-900 leading-tight max-w-[280px] mb-4">
                    {cat.title}
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed max-w-sm mb-8">
                    {cat.desc}
                  </p>

                  <div className="mt-auto flex items-center gap-2 text-sm font-semibold" style={{ color: cat.color }}>
                    <span>Explore division</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Floating image */}
                <div className="absolute bottom-0 right-0 w-[45%] h-[50%] transition-transform duration-700 group-hover:scale-105 opacity-90">
                  <img src={cat.img} alt={cat.title} className="w-full h-full object-contain object-bottom-right" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
