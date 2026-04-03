"use client"

import { Header } from "@/components/corporate/header"
import { ServicesSection } from "@/components/corporate/services-section"
import { Footer } from "@/components/corporate/footer"

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#fcfcf9]">
      <Header />
      <section className="pt-32 pb-16 text-center">
        <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-stone-200 bg-white">
          <span className="text-[10px] font-bold tracking-[0.2em] text-stone-500 uppercase">OUR EXPERTISE</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[1.1]">Strategic Solutions</h1>
        <p className="mt-8 text-stone-500 text-xl max-w-2xl mx-auto">
          Delivering advanced technological integration for agriculture, global defense, and emergency response.
        </p>
      </section>
      <ServicesSection />
      <Footer />
    </main>
  )
}
