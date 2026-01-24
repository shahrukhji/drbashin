import * as React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/marketing/SectionHeading";
import { WhatsAppFab } from "@/components/marketing/WhatsAppFab";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { useDocumentMeta } from "@/hooks/use-document-meta";
import { clinic, serviceCategories } from "@/content/clinic";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80, "Name is too long"),
  phone: z
    .string()
    .trim()
    .min(8, "Please enter a valid phone number")
    .max(18, "Phone number is too long")
    .regex(/^[+0-9\s-]+$/, "Phone can only contain digits, spaces, + or -"),
  service: z.string().trim().min(1, "Please select a service"),
  message: z.string().trim().min(10, "Please add a short message").max(500, "Message is too long"),
});

type ContactValues = z.infer<typeof contactSchema>;

function buildWhatsAppMessage(values: ContactValues) {
  const cleanPhone = values.phone.replace(/\s+/g, " ").trim();
  return (
    `Appointment request\n` +
    `Name: ${values.name}\n` +
    `Phone: ${cleanPhone}\n` +
    `Service: ${values.service}\n` +
    `Message: ${values.message}`
  );
}

function buildWhatsAppUrl(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${clinic.whatsapp}?text=${encoded}`;
}

const hours = [
  { day: "Mon–Sat", time: "10:00 AM – 2:00 PM • 5:00 PM – 9:00 PM" },
  { day: "Sunday", time: "By appointment" },
] as const;

export default function Contact() {
  const { toast } = useToast();

  useDocumentMeta({
    title: `Contact | ${clinic.name}`,
    description:
      "Contact Bhasin Dental Clinic in Pitampura, Delhi. View location, hours, and request an appointment via WhatsApp.",
  });

  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      service: "",
      message: "",
    },
    mode: "onTouched",
  });

  const onSubmit = (values: ContactValues) => {
    // validated by zod; never pass raw inputs into external URLs
    const msg = buildWhatsAppMessage(values);
    const url = buildWhatsAppUrl(msg);

    toast({
      title: "Ready to send",
      description: "We’ll open WhatsApp with your message pre-filled.",
    });

    window.open(url, "_blank", "noopener,noreferrer");
    form.reset();
  };

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(clinic.addressLine)}&output=embed`;
  const services = serviceCategories.map((s) => s.title);

  return (
    <PageLayout>
      <WhatsAppFab />

      <header className="bg-hero">
        <div className="container py-14 sm:py-18">
          <p className="text-sm font-medium text-muted-foreground">Contact</p>
          <h1 className="mt-2 text-balance font-display text-4xl tracking-tight sm:text-5xl">
            Visit us or request an appointment
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Call, WhatsApp, or send a quick request—our team will confirm the best time.
          </p>
        </div>
      </header>

      <main>
        <section className="container py-14">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Location"
                title="Find Bhasin Dental Clinic"
                description="We’re located in Pitampura, Delhi—easy to reach and patient-friendly."
              />

              <div className="surface overflow-hidden rounded-3xl p-0">
                <div className="aspect-[16/10] w-full">
                  <iframe
                    title="Bhasin Dental Clinic location on Google Maps"
                    src={mapSrc}
                    className="h-full w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <div className="grid gap-4 p-6">
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 h-4 w-4" />
                    <div>
                      <div className="font-medium text-foreground">Address</div>
                      <div>{clinic.addressLine}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Clock className="mt-0.5 h-4 w-4" />
                    <div>
                      <div className="font-medium text-foreground">Clinic hours</div>
                      <div className="mt-1 grid gap-1">
                        {hours.map((h) => (
                          <div key={h.day} className="flex flex-wrap gap-x-3">
                            <span className="w-24 text-foreground/80">{h.day}</span>
                            <span>{h.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
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
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Request form"
                title="Send a quick request"
                description="Validated form that opens WhatsApp with a pre-filled message."
              />

              <div className="mt-8 surface rounded-3xl p-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input autoComplete="name" placeholder="Your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input autoComplete="tel" inputMode="tel" placeholder="e.g. +91 98733 73281" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Service</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {services.map((s) => (
                                <SelectItem key={s} value={s}>
                                  {s}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us what you’re looking for (symptoms, preferred time, etc.)"
                              className="min-h-28"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="pt-2">
                      <Button type="submit" variant="hero" className="w-full">
                        Send on WhatsApp
                        <MessageCircle />
                      </Button>
                      <p className="mt-3 text-xs text-muted-foreground">
                        We don’t store this message on the website—WhatsApp opens on your device.
                      </p>
                    </div>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageLayout>
  );
}
