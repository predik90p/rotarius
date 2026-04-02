import { Metadata } from "next"
import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
import { CTASection } from "@/components/corporate/cta-section"
import { Factory, Microscope, Shield, Zap, CheckCircle2, Award, Cog, Cpu } from "lucide-react"

export const metadata: Metadata = {
  title: "Manufacturing | AeroDefense Switzerland",
  description: "Swiss precision manufacturing facilities producing military-grade unmanned aerial systems with uncompromising quality standards.",
}

const facilities = [
  {
    title: "Main Production Hall",
    area: "8,000 m²",
    description: "Primary assembly and integration facility with climate-controlled clean rooms",
  },
  {
    title: "Composite Workshop",
    area: "2,000 m²",
    description: "Advanced carbon fiber and composite material fabrication center",
  },
  {
    title: "Electronics Lab",
    area: "1,500 m²",
    description: "PCB assembly and avionics integration with ESD protection",
  },
  {
    title: "Test Center",
    area: "500 m²",
    description: "Environmental testing chambers and ground test facilities",
  },
]

const capabilities = [
  {
    icon: Factory,
    title: "Precision CNC Machining",
    description: "5-axis CNC centers for complex metal components with tolerances to ±0.01mm",
  },
  {
    icon: Cpu,
    title: "Electronics Manufacturing",
    description: "In-house PCB assembly, wire harness production, and avionics integration",
  },
  {
    icon: Cog,
    title: "Composite Fabrication",
    description: "Autoclave curing, carbon fiber layup, and advanced composite structures",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "SLA, SLS, and FDM 3D printing for fast iteration and development",
  },
]

const qualityProcess = [
  { step: "1", title: "Incoming Inspection", desc: "100% inspection of all incoming materials and components" },
  { step: "2", title: "In-Process Quality", desc: "Real-time monitoring at critical manufacturing stages" },
  { step: "3", title: "Assembly Verification", desc: "Detailed checklists and documentation at each assembly step" },
  { step: "4", title: "Functional Testing", desc: "Comprehensive system testing before delivery" },
  { step: "5", title: "Flight Acceptance", desc: "Pre-delivery flight testing and certification" },
]

const certifications = [
  { name: "ISO 9001:2015", desc: "Quality Management System" },
  { name: "AS9100D", desc: "Aerospace Quality Standard" },
  { name: "ISO 14001:2015", desc: "Environmental Management" },
  { name: "NADCAP", desc: "Special Processes Certification" },
]

export default function ManufacturingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary via-background to-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="text-sm font-medium text-accent tracking-wider uppercase">
                Manufacturing
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
              Built with Swiss Precision
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Our state-of-the-art manufacturing facility in Zurich combines traditional 
              Swiss craftsmanship with advanced technology to produce unmanned systems 
              of unparalleled quality.
            </p>
          </div>
        </div>
      </section>

      {/* Facility Overview */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-foreground">Our Facility</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Located in the heart of Zurich&apos;s industrial district, our 12,000 m² 
                production facility houses the complete manufacturing chain from raw 
                materials to flight-ready systems.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {facilities.map((facility) => (
                  <div key={facility.title} className="p-4 bg-secondary rounded-lg">
                    <div className="text-2xl font-bold text-accent">{facility.area}</div>
                    <div className="font-medium text-foreground mt-1">{facility.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{facility.description}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
              <Factory className="w-24 h-24 text-primary/30" />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-foreground">Manufacturing Capabilities</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Vertically integrated production ensures quality control and enables 
              rapid iteration throughout the development process.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap) => (
              <div key={cap.title} className="p-6 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <cap.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">{cap.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section id="quality" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Microscope className="w-12 h-12 text-accent mb-6" />
              <h2 className="text-3xl font-semibold text-foreground">Quality Assurance</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our quality management system ensures every component meets the 
                highest standards through a rigorous multi-stage verification process.
              </p>
              <div className="mt-8 space-y-4">
                {qualityProcess.map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 bg-primary rounded-2xl text-primary-foreground">
              <Shield className="w-10 h-10 mb-6" />
              <h3 className="text-xl font-semibold">Security Protocols</h3>
              <p className="mt-4 text-primary-foreground/80 leading-relaxed">
                Our facility maintains NATO-compliant security measures including 
                restricted access zones, personnel vetting, and secure storage 
                for classified components.
              </p>
              <ul className="mt-6 space-y-3">
                {["24/7 Security monitoring", "Biometric access control", "CCTV surveillance", "Secure document handling"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-20 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <Award className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-3xl font-semibold text-foreground">Certifications</h2>
            <p className="mt-4 text-muted-foreground">
              Our manufacturing processes meet international aerospace and defense standards
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="p-6 bg-card rounded-xl border border-border text-center">
                <div className="w-16 h-16 mx-auto rounded-full bg-secondary flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">{cert.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
