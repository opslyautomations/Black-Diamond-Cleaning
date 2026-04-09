import { Link } from "react-router-dom";
import { Diamond, Phone, Mail, MapPin } from "lucide-react";
import { BUSINESS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-narrow py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 font-heading font-bold text-foreground mb-3">
              <Diamond className="w-5 h-5 text-primary" />
              <span>Black Diamond Cleaning</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium residential and commercial cleaning services across Pennsylvania and New York.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="font-heading font-semibold text-foreground text-sm mb-4">Quick Links</p>
            <div className="flex flex-col gap-2">
              {[
                { to: "/services/recurring-cleaning", label: "Services" },
                { to: "/service-areas/scranton-pa", label: "Service Areas" },
                { to: "/reviews", label: "Reviews" },
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-heading font-semibold text-foreground text-sm mb-4">Contact Us</p>
            <div className="flex flex-col gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-4 h-4 text-primary shrink-0" />
                {BUSINESS.phone}
              </a>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary shrink-0" />
                {BUSINESS.email}
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                {BUSINESS.address}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {BUSINESS.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Serving PA & NY
          </p>
        </div>
      </div>
    </footer>
  );
}
