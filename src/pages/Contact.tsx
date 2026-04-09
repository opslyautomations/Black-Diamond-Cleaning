import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { BUSINESS } from "@/lib/data";
import EmbeddedForm from "@/components/EmbeddedForm";

export default function Contact() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-14">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Contact</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Get In Touch
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Ready for a cleaner home or business? Reach out and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div>
            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">Phone</p>
                  <a href={BUSINESS.phoneHref} className="text-muted-foreground hover:text-primary transition-colors">
                    {BUSINESS.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">Email</p>
                  <a href={`mailto:${BUSINESS.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {BUSINESS.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">Service Area</p>
                  <p className="text-muted-foreground">{BUSINESS.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm mb-1">Response Time</p>
                  <p className="text-muted-foreground">We respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-card border border-border rounded-lg shadow-card overflow-hidden">
            <EmbeddedForm height={520} />
          </div>
        </div>
      </div>
    </section>
  );
}
