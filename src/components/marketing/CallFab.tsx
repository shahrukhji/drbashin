import { Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { clinic } from "@/content/clinic";

export function CallFab() {
  const primary = clinic.phones[0].replace(/\s/g, "");

  return (
    <div className="fixed bottom-5 left-5 z-40 sm:hidden">
      <Button
        variant="hero"
        size="sm"
        asChild
        className="rounded-full soft-shadow"
        aria-label={`Call now ${clinic.phones[0]}`}
      >
        <a href={`tel:${primary}`}>
          <Phone />
          Call Now
        </a>
      </Button>
    </div>
  );
}
