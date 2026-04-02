import { Metadata } from "next"
import Link from "next/link"
import { HoldingHeader } from "@/components/holding/header"
import { HoldingFooter } from "@/components/holding/footer"
import { ArrowRight, Building2, Users, Globe2, TrendingUp, Shield, Cpu, Plane, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "AEROX Holding Group | Defense & Aerospace Technology",
  description: "AEROX Holding Group - A diversified holding company specializing in unmanned systems, defense technology, and aerospace innovation.",
}

const companies = [
  {
    name: "AeroDefense Switzerland",
    description: "Military-grade unmanned aerial systems and defense solutions",
    icon: Shield,
    href: "/",
  },
  {
    name: "AEROX Aerospace",
    description: "Commercial drone platforms and aviation technology",
    icon: Plane,
    href: "#",
  },
  {
    name: "AEROX Systems",
    description: "Integrated control systems and software solutions",
    icon: Cpu,
    href: "#",
  },
]

const stats = [
  { value: "CHF 850M", label: "Annual Revenue" },
  { value: "1,200+", label: "Employees" },
  { value: "25+", label: "Countries" },
  { value: "3", label: "Subsidiaries" },
]

const leadership = [
  { name: "Dr. Friedrich Weber", role: "Chairman of the Board", description: "35+ years in aerospace industry" },
  { name: "Thomas Schneider", role: "Chief Executive Officer", description: "Former defense ministry advisor" },
  { name: "Dr. Maria Hofmann", role: "Chief Financial Officer", description: "Ex-UBS executive director" },
]

export default function HoldingPage() {
  return (
    <main className="min-h-screen bg-white">
      <HoldingHeader />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100" />
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%23000000' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full mb-8">
              <span className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span className="text-sm text-slate-600">Swiss Excellence Since 2005</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.05]">
              Engineering
              <br />
              <span className="text-slate-400">Tomorrow&apos;s</span>
              <br />
              Defense
            </h1>
            
            <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-xl">
              AEROX Holding Group brings together world-class companies in unmanned 
              systems, defense technology, and aerospace innovation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-slate-900 hover:bg-slate-800">
                <Link href="#companies">
                  Our Companies
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-slate-400 uppercase tracking-widest">Explore</span>
          <div className="w-px h-16 bg-gradient-to-b from-slate-300 to-transparent" />
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                About Us
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                Building the Future of Defense Technology
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                Founded in 2005, AEROX Holding Group has grown to become one of 
                Europe&apos;s leading defense technology conglomerates. Our portfolio 
                companies specialize in unmanned aerial systems, integrated defense 
                solutions, and cutting-edge aerospace technology.
              </p>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Headquartered in Zurich, Switzerland, we operate across 25 countries 
                with a workforce of over 1,200 professionals. Our commitment to 
                innovation, quality, and ethical business practices has made us a 
                trusted partner for governments and defense organizations worldwide.
              </p>
              
              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <Globe2 className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Global Reach</div>
                    <div className="text-sm text-slate-500">Operations in 25+ countries</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Steady Growth</div>
                    <div className="text-sm text-slate-500">20% YoY revenue growth</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                <Building2 className="w-32 h-32 text-slate-300" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 max-w-[260px]">
                <div className="text-3xl font-semibold text-slate-900">20+</div>
                <div className="text-slate-600">Years of Excellence</div>
                <div className="mt-3 pt-3 border-t border-slate-100 text-sm text-slate-500">
                  Swiss heritage, global ambition
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section id="companies" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Our Companies
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Three specialized subsidiaries united by a common mission: 
              advancing defense and aerospace technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {companies.map((company) => (
              <Link
                key={company.name}
                href={company.href}
                className="group p-8 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-100 group-hover:bg-slate-900 transition-colors flex items-center justify-center mb-6">
                  <company.icon className="w-7 h-7 text-slate-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 group-hover:text-slate-700">
                  {company.name}
                </h3>
                <p className="mt-3 text-slate-600">
                  {company.description}
                </p>
                <div className="mt-6 flex items-center text-sm font-medium text-slate-400 group-hover:text-slate-900 transition-colors">
                  Visit Website
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">
              Leadership
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Executive Team
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Experienced leaders driving innovation and growth across our portfolio.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto rounded-full bg-slate-100 flex items-center justify-center mb-6">
                  <Users className="w-12 h-12 text-slate-400" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{person.name}</h3>
                <p className="mt-1 text-slate-600">{person.role}</p>
                <p className="mt-2 text-sm text-slate-400">{person.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">
                Contact
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                Get in Touch
              </h2>
              <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                For investor relations, media inquiries, or general information 
                about AEROX Holding Group, please contact our headquarters.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Address</div>
                    <div className="text-slate-600">Bahnhofstrasse 42, 8001 Zurich, Switzerland</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Phone</div>
                    <div className="text-slate-600">+41 44 000 00 00</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Email</div>
                    <div className="text-slate-600">info@aerox-holding.ch</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-6">Send a Message</h3>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
                  >
                    <option>Investor Relations</option>
                    <option>Media Inquiry</option>
                    <option>Partnership</option>
                    <option>General Information</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 resize-none"
                  />
                </div>
                <Button type="submit" className="w-full bg-slate-900 hover:bg-slate-800">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <HoldingFooter />
    </main>
  )
}
