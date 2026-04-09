import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section-padding bg-background flex items-center justify-center min-h-[60vh]">
      <div className="text-center">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">404</p>
        <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground max-w-sm mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/">Back to Home</Link>
        </Button>
      </div>
    </section>
  );
}
