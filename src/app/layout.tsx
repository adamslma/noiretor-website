import type { Metadata } from "next";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://noiretor.fr"),
  title: { default: "Noir & Or — Table française à Paris", template: "%s — Noir & Or" },
  description:
    "Une table française contemporaine près du Palais-Royal, guidée par les saisons, les beaux produits et le plaisir de recevoir.",
  openGraph: {
    title: "Noir & Or — Table française à Paris",
    description: "Cuisine française de saison, salle intime et cave choisie au cœur de Paris.",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/social-card.svg",
        width: 1200,
        height: 630,
        alt: "Noir & Or, table française à Paris",
      },
    ],
  },
  icons: { icon: "/favicon.ico", shortcut: "/favicon.ico", apple: "/favicon.ico" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
