import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, LOCATIONS, SERVICES } from "@/lib/data";
import FormPopup from "@/components/FormPopup";

export default function ServiceArea() {
  const { slug } = useParams<{ slug: string }>();
  const [popupOpen, setPopupOpen] = useState(false);
  const location = LOCATIONS.find((l) => l.slug === slug);

  if (!location) {
    return (
      <div className="section-padding container-narrow text-center">
        <h1 className="font-heading text-2xl font-bold mb-4">Location Not Found</h1>
        <Link to="/" className="text-primary hover:underline">Back to Home</Link>
      </div>
    );
  }

  return (
    <>
      <FormPopup open={popupOpen} onOpenChange={setPopupOpen} />

      <div className="border-b border-border bg-card">
        <div className="container-narrow py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground font-medium">{location.city}, {location.stateAbbr}</span>
        </div>
      </div>

      <section className="section-padding bg-background">
        <div className="container-narrow max-w-3xl">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Service Area</p>
          <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Cleaning Services in {location.city}, {location.stateAbbr}
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Black Diamond Cleaning Solutions proudly serves {location.city} and the surrounding {location.stateAbbr} area. Our trusted team delivers consistent, professional cleaning you can rely on — from weekly maintenance to deep cleans and move-out services.
          </p>

          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
            Services Available in {location.city}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="bg-card border border-border rounded-lg p-4 hover:border-primary/30 transition-colors"
              >
                <p className="font-heading font-semibold text-foreground text-sm mb-1">{service.name}</p>
                <p className="text-xs text-muted-foreground line-clamp-2">{service.shortDesc}</p>
              </Link>
            ))}
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
