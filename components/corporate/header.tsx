"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import { Search, ShoppingBasket, ChevronDown, Menu, X, MapPin, Mail, Phone, Instagram, Twitter, Facebook, Linkedin, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Home", href: "/", active: true },
  { name: "Products", href: "#", hasMega: true },
  { name: "Solutions", href: "#", hasMega: true },
  { name: "History", href: "/history" },
  { name: "Contact", href: "#", hasMega: true },
]

const PRODUCTS_DATA = [
  { name: "Kazhan E620", tag: "Strike UAS", img: "/products/Kazhan-E620-Strike-UAS.jpg", slug: "kazhan-e620" },
  { name: "AGRO 30", tag: "Agriculture", img: "/products/Kazhan-AGRO-30-agricultural-drone.jpg", slug: "agro-30" },
  { name: "Shmavik", tag: "ISR Scout", img: "/products/SHMAVIK-quadcopter-scout-drone.webp", slug: "shmavik" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMega, setActiveMega] = useState<string | null>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = useCallback((name: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
      hoverTimeoutRef.current = null
    }
    setActiveMega(name)
  }, [])

  const handleMouseLeave = useCallback(() => {
    hoverTimeoutRef.current = setTimeout(() => {
      setActiveMega(null)
    }, 300)
  }, [])

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
        <nav className="w-full max-w-7xl h-20 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-between px-6 lg:px-8 shadow-2xl relative">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative w-48 lg:w-56 h-12 flex items-center justify-start">
              <img src="/logo1f.png" alt="Rotarius Branding" className="w-full h-full object-contain object-left" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 h-full">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="h-full flex items-center"
                onMouseEnter={() => item.hasMega && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium transition-all rounded-full ${
                    item.active || activeMega === item.name
                    ? "bg-white/15 text-white" 
                    : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.name}
                  {item.hasMega && (
                    <ChevronDown className={`w-3.5 h-3.5 opacity-50 transition-transform duration-300 ${activeMega === item.name ? "rotate-180 opacity-100" : ""}`} />
                  )}
                </Link>

                {/* Mega Menu Overlay */}
                {activeMega === item.name && (
                  <div 
                    className="absolute top-[calc(100%+10px)] left-0 right-0 bg-[#f8f7f2] rounded-3xl shadow-2xl p-8 lg:p-12 animate-in fade-in slide-in-from-top-4 duration-300 border border-stone-200"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.name === "Products" && (
                      <div className="grid grid-cols-12 gap-8 text-black">
                        {/* Categories List */}
                        <div className="col-span-3 border-r border-stone-200 pr-8">
                          <h4 className="text-xl font-bold mb-6">Categories</h4>
                          <ul className="space-y-4 text-stone-500 font-medium">
                            <li className="hover:text-stone-900 cursor-pointer transition-colors">Military UAS</li>
                            <li className="hover:text-stone-900 cursor-pointer transition-colors">Agriculture</li>
                            <li className="hover:text-stone-900 cursor-pointer transition-colors">Firefighting</li>
                            <li className="hover:text-stone-900 cursor-pointer transition-colors">ISR & Reconnaissance</li>
                            <li className="hover:text-stone-900 cursor-pointer transition-colors">Transport</li>
                            <li className="hover:text-stone-900 cursor-pointer transition-colors">Components</li>
                          </ul>
                          <Link
                            href="/products"
                            className="mt-8 inline-flex items-center gap-2 px-5 py-3 bg-stone-900 text-white text-sm font-semibold rounded-xl hover:bg-stone-800 transition-colors"
                          >
                            View All Products
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                        {/* Featured Items Grid */}
                        <div className="col-span-9 grid grid-cols-3 gap-6">
                          {PRODUCTS_DATA.map((p) => (
                            <Link key={p.slug} href={`/products/${p.slug}`} className="group/item">
                              <div className="aspect-[4/5] bg-stone-50 rounded-3xl overflow-hidden mb-4 p-4 flex items-center justify-center">
                                <img src={p.img} alt={p.name} className="w-full h-full object-contain group-hover/item:scale-110 transition-transform duration-500" />
                              </div>
                              <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">{p.tag}</span>
                              <h5 className="font-bold text-lg mb-1">{p.name}</h5>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.name === "Contact" && (
                      <div className="grid grid-cols-12 gap-12 text-black">
                        {/* Contact Details */}
                        <div className="col-span-3">
                          <h4 className="text-2xl font-bold mb-8">Contacts</h4>
                          <div className="space-y-8">
                            <div>
                                <p className="text-stone-400 font-bold text-xs uppercase tracking-widest mb-2">We are Here:</p>
                                <p className="font-medium">27 Division St, New York,<br/>NY 10002, USA</p>
                            </div>
                            <div>
                                <p className="text-stone-400 font-bold text-xs uppercase tracking-widest mb-2">Send Mail:</p>
                                <p className="font-medium">hello@rotarius.com</p>
                            </div>
                            <div>
                                <p className="text-stone-400 font-bold text-xs uppercase tracking-widest mb-2">Call Us:</p>
                                <p className="font-medium text-xl">+1 800 432 45 34</p>
                            </div>
                            <div className="flex gap-2">
                                {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
                                    <div key={i} className="w-10 h-10 rounded-xl border border-stone-200 flex items-center justify-center hover:bg-stone-50 transition-colors">
                                        <Icon className="w-4 h-4 text-stone-400" />
                                    </div>
                                ))}
                            </div>
                          </div>
                        </div>
                        {/* Mock Form */}
                        <div className="col-span-5 px-8 border-x border-stone-100">
                           <h4 className="text-2xl font-bold mb-8">Get in Touch</h4>
                           <p className="text-stone-400 mb-8 text-sm">Your email address will not be published. Required fields are marked *</p>
                           <div className="space-y-6">
                             <div className="border-b border-stone-200 pb-2">
                               <input type="text" placeholder="Your Email" className="w-full bg-transparent outline-none py-2" />
                             </div>
                             <div className="border-b border-stone-200 pb-2">
                               <textarea placeholder="Your Comment" className="w-full bg-transparent outline-none py-2 h-24 resize-none" />
                             </div>
                             <Button className="bg-[#94a3b8] hover:bg-stone-500 text-white rounded-2xl px-10 py-7 font-bold">Get in Touch</Button>
                           </div>
                        </div>
                        {/* Mock Map */}
                        <div className="col-span-4 h-full min-h-[400px] bg-stone-100 rounded-[32px] overflow-hidden grayscale">
                           <div className="w-full h-full flex items-center justify-center text-stone-400 flex-col gap-2">
                             <MapPin className="w-12 h-12" />
                             <span className="font-bold">Interactive Map Component</span>
                           </div>
                        </div>
                      </div>
                    )}
                    
                    {item.name === "Solutions" && (
                       <div className="grid grid-cols-3 gap-12 text-black">
                         {/* Card 01 - Agro */}
                         <Link href="/solutions/agro" className="group/agro relative h-[450px] bg-white/70 rounded-[40px] overflow-hidden p-10 flex flex-col items-start border border-stone-200 hover:bg-[#fdf2b1]/60 hover:border-yellow-200/50 hover:-translate-y-4 transition-all duration-700">
                           <span className="text-stone-400 font-bold mb-6 tracking-widest leading-none">01</span>
                           <h4 className="text-3xl font-black leading-[1.1] mb-6">Smart & <br/>Sustainable <br/>Agriculture</h4>
                           <ArrowRight className="w-6 h-6 transition-transform group-hover/agro:translate-x-2" />
                           <div className="absolute -bottom-10 -right-10 w-[120%] h-[60%]">
                             <img src="/corn_seeds.png" alt="Agro" className="w-full h-full object-contain" />
                           </div>
                         </Link>

                         {/* Card 02 - Military */}
                          <Link href="/solutions/military" className="group/mil relative h-[450px] bg-white/70 rounded-[40px] overflow-hidden p-10 flex flex-col items-start border border-stone-200 hover:bg-blue-50 hover:border-blue-200 hover:-translate-y-4 transition-all duration-700 hover:shadow-2xl">
                           <span className="text-stone-400 font-bold mb-6 tracking-widest leading-none">02</span>
                           <h4 className="text-3xl font-black leading-[1.1] mb-6">Tactical <br/>Defense & <br/>Surveillance</h4>
                           <ArrowRight className="w-6 h-6 transition-transform group-hover/mil:translate-x-2" />
                           <div className="absolute -bottom-10 -right-10 w-[120%] h-[60%] opacity-80">
                             <img src="/tactical_military_drone_background_1775123500635.png" alt="Military" className="w-full h-full object-contain" />
                           </div>
                         </Link>

                         {/* Card 03 - Emergency */}
                          <Link href="/solutions/firefighting" className="group/fire relative h-[450px] bg-white/70 rounded-[40px] overflow-hidden p-10 flex flex-col items-start border border-stone-200 hover:bg-orange-50 hover:border-orange-200 hover:-translate-y-4 transition-all duration-700 hover:shadow-2xl">
                           <span className="text-stone-400 font-bold mb-6 tracking-widest leading-none">03</span>
                           <h4 className="text-3xl font-black leading-[1.1] mb-6">Emergency <br/>Rescue & <br/>Support</h4>
                           <ArrowRight className="w-6 h-6 transition-transform group-hover/fire:translate-x-2" />
                           <div className="absolute -bottom-10 -right-10 w-[110%] h-[60%] opacity-80">
                             <img src="/firefighting_drone_background_1775123539157.png" alt="Fire" className="w-full h-full object-contain" />
                           </div>
                         </Link>
                       </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <button className="text-white/70 hover:text-white transition-colors">
              <ShoppingBasket className="w-5 h-5" />
            </button>
            <button className="text-white/70 hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <Button className="hidden sm:flex bg-[#fdf2b1] hover:bg-[#f6e58d] text-black border-none px-6 py-5 rounded-xl font-semibold transition-all">
              Get in Touch
            </Button>
            <button className="lg:hidden p-2 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
    </header>
  )
}
