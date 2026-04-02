import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const services = [
  {
    id: 1,
    name: "Personal Training",
    imageSrc: "/assets/personal-training.png",
    category: "Coaching",
    description:
      "One-on-one coaching tailored to your goals, whether it’s building muscle, losing fat, or improving performance.",
  },
  {
    id: 2,
    name: "Strength & Weightlifting",
    imageSrc: "/assets/strength-weightlifting.png",
    category: "Strength",
    description:
      "Platform-ready racks, calibrated plates, and specialty bars for serious lifters and beginners alike.",
  },
  {
    id: 3,
    name: "",
    imageSrc: "/assets/cardio-conditioning.png",
    category: "Cardio",
    description:
      "High-end treadmills, assault bikes, rowers, and sleds to level up your engine and athleticism.",
  },
  {
    id: 4,
    name: "Yoga & Mobility",
    imageSrc: "/assets/yoga-mobility.jpg",
    category: "Recovery",
    description:
      "Guided sessions designed to improve flexibility, reduce stress, and keep your body moving pain‑free.",
  },
];

export function ServicesSection() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return services;
    return services.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <section
      id="services"
      className="bg-black py-20 text-zinc-100 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
              Services
            </p>
            <h2 className="mt-2 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
              Train your way—without guesswork.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-zinc-300 sm:text-base">
              From focused strength sessions to recovery-focused yoga, build the training split that
              fits your lifestyle and goals.
            </p>
          </div>
          <div className="w-full max-w-xs">
            <label className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
              Search services
            </label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name or goal..."
              className="mt-2 w-full rounded-full border border-neutral-700 bg-neutral-950/90 px-4 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-500"
            />
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filtered.map((service, index) => {
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.08 }}
                className="group flex h-full flex-col rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-950 via-neutral-900 to-black p-5 shadow-[0_0_40px_rgba(0,0,0,0.7)] transition hover:-translate-y-1 hover:border-amber-400/80 hover:shadow-[0_0_60px_rgba(251,191,36,0.4)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 ring-1 ring-amber-400/50 group-hover:bg-amber-400 overflow-hidden">
                      <img src={service.imageSrc} alt={service.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">
                        {service.category}
                      </p>
                      <h3 className="text-lg font-bold text-zinc-50">{service.name}</h3>
                    </div>
                  </div>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-zinc-500">
                    {String(service.id).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-4 text-sm text-zinc-300">{service.description}</p>
              </motion.article>
            );
          })}

          {filtered.length === 0 && (
            <div className="col-span-full rounded-2xl border border-dashed border-neutral-700 bg-neutral-950/70 px-5 py-6 text-sm text-zinc-400">
              No services matched your search. Try a different goal such as{" "}
              <span className="font-semibold text-amber-300">strength</span>,{" "}
              <span className="font-semibold text-amber-300">cardio</span>, or{" "}
              <span className="font-semibold text-amber-300">recovery</span>.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

