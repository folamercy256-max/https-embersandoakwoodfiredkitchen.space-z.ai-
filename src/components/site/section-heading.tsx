import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  text,
  tone = "dark",
  align = "center",
  className,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  tone?: "dark" | "light";
  align?: "center" | "left";
  className?: string;
}) {
  const light = tone === "light";
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <p className={cn("eyebrow", align === "center" && "h-script-line justify-center")}>{eyebrow}</p>
      <h2
        className={cn(
          "font-serif text-3xl md:text-[2.6rem] leading-[1.15] mt-3",
          light ? "text-cream" : "text-charcoal"
        )}
      >
        {title}
      </h2>
      <span className={cn("mt-4 h-[3px] w-16 bg-gold inline-block", align === "center" && "")} />
      {text ? (
        <p className={cn("mt-5 text-[0.95rem] md:text-base leading-relaxed", light ? "text-cream/70" : "text-taupe")}>
          {text}
        </p>
      ) : null}
    </Reveal>
  );
}
