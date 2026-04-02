import { Metadata } from "next"
import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
import { CTASection } from "@/components/corporate/cta-section"
import { CheckCircle2, Award, Users, Globe, Target } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | AeroDefense Switzerland",
  description: "Learn about AeroDefense Switzerland - Swiss precision engineering for advanced unmanned aerial systems since 2009.",
}

const timeline = [
  { year: "2009", title: "Foundation", description: "AeroDefense Switzerland established in Zurich with a focus on UAV research." },
  { year: "2012", title: "First Contract", description: "Secured first major defense contract with Swiss Armed Forces." },
  { year: "2015", title: "NATO Certification", description: "Achieved NATO codified supplier status for defense equipment." },
  { year: "2018", title: "Global Expansion", description: "Opened service centers in 15 countries across Europe and Asia." },
  { year: "2022", title: "Innovation Hub", description: "Launched advanced R&D facility for autonomous systems." },
  { year: "2024", title: "Industry Leader", description: "Recognized as top European UAV manufacturer by Defense Weekly." },
]

const team = [
  { name: "Dr. Hans Müller", role: "Chief Executive Officer", description: "25+ years in aerospace defense" },
  { name: "Dr. Elena Richter", role: "Chief Technology Officer", description: "Former ETHZ robotics researcher" },
  { name: "Marc Dubois", role: "Chief Operations Officer", description: "Ex-Swiss Air Force colonel" },
  { name: "Dr. Sarah Chen", role: "Head of R&D", description: "Pioneer in autonomous navigation" },
]

const certifications = [
  "ISO 9001:2015 Quality Management",
  "ISO 14001:2015 Environmental Management",
  "NATO AQAP 2110 Certification",
  "ITAR Registered Manufacturer",
  "Swiss SECO Export License",
  "AS9100D Aerospace Standard",
]

export default function AboutPage() {
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
                About Us
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
              Swiss Excellence in Aerospace Defense
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Since 2009, AeroDefense Switzerland has been at the forefront of unmanned 
              aerial system innovation, combining Swiss precision engineering with 
              cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <Target className="w-10 h-10 text-accent mb-6" />
              <h2 className="text-2xl font-semibold text-foreground">Our Mission</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To deliver superior unmanned aerial solutions that enhance security, 
                save lives, and push the boundaries of what&apos;s possible in aerospace 
                technology - all while maintaining the highest standards of Swiss quality 
                and ethical responsibility.
              </p>
            </div>
            <div className="p-8 rounded-2xl bg-primary text-primary-foreground">
              <Globe className="w-10 h-10 mb-6" />
              <h2 className="text-2xl font-semibold">Our Vision</h2>
              <p className="mt-4 text-primary-foreground/80 leading-relaxed">
                To be the global leader in defense UAV systems, recognized for 
                innovation, reliability, and our commitment to making the world 
                safer through advanced aerial technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-foreground">Our Journey</h2>
            <p className="mt-4 text-muted-foreground">Key milestones in our history</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.year} className={`relative flex items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-card p-6 rounded-xl border border-border inline-block max-w-md">
                      <span className="text-sm font-medium text-accent">{item.year}</span>
                      <h3 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex w-4 h-4 rounded-full bg-accent border-4 border-background absolute left-1/2 -translate-x-1/2" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-foreground">Leadership Team</h2>
            <p className="mt-4 text-muted-foreground">Experts driving innovation in aerospace defense</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="p-6 rounded-2xl bg-card border border-border text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-secondary flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-accent mt-1">{member.role}</p>
                <p className="text-sm text-muted-foreground mt-2">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Award className="w-12 h-12 text-accent mb-6" />
              <h2 className="text-3xl font-semibold text-foreground">Certifications & Standards</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Our commitment to quality is demonstrated through rigorous international 
                certifications and adherence to the highest industry standards.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  )
}
