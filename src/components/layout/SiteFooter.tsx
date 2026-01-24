import { MapPin, Phone, MessageCircle } from "lucide-react";

import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { clinic } from "@/content/clinic";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container grid gap-10 py-14 md:grid-cols-3">
        <div className="space-y-3">
          <div className="font-display text-lg">{clinic.name}</div>
          <p className="text-sm text-muted-foreground">
            {clinic.tagline}. Established {clinic.established}.
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href={`tel:${clinic.phones[0].replace(/\s/g, "")}`}>
                <Phone />
                Call
              </a>
            </Button>
            <Button variant="soft" size="sm" asChild>
              <a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-medium">Quick Links</div>
          <div className="grid gap-2 text-sm">
            <NavLink to="/about" className="text-muted-foreground hover:text-foreground">
              About
            </NavLink>
            <NavLink to="/services" className="text-muted-foreground hover:text-foreground">
              Services
            </NavLink>
            <NavLink to="/technology" className="text-muted-foreground hover:text-foreground">
              Technology & Comfort
            </NavLink>
          </div>
        </div>

        <div className="space-y-3">
          <div className="text-sm font-medium">Visit Us</div>
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="mt-0.5 h-4 w-4" />
            <p>{clinic.addressLine}</p>
          </div>
          <div className="text-sm text-muted-foreground">
            <div>{clinic.phones[0]}</div>
            <div>{clinic.phones[1]}</div>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {clinic.name}. All rights reserved.</div>
          <div className="flex gap-4">
            <a className="hover:text-foreground" href="#" aria-label="Privacy policy">
              Privacy
            </a>
            <a className="hover:text-foreground" href="#" aria-label="Terms">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
