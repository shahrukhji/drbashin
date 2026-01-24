import * as React from "react";
import { Menu, Phone, MessageCircle } from "lucide-react";

import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { clinic } from "@/content/clinic";
import { AppointmentDialog } from "@/components/appointments/AppointmentDialog";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/bhasin-logo.jpeg";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/technology", label: "Technology" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

function NavItems({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <nav className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
      {nav.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          onClick={onNavigate}
          className={cn(
            "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
          )}
          activeClassName="text-foreground"
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  );
}

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const [apptOpen, setApptOpen] = React.useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="border-b bg-accent/60">
          <div className="container overflow-hidden py-2">
            <div className="relative">
              <div className={cn(
                "flex w-[200%] items-center gap-6 text-xs text-muted-foreground",
                "motion-safe:animate-marquee motion-reduce:animate-none",
                "[animation-duration:28s] sm:[animation-duration:18s]",
              )}>
              
                <div className="flex w-1/2 items-center justify-between gap-6 whitespace-nowrap">
                  <span className="font-medium text-foreground/80">Call Dr. Damini Bhasin:</span>
                  <a className="story-link" href={`tel:${clinic.phones[0].replace(/\s/g, "")}`}>
                    {clinic.phones[0]}
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <a className="story-link" href={`tel:${clinic.phones[1].replace(/\s/g, "")}`}>
                    {clinic.phones[1]}
                  </a>
                  <span className="text-muted-foreground">•</span>
                  <span className="inline-flex items-center gap-1">
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>{clinic.whatsapp.replace(/^\+?/, "+")}</span>
                  </span>
                </div>
                <div className="flex w-1/2 items-center justify-between gap-6 whitespace-nowrap" aria-hidden>
                  <span className="font-medium text-foreground/80">Call Dr. Damini Bhasin:</span>
                  <span>{clinic.phones[0]}</span>
                  <span className="text-muted-foreground">•</span>
                  <span>{clinic.phones[1]}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="inline-flex items-center gap-1">
                    <MessageCircle className="h-3.5 w-3.5" />
                    <span>{clinic.whatsapp.replace(/^\+?/, "+")}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <NavLink to="/" className="group inline-flex items-center gap-2" aria-label={clinic.name}>
              <span className="logo-badge-premium inline-flex h-10 w-10 items-center justify-center rounded-xl">
                <img
                  src={logoImg}
                  alt="Bhasin Dental Clinic logo"
                  className="h-full w-full rounded-xl object-cover"
                  loading="eager"
                  decoding="async"
                />
              </span>
              <div className="leading-none">
                <div className="font-display text-[13px] font-bold tracking-[-0.02em] sm:text-sm">
                  BHASIN DENTAL CLINIC
                </div>
                <div className="mt-0.5 text-xs leading-tight text-muted-foreground">Pitampura, Delhi</div>
              </div>
            </NavLink>
          </div>

          <div className="hidden items-center gap-8 sm:flex">
            <NavItems />
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="hidden md:inline-flex"
              >
                <a href={`tel:${clinic.phones[0].replace(/\s/g, "")}`}>
                  <Phone />
                  Call
                </a>
              </Button>
              <Button variant="soft" size="sm" asChild className="hidden lg:inline-flex">
                <a
                  href={`https://wa.me/${clinic.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle />
                  WhatsApp
                </a>
              </Button>
              <Button variant="hero" size="sm" onClick={() => setApptOpen(true)}>
                Book Appointment
              </Button>
            </div>
          </div>

          <div className="sm:hidden">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px]">
                <SheetHeader>
                  <SheetTitle className="font-display">Menu</SheetTitle>
                </SheetHeader>

                <div className="mt-6 flex flex-col gap-6">
                  <NavItems onNavigate={() => setOpen(false)} />

                  <div className="grid gap-2">
                    <Button variant="hero" onClick={() => (setOpen(false), setApptOpen(true))}>
                      Book Appointment
                    </Button>
                    <Button variant="outline" asChild>
                      <a href={`tel:${clinic.phones[0].replace(/\s/g, "")}`}>
                        <Phone />
                        Call
                      </a>
                    </Button>
                    <Button variant="soft" asChild>
                      <a
                        href={`https://wa.me/${clinic.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <AppointmentDialog open={apptOpen} onOpenChange={setApptOpen} />
    </>
  );
}
