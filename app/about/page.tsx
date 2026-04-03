import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fcfcf9]">
      <Header />
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[1.1]">About Us</h1>
        </div>
      </section>
      <Footer />
    </main>
  )
}
