import { Metadata } from "next"
import { Header } from "@/components/corporate/header"
import { Footer } from "@/components/corporate/footer"
import { Mail, Phone, MapPin, Clock, Building } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Contact Us | Rotarius",
  description: "Get in touch with Rotarius for inquiries about our unmanned aerial systems and solutions.",
}

const offices = [
  {
    name: "Headquarters",
    location: "Zurich, Switzerland",
    address: "Industriestrasse 15, 8005 Zurich",
    phone: "+41 44 123 45 67",
    email: "info@rotarius.com",
  },
  {
    name: "R&D Center",
    location: "Lausanne, Switzerland",
    address: "Route de la Corniche 8, 1066 Epalinges",
    phone: "+41 21 987 65 43",
    email: "research@rotarius.com",
  },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#fcfcf9]">
      <Header />

      {/* Title */}
      <section className="pt-32 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[1.1]">
            Contact
          </h1>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 border-t border-stone-200/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-stone-900 mb-8">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-stone-500 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-stone-500 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-500 mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-stone-500 mb-2">
                    Organization *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-stone-500 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent"
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
                  <label htmlFor="message" className="block text-sm font-medium text-stone-500 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-white text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-900 focus:border-transparent resize-none"
                    placeholder="Please describe your inquiry..."
                  />
                </div>
                <Button type="submit" size="lg" className="bg-stone-900 hover:bg-stone-800 text-white rounded-xl px-8 py-6 font-bold transition-all hover:scale-105 active:scale-95">
                  Submit Inquiry
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:pl-8">
              <h3 className="text-xl font-bold text-stone-900 mb-6">Our Offices</h3>
              <div className="space-y-6">
                {offices.map((office) => (
                  <div key={office.name} className="p-6 bg-white rounded-3xl border border-stone-100">
                    <div className="flex items-center gap-3 mb-4">
                      <Building className="w-5 h-5 text-stone-400" />
                      <div>
                        <div className="font-bold text-stone-900">{office.name}</div>
                        <div className="text-sm text-stone-500">{office.location}</div>
                      </div>
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3 text-stone-500">
                        <MapPin className="w-4 h-4 flex-shrink-0 text-stone-400" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center gap-3 text-stone-500">
                        <Phone className="w-4 h-4 flex-shrink-0 text-stone-400" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 text-stone-500">
                        <Mail className="w-4 h-4 flex-shrink-0 text-stone-400" />
                        <span>{office.email}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-white rounded-3xl border border-stone-100">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-stone-400" />
                  <span className="font-bold text-stone-900">Business Hours</span>
                </div>
                <div className="text-sm text-stone-500 space-y-1">
                  <p>Monday - Friday: 08:00 - 18:00 CET</p>
                  <p>Saturday - Sunday: Closed</p>
                  <p className="pt-2 text-stone-900 font-medium">24/7 Support for active contract holders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
