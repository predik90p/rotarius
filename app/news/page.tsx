import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "News & Updates | Rotarius",
  description: "Latest news, press releases, and updates from Rotarius.",
}

const news = [
  {
    id: "ad-7x-launch",
    category: "Product Launch",
    title: "Introducing the AD-7X Long-Range Surveillance Platform",
    excerpt: "Our latest surveillance drone offers unprecedented 48-hour flight endurance with advanced sensor integration, setting new standards in persistent ISR capabilities.",
    date: "March 15, 2026",
    featured: true,
    color: '#3b82f6',
  },
  {
    id: "edc-partnership",
    category: "Partnership",
    title: "Strategic Alliance with European Defense Consortium",
    excerpt: "Rotarius joins forces with leading defense contractors to develop next-generation autonomous systems for NATO member states.",
    date: "March 8, 2026",
    featured: true,
    color: '#22c55e',
  },
  {
    id: "nato-certification",
    category: "Certification",
    title: "NATO STANAG 4671 Certification Achieved",
    excerpt: "Our UAV systems now meet the highest NATO airworthiness standards for unmanned aircraft, enabling deployment across all alliance operations.",
    date: "February 28, 2026",
    featured: false,
    color: '#f97316',
  },
  {
    id: "swiss-contract",
    category: "Contract Award",
    title: "Swiss Armed Forces Contract Extension",
    excerpt: "Multi-year contract extension to provide surveillance systems and support services to the Swiss military through 2030.",
    date: "February 15, 2026",
    featured: false,
    color: '#3b82f6',
  },
  {
    id: "ai-navigation",
    category: "Innovation",
    title: "AI-Powered Autonomous Navigation System Unveiled",
    excerpt: "Revolutionary onboard AI enables fully autonomous mission execution in GPS-denied environments with unprecedented reliability.",
    date: "January 30, 2026",
    featured: false,
    color: '#22c55e',
  },
  {
    id: "singapore-expansion",
    category: "Expansion",
    title: "New Asia-Pacific Service Center Opens in Singapore",
    excerpt: "Strategic expansion brings full maintenance and support capabilities to Southeast Asian defense partners.",
    date: "January 20, 2026",
    featured: false,
    color: '#f97316',
  },
  {
    id: "defense-award",
    category: "Recognition",
    title: "European Defense Innovation Award 2025",
    excerpt: "Rotarius recognized for breakthrough developments in autonomous swarm coordination technology.",
    date: "December 10, 2025",
    featured: false,
    color: '#3b82f6',
  },
  {
    id: "sustainability",
    category: "Sustainability",
    title: "Carbon-Neutral Manufacturing Initiative Launched",
    excerpt: "Commitment to achieving carbon-neutral production by 2028 through renewable energy and efficiency improvements.",
    date: "December 1, 2025",
    featured: false,
    color: '#22c55e',
  },
]

export default function NewsPage() {
  const featuredNews = news.filter((item) => item.featured)
  const regularNews = news.filter((item) => !item.featured)

  return (
    <main className="min-h-screen bg-[#fcfcf9]">
      <Header />

      {/* Title */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[1.1]">
            News
          </h1>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 border-t border-stone-200/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="text-sm font-semibold text-stone-400 uppercase tracking-widest mb-8">Featured</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredNews.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="group bg-white rounded-[40px] border border-stone-100 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[16/9] bg-stone-50 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: item.color + '15' }}>
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  </div>
                </div>
                <div className="p-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-[11px] font-bold uppercase tracking-wider" style={{ backgroundColor: item.color + '15', color: item.color }}>
                    {item.category}
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 leading-tight group-hover:text-stone-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-stone-500 leading-relaxed">
                    {item.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-sm text-stone-400">{item.date}</span>
                    <span className="text-sm font-semibold text-stone-400 group-hover:text-stone-900 flex items-center gap-2 transition-colors">
                      Read more
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h2 className="text-sm font-semibold text-stone-400 uppercase tracking-widest mb-8">All News</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="group bg-white rounded-[32px] border border-stone-100 p-8 hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-[11px] font-bold uppercase tracking-wider" style={{ backgroundColor: item.color + '15', color: item.color }}>
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-stone-900 leading-tight group-hover:text-stone-700 transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="mt-3 text-stone-500 text-sm leading-relaxed line-clamp-2">
                  {item.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-stone-400">{item.date}</span>
                  <span className="text-sm font-semibold text-stone-400 group-hover:text-stone-900 flex items-center gap-2 transition-colors">
                    Read more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
