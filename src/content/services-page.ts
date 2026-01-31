export type ServiceFaq = { q: string; a: string };

export type ServiceDefinition = {
  key: string;
  title: string;
  summary: string;
  process: string[];
  benefits: string[];
  faqs: ServiceFaq[];
};

export type ServiceGroup = {
  key: string;
  title: string;
  description: string;
  services: ServiceDefinition[];
};

export const servicesPageGroups: ServiceGroup[] = [
  {
    key: "dental_treatments",
    title: "Dental Treatments Available",
    description:
      "Comprehensive dental treatments planned around comfort, clarity, and long‑term oral health.",
    services: [
      {
        key: "root_canal",
        title: "Root Canal Treatment",
        summary: "Comfort‑first treatment to remove infection and help preserve your natural tooth.",
        process: [
          "Consultation and diagnosis (clinical exam + X‑ray if required)",
          "Gentle cleaning and disinfection of the canals",
          "Sealing and restoration (filling / crown as advised)",
        ],
        benefits: ["Relieves tooth pain", "Saves the natural tooth", "Prevents spread of infection"],
        faqs: [
          { q: "Is it painful?", a: "We use modern anaesthesia and gentle technique to minimise discomfort." },
          { q: "Will I need a crown?", a: "Often yes for back teeth; we’ll advise based on tooth strength." },
        ],
      },
      {
        key: "tooth_colored_filling",
        title: "Tooth‑Coloured Filling",
        summary: "Natural‑looking composite fillings that restore strength and appearance.",
        process: [
          "Identify decay and numb the area if needed",
          "Remove decay and clean the cavity",
          "Place and shape composite, then polish for a smooth finish",
        ],
        benefits: ["Blends with tooth color", "Strong and durable", "Conservative tooth preparation"],
        faqs: [
          { q: "How long does it last?", a: "With good care, composite fillings can last many years." },
          { q: "Can I eat immediately?", a: "Usually yes; we’ll guide you based on bite and sensitivity." },
        ],
      },
      {
        key: "silver_filling",
        title: "Silver‑Coloured Filling",
        summary: "Durable restorative option for specific back‑tooth requirements.",
        process: [
          "Clinical evaluation and material discussion",
          "Decay removal and cavity preparation",
          "Filling placement and bite adjustment",
        ],
        benefits: ["Long‑lasting strength", "Suitable for heavy‑bite areas", "Cost‑effective option"],
        faqs: [
          { q: "Is it safe?", a: "We’ll explain suitability and alternatives so you can choose confidently." },
          { q: "Can it be replaced later?", a: "Yes, it can be replaced with other restorative materials if needed." },
        ],
      },
      {
        key: "crown_bridge",
        title: "Crown and Bridge",
        summary: "Custom crowns/bridges designed for comfort, function, and long‑term stability.",
        process: [
          "Assessment and treatment planning",
          "Tooth preparation and impressions (digital/physical)",
          "Final fitting and bite refinement",
        ],
        benefits: ["Restores chewing function", "Improves aesthetics", "Protects weakened teeth"],
        faqs: [
          { q: "How many visits are needed?", a: "Typically 2 visits; timelines vary by case." },
          { q: "How do I care for it?", a: "Brush, floss, and regular check‑ups—especially around bridge areas." },
        ],
      },
      {
        key: "dentures",
        title: "Partial and Complete Denture",
        summary: "Comfort‑fit dentures tailored to your bite for better chewing and confidence.",
        process: [
          "Consultation and impressions",
          "Trial fitting and bite correction",
          "Final delivery and follow‑up adjustments",
        ],
        benefits: ["Improves chewing and speech", "Supports facial profile", "Removable and practical"],
        faqs: [
          { q: "Will it feel natural?", a: "There’s an adjustment period; we fine‑tune fit for comfort." },
          { q: "Do you provide follow‑ups?", a: "Yes—follow‑ups are important for fit and sore‑spot correction." },
        ],
      },
      {
        key: "prophylaxis_polishing",
        title: "Oral Prophylaxis and Polishing",
        summary: "Professional cleaning to support gum health and keep your smile fresh.",
        process: [
          "Gum assessment and plaque evaluation",
          "Scaling to remove plaque/tartar",
          "Polishing + home‑care guidance",
        ],
        benefits: ["Reduces gum bleeding", "Helps prevent cavities", "Removes stains and buildup"],
        faqs: [
          { q: "How often should I do it?", a: "Most patients benefit every 6 months; we’ll personalise it." },
          { q: "Is it safe for sensitive teeth?", a: "Yes—we adjust technique and advise sensitivity care." },
        ],
      },
      {
        key: "whitening",
        title: "Tooth Whitening",
        summary: "Safe whitening with shade planning and sensitivity‑aware protocols.",
        process: [
          "Shade assessment and suitability check",
          "Whitening procedure (as recommended)",
          "Post‑care instructions to maintain results",
        ],
        benefits: ["Brighter smile", "Boosts confidence", "Professionally guided safety"],
        faqs: [
          { q: "Will it cause sensitivity?", a: "Some sensitivity is possible; we use measures to minimise it." },
          { q: "How long do results last?", a: "It depends on habits; we’ll share maintenance tips." },
        ],
      },
      {
        key: "painless_extraction",
        title: "Painless Tooth Extraction",
        summary: "Comfort‑first extractions with modern anaesthesia and clear after‑care.",
        process: [
          "Evaluation and X‑ray if required",
          "Local anaesthesia and gentle extraction",
          "After‑care guidance and follow‑up if needed",
        ],
        benefits: ["Pain‑minimised procedure", "Reduces infection risk", "Clear healing support"],
        faqs: [
          { q: "How long does healing take?", a: "Most heal within 1–2 weeks; complexity can affect timelines." },
          { q: "Can I replace the tooth later?", a: "Yes—options include implant, bridge, or denture." },
        ],
      },
      {
        key: "smile_design",
        title: "Smile Designing",
        summary: "Aesthetic planning tailored to your face, bite, and goals for natural results.",
        process: [
          "Smile assessment and goal discussion",
          "Plan creation (often combining treatments)",
          "Execution + finishing and review",
        ],
        benefits: ["Natural‑looking enhancements", "Personalised plan", "Confidence‑boosting results"],
        faqs: [
          { q: "What treatments are included?", a: "It can include whitening, bonding, veneers, aligners, and more." },
          { q: "Is it permanent?", a: "Some elements are long‑term; we’ll explain maintenance and longevity." },
        ],
      },
      {
        key: "implants",
        title: "Dental Implants",
        summary: "Fixed, natural‑feeling tooth replacement with precise planning and hygiene.",
        process: [
          "Clinical evaluation and implant planning",
          "Implant placement (as advised)",
          "Healing + final crown placement",
        ],
        benefits: ["Feels like a natural tooth", "Protects jawbone", "No support needed from adjacent teeth"],
        faqs: [
          { q: "Am I eligible?", a: "Eligibility depends on bone and health; we’ll evaluate and guide." },
          { q: "How long does it take?", a: "Timelines vary; we’ll share a clear plan after assessment." },
        ],
      },
      {
        key: "tooth_jewellery",
        title: "Tooth Jewellery",
        summary: "A safe, non‑invasive cosmetic add‑on using dental‑grade bonding.",
        process: [
          "Tooth surface cleaning and selection",
          "Bonding placement and curing",
          "Care guidance and optional removal plan",
        ],
        benefits: ["No drilling", "Quick appointment", "Removable without harming enamel (when done properly)"],
        faqs: [
          { q: "Can it be removed later?", a: "Yes, we can remove it safely when you want." },
          { q: "Is it safe for the tooth?", a: "Yes when placed with dental‑grade bonding and proper technique." },
        ],
      },
      {
        key: "invisible_braces",
        title: "Invisible Braces",
        summary: "Discreet aligner treatment with guided planning and monitoring.",
        process: [
          "Assessment and bite analysis",
          "Aligner plan and delivery",
          "Progress reviews until completion",
        ],
        benefits: ["Nearly invisible", "Removable for meals", "Improves alignment and oral hygiene"],
        faqs: [
          { q: "How long will it take?", a: "Treatment time varies by case; we’ll estimate after evaluation." },
          { q: "Do I need to wear them daily?", a: "Yes—consistent wear is key for predictable results." },
        ],
      },
    ],
  },
  {
    key: "diagnostic_tests",
    title: "Diagnostic and Medical Tests",
    description:
      "On‑site diagnostic support to help plan safe, well‑informed dental treatments when required.",
    services: [
      {
        key: "xray",
        title: "X‑Ray",
        summary: "Quick imaging to help diagnose hidden issues and plan precise care.",
        process: ["Brief clinical check", "Imaging as required", "Explain findings and next steps"],
        benefits: ["Accurate diagnosis", "Better treatment planning", "Avoids guesswork"],
        faqs: [
          { q: "Is it safe?", a: "Yes—modern imaging uses low exposure and is done only when required." },
          { q: "Do I need it every visit?", a: "Not always; we recommend it based on symptoms and history." },
        ],
      },
      {
        key: "blood_test",
        title: "Blood Test",
        summary: "Basic investigations when needed to support safe procedures and medical clearance.",
        process: ["Requirement check", "Sample collection", "Report review (as relevant)"],
        benefits: ["Supports safety", "Helps plan procedures", "Medical clarity"],
        faqs: [
          { q: "When is it needed?", a: "Sometimes before surgical procedures or when medical history suggests." },
          { q: "Will you explain the purpose?", a: "Yes—we’ll tell you exactly why a test is recommended." },
        ],
      },
      {
        key: "urine_test",
        title: "Urine Test",
        summary: "Screening support when required for safe treatment decisions.",
        process: ["Requirement check", "Sample collection", "Report review (as relevant)"],
        benefits: ["Convenient in‑clinic support", "Better medical context", "Safer planning"],
        faqs: [
          { q: "Is it required for dental treatment?", a: "Not usually—only in select cases." },
          { q: "How long does it take?", a: "Collection is quick; reporting time depends on the lab process." },
        ],
      },
      {
        key: "sugar_test",
        title: "Sugar Test",
        summary: "Blood glucose checks to support healing‑focused planning and infection control.",
        process: ["Basic assessment", "Glucose test", "Plan dental care accordingly"],
        benefits: ["Supports safer procedures", "Improves healing planning", "Helps manage risk"],
        faqs: [
          { q: "Why is it important?", a: "Uncontrolled sugar can affect healing and infection risk." },
          { q: "Do diabetics need special planning?", a: "Yes—we plan timing, medications, and after‑care carefully." },
        ],
      },
      {
        key: "blood_pressure",
        title: "Blood Pressure Test",
        summary: "On‑site monitoring for stress‑controlled, safe dental treatment.",
        process: ["Check vitals", "Record readings", "Proceed safely with planned care"],
        benefits: ["Safer appointments", "Reduces risk", "Helps manage anxiety‑related spikes"],
        faqs: [
          { q: "Do you check BP before treatment?", a: "For many patients, yes—especially before longer procedures." },
          { q: "What if BP is high?", a: "We’ll guide next steps and plan treatment safely." },
        ],
      },
      {
        key: "other_tests",
        title: "Sputum, Stool, and Semen Tests",
        summary: "Additional investigations available when required for overall diagnostic support.",
        process: ["Requirement check", "Sample collection", "Report access and guidance"],
        benefits: ["Convenient access", "Supports medical clarity", "One place for essential tests"],
        faqs: [
          { q: "Do these relate to dental treatment?", a: "Only in specific situations; we’ll advise if relevant." },
          { q: "Can I ask for guidance?", a: "Yes—share your concern and we’ll guide you on what’s needed." },
        ],
      },
    ],
  },
];
