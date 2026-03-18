import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-amber-500 via-black to-neutral-900 pt-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
        <div className="absolute -left-10 top-24 h-64 w-64 rounded-full bg-amber-500/60 blur-3xl" />
        <div className="absolute -right-10 bottom-10 h-72 w-72 rounded-full bg-zinc-100/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-16 px-4 pb-16 pt-8 text-center md:flex-row md:items-stretch md:gap-12 md:px-6 lg:px-8 lg:text-left">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-xl space-y-6"
        >
          <p className="inline-flex rounded-full border border-amber-400/60 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-amber-300 backdrop-blur">
            Est. 2023 · Fitness Sports Center
          </p>
          <h1 className="text-4xl font-extrabold uppercase tracking-tight text-zinc-50 sm:text-5xl lg:text-6xl">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-amber-300 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
              Body
            </span>{" "}
            Today
          </h1>
          <p className="max-w-lg text-sm text-zinc-200/90 sm:text-base">
            Push past your limits with elite equipment, science-backed programs, and world-class
            coaches. This is where discipline, strength, and community come together.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-black shadow-xl shadow-amber-500/40 transition hover:-translate-y-0.5 hover:bg-amber-400"
            >
              Join Now
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-zinc-500/80 bg-black/40 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-zinc-100 transition hover:border-amber-400 hover:text-amber-300"
            >
              Learn More
            </a>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 max-w-xs sm:max-w-sm">
            <div className="space-y-1 text-left">
              <p className="text-2xl font-extrabold text-zinc-50">24/7</p>
              <p className="text-xs uppercase tracking-[0.22em] text-zinc-300/90">
                Access & Support
              </p>
            </div>
            <div className="space-y-1 text-left">
              <p className="text-2xl font-extrabold text-zinc-50">+50</p>
              <p className="text-xs uppercase tracking-[0.22em] text-zinc-300/90">
                Strength Machines
              </p>
            </div>
            <div className="space-y-1 text-left">
              <p className="text-2xl font-extrabold text-zinc-50">4</p>
              <p className="text-xs uppercase tracking-[0.22em] text-zinc-300/90">
                Training Zones
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative flex flex-1 items-center justify-center"
        >
          <div className="relative h-[320px] w-[320px] max-w-full rounded-[2.5rem] border border-amber-500/40 bg-gradient-to-tr from-neutral-950 via-neutral-900 to-neutral-800 p-1 shadow-[0_0_60px_rgba(0,0,0,0.8)] sm:h-[380px] sm:w-[340px] md:h-[420px] md:w-[360px]">
            <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-gradient-to-b from-zinc-900 via-black to-neutral-950">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0,rgba(250,204,21,0.35),transparent_60%),radial-gradient(circle_at_80%_100%,rgba(253,224,71,0.25),transparent_55%)]" />
              <div className="relative flex h-full flex-col justify-between px-6 py-6">
                <div className="flex items-center justify-between text-xs text-amber-100/90">
                  <p className="font-semibold uppercase tracking-[0.25em]">Elite Program</p>
                  <p className="rounded-full border border-amber-300/40 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em]">
                    Strength · Cardio
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-amber-200">
                    Weekly Focus
                  </p>
                  <div className="grid grid-cols-3 gap-3 text-[0.65rem] text-zinc-100/90">
                    <div>
                      <p className="font-semibold uppercase tracking-[0.22em] text-zinc-400">
                        Mon
                      </p>
                      <p className="mt-1 text-[0.7rem]">Push Power</p>
                    </div>
                    <div>
                      <p className="font-semibold uppercase tracking-[0.22em] text-zinc-400">
                        Wed
                      </p>
                      <p className="mt-1 text-[0.7rem]">Leg Strength</p>
                    </div>
                    <div>
                      <p className="font-semibold uppercase tracking-[0.22em] text-zinc-400">
                        Fri
                      </p>
                      <p className="mt-1 text-[0.7rem]">Conditioning</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-zinc-400">
                      Members
                    </p>
                    <p className="text-lg font-extrabold text-amber-300">+300</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-zinc-400">
                      Avg. Results
                    </p>
                    <p className="text-lg font-extrabold text-zinc-50">8 Weeks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

