import { MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { clinic } from "@/content/clinic";

export function WhatsAppFab() {
  return (
    <div className="fixed bottom-5 right-5 z-40">
      <Button
        variant="soft"
        size="icon"
        asChild
        className="rounded-full soft-shadow"
        aria-label="Chat on WhatsApp"
      >
        <a href={`https://wa.me/${clinic.whatsapp}`} target="_blank" rel="noopener noreferrer">
          <MessageCircle />
        </a>
      </Button>
    </div>
  );
}
