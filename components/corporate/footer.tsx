"use client"

import Link from "next/link"
import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react"
import { useLocale } from "@/components/locale-provider"

export function Footer() {
  const { dict } = useLocale()

  const navigation = {
    products: [
      { name: "Kazhan E620", href: "/products/kazhan-e620" },
      { name: "Kazhan E630", href: "/products/kazhan-e630" },
      { name: "AGRO 30", href: "/products/agro-30" },
      { name: "Shmavik", href: "/products/shmavik" },
      { name: "Pop-Fly", href: "/products/pop-fly" },
    ],
    company: [
      { name: dict.footer.aboutUs, href: "/history" },
      { name: dict.footer.historyVision, href: "/history" },
      { name: dict.footer.news, href: "/news" },
      { name: dict.footer.contact, href: "/contact" },
    ],
    solutions: [
      { name: "Commercial Division", href: "/solutions/commercial" },
      { name: "Defense Division", href: "/solutions/defense" },
      { name: "Emergency Division", href: "/solutions/emergency" },
      { name: "Consulting Center", href: "/consulting" },
      { name: dict.footer.allProducts, href: "/products" },
    ],
  }

  return (
    <footer className="bg-[#010C0C] text-background">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <img src="/logo1f.png" alt="Rotarius" className="h-10 w-auto" />
            </Link>
            <p className="mt-6 text-sm opacity-50 leading-relaxed max-w-sm">
              {dict.footer.description}
            </p>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm opacity-50">
                <MapPin className="h-4 w-4 flex-shrink-0 opacity-60" />
                <span>Zurich, Switzerland</span>
              </div>
              <div className="flex items-center gap-3 text-sm opacity-50">
                <Phone className="h-4 w-4 flex-shrink-0 opacity-60" />
                <span>+41 44 123 45 67</span>
              </div>
              <div className="flex items-center gap-3 text-sm opacity-50">
                <Mail className="h-4 w-4 flex-shrink-0 opacity-60" />
                <span>info@rotarius.com</span>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8 flex gap-3">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl border border-background/10 flex items-center justify-center hover:bg-background/10 hover:border-background/20 transition-all font-sans"
                >
                  <Icon className="w-4 h-4 opacity-50" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-sm font-bold opacity-100 uppercase tracking-wider">{dict.footer.solutions}</h3>
              <ul className="mt-6 space-y-3">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm opacity-50 hover:opacity-100 transition-opacity">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold opacity-100 uppercase tracking-wider">{dict.footer.company}</h3>
              <ul className="mt-6 space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm opacity-50 hover:opacity-100 transition-opacity">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Column */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold opacity-100 uppercase tracking-wider">
              {dict.footer.readyToDiscuss}
            </h3>
            <p className="mt-4 text-sm opacity-50 leading-relaxed">
              {dict.footer.readyText}
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-xl px-6 py-3 text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-xl">
                {dict.footer.scheduleConsultation}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="/solutions" className="inline-flex items-center justify-center gap-2 border border-background/20 opacity-80 rounded-xl px-6 py-3 text-sm font-bold transition-all hover:bg-background/10 hover:scale-105 active:scale-95">
                {dict.footer.viewSolutions}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs opacity-40">
              &copy; {new Date().getFullYear()} Rotarius. {dict.footer.allRightsReserved}
            </p>
            <div className="flex items-center gap-6 text-xs opacity-40">
              <Link href="#" className="hover:opacity-60 transition-opacity">{dict.footer.privacyPolicy}</Link>
              <Link href="#" className="hover:opacity-60 transition-opacity">{dict.footer.termsOfService}</Link>
              <Link href="#" className="hover:opacity-60 transition-opacity">{dict.footer.exportCompliance}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
