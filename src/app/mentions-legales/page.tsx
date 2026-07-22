import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Mentions légales",
  description: "Mentions légales du site de démonstration Noir & Or.",
  path: "/mentions-legales",
  index: false,
});

export default function LegalNoticePage() {
  return (
    <main
      id="contenu"
      className="min-h-screen bg-[#191815] px-6 pb-24 pt-32 text-[#eee9df] md:px-12 md:pt-40"
    >
      <div className="mx-auto max-w-4xl space-y-14">
        <header>
          <p className="eyebrow mb-5 text-[#d0ad74]">Informations juridiques</p>
          <h1 className="text-5xl md:text-7xl">Mentions légales</h1>
        </header>

        <section className="border-l-2 border-[#d0ad74] bg-white/[0.04] p-6 md:p-8">
          <h2 className="text-2xl text-[#d0ad74]">Site et établissement fictifs</h2>
          <p className="mt-4 leading-7 text-[#eee9df]/75">
            Le présent site est un concept de démonstration imaginé et réalisé par{" "}
            <a
              href="https://asdigitalagency.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[#d0ad74]"
            >
              AS Digital
            </a>
            . « Noir & Or » est un restaurant fictif : ce site n’est associé, affilié ou rattaché à
            aucun établissement de restauration réel.
          </p>
          <p className="mt-4 leading-7 text-[#eee9df]/75">
            Les noms, adresses, coordonnées, menus, prix, horaires et disponibilités sont fictifs et
            fournis uniquement à titre d’illustration. Ils ne constituent ni une offre commerciale
            ni un engagement contractuel.
          </p>
        </section>

        <section className="space-y-4 border-t border-white/15 pt-8">
          <h2 className="text-2xl text-[#d0ad74]">Conception et publication</h2>
          <p className="leading-7 text-[#eee9df]/75">
            Le concept, la direction artistique, les contenus de démonstration et le développement
            du site sont réalisés par AS Digital. Contact et informations professionnelles :{" "}
            <a
              href="https://asdigitalagency.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[#d0ad74]"
            >
              asdigitalagency.fr
            </a>
            .
          </p>
        </section>

        <section className="space-y-4 border-t border-white/15 pt-8">
          <h2 className="text-2xl text-[#d0ad74]">Hébergement</h2>
          <p className="leading-7 text-[#eee9df]/75">
            Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723,
            États-Unis —{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[#d0ad74]"
            >
              vercel.com
            </a>
            .
          </p>
        </section>

        <section className="space-y-4 border-t border-white/15 pt-8">
          <h2 className="text-2xl text-[#d0ad74]">Propriété intellectuelle</h2>
          <p className="leading-7 text-[#eee9df]/75">
            Sauf mention contraire, le concept « Noir & Or », les textes, les éléments graphiques et
            l’interface de démonstration ont été créés par AS Digital. Les médias appartenant à des
            tiers restent la propriété de leurs titulaires respectifs. Toute utilisation doit
            respecter les droits applicables.
          </p>
        </section>

        <section className="space-y-4 border-t border-white/15 pt-8">
          <h2 className="text-2xl text-[#d0ad74]">Responsabilité</h2>
          <p className="leading-7 text-[#eee9df]/75">
            Ce site ne permet pas de contacter un restaurant, de commander un repas ou d’effectuer
            une réservation réelle. AS Digital ne saurait être tenue responsable d’une décision ou
            d’un déplacement fondé sur les contenus fictifs présentés sur cette démonstration.
          </p>
        </section>

        <p className="pt-8 text-xs text-[#eee9df]/40">Dernière mise à jour : 22 juillet 2026</p>
      </div>
    </main>
  );
}
