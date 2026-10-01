"use client";

import { useState, useTransition } from "react";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { sendContactMessage, type ContactInput } from "@/app/actions";
import { BRAND, type ViewKey } from "@/lib/site";
import { PageHero } from "../page-hero";
import { Reveal } from "../reveal";

const SUBJECTS = [
  "General question",
  "Private event",
  "Large party",
  "Feedback",
  "Press",
  "Careers",
];

export function ContactPage({ onNavigate }: { onNavigate: (v: ViewKey) => void }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "General question", message: "" });
  const [pending, startTransition] = useTransition();

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload: ContactInput = { ...form };
    startTransition(async () => {
      const res = await sendContactMessage(payload);
      if (res.ok) {
        toast.success("Message sent", { description: res.message, duration: 7000 });
        setForm({ name: "", email: "", subject: "General question", message: "" });
      } else {
        toast.error(res.message, { duration: 7000 });
      }
    });
  };

  return (
    <>
      <PageHero
        img="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/9bfdad51f96f.jpg"
        eyebrow="Say Hello"
        title="Contact"
        crumb="Contact"
        onNavigate={onNavigate}
      />

      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: MapPin, title: "Visit", lines: [BRAND.address, "Garage parking next door, free after 6pm."] },
              { icon: Phone, title: "Call", lines: [BRAND.phone, "Daily from 2pm. Voicemail before that."] },
              { icon: Mail, title: "Write", lines: [BRAND.email, "We reply within one business day."] },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 120} className="bg-white border border-line p-8 text-center shadow-sm">
                <span className="mx-auto h-14 w-14 rounded-full bg-gold/10 text-gold-deep inline-flex items-center justify-center">
                  <c.icon className="h-6 w-6" />
                </span>
                <h3 className="font-serif text-xl text-charcoal mt-4">{c.title}</h3>
                {c.lines.map((l, idx) => (
                  <p key={l} className={idx === 0 ? "mt-2 text-sm text-ink font-medium" : "mt-1 text-xs text-taupe"}>
                    {idx === 0 && c.title === "Call" ? (
                      <a href={BRAND.phoneHref} className="hover:text-gold-deep transition-colors">{l}</a>
                    ) : idx === 0 && c.title === "Write" ? (
                      <a href={`mailto:${BRAND.email}`} className="hover:text-gold-deep transition-colors">{l}</a>
                    ) : (
                      l
                    )}
                  </p>
                ))}
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-12 lg:grid-cols-2 items-start">
            <Reveal>
              <p className="eyebrow">Drop A Line</p>
              <h2 className="font-serif text-3xl md:text-[2.4rem] text-charcoal mt-3 leading-[1.15]">
                Questions, Events, Or Just Feedback
              </h2>
              <span className="mt-4 block h-[3px] w-16 bg-gold" />
              <p className="mt-5 text-taupe text-[0.95rem] leading-relaxed">
                For same night tables, calling is faster than any form. For everything else,
                this lands straight in the inbox Marco and Elena actually read.
              </p>

              <form onSubmit={submit} className="mt-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="field-label" htmlFor="c-name">Your name</label>
                    <input id="c-name" required value={form.name} onChange={set("name")} placeholder="Jamie Rivera" className="field" />
                  </div>
                  <div>
                    <label className="field-label" htmlFor="c-email">Email</label>
                    <input id="c-email" required type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" className="field" />
                  </div>
                </div>
                <div>
                  <label className="field-label" htmlFor="c-subject">What is it about?</label>
                  <select id="c-subject" value={form.subject} onChange={set("subject")} className="field">
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="field-label" htmlFor="c-message">Message</label>
                  <textarea
                    id="c-message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Tell us what is on your mind..."
                    className="field resize-none"
                  />
                </div>
                <button type="submit" disabled={pending} className="gold-btn disabled:opacity-60">
                  <Send className="h-4 w-4" />
                  {pending ? "Sending..." : "Send Message"}
                </button>
              </form>
            </Reveal>

            <Reveal delay={150} className="space-y-6">
              <div className="border border-line bg-white shadow-sm overflow-hidden">
                <iframe
                  title="Map to Ember & Oak, 214 Rio Grande Street, Austin"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-97.7485%2C30.2650%2C-97.7385%2C30.2730&layer=mapnik&marker=30.2690%2C-97.7435"
                  className="w-full h-[340px] border-0"
                  loading="lazy"
                />
              </div>
              <div className="bg-charcoal text-cream p-7">
                <h3 className="font-serif text-2xl">Getting Here</h3>
                <span className="mt-3 mb-5 block h-[2px] w-10 bg-gold" />
                <ul className="space-y-3 text-sm text-cream/80 leading-relaxed">
                  <li>
                    <span className="text-gold font-semibold">By car.</span> Rio Grande Street
                    between 2nd and 3rd. The city garage next door is free after 6pm and on
                    Sundays.
                  </li>
                  <li>
                    <span className="text-gold font-semibold">By rideshare.</span> Tell your
                    driver the patio entrance on San Antonio Street, it saves you half a block.
                  </li>
                  <li>
                    <span className="text-gold font-semibold">By foot.</span> We are two
                    minutes off the 2nd Street District, right past the little bookshop.
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
