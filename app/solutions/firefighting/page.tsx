"use client"

import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
import { Flame, Droplets, Search, Siren, Thermometer, Wind, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function FirefightingSolutionPage() {
  return (
    <main className="min-h-screen bg-[#fefefe]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-[#f8f1e9] to-[#ffffff]">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#e11d48 0.5px, transparent 0.5px)", backgroundSize: "16px 16px" }} />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white to-transparent" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center w-full z-10">
          <div>
            <div className="inline-block px-3 py-1 mb-6 rounded-full border border-orange-200 bg-orange-50/50">
               <span className="text-[10px] font-bold tracking-[0.2em] text-orange-600 uppercase tracking-widest">EMERGENCY SYSTEMS</span>
            </div>
            <h1 className="text-6xl lg:text-8xl font-black text-stone-900 tracking-tighter leading-[0.9] mb-8">
              Emergency <br/><span className="text-orange-600">Rescue & <br/>Support</span>
            </h1>
            <p className="text-stone-500 text-xl max-w-lg mb-10 leading-relaxed italic">
              Rapid-response drone fleets for precision firefighting and high-stakes search & rescue in hazardous terrain.
            </p>
            <Button className="bg-orange-600 text-white hover:bg-orange-700 rounded-2xl px-12 py-8 font-black shadow-xl shadow-orange-600/20">DEPLOY ASSET</Button>
          </div>
          <div className="relative aspect-square w-full max-w-lg ml-auto">
             <img src="/firefighting_drone_background_1775123539157.png" alt="Firefighting Drone" className="w-full h-full object-contain drop-shadow-[0_0_50px_rgba(249,115,22,0.2)] animate-pulse" />
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-24 lg:py-32 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Thermometer, title: "Thermal Fire Mapping", desc: "Real-time thermal hotspot detection for forest and structure fire containment." },
              { icon: Droplets, title: "Precision Suppression", desc: "Autonomous delivery of high-volume fire retardant material directly to hotspots." },
              { icon: Search, title: "Search & Rescue", desc: "Dual spectral sensors to find missing persons through smoke and dense environmental debris." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-[48px] bg-white border border-stone-100 hover:shadow-2xl transition-all group overflow-hidden">
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-8 border border-orange-100 group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-orange-100 rounded-full blur-2xl group-hover:blur-3xl group-hover:scale-150 transition-all opacity-50" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
