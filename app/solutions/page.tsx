"use client"

import { Header } from "@/components/corporate/header"
import { ServicesSection } from "@/components/corporate/services-section"
import { Footer } from "@/components/corporate/footer"

export default function SolutionsPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#f8f7f2]">
      <Header />
      <div className="py-16 text-center">
        <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-stone-300">
          <span className="text-[10px] font-bold tracking-[0.2em] text-stone-500 uppercase">OUR EXPERTISE</span>
        </div>
        <h1 className="text-6xl lg:text-8xl font-black text-stone-900 tracking-tighter">Strategic Solutions</h1>
        <p className="mt-8 text-stone-500 text-xl max-w-2xl mx-auto">
          Delivering advanced technological integration for agriculture, global defense, and emergency response.
        </p>
      </div>
      <ServicesSection />
      <Footer />
    </main>
  )
}
