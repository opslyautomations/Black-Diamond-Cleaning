import { useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, REVIEWS } from "@/lib/data";
import FormPopup from "@/components/FormPopup";

export default function Reviews() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <FormPopup open={popupOpen} onOpenChange={setPopupOpen} />

      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Customer Reviews</p>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-4">
              What Our Customers Say
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Don't take our word for it — here's what real customers across Pennsylvania and New York have to say about Black Diamond Cleaning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
            {REVIEWS.map((review, i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-foreground leading-relaxed mb-4">"{review.text}"</p>
                <div>
                  <p className="text-sm font-semibold text-foreground">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-xl p-8 text-center">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-3">
              Ready to Experience the Difference?
            </h2>
            <p className="text-muted-foreground mb-6">Get your free estimate today.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={() => setPopupOpen(true)}>
                Get a Free Estimate
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={BUSINESS.phoneHref}>Call {BUSINESS.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
