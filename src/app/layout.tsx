import type { Metadata } from "next";
import "./globals.css";
import SiteSidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Noir & Or - Restaurant Gastronomique",
  description:
    "Découvrez Noir & Or, un lieu d'exception où la gastronomie rencontre l'élégance. Savourez des plats raffinés, préparés avec des ingrédients de saison et sublimés par le talent de notre chef étoilé. Profitez d'une expérience culinaire unique dans un cadre chic et intimiste, idéal pour un dîner romantique ou une occasion spéciale. Réservez dès maintenant pour une immersion dans l'art de la haute cuisine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <SiteSidebar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
