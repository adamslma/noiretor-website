import Link from "next/link";

type Principle = {
  number: string;
  title: string;
  description: string;
};

const PRINCIPLES = [
  {
    number: "01",
    title: "Le produit d’abord",
    description:
      "Nous suivons les arrivages et la saison, avec des assiettes lisibles où chaque ingrédient garde sa voix.",
  },
  {
    number: "02",
    title: "Le geste précis",
    description:
      "Sauces courtes, cuissons franches, assaisonnements justes : la technique soutient le goût sans se montrer.",
  },
  {
    number: "03",
    title: "Une salle vivante",
    description:
      "Un service attentif mais naturel, une lumière douce et le temps nécessaire pour profiter du repas.",
  },
] as const satisfies readonly Principle[];

export default function HomePage() {
  return (
    <main id="contenu" className="overflow-hidden bg-[#eee9df]">
      <section className="relative min-h-[100dvh] bg-[#191815] text-[#f7f3ea]">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-55"
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
          tabIndex={-1}
        >
          <source src="/video-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,transparent_0%,rgba(25,24,21,.2)_38%,rgba(25,24,21,.88)_100%)]" />
        <div className="site-container relative flex min-h-[100dvh] flex-col justify-end pb-12 pt-32 md:pb-16">
          <p className="eyebrow mb-7 text-[#d0ad74]">Table française · Paris Iᵉʳ</p>
          <h1 className="max-w-5xl text-[clamp(4rem,12vw,10rem)] leading-[0.82] tracking-[-0.07em]">
            Noir <i className="font-normal text-[#d0ad74]">&</i> Or
          </h1>
          <div className="mt-9 grid items-end gap-8 border-t border-white/25 pt-6 md:grid-cols-[1fr_auto]">
            <p className="max-w-xl text-base leading-7 text-[#f7f3ea]/82 md:text-lg">
              Une cuisine française contemporaine, guidée par le marché et servie à quelques pas du
              Palais-Royal.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/menu" className="button-light">
                Découvrir la carte
              </Link>
              <Link href="/reservation" className="button-line">
                Réserver
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container py-24 md:py-36">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow text-[#a7793d]">La maison</p>
            <p className="mt-5 text-sm leading-6 text-[#736d63]">
              17 rue du Palais-Royal
              <br />
              Paris, depuis 2019
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-4xl leading-[1.08] sm:text-5xl md:text-7xl">
              Une table de quartier avec le goût des grandes occasions.
            </h2>
            <div className="mt-10 grid gap-8 text-base leading-8 text-[#5e594f] sm:grid-cols-2">
              <p>
                Noir & Or est né d’une idée simple : remettre le plaisir de manger et de recevoir au
                centre de la table. Notre carte avance au rythme des maraîchers, pêcheurs et
                artisans avec lesquels nous travaillons.
              </p>
              <p>
                Le chef compose une cuisine française libre et précise. Les souvenirs du répertoire
                classique rencontrent des sauces légères, des légumes au premier plan et une cave
                qui préfère la personnalité au prestige.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e1dacd] py-24 md:py-32">
        <div className="site-container">
          <div className="mb-16 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow mb-5 text-[#a7793d]">Notre manière</p>
              <h2 className="max-w-3xl text-4xl leading-tight md:text-6xl">
                Ce qui arrive à table compte. La façon aussi.
              </h2>
            </div>
            <Link
              href="/menu"
              className="text-sm font-semibold underline decoration-[#a7793d] underline-offset-8 hover:text-[#a7793d]"
            >
              Voir le menu du moment
            </Link>
          </div>
          <div className="grid border-t border-[#191815]/20 md:grid-cols-3">
            {PRINCIPLES.map((principle, index) => (
              <article
                key={principle.number}
                className={`py-9 md:min-h-80 md:px-8 md:py-10 ${index > 0 ? "border-t border-[#191815]/20 md:border-l md:border-t-0" : ""}`}
              >
                <span className="font-mono text-xs tabular-nums text-[#a7793d]">
                  {principle.number}
                </span>
                <h3 className="mt-10 text-3xl sm:mt-20">{principle.title}</h3>
                <p className="mt-5 max-w-sm text-sm leading-7 text-[#5e594f]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#26231e] py-28 text-[#eee9df] md:py-40">
        <div className="absolute right-0 top-0 h-full w-2/5 bg-[radial-gradient(circle_at_center,rgba(167,121,61,.22),transparent_68%)]" />
        <div className="site-container relative grid gap-16 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="eyebrow mb-6 text-[#d0ad74]">Le menu dégustation</p>
            <blockquote className="font-serif text-4xl leading-[1.15] tracking-[-0.04em] md:text-6xl">
              “Cinq temps pour raconter la saison, sans détour.”
            </blockquote>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-sm leading-7 text-[#eee9df]/65">
              Le soir, laissez la cuisine choisir : cinq assiettes, quelques surprises et un accord
              de cave disponible sur demande.
            </p>
            <div className="mt-8 flex items-baseline justify-between border-t border-white/20 pt-4">
              <span className="text-sm">Menu en cinq temps</span>
              <span className="font-mono text-xl tabular-nums text-[#d0ad74]">89 €</span>
            </div>
          </div>
        </div>
      </section>

      <section className="site-container py-24 md:py-36">
        <div className="grid gap-12 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow mb-5 text-[#a7793d]">Palais-Royal</p>
            <h2 className="text-5xl leading-[1.05] md:text-7xl">
              À l’écart du bruit, au cœur de Paris.
            </h2>
          </div>
          <div className="md:pl-16">
            <p className="max-w-md text-base leading-8 text-[#5e594f]">
              Déjeuner du mardi au samedi, dîner du mardi au samedi. Pour les groupes de plus de
              huit personnes, notre équipe imagine un menu dédié.
            </p>
            <Link href="/reservation" className="button-primary mt-8">
              Choisir une date
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
