import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-[#191815] px-4 pb-8 pt-20 text-[#eee9df] md:px-10 md:pt-28">
      <div className="mx-auto max-w-[86rem]">
        <div className="grid gap-14 border-b border-white/15 pb-16 md:grid-cols-[1.3fr_.7fr_.7fr] md:pb-20">
          <div>
            <p className="eyebrow mb-5 text-[#d0ad74]">Noir & Or · Paris Iᵉʳ</p>
            <h2 className="max-w-xl text-4xl leading-[1.08] md:text-6xl">
              Le goût du moment, servi avec mesure.
            </h2>
          </div>
          <div className="text-sm leading-7 text-[#eee9df]/70">
            <p className="mb-3 font-semibold text-[#eee9df]">Nous trouver</p>
            <p>
              17 rue du Palais-Royal
              <br />
              75001 Paris
            </p>
            <a href="tel:+33142000000" className="mt-4 inline-block hover:text-[#d0ad74]">
              01 42 00 00 00
            </a>
          </div>
          <div className="text-sm leading-7 text-[#eee9df]/70">
            <p className="mb-3 font-semibold text-[#eee9df]">Service</p>
            <p>
              Du mardi au samedi
              <br />
              12h—14h30 · 19h—23h
            </p>
            <Link
              href="/reservation"
              className="mt-4 inline-block text-[#d0ad74] underline decoration-[#d0ad74]/40 underline-offset-4 hover:text-[#eee9df]"
            >
              Réserver une table
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 pt-7 text-[0.68rem] uppercase tracking-[0.12em] text-[#eee9df]/45 md:flex-row md:items-center md:justify-between">
          <div>
            <p>
              © {new Date().getFullYear()} Noir & Or · Site web créé par{" "}
              <a
                href="https://asdigitalagency.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#eee9df]/70 hover:text-[#d0ad74]"
              >
                AS Digital
              </a>
            </p>
            <p className="mt-2 normal-case tracking-normal text-[#eee9df]/35">
              Concept fictif — ce site n’est associé à aucun restaurant réel.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-3" aria-label="Liens légaux">
            <Link href="/mentions-legales" className="hover:text-[#eee9df]">
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="hover:text-[#eee9df]">
              Confidentialité
            </Link>
            <Link href="/cgu" className="hover:text-[#eee9df]">
              Conditions
            </Link>
            <Link href="/contact" className="hover:text-[#eee9df]">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
