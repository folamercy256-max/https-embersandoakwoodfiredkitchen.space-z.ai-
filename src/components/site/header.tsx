"use client";

import { useEffect, useState } from "react";
import { Clock, MapPin, Phone, Menu as MenuIcon, X } from "lucide-react";
import { BRAND, NAV_ITEMS, type ViewKey } from "@/lib/site";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";

export function SiteHeader({
  active,
  onNavigate,
}: {
  active: ViewKey;
  onNavigate: (v: ViewKey) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (v: ViewKey) => {
    setOpen(false);
    onNavigate(v);
  };

  return (
    <>
      {/* top info strip */}
      <div className="hidden md:block bg-charcoal text-cream/75 text-xs">
        <div className="mx-auto max-w-6xl px-6 h-10 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-gold" /> {BRAND.phone}
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-3.5 w-3.5 text-gold" /> {BRAND.shortAddress}
            </span>
          </div>
          <span className="inline-flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-gold" /> Tue to Sun, from 5pm. Closed Mondays.
          </span>
        </div>
      </div>

      {/* main nav */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-500 border-b",
          scrolled
            ? "bg-charcoal/95 backdrop-blur border-liner shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            : "bg-charcoal border-transparent"
        )}
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex h-20 items-center justify-between gap-4">
            <button
              onClick={() => go("home")}
              aria-label="Ember & Oak home"
              className="shrink-0"
            >
              <Logo tone="light" className="scale-[0.62] -my-3 md:scale-75 md:-my-2 origin-left" />
            </button>

            <nav className="hidden lg:flex items-center gap-7" aria-label="Main">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.key}
                  onClick={() => go(item.key)}
                  className={cn(
                    "relative py-2 text-[0.8rem] font-medium uppercase tracking-[0.16em] transition-colors",
                    active === item.key ? "text-gold" : "text-cream/80 hover:text-gold"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute left-0 -bottom-0.5 h-[2px] bg-gold transition-all duration-300",
                      active === item.key ? "w-full" : "w-0"
                    )}
                  />
                </button>
              ))}
              <button onClick={() => go("reserve")} className="gold-btn-dark !py-2.5 !px-5 ml-2">
                Book a Table
              </button>
            </nav>

            <button
              className="lg:hidden text-cream p-2 -mr-2"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* mobile drawer */}
        <div
          className={cn(
            "lg:hidden overflow-hidden border-t border-liner transition-[max-height] duration-500 bg-charcoal",
            open ? "max-h-[480px]" : "max-h-0 border-t-0"
          )}
        >
          <nav className="px-6 py-4 flex flex-col" aria-label="Mobile">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.key}
                onClick={() => go(item.key)}
                className={cn(
                  "py-3.5 text-left text-sm font-medium uppercase tracking-[0.18em] border-b border-liner/60 last:border-0",
                  active === item.key ? "text-gold" : "text-cream/85"
                )}
              >
                {item.label}
              </button>
            ))}
            <button onClick={() => go("reserve")} className="gold-btn-dark mt-4 mb-2">
              Book a Table
            </button>
          </nav>
        </div>
      </header>
    </>
  );
}
