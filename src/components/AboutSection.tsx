import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-neutral-950 py-20 text-zinc-100 sm:py-24 lg:py-28"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex-1 space-y-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">
            About The Gym
          </p>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight sm:text-4xl">
            Built for lifters, athletes, and everyday warriors.
          </h2>
          <p className="text-sm leading-relaxed text-zinc-300 sm:text-base">
            Fitness Sports Center is a community-driven gym designed to help you train harder,
            recover smarter, and stay consistent. From first-time members to seasoned competitors,
            we combine performance coaching with a motivating atmosphere that keeps you coming back.
          </p>
          <div className="grid gap-6 pt-4 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-400">
                Mission
              </h3>
              <p className="mt-2 text-sm text-zinc-300">
                Empower every member to unlock their strongest, healthiest self through expert
                coaching, proven training systems, and an environment that rewards effort.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-400">
                Vision
              </h3>
              <p className="mt-2 text-sm text-zinc-300">
                To be the go-to fitness hub in the city—where results, relationships, and resilience
                are built inside and outside the gym.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex-1"
        >
          <div className="relative mx-auto max-w-md rounded-3xl border border-neutral-700 bg-gradient-to-br from-neutral-900 via-black to-neutral-950 p-1 shadow-[0_0_60px_rgba(0,0,0,0.7)]">
            <div className="relative overflow-hidden rounded-[1.35rem] bg-neutral-900/80">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(250,204,21,0.25),transparent_55%),radial-gradient(circle_at_90%_100%,rgba(253,224,71,0.18),transparent_50%)]" />
              <div className="relative flex flex-col gap-4 px-5 py-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full border border-amber-400/70 bg-black/70">
                      <Image
                        src="/assets/gym-logo.jpg"
                        alt="Fitness logo"
                        width={40}
                        height={40}
                      />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-300">
                        Strength First
                      </p>
                      <p className="text-xs text-zinc-300">
                        Premium equipment & performance coaching.
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-amber-500/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-amber-300">
                    24/7 Access
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-[0.7rem] text-zinc-200">
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-zinc-400">
                      Area
                    </p>
                    <p className="mt-1 text-sm font-semibold">800 m²</p>
                  </div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-zinc-400">
                      Racks
                    </p>
                    <p className="mt-1 text-sm font-semibold">8 Power</p>
                  </div>
                  <div>
                    <p className="text-[0.65rem] uppercase tracking-[0.22em] text-zinc-400">
                      Classes
                    </p>
                    <p className="mt-1 text-sm font-semibold">+25 / week</p>
                  </div>
                </div>
                <p className="text-[0.72rem] leading-relaxed text-zinc-300/90">
                  “We created a space where loud PRs, early-morning grinders, and first-time
                  members all feel at home. No ego, just progress.”
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

