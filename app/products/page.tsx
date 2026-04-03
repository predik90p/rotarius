"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
import { ArrowRight } from "lucide-react"
import { products } from "@/lib/products"
import { useLocale } from "@/components/locale-provider"

export default function ProductsPage() {
  const { dict } = useLocale()
  const [activeCategory, setActiveCategory] = useState(0)

  const filtered = activeCategory === 0
    ? products
    : products.filter((p) => p.tag === dict.products.categories[activeCategory])

  return (
    <main className="min-h-screen bg-[#fcfcf9]">
      <Header />
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[1.1] mb-16">{dict.products.title}</h1>
          <div className="flex relative">
            {/* Vertical Category Scroller */}
            <div className="hidden xl:flex flex-col items-center mr-36 gap-0 sticky top-32 self-start">
              {dict.products.categories.map((cat, i) => (
                <div key={cat} className="flex flex-col items-center group cursor-pointer relative" onClick={() => setActiveCategory(i)}>
                  <div className={`absolute left-8 whitespace-nowrap text-[11px] font-bold tracking-widest uppercase transition-all duration-500 ${activeCategory === i ? "text-stone-900 translate-x-2" : "text-stone-400 translate-x-1"}`}>
                    {cat}
                  </div>
                  <div className={`w-3 h-3 rounded-full border-2 transition-all duration-500 ${activeCategory === i ? "bg-stone-800 border-stone-800 scale-150 shadow-lg" : "bg-white border-stone-300 group-hover:border-stone-500"}`} />
                  {i < dict.products.categories.length - 1 && (
                    <div className={`w-[1px] h-20 transition-colors duration-500 ${i < activeCategory ? "bg-stone-800" : "bg-stone-200"}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filtered.map((product) => (
                  <Link key={product.slug} href={`/products/${product.slug}`} className="group bg-white rounded-[32px] border border-stone-100 overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition-all duration-700">
                    <div className="aspect-square bg-stone-50 p-8 flex items-center justify-center overflow-hidden">
                      <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <div className="p-8">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-stone-400">{product.tag}</span>
                      <h3 className="mt-2 text-2xl font-bold text-stone-900">{product.name}</h3>
                      <p className="mt-2 text-stone-500 line-clamp-2">{product.tagline}</p>
                      <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-stone-400 group-hover:text-stone-900 transition-colors">
                        {dict.products.viewSpecs}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
