"use client"

import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
import { ArrowRight, Wind, Wrench, Anchor } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLocale } from "@/components/locale-provider"

const TYPE_COLOR = '#0EA5E9'
const ICONS = [Wind, Wrench, Anchor]

export default function WindSolutionPage() {
  const { dict } = useLocale()
  const data = dict.solutions.wind

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-border bg-background">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: TYPE_COLOR }} />
                <span className="text-[10px] font-bold tracking-[0.2em] text-muted-foreground uppercase">{data.tag}</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1] mb-8">{data.title}</h1>
              <p className="text-muted-foreground text-lg max-w-lg mb-10 leading-relaxed">{data.description}</p>
              <Button asChild className="bg-primary text-primary-foreground hover:opacity-90 rounded-2xl px-8 py-6 font-bold transition-all hover:scale-105 active:scale-95 shadow-xl">
                <Link href="/contact" className="flex items-center gap-2">{dict.nav.getInTouch}<ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
            <div className="relative aspect-square w-full max-w-md ml-auto">
              <img src="/products/Kazhan-E630-Firefighter-Drone-1.webp" alt="Wind Drone" className="w-full h-full object-cover rounded-[40px] shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 lg:py-32 border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            {data.features.map((item: any, i: number) => {
              const Icon = ICONS[i]
              return (
                <div key={i} className="p-10 rounded-[40px] bg-white border border-border/40 hover:shadow-xl transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-muted/20 flex items-center justify-center mb-8" style={{ color: TYPE_COLOR }}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
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
