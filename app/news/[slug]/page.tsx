import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
import { ArrowLeft, Calendar } from "lucide-react"
import { getPayloadClient } from "@/lib/payload"
import { richTextToHTML } from "@/lib/rich-text"

const fallbackNews = [
  {
    slug: "latest-updates-global-agriculture",
    category: "Harvest",
    title: "Latest Updates in Global Agriculture",
    date: "AUGUST 18, 2025",
    img: "/products/Kazhan-AGRO-30-agricultural-drone.jpg",
    color: '#6b9e5a',
    content: `The global agriculture sector is experiencing unprecedented transformation as new technologies and sustainable practices reshape how we grow, harvest, and distribute food. From precision farming techniques that optimize resource usage to AI-driven crop monitoring systems, the agricultural landscape is evolving at an unprecedented pace.\n\nKey developments include the widespread adoption of drone technology for crop surveillance, automated irrigation systems that reduce water consumption by up to 40%, and the integration of satellite imagery with ground-level sensors to create comprehensive farm management platforms.\n\nThese innovations are not only improving yields but also reducing environmental impact, making agriculture more sustainable for future generations.`,
  },
  {
    slug: "technology-changing-agriculture",
    category: "Agriculture",
    title: "How Technology Is Changing Agriculture",
    date: "AUGUST 18, 2025",
    img: "/agricultural_field_sunset_background_1775123075962.png",
    color: '#5a8ab5',
    content: `Technology is revolutionizing every aspect of agriculture, from seed selection to harvest. Smart farming solutions are enabling farmers to make data-driven decisions that improve productivity while reducing costs and environmental impact.\n\nThe integration of IoT sensors, machine learning algorithms, and autonomous machinery is creating a new paradigm in agricultural management. Farmers can now monitor soil conditions in real-time, predict weather patterns with greater accuracy, and automate routine tasks that previously required significant manual labor.\n\nThis technological revolution is particularly impactful in developing regions, where mobile-based agricultural platforms are providing smallholder farmers with access to market information, weather forecasts, and expert advice.`,
  },
  {
    slug: "organic-vs-conventional-farming",
    category: "Agri-Tech",
    title: "Organic vs. Conventional Farming",
    date: "AUGUST 18, 2025",
    img: "/sunflower_seeds_card_1775131327383.png",
    color: '#c47a5a',
    content: `The debate between organic and conventional farming continues to evolve as new research emerges about the environmental and economic impacts of each approach. Recent studies show that both methods have distinct advantages depending on the context and goals of the farming operation.\n\nOrganic farming methods have shown significant improvements in soil health and biodiversity, while conventional farming continues to lead in terms of yield per acre. However, the gap is narrowing as organic techniques become more sophisticated and conventional farming adopts more sustainable practices.\n\nThe future likely lies in integrated approaches that combine the best elements of both methods, leveraging technology to maximize sustainability without compromising productivity.`,
  },
  {
    slug: "ad-7x-launch",
    category: "Product Launch",
    title: "Introducing the AD-7X Long-Range Surveillance Platform",
    date: "March 15, 2026",
    img: "/products/Kazhan-AGRO-30-agricultural-drone.jpg",
    color: '#3b82f6',
    content: `Rotarius is proud to announce the launch of the AD-7X, our most advanced long-range surveillance platform to date. This cutting-edge system offers unprecedented 48-hour flight endurance with advanced sensor integration capabilities.\n\nThe AD-7X represents a significant leap forward in autonomous surveillance technology, featuring AI-powered threat detection, real-time data processing, and seamless integration with existing command and control systems.\n\nDesigned for extended missions in challenging environments, the AD-7X sets a new standard for reliability and performance in the defense and security sector.`,
  },
  {
    slug: "edc-partnership",
    category: "Partnership",
    title: "Strategic Alliance with European Defense Consortium",
    date: "March 8, 2026",
    img: "/products/Kazhan-E630-Firefighter-Drone-1.webp",
    color: '#22c55e',
    content: `Rotarius has entered into a strategic alliance with leading European defense contractors to develop next-generation autonomous systems. This partnership brings together industry expertise and innovative technology to address the evolving security challenges of the 21st century.\n\nThe collaboration will focus on developing advanced autonomous platforms that can operate in complex, contested environments while maintaining the highest standards of safety and reliability.\n\nThis alliance strengthens Rotarius's position as a key player in the European defense technology ecosystem and opens new opportunities for joint research and development initiatives.`,
  },
  {
    slug: "nato-certification",
    category: "Certification",
    title: "NATO STANAG 4671 Certification Achieved",
    date: "February 28, 2026",
    img: "/e630hd.png",
    color: '#f97316',
    content: `Rotarius has successfully achieved NATO STANAG 4671 certification for our UAV systems, meeting the highest NATO airworthiness standards for unmanned aircraft. This certification validates our commitment to quality, safety, and interoperability with allied forces.\n\nThe STANAG 4671 standard ensures that our systems can operate safely in shared airspace alongside manned aircraft, a critical requirement for modern military operations.\n\nThis achievement opens new markets and opportunities for our defense partners across NATO member nations.`,
  },
  {
    slug: "swiss-contract",
    category: "Contract Award",
    title: "Swiss Armed Forces Contract Extension",
    date: "February 15, 2026",
    img: "/products/Kazhan-AGRO-30-agricultural-drone.jpg",
    color: '#3b82f6',
    content: `Rotarius has secured a multi-year contract extension with the Swiss Armed Forces to provide surveillance systems and support services through 2030. This extension reflects the trust and confidence our partners place in our technology and service capabilities.\n\nThe contract includes delivery of next-generation surveillance platforms, comprehensive training programs, and dedicated maintenance support to ensure optimal system performance throughout the operational lifecycle.\n\nThis long-term partnership demonstrates Rotarius's commitment to supporting Switzerland's defense and security objectives.`,
  },
  {
    slug: "ai-navigation",
    category: "Innovation",
    title: "AI-Powered Autonomous Navigation System Unveiled",
    date: "January 30, 2026",
    img: "/products/Kazhan-E630-Firefighter-Drone-1.webp",
    color: '#22c55e',
    content: `Rotarius has unveiled its revolutionary AI-powered autonomous navigation system that enables fully autonomous mission execution even in GPS-denied environments. This breakthrough technology represents a significant advancement in unmanned systems capabilities.\n\nThe system uses a combination of computer vision, inertial navigation, and machine learning algorithms to navigate complex terrain without relying on satellite positioning. This capability is particularly valuable in contested environments where GPS signals may be jammed or spoofed.\n\nOur AI navigation system has been successfully tested in various challenging scenarios, demonstrating reliable performance and mission completion rates.`,
  },
  {
    slug: "singapore-expansion",
    category: "Expansion",
    title: "New Asia-Pacific Service Center Opens in Singapore",
    date: "January 20, 2026",
    img: "/e630hd.png",
    color: '#f97316',
    content: `Rotarius has opened a new Asia-Pacific service center in Singapore, bringing full maintenance and support capabilities to Southeast Asian defense partners. This strategic expansion strengthens our global presence and enables faster response times for regional customers.\n\nThe Singapore facility includes state-of-the-art maintenance workshops, training classrooms, and demonstration areas where customers can experience our latest technologies firsthand.\n\nThis expansion is part of our broader strategy to establish regional hubs that provide comprehensive support to customers across key markets.`,
  },
  {
    slug: "defense-award",
    category: "Recognition",
    title: "European Defense Innovation Award 2025",
    date: "December 10, 2025",
    img: "/products/Kazhan-AGRO-30-agricultural-drone.jpg",
    color: '#3b82f6',
    content: `Rotarius has been honored with the European Defense Innovation Award 2025 for breakthrough developments in autonomous swarm coordination technology. This recognition highlights our commitment to pushing the boundaries of what's possible in unmanned systems.\n\nOur swarm coordination technology enables multiple autonomous platforms to work together seamlessly, sharing information and coordinating actions to achieve complex mission objectives.\n\nThis award underscores Rotarius's position as a leader in defense innovation and validates our investment in research and development.`,
  },
  {
    slug: "sustainability",
    category: "Sustainability",
    title: "Carbon-Neutral Manufacturing Initiative Launched",
    date: "December 1, 2025",
    img: "/products/Kazhan-E630-Firefighter-Drone-1.webp",
    color: '#22c55e',
    content: `Rotarius has launched an ambitious carbon-neutral manufacturing initiative with the goal of achieving carbon-neutral production by 2028. This commitment reflects our understanding that environmental responsibility is integral to long-term business success.\n\nThe initiative includes transitioning to renewable energy sources across all manufacturing facilities, implementing circular economy principles in our supply chain, and developing more sustainable production processes.\n\nWe believe that sustainable manufacturing is not just an environmental imperative but also a competitive advantage that will drive innovation and efficiency.`,
  },
]

export async function generateStaticParams() {
  return fallbackNews.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let article = fallbackNews.find((n) => n.slug === slug)

  if (!article) {
    try {
      const payload = await getPayloadClient()
      const result = await payload.find({
        collection: 'news',
        where: { slug: { equals: slug } },
      })
      if (result.docs[0]) {
        article = {
          slug: result.docs[0].slug,
          category: result.docs[0].category || 'News',
          title: result.docs[0].title || '',
          date: result.docs[0].date || '',
          img: result.docs[0].featuredImage?.url || '/products/Kazhan-AGRO-30-agricultural-drone.jpg',
          color: '#1C5B68',
          content: '',
        } as any
      }
    } catch {
      // fallback
    }
  }

  return {
    title: article ? `${article.title} | Rotarius News` : "News Article | Rotarius",
    description: typeof article?.content === 'string' ? article.content.substring(0, 160) : '',
  }
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  let article = fallbackNews.find((n) => n.slug === slug)
  let contentHtml = ''

  if (!article) {
    try {
      const payload = await getPayloadClient()
      const result = await payload.find({
        collection: 'news',
        where: { slug: { equals: slug } },
      })

      if (result.docs[0]) {
        const doc = result.docs[0] as any
        article = {
          slug: doc.slug,
          category: doc.category || 'News',
          title: doc.title || '',
          date: doc.date
            ? new Date(doc.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
            : '',
          img: doc.featuredImage?.url || '/products/Kazhan-AGRO-30-agricultural-drone.jpg',
          color: '#1C5B68',
          content: '',
        } as any
        contentHtml = await richTextToHTML(doc.content)
      }
    } catch {
      // fallback
    }
  }

  if (!article) {
    notFound()
  }

  const displayContent = contentHtml || (typeof article.content === 'string'
    ? article.content.split('\n\n').map((p: string) => `<p class="text-stone-600 leading-relaxed mb-6 text-lg">${p}</p>`).join('')
    : '')

  return (
    <main className="min-h-screen bg-[#fcfcf9]">
      <Header />
      <article className="pt-32 pb-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors mb-12 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to News
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full text-[11px] font-bold uppercase tracking-wider" style={{ backgroundColor: article.color + '15', color: article.color }}>
            {article.category}
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-stone-900 leading-[1.1] mb-8">
            {article.title}
          </h1>

          <div className="flex items-center gap-2 text-stone-400 mb-12">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{article.date}</span>
          </div>

          <div className="rounded-[40px] overflow-hidden mb-16">
            <img
              src={article.img}
              alt={article.title}
              className="w-full aspect-[16/9] object-cover"
            />
          </div>

          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: displayContent }}
          />
        </div>
      </article>
      <Footer />
    </main>
  )
}
