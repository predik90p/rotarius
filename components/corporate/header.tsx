"use client"

import { useState, useRef, useCallback } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X, MapPin, Mail, Phone, Instagram, Twitter, Facebook, Linkedin, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/corporate/language-switcher"
import { useLocale } from "@/components/locale-provider"


export function Header() {
  const { dict } = useLocale()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeMega, setActiveMega] = useState<string | null>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const navItems = [
    { key: "home" as const, href: "/", hasMega: false },
    { key: "news" as const, href: "/news", hasMega: false },
    { key: "solutions" as const, href: "#", hasMega: true },
    { key: "history" as const, href: "/history", hasMega: false },
    { key: "contact" as const, href: "#", hasMega: true },
  ]

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
          {navItems.map((item) => (
            <div
              key={item.key}
              className="h-full flex items-center"
              onMouseEnter={() => item.hasMega && handleMouseEnter(item.key)}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                href={item.hasMega ? "#" : item.href}
                className={`flex items-center gap-1.5 px-5 py-2.5 text-sm font-medium transition-all rounded-full ${
                  activeMega === item.key
                    ? "bg-primary text-primary-foreground"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {dict.nav[item.key]}
                {item.hasMega && (
                  <ChevronDown className={`w-3.5 h-3.5 opacity-50 transition-transform duration-300 ${activeMega === item.key ? "rotate-180 opacity-100" : ""}`} />
                )}
              </Link>

              {/* Mega Menu Overlay */}
              {activeMega === item.key && (
                <div
                  className="absolute top-[calc(100%+10px)] left-0 right-0 bg-background text-foreground rounded-3xl shadow-2xl p-8 lg:p-12 animate-in fade-in slide-in-from-top-4 duration-300 border border-border"
                  onMouseEnter={() => handleMouseEnter(item.key)}
                  onMouseLeave={handleMouseLeave}
                >

                  {item.key === "contact" && (
                    <div className="grid grid-cols-12 gap-12 text-black">
                      <div className="col-span-3">
                        <h4 className="text-2xl font-bold mb-8">{dict.footer.contact}</h4>
                        <div className="space-y-8">
                          <div>
                            <p className="text-stone-400 font-bold text-xs uppercase tracking-widest mb-2">We are Here:</p>
                            <p className="font-medium">27 Division St, New York,<br />NY 10002, USA</p>
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
                      <div className="col-span-5 px-8 border-x border-stone-100">
                        <h4 className="text-2xl font-bold mb-8">{dict.nav.getInTouch}</h4>
                        <p className="text-stone-400 mb-8 text-sm">Your email address will not be published. Required fields are marked *</p>
                        <div className="space-y-6">
                          <div className="border-b border-stone-200 pb-2">
                            <input type="text" placeholder="Your Email" className="w-full bg-transparent outline-none py-2" />
                          </div>
                          <div className="border-b border-stone-200 pb-2">
                            <textarea placeholder="Your Comment" className="w-full bg-transparent outline-none py-2 h-24 resize-none" />
                          </div>
                          <Button className="bg-primary hover:opacity-90 text-primary-foreground rounded-2xl px-10 py-7 font-bold">{dict.nav.getInTouch}</Button>
                        </div>
                      </div>
                      <div className="col-span-4 h-full min-h-[400px] bg-stone-100 rounded-[32px] overflow-hidden grayscale">
                        <div className="w-full h-full flex items-center justify-center text-stone-400 flex-col gap-2">
                          <MapPin className="w-12 h-12" />
                          <span className="font-bold">Interactive Map Component</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {item.key === "solutions" && (
                    <div>
                      <div className="grid grid-cols-3 gap-12 text-black">
                        <Link href="/solutions/agro" className="group/agro relative h-[450px] bg-white/70 rounded-[40px] overflow-hidden p-10 flex flex-col items-start border border-stone-200 hover:bg-[#71A58D]/10 hover:border-[#71A58D]/30 hover:-translate-y-4 transition-all duration-700">
                          <h4 className="text-3xl font-black leading-[1.1] mb-6">{dict.solutions?.megaMenu?.agroTitle?.split(' & ').map((part, i, arr) => <span key={i}>{part}{i < arr.length - 1 ? <br /> : null}</span>)}</h4>
                          <ArrowRight className="w-6 h-6 transition-transform group-hover/agro:translate-x-2" />
                          <div className="absolute -bottom-10 -right-10 w-[120%] h-[60%]">
                            <img src="/products/agro-drone-transparent.png" alt="Agro" className="w-full h-full object-contain" />
                          </div>
                        </Link>

                        <Link href="/solutions/military" className="group/mil relative h-[450px] bg-white/70 rounded-[40px] overflow-hidden p-10 flex flex-col items-start border border-stone-200 hover:bg-[#1C5B68]/10 hover:border-[#1C5B68]/30 hover:-translate-y-4 transition-all duration-700 hover:shadow-2xl">
                          <h4 className="text-3xl font-black leading-[1.1] mb-6">{dict.solutions?.megaMenu?.militaryTitle?.split(' & ').map((part, i, arr) => <span key={i}>{part}{i < arr.length - 1 ? <br /> : null}</span>)}</h4>
                          <ArrowRight className="w-6 h-6 transition-transform group-hover/mil:translate-x-2" />
                          <div className="absolute -bottom-10 -right-10 w-[120%] h-[60%] opacity-80">
                            <img src="/products/e620-transparent.png" alt="Military" className="w-full h-full object-contain" />
                          </div>
                        </Link>

                        <Link href="/solutions/firefighting" className="group/fire relative h-[450px] bg-white/70 rounded-[40px] overflow-hidden p-10 flex flex-col items-start border border-stone-200 hover:bg-[#F47A60]/10 hover:border-[#F47A60]/30 hover:-translate-y-4 transition-all duration-700 hover:shadow-2xl">
                          <h4 className="text-3xl font-black leading-[1.1] mb-6">{dict.solutions?.megaMenu?.fireTitle?.split(' & ').map((part, i, arr) => <span key={i}>{part}{i < arr.length - 1 ? <br /> : null}</span>)}</h4>
                          <ArrowRight className="w-6 h-6 transition-transform group-hover/fire:translate-x-2" />
                          <div className="absolute -bottom-10 -right-10 w-[110%] h-[60%] opacity-80">
                            <img src="/products/e630-transparent.png" alt="Fire" className="w-full h-full object-contain" />
                          </div>
                        </Link>
                      </div>
                      <div className="flex justify-center mt-12">
                        <Link
                          href="/solutions"
                          className="inline-flex items-center gap-2 px-6 py-4 bg-primary text-primary-foreground text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity"
                        >
                          {dict.solutions.viewAll}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <LanguageSwitcher />
          <Link href="/contact" className="hidden sm:inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white border border-white/20 px-6 py-2.5 rounded-xl font-semibold transition-all">
            {dict.nav.getInTouch}
          </Link>
          <button className="lg:hidden p-2 text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
    </header>
  )
}
