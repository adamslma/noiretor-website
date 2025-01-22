import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "L'Élégance Gourmande - Restaurant Gastronomique",
  description:
    "Découvrez L'Élégance Gourmande, un lieu d'exception où la gastronomie rencontre l'élégance. Savourez des plats raffinés, préparés avec des ingrédients de saison et sublimés par le talent de notre chef étoilé. Profitez d'une expérience culinaire unique dans un cadre chic et intimiste, idéal pour un dîner romantique ou une occasion spéciale. Réservez dès maintenant pour une immersion dans l'art de la haute cuisine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
