"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { HomePage } from "@/components/site/pages/home";
import { AboutPage } from "@/components/site/pages/about";
import { MenuPage } from "@/components/site/pages/menu-page";
import { GalleryPage } from "@/components/site/pages/gallery";
import { ReservePage } from "@/components/site/pages/reserve";
import { ContactPage } from "@/components/site/pages/contact";
import { NAV_ITEMS, VIEW_TITLES, type ViewKey } from "@/lib/site";
import { cn } from "@/lib/utils";

const VIEWS: Record<ViewKey, (p: { onNavigate: (v: ViewKey) => void }) => React.ReactElement> = {
  home: HomePage,
  about: AboutPage,
  menu: MenuPage,
  gallery: GalleryPage,
  reserve: ReservePage,
  contact: ContactPage,
};

const HASH_TO_VIEW: Record<string, ViewKey> = Object.fromEntries(
  NAV_ITEMS.map((n) => [n.hash, n.key])
);
const VIEW_TO_HASH: Record<ViewKey, string> = Object.fromEntries(
  NAV_ITEMS.map((n) => [n.key, n.hash])
);

export default function App() {
  const [view, setView] = useState<ViewKey>("home");
  const [showTop, setShowTop] = useState(false);

  // Sync view with the URL hash so browser back/forward and deep links work.
  useEffect(() => {
    const fromHash = () => {
      const key = HASH_TO_VIEW[window.location.hash] ?? "home";
      setView(key);
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  // Reflect the current page in the document title.
  useEffect(() => {
    document.title = VIEW_TITLES[view];
  }, [view]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = useCallback((v: ViewKey) => {
    if (v === "home" && window.location.hash === "" ) {
      setView("home");
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
      return;
    }
    const targetHash = VIEW_TO_HASH[v];
    if (window.location.hash === targetHash) {
      setView(v);
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    } else {
      window.location.hash = targetHash; // triggers hashchange handler
    }
  }, []);

  const Page = VIEWS[view];

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader active={view} onNavigate={navigate} />
      <main className="flex-1">
        <Page onNavigate={navigate} />
      </main>
      <SiteFooter onNavigate={navigate} />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "to-top",
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
