"use client"

import { ArrowRight, Leaf, Shield, Flame, Plus, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const INFO_DATA = [
  {
    tag: "AGRICULTURAL SUPPORT",
    title: "Smart Farming for a Changing Planet",
    mainImg: "/agricultural_field_sunset_background_1775123075962.png",
    subCards: [
      { icon: Leaf, title: "Sustainability First", desc: "We prioritize eco-friendly practices that protect natural resources and ensure long-term productivity." },
      { icon: Shield, title: "Farmer Approach", desc: "Every solution we offer is designed to support farmers — helping them increase yields and reduce risk." },
      { icon: ArrowRight, title: "Innovation That Works", desc: "We embrace smart technologies and proven methods that bring efficiency, precision, and progress." }
    ]
  },
  {
    tag: "DEFENSE OPERATIONS",
    title: "Tactical Superiority for Global Security",
    mainImg: "/tactical_military_drone_background_1775123500635.png",
    subCards: [
      { icon: Shield, title: "Stealth Command", desc: "Advanced low-observable technology ensures operational mission success in contested environments." },
      { icon: ArrowRight, title: "Rapid Deployment", desc: "Our UAV systems can be deployed within minutes, providing immediate eyes in the sky." },
      { icon: Leaf, title: "Encryption First", desc: "Military-grade data protection ensures all reconnaissance remains strictly confidential." }
    ]
  },
  {
    tag: "EMERGENCY RESPONSE",
    title: "Precision Response for Saving Lives",
    mainImg: "/firefighting_drone_background_1775123539157.png",
    subCards: [
      { icon: Flame, title: "Thermal Mapping", desc: "Real-time heat signature analysis to identify flare-ups before they spread beyond control." },
      { icon: ArrowRight, title: "Suppressant Tech", desc: "Precision delivery of fire-retardant materials to critical hotspots with high-volume payloads." },
      { icon: Leaf, title: "Eco-Containment", desc: "Monitoring disaster sites to prevent environmental secondary damage after the fire." }
    ]
  }
]

interface InfoSectionProps {
  activeIdx: number;
  onIdxChange: (idx: number) => void;
}

export function InfoSection({ activeIdx, onIdxChange }: InfoSectionProps) {
  const data = INFO_DATA[activeIdx]

  return (
    <section className="py-24 bg-[#fcfcf9] overflow-hidden">
      <div className="mx-auto max-w-[1720px] px-6 lg:px-12 xl:px-20 flex relative">
        
        {/* Left Vertical Selector (Timeline Style with Labels) */}
        <div className="hidden xl:flex flex-col items-center mr-20 gap-0">
          {[
            { name: "Agro" },
            { name: "Military" },
            { name: "Rescue" }
          ].map((theme, i) => (
            <div key={i} className="flex flex-col items-center group cursor-pointer relative" onClick={() => onIdxChange(i)}>
              {/* Vertical Label */}
              <div className={`absolute left-8 whitespace-nowrap text-[11px] font-bold tracking-widest uppercase transition-all duration-500 ${
                  i === activeIdx ? "text-stone-900 translate-x-2" : "text-stone-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                }`}>
                {theme.name}
              </div>

              <div 
                className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                  i === activeIdx ? "bg-stone-800 border-stone-800 scale-150 shadow-lg" : "bg-white border-stone-300 group-hover:border-stone-500"
                }`} 
              />
              {i < 2 && (
                <div className={`w-[1px] h-32 transition-colors duration-500 ${i < activeIdx ? "bg-stone-800" : "bg-stone-200"}`} />
              )}
            </div>
          ))}
          <div className="mt-8 transform -rotate-90 origin-right translate-x-[-20px]">
            <span className="text-[10px] font-bold text-stone-400 tracking-[0.4em] uppercase whitespace-nowrap">Timeline Systems</span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div key={`header-${activeIdx}`} className="animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="inline-block px-4 py-1.5 mb-8 rounded-lg border border-stone-200 bg-white">
                <span className="text-[10px] font-bold tracking-[0.2em] text-stone-500 uppercase">{data.tag}</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[1.1] mb-10">
                {data.title}
              </h2>
              <Button className="bg-[#fef9c3] hover:bg-[#fef08a] text-black rounded-2xl px-10 py-8 text-md font-bold shadow-xl shadow-yellow-500/5 group">
                <span className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-black/80" />
                  Read More
                </span>
              </Button>
            </div>

            <div key={`img-${activeIdx}`} className="relative aspect-[4/3] rounded-[48px] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-1000 group">
              <img src={data.mainImg} alt="Main" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
          </div>

          {/* Sub-cards Bottom Row (EXPANDED) */}
          <div className="grid md:grid-cols-3 gap-16 lg:gap-24 pt-16 border-t border-stone-200/60">
            {data.subCards.map((card, idx) => (
              <div 
                key={`${activeIdx}-${idx}`} 
                style={{ animationDelay: `${idx * 150}ms` }}
                className="animate-in fade-in slide-in-from-bottom-8 duration-700"
              >
                <div className="mb-6 p-3 rounded-2xl bg-stone-50 w-fit">
                   <card.icon className="w-8 h-8 text-stone-600" />
                </div>
                <h4 className="text-2xl font-bold text-stone-900 mb-4">{card.title}</h4>
                <p className="text-stone-500 text-lg leading-relaxed mb-6">
                  {card.desc}
                </p>
                <button className="p-2 rounded-full bg-[#fef9c3] hover:scale-110 transition-transform">
                   <Plus className="w-4 h-4 text-black" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
