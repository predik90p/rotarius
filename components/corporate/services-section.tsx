import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const STATIC_SERVICES = [
  { 
    id: "01",
    tag: "FARM SOLUTIONS",
    title: "Industrial Agriculture", 
    desc: "Autonomous drone fleets for targeted, eco-friendly application of crop protection agents and seeds.",
    img: "/products/Kazhan-AGRO-30-agricultural-drone.jpg",
    link: "/solutions/agro",
    typeColor: '#22c55e',
  },
  { 
    id: "02",
    tag: "TACTICAL DEFENSE",
    title: "Defense Intelligence", 
    desc: "Military-grade UAV systems designed for high-stakes reconnaissance and strategic superiority.",
    img: "/products/Kazhan-E620-Strike-UAS.jpg",
    link: "/solutions/military",
    typeColor: '#3b82f6',
  },
  { 
    id: "03",
    tag: "EMERGENCY OPS",
    title: "Emergency Systems", 
    desc: "Next-generation firefighting drones with advanced thermal optics and suppressant delivery.",
    img: "/products/Kazhan-E630-Firefighter-Drone-1.webp",
    link: "/solutions/firefighting",
    typeColor: '#f97316',
  }
]

export function ServicesSection() {
  return (
    <section className="pt-10 pb-24 lg:pb-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Compact Heading */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-stone-900 leading-tight">
            Our Core <span className="text-stone-400">Industry</span> Pillars
          </h2>
          <p className="mt-4 text-stone-500 text-lg">
            Rotarius provides specialized solutions across the most demanding environmental and tactical sectors.
          </p>
        </div>

        {/* Static Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {STATIC_SERVICES.map((card) => (
            <Link
              key={card.id}
              href={card.link}
              className="group relative h-[500px] bg-white rounded-[48px] border border-stone-100 overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:shadow-2xl"
            >
              <div className="p-10 h-full flex flex-col items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-stone-200 bg-white">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: card.typeColor }} />
                  <span className="text-[10px] font-bold text-stone-500 uppercase tracking-wider">{card.tag}</span>
                </div>
                
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
                <div className="absolute -bottom-10 -right-10 w-[110%] h-[55%] transition-transform duration-1000 group-hover:scale-110 pointer-events-none">
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
