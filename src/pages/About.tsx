import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/data";
import FormPopup from "@/components/FormPopup";

export default function About() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <FormPopup open={popupOpen} onOpenChange={setPopupOpen} />

      <section className="section-padding bg-background">
        <div className="container-narrow max-w-3xl">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">About Us</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Our Story
          </h1>
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Black Diamond Cleaning Solutions was founded with a simple mission: to provide the kind of cleaning service that we always wished existed as homeowners and property managers ourselves.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              After years of dealing with no-shows, inconsistent results, and poor communication from other cleaning companies, our founder decided to build something better. Black Diamond was born from that frustration — and our commitment to reliability, quality, and transparency is baked into everything we do.
            </p>
            <p className="text-muted-foreground mb-10 leading-relaxed">
              Today we serve 500+ homeowners, property managers, and businesses across Pennsylvania and New York. Every member of our team is background-checked, trained, and held to the highest standards.
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-8 mb-10">
            <h2 className="font-heading text-xl font-bold text-foreground mb-6">Our Values</h2>
            <div className="flex flex-col gap-4">
              {[
                "Reliability — we show up on time, every time",
                "Quality — we don't cut corners, period",
                "Transparency — clear pricing, no surprises",
                "Respect — we treat your home like our own",
                "Accountability — if something isn't right, we make it right",
              ].map((value) => (
                <div key={value} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{value}</span>
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
