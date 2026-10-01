"use client";

 
import { useState, useTransition } from "react";
import { CalendarCheck, Clock, Users, Phone } from "lucide-react";
import { toast } from "sonner";
import { createReservation, type ReserveInput } from "@/app/actions";
import { BRAND, HOURS, TIME_SLOTS, type ViewKey } from "@/lib/site";
import { PageHero } from "../page-hero";
import { Reveal } from "../reveal";

const OCCASIONS = [
  "Just dinner",
  "Birthday",
  "Anniversary",
  "Date night",
  "Business dinner",
  "Something else",
];

export function ReservePage({ onNavigate }: { onNavigate: (v: ViewKey) => void }) {
  const today = new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "7:00pm",
    guests: "2",
    occasion: "Just dinner",
    notes: "",
  });
  const [pending, startTransition] = useTransition();

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload: ReserveInput = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      date: form.date,
      time: form.time,
      guests: Number(form.guests),
      occasion: form.occasion,
      notes: form.notes,
    };
    startTransition(async () => {
      const res = await createReservation(payload);
      if (res.ok) {
        toast.success("Table requested", { description: res.message, duration: 8000 });
        setForm((f) => ({ ...f, name: "", email: "", phone: "", notes: "" }));
      } else {
        toast.error(res.message, { duration: 8000 });
      }
    });
  };

  return (
    <>
      <PageHero
        img="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/77293b7a9ebc.jpg"
        eyebrow="Join Us"
        title="Book a Table"
        crumb="Reservations"
        onNavigate={onNavigate}
      />

      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-[1fr_340px] items-start">
          <Reveal>
            <p className="eyebrow">Reservations</p>
            <h2 className="font-serif text-3xl md:text-[2.6rem] text-charcoal mt-3 leading-[1.15]">
              Tell Us When And We Will Save The Rest
            </h2>
            <span className="mt-4 block h-[3px] w-16 bg-gold" />
            <p className="mt-5 text-taupe text-[0.95rem] leading-relaxed max-w-xl">
              Send the form and we will confirm by text within the hour during opening times.
              Parties larger than eight, patio buyouts and private events are easier over the
              phone, so give us a ring for those.
            </p>

            <form onSubmit={submit} className="mt-9 grid sm:grid-cols-2 gap-5">
              <div>
                <label className="field-label" htmlFor="r-name">Your name</label>
                <input id="r-name" required value={form.name} onChange={set("name")} placeholder="Jamie Rivera" className="field" />
              </div>
              <div>
                <label className="field-label" htmlFor="r-phone">Phone</label>
                <input id="r-phone" required type="tel" value={form.phone} onChange={set("phone")} placeholder="(512) 555 0134" className="field" />
              </div>
              <div className="sm:col-span-2">
                <label className="field-label" htmlFor="r-email">Email</label>
                <input id="r-email" required type="email" value={form.email} onChange={set("email")} placeholder="you@example.com" className="field" />
              </div>
              <div>
                <label className="field-label" htmlFor="r-date">Date</label>
                <input id="r-date" required type="date" min={today} value={form.date} onChange={set("date")} className="field" />
              </div>
              <div>
                <label className="field-label" htmlFor="r-time">Time</label>
                <select id="r-time" value={form.time} onChange={set("time")} className="field">
                  {TIME_SLOTS.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="field-label" htmlFor="r-guests">Party size</label>
                <select id="r-guests" value={form.guests} onChange={set("guests")} className="field">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "guest" : "guests"}
                    </option>
                  ))}
                  <option value="9">More than 8, call us</option>
                </select>
              </div>
              <div>
                <label className="field-label" htmlFor="r-occasion">Occasion</label>
                <select id="r-occasion" value={form.occasion} onChange={set("occasion")} className="field">
                  {OCCASIONS.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="field-label" htmlFor="r-notes">Anything we should know? (optional)</label>
                <textarea
                  id="r-notes"
                  rows={4}
                  value={form.notes}
                  onChange={set("notes")}
                  placeholder="Allergies, a wheelchair friendly table, the good corner spot..."
                  className="field resize-none"
                />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" disabled={pending} className="gold-btn w-full sm:w-auto disabled:opacity-60">
                  <CalendarCheck className="h-4 w-4" />
                  {pending ? "Sending your request..." : "Request My Table"}
                </button>
                <p className="mt-3 text-xs text-taupe">
                  No card needed. Cancel anytime by replying to our text.
                </p>
              </div>
            </form>
          </Reveal>

          {/* sidebar */}
          <Reveal delay={160} className="space-y-6">
            <div className="bg-charcoal text-cream p-7">
              <h3 className="font-serif text-2xl flex items-center gap-3">
                <Clock className="h-5 w-5 text-gold" /> Hours
              </h3>
              <span className="mt-3 mb-5 block h-[2px] w-10 bg-gold" />
              <ul className="space-y-3 text-sm">
                {HOURS.map((h) => (
                  <li key={h.days} className="flex justify-between gap-3">
                    <span className="text-cream/80">{h.days}</span>
                    <span className="text-gold-soft whitespace-nowrap">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-line p-7">
              <h3 className="font-serif text-2xl text-charcoal flex items-center gap-3">
                <Users className="h-5 w-5 text-gold-deep" /> Big Groups
              </h3>
              <span className="mt-3 mb-5 block h-[2px] w-10 bg-gold" />
              <p className="text-sm leading-relaxed text-taupe">
                The long table by the window seats twelve, and the back patio hosts up to
                twenty for buyouts. Set menus start at $45 a person. Call and ask for Elena
                and she will put it together with you.
              </p>
              <a href={BRAND.phoneHref} className="mt-5 inline-flex items-center gap-2 text-gold-deep font-semibold text-sm hover:text-charcoal transition-colors">
                <Phone className="h-4 w-4" /> {BRAND.phone}
              </a>
            </div>

            <div className="relative overflow-hidden">
              <img
                src="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1465fa2fbead.jpg"
                alt="The garden patio set for dinner"
                className="w-full h-52 object-cover shadow-md"
                loading="lazy"
              />
              <p className="absolute bottom-0 inset-x-0 bg-charcoal/80 text-cream/85 text-xs px-4 py-3">
                The patio, ready for a spring evening.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
