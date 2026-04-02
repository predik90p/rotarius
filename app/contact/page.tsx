import { Metadata } from "next"
import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
import { Mail, Phone, MapPin, Clock, Building, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contact Us | AeroDefense Switzerland",
  description: "Get in touch with AeroDefense Switzerland for inquiries about our unmanned aerial systems and defense solutions.",
}

const offices = [
  {
    name: "Headquarters",
    location: "Zurich, Switzerland",
    address: "Industriestrasse 15, 8005 Zurich",
    phone: "+41 44 123 45 67",
    email: "info@aerodefense.ch",
  },
  {
    name: "R&D Center",
    location: "Lausanne, Switzerland",
    address: "Route de la Corniche 8, 1066 Epalinges",
    phone: "+41 21 987 65 43",
    email: "research@aerodefense.ch",
  },
]

export default function ContactPage() {
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
                Contact Us
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
              Get in Touch
            </h1>
            <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
              Our team is ready to discuss your unmanned aerial system requirements. 
              All inquiries are handled with strict confidentiality.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                    Organization *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Technical Support</option>
                    <option value="media">Media Inquiry</option>
                    <option value="careers">Career Opportunities</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Please describe your inquiry..."
                  />
                </div>
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="mt-1 w-4 h-4 rounded border-border text-accent focus:ring-accent"
                  />
                  <label htmlFor="consent" className="text-sm text-muted-foreground">
                    I consent to the processing of my personal data in accordance with the 
                    AeroDefense Privacy Policy. *
                  </label>
                </div>
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Submit Inquiry
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <div className="p-6 bg-primary text-primary-foreground rounded-2xl mb-8">
                <Shield className="w-8 h-8 mb-4" />
                <h3 className="text-lg font-semibold">Confidential Inquiries</h3>
                <p className="mt-2 text-sm text-primary-foreground/80">
                  For classified or sensitive inquiries, please contact us directly 
                  via secure channels. Response within 24 business hours guaranteed.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+41 44 123 45 00 (Secure Line)</span>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-6">Our Offices</h3>
              <div className="space-y-6">
                {offices.map((office) => (
                  <div key={office.name} className="p-6 bg-card rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-4">
                      <Building className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-semibold text-foreground">{office.name}</div>
                        <div className="text-sm text-muted-foreground">{office.location}</div>
                      </div>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="w-4 h-4 flex-shrink-0" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Phone className="w-4 h-4 flex-shrink-0" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Mail className="w-4 h-4 flex-shrink-0" />
                        <span>{office.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-secondary rounded-xl">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-accent" />
                  <span className="font-semibold text-foreground">Business Hours</span>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Monday - Friday: 08:00 - 18:00 CET</p>
                  <p>Saturday - Sunday: Closed</p>
                  <p className="pt-2 text-foreground">24/7 Support for active contract holders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-12 h-12 text-primary/40 mx-auto mb-4" />
          <p className="text-muted-foreground">Interactive map would be displayed here</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
