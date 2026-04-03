import Link from "next/link"
import { Button } from "@/components/ui/button"

const NEWS_DATA = [
  {
    id: 1,
    category: "Harvest",
    title: "Latest Updates in Global Agriculture",
    date: "AUGUST 18, 2025",
    img: "/products/Kazhan-AGRO-30-agricultural-drone.jpg",
    slug: "latest-updates-global-agriculture",
    color: '#6b9e5a',
  },
  {
    id: 2,
    category: "Agriculture",
    title: "How Technology Is Changing Agriculture",
    date: "AUGUST 18, 2025",
    img: "/agricultural_field_sunset_background_1775123075962.png",
    slug: "technology-changing-agriculture",
    color: '#5a8ab5',
  },
  {
    id: 3,
    category: "Agri-Tech",
    title: "Organic vs. Conventional Farming",
    date: "AUGUST 18, 2025",
    img: "/sunflower_seeds_card_1775131327383.png",
    slug: "organic-vs-conventional-farming",
    color: '#c47a5a',
  }
]

export function NewsSection() {
  return (
    <section className="py-24 lg:py-32 bg-[#f8f7f2] font-sans">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16 lg:mb-24">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-stone-300">
              <span className="text-[10px] font-bold tracking-[0.2em] text-stone-500 uppercase">LATEST NEWS</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[1.1]">
              Explore Our Latest <br /> News & Tips
            </h2>
          </div>
          <Button asChild className="bg-stone-900 hover:bg-stone-800 text-white rounded-3xl px-10 py-8 font-bold flex items-center gap-3 transition-all hover:scale-105 shadow-xl active:scale-95">
            <Link href="/news">
              <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
              Read More
            </Link>
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {NEWS_DATA.map((item) => (
            <div key={item.id} className="group">
              {/* Image Container */}
              <Link href={`/news/${item.slug}`} className="block relative aspect-[4/3] rounded-[40px] overflow-hidden mb-8">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6">
                  <span className="inline-block px-4 py-2 text-white text-[11px] font-bold uppercase tracking-wider rounded-xl shadow-lg" style={{ backgroundColor: item.color }}>
                    {item.category}
                  </span>
                </div>
              </Link>

              {/* Content */}
              <p className="text-[11px] font-bold text-stone-400 uppercase tracking-[0.1em] mb-4">
                {item.date}
              </p>
              <h3 className="text-2xl lg:text-3xl font-bold text-stone-900 mb-6 leading-[1.2] group-hover:text-[#8a9a7a] transition-colors">
                <Link href={`/news/${item.slug}`}>
                  {item.title}
                </Link>
              </h3>
              <Link
                href={`/news/${item.slug}`}
                className="inline-flex items-center gap-2 text-stone-500 font-bold text-sm tracking-wide group/link hover:text-stone-900 transition-all"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-stone-300 group-hover/link:bg-[#8a9a7a] transition-colors" />
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
