import * as React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { clinic, serviceCategories } from "@/content/clinic";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const appointmentSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .min(8, "Please enter a valid phone number")
    .max(20)
    .regex(/^[+\d][\d\s-]{7,}$/i, "Please enter a valid phone number"),
  email: z.string().trim().email("Please enter a valid email").max(255).optional().or(z.literal("")),
  preferredDate: z.string().trim().optional().or(z.literal("")),
  preferredTime: z.string().trim().optional().or(z.literal("")),
  service: z.string().trim().min(1, "Please select a service"),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export type AppointmentFormValues = z.infer<typeof appointmentSchema>;

export function buildWhatsAppUrl(values: AppointmentFormValues) {
  const lines = [
    `Hello ${clinic.name}, I'd like to book an appointment.`,
    `Name: ${values.name}`,
    `Phone: ${values.phone}`,
    values.email ? `Email: ${values.email}` : undefined,
    values.service ? `Service: ${values.service}` : undefined,
    values.preferredDate ? `Preferred date: ${values.preferredDate}` : undefined,
    values.preferredTime ? `Preferred time: ${values.preferredTime}` : undefined,
    values.message ? `Message: ${values.message}` : undefined,
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${clinic.whatsapp}?text=${text}`;
}

export function AppointmentDialog({
  open,
  onOpenChange,
  initialService,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  initialService?: string;
}) {
  const form = useForm<AppointmentFormValues>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      preferredDate: "",
      preferredTime: "",
      service: serviceCategories[0]?.title ?? "Preventive Care",
      message: "",
    },
  });

  React.useEffect(() => {
    if (!open) return;
    if (!initialService) return;
    form.setValue("service", initialService, { shouldValidate: true });
  }, [open, initialService, form]);

  const onSubmit = (values: AppointmentFormValues) => {
    // No backend in Phase 1: show confirmation and offer WhatsApp.
    toast({
      title: "Appointment request received",
      description: "We’ll contact you shortly to confirm a suitable slot.",
    });

    const wa = buildWhatsAppUrl(values);
    window.open(wa, "_blank", "noopener,noreferrer");

    form.reset();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="font-display">Book an Appointment</DialogTitle>
          <DialogDescription>
            Share your preference—our team will confirm the best available time.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" autoComplete="name" {...field} />
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
                      <Input placeholder="+91…" inputMode="tel" autoComplete="tel" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email (optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="you@example.com" autoComplete="email" type="email" {...field} />
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
                    <Select value={field.value} onValueChange={field.onChange}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {serviceCategories.map((s) => (
                          <SelectItem key={s.key} value={s.title}>
                            {s.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="preferredDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred date (optional)</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="preferredTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred time (optional)</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message (optional)</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Tell us about your concern…" rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-muted-foreground">
                Prefer a quick chat? Call{" "}
                <a className="story-link" href={`tel:${clinic.phones[0].replace(/\s/g, "")}`}>
                  {clinic.phones[0]}
                </a>
              </div>
              <Button type="submit" variant="hero" size="lg">
                Send Request (WhatsApp)
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
