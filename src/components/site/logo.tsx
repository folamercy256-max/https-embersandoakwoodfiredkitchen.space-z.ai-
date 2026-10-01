import { cn } from "@/lib/utils";

export function FlameMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={cn("h-8 w-8", className)} aria-hidden="true">
      <path
        d="M32 6c3.2 8-1.4 12.4-5.6 17C22 27.6 18 32.2 18 40c0 7.7 6.3 14 14 14s14-6.3 14-14c0-5.2-2.2-9-4.4-12.2-1 2.5-2.4 4.5-4.6 5.7 1-6.8-1.2-15.8-5-21.5z"
        fill="currentColor"
      />
      <path
        d="M32 50c-3.9 0-7-3.1-7-7 0-3 1.6-5 3.2-6.7.4 1.6 1.2 3 2.6 3.9-.3-2.7.6-5.9 2.5-7.9 1.2 3 5.7 4.8 5.7 10.7 0 3.9-3.1 7-7 7z"
        className="fill-cream"
      />
    </svg>
  );
}

export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <span className={cn("inline-flex flex-col items-center leading-none select-none", className)}>
      <span className="flex items-center gap-2">
        <FlameMark className={cn("h-7 w-7 shrink-0", tone === "dark" ? "text-gold-deep" : "text-gold")} />
        <span
          className={cn(
            "font-script text-4xl md:text-[2.6rem] tracking-wide",
            tone === "dark" ? "text-charcoal" : "text-cream"
          )}
        >
          Ember &amp; Oak
        </span>
      </span>
      <span
        className={cn(
          "text-[0.6rem] font-semibold uppercase tracking-[0.5em] mt-1 pl-6",
          tone === "dark" ? "text-taupe" : "text-gold-soft"
        )}
      >
        Wood Fired Kitchen
      </span>
    </span>
  );
}
