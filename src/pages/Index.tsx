import { useState } from "react";
import { Link } from "react-router-dom";
import { Star, Shield, Clock, Users, ChevronRight, Sparkles, CheckCircle2, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS, SERVICES, LOCATIONS, REVIEWS } from "@/lib/data";
import heroImage from "@/assets/hero-home.svg";
import EmbeddedForm from "@/components/EmbeddedForm";
import FormPopup from "@/components/FormPopup";

const TRUST_STATS = [
  { icon: Star, value: "4.9★", label: "Google Rating" },
  { icon: Users, value: "500+", label: "Customers Served" },
  { icon: Shield, value: "100%", label: "Satisfaction Guarantee" },
  { icon: Clock, value: "24hr", label: "Response Time" },
];

export default function Index() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <>
      <FormPopup open={popupOpen} onOpenChange={setPopupOpen} />

      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div
          className="absolute inset-0 hidden md:block bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 md:hidden bg-section-gradient" />

        <div className="relative container-narrow py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <p
                className="text-white/90 font-semibold text-sm tracking-widest uppercase mb-4 animate-fade-up"
                style={{ animationDelay: "0.1s" }}
              >
                Premium Cleaning Services
              </p>
              <h1
                className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6 animate-fade-up"
                style={{ animationDelay: "0.2s" }}
              >
                Your Home Deserves
                <br className="hidden sm:block" />
                Black Diamond Cleaning
              </h1>
              <p
                className="text-lg text-white/85 max-w-lg mb-8 animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                Trusted by 500+ homeowners across Pennsylvania and New York.
                Meticulous cleaning, reliable teams, zero headaches.
              </p>
              <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <Button variant="outline-light" size="xl" asChild>
                  <a href={BUSINESS.phoneHref}>Call {BUSINESS.phone}</a>
                </Button>
              </div>
            </div>
            <div className="animate-fade-up" style={{ animationDelay: "0.3s" }}>
              <div className="bg-card border border-border rounded-lg shadow-card overflow-hidden">
                <EmbeddedForm height={537} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-card border-y border-border">
        <div className="container-narrow py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground text-lg">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Our Services</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Cleaning Solutions That
              <br className="hidden sm:block" />
              Fit Your Life
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From weekly maintenance to deep cleans and move-out transformations,
              we handle it all so you don't have to.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground text-lg mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.shortDesc}</p>
                <Link
                  to={`/services/${service.id}`}
                  className="text-sm text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Learn More <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Why Black Diamond</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                We Solve the Problems
                <br className="hidden sm:block" />
                Other Cleaners Create
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our founder started Black Diamond after years of dealing with unreliable cleaning
                companies as a property owner. We built the service we always wished existed.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  "Consistent, high-quality results every visit",
                  "Reliable scheduling—we show up, on time, every time",
                  "Clear communication from booking to completion",
                  "Trusted by property managers and Airbnb hosts",
                  "No contracts, no hidden fees, no surprises",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="cta" size="lg" asChild>
                  <Link to="/about">
                    Our Story <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-background border border-border rounded-lg p-6 text-center">
                <p className="font-heading text-3xl font-extrabold text-primary">500+</p>
                <p className="text-sm text-muted-foreground mt-1">Happy Customers</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6 text-center">
                <p className="font-heading text-3xl font-extrabold text-primary">4.9</p>
                <p className="text-sm text-muted-foreground mt-1">Google Rating</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6 text-center">
                <p className="font-heading text-3xl font-extrabold text-primary">2</p>
                <p className="text-sm text-muted-foreground mt-1">States Served</p>
              </div>
              <div className="bg-background border border-border rounded-lg p-6 text-center">
                <p className="font-heading text-3xl font-extrabold text-primary">8</p>
                <p className="text-sm text-muted-foreground mt-1">Metro Areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Reviews</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hear From Our Customers
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((review, i) => (
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
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/reviews">
                View All Reviews <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Service Areas</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Proudly Serving PA & NY
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {LOCATIONS.map((loc) => (
              <Link
                key={loc.slug}
                to={`/service-areas/${loc.slug}`}
                className="bg-background border border-border rounded-lg p-4 hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-heading font-semibold text-foreground text-sm">{loc.city}</span>
                </div>
                <p className="text-xs text-muted-foreground">{loc.stateAbbr}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="bg-card border border-border rounded-xl p-8 md:p-14 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready for a Cleaner Home?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Get your free, no-obligation estimate today. We respond within 24 hours
              and can typically schedule your first clean within the week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" onClick={() => setPopupOpen(true)}>
                Get Your Free Estimate
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href={BUSINESS.phoneHref}>Call {BUSINESS.phone}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
