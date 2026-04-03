"use client"

import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
import { ArrowRight, Droplets, Target, BarChart3, Sprout } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const TYPE_COLOR = '#22c55e'

export default function AgroSolutionPage() {
  return (
    <main className="min-h-screen bg-[#fcfcf9]">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-stone-200 bg-white">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: TYPE_COLOR }} />
                <span className="text-[10px] font-bold tracking-[0.2em] text-stone-500 uppercase">AGRO DIVISION</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[1.1] mb-8">
                Smart & Sustainable Agriculture
              </h1>
              <p className="text-stone-500 text-lg max-w-lg mb-10 leading-relaxed">
                Empowering the next generation of farmers with autonomous drone technology for precision application and soil intelligence.
              </p>
              <Button asChild className="bg-stone-900 hover:bg-stone-800 text-white rounded-2xl px-8 py-6 font-bold transition-all hover:scale-105 active:scale-95">
                <Link href="/contact" className="flex items-center gap-2">
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-square w-full max-w-md ml-auto">
              <img src="/products/Kazhan-AGRO-30-agricultural-drone.jpg" alt="Agro Drone" className="w-full h-full object-cover rounded-[40px] shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 lg:py-32 border-t border-stone-200/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Droplets, title: "Precision Spraying", desc: "Reduce chemical waste by up to 40% with targeted drone application technology." },
              { icon: Target, title: "Yield Prediction", desc: "AI-driven multispectral analysis to forecast crop health and peak harvest time." },
              { icon: BarChart3, title: "Soil Analysis", desc: "Deep sensor integration to monitor nutrient levels and moisture across your estate." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[40px] bg-white border border-stone-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-2xl bg-stone-50 flex items-center justify-center mb-8" style={{ color: TYPE_COLOR }}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-4">{item.title}</h3>
                <p className="text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
