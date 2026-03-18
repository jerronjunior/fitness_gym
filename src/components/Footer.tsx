export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-black py-6 text-xs text-zinc-400">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-zinc-200">Fitness Sports Center</span>. All rights
          reserved.
        </p>
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-zinc-500">
          Strong body · Focused mind · Consistent habits
        </p>
      </div>
    </footer>
  );
}

