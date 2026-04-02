import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
import { CTASection } from "@/components/corporate/cta-section"
import { ArrowRight, Target, Globe, Cpu, Factory, GraduationCap, Wrench, Users, Radio, Shield, Sprout, Flame, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "History & Vision | Rotarius",
  description: "The story of Rotarius — Swiss precision built on years of UAV innovation. Our history, vision, and the ecosystem behind our technology.",
}

const timeline = [
  { year: "2018", title: "Where It Began", description: "A journey in unmanned aerial systems starts — pioneering agricultural drone technology with hands-on field experience across Ukraine and Eastern Europe." },
  { year: "2019", title: "First Production Line", description: "Scaled from prototypes to serial manufacturing, establishing a full-cycle production facility for multirotor platforms." },
  { year: "2020", title: "Military-Grade Systems", description: "Expanded into defense applications, developing ruggedized UAVs with jam-resistant communications and dual-sensor AI cameras." },
  { year: "2021", title: "Component Mastery", description: "Began in-house production of critical components — gimbals, batteries, radio links, and flight controllers — achieving true vertical integration." },
  { year: "2023", title: "Global Presence", description: "Opened offices and production partnerships across Poland, Czech Republic, and the United States. Workforce surpasses 300 specialists." },
  { year: "2024", title: "Pilot Academy Certified", description: "Launched a certified pilot training school with a curriculum covering BVLOS operations, manual/automatic flight modes, and electronic warfare scenarios." },
  { year: "2025", title: "Rotarius Founded", description: "Leveraging seven years of field-proven UAV expertise, Rotarius is established in Zurich, Switzerland — bringing European rigor to a legacy of innovation." },
  { year: "2026", title: "The Next Chapter", description: "Rotarius enters the global stage with a new generation of autonomous aerial platforms for agriculture, defense, and emergency response." },
]

const ecosystemPillars = [
  { icon: Cpu, title: "Research & Development", description: "In-house R&D teams specializing in aerospace, mechanical, software, and structural engineering. Working on both current-generation improvements and next-generation platforms." },
  { icon: Factory, title: "Full-Cycle Production", description: "Four production lines covering drone assembly, mechanical processing, systems manufacturing, and key component assembly. Over 20,000 units annually." },
  { icon: Shield, title: "Testing & Quality", description: "Multi-stage internal and field testing — from standardized inspections to high-load simulation. Purpose-built test benches and real-world scenario validation." },
  { icon: GraduationCap, title: "Pilot School", description: "Certified training covering manual, automatic, semi-automatic, and EW-disruption flight modes. 60–70% of curriculum is real flight time with expert instructors." },
  { icon: Wrench, title: "Service & Modernization", description: "72-hour turnaround on service requests. Modular upgrade paths designed to extend platform lifespan from months to years without full replacement." },
  { icon: Users, title: "Community & Feedback", description: "Active collaboration with military, civilian, industrial, and volunteer communities. Continuous feedback loops drive rapid product iteration and relevance." },
]

const products = [
  { icon: Sprout, name: "Agriculture Drones", description: "High-performance spraying drones and precision agriculture services. Monitoring, mapping, and autonomous crop treatment at scale.", color: "bg-[#fdf2b1]/60 hover:bg-[#fdf2b1] border-yellow-200/50" },
  { icon: Shield, name: "Defense UAS", description: "Tactical multirotor platforms with jam-resistant radios, AI-powered cameras, and universal payload release systems. Battle-proven.", color: "bg-white/70 hover:bg-blue-50 border-stone-200 hover:border-blue-200" },
  { icon: Flame, name: "Firefighting Drones", description: "Multi-functional platforms equipped with powder, foam, or bomb suppression systems. Built in collaboration with emergency rescue institutes.", color: "bg-white/70 hover:bg-orange-50 border-stone-200 hover:border-orange-200" },
  { icon: Zap, name: "Transport Drones", description: "Cargo delivery platforms for remote or hard-to-reach areas. Multiple configurations for equipment, supplies, and generator transport.", color: "bg-white/70 hover:bg-emerald-50 border-stone-200 hover:border-emerald-200" },
]

const stats = [
  { value: "7+", label: "Years of Experience" },
  { value: "300+", label: "Team Members" },
  { value: "20,000+", label: "Units Produced Annually" },
  { value: "4", label: "Global Offices" },
]

export default function HistoryPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 z-10 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-full bg-white/10 border border-white/20">
                <Globe className="w-5 h-5 text-amber-400" />
              </div>
              <span className="text-sm font-semibold tracking-widest uppercase text-amber-400">
                History & Vision
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
              Built on <br />
              <span className="text-amber-400">Proven Experience</span>
            </h1>

            <p className="mt-8 text-xl text-white/80 leading-relaxed max-w-xl font-light">
              Rotarius combines Swiss precision with years of hands-on UAV expertise — from
              serial production to battlefield deployment. A new company with a deep legacy.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-5">
              <Link
                href="#timeline"
                className="inline-flex items-center justify-center bg-amber-400 hover:bg-amber-500 text-black px-8 py-4 text-lg rounded-2xl font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-2xl shadow-amber-400/20"
              >
                Our Journey
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
              <Link
                href="#vision"
                className="inline-flex items-center justify-center border border-white/20 hover:bg-white/10 text-white px-8 py-4 text-lg rounded-2xl transition-all backdrop-blur-md"
              >
                Our Vision
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#f8f7f2] border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-stone-200">
            {stats.map((stat) => (
              <div key={stat.label} className="py-12 px-6 text-center">
                <div className="text-4xl sm:text-5xl font-black text-stone-900">{stat.value}</div>
                <div className="mt-2 text-sm text-stone-500 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-24 lg:py-32 bg-[#f8f7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-amber-600 tracking-widest uppercase">Our History</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-stone-900 leading-tight">
              From Field to <span className="text-stone-400">Foundation</span>
            </h2>
            <p className="mt-4 text-stone-500 text-lg max-w-2xl mx-auto">
              Seven years of building, testing, and deploying unmanned systems — culminating in the creation of Rotarius.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-stone-200 lg:-translate-x-px" />
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center gap-6 ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                >
                  <div className={`flex-1 pl-20 lg:pl-0 ${index % 2 === 0 ? "lg:text-right lg:pr-16" : "lg:text-left lg:pl-16"}`}>
                    <div className="bg-white p-8 rounded-3xl border border-stone-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-500 inline-block max-w-lg">
                      <span className="text-sm font-bold text-amber-600 tracking-widest">{item.year}</span>
                      <h3 className="mt-3 text-2xl font-black text-stone-900">{item.title}</h3>
                      <p className="mt-3 text-stone-500 leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-400 border-4 border-[#f8f7f2] shadow-lg" />

                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Philosophy */}
      <section id="vision" className="py-24 lg:py-32 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-amber-400 tracking-widest uppercase">Our Philosophy</span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-white leading-tight">
                Ecosystem, <br />
                <span className="text-white/40">Not Just Product</span>
              </h2>
              <p className="mt-8 text-lg text-white/70 leading-relaxed">
                At Rotarius, our philosophy is building a comprehensive UAV ecosystem — not just a standalone
                product. In a fast-moving industry like unmanned systems, production lines and finished
                goods alone are not enough.
              </p>
              <p className="mt-4 text-lg text-white/70 leading-relaxed">
                An ecosystem means the full creation cycle exists under one roof. Every stage depends on
                every other — only by managing all processes together can we deliver the results our
                clients expect. All departments work in close coordination, dramatically raising the
                quality of both products and services.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Target, title: "Precision", desc: "Swiss-standard engineering at every layer — from firmware to flight dynamics." },
                { icon: Cpu, title: "Innovation", desc: "Continuous R&D across current and next-generation autonomous platforms." },
                { icon: Shield, title: "Reliability", desc: "Systems battle-tested in the most demanding operational environments." },
                { icon: Globe, title: "Reach", desc: "Offices in Switzerland, Ukraine, Poland, USA, and Czech Republic." },
              ].map((card, i) => (
                <div
                  key={card.title}
                  className={`p-6 rounded-3xl border border-white/10 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-white/20 ${i === 1 ? "bg-amber-400/10" : "bg-white/5"
                    }`}
                >
                  <card.icon className={`w-8 h-8 mb-4 ${i === 1 ? "text-amber-400" : "text-white/60"}`} />
                  <h3 className={`text-lg font-bold ${i === 1 ? "text-amber-400" : "text-white"}`}>{card.title}</h3>
                  <p className="mt-2 text-sm text-white/50 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem Pillars */}
      <section className="py-24 lg:py-32 bg-[#f8f7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-amber-600 tracking-widest uppercase">The Ecosystem</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-stone-900 leading-tight">
              Full-Cycle <span className="text-stone-400">Capabilities</span>
            </h2>
            <p className="mt-4 text-stone-500 text-lg max-w-2xl mx-auto">
              Every department is interconnected — from R&D to pilot training to field service. One ecosystem, one standard.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemPillars.map((pillar, i) => (
              <div
                key={pillar.title}
                className="group bg-white rounded-3xl border border-stone-200 p-8 hover:-translate-y-2 hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-stone-100 flex items-center justify-center mb-6 group-hover:bg-amber-100 transition-colors duration-500">
                  <pillar.icon className="w-6 h-6 text-stone-400 group-hover:text-amber-600 transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-black text-stone-900 mb-3">{pillar.title}</h3>
                <p className="text-stone-500 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-amber-600 tracking-widest uppercase">Solutions</span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-stone-900 leading-tight">
              Platforms for <span className="text-stone-400">Every Mission</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.name}
                className={`group rounded-3xl border p-8 flex flex-col items-start transition-all duration-700 hover:-translate-y-3 hover:shadow-2xl ${product.color}`}
              >
                <product.icon className="w-8 h-8 text-stone-400 mb-6" />
                <h3 className="text-xl font-black text-stone-900 mb-3">{product.name}</h3>
                <p className="text-stone-500 leading-relaxed text-sm flex-1">{product.description}</p>
                <div className="mt-6 flex items-center text-sm font-semibold text-stone-400 group-hover:text-stone-900 transition-colors">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Components Section */}
      <section className="py-24 lg:py-32 bg-[#f8f7f2]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-amber-600 tracking-widest uppercase">Key Components</span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-stone-900 leading-tight">
                Vertical <span className="text-stone-400">Integration</span>
              </h2>
              <p className="mt-6 text-lg text-stone-500 leading-relaxed">
                We don&apos;t just assemble drones — we manufacture the critical components that make them work.
                This vertical integration gives us full control over quality, performance, and supply chain reliability.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Day/IR cameras with gimbal and integrated AI",
                "Solid & semi-solid batteries with self-heating technology",
                "Dual-band digital radio systems (2.1–6.0 GHz)",
                "Active and passive antenna solutions",
                "Flight controllers for multirotor, fixed-wing, and ground vehicles",
                "Anti-jamming navigation and positioning systems",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-stone-200 hover:border-amber-200 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Radio className="w-4 h-4 text-amber-600" />
                  </div>
                  <span className="text-stone-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
