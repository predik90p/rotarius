import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
import { CTASection } from "@/components/corporate/cta-section"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"
import { products } from "@/lib/products"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) return { title: "Product Not Found | Rotarius" }
  return {
    title: `${product.name} | Rotarius`,
    description: product.tagline,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  const currentIndex = products.findIndex((p) => p.slug === slug)
  const nextProduct = products[(currentIndex + 1) % products.length]

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 z-10 w-full">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className={`text-sm font-semibold tracking-widest uppercase ${product.accentColor === "text-blue-600" ? "text-blue-400" : product.accentColor === "text-orange-600" ? "text-orange-400" : product.accentColor === "text-amber-600" ? "text-amber-400" : product.accentColor === "text-emerald-600" ? "text-emerald-400" : "text-stone-400"}`}>
                {product.tag}
              </span>
              <h1 className="mt-4 text-5xl sm:text-6xl font-bold tracking-tight text-white leading-[1.05]">
                {product.name}
              </h1>
              <p className="mt-4 text-2xl text-white/60 font-light">{product.tagline}</p>
              <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-xl">{product.description}</p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-amber-400 hover:bg-amber-500 text-black px-8 py-4 text-lg rounded-2xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-amber-400/20"
                >
                  Contact Us
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-lg aspect-square bg-white/5 rounded-[40px] border border-white/10 p-12 backdrop-blur-sm">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-[#f8f7f2] border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.highlights.map((h) => (
              <div
                key={h}
                className="flex items-start gap-3 bg-white p-6 rounded-2xl border border-stone-200"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${product.bgAccent}`}>
                  <Check className={`w-4 h-4 ${product.accentColor}`} />
                </div>
                <span className="text-stone-700 font-medium">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-amber-600 tracking-widest uppercase">Technical Data</span>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-stone-900">Specifications</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="divide-y divide-stone-100">
              {product.specs.map((spec) => (
                <div key={spec.label} className="flex flex-col sm:flex-row sm:items-center py-5 gap-2 sm:gap-8">
                  <dt className="text-sm font-bold text-stone-400 uppercase tracking-wider sm:w-48 flex-shrink-0">
                    {spec.label}
                  </dt>
                  <dd className="text-stone-800 font-medium">{spec.value}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Product */}
      <section className="py-20 bg-[#f8f7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href={`/products/${nextProduct.slug}`}
            className="group flex items-center justify-between bg-white p-8 rounded-3xl border border-stone-200 hover:-translate-y-1 hover:shadow-xl transition-all duration-500"
          >
            <div>
              <span className="text-sm text-stone-400 font-semibold uppercase tracking-wider">Next Product</span>
              <h3 className="mt-2 text-3xl font-black text-stone-900">{nextProduct.name}</h3>
              <p className="mt-1 text-stone-500">{nextProduct.tagline}</p>
            </div>
            <ArrowRight className="w-8 h-8 text-stone-300 group-hover:text-amber-500 group-hover:translate-x-2 transition-all" />
          </Link>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
