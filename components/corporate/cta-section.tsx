import Link from "next/link"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-primary">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-primary-foreground">
              Ready to Discuss Your Requirements?
            </h2>
            <p className="mt-6 text-lg text-primary-foreground/80 leading-relaxed">
              Our team of defense specialists is ready to help you find the right
              unmanned aerial solution for your mission. Contact us for a confidential
              consultation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link href="/contact">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
                <Link href="/solutions">View Solutions</Link>
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-12">
            <div className="bg-primary-foreground/10 backdrop-blur rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-primary-foreground mb-6">
                Direct Contact
              </h3>
              <div className="space-y-4">
                <a
                  href="tel:+41441234567"
                  className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-primary-foreground/60">Phone</div>
                    <div className="font-medium">+41 44 123 45 67</div>
                  </div>
                </a>
                <a
                  href="mailto:defense@aerodefense.ch"
                  className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-primary-foreground/60">Email</div>
                    <div className="font-medium">defense@aerodefense.ch</div>
                  </div>
                </a>
              </div>
              <div className="mt-8 pt-6 border-t border-primary-foreground/10">
                <p className="text-sm text-primary-foreground/60">
                  All inquiries are handled with strict confidentiality.
                  Response within 24 business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
