"use client";

 
import { MENU, type ViewKey } from "@/lib/site";
import { PageHero, VisitStrip } from "../page-hero";
import { Reveal } from "../reveal";
import { cn } from "@/lib/utils";

const CAT_IMAGES: Record<string, { src: string; alt: string }> = {
  starters: {
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/5d1929f49ae4.jpeg",
    alt: "Crispy calamari plated at the pass",
  },
  mains: {
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/890950f5c084.jpg",
    alt: "Sliced ribeye resting on a carving board",
  },
  desserts: {
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/2666e20bd778.jpg",
    alt: "Chocolate ember cake with ice cream",
  },
  drinks: {
    src: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/96982ad84294.jpg",
    alt: "A cocktail being poured at the bar",
  },
};

export function MenuPage({ onNavigate }: { onNavigate: (v: ViewKey) => void }) {
  return (
    <>
      <PageHero
        img="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/0a73e53ef89d.jpg"
        eyebrow="Straight From The Fire"
        title="Our Menu"
        crumb="Menu"
        onNavigate={onNavigate}
      />

      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="max-w-2xl mx-auto text-center">
            <p className="eyebrow">Eat Well</p>
            <h2 className="font-serif text-3xl md:text-[2.6rem] text-charcoal mt-3 leading-[1.15]">
              Cooked Simply, Seasoned Honestly
            </h2>
            <span className="mt-4 h-[3px] w-16 bg-gold inline-block" />
            <p className="mt-5 text-taupe text-[0.95rem] leading-relaxed">
              The menu follows the seasons, so a few things move on and off through the year.
              Prices include our kitchen&#39;s love for butter and fire. Tell your server about
              allergies and we will take good care of you.
            </p>
          </Reveal>

          <div className="mt-14 space-y-16">
            {MENU.map((cat, ci) => (
              <div key={cat.id} className="grid gap-10 lg:grid-cols-[380px_1fr] items-start">
                <Reveal className={cn(ci % 2 === 1 && "lg:order-2")}>
                  <div className="relative">
                    <img
                      src={CAT_IMAGES[cat.id].src}
                      alt={CAT_IMAGES[cat.id].alt}
                      className="w-full h-72 lg:h-[420px] object-cover shadow-lg"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 border-[10px] border-white/15 m-3 pointer-events-none" />
                  </div>
                  <div className="mt-5 text-center lg:text-left">
                    <h3 className="font-serif text-2xl md:text-3xl text-charcoal">{cat.label}</h3>
                    <p className="font-script text-2xl text-gold-deep mt-1">{cat.note}</p>
                  </div>
                </Reveal>

                <Reveal delay={140} className={cn(ci % 2 === 1 && "lg:order-1")}>
                  <ul className="grid gap-x-10 gap-y-7 md:grid-cols-2">
                    {cat.items.map((item) => (
                      <li key={item.name} className="bg-white/60 border border-line p-5 hover:border-gold/60 transition-colors">
                        <div className="flex items-baseline text-charcoal">
                          <h4 className="font-serif text-lg leading-snug">
                            {item.name}
                            {item.tag ? (
                              <span className="ml-2 align-middle inline-block bg-gold/15 text-gold-deep text-[0.6rem] font-sans font-bold uppercase tracking-[0.12em] px-2 py-0.5 whitespace-nowrap">
                                {item.tag}
                              </span>
                            ) : null}
                          </h4>
                          <span className="price-leader" aria-hidden="true" />
                          <span className="font-serif text-lg text-gold-deep whitespace-nowrap">{item.price}</span>
                        </div>
                        {item.desc ? (
                          <p className="text-sm text-taupe mt-2 leading-relaxed">{item.desc}</p>
                        ) : null}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            ))}
          </div>

          <Reveal className="mt-16 text-center">
            <p className="text-sm text-taupe max-w-xl mx-auto leading-relaxed">
              A heads up for anyone counting: an automatic 20% gratuity is added to parties of
              six or more. Everything is cooked to order, so a well done ribeye takes a few
              minutes longer. It is worth it, but if you are in a hurry, the salmon is your
              friend.
            </p>
          </Reveal>
        </div>
      </section>

      <VisitStrip />
    </>
  );
}
