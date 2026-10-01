"use client";

 
import { Award, Users, Wheat } from "lucide-react";
import { TEAM, type ViewKey } from "@/lib/site";
import { PageHero, VisitStrip } from "../page-hero";
import { SectionHeading } from "../section-heading";
import { Reveal } from "../reveal";

const VALUES = [
  {
    icon: Award,
    title: "Craft Over Shortcuts",
    text: "Pasta rolled by hand, stocks simmered from bones, bread baked twice a day. It is slower and it costs us more, and it is the only way we know how to cook.",
  },
  {
    icon: Users,
    title: "Everyone Gets A Table",
    text: "Regulars in jeans, first dates in blazers, kids splitting a pizza. The room is friendly on purpose. Fine food does not have to come with stiff shoulders.",
  },
  {
    icon: Wheat,
    title: "Know Your Farmer",
    text: "Beef from Bastrop, greens from Johnson City, honey from the rooftop hives of a guy named Ray. When the farm has a good week, so does the menu.",
  },
];

export function AboutPage({ onNavigate }: { onNavigate: (v: ViewKey) => void }) {
  return (
    <>
      <PageHero
        img="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/85a5b982565d.jpeg"
        eyebrow="Since 2016"
        title="Our Story"
        crumb="About"
        onNavigate={onNavigate}
      />

      {/* story */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-6xl px-6 grid gap-12 lg:grid-cols-2 items-center">
          <Reveal>
            <p className="eyebrow">How It Started</p>
            <h2 className="font-serif text-3xl md:text-[2.6rem] leading-[1.15] text-charcoal mt-3">
              Two Cooks, One Old Oven And A Leap Of Faith
            </h2>
            <span className="mt-4 block h-[3px] w-16 bg-gold" />
            <div className="mt-6 space-y-4 text-[0.95rem] leading-relaxed text-taupe">
              <p>
                Marco spent his twenties in big city kitchens where the burners ran on gas and
                the menus ran on trends. Elena was running a bakery counter downtown and kept
                telling him the best thing he cooked was the flatbread he made on their
                backyard grill. Somewhere between one of those arguments and a bottle of
                Tempranillo, the idea for Ember &amp; Oak showed up.
              </p>
              <p>
                They found a drafty old print shop on Rio Grande Street with good bones and
                terrible wiring. Friends helped tear out the drywall. A stonemason built the
                hearth by hand over six weeks. On opening night the oven smoked so badly that
                the fire department stopped by, which Marco now tells people was our first
                review.
              </p>
              <p>
                Nine years later the smoke detector behaves, the tables number forty eight
                inside and twenty on the patio, and the menu still fits the same idea it always
                did. Cook it over wood, season it simply, and be glad the people came.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150} className="grid grid-cols-2 gap-4">
            <img
              src="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/e58ae7157ad2.jpg"
              alt="The stone oven at full heat"
              className="col-span-2 w-full h-64 md:h-72 object-cover shadow-lg"
              loading="lazy"
            />
            <img
              src="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/c9d504447db9.webp"
              alt="A couple enjoying dinner on the patio"
              className="w-full h-44 md:h-52 object-cover shadow-lg"
              loading="lazy"
            />
            <img
              src="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/fc36968b8855.jpeg"
              alt="Stock pot steaming during prep"
              className="w-full h-44 md:h-52 object-cover shadow-lg"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      {/* values */}
      <section className="section-pad bg-parchment">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="What We Believe"
            title="Three Things We Will Not Budge On"
            text="Plenty has changed since 2016. These three have not."
          />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 130} className="bg-white border border-line p-8 text-center shadow-sm hover:shadow-md transition-shadow">
                <span className="mx-auto h-14 w-14 rounded-full bg-gold/10 text-gold-deep inline-flex items-center justify-center">
                  <v.icon className="h-6 w-6" />
                </span>
                <h3 className="font-serif text-xl text-charcoal mt-5">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-taupe">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* team */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading
            eyebrow="The People"
            title="Meet The Crew"
            text="The faces you will see between the fire and the pass. There are twenty two of us in total, but these three run the show."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 130} className="group">
                <div className="relative overflow-hidden bg-charcoal">
                  <img
                    src={m.img}
                    alt={`${m.name}, ${m.role} at Ember & Oak`}
                    className="h-80 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/90 to-transparent p-5">
                    <p className="font-serif text-xl text-cream">{m.name}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-gold mt-1">{m.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-taupe">{m.bio}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <VisitStrip />
    </>
  );
}
