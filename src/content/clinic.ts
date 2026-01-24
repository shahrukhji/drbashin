export const clinic = {
  name: "Bhasin Dental Clinic",
  doctor: "Dr. Damini Bhasin",
  tagline: "Advanced, Pain‑Free Dental Care in Pitampura",
  addressLine:
    "25 RAJ NAGAR, NEAR RAM MANDIR, PITAMPURA, DELHI - 110034",
  phones: ["+91 98733 73281", "+91 92662 17218"],
  whatsapp: "+919873373281",
  established: 2017,
} as const;

export const serviceCategories = [
  {
    key: "preventive",
    title: "Preventive Care",
    description: "Routine check-ups, cleanings, screenings, and prevention-first planning.",
    bullets: ["Dental check-ups", "Professional cleanings", "Fluoride therapy", "Oral cancer screening"],
  },
  {
    key: "cosmetic",
    title: "Cosmetic Dentistry",
    description: "Confident smiles with whitening, veneers, bonding, and smile design.",
    bullets: ["Teeth whitening", "Veneers", "Smile makeovers", "Cosmetic bonding"],
  },
  {
    key: "restorative",
    title: "Restorative Treatments",
    description: "Repair and restore function with modern, durable materials and techniques.",
    bullets: ["Fillings", "Crowns & bridges", "Root canal therapy", "Dentures"],
  },
  {
    key: "sedation",
    title: "Sedation Dentistry",
    description: "Anxiety-friendly care designed around comfort, safety, and gentle treatment.",
    bullets: ["Conscious sedation", "Pain‑minimizing protocols", "Personalized planning", "Calm environment"],
  },
] as const;

export const whyChooseUs = [
  {
    title: "Advanced Technology",
    description: "Modern diagnostics and equipment for precise, efficient treatment.",
  },
  {
    title: "Conscious Sedation",
    description: "Comfort-forward options for anxious patients and longer procedures.",
  },
  {
    title: "Expert Care",
    description: "Led by Dr. Damini Bhasin with a meticulous, patient-first approach.",
  },
  {
    title: "Patient‑Centered",
    description: "Clear explanations, personalized plans, and gentle follow-through.",
  },
] as const;

export const testimonials = [
  {
    name: "Aditi S.",
    quote:
      "Super clean clinic and very gentle treatment. The team explained everything clearly—felt genuinely cared for.",
    rating: 5,
  },
  {
    name: "Rohit K.",
    quote:
      "I was anxious about the procedure but the experience was calm and painless. Highly recommended in Pitampura.",
    rating: 5,
  },
  {
    name: "Neha M.",
    quote:
      "Excellent attention to detail. My smile makeover looks natural and the process was smooth throughout.",
    rating: 5,
  },
] as const;
