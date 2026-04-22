"use client"

import { ArrowRight, Sprout, Shield, Flame, Lightbulb, BarChart3, Target, Cpu, Users, Radio, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface InfoSectionProps {
  activeIdx: number;
  onIdxChange: (idx: number) => void;
}

export function InfoSection({ activeIdx, onIdxChange }: InfoSectionProps) {
  const INFO_DATA = [
    {
      tag: "COMMERCIAL DIVISION",
      title: "Commercial Solutions",
      mainImg: "/products/Kazhan-AGRO-30-agricultural-drone.jpg",
      typeColor: '#71A58D',
      link: '/solutions/commercial',
      subCards: [
        { icon: Sprout, title: "Smart Agriculture", desc: "Autonomous drone fleets for precision spraying, crop monitoring, and yield analytics across large estates." },
        { icon: Target, title: "Solar & Wind Infrastructure", desc: "Panel cleaning, turbine inspection, and predictive maintenance for renewable energy assets." },
        { icon: Users, title: "Civil Pilot Training", desc: "Certified training programs for agricultural, inspection, and industrial drone operations." },
      ]
    },
    {
      tag: "DEFENSE DIVISION",
      title: "Defense & Security",
      mainImg: "/products/Pop-Fly-tactical-tube-launched-UAS.jpg",
      typeColor: '#1C5B68',
      link: '/solutions/defense',
      subCards: [
        { icon: Shield, title: "Tactical Surveillance", desc: "Military-grade UAV systems for reconnaissance, border monitoring, and electronic warfare resilience." },
        { icon: Target, title: "Combat Pilot School", desc: "Advanced certification for tactical drone operators in combat scenarios and mission-critical flights." },
        { icon: BarChart3, title: "Defense Consulting", desc: "Advisory on UAV deployment for law enforcement and armed forces, including custom platform development." },
      ]
    },
    {
      tag: "EMERGENCY DIVISION",
      title: "Emergency & Rescue",
      mainImg: "/products/Kazhan-E630-Firefighter-Drone-1.webp",
      typeColor: '#F47A60',
      link: '/solutions/emergency',
      subCards: [
        { icon: Flame, title: "Fire Suppression", desc: "High-volume retardant delivery and thermal hotspot mapping for forest and structure fires." },
        { icon: Radio, title: "Search & Rescue", desc: "Dual-spectral sensors to locate missing persons through smoke, debris, and low-visibility conditions." },
        { icon: Wrench, title: "Emergency Comms", desc: "Temporary aerial communication relays and situational awareness for disaster response teams." },
      ]
    },
    {
      tag: "CONSULTING CENTER",
      title: "Strategic Advisory",
      mainImg: "/products/SHMAVIK-quadcopter-scout-drone.webp",
      typeColor: '#6366f1',
      link: '/consulting',
      subCards: [
        { icon: BarChart3, title: "UAV Strategy", desc: "End-to-end roadmaps for drone integration across agriculture, logistics, and defense operations." },
        { icon: Cpu, title: "Components Advisory", desc: "Global manufacturer intelligence, component sourcing, and supply chain localization guidance." },
        { icon: Wrench, title: "Custom Development", desc: "Specialized UAV platform design tailored to unique mission requirements and operational environments." },
      ]
    },
  ]

  const data = INFO_DATA[activeIdx]

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-[1720px] px-6 lg:px-12 xl:px-20 flex relative">

        {/* Left Vertical Selector (Timeline Style with Labels) */}
        <div className="hidden xl:flex flex-col items-center mr-32 gap-0">
          {[
            { name: "Commercial" },
            { name: "Defense" },
            { name: "Emergency" },
            { name: "Consulting" }
          ].map((theme, i) => (
            <div key={i} className="flex flex-col items-center group cursor-pointer relative" onClick={() => onIdxChange(i)}>
              {/* Vertical Label */}
              <div className={`absolute left-8 whitespace-nowrap text-[11px] font-bold tracking-widest uppercase transition-all duration-500 ${i === activeIdx ? "text-foreground translate-x-2" : "text-muted-foreground translate-x-1"
                }`}>
                {theme.name}
              </div>

              <div
                className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${i === activeIdx ? "bg-primary border-primary scale-150 shadow-lg" : "bg-background border-border group-hover:border-primary"
                  }`}
              />
              {i < 3 && (
                <div className={`w-[1px] h-32 transition-colors duration-500 ${i < activeIdx ? "bg-primary" : "bg-border"}`} />
              )}
            </div>
          ))}

        </div>

        {/* Main Content Area */}
        <div className="flex-1">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            <div key={`header-${activeIdx}`} className="animate-in fade-in slide-in-from-left-8 duration-1000">
              <div className="inline-block px-4 py-1.5 mb-8 rounded-lg border border-border bg-background">
                <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">{data.tag}</span>
              </div>
              <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-10">
                {data.title}
              </h2>
              <Button asChild className="bg-primary hover:opacity-90 text-primary-foreground rounded-2xl px-10 py-8 text-md font-bold shadow-xl group">
                <Link href={data.link} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: data.typeColor }} />
                  Explore Division
                </Link>
              </Button>
            </div>

            <div key={`img-${activeIdx}`} className="relative aspect-[4/3] rounded-[48px] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-1000 group">
              <img src={data.mainImg} alt="Main" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            </div>
          </div>

          {/* Sub-cards Bottom Row */}
          <div className="grid md:grid-cols-3 gap-16 lg:gap-24 pt-16 border-t border-border/60">
            {data.subCards.map((card: any, idx: number) => {
              const Icon = card.icon
              return (
                <div
                  key={`${activeIdx}-${idx}`}
                  style={{ animationDelay: `${idx * 150}ms` }}
                  className="animate-in fade-in slide-in-from-bottom-8 duration-700"
                >
                  <div className="mb-6 p-3 rounded-2xl bg-secondary/10 w-fit">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-2xl font-bold text-foreground mb-4">{card.title}</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {card.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
