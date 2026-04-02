import Link from "next/link"
import { ArrowRight, Factory, Microscope, Shield, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const capabilities = [
  {
    icon: Factory,
    title: "Advanced Manufacturing",
    description: "State-of-the-art production facilities with precision CNC machining and composite fabrication.",
  },
  {
    icon: Microscope,
    title: "Quality Assurance",
    description: "Rigorous testing protocols and quality control at every stage of production.",
  },
  {
    icon: Shield,
    title: "Secure Facilities",
    description: "NATO-compliant security measures protecting sensitive technologies and data.",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    description: "In-house 3D printing and rapid iteration capabilities for fast development cycles.",
  },
]

export function ManufacturingSection() {
  return (
    <section className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-secondary to-muted overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4 p-8 w-full h-full">
                  {[...Array(9)].map((_, i) => (
                    <div
                      key={i}
                      className="rounded-lg bg-card/50 backdrop-blur border border-border/50 flex items-center justify-center"
                    >
                      <div className={`w-8 h-8 rounded-full ${
                        i === 4 ? "bg-accent" : "bg-primary/20"
                      }`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl shadow-xl border border-border p-6 max-w-[240px]">
              <div className="text-3xl font-semibold text-foreground">12,000m²</div>
              <div className="mt-1 text-sm text-muted-foreground">Production Facility</div>
              <div className="mt-4 pt-4 border-t border-border">
                <div className="text-sm text-muted-foreground">Located in</div>
                <div className="text-foreground font-medium">Zurich, Switzerland</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-12 bg-accent" />
              <span className="text-sm font-medium text-accent tracking-wider uppercase">
                Manufacturing
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground">
              Built with Swiss Precision
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Our manufacturing facility combines traditional Swiss craftsmanship 
              with cutting-edge technology to produce unmanned systems of 
              unparalleled quality.
            </p>

            {/* Capabilities */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {capabilities.map((cap) => (
                <div key={cap.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                    <cap.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">{cap.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{cap.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button asChild variant="outline" className="group">
                <Link href="/manufacturing">
                  Explore Our Facilities
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
