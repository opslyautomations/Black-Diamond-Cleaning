import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, SERVICES } from "@/lib/data";
import FormPopup from "@/components/FormPopup";

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const [popupOpen, setPopupOpen] = useState(false);
  const service = SERVICES.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="section-padding container-narrow text-center">
        <h1 className="font-heading text-2xl font-bold mb-4">Service Not Found</h1>
        <Link to="/" className="text-primary hover:underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <>
      <FormPopup open={popupOpen} onOpenChange={setPopupOpen} />

      {/* Breadcrumb */}
      <div className="border-b border-border bg-card">
        <div className="container-narrow py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{service.name}</span>
        </div>
      </div>

      <section className="section-padding bg-background">
        <div className="container-narrow max-w-3xl">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Our Services</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            {service.name}
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {service.shortDesc}
          </p>

          <div className="bg-card border border-border rounded-xl p-8 mb-8">
            <h2 className="font-heading text-xl font-bold text-foreground mb-4">What's Included</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "All rooms vacuumed and mopped",
                "Kitchen surfaces wiped and sanitized",
                "Bathroom scrubbed and disinfected",
                "Dusting of all accessible surfaces",
                "Trash emptied and bags replaced",
                "Baseboards and light fixtures cleaned",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" onClick={() => setPopupOpen(true)}>
              Get a Free Estimate
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={BUSINESS.phoneHref}>Call {BUSINESS.phone}</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
