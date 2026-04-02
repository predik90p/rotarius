"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
import { CTASection } from "@/components/corporate/cta-section"
import { ArrowRight } from "lucide-react"
import { products } from "@/lib/products"

const categories = ["All", "Military", "Agriculture", "Emergency", "ISR", "Tactical"]

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = activeCategory === "All"
    ? products
    : products.filter((p) => p.tag === activeCategory)

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 z-10 w-full">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-widest uppercase text-amber-400">Product Line</span>
            <h1 className="mt-4 text-5xl sm:text-6xl font-bold tracking-tight text-white leading-[1.05]">
              Our <span className="text-amber-400">Platforms</span>
            </h1>
            <p className="mt-6 text-xl text-white/80 leading-relaxed max-w-xl font-light">
              From heavy-lift strike UAS to precision agriculture drones — battle-proven, Swiss-standard, and built for every mission.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-24 bg-[#f8f7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Category Scroller */}
          <div className="flex flex-col items-center mb-16">
            <div className="flex gap-2 mb-4">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`h-1.5 rounded-full transition-all duration-500 hover:bg-stone-400 ${
                    activeCategory === cat ? 'w-8 bg-stone-900' : 'w-2 bg-stone-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm font-bold text-stone-500 uppercase tracking-[0.3em]">{activeCategory}</span>
          </div>

          {/* Product Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-[32px] border border-stone-200 overflow-hidden hover:-translate-y-3 hover:shadow-2xl hover:shadow-stone-900/5 transition-all duration-700"
              >
                <div className="aspect-square bg-stone-50 p-8 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <span className={`text-[10px] font-bold uppercase tracking-widest ${product.accentColor}`}>
                    {product.tag}
                  </span>
                  <h3 className="mt-2 text-2xl font-black text-stone-900">{product.name}</h3>
                  <p className="mt-2 text-stone-500 line-clamp-2">{product.tagline}</p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-stone-400 group-hover:text-amber-600 transition-colors">
                    View specs
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
