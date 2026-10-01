"use client";

import { useState, type FormEvent } from "react";
import { Mail, MessageCircle, Send } from "lucide-react";
import { services, site } from "@/lib/site";

type FormState = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const initial: FormState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-navy-ink placeholder:text-slate-400 outline-none transition focus:border-navy/60 focus:ring-2 focus:ring-navy/15";

export function EnquiryForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState<null | "email" | "whatsapp">(null);

  const set = (key: keyof FormState) => (value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.firstName.trim()) next.firstName = "Please enter your first name.";
    if (!form.phone.trim() && !form.email.trim())
      next.email = "Add a phone number or an email so we can reply.";
    if (!form.message.trim()) next.message = "Tell us briefly what you need.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const composeText = () => {
    const name = `${form.firstName} ${form.lastName}`.trim();
    return [
      `Name: ${name}`,
      form.phone ? `Phone: ${form.phone}` : "",
      form.email ? `Email: ${form.email}` : "",
      form.service ? `Service: ${form.service}` : "",
      "",
      form.message.trim(),
    ]
      .filter(Boolean)
      .join("\n");
  };

  const submitEmail = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const subject = `Website enquiry${form.service ? ` — ${form.service}` : ""} — ${form.firstName} ${form.lastName}`.trim();
    const href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(composeText())}`;
    window.location.href = href;
    setSent("email");
  };

  const submitWhatsApp = () => {
    if (!validate()) return;
    const href = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(composeText())}`;
    window.open(href, "_blank", "noopener,noreferrer");
    setSent("whatsapp");
  };

  return (
    <form onSubmit={submitEmail} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-600">
            First name <span className="text-scarlet">*</span>
          </label>
          <input
            id="firstName"
            type="text"
            autoComplete="given-name"
            placeholder="e.g. Thandi"
            value={form.firstName}
            onChange={(e) => set("firstName")(e.target.value)}
            className={inputClass}
          />
          {errors.firstName && <p className="mt-1.5 text-xs text-red-600">{errors.firstName}</p>}
        </div>
        <div>
          <label htmlFor="lastName" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-600">
            Last name
          </label>
          <input
            id="lastName"
            type="text"
            autoComplete="family-name"
            placeholder="e.g. Mokoena"
            value={form.lastName}
            onChange={(e) => set("lastName")(e.target.value)}
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-600">
            Phone number
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="e.g. 073 142 9278"
            value={form.phone}
            onChange={(e) => set("phone")(e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-600">
            Email address
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.co.za"
            value={form.email}
            onChange={(e) => set("email")(e.target.value)}
            className={inputClass}
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="service" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-600">
          Service required
        </label>
        <select
          id="service"
          value={form.service}
          onChange={(e) => set("service")(e.target.value)}
          className={`${inputClass} appearance-none`}
        >
          <option value="">Select a service (optional)</option>
          {services.map((s) => (
            <option key={s.slug} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Other / Not sure">Other / Not sure</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-600">
          Message <span className="text-scarlet">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell us about your project or problem — including the area you're in…"
          value={form.message}
          onChange={(e) => set("message")(e.target.value)}
          className={`${inputClass} resize-y`}
        />
        {errors.message && <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
      </div>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row">
        <button
          type="submit"
          className="glow-leaf inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-leaf px-7 py-4 font-bold text-white transition hover:bg-leaf-deep"
        >
          <Send className="h-4.5 w-4.5" aria-hidden />
          Send Enquiry
        </button>
        <button
          type="button"
          onClick={submitWhatsApp}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#25D366]/50 bg-[#25D366]/10 px-7 py-4 font-bold text-[#128C4A] transition hover:bg-[#25D366]/20"
        >
          <MessageCircle className="h-4.5 w-4.5" aria-hidden />
          Send via WhatsApp
        </button>
      </div>

      <p className="flex items-start gap-2 pt-1 text-xs leading-relaxed text-slate-500">
        <Mail className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
        Sending opens your email or WhatsApp app with your message pre-filled to{" "}
        {site.email} — no details are stored on this website.
      </p>

      {sent && (
        <p
          role="status"
          className="rounded-xl border border-leaf/40 bg-leaf/10 px-4 py-3 text-sm font-semibold text-leaf-deep"
        >
          {sent === "email"
            ? "Your email app is opening with your enquiry — just press send and we'll get back to you shortly."
            : "WhatsApp is opening with your enquiry — press send and we'll reply shortly."}
        </p>
      )}
    </form>
  );
}
