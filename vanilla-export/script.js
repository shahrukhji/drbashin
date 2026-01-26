/* Vanilla export JS: menu, reveal on scroll, counters, tabs, lightbox, forms → WhatsApp. */

const CLINIC = {
  name: "Bhasin Dental Clinic",
  doctor: "Dr. Damini Bhasin",
  addressLine: "25 RAJ NAGAR, NEAR RAM MANDIR, PITAMPURA, DELHI - 110034",
  phones: ["+91 98733 73281", "+91 92662 17218"],
  whatsapp: "+919873373281",
};

function qs(sel, root = document) {
  return root.querySelector(sel);
}
function qsa(sel, root = document) {
  return Array.from(root.querySelectorAll(sel));
}

function openModal(key) {
  const m = qs(`[data-modal="${key}"]`);
  if (!m) return;
  m.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  // focus first input if present
  const focusEl = qs("input,select,textarea,button", m);
  focusEl?.focus?.();
}

function closeModal(el) {
  const m = el?.closest?.(".modal");
  if (!m) return;
  m.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function isReducedMotion() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Mobile menu
function setupMenu() {
  const toggle = qs("[data-menu-toggle]");
  const menu = qs("[data-mobile-menu]");
  if (!toggle || !menu) return;

  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    menu.hidden = !open;
  };
  setOpen(false);

  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    setOpen(!isOpen);
  });

  qsa("[data-close-menu]", menu).forEach((a) => a.addEventListener("click", () => setOpen(false)));
}

// Reveal on scroll
function setupReveal() {
  const items = qsa(".reveal");
  if (!items.length) return;

  if (isReducedMotion()) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        const delay = Number(el.getAttribute("data-delay") || "0");
        el.style.transitionDelay = `${delay}ms`;
        el.classList.add("is-visible");
        io.unobserve(el);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
  );

  items.forEach((el) => io.observe(el));
}

// Counters
function formatNumber(n) {
  try {
    return new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(n);
  } catch {
    return String(n);
  }
}

function setupCounters() {
  const counters = qsa("[data-counter]");
  if (!counters.length) return;

  const startCounter = (el) => {
    const start = Number(el.getAttribute("data-start") || "0");
    const end = Number(el.getAttribute("data-end") || "0");
    const step = Math.max(1, Number(el.getAttribute("data-step") || "1"));
    const duration = Math.max(200, Number(el.getAttribute("data-duration") || "1200"));
    const suffix = el.getAttribute("data-suffix") || "";

    let current = start;
    const totalSteps = Math.max(1, Math.ceil((end - start) / step));
    const tickMs = Math.max(16, Math.floor(duration / totalSteps));

    el.textContent = `${formatNumber(current)}${suffix}`;

    const id = window.setInterval(() => {
      current = Math.min(end, current + step);
      el.textContent = `${formatNumber(current)}${suffix}`;
      if (current >= end) window.clearInterval(id);
    }, tickMs);
  };

  if (isReducedMotion()) {
    counters.forEach((el) => {
      const end = Number(el.getAttribute("data-end") || "0");
      const suffix = el.getAttribute("data-suffix") || "";
      el.textContent = `${formatNumber(end)}${suffix}`;
    });
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        startCounter(e.target);
        io.unobserve(e.target);
      });
    },
    { threshold: 0.35 },
  );
  counters.forEach((el) => io.observe(el));
}

// Tabs
function setupTabs() {
  const root = qs("[data-tabs]");
  if (!root) return;
  const triggers = qsa("[data-tab]", root);
  const panels = qsa("[data-panel]", root);
  if (!triggers.length || !panels.length) return;

  const setActive = (key) => {
    triggers.forEach((t) => t.setAttribute("aria-selected", String(t.getAttribute("data-tab") === key)));
    panels.forEach((p) => {
      const isActive = p.getAttribute("data-panel") === key;
      p.hidden = !isActive;
    });
  };

  triggers.forEach((t) =>
    t.addEventListener("click", () => {
      setActive(t.getAttribute("data-tab"));
    }),
  );
}

// Lightbox
function setupLightbox() {
  const modal = qs('[data-modal="lightbox"]');
  if (!modal) return;

  const imgEl = qs("[data-lb-img]", modal);
  const capEl = qs("[data-lb-cap]", modal);
  const titleEl = qs("#lb-title", modal);
  const prevBtn = qs("[data-lb-prev]", modal);
  const nextBtn = qs("[data-lb-next]", modal);

  let items = [];
  let index = 0;

  const render = () => {
    const it = items[index];
    if (!it) return;
    imgEl.src = it.src;
    imgEl.alt = it.alt;
    capEl.textContent = it.caption;
    titleEl.textContent = it.caption;
  };

  const openAt = (newItems, idx) => {
    items = newItems;
    index = idx;
    render();
    openModal("lightbox");
  };

  const go = (dir) => {
    if (items.length < 2) return;
    index = (index + dir + items.length) % items.length;
    render();
  };

  prevBtn?.addEventListener("click", () => go(-1));
  nextBtn?.addEventListener("click", () => go(1));

  document.addEventListener("keydown", (e) => {
    const open = modal.getAttribute("aria-hidden") === "false";
    if (!open) return;
    if (e.key === "Escape") closeModal(modal);
    if (e.key === "ArrowLeft") go(-1);
    if (e.key === "ArrowRight") go(1);
  });

  // Click any tile within a gallery surface to open
  qsa("[data-gallery]").forEach((gallery) => {
    const tiles = qsa("[data-lightbox]", gallery);
    const list = tiles.map((t) => ({
      src: t.getAttribute("src") || "",
      alt: t.getAttribute("alt") || "",
      caption: t.getAttribute("data-caption") || "",
    }));

    tiles.forEach((tile, idx) => tile.addEventListener("click", () => openAt(list, idx)));
  });
}

// Modal events
function setupModals() {
  qsa("[data-open-appointment]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const service = btn.getAttribute("data-service");
      if (service) {
        const serviceSelect = qs('#a_service');
        if (serviceSelect) serviceSelect.value = service;
      }
      openModal("appointment");
    }),
  );

  qsa("[data-close-modal]").forEach((el) => el.addEventListener("click", () => closeModal(el)));

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    qsa(".modal[aria-hidden=\"false\"]").forEach((m) => closeModal(m));
  });
}

// Simple validation helpers (client-side only)
function setError(input, message) {
  const id = input.id;
  const err = qs(`[data-error-for="${id}"]`);
  if (err) err.textContent = message || "";
  input.setAttribute("aria-invalid", message ? "true" : "false");
}

function validatePhone(value) {
  const v = String(value || "").trim();
  if (v.length < 8) return "Please enter a valid phone number";
  if (v.length > 20) return "Phone number is too long";
  if (!/^[+0-9\s-]+$/.test(v)) return "Phone can only contain digits, spaces, + or -";
  return "";
}

function buildWhatsAppUrl(message) {
  return `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(message)}`;
}

function setupContactForm() {
  const form = qs("[data-contact-form]");
  if (!form) return;

  const name = qs("#c_name");
  const phone = qs("#c_phone");
  const service = qs("#c_service");
  const message = qs("#c_message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let ok = true;

    const n = name.value.trim();
    if (n.length < 2) { setError(name, "Please enter your name"); ok = false; } else if (n.length > 80) { setError(name, "Name is too long"); ok = false; } else setError(name, "");

    const phoneErr = validatePhone(phone.value);
    if (phoneErr) { setError(phone, phoneErr); ok = false; } else setError(phone, "");

    if (!service.value) { setError(service, "Please select a service"); ok = false; } else setError(service, "");

    const msg = message.value.trim();
    if (msg.length < 10) { setError(message, "Please add a short message"); ok = false; }
    else if (msg.length > 500) { setError(message, "Message is too long"); ok = false; }
    else setError(message, "");

    if (!ok) return;

    const cleanPhone = phone.value.replace(/\s+/g, " ").trim();
    const waMsg =
      `Appointment request\n` +
      `Name: ${n}\n` +
      `Phone: ${cleanPhone}\n` +
      `Service: ${service.value}\n` +
      `Message: ${msg}`;

    window.open(buildWhatsAppUrl(waMsg), "_blank", "noopener,noreferrer");
    form.reset();
  });
}

function setupAppointmentForm() {
  const form = qs("[data-appointment-form]");
  if (!form) return;

  const name = qs("#a_name");
  const phone = qs("#a_phone");
  const email = qs("#a_email");
  const service = qs("#a_service");
  const date = qs("#a_date");
  const time = qs("#a_time");
  const message = qs("#a_message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let ok = true;
    const n = name.value.trim();
    if (n.length < 2) { setError(name, "Please enter your name"); ok = false; } else if (n.length > 100) { setError(name, "Name is too long"); ok = false; } else setError(name, "");

    const phoneErr = validatePhone(phone.value);
    if (phoneErr) { setError(phone, phoneErr); ok = false; } else setError(phone, "");

    const em = email.value.trim();
    if (em && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) { setError(email, "Please enter a valid email"); ok = false; } else setError(email, "");

    if (!service.value) { setError(service, "Please select a service"); ok = false; } else setError(service, "");

    if (!ok) return;

    const lines = [
      `Hello ${CLINIC.name}, I'd like to book an appointment.`,
      `Name: ${n}`,
      `Phone: ${phone.value.trim()}`,
      em ? `Email: ${em}` : null,
      service.value ? `Service: ${service.value}` : null,
      date.value ? `Preferred date: ${date.value}` : null,
      time.value ? `Preferred time: ${time.value}` : null,
      message.value.trim() ? `Message: ${message.value.trim()}` : null,
    ].filter(Boolean);

    window.open(buildWhatsAppUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
    form.reset();
    closeModal(form);
  });
}

function setupFooterYear() {
  const el = qs("[data-year]");
  if (el) el.textContent = String(new Date().getFullYear());
}

// init
setupMenu();
setupReveal();
setupCounters();
setupTabs();
setupLightbox();
setupModals();
setupContactForm();
setupAppointmentForm();
setupFooterYear();
