import Link from "next/link"
import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin, ArrowRight } from "lucide-react"

const navigation = {
  products: [
    { name: "Kazhan E620", href: "/products/kazhan-e620" },
    { name: "Kazhan E630", href: "/products/kazhan-e630" },
    { name: "AGRO 30", href: "/products/agro-30" },
    { name: "Shmavik", href: "/products/shmavik" },
    { name: "Pop-Fly", href: "/products/pop-fly" },
  ],
  company: [
    { name: "About Us", href: "/history" },
    { name: "History & Vision", href: "/history" },
    { name: "News", href: "/news" },
    { name: "Contact", href: "/contact" },
  ],
  solutions: [
    { name: "Agriculture", href: "/solutions/agro" },
    { name: "Defense", href: "/solutions/military" },
    { name: "Emergency", href: "/solutions/firefighting" },
    { name: "All Products", href: "/products" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block">
              <img src="/logo1f.png" alt="Rotarius" className="h-10 w-auto" />
            </Link>
            <p className="mt-6 text-sm text-white/50 leading-relaxed max-w-sm">
              Swiss precision built on years of UAV expertise. Full-cycle drone manufacturing for agriculture, defense, and emergency response.
            </p>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/50">
                <MapPin className="h-4 w-4 flex-shrink-0 text-white/30" />
                <span>Zurich, Switzerland</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Phone className="h-4 w-4 flex-shrink-0 text-white/30" />
                <span>+41 44 123 45 67</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Mail className="h-4 w-4 flex-shrink-0 text-white/30" />
                <span>info@rotarius.com</span>
              </div>
            </div>

            {/* Social */}
            <div className="mt-8 flex gap-3">
              {[Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  <Icon className="w-4 h-4 text-white/50" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Products</h3>
              <ul className="mt-6 space-y-3">
                {navigation.products.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-white/50 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Solutions</h3>
              <ul className="mt-6 space-y-3">
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-white/50 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">Company</h3>
              <ul className="mt-6 space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-sm text-white/50 hover:text-white transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Column */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Ready to Discuss?
            </h3>
            <p className="mt-4 text-sm text-white/50 leading-relaxed">
              Our team is ready to help you find the right solution.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 rounded-xl px-6 py-3 text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-xl">
                Schedule Consultation
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="/solutions" className="inline-flex items-center justify-center gap-2 border border-white/20 text-white rounded-xl px-6 py-3 text-sm font-bold transition-all hover:bg-white/10 hover:scale-105 active:scale-95">
                View Solutions
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-white/40">
              &copy; {new Date().getFullYear()} Rotarius. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-white/40">
              <Link href="#" className="hover:text-white/60 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-white/60 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-white/60 transition-colors">Export Compliance</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
