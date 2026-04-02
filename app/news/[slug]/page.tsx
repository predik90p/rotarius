"use client"

import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
import { Heart, MessageCircle, User, Calendar, Share2, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NewsDetailPage({ params }: { params: { slug: string } }) {
  // Use slug to find news or mock data
  const post = {
    title: "Latest Updates in Global Agriculture",
    date: "AUGUST 18, 2025",
    author: "Michelle Larson",
    comments: 2,
    likes: 11,
    tag: "Harvest",
    heroImg: "/products/Kazhan-AGRO-30-agricultural-drone.jpg",
    content: `
      Soil is the foundation of every farm. It's not just dirt — it's a living system that supports crops, stores water, and provides essential nutrients to plants. For farmers, taking care of the soil isn't just good practice — it's the key to long-term success and sustainability. Healthy soil leads to stronger plants, higher yields, and better resistance to drought, pests, and diseases. When soil is in poor condition, even the best seeds and fertilizers may not produce the desired results.
      
      We have dedicated years of research at Rotarius to understand how autonomous drone technology can assist in soil management. By using multispectral imaging, we can identify nutrient deficiencies and moisture levels with sub-inch precision. This allows farmers to apply exactly what is needed, reducing waste and protecting the environment from runoff.
      
      The future of agriculture lies in the integration of ground-level wisdom and aerial intelligence. As we continue to develop our Kazhan and AGRO platforms, our goal remains clear: to ensure food security for a growing global population while preserving the natural resources that make farming possible.
    `
  }

  return (
    <main className="min-h-screen bg-white font-sans">
      <Header />
      
      {/* Article Hero */}
      <section className="relative h-[70vh] lg:h-[80vh] flex items-end overflow-hidden pt-32">
        <div className="absolute inset-x-0 top-0 bottom-0 z-0">
          <img src={post.heroImg} alt={post.title} className="w-full h-full object-cover scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 pb-20 w-full text-white">
          <span className="inline-block px-4 py-2 bg-[#fdf2b1] text-stone-900 text-xs font-bold uppercase tracking-widest rounded-xl mb-8">
            {post.tag}
          </span>
          <h1 className="text-5xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-10 max-w-5xl">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-8 lg:gap-12 text-sm font-bold uppercase tracking-[0.1em] text-white/70">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              BY {post.author}
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              {post.comments} COMMENTS
            </div>
            <div className="flex items-center gap-2 text-white">
              <Heart className="w-4 h-4 fill-white" />
              {post.likes} LIKES
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
           <div className="prose prose-xl prose-stone max-w-none">
              <p className="text-2xl lg:text-3xl font-medium leading-relaxed text-stone-800 first-letter:text-7xl first-letter:font-black first-letter:text-stone-400 first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] mb-12">
                 {post.content.trim().split('\n')[0]}
              </p>
              
              <div className="grid grid-cols-2 gap-8 my-16">
                 <div className="rounded-[40px] overflow-hidden">
                    <img src="/sunflower_seeds_card_1775131327383.png" alt="Detail 1" className="w-full h-full object-cover" />
                 </div>
                 <div className="rounded-[40px] overflow-hidden relative">
                    <img src="/agricultural_field_sunset_background_1775123075962.png" alt="Detail 2" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-stone-900/10" />
                 </div>
              </div>

              {post.content.trim().split('\n').slice(1).map((para, i) => (
                <p key={i} className="text-xl text-stone-600 leading-relaxed mb-8">
                  {para}
                </p>
              ))}
           </div>
           
           <div className="mt-20 pt-12 border-t border-stone-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                 <span className="text-sm font-bold uppercase tracking-widest text-stone-400">Share:</span>
                 <div className="flex gap-2">
                    {[Share2, Instagram, MessageCircle].map((Icon, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-50 cursor-pointer transition-colors">
                        <Icon className="w-4 h-4 text-stone-600" />
                      </div>
                    ))}
                 </div>
              </div>
              <Button variant="ghost" className="text-stone-400 font-bold uppercase tracking-widest hover:text-stone-900">
                Next Article →
              </Button>
           </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
