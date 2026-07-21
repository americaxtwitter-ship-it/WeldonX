export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-line bg-elevated text-xs font-bold tracking-tightest text-white">WX</span>
          <span className="text-sm text-neutral-400">WeldonX &copy; 2026</span>
        </div>
        <span className="font-mono text-xs text-neutral-600">Built with code and AI.</span>
      </div>
    </footer>
  );
}
