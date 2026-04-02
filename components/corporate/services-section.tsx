import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const STATIC_SERVICES = [
  { 
    id: "01",
    tag: "FARM SOLUTIONS",
    title: "Industrial Agriculture", 
    desc: "Autonomous drone fleets for targeted, eco-friendly application of crop protection agents and seeds.",
    img: "/corn_seeds.png",
    accent: "text-amber-600",
    bg: "bg-amber-50"
  },
  { 
    id: "02",
    tag: "TACTICAL DEFENSE",
    title: "Defense Intelligence", 
    desc: "Military-grade UAV systems designed for high-stakes reconnaissance and strategic superiority.",
    img: "/tactical_military_drone_background_1775123500635.png",
    accent: "text-blue-600",
    bg: "bg-blue-50"
  },
  { 
    id: "03",
    tag: "EMERGENCY OPS",
    title: "Emergency Systems", 
    desc: "Next-generation firefighting drones with advanced thermal optics and suppressant delivery.",
    img: "/firefighting_drone_background_1775123539157.png",
    accent: "text-orange-600",
    bg: "bg-orange-50"
  }
]

export function ServicesSection() {
  return (
    <section className="pt-10 pb-24 lg:pb-32 bg-[#f8f7f2]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Compact Heading */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-stone-900 leading-tight">
            Our Core <span className="text-stone-400">Industry</span> Pillars
          </h2>
          <p className="mt-4 text-stone-500 text-lg">
            Rotarius provides specialized solutions across the most demanding environmental and tactical sectors.
          </p>
        </div>

        {/* Static Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STATIC_SERVICES.map((card, idx) => (
            <div
              key={card.id}
              className="group relative h-[500px] bg-white rounded-[48px] border border-stone-200 overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl hover:shadow-stone-900/10"
            >
              <div className="p-10 h-full flex flex-col items-start bg-gradient-to-br from-transparent to-stone-50/50">
                <div className={`px-3 py-1 mb-6 rounded-lg text-[10px] font-bold ${card.bg} ${card.accent} border border-current opacity-70`}>
                  {card.tag}
                </div>
                
                <span className="text-base font-bold text-stone-300 mb-2 tracking-widest">{card.id}</span>
                <h3 className="text-3xl font-bold text-stone-900 leading-tight max-w-[180px] mb-6">
                  {card.title}
                </h3>
                
                <p className="text-stone-500 line-clamp-3 mb-8">
                  {card.desc}
                </p>

                <Button variant="outline" className="rounded-full border-stone-200 hover:bg-stone-900 hover:text-white transition-all">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                
                {/* Visual Image */}
                <div className="absolute -bottom-10 -right-10 w-[110%] h-[55%] transition-transform duration-1000 group-hover:scale-110 pointer-events-none opacity-80">
                  <img src={card.img} alt={card.title} className="w-full h-full object-contain object-bottom-right" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
