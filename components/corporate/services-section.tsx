import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const HUB_CARDS = [
  {
    id: "01",
    tag: "COMMERCIAL",
    title: "Commercial Division",
    desc: "Agriculture, solar, wind, crane operations, civil pilot training, and logistics strategy.",
    img: "/products/agro-drone-transparent.png",
    link: "/solutions/commercial",
    typeColor: '#71A58D',
  },
  {
    id: "02",
    tag: "DEFENSE",
    title: "Defense Division",
    desc: "Tactical surveillance, combat pilot school, and defense consulting for law enforcement and armed forces.",
    img: "/products/e620-transparent.png",
    link: "/solutions/defense",
    typeColor: '#1C5B68',
  },
  {
    id: "03",
    tag: "EMERGENCY",
    title: "Emergency Division",
    desc: "Firefighting drones, search & rescue systems, and emergency communications platforms.",
    img: "/products/e630-transparent.png",
    link: "/solutions/emergency",
    typeColor: '#F47A60',
  },
  {
    id: "04",
    tag: "CONSULTING",
    title: "Consulting Center",
    desc: "UAV application strategy, components advisory, supply chain consulting, and custom development.",
    img: "/products/e620-transparent.png",
    link: "/consulting",
    typeColor: '#6366f1',
  }
]

export function ServicesSection() {
  return (
    <section className="pt-10 pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Compact Heading */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            Our Core <span className="text-stone-400">Divisions</span>
          </h2>
          <p className="mt-4 text-stone-500 text-lg">
            Rotarius provides specialized solutions across commercial, defense, and emergency sectors — backed by a dedicated consulting practice.
          </p>
        </div>

        {/* Hub Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HUB_CARDS.map((card) => (
            <Link
              key={card.id}
              href={card.link}
              className="group relative h-[420px] bg-white rounded-[48px] border border-stone-100 overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl"
            >
              <div className="p-10 h-full flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-stone-200 bg-white">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: card.typeColor }} />
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">{card.tag}</span>
                </div>

                <h3 className="text-3xl font-bold text-stone-900 leading-tight max-w-[240px] mb-6">
                  {card.title}
                </h3>

                <p className="text-stone-500 line-clamp-3 mb-8 max-w-sm">
                  {card.desc}
                </p>

                <Button variant="outline" className="rounded-full border-stone-200 hover:bg-stone-900 hover:text-white transition-all">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                {/* Visual Image */}
                <div className="absolute -bottom-10 -right-10 w-[60%] h-[55%] transition-transform duration-1000 group-hover:scale-110 pointer-events-none">
                  <img src={card.img} alt={card.title} className="w-full h-full object-contain object-bottom-right" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
