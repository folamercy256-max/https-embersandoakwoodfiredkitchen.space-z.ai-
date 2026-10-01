"use client";

 
import { BRAND, type ViewKey } from "@/lib/site";
import { Reveal } from "./reveal";

export function PageHero({
  img,
  eyebrow,
  title,
  crumb,
  onNavigate,
}: {
  img: string;
  eyebrow: string;
  title: string;
  crumb: string;
  onNavigate?: (v: ViewKey) => void;
}) {
  return (
    <section className="relative h-[46vh] min-h-[320px] flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${img})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/85" aria-hidden="true" />
      <div className="relative z-10 px-6">
        <Reveal>
          <p className="eyebrow text-gold-soft">{eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-6xl text-cream mt-2">{title}</h1>
          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-cream/60">
            <button onClick={() => onNavigate?.("home")} className="hover:text-gold transition-colors">
              Home
            </button>
            <span className="mx-2 text-gold">/</span>
            <span className="text-gold">{crumb}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function VisitStrip() {
  return (
    <section className="dark-band text-cream">
      <div className="mx-auto max-w-6xl px-6 py-14 grid gap-8 md:grid-cols-3 text-center">
        <Reveal>
          <p className="eyebrow">Find Us</p>
          <p className="mt-3 text-cream/80 text-sm leading-relaxed">{BRAND.address}</p>
          <p className="mt-1 text-cream/50 text-xs">Free parking in the garage next door after 6pm.</p>
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">Call Us</p>
          <a href={BRAND.phoneHref} className="mt-3 block text-cream/80 hover:text-gold text-sm transition-colors">
            {BRAND.phone}
          </a>
          <p className="mt-1 text-cream/50 text-xs">Someone picks up during opening hours, every time.</p>
        </Reveal>
        <Reveal delay={240}>
          <p className="eyebrow">Write Us</p>
          <a href={`mailto:${BRAND.email}`} className="mt-3 block text-cream/80 hover:text-gold text-sm transition-colors">
            {BRAND.email}
          </a>
          <p className="mt-1 text-cream/50 text-xs">For large parties and private events, use the form.</p>
        </Reveal>
      </div>
    </section>
  );
}
