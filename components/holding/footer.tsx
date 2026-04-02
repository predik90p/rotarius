import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function HoldingFooter() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/holding" className="flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 bg-white rounded-xl">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-slate-900"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold text-white tracking-tight">
                  AEROX
                </span>
                <span className="text-[10px] text-slate-400 tracking-[0.2em] uppercase">
                  Holding Group
                </span>
              </div>
            </Link>
            <p className="mt-6 text-slate-400 leading-relaxed max-w-md">
              A diversified holding company specializing in unmanned systems, 
              defense technology, and aerospace innovation. Headquartered in 
              Switzerland with operations across Europe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", href: "/holding#about" },
                { name: "Our Companies", href: "/holding#companies" },
                { name: "Leadership", href: "/holding#leadership" },
                { name: "Investor Relations", href: "/holding#investors" },
                { name: "Careers", href: "/holding#careers" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Bahnhofstrasse 42, 8001 Zurich, Switzerland</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+41 44 000 00 00</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@aerox-holding.ch</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs text-slate-500">
              &copy; {new Date().getFullYear()} AEROX Holding AG. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-xs text-slate-500 hover:text-slate-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-300">
                Terms
              </Link>
              <Link href="/imprint" className="text-xs text-slate-500 hover:text-slate-300">
                Imprint
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
