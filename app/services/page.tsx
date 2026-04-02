import { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
import { CTASection } from "@/components/corporate/cta-section"
import { Shield, Eye, Radio, Wrench, GraduationCap, Cog, ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Services | AeroDefense Switzerland",
  description: "Comprehensive UAV solutions including defense systems, surveillance, custom engineering, and training programs.",
}

const services = [
  {
    id: "defense",
    icon: Shield,
    title: "Defense Systems",
    subtitle: "Military-Grade UAV Platforms",
    description: "Our defense systems are designed for the most demanding operational environments, providing tactical superiority through advanced unmanned capabilities.",
    features: [
      "Combat-proven airframes with modular payload systems",
      "Autonomous mission planning and execution",
      "Anti-jamming communication systems",
      "Stealth configurations available",
      "Extended range variants up to 500km",
    ],
    image: true,
  },
  {
    id: "surveillance",
    icon: Eye,
    title: "Surveillance Solutions",
    subtitle: "Advanced Monitoring Systems",
    description: "State-of-the-art surveillance drones equipped with multi-spectral sensors for comprehensive situational awareness in any environment.",
    features: [
      "4K daylight and thermal imaging",
      "Real-time video downlink with encryption",
      "Automated target tracking and recognition",
      "48+ hour continuous operation capability",
      "All-weather operational certification",
    ],
    image: true,
  },
  {
    id: "communication",
    icon: Radio,
    title: "Communication Systems",
    subtitle: "Secure Data Networks",
    description: "Encrypted, redundant communication platforms ensuring reliable connectivity between UAVs, ground stations, and command centers.",
    features: [
      "MIL-STD-1553 compliant interfaces",
      "256-bit AES encryption standard",
      "Mesh networking capabilities",
      "Satellite communication integration",
      "Frequency hopping anti-jamming",
    ],
    image: true,
  },
  {
    id: "custom",
    icon: Wrench,
    title: "Custom Engineering",
    subtitle: "Tailored Solutions",
    description: "From concept to deployment, our engineering team works with you to develop bespoke UAV solutions that meet your specific requirements.",
    features: [
      "Requirements analysis and feasibility studies",
      "Prototype development and testing",
      "Payload integration services",
      "Airframe modifications",
      "Software customization",
    ],
    image: true,
  },
  {
    id: "training",
    icon: GraduationCap,
    title: "Training Programs",
    subtitle: "Operator Certification",
    description: "Comprehensive training programs designed to ensure your team can operate our systems safely and effectively in any scenario.",
    features: [
      "Basic and advanced pilot certification",
      "Mission planning and execution training",
      "Maintenance technician courses",
      "Simulator-based practice sessions",
      "Recurrent training programs",
    ],
    image: true,
  },
  {
    id: "support",
    icon: Cog,
    title: "Maintenance & Support",
    subtitle: "24/7 Global Support",
    description: "Round-the-clock technical support and maintenance services to ensure maximum operational readiness of your UAV fleet.",
    features: [
      "24/7 technical hotline",
      "On-site maintenance teams available",
      "Scheduled maintenance programs",
      "Spare parts inventory management",
      "Software updates and upgrades",
    ],
    image: true,
  },
]

export default function ServicesPage() {
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
                Our Services
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
              Comprehensive UAV Solutions
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              From defense systems to training programs, we provide end-to-end 
              unmanned aerial solutions tailored to your operational requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-accent uppercase tracking-wider">
                    {service.subtitle}
                  </span>
                </div>
                <h2 className="text-3xl font-semibold text-foreground">{service.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild className="group">
                    <Link href="/contact">
                      Request Information
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Visual */}
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-12 h-12 text-primary/40" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-foreground">Our Process</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              From initial consultation to deployment and ongoing support, we guide 
              you through every step of implementing your UAV solution.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your requirements and objectives" },
              { step: "02", title: "Design", desc: "Custom solution architecture and planning" },
              { step: "03", title: "Delivery", desc: "Manufacturing, testing, and deployment" },
              { step: "04", title: "Support", desc: "Training, maintenance, and ongoing assistance" },
            ].map((item) => (
              <div key={item.step} className="relative p-6 bg-card rounded-xl border border-border">
                <span className="text-4xl font-bold text-accent/20">{item.step}</span>
                <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
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
