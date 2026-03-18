import { motion } from "framer-motion";
import Image from "next/image";

const trainers = [
  {
    id: 1,
    name: "Alex Stone",
    role: "Head Strength Coach",
    focus: "Powerlifting · Hypertrophy",
  },
  {
    id: 2,
    name: "Mia Carter",
    role: "Performance & Conditioning",
    focus: "Athletic performance · Fat loss",
  },
  {
    id: 3,
    name: "Jordan Lee",
    role: "Mobility & Recovery",
    focus: "Yoga · Mobility · Breathwork",
  },
  {
    id: 4,
    name: "Riley Kim",
    role: "General Fitness Coach",
    focus: "Beginner strength · Lifestyle",
  },
];

export function TrainersSection() {
  return (
    <section
      id="trainers"
      className="bg-neutral-950 py-20 text-zinc-100 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
              Trainers
            </p>
            <h2 className="mt-2 text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
              Meet the team behind your progress.
            </h2>
            <p className="mt-3 max-w-xl text-sm text-zinc-300 sm:text-base">
              Every coach on our floor is certified, battle-tested, and committed to making sure
              you never train alone—even when you lift solo.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer, index) => (
            <motion.article
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.07 }}
              className="group flex flex-col rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-900 via-black to-neutral-950 p-4 text-sm shadow-[0_0_35px_rgba(0,0,0,0.7)] transition hover:-translate-y-1 hover:border-amber-400/80 hover:shadow-[0_0_55px_rgba(251,191,36,0.35)]"
            >
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border border-amber-400/60 bg-neutral-950">
                <Image
                  src="/assets/palette.png"
                  alt={trainer.name}
                  fill
                  sizes="112px"
                  className="object-cover opacity-80"
                />
              </div>
              <div className="mt-4 flex-1 space-y-1 text-center">
                <h3 className="text-base font-semibold text-zinc-50">{trainer.name}</h3>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-amber-400">
                  {trainer.role}
                </p>
                <p className="mt-2 text-xs text-zinc-300">{trainer.focus}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

