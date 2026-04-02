"use client"

import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
import { Shield, Target, Radio, Map, Eye, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MilitarySolutionPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[#1a1a1a] opacity-50" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-24 items-center w-full z-10">
          <div>
            <div className="inline-block px-3 py-1 mb-6 rounded-full border border-stone-800 bg-stone-900/50">
               <span className="text-[10px] font-bold tracking-[0.2em] text-stone-500 uppercase">TACTICAL DEFENSE</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              Tactical <br/>Defense & <br/>Surveillance
            </h1>
            <p className="text-stone-400 text-xl max-w-lg mb-10 leading-relaxed">
              Global-scale electronic warfare and stealth reconnaissance technology for modern operational dominance.
            </p>
            <Button className="bg-white text-black hover:bg-stone-200 rounded-2xl px-10 py-8 font-black">GET SECURE ACCESS</Button>
          </div>
          <div className="relative aspect-square w-full max-w-lg ml-auto animate-pulse">
             <img src="/tactical_military_drone_background_1775123500635.png" alt="Military Drone" className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(255,255,255,0.15)]" />
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-24 lg:py-32 relative bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: "Stealth Tech", desc: "Low-observable UAV designs for reconnaissance in contested airspace with minimal radar footprint." },
              { icon: Radio, title: "Jamming Defence", desc: "Resilient encrypted data links designed to maintain communication under heavy electronic jamming." },
              { icon: Eye, title: "Border Control", desc: "Autonomous 24/7 perimeter monitoring with AI-driven anomaly detection and alert systems." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[40px] bg-[#111] border border-stone-900 hover:border-stone-700 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-white group-hover:text-black transition-colors">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-stone-500 leading-relaxed leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
