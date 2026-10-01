"use client";

 
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { GALLERY, type ViewKey } from "@/lib/site";
import { PageHero } from "../page-hero";
import { Reveal } from "../reveal";
import { cn } from "@/lib/utils";

const FILTERS = [
  { id: "all", label: "Everything" },
  { id: "food", label: "The Food" },
  { id: "place", label: "The Room" },
  { id: "people", label: "The People" },
] as const;

export function GalleryPage({ onNavigate }: { onNavigate: (v: ViewKey) => void }) {
  const [filter, setFilter] = useState<string>("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const shots = useMemo(
    () => (filter === "all" ? GALLERY : GALLERY.filter((g) => g.cat === filter)),
    [filter]
  );

  const step = (dir: 1 | -1) => {
    if (lightbox === null) return;
    setLightbox((i) => ((i ?? 0) + dir + shots.length) % shots.length);
  };

  return (
    <>
      <PageHero
        img="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/44ea56aeede8.jpg"
        eyebrow="A Look Around"
        title="Gallery"
        crumb="Gallery"
        onNavigate={onNavigate}
      />

      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl mx-auto text-center">
            <p className="eyebrow">Snapshots</p>
            <h2 className="font-serif text-3xl md:text-[2.6rem] text-charcoal mt-3 leading-[1.15]">
              Ordinary Nights At Ember &amp; Oak
            </h2>
            <span className="mt-4 h-[3px] w-16 bg-gold inline-block" />
            <p className="mt-5 text-taupe text-[0.95rem] leading-relaxed">
              No stylists, no props. This is how the room and the plates actually look when
              you visit. Most of these were taken by guests and shared with us.
            </p>
          </Reveal>

          <Reveal className="mt-10 flex flex-wrap justify-center gap-2 md:gap-3">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                onClick={() => {
                  setFilter(f.id);
                  setLightbox(null);
                }}
                className={cn(
                  "px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] border transition-all duration-300",
                  filter === f.id
                    ? "bg-charcoal text-gold border-charcoal"
                    : "bg-transparent text-taupe border-line hover:border-gold hover:text-gold-deep"
                )}
              >
                {f.label}
              </button>
            ))}
          </Reveal>

          <div className="mt-10 columns-2 md:columns-3 lg:columns-4 gap-4 [&>*]:mb-4">
            {shots.map((g, i) => (
              <Reveal key={g.img} delay={(i % 4) * 90}>
                <button
                  onClick={() => setLightbox(i)}
                  className="gallery-item relative block w-full overflow-hidden group bg-charcoal"
                  aria-label={`Open photo: ${g.label}`}
                >
                  <img src={g.img} alt={g.label} className="w-full object-cover" loading="lazy" />
                  <span className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-charcoal/85 text-cream text-xs px-4 py-3 text-left">
                    {g.label}
                  </span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* lightbox */}
      {lightbox !== null && shots[lightbox] ? (
        <div
          className="fixed inset-0 z-[70] bg-charcoal/95 flex items-center justify-center p-4 md:p-10"
          role="dialog"
          aria-modal="true"
          aria-label={shots[lightbox].label}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 h-10 w-10 inline-flex items-center justify-center border border-cream/30 text-cream hover:border-gold hover:text-gold transition-colors"
            onClick={() => setLightbox(null)}
            aria-label="Close photo"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 inline-flex items-center justify-center border border-cream/30 text-cream hover:border-gold hover:text-gold transition-colors text-2xl"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>
          <figure className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={shots[lightbox].img}
              alt={shots[lightbox].label}
              className="w-full max-h-[75vh] object-contain"
            />
            <figcaption className="text-center text-cream/70 text-sm mt-4">
              {shots[lightbox].label}
            </figcaption>
          </figure>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 inline-flex items-center justify-center border border-cream/30 text-cream hover:border-gold hover:text-gold transition-colors text-2xl"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      ) : null}
    </>
  );
}
