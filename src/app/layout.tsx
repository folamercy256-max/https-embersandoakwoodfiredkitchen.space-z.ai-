import type { Metadata } from "next";
import { Great_Vibes, Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const vibes = Great_Vibes({
  variable: "--font-vibes",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ember & Oak | Wood Fired Kitchen in Austin, TX",
  description:
    "Ember & Oak is a wood fired kitchen on Rio Grande Street in Austin. Steaks, pizza and seasonal plates cooked over oak and mesquite since 2016. Book a table or order at the bar.",
  keywords: ["Ember & Oak", "restaurant Austin", "wood fired kitchen", "steakhouse Austin", "book a table Austin"],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Ember & Oak | Wood Fired Kitchen",
    description: "Honest food cooked over real fire in downtown Austin since 2016.",
    siteName: "Ember & Oak",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${vibes.variable} ${playfair.variable} ${jost.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
