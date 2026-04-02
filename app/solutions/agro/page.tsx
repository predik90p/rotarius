"use client"

import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
import { ArrowRight, Leaf, Droplets, Target, BarChart3, CloudRain } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AgroSolutionPage() {
  return (
    <main className="min-h-screen bg-[#f8f7f2]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#fdf2b1]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#f8f7f2] to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div>
            <div className="inline-block px-3 py-1 mb-6 rounded-full border border-stone-300">
               <span className="text-[10px] font-bold tracking-[0.2em] text-stone-500 uppercase">AGRO DIVISION</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-stone-900 tracking-tighter leading-[0.9] mb-8">
              Smart & <br/>Sustainable <br/>Agriculture
            </h1>
            <p className="text-stone-600 text-xl max-w-lg mb-10 leading-relaxed">
              Empowering the next generation of farmers with autonomous drone technology for precision application and soil intelligence.
            </p>
          </div>
          <div className="relative aspect-square w-full max-w-md ml-auto">
             <img src="/corn_seeds.png" alt="Corn" className="w-full h-full object-contain drop-shadow-2xl animate-float" />
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Droplets, title: "Precision Spraying", desc: "Reduce chemical waste by up to 40% with targeted drone application technology." },
              { icon: Target, title: "Yield Prediction", desc: "AI-driven multispectral analysis to forecast crop health and peak harvest time." },
              { icon: BarChart3, title: "Soil Analysis", desc: "Deep sensor integration to monitor nutrient levels and moisture across your estate." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[40px] bg-white border border-stone-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 rounded-2xl bg-[#fdf2b1] flex items-center justify-center mb-8">
                  <item.icon className="w-7 h-7 text-stone-800" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
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
