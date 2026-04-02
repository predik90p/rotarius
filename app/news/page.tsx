import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
import { Calendar, ArrowRight, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "News & Updates | AeroDefense Switzerland",
  description: "Latest news, press releases, and updates from AeroDefense Switzerland.",
}

const news = [
  {
    id: "ad-7x-launch",
    category: "Product Launch",
    title: "Introducing the AD-7X Long-Range Surveillance Platform",
    excerpt: "Our latest surveillance drone offers unprecedented 48-hour flight endurance with advanced sensor integration, setting new standards in persistent ISR capabilities.",
    date: "March 15, 2026",
    featured: true,
  },
  {
    id: "edc-partnership",
    category: "Partnership",
    title: "Strategic Alliance with European Defense Consortium",
    excerpt: "AeroDefense joins forces with leading defense contractors to develop next-generation autonomous systems for NATO member states.",
    date: "March 8, 2026",
    featured: true,
  },
  {
    id: "nato-certification",
    category: "Certification",
    title: "NATO STANAG 4671 Certification Achieved",
    excerpt: "Our UAV systems now meet the highest NATO airworthiness standards for unmanned aircraft, enabling deployment across all alliance operations.",
    date: "February 28, 2026",
    featured: false,
  },
  {
    id: "swiss-contract",
    category: "Contract Award",
    title: "Swiss Armed Forces Contract Extension",
    excerpt: "Multi-year contract extension to provide surveillance systems and support services to the Swiss military through 2030.",
    date: "February 15, 2026",
    featured: false,
  },
  {
    id: "ai-navigation",
    category: "Innovation",
    title: "AI-Powered Autonomous Navigation System Unveiled",
    excerpt: "Revolutionary onboard AI enables fully autonomous mission execution in GPS-denied environments with unprecedented reliability.",
    date: "January 30, 2026",
    featured: false,
  },
  {
    id: "singapore-expansion",
    category: "Expansion",
    title: "New Asia-Pacific Service Center Opens in Singapore",
    excerpt: "Strategic expansion brings full maintenance and support capabilities to Southeast Asian defense partners.",
    date: "January 20, 2026",
    featured: false,
  },
  {
    id: "defense-award",
    category: "Recognition",
    title: "European Defense Innovation Award 2025",
    excerpt: "AeroDefense recognized for breakthrough developments in autonomous swarm coordination technology.",
    date: "December 10, 2025",
    featured: false,
  },
  {
    id: "sustainability",
    category: "Sustainability",
    title: "Carbon-Neutral Manufacturing Initiative Launched",
    excerpt: "Commitment to achieving carbon-neutral production by 2028 through renewable energy and efficiency improvements.",
    date: "December 1, 2025",
    featured: false,
  },
]

const categories = ["All", "Product Launch", "Partnership", "Certification", "Contract Award", "Innovation", "Expansion", "Recognition", "Sustainability"]

export default function NewsPage() {
  const featuredNews = news.filter((item) => item.featured)
  const regularNews = news.filter((item) => !item.featured)

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-secondary via-background to-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="text-sm font-medium text-accent tracking-wider uppercase">
                News & Updates
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
              Latest from AeroDefense
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Stay informed about our latest developments, partnerships, and 
              innovations in unmanned aerial systems.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-background border-b border-border sticky top-16 z-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 -mb-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">Featured</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredNews.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="group flex flex-col bg-card rounded-2xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="w-10 h-10 text-primary/40"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-accent uppercase tracking-wider">
                      <Tag className="w-3 h-3" />
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed flex-1">
                    {item.excerpt}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.date}
                    </div>
                    <span className="text-sm font-medium text-accent flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-12 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">All News</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((item) => (
              <Link
                key={item.id}
                href={`/news/${item.id}`}
                className="group p-6 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {item.excerpt}
                </p>
                <div className="mt-4 flex items-center text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5 mr-1.5" />
                  {item.date}
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <button className="px-4 py-2 text-sm font-medium bg-card border border-border rounded-lg hover:bg-secondary transition-colors">
              Previous
            </button>
            <button className="w-10 h-10 text-sm font-medium bg-primary text-primary-foreground rounded-lg">
              1
            </button>
            <button className="w-10 h-10 text-sm font-medium bg-card border border-border rounded-lg hover:bg-secondary transition-colors">
              2
            </button>
            <button className="w-10 h-10 text-sm font-medium bg-card border border-border rounded-lg hover:bg-secondary transition-colors">
              3
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-card border border-border rounded-lg hover:bg-secondary transition-colors">
              Next
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold text-foreground">Stay Updated</h2>
          <p className="mt-4 text-muted-foreground">
            Subscribe to our newsletter for the latest news and updates from AeroDefense Switzerland.
          </p>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 text-xs text-muted-foreground">
            By subscribing, you agree to our privacy policy. We respect your data.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
