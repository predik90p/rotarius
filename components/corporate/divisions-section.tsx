"use client"

import { ArrowRight, ArrowUpRight, Sprout, Shield, Flame, Lightbulb } from "lucide-react"
import Link from "next/link"

const DIVISIONS = [
  {
    id: 'commercial',
    title: 'Commercial Division',
    tag: 'Civilian UAV Applications',
    desc: 'From precision agriculture to solar and wind infrastructure — we build and deploy drone systems that transform civilian industries. Includes certified pilot training and logistics strategy.',
    color: '#71A58D',
    bg: 'bg-[#71A58D]/5',
    border: 'border-[#71A58D]/15',
    hoverBg: 'hover:bg-[#71A58D]/10',
    href: '/solutions/commercial',
    icon: Sprout,
    image: '/products/Kazhan-AGRO-30-agricultural-drone.jpg',
    features: ['Smart Agriculture', 'Solar & Wind', 'Civil Pilot School', 'Logistics Strategy'],
  },
  {
    id: 'defense',
    title: 'Defense Division',
    tag: 'Tactical & Security',
    desc: 'Military-grade UAV platforms for reconnaissance, border security, and electronic warfare resilience. Combat operator certification and defense consulting included.',
    color: '#1C5B68',
    bg: 'bg-[#1C5B68]/5',
    border: 'border-[#1C5B68]/15',
    hoverBg: 'hover:bg-[#1C5B68]/10',
    href: '/solutions/defense',
    icon: Shield,
    image: '/products/Kazhan-E620-Strike-UAS.jpg',
    features: ['Tactical Surveillance', 'Combat Pilot School', 'Defense Consulting', 'Custom Platforms'],
  },
  {
    id: 'emergency',
    title: 'Emergency & Rescue',
    tag: 'Firefighting & SAR',
    desc: 'Rapid-response drone fleets equipped for high-temperature firefighting, thermal search & rescue, and emergency communications relay in disaster zones.',
    color: '#F47A60',
    bg: 'bg-[#F47A60]/5',
    border: 'border-[#F47A60]/15',
    hoverBg: 'hover:bg-[#F47A60]/10',
    href: '/solutions/emergency',
    icon: Flame,
    image: '/products/Kazhan-E630-Firefighter-Drone-1.webp',
    features: ['Fire Suppression', 'Thermal SAR', 'Emergency Comms', 'Rapid Deployment'],
  },
  {
    id: 'consulting',
    title: 'Consulting Center',
    tag: 'Strategy & Advisory',
    desc: 'Expert guidance on UAV application strategy, component sourcing intelligence, supply chain localization, and custom platform development for any mission.',
    color: '#6366f1',
    bg: 'bg-[#6366f1]/5',
    border: 'border-[#6366f1]/15',
    hoverBg: 'hover:bg-[#6366f1]/10',
    href: '/consulting',
    icon: Lightbulb,
    image: '/products/SHMAVIK-quadcopter-scout-drone.webp',
    features: ['UAV Strategy', 'Components Advisory', 'Supply Chain', 'Custom Development'],
  },
]

export function DivisionsSection() {
  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">What We Do</span>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mt-4 leading-tight">
              Four Divisions.<br />
              <span className="text-muted-foreground">One Ecosystem.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-sm leading-relaxed lg:text-right">
            Every Rotarius division is interconnected — from R&D and manufacturing to pilot training and field deployment. One standard, one ecosystem.
          </p>
        </div>

        {/* Division Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {DIVISIONS.map((div) => {
            const Icon = div.icon
            return (
              <Link
                key={div.id}
                href={div.href}
                className={`group relative rounded-[40px] border ${div.border} ${div.bg} ${div.hoverBg} transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl overflow-hidden`}
              >
                {/* Top Color Bar */}
                <div className="h-1 w-full" style={{ backgroundColor: div.color }} />

                <div className="p-8 lg:p-10">
                  {/* Top Row */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-stone-100 flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5" style={{ color: div.color }} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">{div.title}</h3>
                        <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{div.tag}</p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:border-stone-900 transition-all">
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 max-w-md">
                    {div.desc}
                  </p>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {div.features.map((feat, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider bg-white border border-stone-100 text-stone-600"
                      >
                        {feat}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: div.color }}>
                    <span>Explore Division</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <img
                    src={div.image}
                    alt={div.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
