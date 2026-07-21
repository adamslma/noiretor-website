import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "La carte",
  description: "Découvrez la carte de saison, le menu dégustation et une sélection de la cave de Noir & Or.",
};

const sections = [
  {
    number: "01",
    title: "Pour commencer",
    note: "Quelques assiettes qui ouvrent l’appétit.",
    items: [
      ["Poireau grillé, vinaigrette de coquillages, livèche", "16"],
      ["Œuf de plein air, morilles, pain fumé", "19"],
      ["Truite des Pyrénées, betterave, raifort frais", "21"],
      ["Foie gras de canard, rhubarbe, brioche au levain", "24"],
    ],
  },
  {
    number: "02",
    title: "La suite",
    note: "Pêche du jour, viandes françaises et légumes de saison.",
    items: [
      ["Lieu jaune, petits pois, laitue braisée, sauce vin jaune", "34"],
      ["Volaille jaune, asperge blanche, ail des ours", "36"],
      ["Canard de Challans, navet nouveau, jus au poivre", "39"],
      ["Artichaut poivrade, épeautre, vieux comté", "29"],
    ],
  },
  {
    number: "03",
    title: "Pour finir",
    note: "Desserts peu sucrés, fromages bien affinés.",
    items: [
      ["Fraise, oseille, crème crue", "14"],
      ["Chocolat noir, sarrasin, glace au foin", "15"],
      ["Soufflé au citron, praliné amande", "16"],
      ["Fromages de la maison Quatrehomme", "17"],
    ],
  },
];

const wines = [
  ["Champagne · A. Bergère, Origine", "17 / 92"],
  ["Loire · Vacheron, Sancerre 2023", "14 / 68"],
  ["Bourgogne · P. Pillot, Bourgogne blanc 2022", "16 / 79"],
  ["Rhône · Gramenon, Sierra du Sud 2022", "13 / 64"],
  ["Bordeaux · Château Marsau 2019", "15 / 74"],
];

export default function MenuPage() {
  return (
    <main id="contenu" className="bg-[#eee9df] pt-[4.75rem]">
      <header className="site-container pb-20 pt-20 md:pb-28 md:pt-28">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="eyebrow mb-6 text-[#a7793d]">La carte · Printemps—été</p>
            <h1 className="text-[clamp(4.5rem,11vw,9rem)] leading-[0.85] tracking-[-0.065em]">À table.</h1>
          </div>
          <div className="md:col-span-4">
            <p className="max-w-md text-sm leading-7 text-[#5e594f]">Notre carte évolue selon les arrivages. Les intitulés peuvent changer, l’esprit reste le même : des produits nets, des sauces précises et une cuisine généreuse.</p>
          </div>
        </div>
      </header>

      <div className="site-container"><div className="rule" /></div>

      <section className="site-container py-20 md:py-28">
        <div className="space-y-24 md:space-y-32">
          {sections.map((section, sectionIndex) => (
            <article key={section.title} className="grid gap-10 md:grid-cols-12">
              <div className={`md:col-span-4 ${sectionIndex % 2 ? "md:col-start-2" : ""}`}>
                <span className="font-mono text-xs tabular-nums text-[#a7793d]">{section.number}</span>
                <h2 className="mt-4 text-4xl md:text-5xl">{section.title}</h2>
                <p className="mt-4 max-w-xs text-sm leading-6 text-[#736d63]">{section.note}</p>
              </div>
              <div className={`md:col-span-7 ${sectionIndex % 2 ? "md:col-start-6" : "md:col-start-6"}`}>
                <ul className="border-t border-[#191815]/25">
                  {section.items.map(([name, price]) => (
                    <li key={name} className="grid grid-cols-[1fr_auto] gap-6 border-b border-[#191815]/16 py-5">
                      <span className="font-serif text-lg leading-6 md:text-xl">{name}</span>
                      <span className="font-mono text-sm tabular-nums text-[#a7793d]">{price} €</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid bg-[#191815] text-[#eee9df] lg:min-h-[46rem] lg:grid-cols-[.82fr_1.18fr]">
        <div className="relative min-h-[26rem] overflow-hidden lg:min-h-full">
          <video className="absolute inset-0 h-full w-full object-cover object-[68%_center] opacity-75" src="/wine.mp4" autoPlay loop muted playsInline aria-hidden="true" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#191815]/70 via-transparent to-transparent" />
          <p className="eyebrow absolute bottom-8 left-8 text-[#eee9df]/70 md:bottom-12 md:left-12">La cave · 230 références</p>
        </div>
        <div className="flex items-center px-6 py-20 md:px-14 lg:px-20">
          <div className="w-full max-w-2xl">
            <p className="eyebrow mb-5 text-[#d0ad74]">À boire</p>
            <h2 className="text-5xl md:text-7xl">Des vins qui ont quelque chose à dire.</h2>
            <p className="mt-7 max-w-lg text-sm leading-7 text-[#eee9df]/60">Notre cave rassemble des vigneronnes et vignerons proches de leurs sols. Voici quelques verres du moment — demandez-nous le livre de cave pour la sélection complète.</p>
            <ul className="mt-10 border-t border-white/20">
              {wines.map(([name, price]) => (
                <li key={name} className="grid grid-cols-[1fr_auto] gap-5 border-b border-white/15 py-4 text-sm"><span>{name}</span><span className="font-mono tabular-nums text-[#d0ad74]">{price} €</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#e1dacd] py-24 md:py-32">
        <div className="site-container grid gap-10 md:grid-cols-2 md:items-end">
          <div><p className="eyebrow mb-5 text-[#a7793d]">Menus</p><h2 className="text-4xl leading-tight md:text-6xl">Le midi en trois temps. Le soir en cinq.</h2></div>
          <div className="md:pl-16">
            <div className="border-t border-[#191815]/20">
              <div className="flex justify-between border-b border-[#191815]/20 py-4"><span>Déjeuner · trois temps</span><span className="font-mono tabular-nums text-[#a7793d]">49 €</span></div>
              <div className="flex justify-between border-b border-[#191815]/20 py-4"><span>Dîner · cinq temps</span><span className="font-mono tabular-nums text-[#a7793d]">89 €</span></div>
            </div>
            <p className="mt-5 text-xs leading-5 text-[#736d63]">Allergies et régimes : signalez-les au moment de réserver. Une adaptation végétale est possible avec 48 h de préavis.</p>
            <Link href="/reservation" className="button-primary mt-8">Réserver une table</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
