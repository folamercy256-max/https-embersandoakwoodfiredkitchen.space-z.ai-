"use client";

import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Send } from "lucide-react";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { subscribeNewsletter } from "@/app/actions";
import { BRAND, HOURS, NAV_ITEMS, type ViewKey } from "@/lib/site";
import { Logo } from "./logo";

export function SiteFooter({ onNavigate }: { onNavigate: (v: ViewKey) => void }) {
  const [email, setEmail] = useState("");
  const [pending, startTransition] = useTransition();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    startTransition(async () => {
      const res = await subscribeNewsletter(email.trim());
      if (res.ok) {
        toast.success(res.message);
        setEmail("");
      } else {
        toast.error(res.message);
      }
    });
  };

  return (
    <footer className="bg-charcoal text-cream/70">
      {/* upper */}
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="light" />
          <p className="mt-5 text-sm leading-relaxed">
            A small kitchen with a big fire on Rio Grande Street. We have been cooking over
            oak and mesquite in downtown Austin since 2016, and we would love to cook for you.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="h-9 w-9 inline-flex items-center justify-center border border-liner text-gold hover:bg-gold hover:text-charcoal transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="h-9 w-9 inline-flex items-center justify-center border border-liner text-gold hover:bg-gold hover:text-charcoal transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="h-9 w-9 inline-flex items-center justify-center border border-liner text-gold hover:bg-gold hover:text-charcoal transition-colors"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-cream font-serif text-xl">Quick Links</h3>
          <span className="mt-3 mb-5 block h-[2px] w-10 bg-gold" />
          <ul className="space-y-3 text-sm">
            {NAV_ITEMS.map((n) => (
              <li key={n.key}>
                <button
                  onClick={() => onNavigate(n.key)}
                  className="hover:text-gold transition-colors inline-flex items-center gap-2"
                >
                  <span className="text-gold">›</span> {n.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-cream font-serif text-xl">Opening Hours</h3>
          <span className="mt-3 mb-5 block h-[2px] w-10 bg-gold" />
          <ul className="space-y-3 text-sm">
            {HOURS.map((h) => (
              <li key={h.days} className="flex justify-between gap-4">
                <span>{h.days}</span>
                <span className="text-gold-soft">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-cream font-serif text-xl">Stay In Touch</h3>
          <span className="mt-3 mb-5 block h-[2px] w-10 bg-gold" />
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-gold mt-0.5 shrink-0" /> {BRAND.address}
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-gold shrink-0" />
              <a href={BRAND.phoneHref} className="hover:text-gold transition-colors">
                {BRAND.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-gold shrink-0" />
              <a href={`mailto:${BRAND.email}`} className="hover:text-gold transition-colors">
                {BRAND.email}
              </a>
            </li>
          </ul>
          <form onSubmit={submit} className="mt-5 flex">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="w-full min-w-0 bg-coal border border-liner border-r-0 px-3 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold"
            />
            <button
              type="submit"
              disabled={pending}
              aria-label="Subscribe"
              className="shrink-0 bg-gold text-charcoal px-4 inline-flex items-center justify-center hover:bg-gold-deep hover:text-cream transition-colors disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
          <p className="mt-3 text-xs text-cream/45">
            One email a month. New dishes, wine dinners, nothing else.
          </p>
        </div>
      </div>

      {/* lower */}
      <div className="border-t border-liner">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <p>
            <a
              href={BRAND.credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/70 hover:text-gold transition-colors"
            >
              {BRAND.credit.label}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
