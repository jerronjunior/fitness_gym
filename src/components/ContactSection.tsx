import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

type FormState = {
  name: string;
  email: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
};

export function ContactSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const validate = () => {
    const nextErrors: Partial<FormState> = {};
    if (!form.name.trim()) nextErrors.name = "Name is required.";
    if (!form.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email.";
    }
    if (!form.message.trim()) nextErrors.message = "Message is required.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    setTimeout(() => {
      setStatus("success");
      setForm(initialState);
      setTimeout(() => setStatus("idle"), 3500);
    }, 900);
  };

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section
      id="contact"
      className="bg-black py-20 text-zinc-100 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
              Contact
            </p>
            <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
              Ready to start? Let&apos;s talk.
            </h2>
            <p className="max-w-md text-sm text-zinc-300 sm:text-base">
              Drop us a message about your goals, schedule, or any questions you have. Our team
              will get back to you within one business day with next steps.
            </p>
            <div className="mt-4 space-y-2 text-sm text-zinc-300">
              <p>
                <span className="font-semibold text-amber-300">Location:</span> Downtown district,
                next to the central sports complex.
              </p>
              <p>
                <span className="font-semibold text-amber-300">Hours:</span> 24/7 gym access ·
                staffed 6am – 10pm.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
            className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black p-6 shadow-[0_0_45px_rgba(0,0,0,0.8)]"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-4 text-sm">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="mt-2 w-full rounded-lg border border-neutral-700 bg-neutral-950/80 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  placeholder="Enter your full name"
                  required
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-amber-400">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="mt-2 w-full rounded-lg border border-neutral-700 bg-neutral-950/80 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  placeholder="you@example.com"
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-amber-400">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className="mt-2 min-h-[120px] w-full rounded-lg border border-neutral-700 bg-neutral-950/80 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  placeholder="Tell us about your goals or any questions you have..."
                  required
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-amber-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-amber-500 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-black shadow-lg shadow-amber-500/40 transition hover:-translate-y-0.5 hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>

              {status === "success" && (
                <p className="mt-3 text-xs text-emerald-400">
                  Message sent successfully. We&apos;ll reach out to you shortly with more
                  information.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

