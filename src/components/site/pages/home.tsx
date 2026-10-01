"use client";

 
import { useCallback, useEffect, useState } from "react";
import { Flame, Leaf, Heart, ChevronLeft, ChevronRight, Quote, Phone } from "lucide-react";
import {
  BRAND,
  FEATURES,
  GALLERY,
  HERO_SLIDES,
  MENU,
  SPECIALS,
  STATS,
  STORY_IMAGES,
  TESTIMONIALS,
  type ViewKey,
} from "@/lib/site";
import { SectionHeading } from "../section-heading";
import { Reveal } from "../reveal";
import { cn } from "@/lib/utils";

const FEATURE_ICONS = { flame: Flame, leaf: Leaf, heart: Heart } as const;

const CAT_IMAGES: Record<string, string> = {
  starters: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/18b249421b95.jpg",
  mains: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/b0a5a11fb482.jpg",
  desserts: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/cb9fb743f76f.jpg",
  drinks: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ab6de6db2fb0.jpg",
};

/* ------------------------------ HERO ------------------------------ */

function Hero({ onNavigate }: { onNavigate: (v: ViewKey) => void }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % HERO_SLIDES.length), 7000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative h-[88vh] min-h-[560px] overflow-hidden bg-charcoal" aria-label="Welcome">
      {HERO_SLIDES.map((s, i) => (
        <div
          key={i}
          className={cn("hero-slide", i === idx && "active")}
          aria-hidden={i !== idx}
        >
          <div
            className={cn("absolute inset-0 bg-cover bg-center ken", i === idx && "active")}
            style={{ backgroundImage: `url(${s.img})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/45 to-charcoal/90" />
        </div>
      ))}

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <div key={idx} className="max-w-3xl">
          <p className="eyebrow text-gold-soft hero-anim">{HERO_SLIDES[idx].eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-[4.2rem] leading-[1.1] text-cream mt-4 hero-anim hero-anim-2">
            {HERO_SLIDES[idx].title}
          </h1>
          <p className="mt-6 text-cream/75 text-sm md:text-base leading-relaxed max-w-xl mx-auto hero-anim hero-anim-3">
            {HERO_SLIDES[idx].text}
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4 hero-anim hero-anim-4">
            <button onClick={() => onNavigate(HERO_SLIDES[idx].view)} className="gold-btn-dark">
              {HERO_SLIDES[idx].cta}
            </button>
            <button onClick={() => onNavigate("menu")} className="ghost-btn-light">
              View The Menu
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 flex items-center gap-3">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Slide ${i + 1}`}
              className={cn(
                "h-2 rounded-full transition-all duration-500",
                i === idx ? "w-8 bg-gold" : "w-2 bg-cream/40 hover:bg-cream/70"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- FEATURES ----------------------------- */

function Features() {
  return (
    <section className="section-pad bg-cream">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-3">
          {FEATURES.map((f, i) => {
            const Icon = FEATURE_ICONS[f.icon as keyof typeof FEATURE_ICONS];
            return (
              <Reveal key={f.title} delay={i * 130} className="text-center group">
                <span className="mx-auto h-16 w-16 rounded-full border border-gold/50 text-gold-deep inline-flex items-center justify-center transition-all duration-500 group-hover:bg-gold group-hover:text-charcoal group-hover:rotate-6">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="font-serif text-xl md:text-2xl text-charcoal mt-5">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-taupe">{f.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- STORY ------------------------------ */

function Story({ onNavigate }: { onNavigate: (v: ViewKey) => void }) {
  return (
    <section className="section-pad bg-parchment overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-2 items-center">
        <Reveal className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={STORY_IMAGES.main}
              alt="Chef Marco working the open fire in the Ember & Oak kitchen"
              className="col-span-1 row-span-2 h-full w-full object-cover rounded-tl-[3rem] shadow-xl min-h-[380px]"
              loading="lazy"
            />
            <img
              src={STORY_IMAGES.top}
              alt="Morning prep counter with fresh ingredients"
              className="w-full h-[180px] md:h-[200px] object-cover shadow-lg"
              loading="lazy"
            />
            <img
              src={STORY_IMAGES.bottom}
              alt="Chef Elena at the pass during dinner service"
              className="w-full h-[180px] md:h-[200px] object-cover shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 md:-right-6 bg-gold text-charcoal px-6 py-4 shadow-xl">
            <p className="font-serif text-3xl leading-none">9</p>
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] mt-1">Years by the fire</p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <p className="eyebrow">Our Story</p>
          <h2 className="font-serif text-3xl md:text-[2.6rem] leading-[1.15] text-charcoal mt-3">
            One Oven, Twelve Tables And A Simple Idea
          </h2>
          <span className="mt-4 block h-[3px] w-16 bg-gold" />
          <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-taupe">
            <p>
              Ember &amp; Oak opened in the spring of 2016 with a used hearth oven, twelve tables
              and a menu that fit on one page. Marco had just come home from nine years of
              Chicago kitchens. Elena had a pastry degree and a strict rule that dessert would
              never come off a truck. The plan was simple. Cook everything over real wood and
              let the fire do the talking.
            </p>
            <p>
              Not much has changed since then, except the number of tables and the size of the
              fire. The produce still arrives from Hill Country farms a few times a week. The
              steaks still dry age in a glass case you can see from your seat. And every night
              at five o&#39;clock, the ovens get lit the same way they did on day one.
            </p>
          </div>
          <p className="font-script text-4xl text-gold-deep mt-7">Marco &amp; Elena</p>
          <p className="text-xs uppercase tracking-[0.25em] text-taupe mt-1">Chefs and owners</p>
          <button onClick={() => onNavigate("about")} className="gold-btn mt-8">
            More Of Our Story
          </button>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- SPECIALS ------------------------------ */

function Specials() {
  return (
    <section className="section-pad bg-cream">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="From The Fire"
          title="Tonight's Specials"
          text="Three plates the kitchen is proud of right now. They change when the farms change what they send us."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {SPECIALS.map((s, i) => (
            <Reveal key={s.name} delay={i * 130} className="group">
              <div className="relative overflow-hidden shadow-md bg-charcoal">
                <img
                  src={s.img}
                  alt={s.name}
                  className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute top-4 right-4 bg-gold text-charcoal font-serif text-lg font-bold px-3 py-1">
                  {s.price}
                </span>
              </div>
              <div className="bg-white border border-line border-t-0 px-6 py-6 text-center">
                <h3 className="font-serif text-xl text-charcoal">{s.name}</h3>
                <span className="my-3 block h-[2px] w-10 bg-gold mx-auto" />
                <p className="text-sm leading-relaxed text-taupe">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------- MENU PREVIEW --------------------------- */

function MenuPreview({ onNavigate }: { onNavigate: (v: ViewKey) => void }) {
  const [cat, setCat] = useState(MENU[1].id);
  const active = MENU.find((m) => m.id === cat) ?? MENU[0];

  return (
    <section className="section-pad bg-parchment">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Taste It"
          title="A Look At The Menu"
          text="Starters to share, mains off the fire, and a bar that keeps up. This is a sample. The full menu has more."
        />

        <Reveal className="mt-10 flex justify-center">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {MENU.map((m) => (
              <button
                key={m.id}
                onClick={() => setCat(m.id)}
                className={cn(
                  "px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] border transition-all duration-300",
                  cat === m.id
                    ? "bg-charcoal text-gold border-charcoal"
                    : "bg-transparent text-taupe border-line hover:border-gold hover:text-gold-deep"
                )}
              >
                {m.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px] items-start">
          <div>
            <p className="font-script text-3xl text-gold-deep mb-6">{active.note}</p>
            <ul className="space-y-6">
              {active.items.map((item) => (
                <li key={item.name}>
                  <div className="flex items-baseline text-charcoal">
                    <h4 className="font-serif text-lg">
                      {item.name}
                      {item.tag ? (
                        <span className="ml-3 align-middle inline-block bg-gold/15 text-gold-deep text-[0.6rem] font-sans font-bold uppercase tracking-[0.14em] px-2 py-0.5">
                          {item.tag}
                        </span>
                      ) : null}
                    </h4>
                    <span className="price-leader" aria-hidden="true" />
                    <span className="font-serif text-lg text-gold-deep whitespace-nowrap">{item.price}</span>
                  </div>
                  {item.desc ? (
                    <p className="text-sm text-taupe mt-1 pr-10 leading-relaxed">{item.desc}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group hidden lg:block">
            <img
              key={active.id}
              src={CAT_IMAGES[active.id]}
              alt={`${active.label} at Ember & Oak`}
              className="w-full h-[540px] object-cover shadow-xl"
              loading="lazy"
            />
            <div className="absolute inset-0 border-[10px] border-white/10 m-3 pointer-events-none" />
          </div>
        </Reveal>

        <Reveal className="mt-12 text-center">
          <button onClick={() => onNavigate("menu")} className="gold-btn">
            See The Full Menu
          </button>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- DARK BAND ----------------------------- */

function ExperienceBand({ onNavigate }: { onNavigate: (v: ViewKey) => void }) {
  return (
    <section className="relative dark-band text-cream overflow-hidden">
      <div
        className="absolute inset-0 opacity-15 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/74fa32689d65.jpeg)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-6 section-pad text-center">
        <SectionHeading
          eyebrow="Delicious"
          title="The Ember & Oak Experience"
          tone="light"
          text="Dinner here is not a transaction. It is an hour or three of good smells, warm plates and people who are glad you came."
        />
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 110}>
              <p className="font-serif text-4xl md:text-5xl text-gold">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-cream/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <button onClick={() => onNavigate("reserve")} className="gold-btn-dark">
            Reserve Your Evening
          </button>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------ GALLERY PREVIEW -------------------------- */

function GalleryPreview({ onNavigate }: { onNavigate: (v: ViewKey) => void }) {
  const shots = GALLERY.slice(0, 6);
  return (
    <section className="section-pad bg-cream">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Life At Ember"
          title="From The Dining Room"
          text="Food, people and the room itself. Snapped on ordinary nights, which happen to be our favorite kind."
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {shots.map((g, i) => (
            <Reveal key={g.img} delay={(i % 3) * 110} className="gallery-item relative overflow-hidden group bg-charcoal">
              <img src={g.img} alt={g.label} className="h-56 md:h-64 w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-500" />
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10 text-center">
          <button onClick={() => onNavigate("gallery")} className="ghost-btn-dark">
            Browse The Gallery
          </button>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------- TESTIMONIALS --------------------------- */

function Testimonials() {
  const [i, setI] = useState(0);
  const next = useCallback(() => setI((v) => (v + 1) % TESTIMONIALS.length), []);
  const prev = useCallback(
    () => setI((v) => (v - 1 + TESTIMONIALS.length) % TESTIMONIALS.length),
    []
  );

  useEffect(() => {
    const t = setInterval(next, 8000);
    return () => clearInterval(t);
  }, [next]);

  const t = TESTIMONIALS[i];

  return (
    <section className="section-pad bg-parchment">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeading eyebrow="Kind Words" title="What Guests Say" />
        <Reveal className="relative mt-12 bg-white border border-line shadow-md px-6 md:px-12 py-10 md:py-12">
          <Quote className="h-10 w-10 text-gold/50 mx-auto" />
          <blockquote key={i} className="mt-5">
            <p className="font-serif text-lg md:text-xl italic leading-relaxed text-ink">
              {t.quote}
            </p>
            <footer className="mt-7 flex items-center justify-center gap-4">
              <img
                src={t.avatar}
                alt={t.name}
                className="h-14 w-14 rounded-full object-cover border-2 border-gold"
                loading="lazy"
              />
              <span className="text-left">
                <span className="block font-semibold text-charcoal text-sm">{t.name}</span>
                <span className="block text-xs text-taupe mt-0.5">{t.role}</span>
              </span>
            </footer>
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="h-9 w-9 inline-flex items-center justify-center border border-line text-taupe hover:border-gold hover:text-gold-deep transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, d) => (
                <button
                  key={d}
                  onClick={() => setI(d)}
                  aria-label={`Testimonial ${d + 1}`}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    d === i ? "w-6 bg-gold" : "w-2 bg-line hover:bg-gold/50"
                  )}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="h-9 w-9 inline-flex items-center justify-center border border-line text-taupe hover:border-gold hover:text-gold-deep transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- RESERVE CTA --------------------------- */

function ReserveCta({ onNavigate }: { onNavigate: (v: ViewKey) => void }) {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e58ae7157ad2.jpg)",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-charcoal/80" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-28 text-center text-cream">
        <Reveal>
          <p className="eyebrow">Save Your Seat</p>
          <h2 className="font-serif text-3xl md:text-5xl mt-3">Ready For Dinner By The Fire?</h2>
          <p className="mt-5 text-cream/75 text-sm md:text-base leading-relaxed max-w-xl mx-auto">
            We hold a good number of seats back for walk ins, but Friday and Saturday fill up
            fast. Book ahead and we will have the corner table warm when you get here.
          </p>
          <div className="mt-9 flex flex-wrap justify-center items-center gap-5">
            <button onClick={() => onNavigate("reserve")} className="gold-btn-dark">
              Book a Table
            </button>
            <a
              href={BRAND.phoneHref}
              className="inline-flex items-center gap-3 text-cream/85 hover:text-gold transition-colors"
            >
              <span className="h-11 w-11 rounded-full border border-cream/30 inline-flex items-center justify-center">
                <Phone className="h-4 w-4" />
              </span>
              <span className="font-serif text-xl">{BRAND.phone}</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function HomePage({ onNavigate }: { onNavigate: (v: ViewKey) => void }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Features />
      <Story onNavigate={onNavigate} />
      <Specials />
      <MenuPreview onNavigate={onNavigate} />
      <ExperienceBand onNavigate={onNavigate} />
      <GalleryPreview onNavigate={onNavigate} />
      <Testimonials />
      <ReserveCta onNavigate={onNavigate} />
    </>
  );
}
