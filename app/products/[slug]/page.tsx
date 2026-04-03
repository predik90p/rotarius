import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
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

const TYPE_COLORS: Record<string, string> = {
  agro: '#22c55e',
  military: '#3b82f6',
  firefighting: '#f97316',
  default: '#78716c',
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find((p) => p.slug === slug)
  if (!product) notFound()

  const currentIndex = products.findIndex((p) => p.slug === slug)
  const nextProduct = products[(currentIndex + 1) % products.length]
  const typeColor = TYPE_COLORS[product.slug.split('-')[0]] || TYPE_COLORS.default

  return (
    <main className="min-h-screen bg-[#fcfcf9]">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-stone-400 hover:text-stone-900 text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            All Products
          </Link>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-stone-200 bg-white">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: typeColor }} />
                <span className="text-[10px] font-bold tracking-[0.2em] text-stone-500 uppercase">{product.tag}</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[1.1] mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-stone-500 font-light mb-4">{product.tagline}</p>
              <p className="text-stone-500 leading-relaxed max-w-xl">{product.description}</p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-stone-900 hover:bg-stone-800 text-white px-8 py-4 text-lg rounded-2xl font-semibold transition-all hover:scale-105 active:scale-95"
                >
                  Contact Us
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-lg aspect-square rounded-[40px] overflow-hidden shadow-2xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 border-t border-stone-200/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.highlights.map((h) => (
              <div
                key={h}
                className="flex items-start gap-3 bg-white p-6 rounded-2xl border border-stone-100"
              >
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-stone-50" style={{ color: typeColor }}>
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-stone-700 font-medium">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-stone-400 tracking-widest uppercase">Technical Data</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-stone-900">Specifications</h2>
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
      <section className="py-20 border-t border-stone-200/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <Link
            href={`/products/${nextProduct.slug}`}
            className="group flex items-center justify-between bg-white p-8 rounded-3xl border border-stone-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-500"
          >
            <div>
              <span className="text-sm text-stone-400 font-semibold uppercase tracking-wider">Next Product</span>
              <h3 className="mt-2 text-3xl font-bold text-stone-900">{nextProduct.name}</h3>
              <p className="mt-1 text-stone-500">{nextProduct.tagline}</p>
            </div>
            <ArrowRight className="w-8 h-8 text-stone-300 group-hover:text-stone-900 group-hover:translate-x-2 transition-all" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
